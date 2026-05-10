'use strict';

// ===== STATE =====
const LANG_KEY = 'korkort_lang_v1';
const state = {
  view: 'browse',
  category: '',
  search: '',
  lang: localStorage.getItem(LANG_KEY) || 'ar',
  autoplay: false,
  autoplayIdx: -1,
};

// ===== I18N =====
const I18N = {
  ar: {
    'app.title': 'علامات الطرق السويدية — Svenska Vägmärken',
    'tab.browse': 'تصفّح', 'tab.dashboard': 'إنجازاتي', 'tab.quiz': 'اختبار', 'tab.flip': 'قلب البطاقات', 'tab.games': 'الألعاب',
    'dash.streak': 'أيام متتالية', 'dash.xp': 'نقاط (XP)', 'dash.known': 'تم الحفظ', 'dash.progress': 'مستوى التقدم في الفئات', 'dash.badges': 'الأوسمة (Badges)', 'dash.mistakes': 'تحليل نقاط الضعف (أخطائي)',
    'quiz.type': 'نوع الاختبار', 'quiz.type.signs': 'العلامات المرورية', 'quiz.type.scenarios': 'مواقف مرورية (سيناريوهات)', 'quiz.type.mistakes': 'مراجعة أخطائي',
    'quiz.mock.title': '🏆 محاكي الاختبار الشامل (70 سؤال)', 'quiz.mock.pass': '🎉 مبروك! لقد نجحت في الاختبار', 'quiz.mock.fail': '❌ للأسف لم تنجح، حاول مرة أخرى',
    'games.title': '🕹️ ألعاب التحدي', 'game.memory': 'لعبة الذاكرة', 'game.memory.desc': 'ابحث عن أزواج العلامات المتطابقة',
    'game.time': 'سباق الزمن', 'game.time.desc': 'أجب بأسرع ما يمكن خلال 60 ثانية', 'game.time.intro': 'أجب بأسرع ما يمكن خلال 60 ثانية. (+2 ثانية للصح، -5 للخطأ)', 'time.done': 'انتهى الوقت!',
    'game.match': 'التوصيل', 'game.match.desc': 'اضغط على الاسم ثم على العلامة المطابقة', 'game.match.intro': 'اضغط على الاسم ثم على العلامة التي تطابقه.', 'match.done': 'عمل رائع!',
    'game.swipe': 'الفرز السريع', 'game.swipe.desc': 'صنف العلامات بسرعة حسب فئتها', 'game.swipe.intro': 'اضغط على الفئة الصحيحة للعلامة بأسرع ما يمكن!', 'swipe.done': 'انتهت المحاولات!',
    'lang.toggle': 'تغيير اللغة', 'lang.ar': 'العربية', 'lang.sv': 'السويدية',
    'tts.settings': 'إعدادات النطق', 'tts.title': '🔊 إعدادات النطق', 'tts.loading': 'جاري تحميل الأصوات...',
    'tts.voiceAr': 'الصوت العربي:', 'tts.voiceSv': 'الصوت السويدي:', 'tts.rate': 'السرعة:', 'tts.pitch': 'الدرجة:',
    'tts.testAr': '🔊 اختبار عربي', 'tts.testSv': '🔊 اختبار سويدي',
    'tts.helpTitle': '💡 لتحسين الجودة (نصائح)',
    'tts.helpBody': '<li><b>iOS:</b> الإعدادات → إمكانية الوصول → المحتوى المنطوق → الأصوات → عربي/سويدي → نزّل صوتاً (مفضل: «Premium» أو «Enhanced»).</li><li><b>Android:</b> الإعدادات → اللغة والإدخال → تحويل النص إلى كلام → اختر «Google» وأضف اللغات.</li><li><b>سطح المكتب:</b> Chrome يستخدم أصوات Google السحابية تلقائياً (يحتاج إنترنت).</li>',
    'search.placeholder': 'ابحث بالعربية أو السويدية...', 'filter.category': 'الفئة', 'filter.all': 'كل الفئات',
    'label.category': 'الفئة:',
    'quiz.title': '🎯 اختيار من متعدد', 'quiz.intro': 'شاهد العلامة واختر المعنى الصحيح من بين 4 خيارات.',
    'quiz.count': 'عدد الأسئلة:', 'quiz.optsLang': 'لغة الخيارات:',
    'btn.start': 'ابدأ ▶', 'quiz.btn.start': 'ابدأ الاختبار ▶', 'btn.next': 'التالي ←', 'btn.prev': '← السابق', 'btn.playAgain': 'العب مرة أخرى', 'btn.close': 'إغلاق',
    'btn.speakSv': '🔊 سويدي', 'btn.speakAr': '🔊 عربي',
    'game.over': '🎉 انتهت اللعبة',
    'flip.title': '🔄 قلب البطاقات', 'flip.intro': 'شاهد العلامة، فكّر بالمعنى، ثم اقلب البطاقة للتأكد. حدد ما تعرفه وما تحتاج لمراجعته.',
    'flip.onlyReview': 'أظهر فقط ما حدّدته «راجعني لاحقاً»', 'flip.reset': '🗑 محو حالة المعرفة',
    'flip.hint': 'انقر للقلب', 'flip.review': '↻ راجعني لاحقاً', 'flip.known': '✓ أعرفها',
    'memory.title': '🧠 لعبة الذاكرة', 'memory.intro': 'اقلب البطاقات لإيجاد كل صورة مع اسمها. حاول تنفيذها بأقل عدد من المحاولات.',
    'memory.pairs': 'عدد الأزواج:', 'memory.namesLang': 'لغة الأسماء:',
    'memory.pairsLabel': '🎯 الأزواج:', 'memory.tries': '🎲 المحاولات:', 'memory.quit': 'انسحب', 'memory.win': '🏆 ممتاز!',
    'msg.noVoice.sv': '💡 لتحسين النطق السويدي: ثبّت صوتاً سويدياً من إعدادات الجهاز',
    'msg.noVoice.ar': '💡 لتحسين النطق العربي: ثبّت صوتاً عربياً من إعدادات الجهاز',
    'msg.tooFew': 'عدد العلامات غير كافٍ — اختر فئة أخرى',
    'msg.reviewRound': '🔁 جولة مراجعة للإجابات الخاطئة',
    'msg.flipDone': '🎉 انتهت كل البطاقات!',
    'msg.flipEmpty': 'لا توجد علامات للعرض',
    'msg.cleared': 'تم المحو ✓',
    'msg.confirmReset': 'سيتم محو حالة المعرفة لكل العلامات. متابعة؟',
    'msg.noResults': 'لا توجد نتائج',
    'msg.noTtsSupport': 'متصفحك لا يدعم النطق الصوتي',
    'browse.signs': 'علامة',
    'browse.back': '← العودة لكل الفئات',
    'browse.playAll': 'تشغيل الكل', 'browse.stop': 'إيقاف',
    'voicesAvail': (ar, sv) => `الأصوات المتاحة: عربي ${ar} • سويدي ${sv}`,
    'speakRight': 'إجابة صحيحة',
  },
  sv: {
    'app.title': 'Svenska Vägmärken — علامات الطرق السويدية',
    'tab.browse': 'Bläddra', 'tab.dashboard': 'Mina Framsteg', 'tab.quiz': 'Quiz', 'tab.flip': 'Vändkort', 'tab.games': 'Spel',
    'dash.streak': 'Dagar i rad', 'dash.xp': 'Erfarenhet (XP)', 'dash.known': 'Inlärda', 'dash.progress': 'Framsteg per Kategori', 'dash.badges': 'Utmärkelser', 'dash.mistakes': 'Analys av misstag',
    'quiz.type': 'Typ av Quiz', 'quiz.type.signs': 'Vägmärken', 'quiz.type.scenarios': 'Trafiksituationer', 'quiz.type.mistakes': 'Repetera mina fel',
    'quiz.mock.title': '🏆 Fullständigt Teoriprov (70 frågor)', 'quiz.mock.pass': '🎉 Grattis! Du klarade provet', 'quiz.mock.fail': '❌ Tyvärr, du blev inte godkänd',
    'games.title': '🕹️ Utmaningsspel', 'game.memory': 'Memory', 'game.memory.desc': 'Hitta matchande par',
    'game.time': 'Tidsutmaning', 'game.time.desc': 'Svara så snabbt du kan på 60 sekunder', 'game.time.intro': 'Svara så snabbt du kan på 60 sekunder. (+2 sek för rätt, -5 för fel)', 'time.done': 'Tiden är slut!',
    'game.match': 'Matcha', 'game.match.desc': 'Klicka på namnet och sedan på rätt märke', 'game.match.intro': 'Klicka på ett namn och sedan på rätt vägmärke.', 'match.done': 'Bra jobbat!',
    'game.swipe': 'Snabb Swipe', 'game.swipe.desc': 'Klassificera märket snabbt efter kategori', 'game.swipe.intro': 'Klicka på rätt kategori för märket så snabbt som möjligt!', 'swipe.done': 'Inga försök kvar!',
    'lang.toggle': 'Byt språk', 'lang.ar': 'Arabiska', 'lang.sv': 'Svenska',
    'tts.settings': 'Röstinställningar', 'tts.title': '🔊 Röstinställningar', 'tts.loading': 'Laddar röster...',
    'tts.voiceAr': 'Arabisk röst:', 'tts.voiceSv': 'Svensk röst:', 'tts.rate': 'Hastighet:', 'tts.pitch': 'Tonhöjd:',
    'tts.testAr': '🔊 Testa arabiska', 'tts.testSv': '🔊 Testa svenska',
    'tts.helpTitle': '💡 Förbättra ljudkvaliteten',
    'tts.helpBody': '<li><b>iOS:</b> Inställningar → Hjälpmedel → Talat innehåll → Röster → Svenska/Arabiska → Ladda ner (välj «Premium» eller «Enhanced»).</li><li><b>Android:</b> Inställningar → Språk och inmatning → Text-till-tal → Välj «Google» och lägg till språk.</li><li><b>Dator:</b> Chrome använder Googles molnröster automatiskt (kräver internet).</li>',
    'search.placeholder': 'Sök på svenska eller arabiska...', 'filter.category': 'Kategori', 'filter.all': 'Alla kategorier',
    'label.category': 'Kategori:',
    'quiz.title': '🎯 Flervalsfrågor', 'quiz.intro': 'Titta på skylten och välj rätt betydelse av 4 alternativ.',
    'quiz.count': 'Antal frågor:', 'quiz.optsLang': 'Alternativens språk:',
    'btn.start': 'Starta ▶', 'quiz.btn.start': 'Starta Quiz ▶', 'btn.next': 'Nästa →', 'btn.prev': '← Föregående', 'btn.playAgain': 'Spela igen', 'btn.close': 'Stäng',
    'btn.speakSv': '🔊 Svenska', 'btn.speakAr': '🔊 Arabiska',
    'game.over': '🎉 Spelet är slut',
    'flip.title': '🔄 Vändkort', 'flip.intro': 'Titta på skylten, tänk på betydelsen och vänd kortet. Markera vad du kan och vad du behöver repetera.',
    'flip.onlyReview': 'Visa endast «Repetera senare»', 'flip.reset': '🗑 Rensa kunskapsstatus',
    'flip.hint': 'Tryck för att vända', 'flip.review': '↻ Repetera senare', 'flip.known': '✓ Jag kan',
    'memory.title': '🧠 Memory', 'memory.intro': 'Vänd korten för att para ihop bild med namn. Försök med så få försök som möjligt.',
    'memory.pairs': 'Antal par:', 'memory.namesLang': 'Namnens språk:',
    'memory.pairsLabel': '🎯 Par:', 'memory.tries': '🎲 Försök:', 'memory.quit': 'Avbryt', 'memory.win': '🏆 Utmärkt!',
    'msg.noVoice.sv': '💡 Installera en svensk röst i enhetens inställningar',
    'msg.noVoice.ar': '💡 Installera en arabisk röst i enhetens inställningar',
    'msg.tooFew': 'För få skyltar — välj en annan kategori',
    'msg.reviewRound': '🔁 Repetera felaktiga svar',
    'msg.flipDone': '🎉 Alla kort klara!',
    'msg.flipEmpty': 'Inga skyltar att visa',
    'msg.cleared': 'Rensat ✓',
    'msg.confirmReset': 'All kunskapsstatus kommer att raderas. Fortsätt?',
    'msg.noResults': 'Inga träffar',
    'msg.noTtsSupport': 'Din webbläsare stöder inte tal',
    'browse.signs': 'skyltar',
    'browse.back': '← Tillbaka till alla kategorier',
    'browse.playAll': 'Spela alla', 'browse.stop': 'Stoppa',
    'voicesAvail': (ar, sv) => `Tillgängliga röster: arabiska ${ar} • svenska ${sv}`,
    'speakRight': 'Rätt',
  },
};

