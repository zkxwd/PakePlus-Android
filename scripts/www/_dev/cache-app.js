客观题库 · C语言 — 单文件应用逻辑
   数据来自 data.js（window.QUIZ_DATA），进度存 localStorage。 */
(() => {
  'use strict';

  const DATA = (window.QUIZ_DATA && window.QUIZ_DATA.questions) || [];
  const BLOCKED = (window.QUIZ_DATA && window.QUIZ_DATA.blocked) || [];
  const STORE_KEY = 'cquiz.v1';
  const LETTERS = 'ABCD';
  const EXAM_COUNT = 20;
  const EXAM_MINUTES = 30;

  /* ---------- 工具 ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (id) => document.getElementById(id);
  const pad2 = (n) => String(n).padStart(2, '0');
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  const todayKey = () => {
    const d = new Date();
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  };
  const WEEK = ['日', '一', '二', '三', '四', '五', '六'];
  const dateLabel = () => {
    const d = new Date();
    return `${d.getFullYear()}.${pad2(d.getMonth() + 1)}.${pad2(d.getDate())}`;
  };
  const weekdayLabel = () => `星期${WEEK[new Date().getDay()]}`;

  /* 稳定的伪随机：同一天得到同一份题 */
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const seedOf = (str) => {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  };
  function shuffle(arr, rnd) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ---------- 持久化 ---------- */
  const blank = () => ({ v: 1, answers: {}, wrong: {}, exams: [], daily: {}, seen: {}, chap: { sel: [], type: 'all' } });
  let state = blank();

  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        state = Object.assign(blank(), s);
        state.answers = s.answers || {};
        state.wrong = s.wrong || {};
        state.exams = s.exams || [];
        state.daily = s.daily || {};
        state.chap = s.chap || { sel: [], type: 'all' };
        if (!Array.isArray(state.chap.sel)) state.chap.sel = [];
        if (!state.chap.type) state.chap.type = 'all';
        ui.chSel = state.chap.sel.filter((k) => CH_ORDER.includes(k));
        ui.chType = state.chap.type;
      }
    } catch (e) { console.warn('读取进度失败，使用空进度', e); }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
    catch (e) { console.warn('保存失败', e); }
  }

  /* ---------- 题库索引 ---------- */
  const byId = new Map(DATA.map((q) => [q.id, q]));
  const judges = DATA.filter((q) => q.type === 'judge');
  const choices = DATA.filter((q) => q.type === 'choice');
  const ordered = DATA.slice().sort((a, b) =>
    a.section - b.section || a.number - b.number);

  /* ---------- 章节 ---------- */
  const CH_NAMES = {
    1: '基础知识', 2: '顺序结构', 3: '选择结构', 4: '循环结构', 5: '函数',
    6: '存储类型和预编译', 7: '数组', 8: '指针', 9: '结构体', 10: '文件', 0: '其他',
  };
  const CH_ORDER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
  const chKey = (q) => (Number.isInteger(q.ch) ? q.ch : 0);
  const chPool = (k, type) => DATA.filter((q) => chKey(q) === k
    && (type === 'all' || !type || q.type === type));
  const chList = () => CH_ORDER.filter((k) => chPool(k, 'all').length)
    .map((k) => ({ k, name: CH_NAMES[k], qs: chPool(k, 'all') }));

  const rec = (id) => state.answers[id];
  const isMastered = (id) => !!(rec(id) && rec(id).ok);
  const answeredCount = () => DATA.filter((q) => !!rec(q.id)).length;
  const masteredCount = () => DATA.filter((q) => isMastered(q.id)).length;
  const wrongList = () => Object.keys(state.wrong)
    .filter((id) => byId.has(id))
    .map((id) => ({ q: byId.get(id), m: state.wrong[id] }))
    .sort((a, b) => b.m.t - a.m.t);

  function streak() {
    const rows = Object.keys(state.answers)
      .map((id) => state.answers[id])
      .sort((a, b) => b.t - a.t);
    let n = 0;
    for (const r of rows) { if (r.ok) n++; else break; }
    return n;
  }
  function accuracy() {
    const rows = Object.values(state.answers);
    if (!rows.length) return 0;
    return Math.round((rows.filter((r) => r.ok).length / rows.length) * 100);
  }

  /* ---------- 记录作答 ---------- */
  function recordAnswer(q, picked, correct) {
    const now = Date.now();
    const prev = state.answers[q.id];
    state.answers[q.id] = {
      a: picked,
      ok: !!correct,
      t: now,
      n: (prev ? prev.n || 1 : 0) + 1,
    };
    if (correct) {
      delete state.wrong[q.id];
    } else {
      const w = state.wrong[q.id] || { n: 0 };
      state.wrong[q.id] = { a: picked, t: now, n: (w.n || 0) + 1 };
    }
    const d = state.daily[todayKey()];
    if (d && d.ids.includes(q.id) && !d.done.includes(q.id)) d.done.push(q.id);
    save();
  }

  /* ---------- 视图状态 ---------- */
  const ui = {
    tab: 'home',
    session: null,
    toastTimer: 0,
    clock: null,
    chSel: [],
    chType: 'all',
  };

  function saveChap() {
    state.chap = { sel: ui.chSel.slice(), type: ui.chType };
    save();
  }

  function toast(msg) {
    const t = el('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(ui.toastTimer);
    ui.toastTimer = setTimeout(() => t.classList.remove('show'), 1900);
  }

  /* ---------- 会话构造 ---------- */
  function sessionOf(kind, items, extra = {}) {
    return Object.assign({
      kind, items, i: 0, picks: {}, revealed: {}, done: false,
      started: Date.now(), endsAt: 0,
    }, extra);
  }

  function startDaily() {
    const key = todayKey();
    let d = state.daily[key];
    const rnd = mulberry32(seedOf(key));
    if (!d) {
      const ids = shuffle(judges, rnd).slice(0, 10).map((q) => q.id)
        .concat(shuffle(choices, rnd).slice(0, 10).map((q) => q.id));
      d = { ids, done: [] };
      state.daily[key] = d;
      save();
      ui.session = sessionOf('daily', d.ids.map((id) => byId.get(id)).filter(Boolean));
      ui.session.i = 0;
    } else {
      const items = d.ids.map((id) => byId.get(id)).filter(Boolean);
      ui.session = sessionOf('daily', items);
      const firstOpen = items.findIndex((q) => !d.done.includes(q.id));
      ui.session.i = firstOpen < 0 ? 0 : firstOpen;
    }
    ui.session.doneIds = d.done;
    go('practice');
  }

  function startSeq() {
    const firstOpen = ordered.findIndex((q) => !rec(q.id));
    ui.session = sessionOf('seq', ordered);
    ui.session.i = firstOpen < 0 ? 0 : firstOpen;
    go('practice');
  }

  function startDrill(type) {
    const pool = type === 'judge' ? judges : choices;
    const rnd = mulberry32(Date.now() & 0x7fffffff);
    ui.session = sessionOf('drill', shuffle(pool, rnd).slice(0, 20), { type });
    go('practice');
  }

  function startWrong() {
    const items = wrongList().map((x) => x.q);
    if (!items.length) { toast('错题本是空的'); return; }
    ui.session = sessionOf('wrong', items);
    go('practice');
  }

  function startExam() {
    const rnd = mulberry32(Date.now() & 0x7fffffff);
    const items = shuffle(judges, rnd).slice(0, EXAM_COUNT / 2)
      .concat(shuffle(choices, rnd).slice(0, EXAM_COUNT / 2));
    ui.session = sessionOf('exam', items, {
      endsAt: Date.now() + EXAM_MINUTES * 60 * 1000,
      result: null,
    });
    go('practice');
  }

  function startChapter() {
    const sel = ui.chSel.filter((k) => chPool(k, 'all').length);
    if (!sel.length) { toast('先选至少一个章节'); return; }
    const pool = DATA.filter((q) => sel.includes(chKey(q))
      && (ui.chType === 'all' || q.type === ui.chType));
    if (!pool.length) { toast('这些章节里没有这个题型的题'); return; }
    const rnd = mulberry32(Date.now() & 0x7fffffff);
    const items = shuffle(pool, rnd).slice(0, Math.min(20, pool.length));
    ui.session = sessionOf('chapter', items, { chapters: sel.slice(), type: ui.chType });
    go('practice');
  }

  function go(tab) {
    ui.tab = tab;
    if (ui.clock) { clearInterval(ui.clock); ui.clock = null; }
    render();
  }

  /* ---------- 渲染：页眉与页签 ---------- */
  function renderMasthead() {
    const total = DATA.length;
    const mast = el('masthead');
    const masteryRaw = masteredCount();
    const mastery = total ? Math.round((masteryRaw / total) * 100) : 0;
    const masteryText = masteryRaw > 0 && mastery < 1 ? '<1' : String(mastery);
    mast.innerHTML = `
      <div class="mast-title">
        <h1>客观题库</h1>
        <span class="mast-sub">C 语言 · 客观题</span>
      </div>
      <span class="mast-mark">${esc(dateLabel())}</span>
      <div class="mast-meta">
        <span>题量 <b>${total}</b></span>
        <span>判断 <b>${judges.length}</b></span>
        <span>选择 <b>${choices.length}</b></span>
        <span>掌握 <b>${masteryText}%</b></span>
      </div>`;
  }

  const TABS = [
    { k: 'home', t: '首页', tk: 'I' },
    { k: 'wrong', t: '错题', tk: 'II' },
    { k: 'stats', t: '统计', tk: 'III' },
    { k: 'about', t: '说明', tk: 'IV' },
  ];

  function renderTabs() {
    el('tabbar').innerHTML = TABS.map((t) => `
      <button class="tab" data-act="tab" data-tab="${t.k}"
        ${ui.tab === t.k ? 'aria-current="page"' : ''}>
        <span class="dot" aria-hidden="true"></span>
        <span class="tt">${t.t}</span>
      </button>`).join('');
  }

  /* ---------- 渲染：首页 ---------- */
  function renderHome() {
    const total = DATA.length;
    const done = answeredCount();
    const d = state.daily[todayKey()];
    const dailyTotal = d ? d.ids.length : 20;
    const dailyDone = d ? d.done.length : 0;
    const pct = Math.round((dailyDone / dailyTotal) * 100);
    const mastery = total ? Math.round((masteredCount() / total) * 100) : 0;

    return `
      <div class="today">
        <div class="today-head">
          <h2>今日练习</h2>
          <p>${dailyDone >= dailyTotal ? '今天这一份已经做完了。' : `按日期抽 ${dailyTotal} 题：判断 10 · 选择 10`}</p>
          <div class="today-date">
            <b>${String(dailyDone).padStart(2, '0')}<span style="color:var(--ink-3);font-size:13px">/${dailyTotal}</span></b>
            ${weekdayLabel()}
          </div>
        </div>
        <div class="gauge">
          <div class="gauge-row"><span>本日进度</span><b>${pct}%</b></div>
          <div class="rule-bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100">
            <i style="width:${pct}%"></i>
          </div>
        </div>
        <div class="today-actions">
          <button class="btn solid wide" data-act="daily">
            ${dailyDone === 0 ? '开始今日练习' : dailyDone >= dailyTotal ? '再做一遍' : '继续作答'}
          </button>
        </div>
      </div>

      <div class="eyebrow">练习模式</div>
      <div class="modes">
        <button class="mode" data-act="seq">
          <span class="mode-t">顺序练习</span>
          <span class="mode-d">全部 ${total} 题过一遍，接着上次停下的地方</span>
          <span class="mode-k">已答 ${done} / ${total}</span>
        </button>
        <button class="mode" data-act="drill" data-type="judge">
          <span class="mode-t">判断题专项</span>
          <span class="mode-d">只练对错，每组抽 20 题</span>
          <span class="mode-k">题池 ${judges.length} 题</span>
        </button>
        <button class="mode" data-act="drill" data-type="choice">
          <span class="mode-t">选择题专项</span>
          <span class="mode-d">只练四选一，每组抽 20 题</span>
          <span class="mode-k">题池 ${choices.length} 题</span>
        </button>
        <button class="mode" data-act="exam">
          <span class="mode-t">模拟考试</span>
          <span class="mode-d">判断 10 + 选择 10，按时交卷</span>
          <span class="mode-k split"><span>20 题</span><span>${EXAM_MINUTES} 分钟</span></span>
        </button>
        <button class="mode span2" data-act="chapters">
          <span class="mode-t">章节练习</span>
          <span class="mode-d">按章节挑题练，可多选${ui.chSel.length ? ` · 已选 ${ui.chSel.length} 章` : ''}</span>
          <span class="mode-k split"><span>${chList().length} 章</span><span>每组 20 题</span></span>
        </button>
        <button class="mode span2" data-act="wrong">
          <span class="mode-t">错题重做</span>
          <span class="mode-d">${wrongList().length ? '把做错过的题重新过一遍，答对即移出' : '错题本还是空的，做错一题就会出现在这里'}</span>
          <span class="mode-k">${wrongList().length ? `待重做 ${wrongList().length} 题` : '暂无错题'}</span>
        </button>
      </div>

      <div class="eyebrow">掌握度</div>
      <div class="block today-mastery">
        <div class="gauge-row"><span>已掌握 <b>${masteredCount()}</b> / ${total}</span><b>${mastery}%</b></div>
        <div class="rule-bar blue" role="progressbar" aria-valuenow="${mastery}" aria-valuemin="0" aria-valuemax="100">
          <i style="width:${mastery}%"></i>
        </div>
        <p class="hint" style="margin:8px 0 0">掌握 = 最近一次作答正确，且之后没有被判错。</p>
      </div>`;
  }

  /* ---------- 渲染：题目 ---------- */
  function stemHTML(q) {
    let s = esc(q.stem || '');
    s = s.replace(/(_{2,}|＿{2,})/g, '<span class="gap"></span>');
    return s.replace(/\n/g, '<br>');
  }

  function codeHTML(q) {
    if (!q.code || !q.code.length) return '';
    return `<pre class="qcode">${esc(q.code.join('\n'))}</pre>`;
  }

  function optionsHTML(q, sess, force) {
    const picked = sess.picks[q.id];
    const revealed = force || (sess.kind !== 'exam' && picked !== undefined);
    const isJudge = q.type === 'judge';
    const opts = isJudge
      ? [{ key: 'T', text: '对' }, { key: 'F', text: '错' }]
      : q.options;
    const rows = opts.map((o) => {
      let st = '';
      if (revealed) {
        if (o.key === q.answer) st = 'ok';
        else if (o.key === picked) st = 'bad';
      } else if (picked === o.key) {
        st = 'pick';
      }
      const isKey = revealed && o.key === q.answer;
      const bub = `<span class="bub" aria-hidden="true">${st === 'ok' ? '✓' : st === 'bad' ? '✕' : ''}</span>`;
      if (isJudge) {
        return `<button class="opt judge-cell${isKey ? ' is-key' : ''}" data-act="pick" data-key="${o.key}"
            data-s="${st}" ${revealed ? 'disabled' : ''}>
          <span class="t">${esc(o.text)}</span>
          <span class="kk">${esc(o.key)}</span>
          ${bub}
        </button>`;
      }
      return `<button class="opt${isKey ? ' is-key' : ''}" data-act="pick" data-key="${o.key}"
          data-s="${st}" ${revealed ? 'disabled' : ''}>
        ${bub}
        <span class="k">${esc(o.key)}</span>
        <span class="t">${esc(o.text)}</span>
        <span class="ans">${isKey ? '答案' : ''}</span>
      </button>`;
    }).join('');
    return `<div class="opts${isJudge ? ' judge' : ''}" role="group" aria-label="选项">${rows}</div>`;
  }

  function verdictHTML(q, sess, force) {
    const picked = sess.picks[q.id];
    if (force) {
      const ansText = q.type === 'judge' ? (q.answer === 'T' ? '对' : '错') : q.answer;
      if (picked === undefined) {
        return `<div class="verdict note">
          <div class="v-row"><span class="stamp">未答</span><span>这题没有作答</span><span class="v-ans">正确选项 ${esc(ansText)}</span></div>
          <p>${esc(q.expl || '（本题暂无解析）')}</p>${chLine(q)}
        </div>`;
      }
      const ok = picked === q.answer;
      return `<div class="verdict ${ok ? 'ok' : 'bad'}">
        <div class="v-row"><span class="stamp">${ok ? '正确' : '错误'}</span>
          <span>你的答案 ${esc(q.type === 'judge' ? (picked === 'T' ? '对' : '错') : picked)}</span>
          <span class="v-ans">正确选项 ${esc(ansText)}</span></div>
        <p>${esc(q.expl || '（本题暂无解析）')}</p>${chLine(q)}
      </div>`;
    }
    if (picked === undefined || sess.kind === 'exam') return '';
    const ok = picked === q.answer;
    const ansText = q.type === 'judge' ? (q.answer === 'T' ? '对' : '错') : q.answer;
    return `<div class="verdict ${ok ? 'ok' : 'bad'}">
      <div class="v-row">
        <span class="stamp">${ok ? '正确' : '错误'}</span>
        <span>${ok ? '这题答对了' : '这题答错了'}</span>
        <span class="v-ans">正确选项 ${esc(ansText)}</span>
      </div>
      <p>${esc(q.expl || '（本题暂无解析）')}</p>${chLine(q)}
    </div>`;
  }

  function omrHTML(sess) {
    const cells = sess.items.map((q, idx) => {
      let st = '';
      const p = sess.picks[q.id];
      if (sess.kind === 'exam') {
        st = p !== undefined ? 'done' : '';
      } else if (p !== undefined) {
        st = p === q.answer ? 'ok' : 'bad';
      }
      if (idx === sess.i && !sess.done) st = 'cur';
      return `<button class="omr-cell" data-act="jump" data-i="${idx}" data-s="${st}" data-cur="${idx === sess.i ? 1 : 0}"
        aria-label="第 ${idx + 1} 题"><span class="omr-n">${idx + 1}</span><span class="omr-b">${st === 'cur' ? '' : ''}</span></button>`;
    }).join('');
    return `<div class="omr" aria-label="答题卡">${cells}</div>`;
  }

  /* 章节练习时在题目上方标出所选章节，做题时知道自己在练什么 */
  function chBand(sess) {
    if (sess.kind !== 'chapter' || !sess.chapters || !sess.chapters.length) return '';
    const t = sess.chapters.map((n) => CH_NAMES[n] || '其他').join(' / ');
    return `<div class="chband"><span>章节练习</span>${esc(t)}</div>`;
  }

  /* 本题所属章节，出现在解析栏底部 */
  function chLine(q) {
    const n = typeof q.ch === 'number' ? q.ch : 0;
    return `<div class="v-ch">${n ? '第 ' + n + ' 章 · ' : ''}${esc(CH_NAMES[n] || '其他')}</div>`;
  }

  function hudHTML(sess) {
    if (sess.kind !== 'exam') return '';
    const left = Math.max(0, sess.endsAt - Date.now());
    const mm = Math.floor(left / 60000);
    const ss = Math.floor((left % 60000) / 1000);
    const answeredN = Object.keys(sess.picks).length;
    return `<div class="hud">
      <span>模拟考试</span>
      <span class="prog">已答 ${answeredN}/${sess.items.length}</span>
      <span class="clock${left < 5 * 60000 ? ' warn' : ''}" id="clock">${mm}:${pad2(ss)}</span>
    </div>`;
  }

  function renderPractice() {
    const sess = ui.session;
    if (!sess) { ui.tab = 'home'; return renderHome(); }

    if (sess.kind === 'review') return renderReview(sess);
    if (sess.done && sess.kind === 'exam') return renderExamResult(sess);
    if (sess.done) return renderDone(sess);

    const q = sess.items[sess.i];
    if (!q) return '<div class="empty">这一份练习没有题目。</div>';
    const tag = q.type === 'judge' ? '判断' : '选择';
    const isLast = sess.i === sess.items.length - 1;

    return `<div class="practice">
      ${hudHTML(sess)}${chBand(sess)}
      <div class="qhead">
        <span class="qno">${esc(q.id)}</span>
        <span class="qtag">${tag}</span>
        <span class="qpts">${sess.i + 1} / ${sess.items.length}${q.points ? ' · ' + q.points + '分' : ''}</span>
      </div>
      ${sess.items.length > 2 ? `<div class="omr-wrap">${omrHTML(sess)}</div>` : ''}
      <p class="qstem">${stemHTML(q)}</p>
      ${codeHTML(q)}
      ${optionsHTML(q, sess)}
      ${verdictHTML(q, sess)}
      <div class="footbar">
        <button class="btn ghost" data-act="prev" ${sess.i === 0 ? 'disabled' : ''}>上一题</button>
        ${sess.kind === 'exam'
          ? `<button class="btn solid wide" data-act="submit">交卷</button>`
          : `<button class="btn solid wide" data-act="next">${isLast ? '完成' : '下一题'}</button>`}
      </div>
    </div>`;
  }

  /* 交卷后的逐题解析：不判分、不记录，只回看 */
  function renderReview(sess) {
    const q = sess.items[sess.i];
    if (!q) return '<div class="empty">没有可解析的题目。</div>';
    const tag = q.type === 'judge' ? '判断' : '选择';
    const isLast = sess.i === sess.items.length - 1;
    return `<div class="practice">
      <div class="hud"><span>解析浏览</span>
        <span class="prog">答对 ${sess.items.filter((x) => sess.picks[x.id] === x.answer).length} / ${sess.items.length}</span>
        <span class="clock" style="font-variant-numeric:tabular-nums">${sess.i + 1}</span></div>
      <div class="qhead">
        <span class="qno">${esc(q.id)}</span>
        <span class="qtag">${tag}</span>
        <span class="qpts">${sess.i + 1} / ${sess.items.length}</span>
      </div>
      ${sess.items.length > 2 ? `<div class="omr-wrap">${omrHTML(sess)}</div>` : ''}
      <p class="qstem">${stemHTML(q)}</p>
      ${codeHTML(q)}
      ${optionsHTML(q, sess, true)}
      ${verdictHTML(q, sess, true)}
      <div class="footbar">
        <button class="btn ghost" data-act="rprev" ${sess.i === 0 ? 'disabled' : ''}>上一题</button>
        <button class="btn solid wide" data-act="rnext">${isLast ? '结束浏览' : '下一题'}</button>
      </div>
    </div>`;
  }

  const KIND_LABEL = { daily: '今日练习', drill: '专项练习', seq: '顺序练习', wrong: '错题重做', review: '解析浏览', chapter: '章节练习' };

  function renderDone(sess) {
    const total = sess.items.length;
    const right = sess.items.filter((q) => sess.picks[q.id] === q.answer).length;
    const pct = Math.round((right / total) * 100);
    return `<div class="practice">
      <div class="grade">
        <div class="stamp">已交卷</div>
        <div class="score">${right}<small>/${total}</small></div>
        <div class="cap">${KIND_LABEL[sess.kind] || '本组'} · 正确率 ${pct}%</div>
        <div class="thin"></div>
        <dl class="kv">
          <dt>答对</dt><dd>${right} 题</dd>
          <dt>答错</dt><dd>${total - right} 题</dd>
        </dl>
      </div>
      <div class="eyebrow">接下来</div>
      <div class="stack">
        ${sess.kind === 'chapter'
          ? `<button class="btn solid" data-act="again">再来一组这些章节</button>
             <button class="btn ghost" data-act="chapters">换章节</button>
             <button class="btn ghost" data-act="home">回到首页</button>`
          : `<button class="btn solid" data-act="again">再做一组</button>
             <button class="btn ghost" data-act="wrong">重做错题</button>
             <button class="btn ghost" data-act="home">回到首页</button>`}
      </div>
    </div>`;
  }

  /* ---------- 交互 ---------- */
  function answer(key) {
    const sess = ui.session;
    if (!sess || sess.done) return;
    const q = sess.items[sess.i];
    if (!q) return;
    if (sess.picks[q.id] !== undefined && sess.kind !== 'exam') return;
    sess.picks[q.id] = key;
    if (sess.kind !== 'exam') {
      recordAnswer(q, key, key === q.answer);
    }
    render();
    if (sess.kind === 'exam') {
      const nextOpen = sess.items.findIndex((x, idx) => idx > sess.i && sess.picks[x.id] === undefined);
      if (nextOpen >= 0) setTimeout(() => { if (ui.session === sess && !sess.done) { sess.i = nextOpen; render(); } }, 180);
    }
  }

  function next() {
    const sess = ui.session;
    if (!sess) return;
    if (sess.i < sess.items.length - 1) { sess.i++; render(); return; }
    finish();
  }

  function finish() {
    const sess = ui.session;
    if (!sess) return;
    sess.done = true;
    const total = sess.items.length;
    const right = sess.items.filter((q) => sess.picks[q.id] === q.answer).length;
    if (sess.kind === 'exam') {
      const used = Math.min(EXAM_MINUTES * 60, Math.round((Date.now() - sess.started) / 1000));
      sess.result = { right, total, at: Date.now(), used };
      state.exams.unshift({ t: Date.now(), right, total });
      state.exams = state.exams.slice(0, 12);
      save();
    }
    render();
  }

  function submitExam() {
    const sess = ui.session;
    if (!sess || sess.kind !== 'exam') return;
    const unanswered = sess.items.filter((q) => sess.picks[q.id] === undefined).length;
    if (unanswered && !sess._ask) {
      sess._ask = true;
      toast(`还有 ${unanswered} 题未作答，再点一次交卷`);
      return;
    }
    finish();
  }

  function renderExamResult(sess) {
    const { right, total, used } = sess.result || { right: 0, total: sess.items.length, used: 0 };
    const pct = Math.round((right / total) * 100);
    const pass = pct >= 60;
    const um = Math.floor(used / 60);
    const us = used % 60;
    return `
      <div class="grade">
        <span class="stamp${pass ? '' : ' bad'}">${pass ? '合格' : '待提高'}</span>
        <div class="score">${right}<small>/${total}</small></div>
        <div class="cap">模拟考试得分</div>
        <div class="thin"></div>
        <dl class="kv">
          <dt>正确率</dt><dd>${pct}%</dd>
          <dt>用时</dt><dd>${um} 分 ${us} 秒</dd>
          <dt>判断题</dt><dd>${sess.items.filter((q) => q.type === 'judge').length} 题</dd>
          <dt>选择题</dt><dd>${sess.items.filter((q) => q.type === 'choice').length} 题</dd>
        </dl>
      </div>
      <div class="eyebrow">交卷后</div>
      <div class="stack">
        <button class="btn solid" data-act="review">逐题查看解析</button>
        <button class="btn ghost" data-act="exam">再考一次</button>
        <button class="btn ghost" data-act="home">回到首页</button>
      </div>`;
  }

  /* ---------- 渲染：错题本 ---------- */
  function renderWrong() {
    const rows = wrongList();
    if (!rows.length) {
      return `<div class="eyebrow">错题本</div>
        <div class="empty">还没有错题。<br>做错的题会自动收进这里，答对后自动移出。</div>`;
    }
    return `
      <div class="eyebrow">错题本 · ${rows.length} 题</div>
      <div class="list">
        ${rows.map(({ q, m }) => `
          <button class="row" data-act="open" data-id="${esc(q.id)}">
            <span class="rid">${esc(q.id)}</span>
            <span class="rtxt">${esc((q.stem || '').slice(0, 70))}</span>
            <span class="rtag rmiss">错 ${m.n || 1}</span>
          </button>`).join('')}
      </div>
      <div class="footbar">
        <button class="btn solid wide" data-act="wrongset">重做全部错题</button>
      </div>`;
  }

  /* ---------- 渲染：章节选择 ---------- */
  const TYPE_TABS = [
    { k: 'all', t: '混合' },
    { k: 'judge', t: '只判断题' },
    { k: 'choice', t: '只选择题' },
  ];

  function renderChapters() {
    const available = DATA.filter((q) => ui.chSel.includes(chKey(q))
      && (ui.chType === 'all' || q.type === ui.chType)).length;
    const cells = chList().map((c) => {
      const qs = chPool(c.k, ui.chType);
      const on = ui.chSel.includes(c.k);
      const mast = qs.filter((q) => isMastered(q.id)).length;
      return `<button class="ch" data-act="chtoggle" data-k="${c.k}"
          aria-pressed="${on}" ${qs.length ? '' : 'disabled'}>
        <span class="ch-n">${c.k === 0 ? '—' : pad2(c.k)}</span>
        <span class="ch-t">${esc(c.name)}</span>
        <span class="ch-c">${qs.length} 题${mast ? ` · 掌握 ${mast}` : ''}</span>
      </button>`;
    }).join('');

    return `<div class="practice">
      <div class="eyebrow">章节练习</div>
      <p class="hint chap-lead">选出要练的章节，可以多选；每组从所选章节里抽 20 题。</p>
      <div class="seg" role="tablist" aria-label="题型">
        ${TYPE_TABS.map((t) => `<button class="seg-b" role="tab" data-act="chtype" data-type="${t.k}"
          aria-selected="${ui.chType === t.k}">${t.t}</button>`).join('')}
      </div>
      <div class="chbar">
        <span>${ui.chSel.length ? `已选 ${ui.chSel.length} 章 · 可选 ${available} 题` : '还没选章节'}</span>
        <span class="chbar-a">
          <button class="link" data-act="chall">全选</button>
          <button class="link" data-act="chnone">清空</button>
        </span>
      </div>
      <div class="chgrid">${cells}</div>
      <div class="footbar">
        <button class="btn solid wide" data-act="chstart" ${available ? '' : 'disabled'}>
          ${ui.chSel.length ? `开始练习 · ${Math.min(20, available)} 题` : '先选章节'}
        </button>
      </div>
    </div>`;
  }

  /* ---------- 渲染：统计 ---------- */
  function renderStats() {
    const total = DATA.length;
    const done = answeredCount();
    const mast = masteredCount();
    const pct = total ? Math.round((mast / total) * 100) : 0;
    const judgeDone = judges.filter((q) => rec(q.id)).length;
    const choiceDone = choices.filter((q) => rec(q.id)).length;
    const jAcc = judgeDone ? Math.round((judges.filter((q) => isMastered(q.id)).length / judgeDone) * 100) : 0;
    const cAcc = choiceDone ? Math.round((choices.filter((q) => isMastered(q.id)).length / choiceDone) * 100) : 0;
    const exams = state.exams.slice(0, 5);
    return `
      <div class="eyebrow">总览</div>
      <div class="block" style="display:flex;align-items:center;gap:16px">
        <div class="ring" style="--p:${pct}"><b>${pct}%</b></div>
        <div>
          <div style="font-family:var(--serif);font-size:17px;font-weight:700">已掌握 ${mast} / ${total}</div>
          <div class="hint">已作答 ${done} 题 · 正确率 ${accuracy()}%</div>
        </div>
      </div>

      <div class="eyebrow">作答数据</div>
      <div class="stats">
        <div class="stat"><div class="l">已作答</div><div class="v">${done}</div><div class="d">共 ${total} 题</div></div>
        <div class="stat"><div class="l">正确率</div><div class="v">${accuracy()}<small>%</small></div><div class="d">按最近一次作答</div></div>
        <div class="stat"><div class="l">错题</div><div class="v">${wrongList().length}</div><div class="d">仍在错题本中</div></div>
        <div class="stat"><div class="l">连续答对</div><div class="v">${streak()}</div><div class="d">题</div></div>
      </div>

      <div class="eyebrow">分题型</div>
      <div class="stack">
        <div class="block">
          <div class="gauge-row"><span>判断题 · 已答 ${judgeDone}/${judges.length}</span><b>${jAcc}%</b></div>
          <div class="rule-bar"><i style="width:${jAcc}%"></i></div>
        </div>
        <div class="block">
          <div class="gauge-row"><span>选择题 · 已答 ${choiceDone}/${choices.length}</span><b>${cAcc}%</b></div>
          <div class="rule-bar"><i style="width:${cAcc}%"></i></div>
        </div>
      </div>

      ${chList().length > 1 ? `<details class="fold">
        <summary>分章节掌握度</summary>
        <div class="stack">
          ${chList().map((c) => {
            const mast = c.qs.filter((q) => isMastered(q.id)).length;
            const p = Math.round((mast / c.qs.length) * 100);
            return `<div class="block">
              <div class="gauge-row"><span>${c.k === 0 ? '—' : c.k}. ${esc(c.name)}</span><b>${mast}/${c.qs.length}</b></div>
              <div class="rule-bar"><i style="width:${p}%"></i></div>
            </div>`;
          }).join('')}
        </div>
      </details>` : ''}

      ${exams.length ? `<div class="eyebrow">最近模拟考试</div>
      <div class="list">
        ${exams.map((e) => `
          <div class="row" style="cursor:default">
            <span class="rid">${new Date(e.t).toLocaleDateString('zh-CN')}</span>
            <span class="rtxt">答对 ${e.right} / ${e.total}</span>
            <span class="rtag">${Math.round((e.right / e.total) * 100)}%</span>
          </div>`).join('')}
      </div>` : ''}`;
  }

  /* ---------- 渲染：说明 ---------- */
  function renderAbout() {
    return `
      <div class="eyebrow">题库来源</div>
      <div class="block">
        <p class="hint" style="margin:0 0 10px">
          题目来自《客观题库--测试》试卷：判断题 ${judges.length} 题、选择题 ${choices.length} 题，
          共 ${DATA.length} 题。原文件是由扫描版 PDF 转换的 Word，部分选项以图片形式存在，
          无法还原文字的题目没有收录。
        </p>
        <dl class="kv">
          <dt>已收录</dt><dd>${DATA.length} 题</dd>
          <dt>未能收录</dt><dd>${BLOCKED.length} 题</dd>
          <dt>答案来源</dt><dd>答题卡填涂 + 参考答案表</dd>
        </dl>
      </div>

      <div class="eyebrow">怎么用</div>
      <div class="block">
        <div class="notes">
          <div class="note"><b>今日练习</b><p>每天按日期抽 20 题，同一天反复进来都是同一份</p></div>
          <div class="note"><b>专项练习</b><p>判断题、选择题各抽 20 题，专门补短板</p></div>
          <div class="note"><b>模拟考试</b><p>判断 10 + 选择 10，30 分钟倒计时，交卷后看逐题解析</p></div>
          <div class="note"><b>章节练习</b><p>选一个或几个章节，从里面抽 20 题，专攻没学好的部分</p></div>
          <div class="note"><b>错题本</b><p>答错自动收进来，重做答对后自动移出</p></div>
        </div>
        <p class="hint" style="margin:12px 0 0">
          电脑上可以用方向键切题、按 1–4 选答案；手机上点选项即可。
        </p>
      </div>

      <div class="eyebrow">进度存储</div>
      <div class="block">
        <p class="hint" style="margin:0 0 12px">
          作答记录保存在本机浏览器（localStorage），换设备或清理浏览器数据会清空。
        </p>
        <button class="btn ghost" data-act="reset">清空全部进度</button>
      </div>`;
  }

  /* ---------- 主渲染 ---------- */
  function render() {
    renderMasthead();
    renderTabs();
    const v = el('view');
    let html = '';
    if (ui.tab === 'practice') html = renderPractice();
    else if (ui.tab === 'chapters') html = renderChapters();
    else if (ui.tab === 'wrong') html = renderWrong();
    else if (ui.tab === 'stats') html = renderStats();
    else if (ui.tab === 'about') html = renderAbout();
    else html = renderHome();
    v.innerHTML = html;
    v.classList.toggle('bar', !!v.querySelector('.footbar'));
    if (ui.tab === 'practice' && ui.session && !ui.session.done) {
      const cur = v.querySelector('.omr-cell[data-s="cur"]');
      if (cur) cur.scrollIntoView({ block: 'nearest', inline: 'center' });
    }
    if (ui.tab === 'practice' && ui.session && ui.session.kind === 'exam' && !ui.session.done) {
      startClock();
    }
  }

  function startClock() {
    if (ui.clock) clearInterval(ui.clock);
    const sess = ui.session;
    ui.clock = setInterval(() => {
      if (ui.session !== sess || sess.done) { clearInterval(ui.clock); ui.clock = null; return; }
      const left = sess.endsAt - Date.now();
      const cell = el('clock');
      if (left <= 0) {
        clearInterval(ui.clock); ui.clock = null;
        toast('考试时间到，自动交卷');
        finish();
        return;
      }
      if (cell) {
        const mm = Math.floor(left / 60000);
        const ss = Math.floor((left % 60000) / 1000);
        cell.textContent = `${mm}:${pad2(ss)}`;
        cell.classList.toggle('warn', left < 5 * 60000);
      }
    }, 1000);
  }

  /* ---------- 事件 ---------- */
  document.addEventListener('click', (ev) => {
    const t = ev.target.closest('[data-act]');
    if (!t) return;
    const act = t.dataset.act;

    if (act === 'tab') {
      const tab = t.dataset.tab;
      if (tab !== 'practice') { ui.session = null; }
      go(tab);
      el('view').focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    if (act === 'daily') return startDaily();
    if (act === 'seq') return startSeq();
    if (act === 'drill') return startDrill(t.dataset.type);
    if (act === 'exam') return startExam();
    if (act === 'wrong') return startWrong();
    if (act === 'wrongset') return startWrong();
    if (act === 'chapters') { ui.session = null; return go('chapters'); }
    if (act === 'chtoggle') {
      const k = Number(t.dataset.k);
      const i = ui.chSel.indexOf(k);
      if (i >= 0) ui.chSel.splice(i, 1); else ui.chSel.push(k);
      ui.chSel.sort((a, b) => CH_ORDER.indexOf(a) - CH_ORDER.indexOf(b));
      saveChap();
      return render();
    }
    if (act === 'chtype') {
      ui.chType = t.dataset.type || 'all';
      saveChap();
      return render();
    }
    if (act === 'chall') {
      ui.chSel = CH_ORDER.filter((k) => chPool(k, ui.chType).length);
      saveChap();
      return render();
    }
    if (act === 'chnone') {
      ui.chSel = [];
      saveChap();
      return render();
    }
    if (act === 'chstart') return startChapter();
    if (act === 'again') {
      const k = ui.session && ui.session.kind;
      if (k === 'daily') return startDaily();
      if (k === 'drill') return startDrill(ui.session.type || 'judge');
      if (k === 'seq') return startSeq();
      if (k === 'wrong') return startWrong();
      if (k === 'chapter') return startChapter();
      ui.session = null;
      return go('home');
    }
    if (act === 'home') { ui.session = null; return go('home'); }
    if (act === 'pick') return answer(t.dataset.key);
    if (act === 'next') return next();
    if (act === 'prev') {
      if (ui.session && ui.session.i > 0) { ui.session.i--; render(); }
      return;
    }
    if (act === 'jump') {
      if (!ui.session) return;
      ui.session.i = Number(t.dataset.i);
      render();
      return;
    }
    if (act === 'submit') return submitExam();
    if (act === 'review') {
      if (!ui.session) return;
      ui.session.kind = 'review';
      ui.session.i = 0;
      return render();
    }
    if (act === 'rprev') {
      if (!ui.session || ui.session.i === 0) return;
      ui.session.i--;
      return render();
    }
    if (act === 'rnext') {
      const s = ui.session;
      if (!s) return;
      if (s.i < s.items.length - 1) { s.i++; return render(); }
      s.kind = 'exam';
      s.i = 0;
      return render();
    }
    if (act === 'open') {
      const q = byId.get(t.dataset.id);
      if (!q) return;
      ui.session = sessionOf('wrong', [q]);
      return go('practice');
    }
    if (act === 'reset') {
      if (confirm('确定清空全部作答记录？此操作不可恢复。')) {
        state = blank();
        save();
        toast('已清空');
        render();
      }
      return;
    }
  });

  document.addEventListener('keydown', (ev) => {
    if (ui.tab !== 'practice' || !ui.session || ui.session.done) return;
    if (ev.key === 'ArrowLeft') { if (ui.session.i > 0) { ui.session.i--; render(); } }
    else if (ev.key === 'ArrowRight') {
      const s = ui.session;
      if (s.picks[s.items[s.i].id] !== undefined && s.kind !== 'exam') next();
      else if (s.i < s.items.length - 1) { s.i++; render(); }
    } else if (/^[1-4]$/.test(ev.key)) {
      const q = ui.session.items[ui.session.i];
      if (!q) return;
      const key = q.type === 'judge' ? (ev.key === '1' ? 'T' : ev.key === '2' ? 'F' : '') : (q.options[Number(ev.key) - 1] || {}).key;
      if (key) answer(key);
    }
  });

  /* ---------- 启动 ---------- */
  load();
  render();
})();