const T = (key, ...args) => {
  const v = (I18N[state.lang] || I18N.ar)[key];
  if (typeof v === 'function') return v(...args);
  return v != null ? v : key;
};

function applyLang() {
  const html = document.documentElement;
  html.lang = state.lang;
  html.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  document.title = T('app.title');
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = state.lang === 'ar' ? '🇸🇪 Svenska' : '🇸🇦 العربية';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const txt = T(key);
    if (txt && typeof txt === 'string') el.textContent = txt;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = T(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', T(el.getAttribute('data-i18n-placeholder')));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const v = T(el.getAttribute('data-i18n-aria'));
    el.setAttribute('aria-label', v);
    if (el.hasAttribute('title')) el.setAttribute('title', v);
  });

  fillCategoryFilter('category-filter');
  fillCategoryFilter('quiz-category');
  fillCategoryFilter('flip-category');
  if (state.view === 'browse') renderBrowse();
  if (state.view === 'dashboard') renderDashboard();
}

const STORAGE_KEY = 'korkort_progress_v1';
const defaultProgress = { known: {}, review: {}, mistakes: {}, stats: { xp: 0, streak: 0, lastLogin: '', badges: [] } };
let progress = loadProgress();

function loadProgress() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!data) return JSON.parse(JSON.stringify(defaultProgress));
    if (!data.stats) data.stats = { xp: 0, streak: 0, lastLogin: '', badges: [] };
    if (!data.stats.badges) data.stats.badges = [];
    if (!data.mistakes) data.mistakes = {};
    return data;
  } catch { return JSON.parse(JSON.stringify(defaultProgress)); }
}
function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }

function checkStreak() {
  const today = new Date().toISOString().split('T')[0];
  const last = progress.stats.lastLogin;
  if (last === today) return; // already logged in today
  if (last) {
    const lastDate = new Date(last);
    const currDate = new Date(today);
    const diffDays = Math.floor((currDate - lastDate) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) progress.stats.streak++;
    else progress.stats.streak = 1;
  } else {
    progress.stats.streak = 1;
  }
  progress.stats.lastLogin = today;
  saveProgress();
}

function addXP(amount) {
  progress.stats.xp += amount;
  saveProgress();
  xpToast(amount);
  if (state.view === 'dashboard') renderDashboard();
}

function xpToast(amount) {
  const el = document.createElement('div');
  el.className = 'xp-toast';
  el.textContent = `+${amount} XP`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1500);
}

checkStreak();

// ===== HELPERS =====
const $ = (id) => document.getElementById(id);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const catBy = (key) => CATEGORIES.find(c => c.key === key);
const signsIn = (key) => key ? SIGNS.filter(s => s.category === key) : SIGNS;
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const sample = (arr, n) => shuffle(arr).slice(0, n);

function toast(msg, ms = 2200) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.add('hidden'), ms);
}

// ===== TTS — نظام نطق محسّن =====
const TTS_KEY = 'korkort_tts_v1';
const ttsSettings = Object.assign(
  { rate: 1.0, pitch: 1.0, voiceSv: '', voiceAr: '' },
  (() => { try { return JSON.parse(localStorage.getItem(TTS_KEY)) || {}; } catch { return {}; } })()
);
function saveTtsSettings() { localStorage.setItem(TTS_KEY, JSON.stringify(ttsSettings)); }

const LANG_FALLBACKS = {
  sv: ['sv-SE', 'sv-FI', 'sv'],
  ar: ['ar-SA', 'ar-EG', 'ar-AE', 'ar-MA', 'ar-XA', 'ar-001', 'ar'],
};

let _voicesReady = null;
function getVoicesAsync() {
  if (_voicesReady) return _voicesReady;
  _voicesReady = new Promise((resolve) => {
    if (!('speechSynthesis' in window)) return resolve([]);
    const cur = speechSynthesis.getVoices();
    if (cur && cur.length) return resolve(cur);
    let tries = 0;
    const iv = setInterval(() => {
      const v = speechSynthesis.getVoices();
      if ((v && v.length) || ++tries > 30) { clearInterval(iv); resolve(v || []); }
    }, 100);
    speechSynthesis.onvoiceschanged = () => {
      clearInterval(iv);
      resolve(speechSynthesis.getVoices() || []);
    };
  });
  return _voicesReady;
}

function scoreVoice(v, prefLangs) {
  let s = 0;
  const langIdx = prefLangs.findIndex(l => v.lang.toLowerCase() === l.toLowerCase());
  const startsIdx = prefLangs.findIndex(l => v.lang.toLowerCase().startsWith(l.toLowerCase().split('-')[0]));
  if (langIdx >= 0) s += 1000 - langIdx * 50;
  else if (startsIdx >= 0) s += 500 - startsIdx * 20;
  else return -1;
  const name = (v.name || '').toLowerCase();
  // Priority for high-quality/neural voices
  if (/premium|enhanced|neural|natural|hd|wavenet|online/.test(name)) s += 300;
  if (/siri|alva|oskar|klara/.test(name)) s += 400; // Best Swedish voices on Apple/Google
  if (/google|microsoft|apple/.test(name)) s += 150;
  if (v.localService) s += 50;
  if (/compact|eloquence|fred|albert/.test(name)) s -= 100;
  if (v.default) s += 10;
  return s;
}

let _voiceCache = { ar: null, sv: null };

function pickVoiceSync(langCode) {
  if (!('speechSynthesis' in window)) return null;
  const voices = speechSynthesis.getVoices() || [];
  if (!voices.length) return null;
  const baseLang = langCode.split('-')[0];
  const prefs = LANG_FALLBACKS[baseLang] || [langCode];
  const explicit = baseLang === 'sv' ? ttsSettings.voiceSv : ttsSettings.voiceAr;
  if (explicit) {
    const exact = voices.find(v => v.voiceURI === explicit || v.name === explicit);
    if (exact) return exact;
  }
  const ranked = voices
    .map(v => ({ v, s: scoreVoice(v, prefs) }))
    .filter(x => x.s > 0)
    .sort((a, b) => b.s - a.s);
  return ranked.length ? ranked[0].v : null;
}

async function pickVoice(langCode) {
  await getVoicesAsync();
  return pickVoiceSync(langCode);
}

function refreshVoiceCache() {
  _voiceCache.ar = pickVoiceSync('ar-SA');
  _voiceCache.sv = pickVoiceSync('sv-SE');
}

let _currentBtn = null;
function setSpeakingState(btn, on) {
  if (_currentBtn && _currentBtn !== btn) _currentBtn.classList.remove('speaking');
  if (btn) {
    btn.classList.toggle('speaking', on);
    _currentBtn = on ? btn : null;
  }
}

function cleanText(t) {
  return (t || '')
    .replace(/[«»""()،,\-—–]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function speak(text, lang, btn = null) {
  if (!('speechSynthesis' in window)) {
    toast(T('msg.noTtsSupport'));
    return;
  }
  const cleaned = cleanText(text);
  if (!cleaned) return;

  // Sync — must run during user gesture so Chrome doesn't block speech.
  speechSynthesis.cancel();
  const baseLang = lang.split('-')[0];
  const voice = (baseLang === 'sv' ? _voiceCache.sv : _voiceCache.ar) || pickVoiceSync(lang);
  if (baseLang === 'sv' ? !_voiceCache.sv : !_voiceCache.ar) {
    if (voice) (baseLang === 'sv' ? _voiceCache.sv = voice : _voiceCache.ar = voice);
  }
  const u = new SpeechSynthesisUtterance(cleaned);
  if (voice) {
    u.voice = voice;
    u.lang = voice.lang;
  } else {
    u.lang = lang;
    if (lang.startsWith('sv')) toast(T('msg.noVoice.sv'));
    else if (lang.startsWith('ar')) toast(T('msg.noVoice.ar'));
  }
  u.rate = ttsSettings.rate;
  u.pitch = ttsSettings.pitch;
  u.volume = 1.0;
  u.onstart = () => setSpeakingState(btn, true);
  u.onend = () => setSpeakingState(btn, false);
  u.onerror = () => setSpeakingState(btn, false);
  if (speechSynthesis.paused) speechSynthesis.resume();
  speechSynthesis.speak(u);
}

// ضمان تحميل الأصوات مبكراً + تخزين مؤقت لتجنّب await داخل أحداث الضغط
if ('speechSynthesis' in window) {
  getVoicesAsync().then((voices) => {
    refreshVoiceCache();
    if (voices.length) populateVoicePickers(voices);
  });
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.addEventListener('voiceschanged', () => {
      _voicesReady = null;
      getVoicesAsync().then((vs) => {
        refreshVoiceCache();
        populateVoicePickers(vs);
      });
    });
  }
}

function populateVoicePickers(voices) {
  const arSel = $('tts-voice-ar');
  const svSel = $('tts-voice-sv');
  if (!arSel || !svSel) return;
  const arVoices = voices.filter(v => v.lang.toLowerCase().startsWith('ar'));
  const svVoices = voices.filter(v => v.lang.toLowerCase().startsWith('sv'));
  const opt = (v) => `<option value="${v.voiceURI}">${v.name} (${v.lang})${v.localService ? ' 📱' : ' ☁️'}</option>`;
  const auto = state.lang === 'ar' ? '— تلقائي (الأفضل) —' : '— Automatisk (bäst) —';
  arSel.innerHTML = `<option value="">${auto}</option>` + arVoices.map(opt).join('');
  svSel.innerHTML = `<option value="">${auto}</option>` + svVoices.map(opt).join('');
  if (ttsSettings.voiceAr) arSel.value = ttsSettings.voiceAr;
  if (ttsSettings.voiceSv) svSel.value = ttsSettings.voiceSv;
  $('tts-status').textContent = T('voicesAvail', arVoices.length, svVoices.length);
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-tts');
  if (!btn) return;
  const lang = btn.dataset.lang;
  const signId = btn.dataset.signId;
  let text = '';
  if (signId) {
    const s = SIGNS.find(x => x.id === signId);
    if (s) {
      const isSv = lang.startsWith('sv');
      const name = (isSv ? s.nameSv : s.nameAr) || '';
      const desc = (isSv ? s.descSv : s.descAr) || '';
      text = desc ? `${name}. ${desc}` : name;
    }
  } else if (btn.dataset.target) {
    const target = $(btn.dataset.target);
    if (target) text = target.textContent.trim();
  }
  if (text) speak(text, lang, btn);
});

// ===== TABS / VIEW SWITCH =====
$$('.tab').forEach(btn => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});
function switchView(view) {
  state.view = view;
  $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.view === view));
  $$('.view').forEach(v => v.classList.toggle('active', v.id === `view-${view}`));
  if (view === 'browse') renderBrowse();
  if (view === 'dashboard') renderDashboard();
}

// ===== DASHBOARD =====
function renderDashboard() {
  $('dash-streak').textContent = progress.stats.streak;
  $('dash-xp').textContent = progress.stats.xp;
  const knownCount = Object.keys(progress.known).length;
  $('dash-known').textContent = knownCount;

  // Categories progress
  let catHtml = '';
  CATEGORIES.forEach(c => {
    const signs = signsIn(c.key);
    const total = signs.length;
    const known = signs.filter(s => progress.known[s.id]).length;
    const pct = total ? Math.round((known / total) * 100) : 0;
    const name = state.lang === 'ar' ? c.nameAr : c.nameSv;
    
    catHtml += `
      <div class="dash-cat-row">
        <div class="dash-cat-header">
          <div class="dash-cat-name"><span style="color:${c.color}">${c.icon}</span> ${name}</div>
          <div>${pct}% (${known}/${total})</div>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width:${pct}%; background:${c.color}"></div>
        </div>
      </div>
    `;
  });
  $('dash-categories').innerHTML = catHtml;

  // Badges calculation
  const badges = [
    { id: 'first_blood', icon: '🩸', nameAr: 'البداية', nameSv: 'Första steget', cond: knownCount > 0 },
    { id: 'streak_3', icon: '🔥', nameAr: 'شعلة 3 أيام', nameSv: '3 dagar', cond: progress.stats.streak >= 3 },
    { id: 'master_50', icon: '🎓', nameAr: 'خبير (50)', nameSv: 'Expert (50)', cond: knownCount >= 50 },
    { id: 'xp_1000', icon: '⭐', nameAr: 'نجم 1000', nameSv: 'Stjärna 1000', cond: progress.stats.xp >= 1000 }
  ];
  $('dash-badges').innerHTML = badges.map(b => `
    <div class="badge-item ${b.cond ? 'unlocked' : ''}">
      <div class="badge-icon">${b.icon}</div>
      <div class="badge-name">${state.lang === 'ar' ? b.nameAr : b.nameSv}</div>
    </div>
  `).join('');

  // Mistakes analysis
  const mistakeIds = Object.keys(progress.mistakes);
  if (mistakeIds.length === 0) {
    $('dash-mistakes').innerHTML = `<p style="color:var(--text-soft); width:100%; text-align:center;">${state.lang === 'ar' ? 'لا توجد أخطاء مسجلة حالياً. استمر في العمل الرائع!' : 'Inga fel sparade än. Bra jobbat!'}</p>`;
  } else {
    $('dash-mistakes').innerHTML = mistakeIds.slice(0, 12).map(id => {
      const s = SIGNS.find(x => x.id === id);
      if (!s) return '';
      // Extract URL from img tag in s.svg
      const match = s.svg.match(/src=['"]([^'"]+)['"]/);
      const url = match ? match[1] : '';
      return `<div class="mistake-sign-thumb" onclick="openModal('${s.id}')" style="width:50px; height:50px; cursor:pointer; background:var(--surface-2); border-radius:8px; padding:5px; border:1px solid var(--border);">
        <img src="${url}" style="width:100%; height:100%; object-fit:contain;" alt="${s.id}">
      </div>`;
    }).join('') + (mistakeIds.length > 12 ? `<div style="display:flex; align-items:center; justify-content:center; padding:10px; color:var(--primary); font-weight:bold;">+${mistakeIds.length - 12}</div>` : '');
  }
}

// ===== BROWSE =====
function fillCategoryFilter(selectId, includeAll = true) {
  const sel = $(selectId);
  if (!sel) return;
  const cur = sel.value;
  sel.innerHTML = (includeAll ? `<option value="">${T('filter.all')}</option>` : '') +
    CATEGORIES.map(c => {
      const name = state.lang === 'ar' ? c.nameAr : c.nameSv;
      return `<option value="${c.key}">${c.icon} ${name}</option>`;
    }).join('');
  if (cur) sel.value = cur;
}

function switchCategory(offset) {
  stopAutoplay();
  const catIdx = CATEGORIES.findIndex(c => c.key === state.category);
  if (catIdx === -1) return;
  const nextIdx = (catIdx + offset + CATEGORIES.length) % CATEGORIES.length;
  const nextCat = CATEGORIES[nextIdx];
  state.category = nextCat.key;
  const filter = $('category-filter');
  if (filter) filter.value = nextCat.key;
  renderBrowse();
}

function toggleAutoplay() {
  if (state.autoplay) stopAutoplay();
  else startAutoplay();
}

function startAutoplay() {
  const search = state.search.trim().toLowerCase();
  let filtered = signsIn(state.category);
  if (search) {
    filtered = filtered.filter(s =>
      s.nameSv.toLowerCase().includes(search) ||
      s.nameAr.includes(state.search.trim()) ||
      s.id.toLowerCase().includes(search)
    );
  }
  if (!filtered.length) return;
  state.autoplay = true;
  state.autoplayIdx = 0;
  renderBrowse();
  playSignAutoplay(filtered[state.autoplayIdx]);
}

function stopAutoplay() {
  state.autoplay = false;
  state.autoplayIdx = -1;
  speechSynthesis.cancel();
  renderBrowse();
}

function playSignAutoplay(s) {
  if (!state.autoplay || !s) return;
  
  // Highlight card
  $$('.sign-card').forEach(c => {
    const active = c.dataset.id === s.id;
    c.classList.toggle('autoplay-active', active);
    if (active) c.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  const text = s.descSv && !isDuplicate(s.nameSv, s.descSv) ? `${s.nameSv}. ${s.descSv}` : s.nameSv;
  const voice = _voiceCache.sv || pickVoiceSync('sv-SE');
  const u = new SpeechSynthesisUtterance(text);
  if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = 'sv-SE'; }
  u.rate = ttsSettings.rate;
  u.pitch = ttsSettings.pitch;
  
  u.onend = () => {
    if (!state.autoplay) return;
    state.autoplayIdx++;
    
    const search = state.search.trim().toLowerCase();
    let filtered = signsIn(state.category);
    if (search) {
      filtered = filtered.filter(x =>
        x.nameSv.toLowerCase().includes(search) ||
        x.nameAr.includes(state.search.trim()) ||
        x.id.toLowerCase().includes(search)
      );
    }
    
    if (state.autoplayIdx < filtered.length) {
      setTimeout(() => playSignAutoplay(filtered[state.autoplayIdx]), 1000);
    } else {
      stopAutoplay();
    }
  };
  u.onerror = () => stopAutoplay();
  speechSynthesis.speak(u);
}

function renderBrowse() {
  const grid = $('categories-grid');
  const signsGrid = $('signs-grid');
  const search = state.search.trim().toLowerCase();
  const cat = state.category;
  const isAr = state.lang === 'ar';

  if (search || cat) {
    grid.innerHTML = '';
    let filtered = signsIn(cat);
    if (search) {
      filtered = filtered.filter(s =>
        s.nameSv.toLowerCase().includes(search) ||
        s.nameAr.includes(state.search.trim()) ||
        s.id.toLowerCase().includes(search) ||
        (s.descSv || '').toLowerCase().includes(search) ||
        (s.descAr || '').includes(state.search.trim())
      );
    }
    if (cat && !search) {
      const c = catBy(cat);
      const catName = state.lang === 'ar' ? c.nameAr : c.nameSv;
      const prevIcon = state.lang === 'ar' ? '→' : '←';
      const nextIcon = state.lang === 'ar' ? '←' : '→';
      
      const playLabel = state.autoplay ? T('browse.stop') : T('browse.playAll');
      const playIcon = state.autoplay ? '⏹' : '🔊▶';
      
      signsGrid.innerHTML = `<div class="section-title" style="grid-column:1/-1">
        <div class="title-nav-group">
          <div class="nav-buttons-group">
            <button class="btn-nav-small" onclick="switchCategory(-1)" title="${T('btn.prev')}">${prevIcon}</button>
            <button class="btn-nav-small" onclick="switchCategory(1)" title="${T('btn.next')}">${nextIcon}</button>
          </div>
          <h2>${c.icon} ${catName} <span style="color:var(--text-soft); font-size:13px">(${filtered.length})</span></h2>
          <p class="cat-desc-text">${isAr ? (c.descAr || '') : (c.descSv || '')}</p>
          <button class="btn-autoplay ${state.autoplay ? 'playing' : ''}" onclick="toggleAutoplay()">
            <span>${playIcon}</span> ${playLabel}
          </button>
        </div>
        <button class="btn-back" onclick="state.category=''; document.getElementById('category-filter').value=''; stopAutoplay(); renderBrowse();">${T('browse.back')}</button>
      </div>` + filtered.map(signCardHTML).join('');
    } else {
      signsGrid.innerHTML = filtered.length
        ? filtered.map(signCardHTML).join('')
        : `<div class="empty" style="grid-column:1/-1">${T('msg.noResults')}</div>`;
    }
  } else {
    signsGrid.innerHTML = '';
    grid.innerHTML = CATEGORIES.map(c => {
      const count = signsIn(c.key).length;
      const primary = state.lang === 'ar' ? c.nameAr : c.nameSv;
      const secondary = state.lang === 'ar' ? c.nameSv : c.nameAr;
      return `<div class="cat-card" onclick="state.category='${c.key}'; document.getElementById('category-filter').value='${c.key}'; renderBrowse();">
        <div class="cat-color-bar" style="background:${c.color}"></div>
        <span class="cat-icon">${c.icon}</span>
        <div class="cat-name-ar">${primary}</div>
        <div class="cat-name-sv">${secondary}</div>
        <div class="cat-count">${count} ${T('browse.signs')}</div>
      </div>`;
    }).join('');
  }
}

function signCardHTML(s) {
  const primary = state.lang === 'ar' ? s.nameAr : s.nameSv;
  const secondary = state.lang === 'ar' ? s.nameSv : s.nameAr;
  const activeClass = (state.autoplay && state.autoplayIdx !== -1 && signsIn(state.category)[state.autoplayIdx]?.id === s.id) ? 'autoplay-active' : '';
  
  return `<div class="sign-card ${activeClass} cat-${s.category}" data-id="${s.id}" onclick="openModal('${s.id}')">
    <div class="sign-img">${s.svg}</div>
    <div class="sign-name">${primary}</div>
    <div class="sign-name-sv">${secondary}</div>
  </div>`;
}

$('search').addEventListener('input', (e) => { state.search = e.target.value; renderBrowse(); });
$('category-filter').addEventListener('change', (e) => { state.category = e.target.value; renderBrowse(); });

// ===== MODAL =====
function isDuplicate(name, desc) {
  if (!name || !desc) return true;
  const norm = (s) => s.toLowerCase().replace(/[.،,!?…\s]+/g, ' ').trim();
  return norm(name) === norm(desc);
}

function setLangDir(el, lang) {
  el.setAttribute('lang', lang);
  el.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  el.style.textAlign = lang === 'ar' ? 'right' : 'left';
}

let modalList = SIGNS;
let modalIdx = 0;

function openModal(id) {
  modalList = state.category ? SIGNS.filter(s => s.category === state.category) : SIGNS;
  modalIdx = modalList.findIndex(s => s.id === id);
  if (modalIdx === -1) { modalList = SIGNS; modalIdx = SIGNS.findIndex(s => s.id === id); }
  if (modalIdx === -1) return;
  renderModalSign();
  $('modal').classList.remove('hidden');
}

function renderModalSign() {
  const s = modalList[modalIdx];
  if (!s) return;
  const c = catBy(s.category);
  const isAr = state.lang === 'ar';
  const primaryLang = isAr ? 'ar' : 'sv';
  const secondaryLang = isAr ? 'sv' : 'ar';
  const primaryName = isAr ? s.nameAr : s.nameSv;
  const secondaryName = isAr ? s.nameSv : s.nameAr;
  const primaryDesc = isAr ? (s.descAr || '') : (s.descSv || '');
  const secondaryDesc = isAr ? (s.descSv || '') : (s.descAr || '');

  $('modal-svg').innerHTML = s.svg;
  const primaryEl = $('modal-primary');
  const secondaryEl = $('modal-secondary');
  primaryEl.textContent = primaryName;
  setLangDir(primaryEl, primaryLang);
  primaryEl.style.textAlign = 'center';
  secondaryEl.textContent = secondaryName;
  setLangDir(secondaryEl, secondaryLang);
  secondaryEl.style.textAlign = 'center';

  $('modal-cat').textContent = `${c.icon} ${isAr ? c.nameAr : c.nameSv}`;
  $('modal-id').textContent = s.id;

  const dp = $('modal-desc-primary');
  const ds = $('modal-desc-secondary');
  if (primaryDesc && !isDuplicate(primaryName, primaryDesc)) {
    dp.textContent = primaryDesc;
    setLangDir(dp, primaryLang);
    dp.style.textAlign = 'center';
    dp.classList.remove('hidden');
  } else dp.classList.add('hidden');
  if (secondaryDesc && !isDuplicate(secondaryName, secondaryDesc) && !isDuplicate(primaryDesc, secondaryDesc)) {
    ds.textContent = secondaryDesc;
    setLangDir(ds, secondaryLang);
    ds.style.textAlign = 'center';
    ds.classList.remove('hidden');
  } else ds.classList.add('hidden');

  $('modal-name-sv-data').textContent = s.nameSv;
  $('modal-name-ar-data').textContent = s.nameAr;
  document.querySelectorAll('#modal .btn-tts').forEach(b => b.dataset.signId = s.id);
  $('modal-pos').textContent = `${modalIdx + 1} / ${modalList.length}`;
  $('modal-prev').textContent = state.lang === 'ar' ? '→' : '←';
  $('modal-next').textContent = state.lang === 'ar' ? '←' : '→';
  document.querySelector('.modal-content')?.scrollTo({ top: 0, behavior: 'instant' });

  // Auto-play Swedish TTS
  const svBtn = document.querySelector('#modal .btn-tts[data-lang="sv-SE"]');
  const textSv = s.descSv && !isDuplicate(s.nameSv, s.descSv) ? `${s.nameSv}. ${s.descSv}` : s.nameSv;
  speak(textSv, 'sv-SE', svBtn);
}

function modalNext() {
  modalIdx = (modalIdx + 1) % modalList.length;
  renderModalSign();
}
function modalPrev() {
  modalIdx = (modalIdx - 1 + modalList.length) % modalList.length;
  renderModalSign();
}
function closeModal() { $('modal').classList.add('hidden'); }
$('modal-close').addEventListener('click', closeModal);
$('modal').querySelector('.modal-backdrop').addEventListener('click', closeModal);
$('modal-prev').addEventListener('click', modalPrev);
$('modal-next').addEventListener('click', modalNext);
document.addEventListener('keydown', (e) => {
  if ($('modal').classList.contains('hidden')) return;
  if (e.key === 'Escape') closeModal();
  else if (e.key === 'ArrowLeft') (state.lang === 'ar' ? modalNext : modalPrev)();
  else if (e.key === 'ArrowRight') (state.lang === 'ar' ? modalPrev : modalNext)();
});

// ===== LANG TOGGLE =====
$('lang-toggle').addEventListener('click', () => {
  state.lang = state.lang === 'ar' ? 'sv' : 'ar';
  localStorage.setItem(LANG_KEY, state.lang);
  applyLang();
});

// ===== THEME TOGGLE =====
const THEME_KEY = 'korkort_theme';
let currentTheme = localStorage.getItem(THEME_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(currentTheme);

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = $('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

$('theme-toggle').addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, currentTheme);
  applyTheme(currentTheme);
});

// ===== QUIZ — Multiple Choice =====
const quiz = { 
  items: [], idx: 0, correct: 0, wrong: 0, lang: 'ar', 
  wrongPool: [], type: 'signs', isMock: false, 
  timerInterval: null, timeLeft: 3000 // 50 mins in seconds
};

function startQuiz(isMock = false) {
  const quizTypeEl = $('quiz-type');
  const quizType = quizTypeEl ? quizTypeEl.value : 'signs';
  
  quiz.isMock = isMock;
  quiz.lang = state.lang;
  quiz.type = isMock ? 'signs' : quizType;
  
  if (isMock) {
    if (typeof SIGNS === 'undefined' || typeof SCENARIOS === 'undefined') {
      toast(state.lang === 'ar' ? 'جاري تحميل البيانات... حاول ثانية' : 'Laddar data... försök igen');
      return;
    }
    // Select 55 random signs and 15 scenarios (or all if fewer)
    const signPool = sample(SIGNS, Math.min(55, SIGNS.length));
    const scenarioPool = sample(SCENARIOS, Math.min(15, SCENARIOS.length));
    quiz.items = shuffle([...signPool, ...scenarioPool]);
    quiz.timeLeft = 50 * 60;
    const timerEl = $('quiz-timer');
    if (timerEl) timerEl.classList.remove('hidden');
    startTimer();
  } else if (quizType === 'mistakes') {
    const mistakeIds = Object.keys(progress.mistakes);
    if (mistakeIds.length === 0) { 
      toast(state.lang === 'ar' ? 'لا توجد أخطاء مسجلة حالياً' : 'Inga fel sparade än'); 
      return; 
    }
    quiz.items = shuffle(SIGNS.filter(s => progress.mistakes[s.id])).slice(0, 30);
    const timerEl = $('quiz-timer');
    if (timerEl) timerEl.classList.add('hidden');
  } else if (quizType === 'scenarios') {
    if (typeof SCENARIOS === 'undefined' || SCENARIOS.length === 0) { 
      toast(T('msg.tooFew')); 
      return; 
    }
    const countEl = $('quiz-count');
    const count = countEl ? parseInt(countEl.value, 10) : 15;
    quiz.items = shuffle(SCENARIOS).slice(0, Math.min(count, SCENARIOS.length));
    const timerEl = $('quiz-timer');
    if (timerEl) timerEl.classList.add('hidden');
  } else {
    const catEl = $('quiz-category');
    const cat = catEl ? catEl.value : '';
    const countEl = $('quiz-count');
    const count = countEl ? parseInt(countEl.value, 10) : 15;
    const pool = signsIn(cat);
    if (pool.length < 4) { toast(T('msg.tooFew')); return; }
    quiz.items = sample(pool, Math.min(count, pool.length));
    const timerEl = $('quiz-timer');
    if (timerEl) timerEl.classList.add('hidden');
  }

  if (!quiz.items || quiz.items.length === 0) {
    toast(T('msg.tooFew'));
    return;
  }

  quiz.idx = 0; quiz.correct = 0; quiz.wrong = 0; quiz.wrongPool = [];
  $('quiz-setup').classList.add('hidden');
  $('quiz-game').classList.remove('hidden');
  $('quiz-result').classList.add('hidden');
  renderQuizQuestion();
}

function startTimer() {
  if (quiz.timerInterval) clearInterval(quiz.timerInterval);
  quiz.timerInterval = setInterval(() => {
    quiz.timeLeft--;
    const m = Math.floor(quiz.timeLeft / 60);
    const s = quiz.timeLeft % 60;
    $('timer-val').textContent = `${m}:${s.toString().padStart(2, '0')}`;
    if (quiz.timeLeft <= 0) {
      clearInterval(quiz.timerInterval);
      finishQuiz();
    }
  }, 1000);
}

$('quiz-start').addEventListener('click', () => startQuiz(false));
$('quiz-mock-start').addEventListener('click', () => startQuiz(true));

function renderQuizQuestion() {
  const item = quiz.items[quiz.idx];
  const isScenario = !!item.img;

  if (isScenario) {
    const sc = item;
    const qText = quiz.lang === 'ar' ? sc.questionAr : sc.questionSv;
    const opts = quiz.lang === 'ar' ? sc.optionsAr : sc.optionsSv;
    
    $('quiz-sign').className = 'quiz-sign scenario-img';
    if (sc.img.trim().startsWith('<svg')) {
      $('quiz-sign').innerHTML = sc.img;
    } else {
      $('quiz-sign').innerHTML = `<img src="${sc.img}" class="scenario-img-actual" style="width:100%; height:100%; object-fit:cover; display:block;">`;
    }
    
    $('quiz-question-text').textContent = qText;
    $('quiz-question-text').classList.remove('hidden');
    
    $('quiz-options').className = 'quiz-options scenario-options';
    $('quiz-options').innerHTML = opts.map((optText, i) =>
      `<button class="quiz-option scenario-btn" data-idx="${i}">
        <span>${optText}</span>
      </button>`
    ).join('');
    
    $$('.quiz-option', $('quiz-options')).forEach(btn => {
      btn.addEventListener('click', () => handleQuizAnswerScenario(btn, sc));
    });
  } else {
    $('quiz-sign').className = 'quiz-sign';
    $('quiz-question-text').classList.add('hidden');
    $('quiz-options').className = 'quiz-options';
    
    const s = quiz.items[quiz.idx];
    const cat = catBy(s.category);
    const samePool = signsIn(s.category).filter(x => x.id !== s.id);
    const distractors = sample(samePool.length >= 3 ? samePool : SIGNS.filter(x => x.id !== s.id), 3);
    const opts = shuffle([s, ...distractors]);
    $('quiz-sign').innerHTML = s.svg;
    $('quiz-options').innerHTML = opts.map(o =>
      `<button class="quiz-option" data-id="${o.id}">
        <span class="opt-ar" dir="rtl" lang="ar">${o.nameAr}</span>
        <span class="opt-sv" dir="ltr" lang="sv">${o.nameSv}</span>
      </button>`
    ).join('');
    $$('.quiz-option', $('quiz-options')).forEach(btn => {
      btn.addEventListener('click', () => handleQuizAnswer(btn, s));
    });
  }

  // Update counters and progress bar
  $('quiz-correct').textContent = quiz.correct;
  $('quiz-wrong').textContent = quiz.wrong;
  $('quiz-position').textContent = `${quiz.idx + 1}/${quiz.items.length}`;
  const pct = ((quiz.idx + 1) / quiz.items.length) * 100;
  $('quiz-progress').style.width = pct + '%';
  $('quiz-next').classList.add('hidden');
}

function handleQuizAnswerScenario(btn, sc) {
  const chosenIdx = parseInt(btn.dataset.idx, 10);
  const correct = chosenIdx === sc.correctIdx;
  $$('.quiz-option').forEach(b => {
    b.classList.add('disabled');
    const idx = parseInt(b.dataset.idx, 10);
    if (idx === sc.correctIdx) b.classList.add('correct');
    else if (b === btn && !correct) b.classList.add('wrong');
  });
  if (correct) {
    quiz.correct++;
    delete progress.mistakes[sc.id]; // Remove from mistakes if correct now
    $('quiz-correct').textContent = quiz.correct;
    speak(quiz.lang === 'ar' ? 'إجابة صحيحة' : 'Rätt', quiz.lang === 'ar' ? 'ar-SA' : 'sv-SE');
  } else {
    quiz.wrong++;
    quiz.wrongPool.push(sc);
    progress.mistakes[sc.id] = true; // Save mistake
    $('quiz-wrong').textContent = quiz.wrong;
  }
  saveProgress();
  $('quiz-next').classList.remove('hidden');
}

function handleQuizAnswer(btn, sign) {
  const chosen = btn.dataset.id;
  const correct = chosen === sign.id;
  $$('.quiz-option').forEach(b => {
    b.classList.add('disabled');
    if (b.dataset.id === sign.id) b.classList.add('correct');
    else if (b === btn && !correct) b.classList.add('wrong');
  });
  if (correct) {
    quiz.correct++;
    delete progress.mistakes[sign.id]; // Remove from mistakes if correct now
    $('quiz-correct').textContent = quiz.correct;
    speak(quiz.lang === 'ar' ? 'إجابة صحيحة' : 'Rätt', quiz.lang === 'ar' ? 'ar-SA' : 'sv-SE');
  } else {
    quiz.wrong++;
    quiz.wrongPool.push(sign);
    progress.mistakes[sign.id] = true; // Save mistake
    $('quiz-wrong').textContent = quiz.wrong;
  }
  saveProgress();
  $('quiz-next').classList.remove('hidden');
}

$('quiz-type').addEventListener('change', (e) => {
  if (e.target.value === 'scenarios') {
    $('quiz-cat-wrapper').style.display = 'none';
  } else {
    $('quiz-cat-wrapper').style.display = 'block';
  }
});

$('quiz-next').addEventListener('click', () => {
  quiz.idx++;
  if (quiz.idx >= quiz.items.length) {
    if (quiz.wrongPool.length > 0) {
      quiz.items = quiz.wrongPool;
      quiz.idx = 0;
      quiz.wrongPool = [];
      toast(T('msg.reviewRound'), 2500);
      renderQuizQuestion();
    } else {
      finishQuiz();
    }
  } else {
    renderQuizQuestion();
  }
});

function finishQuiz() {
  if (quiz.timerInterval) clearInterval(quiz.timerInterval);
  if (quiz.correct > 0) addXP(quiz.correct * 10);
  
  $('quiz-game').classList.add('hidden');
  $('quiz-result').classList.remove('hidden');
  
  const total = quiz.correct + quiz.wrong;
  const pct = total ? Math.round((quiz.correct / total) * 100) : 0;
  
  if (quiz.isMock) {
    const passed = quiz.correct >= 56; // 80% pass mark for 70 questions
    $('quiz-result-title').textContent = passed ? T('quiz.mock.pass') : T('quiz.mock.fail');
    $('quiz-result-title').style.color = passed ? 'var(--success)' : 'var(--danger)';
  } else {
    $('quiz-result-title').textContent = T('game.over');
    $('quiz-result-title').style.color = 'inherit';
  }

  const lbl = state.lang === 'ar' ? 'النسبة' : 'Resultat';
  $('quiz-score-final').innerHTML = `${quiz.correct} ✓ / ${total} <br><span style="font-size:18px; color:var(--text-soft)">${lbl}: ${pct}%</span>`;
  
  if (quiz.isMock && quiz.correct < 56) {
    $('quiz-result-meta').innerHTML = state.lang === 'ar' 
      ? `<p style="color:var(--text-soft)">درجة النجاح هي 56/70. لا تيأس، استمر في التدريب!</p>`
      : `<p style="color:var(--text-soft)">Gränsen för godkänt är 56/70. Ge inte upp, fortsätt öva!</p>`;
  } else {
    $('quiz-result-meta').innerHTML = '';
  }
}

$('quiz-restart').addEventListener('click', () => {
  $('quiz-result').classList.add('hidden');
  $('quiz-setup').classList.remove('hidden');
});

// ===== FLIP CARDS =====
const flip = { items: [], idx: 0 };

$('flip-start').addEventListener('click', () => {
  const cat = $('flip-category').value;
  const onlyUnknown = $('flip-only-unknown').checked;
  let pool = signsIn(cat);
  if (onlyUnknown) pool = pool.filter(s => progress.review[s.id]);
  if (pool.length === 0) { toast(T('msg.flipEmpty')); return; }
  flip.items = shuffle(pool);
  flip.idx = 0;
  $('flip-setup').classList.add('hidden');
  $('flip-game').classList.remove('hidden');
  renderFlipCard();
});

$('flip-reset-progress').addEventListener('click', () => {
  if (!confirm(T('msg.confirmReset'))) return;
  progress.known = {}; progress.review = {};
  saveProgress();
  toast(T('msg.cleared'));
  updateFlipCounters();
});

function renderFlipCard() {
  const s = flip.items[flip.idx];
  const isAr = state.lang === 'ar';
  const primaryLang = isAr ? 'ar' : 'sv';
  const secondaryLang = isAr ? 'sv' : 'ar';
  const primaryName = isAr ? s.nameAr : s.nameSv;
  const secondaryName = isAr ? s.nameSv : s.nameAr;
  const primaryDesc = isAr ? (s.descAr || '') : (s.descSv || '');

  $('flipcard').classList.remove('flipped');
  $('flip-sign-svg').innerHTML = s.svg;
  const primary = $('flip-primary');
  const secondary = $('flip-secondary');
  primary.textContent = primaryName;
  setLangDir(primary, primaryLang);
  primary.style.textAlign = 'center';
  secondary.textContent = secondaryName;
  setLangDir(secondary, secondaryLang);
  secondary.style.textAlign = 'center';

  const desc = $('flip-desc');
  if (primaryDesc && !isDuplicate(primaryName, primaryDesc)) {
    desc.textContent = primaryDesc;
    setLangDir(desc, primaryLang);
    desc.style.textAlign = 'center';
    desc.classList.remove('hidden');
  } else desc.classList.add('hidden');

  $('flip-name-sv-data').textContent = s.nameSv;
  $('flip-name-ar-data').textContent = s.nameAr;
  document.querySelectorAll('#flipcard .btn-tts').forEach(b => b.dataset.signId = s.id);
  $('flip-position').textContent = `${flip.idx + 1}/${flip.items.length}`;
  updateFlipCounters();
}

function updateFlipCounters() {
  $('flip-known').textContent = Object.keys(progress.known).length;
  $('flip-review').textContent = Object.keys(progress.review).length;
}

$('flipcard').addEventListener('click', () => {
  $('flipcard').classList.toggle('flipped');
});

$('flip-known-btn').addEventListener('click', () => {
  const s = flip.items[flip.idx];
  progress.known[s.id] = Date.now();
  delete progress.review[s.id];
  saveProgress();
  addXP(5);
  nextFlip();
});

$('flip-review-btn').addEventListener('click', () => {
  const s = flip.items[flip.idx];
  progress.review[s.id] = Date.now();
  delete progress.known[s.id];
  saveProgress();
  nextFlip();
});

$('flip-prev').addEventListener('click', () => {
  if (flip.idx > 0) { flip.idx--; renderFlipCard(); }
});

function nextFlip() {
  if (flip.idx + 1 >= flip.items.length) {
    toast(T('msg.flipDone'), 2500);
    $('flip-game').classList.add('hidden');
    $('flip-setup').classList.remove('hidden');
    return;
  }
  flip.idx++;
  renderFlipCard();
}

// ===== MEMORY =====
const memory = { cards: [], first: null, second: null, locked: false, found: 0, total: 0, tries: 0, startedAt: 0, timer: null };

$('memory-start').addEventListener('click', () => {
  const pairs = parseInt($('memory-pairs').value, 10);
  const pool = sample(SIGNS, pairs);
  memory.total = pairs;
  memory.found = 0;
  memory.tries = 0;
  memory.first = memory.second = null;
  memory.locked = false;

  const cards = [];
  pool.forEach(s => {
    cards.push({ id: s.id, type: 'img', html: s.svg });
    cards.push({ id: s.id, type: 'text', html: `
      <div dir="rtl" lang="ar" style="font-weight:bold; margin-bottom:8px;">${s.nameAr}</div>
      <div dir="ltr" lang="sv" style="font-size:0.9em; opacity:0.9;">${s.nameSv}</div>
    ` });
  });
  memory.cards = shuffle(cards);

  $('memory-found').textContent = '0';
  $('memory-total').textContent = pairs;
  $('memory-tries').textContent = '0';

  const board = $('memory-board');
  board.className = 'memory-board';
  board.innerHTML = memory.cards.map((c, i) => `
    <div class="memory-card" data-i="${i}" data-id="${c.id}">
      <div class="memory-card-inner">
        <div class="memory-face memory-face-front">?</div>
        <div class="memory-face memory-face-back">${c.html}</div>
      </div>
    </div>
  `).join('');

  $$('.memory-card', board).forEach(card => {
    card.addEventListener('click', () => onMemoryFlip(card));
  });

  $('memory-setup').classList.add('hidden');
  $('memory-game').classList.remove('hidden');
  $('memory-result').classList.add('hidden');

  memory.startedAt = Date.now();
  clearInterval(memory.timer);
  memory.timer = setInterval(() => {
    const sec = Math.floor((Date.now() - memory.startedAt) / 1000);
    $('memory-time').textContent = `${String(Math.floor(sec / 60)).padStart(2,'0')}:${String(sec % 60).padStart(2,'0')}`;
  }, 1000);
});

$('memory-quit').addEventListener('click', () => {
  clearInterval(memory.timer);
  $('memory-game').classList.add('hidden');
  $('memory-setup').classList.remove('hidden');
});

function onMemoryFlip(card) {
  if (memory.locked) return;
  if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
  card.classList.add('flipped');

  if (!memory.first) { memory.first = card; return; }
  if (card === memory.first) return;

  memory.second = card;
  memory.tries++;
  $('memory-tries').textContent = memory.tries;

  if (memory.first.dataset.id === memory.second.dataset.id) {
    memory.first.classList.add('matched');
    memory.second.classList.add('matched');
    memory.first = memory.second = null;
    memory.found++;
    $('memory-found').textContent = memory.found;
    if (memory.found === memory.total) finishMemory();
  } else {
    memory.locked = true;
    setTimeout(() => {
      memory.first.classList.remove('flipped');
      memory.second.classList.remove('flipped');
      memory.first = memory.second = null;
      memory.locked = false;
    }, 900);
  }
}

function finishMemory() {
  clearInterval(memory.timer);
  addXP(memory.total * 5);
  const sec = Math.floor((Date.now() - memory.startedAt) / 1000);
  const time = `${String(Math.floor(sec / 60)).padStart(2,'0')}:${String(sec % 60).padStart(2,'0')}`;
  const tLbl = state.lang === 'ar' ? 'الزمن' : 'Tid';
  const tryLbl = state.lang === 'ar' ? 'المحاولات' : 'Försök';
  $('memory-result-text').innerHTML = `${tLbl}: ${time}<br>${tryLbl}: ${memory.tries}`;
  setTimeout(() => {
    $('memory-game').classList.add('hidden');
    $('memory-result').classList.remove('hidden');
  }, 600);
}

$('memory-restart').addEventListener('click', () => {
  $('memory-result').classList.add('hidden');
  $('memory-setup').classList.remove('hidden');
});

// ===== ARCADE GAMES MENU =====
function openGame(gameId) {
  $('games-menu').classList.add('hidden');
  $$('.sub-game').forEach(g => g.classList.add('hidden'));
  $(`game-${gameId}`).classList.remove('hidden');
}

function closeGame() {
  $$('.sub-game').forEach(g => g.classList.add('hidden'));
  $('games-menu').classList.remove('hidden');
  
  clearInterval(memory.timer);
  $('memory-game').classList.add('hidden');
  $('memory-result').classList.add('hidden');
  $('memory-setup').classList.remove('hidden');
  
  clearInterval(timeAtt.timer);
  $('time-game').classList.add('hidden');
  $('time-result').classList.add('hidden');
  $('time-setup').classList.remove('hidden');
  
  $('match-game').classList.add('hidden');
  $('match-result').classList.add('hidden');
  $('match-setup').classList.remove('hidden');

  $('swipe-game').classList.add('hidden');
  $('swipe-result').classList.add('hidden');
  $('swipe-setup').classList.remove('hidden');
}

// ===== TIME ATTACK =====
const timeAtt = { score: 0, timeLeft: 60, timer: null, currentSign: null };

$('time-start').addEventListener('click', () => {
  timeAtt.score = 0;
  timeAtt.timeLeft = 60;
  $('time-score').textContent = 0;
  $('time-timer').textContent = 60;
  $('time-setup').classList.add('hidden');
  $('time-game').classList.remove('hidden');
  nextTimeQuestion();
  
  clearInterval(timeAtt.timer);
  timeAtt.timer = setInterval(() => {
    timeAtt.timeLeft--;
    $('time-timer').textContent = timeAtt.timeLeft;
    if (timeAtt.timeLeft <= 0) finishTimeAttack();
  }, 1000);
});

function nextTimeQuestion() {
  const s = sample(SIGNS, 1)[0];
  timeAtt.currentSign = s;
  const samePool = signsIn(s.category).filter(x => x.id !== s.id);
  const distractors = sample(samePool.length >= 3 ? samePool : SIGNS.filter(x => x.id !== s.id), 3);
  const opts = shuffle([s, ...distractors]);
  
  $('time-sign').innerHTML = s.svg;
  $('time-options').innerHTML = opts.map(o =>
    `<button class="quiz-option" data-id="${o.id}">
      <span class="opt-ar" dir="rtl" lang="ar">${o.nameAr}</span>
      <span class="opt-sv" dir="ltr" lang="sv">${o.nameSv}</span>
    </button>`
  ).join('');
  
  $$('.quiz-option', $('time-options')).forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.id === timeAtt.currentSign.id) {
        timeAtt.score++;
        timeAtt.timeLeft += 2; // bonus
        $('time-score').textContent = timeAtt.score;
        btn.classList.add('correct');
        setTimeout(nextTimeQuestion, 300);
      } else {
        timeAtt.timeLeft -= 5; // penalty
        btn.classList.add('wrong');
        const correctBtn = $$('.quiz-option', $('time-options')).find(b => b.dataset.id === timeAtt.currentSign.id);
        if (correctBtn) correctBtn.classList.add('correct');
        setTimeout(nextTimeQuestion, 600);
      }
      $('time-timer').textContent = timeAtt.timeLeft;
    });
  });
}

function finishTimeAttack() {
  clearInterval(timeAtt.timer);
  $('time-game').classList.add('hidden');
  $('time-result').classList.remove('hidden');
  $('time-score-final').textContent = timeAtt.score;
  if (timeAtt.score > 0) addXP(timeAtt.score * 5);
}
$('time-restart').addEventListener('click', () => {
  $('time-result').classList.add('hidden');
  $('time-setup').classList.remove('hidden');
});

// ===== MATCH GAME =====
const matchG = { round: 1, score: 0, items: [], selectedName: null, selectedSign: null, matchedCount: 0 };

$('match-start').addEventListener('click', () => {
  matchG.round = 1;
  matchG.score = 0;
  $('match-setup').classList.add('hidden');
  $('match-game').classList.remove('hidden');
  startMatchRound();
});

function startMatchRound() {
  if (matchG.round > 5) {
    $('match-game').classList.add('hidden');
    $('match-result').classList.remove('hidden');
    addXP(matchG.score * 10);
    return;
  }
  matchG.matchedCount = 0;
  $('match-round').textContent = matchG.round;
  $('match-score').textContent = matchG.score;
  
  const pool = sample(SIGNS, 5);
  const names = shuffle([...pool]);
  const signs = shuffle([...pool]);
  
  const isAr = state.lang === 'ar';
  
  $('match-board').innerHTML = `
    <div class="match-col" id="match-names">
      ${names.map(s => `
        <div class="match-item m-name" data-id="${s.id}">
          <div dir="rtl" lang="ar" style="font-weight:bold; margin-bottom:4px;">${s.nameAr}</div>
          <div dir="ltr" lang="sv" style="font-size:0.9em; opacity:0.9;">${s.nameSv}</div>
        </div>`).join('')}
    </div>
    <div class="match-col" id="match-signs">
      ${signs.map(s => `<div class="match-item m-sign" data-id="${s.id}" style="width:70px; height:70px; margin:0 auto; padding:5px;">${s.svg}</div>`).join('')}
    </div>
  `;
  
  $$('.m-name').forEach(el => el.addEventListener('click', () => {
    $$('.m-name').forEach(e => e.classList.remove('selected'));
    el.classList.add('selected');
    matchG.selectedName = el;
    checkMatch();
  }));
  
  $$('.m-sign').forEach(el => el.addEventListener('click', () => {
    $$('.m-sign').forEach(e => e.classList.remove('selected'));
    el.classList.add('selected');
    matchG.selectedSign = el;
    checkMatch();
  }));
}

function checkMatch() {
  if (matchG.selectedName && matchG.selectedSign) {
    if (matchG.selectedName.dataset.id === matchG.selectedSign.dataset.id) {
      matchG.selectedName.classList.add('matched');
      matchG.selectedSign.classList.add('matched');
      matchG.score++;
      $('match-score').textContent = matchG.score;
      matchG.matchedCount++;
      if (matchG.matchedCount === 5) {
        matchG.round++;
        setTimeout(startMatchRound, 500);
      }
    } else {
      matchG.selectedName.classList.remove('selected');
      matchG.selectedSign.classList.remove('selected');
      toast(T('msg.wrongMatch') || 'خطأ!', 1000);
    }
    matchG.selectedName = null;
    matchG.selectedSign = null;
  }
}
$('match-restart').addEventListener('click', () => {
  $('match-result').classList.add('hidden');
  $('match-setup').classList.remove('hidden');
});

// ===== SWIPE SORTER =====
const swipeG = { score: 0, lives: 3, current: null };

$('swipe-start').addEventListener('click', () => {
  swipeG.score = 0;
  swipeG.lives = 3;
  $('swipe-score').textContent = 0;
  $('swipe-lives').textContent = 3;
  
  const isAr = state.lang === 'ar';
  const mainCats = CATEGORIES.slice(0, 6);
  $('swipe-buttons').innerHTML = mainCats.map(c => 
    `<button class="btn btn-secondary" data-cat="${c.key}" style="border-color:${c.color}; padding:10px; display:flex; flex-direction:column; align-items:center; gap:4px;">
      <span style="font-weight:bold;">${c.icon} <span dir="rtl" lang="ar">${c.nameAr}</span></span>
      <span dir="ltr" lang="sv" style="font-size:0.85em; opacity:0.9;">${c.nameSv}</span>
    </button>`
  ).join('');
  
  $$('#swipe-buttons button').forEach(btn => {
    btn.addEventListener('click', () => handleSwipe(btn.dataset.cat));
  });

  $('swipe-setup').classList.add('hidden');
  $('swipe-game').classList.remove('hidden');
  nextSwipe();
});

function nextSwipe() {
  const mainCatKeys = CATEGORIES.slice(0, 6).map(c => c.key);
  const pool = SIGNS.filter(s => mainCatKeys.includes(s.category));
  swipeG.current = sample(pool, 1)[0];
  $('swipe-sign').innerHTML = swipeG.current.svg;
  $('swipe-card').style.transform = 'translateX(0) rotate(0)';
  $('swipe-card').style.opacity = '1';
}

function handleSwipe(cat) {
  if (swipeG.current.category === cat) {
    swipeG.score++;
    $('swipe-score').textContent = swipeG.score;
    $('swipe-card').style.transform = 'translateX(100px) rotate(15deg)';
    $('swipe-card').style.opacity = '0';
    setTimeout(nextSwipe, 300);
  } else {
    swipeG.lives--;
    $('swipe-lives').textContent = swipeG.lives;
    $('swipe-card').style.transform = 'translateX(-20px)';
    setTimeout(() => $('swipe-card').style.transform = 'translateX(20px)', 100);
    setTimeout(() => $('swipe-card').style.transform = 'translateX(0)', 200);
    if (swipeG.lives <= 0) setTimeout(finishSwipe, 300);
  }
}

function finishSwipe() {
  $('swipe-game').classList.add('hidden');
  $('swipe-result').classList.remove('hidden');
  $('swipe-score-final').textContent = swipeG.score;
  if (swipeG.score > 0) addXP(swipeG.score * 2);
}
$('swipe-restart').addEventListener('click', () => {
  $('swipe-result').classList.add('hidden');
  $('swipe-setup').classList.remove('hidden');
});

// ===== CHANGELOG MODAL =====
$('changelog-btn').addEventListener('click', () => {
  $('changelog-modal').classList.remove('hidden');
});
$('changelog-close').addEventListener('click', () => {
  $('changelog-modal').classList.add('hidden');
});
$('changelog-modal').addEventListener('click', (e) => {
  if (e.target === $('changelog-modal')) $('changelog-modal').classList.add('hidden');
});

// ===== TTS SETTINGS PANEL =====
$('tts-settings-btn').addEventListener('click', () => {
  $('tts-panel').classList.remove('hidden');
  getVoicesAsync().then(populateVoicePickers);
  $('tts-rate').value = ttsSettings.rate;
  $('tts-rate-val').textContent = ttsSettings.rate.toFixed(2) + 'x';
  $('tts-pitch').value = ttsSettings.pitch;
  $('tts-pitch-val').textContent = ttsSettings.pitch.toFixed(2);
});
$('tts-panel-close').addEventListener('click', () => $('tts-panel').classList.add('hidden'));
$('tts-panel').addEventListener('click', (e) => {
  if (e.target === $('tts-panel')) $('tts-panel').classList.add('hidden');
});

$('tts-voice-ar').addEventListener('change', (e) => {
  ttsSettings.voiceAr = e.target.value;
  saveTtsSettings();
  refreshVoiceCache();
});
$('tts-voice-sv').addEventListener('change', (e) => {
  ttsSettings.voiceSv = e.target.value;
  saveTtsSettings();
  refreshVoiceCache();
});
$('tts-rate').addEventListener('input', (e) => {
  ttsSettings.rate = parseFloat(e.target.value);
  $('tts-rate-val').textContent = ttsSettings.rate.toFixed(2) + 'x';
  saveTtsSettings();
});
$('tts-pitch').addEventListener('input', (e) => {
  ttsSettings.pitch = parseFloat(e.target.value);
  $('tts-pitch-val').textContent = ttsSettings.pitch.toFixed(2);
  saveTtsSettings();
});
$('tts-test-ar').addEventListener('click', (e) => {
  speak('علامة تحذير من منعطف خطير', 'ar-SA', e.currentTarget);
});
$('tts-test-sv').addEventListener('click', (e) => {
  speak('Varning för farlig kurva', 'sv-SE', e.currentTarget);
});

// ===== INIT =====
function init() {
  applyLang();
  updateFlipCounters();

  // Service worker — auto-reload when a new version takes control
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
    let reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (reloaded) return;
      reloaded = true;
      location.reload();
    });
  }
}
init();

// expose for inline handlers in browse cards
window.openModal = openModal;
window.state = state;
window.renderBrowse = renderBrowse;
