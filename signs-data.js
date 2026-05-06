// Svenska Vägmärken — بيانات علامات الطرق السويدية
// المصدر: transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/vagmarken/

const CATEGORIES = [
  { key: 'varning',       nameSv: 'Varningsmärken',                            nameAr: 'علامات التحذير',                  color: '#FFC700', icon: '⚠️' },
  { key: 'vajning',       nameSv: 'Väjningspliktsmärken',                      nameAr: 'علامات الأولوية',                 color: '#E63946', icon: '🛑' },
  { key: 'forbud',        nameSv: 'Förbudsmärken',                             nameAr: 'علامات الحظر',                    color: '#C8102E', icon: '🚫' },
  { key: 'pabud',         nameSv: 'Påbudsmärken',                              nameAr: 'علامات الإلزام',                  color: '#003F87', icon: '⬆️' },
  { key: 'anvisning',     nameSv: 'Anvisningsmärken',                          nameAr: 'علامات الإرشاد',                  color: '#0072CE', icon: '🅿️' },
  { key: 'vagvisning',    nameSv: 'Lokaliseringsmärken för vägvisning',        nameAr: 'لافتات التوجيه على الطرق',        color: '#1B5E20', icon: '➡️' },
  { key: 'gangcykel',     nameSv: 'Lokaliseringsmärken för gång- och cykeltrafik', nameAr: 'لافتات للمشاة والدراجات',     color: '#1B5E20', icon: '🚶' },
  { key: 'allmanna',      nameSv: 'Lokaliseringsmärken för allmänna inrättningar', nameAr: 'لافتات المرافق العامة',        color: '#0072CE', icon: '🏛️' },
  { key: 'service',       nameSv: 'Lokaliseringsmärken för serviceanläggningar', nameAr: 'لافتات الخدمات',                color: '#0072CE', icon: '⛽' },
  { key: 'turist',        nameSv: 'Lokaliseringsmärken för turistiskt intressanta mål', nameAr: 'لافتات سياحية',           color: '#8B4513', icon: '🏰' },
  { key: 'upplysning',    nameSv: 'Upplysningsmärken',                         nameAr: 'علامات المعلومات',                color: '#0072CE', icon: 'ℹ️' },
  { key: 'vagmark',       nameSv: 'Vägmarkeringar',                            nameAr: 'علامات الطريق على الأرض',        color: '#FFFFFF', icon: '〰️' },
  { key: 'polis',         nameSv: 'Tecken av polisman',                        nameAr: 'إشارات شرطي المرور',              color: '#1B5E20', icon: '👮' },
  { key: 'symboler',      nameSv: 'Symboler',                                  nameAr: 'الرموز',                          color: '#666666', icon: '🔣' },
  { key: 'tillagg',       nameSv: 'Tilläggstavlor',                            nameAr: 'لوحات تكميلية',                   color: '#FFFFFF', icon: '➕' },
  { key: 'trafiksignal',  nameSv: 'Trafiksignaler',                            nameAr: 'إشارات المرور الضوئية',           color: '#222222', icon: '🚦' },
  { key: 'vakt',          nameSv: 'Tecken av vakt',                            nameAr: 'إشارات الحارس',                   color: '#1B5E20', icon: '🦺' },
  { key: 'ovriga',        nameSv: 'Andra anordningar för trafikanvisningar',   nameAr: 'أجهزة توجيه أخرى',               color: '#FF8C00', icon: '🚧' },
  { key: 'jarnvag',       nameSv: 'Signaler vid järnvägs- eller spårvägskorsningar', nameAr: 'إشارات تقاطعات السكك الحديدية', color: '#C8102E', icon: '🚂' },
];

// ===== مساعدات SVG: قوالب موحدة لكل فئة =====

const W = (inner, opts = {}) => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,8 92,86 8,86" fill="#FFC700" stroke="#C8102E" stroke-width="6" stroke-linejoin="round"/>
  ${inner || ''}
</svg>`;

const F = (inner) => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="44" fill="#FFFFFF" stroke="#C8102E" stroke-width="8"/>
  ${inner || ''}
</svg>`;

const P = (inner) => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="46" fill="#003F87"/>
  ${inner || ''}
</svg>`;

const A = (inner, color = '#0072CE') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="6" width="88" height="88" rx="4" fill="${color}" stroke="#FFFFFF" stroke-width="3"/>
  ${inner || ''}
</svg>`;

const VJ = (inner, fill = '#FFFFFF') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,92 92,14 8,14" fill="${fill}" stroke="#C8102E" stroke-width="7" stroke-linejoin="round"/>
  ${inner || ''}
</svg>`;

const STOP = () => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="30,4 70,4 96,30 96,70 70,96 30,96 4,70 4,30" fill="#C8102E" stroke="#FFFFFF" stroke-width="5"/>
  <text x="50" y="60" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">STOP</text>
</svg>`;

const RECT = (inner, fill = '#0072CE') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="4" width="92" height="92" rx="3" fill="${fill}" stroke="#FFFFFF" stroke-width="2"/>
  ${inner || ''}
</svg>`;

const SQ = (inner, fill = '#FFFFFF', stroke = '#000000') => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="4" width="92" height="92" rx="3" fill="${fill}" stroke="${stroke}" stroke-width="3"/>
  ${inner || ''}
</svg>`;

// ===== رموز داخلية مشتركة =====
const txt = (s, opts = {}) => {
  const { x = 50, y = 60, size = 36, color = '#000', weight = 700 } = opts;
  return `<text x="${x}" y="${y}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}">${s}</text>`;
};

const arrow = (rotate = 0, color = '#FFFFFF') => `<g transform="rotate(${rotate} 50 50)">
  <path d="M 50 18 L 70 45 L 60 45 L 60 80 L 40 80 L 40 45 L 30 45 Z" fill="${color}"/>
</g>`;

const carIcon = (color = '#000', x = 50, y = 50, scale = 1) => `<g transform="translate(${x} ${y}) scale(${scale})">
  <path d="M -22 -2 L -18 -10 Q -16 -14 -10 -14 L 10 -14 Q 16 -14 18 -10 L 22 -2 L 22 8 Q 22 12 18 12 L 16 12 Q 16 16 12 16 Q 8 16 8 12 L -8 12 Q -8 16 -12 16 Q -16 16 -16 12 L -18 12 Q -22 12 -22 8 Z" fill="${color}"/>
  <rect x="-14" y="-8" width="28" height="6" fill="#FFF"/>
</g>`;

const personIcon = (color = '#000', x = 50, y = 50, scale = 1) => `<g transform="translate(${x} ${y}) scale(${scale})">
  <circle cx="0" cy="-18" r="6" fill="${color}"/>
  <path d="M -8 -10 L 8 -10 L 6 8 L 10 22 L 4 22 L 0 10 L -4 22 L -10 22 L -6 8 Z" fill="${color}"/>
</g>`;

const bikeIcon = (color = '#000', x = 50, y = 55, scale = 1) => `<g transform="translate(${x} ${y}) scale(${scale})" fill="none" stroke="${color}" stroke-width="3">
  <circle cx="-14" cy="6" r="9"/>
  <circle cx="14" cy="6" r="9"/>
  <path d="M -14 6 L -2 -8 L 10 -8 L 14 6" stroke-linejoin="round"/>
  <line x1="-2" y1="-8" x2="2" y2="6"/>
</g>`;

// ===== بيانات العلامات الكاملة =====
const SIGNS = [
  // ========== 1) VARNINGSMÄRKEN — علامات التحذير ==========
  { id:'A1-1', category:'varning', nameSv:'Varning för farlig kurva', nameAr:'تحذير من منعطف خطير', descSv:'Märket varnar för en farlig kurva.', descAr:'تحذر من وجود منعطف حاد قادم.',
    svg: W(`<path d="M 35 75 Q 35 40 55 40 L 70 40 L 70 30 L 88 47 L 70 65 L 70 55 L 55 55 Q 50 55 50 60 L 50 78 Z" fill="#000"/>`) },
  { id:'A1-2', category:'varning', nameSv:'Varning för farlig kurva (vänster)', nameAr:'تحذير من منعطف خطير يساراً', descSv:'Varnar för en farlig vänsterkurva.', descAr:'منعطف خطير ناحية اليسار.',
    svg: W(`<g transform="translate(100 0) scale(-1 1)"><path d="M 35 75 Q 35 40 55 40 L 70 40 L 70 30 L 88 47 L 70 65 L 70 55 L 55 55 Q 50 55 50 60 L 50 78 Z" fill="#000"/></g>`) },
  { id:'A2-1', category:'varning', nameSv:'Varning för flera kurvor', nameAr:'تحذير من عدة منعطفات', descSv:'Varnar för minst två kurvor som följer på varandra.', descAr:'منعطفات متتالية على الطريق.',
    svg: W(`<path d="M 25 80 Q 25 60 40 60 Q 55 60 55 40 Q 55 25 70 25 L 78 25" stroke="#000" stroke-width="6" fill="none" stroke-linecap="round"/>`) },
  { id:'A3', category:'varning', nameSv:'Varning för nedförslutning', nameAr:'تحذير من منحدر هابط', descSv:'Varnar för en brant nedförslutning.', descAr:'الطريق ينحدر إلى الأسفل.',
    svg: W(`${txt('10%', { y: 78, size: 14 })}<path d="M 22 35 L 78 78 L 22 78 Z" fill="#000"/>`) },
  { id:'A4', category:'varning', nameSv:'Varning för uppförslutning', nameAr:'تحذير من منحدر صاعد', descSv:'Varnar för en brant uppförslutning.', descAr:'الطريق يرتفع بشكل حاد.',
    svg: W(`${txt('10%', { y: 78, size: 14 })}<path d="M 22 78 L 78 35 L 78 78 Z" fill="#000"/>`) },
  { id:'A5', category:'varning', nameSv:'Varning för avsmalnande väg', nameAr:'تحذير من ضيق الطريق', descSv:'Vägbanan blir smalare framöver, var beredd att anpassa körningen.', descAr:'يضيق الطريق من جانب أو الجانبين، استعد لتعديل قيادتك.',
    svg: W(`<path d="M 25 35 L 40 75 L 60 75 L 75 35" stroke="#000" stroke-width="5" fill="none"/>`) },
  { id:'A6', category:'varning', nameSv:'Varning för bro', nameAr:'تحذير من جسر متحرك', descSv:'Varnar för en öppningsbar bro.', descAr:'تحذير من جسر متحرك يمكن فتحه لمرور السفن، فيتوقف المرور مؤقتاً.',
    svg: W(`<rect x="22" y="55" width="56" height="6" fill="#000"/><path d="M 25 55 L 25 40 L 35 35" stroke="#000" stroke-width="4" fill="none"/><path d="M 75 55 L 75 40 L 65 35" stroke="#000" stroke-width="4" fill="none"/>`) },
  { id:'A7', category:'varning', nameSv:'Varning för kaj', nameAr:'تحذير من رصيف ميناء', descSv:'Varnar för risk att köra i vatten.', descAr:'خطر السقوط في الماء.',
    svg: W(`<rect x="20" y="65" width="60" height="3" fill="#000"/><path d="M 22 70 Q 30 75 38 70 Q 46 75 54 70 Q 62 75 70 70 Q 78 75 78 70" stroke="#0072CE" stroke-width="3" fill="none"/>${carIcon('#000', 50, 55, 0.7)}`) },
  { id:'A8', category:'varning', nameSv:'Varning för ojämn väg', nameAr:'تحذير من طريق غير مستوٍ', descSv:'Varnar för gupp eller ojämnheter.', descAr:'مطبات أو حفر في الطريق.',
    svg: W(`<path d="M 18 65 Q 30 45 42 65 Q 54 45 66 65 Q 78 45 82 65" stroke="#000" stroke-width="5" fill="none"/>`) },
  { id:'A9', category:'varning', nameSv:'Varning för farthinder', nameAr:'تحذير من مطب صناعي', descSv:'Varnar för ett farthinder.', descAr:'وجود مطب صناعي على الطريق لتخفيض السرعة، خفض سرعتك قبل العبور.',
    svg: W(`<path d="M 20 70 Q 50 30 80 70 Z" fill="#000"/>`) },
  { id:'A10', category:'varning', nameSv:'Varning för stenskott', nameAr:'تحذير من تطاير الحصى', descSv:'Risk att löst grus eller småsten slungas upp av andra fordon.', descAr:'خطر تطاير أحجار صغيرة.',
    svg: W(`${carIcon('#000', 35, 60, 0.6)}<circle cx="65" cy="40" r="2" fill="#000"/><circle cx="72" cy="48" r="2" fill="#000"/><circle cx="78" cy="55" r="2" fill="#000"/><circle cx="60" cy="50" r="1.5" fill="#000"/>`) },
  { id:'A11', category:'varning', nameSv:'Varning för stenras', nameAr:'تحذير من انهيار صخري', descSv:'Risk för fallande stenar.', descAr:'سقوط صخور من الجبل.',
    svg: W(`<path d="M 78 30 L 78 75 L 25 75 Z" fill="#666"/><circle cx="50" cy="55" r="5" fill="#000"/><circle cx="40" cy="68" r="4" fill="#000"/><circle cx="58" cy="65" r="3" fill="#000"/>`) },
  { id:'A12', category:'varning', nameSv:'Varning för slirig väg', nameAr:'تحذير من طريق زلق', descSv:'Vägen kan vara hal på grund av is, snö, regn eller löv.', descAr:'الطريق قد يكون زلقاً بسبب الجليد أو الثلج أو المطر.',
    svg: W(`${carIcon('#000', 50, 50, 0.7)}<path d="M 25 78 Q 35 70 45 78 Q 55 70 65 78 Q 75 70 78 78" stroke="#000" stroke-width="3" fill="none"/>`) },
  { id:'A13', category:'varning', nameSv:'Varning för farlig vägkant', nameAr:'تحذير من حافة طريق خطرة', descSv:'Vägkanten är ostadig, brant eller saknar skyddsräcke.', descAr:'حافة الطريق غير مستقرة أو حادة الانحدار، احذر الانحراف للجانب.',
    svg: W(`<path d="M 20 70 L 80 70 L 75 80 L 25 80 Z" fill="#000"/><path d="M 50 30 L 50 65" stroke="#000" stroke-width="4"/>`) },
  { id:'A14', category:'varning', nameSv:'Varning för vägarbete', nameAr:'تحذير من أعمال طريق', descSv:'Pågående vägarbete framöver, sänk hastigheten och var uppmärksam.', descAr:'وجود أعمال إنشاء أو صيانة، خفّض السرعة وانتبه للعمال والمعدات.',
    svg: W(`${personIcon('#000', 50, 55, 1.1)}<path d="M 65 50 L 75 75" stroke="#000" stroke-width="4"/><circle cx="75" cy="78" r="5" fill="#000"/>`) },
  { id:'A15', category:'varning', nameSv:'Varning för trafiksignaler', nameAr:'تحذير من إشارة مرور', descSv:'Trafikljus reglerar trafiken längre fram, var beredd att stanna.', descAr:'إشارة مرور ضوئية تنظم السير على الطريق التالي، استعد للتوقف.',
    svg: W(`<rect x="42" y="32" width="16" height="40" rx="3" fill="#000"/><circle cx="50" cy="40" r="4" fill="#C8102E"/><circle cx="50" cy="52" r="4" fill="#FFC700"/><circle cx="50" cy="64" r="4" fill="#1B5E20"/>`) },
  { id:'A16', category:'varning', nameSv:'Varning för fotgängare', nameAr:'تحذير من مشاة', descSv:'Fotgängare på eller vid vägen.', descAr:'وجود مشاة على الطريق.',
    svg: W(`${personIcon('#000', 50, 55, 1.4)}`) },
  { id:'A17', category:'varning', nameSv:'Varning för barn', nameAr:'تحذير من أطفال', descSv:'Barn kan finnas på eller vid vägen, t.ex. nära skola.', descAr:'وجود أطفال (قرب مدرسة عادةً).',
    svg: W(`${personIcon('#000', 42, 60, 1.0)}${personIcon('#000', 60, 60, 0.7)}`) },
  { id:'A18', category:'varning', nameSv:'Varning för cyklande', nameAr:'تحذير من دراجات', descSv:'Cyklande kan korsa eller färdas på vägen.', descAr:'وجود راكبي دراجات على الطريق.',
    svg: W(`${bikeIcon('#000', 50, 60, 1.4)}`) },
  { id:'A19', category:'varning', nameSv:'Varning för ridande', nameAr:'تحذير من فرسان', descSv:'Ridande kan finnas på eller vid vägen.', descAr:'وجود ركاب خيل على الطريق.',
    svg: W(`<path d="M 30 70 L 35 50 L 55 45 L 65 50 L 70 70 M 55 45 L 60 30 L 70 35" stroke="#000" stroke-width="4" fill="none"/>${personIcon('#000', 55, 30, 0.6)}`) },
  { id:'A20-1', category:'varning', nameSv:'Varning för djur (älg)', nameAr:'تحذير من حيوانات (موظ)', descSv:'Risk för älg som kan korsa vägen, särskilt vid gryning och skymning.', descAr:'خطر عبور حيوان الموز (Älg)، يكثر عند الفجر والغسق.',
    svg: W(`<path d="M 30 75 L 35 50 L 45 45 L 55 50 L 60 75 M 45 45 L 50 30 M 50 30 L 40 25 M 50 30 L 60 25" stroke="#000" stroke-width="4" fill="none" stroke-linecap="round"/>`) },
  { id:'A20-2', category:'varning', nameSv:'Varning för djur (ren)', nameAr:'تحذير من حيوانات (الرنة)', descSv:'Risk för ren som kan röra sig på eller längs vägen.', descAr:'خطر وجود الرنة على أو قرب الطريق، شائع في شمال السويد.',
    svg: W(`<path d="M 28 70 L 32 48 L 42 42 L 56 48 L 60 70 M 42 42 L 48 28 M 48 28 L 38 22 M 48 28 L 58 22" stroke="#000" stroke-width="3.5" fill="none" stroke-linecap="round"/>`) },
  { id:'A20-3', category:'varning', nameSv:'Varning för djur (hjort)', nameAr:'تحذير من حيوانات (غزال)', descSv:'Risk för hjort som kan korsa vägen, oftast i gryning eller skymning.', descAr:'خطر عبور غزال للطريق، خاصة عند الفجر والغسق.',
    svg: W(`<path d="M 30 75 L 35 50 L 45 47 L 55 50 L 60 75 M 45 47 L 48 33" stroke="#000" stroke-width="4" fill="none" stroke-linecap="round"/>`) },
  { id:'A21', category:'varning', nameSv:'Varning för annan fara', nameAr:'تحذير من خطر آخر', descSv:'Annan fara än de som anges av andra varningsmärken.', descAr:'خطر آخر غير مذكور بعلامة محددة.',
    svg: W(`${txt('!', { y: 75, size: 50, weight: 900 })}`) },
  { id:'A22', category:'varning', nameSv:'Varning för vägkorsning', nameAr:'تحذير من تقاطع', descSv:'Vägkorsning där högerregeln gäller.', descAr:'تقاطع طرق تطبق فيه قاعدة الأولوية لليمين.',
    svg: W(`<rect x="46" y="30" width="8" height="50" fill="#000"/><rect x="25" y="51" width="50" height="8" fill="#000"/>`) },
  { id:'A23', category:'varning', nameSv:'Varning för cirkulationsplats', nameAr:'تحذير من دوار', descSv:'En rondell finns framåt, lämna företräde åt fordon i cirkulationen.', descAr:'دوار (Rondell) قادم، أعطِ الأولوية للمركبات داخله.',
    svg: W(`<circle cx="50" cy="55" r="18" fill="none" stroke="#000" stroke-width="5"/><path d="M 50 35 L 55 30 M 50 35 L 45 30 M 70 55 L 75 50 M 70 55 L 75 60 M 50 75 L 55 80 M 50 75 L 45 80" stroke="#000" stroke-width="4" fill="none"/>`) },
  { id:'A24', category:'varning', nameSv:'Varning för järnvägskorsning med bommar', nameAr:'تحذير من تقاطع سكة حديد ببوابات', descSv:'Järnvägskorsning utrustad med bommar som hindrar passage vid tågrörelse.', descAr:'تقاطع سكة حديد مزود بحواجز تنزل أوتوماتيكياً عند مرور القطار.',
    svg: W(`<path d="M 25 65 L 75 65 M 30 50 L 70 50" stroke="#000" stroke-width="4"/><rect x="42" y="35" width="16" height="6" fill="#000"/>`) },
  { id:'A25', category:'varning', nameSv:'Varning för järnvägskorsning utan bommar', nameAr:'تحذير من تقاطع سكة حديد بدون بوابات', descSv:'Järnvägskorsning utan bommar, var extra uppmärksam på annalkande tåg.', descAr:'تقاطع سكة حديد بدون حواجز، يلزم التحقق بنفسك من خلوّ السكة.',
    svg: W(`<path d="M 30 70 L 70 30 M 30 30 L 70 70" stroke="#000" stroke-width="5"/>`) },
  { id:'A26', category:'varning', nameSv:'Varning för kö', nameAr:'تحذير من ازدحام مروري', descSv:'Risk för köbildning eller långsam trafik framåt.', descAr:'احتمال وجود ازدحام أو حركة بطيئة جداً، استعد للإبطاء.',
    svg: W(`${carIcon('#000', 50, 45, 0.55)}${carIcon('#000', 50, 60, 0.55)}${carIcon('#000', 50, 75, 0.55)}`) },
  { id:'A27', category:'varning', nameSv:'Varning för tunnel', nameAr:'تحذير من نفق', descSv:'En tunnel finns framåt, tänd ljusen och håll avståndet.', descAr:'نفق قادم، شغّل الأضواء وحافظ على المسافة الآمنة.',
    svg: W(`<path d="M 25 80 L 25 55 Q 50 25 75 55 L 75 80 Z" fill="#000"/><path d="M 35 80 L 35 60 Q 50 40 65 60 L 65 80" fill="#FFF"/>`) },
  { id:'A28', category:'varning', nameSv:'Varning för korsande spårvagnstrafik', nameAr:'تحذير من تقاطع ترام', descSv:'Spårvagn kan korsa vägen.', descAr:'ترام قد يقطع الطريق.',
    svg: W(`<rect x="40" y="30" width="20" height="40" fill="#000"/><circle cx="44" cy="74" r="3" fill="#000"/><circle cx="56" cy="74" r="3" fill="#000"/>`) },
  { id:'A29', category:'varning', nameSv:'Varning för flygplan', nameAr:'تحذير من طائرات منخفضة', descSv:'Flygplan kan flyga lågt över vägen och tillfälligt blända eller distrahera.', descAr:'احتمال طائرات تحلّق منخفضة قرب الطريق، قد تشتت الانتباه أو تُحدث ضجيجاً مؤقتاً.',
    svg: W(`<path d="M 50 35 L 75 55 L 70 60 L 55 55 L 55 70 L 50 75 L 45 70 L 45 55 L 30 60 L 25 55 Z" fill="#000"/>`) },
  { id:'A30', category:'varning', nameSv:'Varning för sidvind', nameAr:'تحذير من رياح جانبية', descSv:'Stark sidvind kan påverka fordonet, särskilt höga och lätta fordon.', descAr:'رياح جانبية قوية تؤثر على المركبة، خاصة المركبات العالية الخفيفة.',
    svg: W(`<path d="M 25 45 Q 50 35 70 45 L 65 50 M 25 60 Q 55 50 75 60 L 70 65" stroke="#000" stroke-width="4" fill="none" stroke-linecap="round"/>`) },
  { id:'A31', category:'varning', nameSv:'Varning för mötande trafik', nameAr:'تحذير من حركة مرور قادمة', descSv:'Mötande trafik kan förekomma.', descAr:'مرور قادم من الجهة المقابلة.',
    svg: W(`<path d="M 40 30 L 36 30 L 36 75 L 44 75 L 44 38 L 47 33 Z" fill="#000"/><path d="M 60 75 L 64 75 L 64 30 L 56 30 L 56 67 L 53 72 Z" fill="#000"/>`) },
  { id:'A32', category:'varning', nameSv:'Varning för tvåvägstrafik', nameAr:'تحذير من حركة مرور ثنائية الاتجاه', descSv:'Vägen övergår från enkelriktad till trafik i båda riktningarna.', descAr:'يتحول الطريق من اتجاه واحد إلى اتجاهين، انتبه لمركبات قادمة من الأمام.',
    svg: W(`<path d="M 40 30 L 36 30 L 36 75 L 44 75 L 44 38 L 47 33 Z" fill="#000"/><path d="M 60 75 L 64 75 L 64 30 L 56 30 L 56 67 L 53 72 Z" fill="#000"/>`) },
  { id:'A33', category:'varning', nameSv:'Varning för långsamtgående fordon', nameAr:'تحذير من مركبات بطيئة', descSv:'Långsamtgående fordon kan förekomma.', descAr:'مركبات تسير ببطء (جرارات إلخ).',
    svg: W(`<polygon points="50,35 80,75 20,75" fill="none" stroke="#C8102E" stroke-width="5"/>`) },
  { id:'A34', category:'varning', nameSv:'Varning för olycka', nameAr:'تحذير من حادث', descSv:'En olycka har inträffat framåt, kör försiktigt och följ anvisningar.', descAr:'حادث وقع أمامك، خفض السرعة واتبع التعليمات.',
    svg: W(`${carIcon('#000', 38, 55, 0.6)}${carIcon('#000', 65, 55, 0.6)}<path d="M 48 50 L 55 60 M 55 50 L 48 60" stroke="#C8102E" stroke-width="4"/>`) },
  { id:'A35', category:'varning', nameSv:'Varning för vägkorsning där fordon på anslutande väg har väjningsplikt', nameAr:'تقاطع: المركبات الجانبية ملزمة بإفساح الطريق', descSv:'Trafik från sidogator har väjningsplikt.', descAr:'القادمون من الطرق الجانبية يجب أن يفسحوا الطريق.',
    svg: W(`<rect x="46" y="25" width="8" height="60" fill="#000"/><rect x="25" y="55" width="50" height="6" fill="#000"/>`) },
  { id:'A36', category:'varning', nameSv:'Varning för cykelöverfart', nameAr:'تحذير من معبر دراجات', descSv:'En cykelöverfart finns framåt där cyklister kan ha företräde.', descAr:'معبر دراجات قادم حيث قد تكون للدراجات الأولوية في العبور.',
    svg: W(`${bikeIcon('#000', 50, 58, 1.2)}`) },

  // ========== 2) VÄJNINGSPLIKT — علامات الأولوية ==========
  { id:'B1', category:'vajning', nameSv:'Väjningsplikt', nameAr:'إفساح الطريق', descSv:'Du har väjningsplikt mot trafik på korsande väg.', descAr:'يجب إفساح الطريق للسيارات في الطريق المتقاطع.',
    svg: VJ() },
  { id:'B2', category:'vajning', nameSv:'Stopplikt', nameAr:'قف', descSv:'Stanna helt vid stopplinjen och lämna företräde.', descAr:'توقف تماماً عند الخط ثم تأكد قبل المتابعة.',
    svg: STOP() },
  { id:'B3', category:'vajning', nameSv:'Övergångsställe', nameAr:'معبر مشاة', descSv:'Markerar plats där fotgängare har företräde att korsa vägen.', descAr:'يحدد موقع عبور المشاة، حيث تكون لهم الأولوية لقطع الطريق.',
    svg: VJ(`${personIcon('#000', 50, 55, 1.0)}`, '#FFFFFF') },
  { id:'B4', category:'vajning', nameSv:'Huvudled', nameAr:'طريق رئيسي', descSv:'Huvudled — du har företräde.', descAr:'طريق رئيسي — لديك أولوية المرور.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,8 92,50 50,92 8,50" fill="#FFFFFF" stroke="#000" stroke-width="4"/><polygon points="50,18 82,50 50,82 18,50" fill="#FFC700"/></svg>` },
  { id:'B5', category:'vajning', nameSv:'Huvudled upphör', nameAr:'انتهاء الطريق الرئيسي', descSv:'Huvudleden tar slut och de allmänna väjningsreglerna börjar gälla igen.', descAr:'تشير إلى نهاية الطريق ذي الأولوية، وعندها تعود قواعد الأولوية العامة للسريان.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,8 92,50 50,92 8,50" fill="#FFFFFF" stroke="#000" stroke-width="4"/><polygon points="50,18 82,50 50,82 18,50" fill="#FFC700"/><line x1="20" y1="80" x2="80" y2="20" stroke="#000" stroke-width="6"/></svg>` },
  { id:'B6', category:'vajning', nameSv:'Mötesplats', nameAr:'موضع مرور متبادل', descSv:'Plats där mötande fordon kan passera varandra.', descAr:'مكان لمرور المركبات القادمة من الاتجاهين.',
    svg: A(`<path d="M 35 25 L 35 75 M 35 30 L 30 35 L 35 40 M 35 60 L 40 65 L 35 70 M 60 25 L 60 75 M 60 30 L 65 35 L 60 40 M 60 60 L 55 65 L 60 70" stroke="#FFF" stroke-width="3" fill="none"/>`) },
  { id:'B7', category:'vajning', nameSv:'Väjningsplikt mot mötande trafik', nameAr:'إفساح الطريق للمرور المقابل', descSv:'Väjningsplikt mot mötande trafik på smal väg.', descAr:'يجب إفساح الطريق للمرور القادم.',
    svg: F(`<path d="M 38 25 L 38 75 L 32 65 M 38 75 L 44 65" stroke="#000" stroke-width="4" fill="none"/><path d="M 62 75 L 62 25 L 56 35 M 62 25 L 68 35" stroke="#C8102E" stroke-width="4" fill="none"/>`) },
  { id:'B8', category:'vajning', nameSv:'Mötande trafik har väjningsplikt', nameAr:'المرور المقابل يجب أن يفسح الطريق', descSv:'Mötande trafik måste väja.', descAr:'الطرف المقابل عليه إفساح الطريق لك.',
    svg: A(`<path d="M 38 75 L 38 25 L 32 35 M 38 25 L 44 35" stroke="#FFF" stroke-width="4" fill="none"/><path d="M 62 25 L 62 75 L 56 65 M 62 75 L 68 65" stroke="#C8102E" stroke-width="4" fill="none"/>`) },

  // ========== 3) FÖRBUDSMÄRKEN — علامات الحظر ==========
  { id:'C1', category:'forbud', nameSv:'Förbud mot infart med fordon', nameAr:'ممنوع الدخول', descSv:'Inget motordrivet fordon, cykel eller annat fordon får passera märket.', descAr:'يمنع دخول المركبات بكافة أنواعها.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="44" fill="#C8102E"/><rect x="22" y="44" width="56" height="12" fill="#FFFFFF"/></svg>` },
  { id:'C2', category:'forbud', nameSv:'Förbud mot trafik med fordon', nameAr:'ممنوع المرور لجميع المركبات', descSv:'All fordonstrafik är förbjuden, gäller även cyklar och mopeder.', descAr:'يُمنع مرور كافة المركبات بما فيها الدراجات الهوائية.',
    svg: F() },
  { id:'C3', category:'forbud', nameSv:'Förbud mot trafik med motordrivet fordon', nameAr:'ممنوع المركبات الآلية', descSv:'Förbud mot motordrivet fordon (utom moped klass II).', descAr:'يمنع مرور المركبات بمحرك.',
    svg: F(`${carIcon('#000', 50, 50, 1.0)}`) },
  { id:'C4', category:'forbud', nameSv:'Förbud mot trafik med tung lastbil', nameAr:'ممنوع الشاحنات الثقيلة', descSv:'Lastbilar med totalvikt över 3,5 ton får inte passera märket.', descAr:'يُمنع مرور الشاحنات التي تتجاوز وزنها الإجمالي 3.5 طن.',
    svg: F(`<g transform="translate(50 50)"><rect x="-25" y="-8" width="20" height="14" fill="#000"/><rect x="-5" y="-12" width="22" height="18" fill="#000"/><circle cx="-18" cy="10" r="4" fill="#000"/><circle cx="10" cy="10" r="4" fill="#000"/></g>`) },
  { id:'C5', category:'forbud', nameSv:'Förbud mot trafik med fordon med farligt gods', nameAr:'ممنوع نقل البضائع الخطرة', descSv:'Fordon med farligt gods (kemikalier, explosiva ämnen, brandfarligt) får inte passera.', descAr:'يُمنع مرور المركبات الناقلة لمواد كيميائية أو متفجرة أو قابلة للاشتعال.',
    svg: F(`<rect x="35" y="40" width="30" height="20" fill="#FFC700" stroke="#000" stroke-width="2"/><path d="M 40 50 L 50 42 L 60 50 L 50 58 Z" fill="#C8102E"/>`) },
  { id:'C6', category:'forbud', nameSv:'Förbud mot trafik med motorcykel', nameAr:'ممنوع الدراجات النارية', descSv:'Förbud mot motorcykel och moped klass I.', descAr:'يمنع مرور الدراجات النارية.',
    svg: F(`<g transform="translate(50 55)" fill="#000"><circle cx="-15" cy="0" r="8"/><circle cx="15" cy="0" r="8"/><path d="M -15 0 L 0 -15 L 15 0" stroke="#000" stroke-width="3" fill="none"/></g>`) },
  { id:'C7', category:'forbud', nameSv:'Förbud mot trafik med moped klass II', nameAr:'ممنوع الدراجات الكهربائية الفئة II', descSv:'Moped klass II (max 25 km/h) får inte trafikera vägen efter märket.', descAr:'يُمنع مرور دراجات الفئة II ذات السرعة القصوى 25 كم/س.',
    svg: F(`${bikeIcon('#000', 50, 55, 1.2)}<circle cx="50" cy="35" r="3" fill="#000"/>`) },
  { id:'C8', category:'forbud', nameSv:'Förbud mot trafik med cykel och moped klass II', nameAr:'ممنوع الدراجات', descSv:'Cyklar och moped klass II får inte trafikera vägen.', descAr:'يُمنع مرور الدراجات الهوائية ودراجات الفئة II.',
    svg: F(`${bikeIcon('#000', 50, 55, 1.2)}`) },
  { id:'C9', category:'forbud', nameSv:'Förbud mot trafik med traktor', nameAr:'ممنوع الجرارات', descSv:'Traktorer och motorredskap som väghyvel eller jordbruksmaskin är förbjudna.', descAr:'يُمنع مرور الجرارات والمعدات الزراعية والصناعية ذاتية الحركة.',
    svg: F(`<g transform="translate(50 55)" fill="#000"><rect x="-15" y="-10" width="20" height="14"/><circle cx="-12" cy="8" r="6"/><circle cx="12" cy="8" r="10"/></g>`) },
  { id:'C10', category:'forbud', nameSv:'Förbud mot trafik med fordon lastat med farligt gods för vatten', nameAr:'ممنوع الناقلات الملوثة للمياه', descSv:'Fordon med last som kan förorena vatten är förbjudna, vanligen vid vattenskyddsområden.', descAr:'يحظر المركبات بحمولة ضارة بالمياه.',
    svg: F(`<rect x="32" y="42" width="36" height="18" fill="#000"/><path d="M 50 65 Q 45 75 50 80 Q 55 75 50 65" fill="#0072CE"/>`) },
  { id:'C11', category:'forbud', nameSv:'Förbud mot gångtrafik', nameAr:'ممنوع المشاة', descSv:'Fotgängare får inte beträda vägen efter märket.', descAr:'يُمنع على المشاة الدخول إلى الطريق بعد العلامة.',
    svg: F(`${personIcon('#000', 50, 55, 1.3)}`) },
  { id:'C12', category:'forbud', nameSv:'Förbud mot trafik med annat motordrivet fordon än moped klass II', nameAr:'ممنوع كل المركبات الآلية باستثناء الدراجات المساعدة الفئة II', descSv:'Endast moped klass II tillåten.', descAr:'فقط دراجة كلاس II مسموحة.',
    svg: F(`${carIcon('#000', 35, 40, 0.7)}<g transform="translate(65 60)" fill="#000"><circle cx="-10" cy="0" r="6"/><circle cx="10" cy="0" r="6"/></g>`) },
  { id:'C13', category:'forbud', nameSv:'Ändamålsplats', nameAr:'منطقة لغرض محدد', descSv:'Endast trafik för visst ändamål tillåten.', descAr:'مسموح فقط للمركبات لأغراض محددة.',
    svg: F(`${txt('Ä', { y: 65, size: 40 })}`) },
  { id:'C14', category:'forbud', nameSv:'Återvändsväg', nameAr:'طريق مغلق', descSv:'Vägen är en återvändsgata utan genomfart.', descAr:'الطريق مسدود ولا منفذ منه.',
    svg: A(`<rect x="40" y="25" width="20" height="35" fill="#FFF"/><rect x="30" y="55" width="40" height="8" fill="#FFF"/>`) },
  { id:'C15', category:'forbud', nameSv:'Begränsad fordonsbredd', nameAr:'تحديد عرض المركبة', descSv:'Förbud mot fordon bredare än angivet.', descAr:'ممنوع المركبات الأعرض من المذكور.',
    svg: F(`<path d="M 25 40 L 25 60 M 75 40 L 75 60 M 25 50 L 75 50 M 30 45 L 25 50 L 30 55 M 70 45 L 75 50 L 70 55" stroke="#000" stroke-width="3" fill="none"/>${txt('2,5m', { y: 78, size: 12 })}`) },
  { id:'C16', category:'forbud', nameSv:'Begränsad fordonshöjd', nameAr:'تحديد ارتفاع المركبة', descSv:'Förbud mot fordon högre än angivet.', descAr:'ممنوع المركبات الأطول من المذكور.',
    svg: F(`<path d="M 40 25 L 60 25 M 40 75 L 60 75 M 50 25 L 50 75 M 45 30 L 50 25 L 55 30 M 45 70 L 50 75 L 55 70" stroke="#000" stroke-width="3" fill="none"/>${txt('3,5m', { y: 90, size: 12 })}`) },
  { id:'C17', category:'forbud', nameSv:'Begränsad fordonslängd', nameAr:'تحديد طول المركبة', descSv:'Förbud mot fordon längre än angivet.', descAr:'ممنوع المركبات الأطول من الحد.',
    svg: F(`${carIcon('#000', 50, 50, 0.8)}${txt('12m', { y: 75, size: 12 })}`) },
  { id:'C18', category:'forbud', nameSv:'Begränsad bruttovikt på fordon', nameAr:'تحديد الوزن الإجمالي للمركبة', descSv:'Förbud mot fordon med högre bruttovikt än angivet.', descAr:'ممنوع المركبات التي تتجاوز الوزن المذكور.',
    svg: F(`${txt('5t', { y: 60, size: 32 })}`) },
  { id:'C19', category:'forbud', nameSv:'Begränsad bruttovikt på fordon och fordonståg', nameAr:'تحديد وزن المركبة والقاطرة', descSv:'Förbud mot fordon med högre bruttovikt.', descAr:'ممنوع المركبات والقاطرات الأثقل من المذكور.',
    svg: F(`${txt('20t', { y: 60, size: 26 })}`) },
  { id:'C20', category:'forbud', nameSv:'Begränsad last på axel', nameAr:'تحديد الحمل المحوري', descSv:'Förbud mot fordon med högre axeltryck.', descAr:'ممنوع المركبات بحمل محوري أكبر.',
    svg: F(`<rect x="30" y="55" width="40" height="6" fill="#000"/><circle cx="35" cy="68" r="6" fill="#000"/><circle cx="65" cy="68" r="6" fill="#000"/>${txt('8t', { y: 38, size: 20 })}`) },
  { id:'C21', category:'forbud', nameSv:'Begränsat axeltryck', nameAr:'تحديد ضغط المحور', descSv:'Förbud mot fordon med högre axeltryck än det angivna värdet.', descAr:'يُمنع المركبات التي يتجاوز حملها على المحور القيمة المذكورة.',
    svg: F(`${txt('8t', { y: 60, size: 30 })}`) },
  { id:'C22', category:'forbud', nameSv:'Förbud mot omkörning', nameAr:'ممنوع التجاوز', descSv:'Förbud mot att köra om motordrivet fordon.', descAr:'يمنع تجاوز المركبات الآلية.',
    svg: F(`${carIcon('#000', 38, 50, 0.7)}${carIcon('#C8102E', 62, 50, 0.7)}`) },
  { id:'C23', category:'forbud', nameSv:'Förbud mot omkörning med tung lastbil', nameAr:'ممنوع تجاوز الشاحنات الثقيلة', descSv:'Förare av tung lastbil får inte köra om annat motordrivet fordon.', descAr:'يمنع تجاوز شاحنة ثقيلة.',
    svg: F(`<g transform="translate(38 50)" fill="#000"><rect x="-12" y="-6" width="10" height="10"/><rect x="-2" y="-9" width="12" height="13"/><circle cx="-9" cy="6" r="3"/><circle cx="6" cy="6" r="3"/></g><g transform="translate(62 50)" fill="#C8102E"><rect x="-12" y="-6" width="10" height="10"/><rect x="-2" y="-9" width="12" height="13"/><circle cx="-9" cy="6" r="3"/><circle cx="6" cy="6" r="3"/></g>`) },
  { id:'C24', category:'forbud', nameSv:'Slut på förbud mot omkörning', nameAr:'انتهاء حظر التجاوز', descSv:'Förbudet mot omkörning upphör.', descAr:'انتهاء منطقة منع التجاوز.',
    svg: F(`${carIcon('#000', 38, 50, 0.7)}${carIcon('#000', 62, 50, 0.7)}<line x1="20" y1="80" x2="80" y2="20" stroke="#000" stroke-width="4"/>`) },
  { id:'C25', category:'forbud', nameSv:'Slut på förbud mot omkörning med tung lastbil', nameAr:'انتهاء منع تجاوز الشاحنات', descSv:'Förbudet mot omkörning med tung lastbil tar slut här.', descAr:'تنتهي منطقة منع تجاوز الشاحنات الثقيلة، فيُسمح بالتجاوز مرة أخرى.',
    svg: F(`<line x1="20" y1="80" x2="80" y2="20" stroke="#000" stroke-width="4"/>`) },
  { id:'C31', category:'forbud', nameSv:'Hastighetsbegränsning', nameAr:'تحديد السرعة', descSv:'Hastighetsbegränsning enligt angivet värde.', descAr:'لا تتجاوز السرعة المذكورة (كم/س).',
    svg: F(`${txt('50', { y: 65, size: 38 })}`) },
  { id:'C32', category:'forbud', nameSv:'Tillfällig hastighetsbegränsning upphör', nameAr:'انتهاء تحديد السرعة المؤقت', descSv:'Den tillfälliga hastighetsbegränsningen slutar att gälla efter märket.', descAr:'تنتهي قيود السرعة المؤقتة وتعود السرعة المسموحة العامة للسريان.',
    svg: F(`${txt('50', { y: 65, size: 38, color:'#888' })}<line x1="22" y1="78" x2="78" y2="22" stroke="#000" stroke-width="4"/>`) },
  { id:'C33', category:'forbud', nameSv:'Förbud mot stannande och parkering', nameAr:'ممنوع الوقوف والتوقف', descSv:'Förbud att stanna eller parkera.', descAr:'يحظر الوقوف أو التوقف.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="44" fill="#003F87" stroke="#C8102E" stroke-width="8"/><line x1="20" y1="20" x2="80" y2="80" stroke="#C8102E" stroke-width="8"/><line x1="80" y1="20" x2="20" y2="80" stroke="#C8102E" stroke-width="8"/></svg>` },
  { id:'C35', category:'forbud', nameSv:'Förbud mot parkering', nameAr:'ممنوع الانتظار', descSv:'Det är förbjudet att parkera fordon, men kortare uppehåll får göras.', descAr:'يُمنع ركن السيارة، لكن يُسمح بالتوقف القصير لإنزال أو تحميل.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="44" fill="#003F87" stroke="#C8102E" stroke-width="8"/><line x1="22" y1="22" x2="78" y2="78" stroke="#C8102E" stroke-width="8"/></svg>` },
  { id:'C36', category:'forbud', nameSv:'Förbud mot parkering på dag med udda datum', nameAr:'ممنوع الانتظار في الأيام الفردية', descSv:'Parkering förbjuden under dagar med udda datum (1, 3, 5, 7 osv).', descAr:'ممنوع الانتظار في الأيام ذات الأرقام الفردية.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="44" fill="#003F87" stroke="#C8102E" stroke-width="8"/><line x1="22" y1="22" x2="78" y2="78" stroke="#C8102E" stroke-width="8"/><rect x="38" y="30" width="24" height="6" fill="#FFFFFF"/></svg>` },
  { id:'C37', category:'forbud', nameSv:'Förbud mot parkering på dag med jämnt datum', nameAr:'ممنوع الانتظار في الأيام الزوجية', descSv:'Parkering förbjuden under dagar med jämnt datum (2, 4, 6, 8 osv).', descAr:'ممنوع الانتظار في الأيام ذات الأرقام الزوجية.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="44" fill="#003F87" stroke="#C8102E" stroke-width="8"/><line x1="22" y1="22" x2="78" y2="78" stroke="#C8102E" stroke-width="8"/><rect x="30" y="30" width="18" height="6" fill="#FFFFFF"/><rect x="52" y="30" width="18" height="6" fill="#FFFFFF"/></svg>` },
  { id:'C39', category:'forbud', nameSv:'Datumparkering', nameAr:'انتظار حسب التاريخ', descSv:'Förbud att parkera under viss tid baserat på datum.', descAr:'الانتظار محدد حسب تاريخ اليوم.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="44" fill="#003F87" stroke="#C8102E" stroke-width="8"/><line x1="22" y1="22" x2="78" y2="78" stroke="#C8102E" stroke-width="8"/><text x="50" y="58" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="#FFFFFF">8-17</text></svg>` },
  { id:'C40', category:'forbud', nameSv:'Slut på förbud', nameAr:'انتهاء كل الممنوعات', descSv:'Slut på alla lokala förbud för fordon i rörelse.', descAr:'نهاية كل الحظر المحلي للسيارات السائرة.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="44" fill="#FFFFFF" stroke="#000" stroke-width="3"/><line x1="22" y1="78" x2="78" y2="22" stroke="#000" stroke-width="6"/></svg>` },
  { id:'C41', category:'forbud', nameSv:'Slut på hastighetsbegränsning', nameAr:'انتهاء حد السرعة', descSv:'Den utmärkta hastighetsbegränsningen tar slut och allmän hastighet gäller igen.', descAr:'انتهاء حد السرعة المحدد.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="44" fill="#FFFFFF" stroke="#000" stroke-width="3"/><text x="50" y="65" text-anchor="middle" font-family="Arial" font-size="32" font-weight="700" fill="#888">50</text><line x1="22" y1="78" x2="78" y2="22" stroke="#000" stroke-width="5"/></svg>` },
  { id:'C42', category:'forbud', nameSv:'Förbud mot U-sväng', nameAr:'ممنوع الدوران للخلف', descSv:'Förbud att göra U-sväng.', descAr:'يمنع الالتفاف للعكس (U-turn).',
    svg: F(`<path d="M 30 70 L 30 45 Q 30 30 50 30 Q 70 30 70 45 L 70 65 L 60 60 M 70 65 L 80 60" stroke="#000" stroke-width="5" fill="none" stroke-linecap="round"/>`) },
  { id:'C43', category:'forbud', nameSv:'Förbud mot sväng i korsning', nameAr:'ممنوع الانعطاف في التقاطع', descSv:'Förbud att svänga vid nästa korsning.', descAr:'يمنع الانعطاف عند التقاطع التالي.',
    svg: F(`<path d="M 30 70 L 30 50 L 65 50 L 60 45 M 65 50 L 60 55" stroke="#000" stroke-width="5" fill="none"/>`) },
  { id:'C45', category:'forbud', nameSv:'Förbud mot ljudsignal', nameAr:'ممنوع استخدام البوق', descSv:'Förbud mot att använda ljudsignal.', descAr:'يمنع استخدام التنبيه الصوتي.',
    svg: F(`<path d="M 30 45 L 35 45 L 50 35 L 50 65 L 35 55 L 30 55 Z" fill="#000"/><path d="M 60 35 Q 70 50 60 65" stroke="#000" stroke-width="3" fill="none"/>`) },

  // ========== 4) PÅBUDSMÄRKEN — علامات الإلزام ==========
  { id:'D1-1', category:'pabud', nameSv:'Påbjuden körriktning (rakt fram)', nameAr:'إلزام بالسير للأمام', descSv:'Påbjuden körriktning rakt fram.', descAr:'يلزم السير في الاتجاه المستقيم.',
    svg: P(`${arrow(0, '#FFF')}`) },
  { id:'D1-2', category:'pabud', nameSv:'Påbjuden körriktning (höger)', nameAr:'إلزام بالاتجاه يميناً', descSv:'Du är skyldig att svänga höger vid korsningen.', descAr:'إلزام بالانعطاف يميناً عند التقاطع التالي.',
    svg: P(`${arrow(90, '#FFF')}`) },
  { id:'D1-3', category:'pabud', nameSv:'Påbjuden körriktning (vänster)', nameAr:'إلزام بالاتجاه يساراً', descSv:'Du är skyldig att svänga vänster vid korsningen.', descAr:'إلزام بالانعطاف يساراً عند التقاطع التالي.',
    svg: P(`${arrow(-90, '#FFF')}`) },
  { id:'D1-4', category:'pabud', nameSv:'Påbjuden körriktning (rakt fram eller höger)', nameAr:'مستقيم أو يمين', descSv:'Rakt fram eller höger.', descAr:'يجب السير مستقيماً أو يميناً.',
    svg: P(`<path d="M 50 25 L 50 55 M 50 55 L 70 55 M 65 50 L 70 55 L 65 60 M 45 30 L 50 25 L 55 30 M 50 75 L 50 55" stroke="#FFF" stroke-width="6" fill="none" stroke-linecap="round"/>`) },
  { id:'D1-5', category:'pabud', nameSv:'Påbjuden körriktning (rakt fram eller vänster)', nameAr:'مستقيم أو يسار', descSv:'Rakt fram eller vänster.', descAr:'يجب السير مستقيماً أو يساراً.',
    svg: P(`<path d="M 50 25 L 50 55 M 50 55 L 30 55 M 35 50 L 30 55 L 35 60 M 45 30 L 50 25 L 55 30 M 50 75 L 50 55" stroke="#FFF" stroke-width="6" fill="none" stroke-linecap="round"/>`) },
  { id:'D1-6', category:'pabud', nameSv:'Påbjuden körriktning (vänster eller höger)', nameAr:'يمين أو يسار', descSv:'Du måste välja att svänga antingen höger eller vänster, rakt fram tillåts inte.', descAr:'يجب الانعطاف إما يميناً أو يساراً، السير المستقيم غير مسموح.',
    svg: P(`<path d="M 25 50 L 75 50 M 30 45 L 25 50 L 30 55 M 70 45 L 75 50 L 70 55" stroke="#FFF" stroke-width="6" fill="none" stroke-linecap="round"/>`) },
  { id:'D2-1', category:'pabud', nameSv:'Påbjuden körbana (höger)', nameAr:'مسار إلزامي يميناً', descSv:'Passera hindret till höger.', descAr:'تجاوز العائق من جهة اليمين.',
    svg: P(`<path d="M 35 30 Q 70 50 35 70" stroke="#FFF" stroke-width="6" fill="none"/><path d="M 30 65 L 35 70 L 30 75" stroke="#FFF" stroke-width="5" fill="none"/>`) },
  { id:'D2-2', category:'pabud', nameSv:'Påbjuden körbana (vänster)', nameAr:'مسار إلزامي يساراً', descSv:'Passera hindret till vänster.', descAr:'تجاوز العائق من جهة اليسار.',
    svg: P(`<path d="M 65 30 Q 30 50 65 70" stroke="#FFF" stroke-width="6" fill="none"/><path d="M 70 65 L 65 70 L 70 75" stroke="#FFF" stroke-width="5" fill="none"/>`) },
  { id:'D3', category:'pabud', nameSv:'Påbjuden cirkulation', nameAr:'إلزام بالدوار', descSv:'Cirkulationsplats — kör i pilarnas riktning.', descAr:'دوار — اتجاه السير حسب الأسهم.',
    svg: P(`<path d="M 50 30 A 20 20 0 1 0 70 50 A 20 20 0 1 0 50 70 A 20 20 0 1 0 30 50 A 20 20 0 1 0 50 30" stroke="#FFF" stroke-width="5" fill="none"/><path d="M 65 35 L 70 50 L 55 45" fill="#FFF"/>`) },
  { id:'D4', category:'pabud', nameSv:'Påbjuden gångbana', nameAr:'مسار مشاة إلزامي', descSv:'Banan är endast avsedd för gångtrafik, övrig trafik förbjuden.', descAr:'الطريق مخصص للمشاة فقط، ممنوع على المركبات والدراجات.',
    svg: P(`${personIcon('#FFF', 50, 55, 1.4)}`) },
  { id:'D5', category:'pabud', nameSv:'Påbjuden cykelbana', nameAr:'مسار دراجات إلزامي', descSv:'Banan är reserverad för cyklister och moped klass II, övrig trafik förbjuden.', descAr:'مسار مخصص للدراجات الهوائية ودراجات الفئة II فقط.',
    svg: P(`${bikeIcon('#FFF', 50, 58, 1.4)}`) },
  { id:'D6', category:'pabud', nameSv:'Påbjuden gång- och cykelbana', nameAr:'مسار للمشاة والدراجات', descSv:'Gemensam bana för gående och cyklister.', descAr:'مسار مشترك يستخدمه المشاة وراكبو الدراجات معاً.',
    svg: P(`${personIcon('#FFF', 35, 55, 1.0)}${bikeIcon('#FFF', 65, 60, 1.0)}`) },
  { id:'D7', category:'pabud', nameSv:'Påbjudna gång- och cykelbanor', nameAr:'مساران منفصلان للمشاة والدراجات', descSv:'Separata banor för gående och cyklister.', descAr:'مسار للمشاة ومسار للدراجات منفصلان.',
    svg: P(`${personIcon('#FFF', 30, 55, 1.0)}${bikeIcon('#FFF', 70, 60, 1.0)}<line x1="50" y1="20" x2="50" y2="80" stroke="#FFF" stroke-width="2"/>`) },
  { id:'D8', category:'pabud', nameSv:'Påbjuden ridväg', nameAr:'مسار للخيل إلزامي', descSv:'Banan är reserverad för ridning, motorfordon och cyklar förbjudna.', descAr:'مسار مخصص لركوب الخيل، ممنوع على المركبات والدراجات.',
    svg: P(`<path d="M 30 70 L 35 50 L 50 45 L 60 50 L 65 70 M 50 45 L 55 30 L 65 35" stroke="#FFF" stroke-width="3" fill="none"/>`) },
  { id:'D9', category:'pabud', nameSv:'Påbjuden led för terrängmotorfordon', nameAr:'مسار لمركبات التضاريس', descSv:'Endast terrängmotorfordon som snöskoter eller fyrhjuling får trafikera leden.', descAr:'مسار مخصص لمركبات التضاريس كالعربات الجليدية والرباعية الدفع.',
    svg: P(`${txt('🛷', { y: 65, size: 30, color:'#FFF' })}`) },
  { id:'D10', category:'pabud', nameSv:'Påbjuden led för moped klass II', nameAr:'مسار لدراجة كلاس II', descSv:'Endast moped klass II.', descAr:'مخصص لدراجة كلاس II.',
    svg: P(`<g transform="translate(50 55)" stroke="#FFF" stroke-width="3" fill="none"><circle cx="-12" cy="5" r="7"/><circle cx="12" cy="5" r="7"/><path d="M -12 5 L 0 -10 L 12 5"/></g>`) },
  { id:'D11', category:'pabud', nameSv:'Slut på påbjuden bana eller led', nameAr:'انتهاء المسار الإلزامي', descSv:'Den påbjudna banan eller leden tar slut här.', descAr:'تنتهي المنطقة المخصصة لمسار معين (مشاة أو دراجات إلخ).',
    svg: P(`${personIcon('#FFF', 50, 55, 1.4)}<line x1="20" y1="80" x2="80" y2="20" stroke="#C8102E" stroke-width="6"/>`) },
  { id:'D12', category:'pabud', nameSv:'Påbjudet körfält eller körbana för fordon i linjetrafik m.fl.', nameAr:'مسار إلزامي لمركبات النقل العام', descSv:'Körfältet är reserverat för bussar i linjetrafik, taxi och vissa nyttofordon.', descAr:'مسار محجوز للحافلات وسيارات الأجرة وبعض مركبات الخدمة.',
    svg: P(`${txt('BUS', { y: 60, size: 22, color:'#FFF' })}`) },

  // ========== 5) ANVISNINGSMÄRKEN — علامات الإرشاد ==========
  { id:'E1', category:'anvisning', nameSv:'Motorväg', nameAr:'طريق سريع (أوتوستراد)', descSv:'Motorväg börjar här, gångtrafik och cykling förbjudna, högsta hastighet upp till 120 km/h.', descAr:'بداية الطريق السريع (Autobahn): ممنوع المشاة والدراجات، السرعة القصوى عادة 110 إلى 120 كم/س.',
    svg: A(`<path d="M 30 30 L 30 75 M 70 30 L 70 75 M 50 75 L 50 65 L 35 65 M 50 75 L 50 65 L 65 65" stroke="#FFF" stroke-width="4" fill="none"/>`, '#0072CE') },
  { id:'E2', category:'anvisning', nameSv:'Motorväg upphör', nameAr:'انتهاء الطريق السريع', descSv:'Motorvägsbestämmelserna upphör, allmänna trafikregler gäller igen.', descAr:'انتهاء الطريق السريع وعودة قواعد المرور العامة.',
    svg: A(`<path d="M 30 30 L 30 75 M 70 30 L 70 75" stroke="#FFF" stroke-width="4" fill="none"/><line x1="20" y1="80" x2="80" y2="20" stroke="#C8102E" stroke-width="5"/>`, '#0072CE') },
  { id:'E3', category:'anvisning', nameSv:'Motortrafikled', nameAr:'طريق سيارات سريع', descSv:'Motortrafikled börjar här, endast motorfordon tillåtna, ofta lägre hastighet än motorväg.', descAr:'بداية طريق سيارات سريع، مخصص للمركبات الآلية فقط، السرعة القصوى أقل من الأوتوبان.',
    svg: A(`${carIcon('#FFF', 50, 55, 1.0)}`, '#0072CE') },
  { id:'E4', category:'anvisning', nameSv:'Motortrafikled upphör', nameAr:'انتهاء طريق السيارات السريع', descSv:'Motortrafikledens regler upphör att gälla.', descAr:'ينتهي طريق السيارات السريع، وتُلغى القواعد الخاصة به.',
    svg: A(`${carIcon('#FFF', 50, 55, 1.0)}<line x1="20" y1="80" x2="80" y2="20" stroke="#C8102E" stroke-width="5"/>`, '#0072CE') },
  { id:'E5', category:'anvisning', nameSv:'Tättbebyggt område', nameAr:'منطقة مأهولة', descSv:'Här börjar ett tättbebyggt område.', descAr:'بداية منطقة سكانية (تنطبق قواعد المدينة).',
    svg: A(`<g fill="#FFF"><rect x="25" y="50" width="14" height="22"/><rect x="42" y="40" width="16" height="32"/><rect x="61" y="55" width="14" height="17"/></g>`, '#0072CE') },
  { id:'E6', category:'anvisning', nameSv:'Tättbebyggt område upphör', nameAr:'انتهاء المنطقة المأهولة', descSv:'Märket anger att det tättbebyggda området slutar och bashastigheten på 50 km/h upphör.', descAr:'انتهاء المنطقة المأهولة وحد السرعة الافتراضي 50 كم/س.',
    svg: A(`<g fill="#FFF"><rect x="25" y="50" width="14" height="22"/><rect x="42" y="40" width="16" height="32"/><rect x="61" y="55" width="14" height="17"/></g><line x1="20" y1="80" x2="80" y2="20" stroke="#C8102E" stroke-width="5"/>`, '#0072CE') },
  { id:'E7', category:'anvisning', nameSv:'Gågata', nameAr:'شارع للمشاة', descSv:'Här börjar en gågata.', descAr:'بداية شارع مخصص للمشاة.',
    svg: A(`${personIcon('#FFF', 35, 55, 1.0)}${personIcon('#FFF', 65, 55, 0.7)}`, '#0072CE') },
  { id:'E8', category:'anvisning', nameSv:'Gågata upphör', nameAr:'انتهاء شارع المشاة', descSv:'Gågatan tar slut och vanlig fordonstrafik tillåts igen.', descAr:'ينتهي الشارع المخصص للمشاة، وتعود حركة المركبات للسير الاعتيادي.',
    svg: A(`${personIcon('#FFF', 50, 55, 1.0)}<line x1="20" y1="80" x2="80" y2="20" stroke="#C8102E" stroke-width="5"/>`, '#0072CE') },
  { id:'E9', category:'anvisning', nameSv:'Gångfartsområde', nameAr:'منطقة بسرعة المشاة', descSv:'Område där fordon måste köras i gångfart (ca 7 km/h) och fotgängare har företräde.', descAr:'منطقة بسرعة المشي — للمركبات أيضاً.',
    svg: A(`${personIcon('#FFF', 30, 60, 0.9)}${carIcon('#FFF', 65, 60, 0.7)}<rect x="22" y="68" width="56" height="2" fill="#FFF"/>`, '#0072CE') },
  { id:'E10', category:'anvisning', nameSv:'Gångfartsområde upphör', nameAr:'انتهاء منطقة سرعة المشاة', descSv:'Gångfartsområdet tar slut och vanlig hastighet får återupptas.', descAr:'انتهاء منطقة سرعة المشي، يمكن استئناف السرعة الاعتيادية.',
    svg: A(`${personIcon('#FFF', 30, 60, 0.9)}${carIcon('#FFF', 65, 60, 0.7)}<line x1="20" y1="80" x2="80" y2="20" stroke="#C8102E" stroke-width="5"/>`, '#0072CE') },
  { id:'E11', category:'anvisning', nameSv:'Rekommenderad lägre hastighet', nameAr:'سرعة منخفضة موصى بها', descSv:'Anger en lägre hastighet som rekommenderas av trafiksäkerhetsskäl.', descAr:'سرعة منخفضة موصى بها (غير إلزامية) لأسباب السلامة.',
    svg: A(`<circle cx="50" cy="50" r="22" fill="none" stroke="#FFF" stroke-width="3"/>${txt('30', { y: 58, size: 22, color:'#FFF' })}`, '#0072CE') },
  { id:'E12', category:'anvisning', nameSv:'Rekommenderad lägre hastighet upphör', nameAr:'انتهاء السرعة الموصى بها', descSv:'Rekommendationen om lägre hastighet upphör att gälla.', descAr:'تنتهي توصية السرعة المنخفضة ويعود حد السرعة العام للسريان.',
    svg: A(`<circle cx="50" cy="50" r="22" fill="none" stroke="#FFF" stroke-width="3"/>${txt('30', { y: 58, size: 22, color:'#FFF' })}<line x1="20" y1="80" x2="80" y2="20" stroke="#C8102E" stroke-width="5"/>`, '#0072CE') },
  { id:'E13', category:'anvisning', nameSv:'Rekommenderad hastighet vid bristfälligt väglag', nameAr:'سرعة عند سوء الطريق', descSv:'Föreslagen lägre hastighet då vägen är hal, blöt eller på annat sätt bristfällig.', descAr:'سرعة موصى بها عند الطقس السيء.',
    svg: A(`${txt('70', { y: 60, size: 28, color:'#FFF' })}`, '#0072CE') },
  { id:'E14', category:'anvisning', nameSv:'Återvändsväg', nameAr:'طريق غير نافذ', descSv:'Vägen är en återvändsväg.', descAr:'الطريق غير نافذ، ينتهي ولا يكمل إلى وجهة أخرى.',
    svg: A(`<rect x="40" y="20" width="20" height="35" fill="#FFF"/><rect x="30" y="50" width="40" height="8" fill="#FFF"/>`, '#0072CE') },
  { id:'E15', category:'anvisning', nameSv:'Vägnummer (Europaväg)', nameAr:'رقم طريق أوروبي', descSv:'Numrerad väg som ingår i det europeiska huvudvägnätet (E-väg).', descAr:'رقم طريق ضمن الشبكة الأوروبية للطرق الرئيسية (يبدأ بالحرف E).',
    svg: A(`${txt('E4', { y: 62, size: 32, color:'#FFF' })}`, '#1B5E20') },
  { id:'E16', category:'anvisning', nameSv:'Vägnummer (Riksväg)', nameAr:'رقم طريق وطني', descSv:'Numrerad svensk riksväg som binder samman större orter.', descAr:'رقم طريق وطني سويدي يربط بين المدن الكبرى.',
    svg: A(`${txt('40', { y: 62, size: 32, color:'#FFF' })}`, '#0072CE') },
  { id:'E17', category:'anvisning', nameSv:'Vägnummer (Länsväg)', nameAr:'رقم طريق إقليمي', descSv:'Numrerad länsväg av regional betydelse.', descAr:'رقم طريق إقليمي ضمن إحدى المقاطعات السويدية.',
    svg: A(`${txt('116', { y: 62, size: 26, color:'#000' })}`, '#FFFFFF') },
  { id:'E20', category:'anvisning', nameSv:'Områdesmärke', nameAr:'علامة منطقة', descSv:'Anger ett område med särskilda regler.', descAr:'منطقة لها قواعد خاصة.',
    svg: A(`${txt('Z', { y: 65, size: 38, color:'#FFF' })}`, '#0072CE') },

  // ========== 6) LOKALISERING — VÄGVISNING ==========
  { id:'F1', category:'vagvisning', nameSv:'Orienteringstavla', nameAr:'لوحة توجيه', descSv:'Förhandsinformation om vägval, destinationer och vägnummer på en motorväg.', descAr:'لوحة معلومات مسبقة تعرض الوجهات والاتجاهات على الطرق السريعة.',
    svg: RECT(`<text x="50" y="35" text-anchor="middle" font-family="Arial" font-size="11" fill="#FFF" font-weight="700">Stockholm</text><text x="50" y="55" text-anchor="middle" font-family="Arial" font-size="11" fill="#FFF" font-weight="700">Uppsala</text><text x="50" y="75" text-anchor="middle" font-family="Arial" font-size="11" fill="#FFF" font-weight="700">↑ E4</text>`, '#0072CE') },
  { id:'F4', category:'vagvisning', nameSv:'Vägvisare', nameAr:'لوحة وجهة', descSv:'Pilformad skylt som pekar i riktningen mot en specifik destination.', descAr:'لوحة سهمية تشير في اتجاه وجهة معينة.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="6,20 78,20 92,50 78,80 6,80" fill="#0072CE" stroke="#FFF" stroke-width="2"/><text x="40" y="56" text-anchor="middle" font-family="Arial" font-size="14" fill="#FFF" font-weight="700">Centrum</text></svg>` },
  { id:'F5', category:'vagvisning', nameSv:'Tabellorienteringstavla', nameAr:'جدول توجيه', descSv:'Visar val av väg och destinationer i tabellform med pilar och avstånd.', descAr:'لوحة جدولية تعرض الوجهات والمسافات والاتجاهات.',
    svg: RECT(`<line x1="50" y1="15" x2="50" y2="85" stroke="#FFF"/><text x="25" y="40" text-anchor="middle" font-family="Arial" font-size="9" fill="#FFF">→</text><text x="75" y="40" text-anchor="middle" font-family="Arial" font-size="9" fill="#FFF">Mall</text><text x="25" y="60" text-anchor="middle" font-family="Arial" font-size="9" fill="#FFF">↑</text><text x="75" y="60" text-anchor="middle" font-family="Arial" font-size="9" fill="#FFF">Sthlm</text>`, '#0072CE') },
  { id:'F6', category:'vagvisning', nameSv:'Avståndstavla', nameAr:'لوحة مسافات', descSv:'Visar avståndet i kilometer till olika orter längs vägen.', descAr:'لوحة تعرض المسافة بالكيلومتر لمختلف المدن على الطريق.',
    svg: RECT(`<text x="20" y="38" font-family="Arial" font-size="10" fill="#FFF">Sthlm</text><text x="80" y="38" text-anchor="end" font-family="Arial" font-size="10" fill="#FFF">25</text><text x="20" y="58" font-family="Arial" font-size="10" fill="#FFF">Uppsala</text><text x="80" y="58" text-anchor="end" font-family="Arial" font-size="10" fill="#FFF">90</text>`, '#0072CE') },
  { id:'F7', category:'vagvisning', nameSv:'Ortnamn', nameAr:'اسم بلدة', descSv:'Anger namn på en ort.', descAr:'اسم القرية أو المدينة.',
    svg: RECT(`${txt('Lund', { y: 60, size: 22, color:'#FFF' })}`, '#0072CE') },
  { id:'F8', category:'vagvisning', nameSv:'Avfartsvisare', nameAr:'إشارة المخرج', descSv:'Anger avfart från motorväg.', descAr:'مخرج من الطريق السريع.',
    svg: RECT(`<path d="M 25 25 L 25 75 L 75 75" stroke="#FFF" stroke-width="3" fill="none"/><path d="M 70 70 L 75 75 L 70 80" stroke="#FFF" stroke-width="3" fill="none"/>`, '#0072CE') },

  // ========== 7) LOKALISERING — GÅNG OCH CYKEL ==========
  { id:'G1', category:'gangcykel', nameSv:'Vägvisare för gång- och cykeltrafik', nameAr:'لوحة توجيه للمشاة والدراجات', descSv:'Vägvisare för cyklister och fotgängare.', descAr:'توجيه للمشاة وراكبي الدراجات.',
    svg: RECT(`${bikeIcon('#FFF', 25, 50, 0.7)}<text x="55" y="55" font-family="Arial" font-size="10" fill="#FFF">2 km</text>`, '#1B5E20') },
  { id:'G2', category:'gangcykel', nameSv:'Cykelled', nameAr:'مسار دراجات مسمى', descSv:'Märker en utpekad cykelled, ofta med eget namn eller nummer.', descAr:'مسار دراجات هوائية معتمد، أحياناً برقم أو اسم خاص.',
    svg: RECT(`${bikeIcon('#FFF', 50, 55, 1.2)}`, '#1B5E20') },
  { id:'G3', category:'gangcykel', nameSv:'Cykelparkering', nameAr:'موقف دراجات', descSv:'Reserverad parkeringsplats för cyklar.', descAr:'موقف مخصص لركن الدراجات الهوائية.',
    svg: RECT(`<text x="50" y="38" text-anchor="middle" font-family="Arial" font-size="22" fill="#FFF" font-weight="700">P</text>${bikeIcon('#FFF', 50, 65, 0.8)}`, '#0072CE') },

  // ========== 8) ALLMÄNNA INRÄTTNINGAR ==========
  { id:'H1', category:'allmanna', nameSv:'Sjukhus', nameAr:'مستشفى', descSv:'Vägvisning till närmaste sjukhus med akutmottagning.', descAr:'يدل على الطريق إلى أقرب مستشفى مع قسم طوارئ.',
    svg: RECT(`<rect x="40" y="25" width="20" height="50" fill="#FFF"/><rect x="25" y="40" width="50" height="20" fill="#FFF"/>`, '#0072CE') },
  { id:'H2', category:'allmanna', nameSv:'Polisstation', nameAr:'مركز الشرطة', descSv:'Visar väg till polisstation.', descAr:'الطريق إلى مركز الشرطة.',
    svg: RECT(`${txt('Polis', { y: 60, size: 18, color:'#FFF' })}`, '#0072CE') },
  { id:'H3', category:'allmanna', nameSv:'Kommunhus', nameAr:'مبنى البلدية', descSv:'Vägvisning till kommunens huvudbyggnad eller stadshus.', descAr:'يدل على الطريق إلى مبنى البلدية أو مكاتب الإدارة المحلية.',
    svg: RECT(`<path d="M 25 75 L 25 50 L 50 30 L 75 50 L 75 75 Z" fill="#FFF"/><rect x="45" y="55" width="10" height="20" fill="#0072CE"/>`, '#0072CE') },

  // ========== 9) SERVICEANLÄGGNINGAR ==========
  { id:'S1', category:'service', nameSv:'Drivmedel', nameAr:'محطة وقود', descSv:'Plats för drivmedel (bensin, diesel, el-laddning).', descAr:'محطة وقود (بنزين/ديزل/شحن كهربائي).',
    svg: SQ(`<rect x="35" y="30" width="22" height="45" fill="#000"/><rect x="38" y="35" width="16" height="14" fill="#FFF"/><path d="M 60 40 L 68 40 L 68 65 Q 68 70 64 70 Q 60 70 60 65" stroke="#000" stroke-width="3" fill="none"/>`) },
  { id:'S2', category:'service', nameSv:'Vandrarhem', nameAr:'بيت شباب', descSv:'Märket visar vägen till ett vandrarhem för enklare övernattning.', descAr:'يدل على بيت شباب (Vandrarhem) لمبيت اقتصادي.',
    svg: SQ(`<rect x="30" y="40" width="40" height="35" fill="#000"/><polygon points="30,40 50,25 70,40" fill="#000"/>${txt('H', { y: 65, size: 16, color:'#FFF' })}`) },
  { id:'S3', category:'service', nameSv:'Hotell', nameAr:'فندق', descSv:'Märket visar vägen till ett hotell.', descAr:'تشير إلى وجود فندق للإقامة قريب من العلامة.',
    svg: SQ(`${txt('🛏', { y: 65, size: 38 })}`) },
  { id:'S4', category:'service', nameSv:'Restaurang', nameAr:'مطعم', descSv:'Märket visar vägen till en restaurang.', descAr:'تشير إلى وجود مطعم لتقديم الطعام قريب من العلامة.',
    svg: SQ(`<path d="M 30 25 L 30 55 Q 30 60 35 60 L 35 75 L 40 75 L 40 60 Q 45 60 45 55 L 45 25" stroke="#000" stroke-width="2.5" fill="none"/><path d="M 60 25 Q 55 25 55 35 Q 55 50 65 50 L 65 75 L 70 75 L 70 25" stroke="#000" stroke-width="2.5" fill="none"/>`) },
  { id:'S5', category:'service', nameSv:'Servering', nameAr:'مقهى', descSv:'Plats med kafé eller enklare servering av mat och dryck.', descAr:'تشير إلى وجود مقهى أو محل لتقديم المشروبات الخفيفة.',
    svg: SQ(`<path d="M 30 45 L 65 45 L 60 70 L 35 70 Z" fill="#000"/><path d="M 65 50 L 75 50 L 75 60 L 65 60" stroke="#000" stroke-width="3" fill="none"/>`) },
  { id:'S6', category:'service', nameSv:'Toalett', nameAr:'مرافق صحية', descSv:'Anger plats för offentlig toalett.', descAr:'موقع مرحاض عمومي للاستخدام.',
    svg: SQ(`${personIcon('#000', 35, 50, 1.0)}${personIcon('#000', 65, 50, 1.0)}`) },
  { id:'S7', category:'service', nameSv:'Information', nameAr:'معلومات', descSv:'Plats för turistinformation om sevärdheter och tjänster i området.', descAr:'مركز معلومات سياحية عن المنطقة وأماكنها.',
    svg: SQ(`${txt('i', { y: 70, size: 50, color:'#000' })}`) },
  { id:'S8', category:'service', nameSv:'Verkstad', nameAr:'ورشة سيارات', descSv:'Plats för bilverkstad där fordon kan repareras eller servas.', descAr:'مكان تصليح وصيانة السيارات.',
    svg: SQ(`<path d="M 30 50 L 50 30 L 60 40 L 50 50 L 70 70 L 65 75 L 45 55 L 35 65 Z" fill="#000"/>`) },
  { id:'S9', category:'service', nameSv:'Telefon', nameAr:'هاتف', descSv:'Anger plats för telefon, ofta nödtelefon längs motorvägen.', descAr:'موقع هاتف عمومي أو هاتف طوارئ.',
    svg: SQ(`<path d="M 30 35 L 40 30 L 50 40 L 45 50 Q 55 60 65 70 L 70 65 L 80 75 L 75 80 Q 60 80 45 65 Q 30 50 30 35 Z" fill="#000"/>`) },
  { id:'S10', category:'service', nameSv:'Första hjälpen', nameAr:'إسعافات أولية', descSv:'Anger plats för första hjälpen-utrustning eller akutvård.', descAr:'تشير إلى موقع لتقديم الإسعافات الأولية أو الرعاية الطارئة.',
    svg: SQ(`<rect x="42" y="25" width="16" height="50" fill="#C8102E"/><rect x="25" y="42" width="50" height="16" fill="#C8102E"/>`) },
  { id:'S11', category:'service', nameSv:'Brandsläckare', nameAr:'طفاية حريق', descSv:'Anger plats för brandsläckare, vanligen i tunnlar och rastplatser.', descAr:'تشير إلى موقع طفاية حريق، تُوضع عادة في الأنفاق ومحطات الاستراحة.',
    svg: SQ(`<rect x="40" y="35" width="20" height="40" fill="#C8102E"/><rect x="38" y="30" width="24" height="6" fill="#000"/>`) },
  { id:'S12', category:'service', nameSv:'Rastplats', nameAr:'منطقة استراحة', descSv:'Plats för paus med bord, bänkar och ofta toaletter.', descAr:'منطقة للتوقف والاستراحة، تحتوي عادة على مقاعد وطاولات ودورات مياه.',
    svg: SQ(`<rect x="35" y="55" width="30" height="4" fill="#000"/><rect x="35" y="65" width="30" height="4" fill="#000"/><rect x="33" y="55" width="3" height="20" fill="#000"/><rect x="64" y="55" width="3" height="20" fill="#000"/><circle cx="50" cy="40" r="6" fill="#000"/>`) },
  { id:'S13', category:'service', nameSv:'Stuga', nameAr:'كوخ/مبيت', descSv:'Plats för stuga eller mindre logi för uthyrning.', descAr:'كوخ صغير أو منزل ريفي للإقامة المؤقتة.',
    svg: SQ(`<polygon points="25,55 50,30 75,55 75,75 25,75" fill="#000"/><rect x="42" y="60" width="16" height="15" fill="#FFF"/>`) },
  { id:'S14', category:'service', nameSv:'Tältplats', nameAr:'منطقة خيام', descSv:'Plats avsedd för tältning.', descAr:'منطقة مخصصة لنصب الخيام والمبيت.',
    svg: SQ(`<polygon points="50,25 25,75 75,75" fill="#000"/><line x1="50" y1="25" x2="50" y2="75" stroke="#FFF" stroke-width="2"/>`) },
  { id:'S15', category:'service', nameSv:'Husvagnsplats', nameAr:'موقف كرفانات', descSv:'Plats avsedd för husvagn eller husbil.', descAr:'موقف مخصص للكرافانات والبيوت المتنقلة.',
    svg: SQ(`<rect x="20" y="45" width="55" height="20" fill="#000"/><circle cx="32" cy="68" r="4" fill="#000"/><circle cx="60" cy="68" r="4" fill="#000"/><rect x="75" y="55" width="8" height="3" fill="#000"/>`) },

  // ========== 10) TURIST ==========
  { id:'T1', category:'turist', nameSv:'Sevärdhet', nameAr:'معلم سياحي', descSv:'Vägvisare till en sevärdhet av kulturell eller naturlig betydelse.', descAr:'تشير إلى الطريق المؤدي لمعلم سياحي ذي أهمية ثقافية أو طبيعية.',
    svg: RECT(`<polygon points="50,20 65,45 80,45 67,58 73,75 50,65 27,75 33,58 20,45 35,45" fill="#FFF"/>`, '#8B4513') },
  { id:'T2', category:'turist', nameSv:'Världsarv', nameAr:'موقع تراث عالمي', descSv:'Plats utsedd till världsarv av UNESCO för dess unika värde.', descAr:'موقع مدرج في قائمة التراث العالمي لليونسكو لأهميته الفريدة.',
    svg: RECT(`<rect x="30" y="35" width="40" height="40" fill="none" stroke="#FFF" stroke-width="3"/><circle cx="50" cy="45" r="6" fill="#FFF"/>`, '#8B4513') },
  { id:'T3', category:'turist', nameSv:'Slott', nameAr:'قلعة', descSv:'Märket visar vägen till ett slott eller en borg av historisk betydelse.', descAr:'تشير إلى قلعة أو حصن ذي أهمية تاريخية.',
    svg: RECT(`<rect x="25" y="50" width="50" height="25" fill="#FFF"/><rect x="25" y="40" width="8" height="10" fill="#FFF"/><rect x="46" y="35" width="8" height="15" fill="#FFF"/><rect x="67" y="40" width="8" height="10" fill="#FFF"/>`, '#8B4513') },
  { id:'T4', category:'turist', nameSv:'Kyrka', nameAr:'كنيسة', descSv:'Märket visar vägen till en kyrka av kulturhistoriskt intresse.', descAr:'تشير إلى كنيسة ذات أهمية تاريخية أو معمارية.',
    svg: RECT(`<rect x="40" y="45" width="20" height="30" fill="#FFF"/><polygon points="40,45 50,30 60,45" fill="#FFF"/><rect x="48" y="20" width="4" height="14" fill="#FFF"/><rect x="44" y="22" width="12" height="3" fill="#FFF"/>`, '#8B4513') },
  { id:'T5', category:'turist', nameSv:'Naturreservat', nameAr:'محمية طبيعية', descSv:'Märket visar vägen till ett naturreservat med skyddad natur.', descAr:'تشير إلى الطريق المؤدي لمحمية طبيعية بنباتات وحيوانات محمية.',
    svg: RECT(`<polygon points="50,25 60,55 80,55 50,75 20,55 40,55" fill="#FFF"/>`, '#8B4513') },

  // ========== 11) UPPLYSNINGSMÄRKEN ==========
  { id:'I1', category:'upplysning', nameSv:'Plats för P-biljett', nameAr:'مكان لتذكرة الانتظار', descSv:'Plats med biljettautomat för köp av parkeringsbiljett.', descAr:'مكان فيه آلة لشراء تذكرة الانتظار قبل ركن السيارة.',
    svg: A(`${txt('P', { y: 50, size: 32, color:'#FFF' })}<text x="50" y="75" text-anchor="middle" font-family="Arial" font-size="10" fill="#FFF">biljett</text>`, '#0072CE') },
  { id:'I2', category:'upplysning', nameSv:'Bro', nameAr:'جسر', descSv:'Märket anger en namngiven bro framför trafikanten.', descAr:'تشير إلى جسر مسمى يأتي على الطريق.',
    svg: A(`<path d="M 20 60 Q 50 30 80 60 L 80 70 L 20 70 Z" fill="#FFF"/>`, '#0072CE') },
  { id:'I3', category:'upplysning', nameSv:'Tunnel', nameAr:'نفق', descSv:'Märket anger en namngiven tunnel framför trafikanten.', descAr:'تشير إلى نفق مسمى يأتي على الطريق.',
    svg: A(`<path d="M 25 75 L 25 55 Q 50 25 75 55 L 75 75 Z" fill="#FFF"/>`, '#0072CE') },
  { id:'I4', category:'upplysning', nameSv:'Riktning till nödutgång', nameAr:'اتجاه مخرج طوارئ', descSv:'Visar riktningen mot närmaste nödutgång inne i tunnel eller annat slutet utrymme.', descAr:'يدل على اتجاه أقرب مخرج طوارئ، خاصة داخل الأنفاق.',
    svg: A(`<rect x="35" y="35" width="30" height="40" fill="#FFF"/>${personIcon('#1B5E20', 50, 55, 1.0)}<path d="M 70 50 L 80 50 L 76 46 M 80 50 L 76 54" stroke="#FFF" stroke-width="2.5" fill="none"/>`, '#1B5E20') },
  { id:'I5', category:'upplysning', nameSv:'Övergångsställe', nameAr:'معبر مشاة', descSv:'Markerar plats där fotgängare har företräde att korsa vägen.', descAr:'تحدد موقع عبور المشاة، حيث تكون الأولوية لهم لقطع الطريق.',
    svg: A(`<rect x="20" y="60" width="60" height="20" fill="#FFF"/><line x1="30" y1="60" x2="30" y2="80" stroke="#0072CE" stroke-width="3"/><line x1="42" y1="60" x2="42" y2="80" stroke="#0072CE" stroke-width="3"/><line x1="54" y1="60" x2="54" y2="80" stroke="#0072CE" stroke-width="3"/><line x1="66" y1="60" x2="66" y2="80" stroke="#0072CE" stroke-width="3"/>${personIcon('#FFF', 50, 40, 0.9)}`, '#0072CE') },
  { id:'I6', category:'upplysning', nameSv:'Parkering', nameAr:'موقف انتظار', descSv:'Plats där parkering är tillåten enligt eventuella tilläggstavlor.', descAr:'تشير إلى مكان مسموح فيه ركن السيارات.',
    svg: A(`${txt('P', { y: 70, size: 56, color:'#FFF' })}`, '#0072CE') },
  { id:'I7', category:'upplysning', nameSv:'Infartsparkering', nameAr:'موقف Park & Ride', descSv:'Pendlarparkering med koppling till kollektivtrafik (Park & Ride).', descAr:'موقف للسيارات بجانب محطة مواصلات عامة (Park & Ride).',
    svg: A(`${txt('P', { y: 50, size: 28, color:'#FFF' })}<text x="50" y="75" text-anchor="middle" font-family="Arial" font-size="9" fill="#FFF">+ tåg</text>`, '#0072CE') },
  { id:'I8', category:'upplysning', nameSv:'Lokal slinga', nameAr:'دائرة محلية', descSv:'Anger en lokal slinga eller rundtur som leder tillbaka till samma punkt.', descAr:'مسار دائري محلي يعود إلى نقطة البداية.',
    svg: A(`<circle cx="50" cy="50" r="25" fill="none" stroke="#FFF" stroke-width="3"/><path d="M 70 35 L 75 30 L 70 40" stroke="#FFF" stroke-width="3" fill="none"/>`, '#0072CE') },
  { id:'I9', category:'upplysning', nameSv:'Stopp för fordon i linjetrafik', nameAr:'موقف باص', descSv:'Plats där bussar i linjetrafik stannar för att släppa av och plocka upp passagerare.', descAr:'موقف لحافلات النقل العام لإنزال وتحميل الركاب.',
    svg: A(`${txt('🚌', { y: 65, size: 28 })}`, '#0072CE') },
  { id:'I10', category:'upplysning', nameSv:'Stopp för spårvagn', nameAr:'موقف ترام', descSv:'Plats där spårvagnar stannar för att släppa av och plocka upp passagerare.', descAr:'محطة لتوقف الترام لإنزال وتحميل الركاب.',
    svg: A(`${txt('🚊', { y: 65, size: 28 })}`, '#0072CE') },
  { id:'I11', category:'upplysning', nameSv:'Stopp för skolskjuts', nameAr:'موقف باص المدرسة', descSv:'Hållplats där skolbussen tar upp och släpper av elever.', descAr:'مكان مخصص لتوقف باص المدرسة لإنزال الأطفال أو تحميلهم.',
    svg: A(`<rect x="25" y="40" width="50" height="25" fill="#FFC700"/>${txt('SKOL', { y: 78, size: 9, color:'#FFF' })}<circle cx="35" cy="68" r="3" fill="#000"/><circle cx="65" cy="68" r="3" fill="#000"/>`, '#0072CE') },
  { id:'I12', category:'upplysning', nameSv:'Taxi', nameAr:'تاكسي', descSv:'Plats reserverad för taxibilar.', descAr:'موقف مخصص لسيارات الأجرة (تاكسي).',
    svg: A(`${txt('TAXI', { y: 60, size: 18, color:'#FFC700' })}`, '#000') },
  { id:'I13', category:'upplysning', nameSv:'Plats reserverad för visst fordonsslag', nameAr:'مخصص لنوع مركبة محدد', descSv:'Plats reserverad för en viss typ av fordon, anges på tilläggstavla.', descAr:'مكان محجوز لنوع محدد من المركبات يُذكر في لوحة فرعية.',
    svg: A(`${txt('P', { y: 55, size: 26, color:'#FFF' })}${carIcon('#FFF', 50, 75, 0.5)}`, '#0072CE') },

  // ========== 12) VÄGMARKERINGAR ==========
  { id:'M1', category:'vagmark', nameSv:'Mittlinje', nameAr:'خط منتصف الطريق', descSv:'Streckad linje i mitten av vägen.', descAr:'خط متقطع في منتصف الطريق.',
    svg: SQ(`<line x1="50" y1="20" x2="50" y2="32" stroke="#FFF" stroke-width="6"/><line x1="50" y1="44" x2="50" y2="56" stroke="#FFF" stroke-width="6"/><line x1="50" y1="68" x2="50" y2="80" stroke="#FFF" stroke-width="6"/>`, '#444', '#222') },
  { id:'M2', category:'vagmark', nameSv:'Heldragen linje', nameAr:'خط متصل', descSv:'Heldragen vit linje som inte får korsas eller överskridas.', descAr:'خط أبيض متصل لا يجوز تجاوزه أو عبوره.',
    svg: SQ(`<line x1="50" y1="20" x2="50" y2="80" stroke="#FFF" stroke-width="6"/>`, '#444', '#222') },
  { id:'M3', category:'vagmark', nameSv:'Kantlinje', nameAr:'خط حافة الطريق', descSv:'Linje som markerar vägbanans yttre kant.', descAr:'خط يحدد حافة الطريق الخارجية.',
    svg: SQ(`<line x1="22" y1="20" x2="22" y2="80" stroke="#FFF" stroke-width="5"/><line x1="78" y1="20" x2="78" y2="80" stroke="#FFF" stroke-width="5"/>`, '#444', '#222') },
  { id:'M4', category:'vagmark', nameSv:'Stopplinje', nameAr:'خط التوقف', descSv:'Linje där fordon ska stanna.', descAr:'خط يجب التوقف عنده.',
    svg: SQ(`<rect x="20" y="48" width="60" height="6" fill="#FFF"/>`, '#444', '#222') },
  { id:'M5', category:'vagmark', nameSv:'Övergångsställe', nameAr:'علامة معبر مشاة', descSv:'Vägmarkering med vita ränder som markerar plats för fotgängare att korsa vägen.', descAr:'علامات معبر المشاة المرسومة على الأرض (Zebra crossing).',
    svg: SQ(`<rect x="22" y="25" width="8" height="50" fill="#FFF"/><rect x="35" y="25" width="8" height="50" fill="#FFF"/><rect x="48" y="25" width="8" height="50" fill="#FFF"/><rect x="61" y="25" width="8" height="50" fill="#FFF"/>`, '#444', '#222') },
  { id:'M6', category:'vagmark', nameSv:'Cykelöverfart', nameAr:'علامة معبر دراجات', descSv:'Vägmarkering på vägbanan som markerar plats där cyklister kan korsa vägen.', descAr:'علامات معبر الدراجات المرسومة على سطح الطريق.',
    svg: SQ(`<g fill="#FFF"><rect x="22" y="35" width="8" height="8"/><rect x="35" y="35" width="8" height="8"/><rect x="48" y="35" width="8" height="8"/><rect x="61" y="35" width="8" height="8"/><rect x="22" y="55" width="8" height="8"/><rect x="35" y="55" width="8" height="8"/><rect x="48" y="55" width="8" height="8"/><rect x="61" y="55" width="8" height="8"/></g>`, '#444', '#222') },

  // ========== 13) POLISMAN ==========
  { id:'PO1', category:'polis', nameSv:'Stoppsignal från polis', nameAr:'إشارة وقوف من الشرطي', descSv:'Polismannen höjer armen, alla fordon måste stanna.', descAr:'الشرطي يرفع يده، على كل المركبات التوقف فوراً.',
    svg: SQ(`${personIcon('#000', 50, 50, 1.4)}<line x1="50" y1="36" x2="50" y2="20" stroke="#000" stroke-width="4"/>`) },
  { id:'PO2', category:'polis', nameSv:'Klartecken från polis', nameAr:'إشارة بالمرور', descSv:'Polismannen vinkar fram trafiken, du får passera.', descAr:'الشرطي يلوّح بيده مشيراً بالمرور والمواصلة.',
    svg: SQ(`${personIcon('#000', 50, 55, 1.3)}<path d="M 60 45 L 80 35" stroke="#000" stroke-width="4"/>`) },

  // ========== 14) SYMBOLER ==========
  { id:'SY1', category:'symboler', nameSv:'Symbol — personbil', nameAr:'رمز — سيارة', descSv:'Symbol som representerar personbil på vägmärken eller tilläggstavlor.', descAr:'رمز يمثّل السيارات الخاصة على لوحات المرور والإضافية.',
    svg: SQ(`${carIcon('#000', 50, 50, 1.6)}`) },
  { id:'SY2', category:'symboler', nameSv:'Symbol — lastbil', nameAr:'رمز — شاحنة', descSv:'Symbol som representerar lastbil på vägmärken eller tilläggstavlor.', descAr:'رمز يمثّل الشاحنات على لوحات المرور والإضافية.',
    svg: SQ(`<g transform="translate(50 55)" fill="#000"><rect x="-25" y="-12" width="20" height="20"/><rect x="-5" y="-18" width="22" height="26"/><circle cx="-18" cy="13" r="5"/><circle cx="10" cy="13" r="5"/></g>`) },
  { id:'SY3', category:'symboler', nameSv:'Symbol — buss', nameAr:'رمز — حافلة', descSv:'Symbol som representerar buss på vägmärken eller tilläggstavlor.', descAr:'رمز يمثّل الحافلات على لوحات المرور والإضافية.',
    svg: SQ(`<rect x="25" y="35" width="50" height="30" fill="#000"/><rect x="30" y="40" width="10" height="10" fill="#FFF"/><rect x="45" y="40" width="10" height="10" fill="#FFF"/><rect x="60" y="40" width="10" height="10" fill="#FFF"/><circle cx="35" cy="68" r="4" fill="#000"/><circle cx="65" cy="68" r="4" fill="#000"/>`) },
  { id:'SY4', category:'symboler', nameSv:'Symbol — cykel', nameAr:'رمز — دراجة', descSv:'Symbol som representerar cykel på vägmärken eller tilläggstavlor.', descAr:'رمز يمثّل الدراجات على لوحات المرور والإضافية.',
    svg: SQ(`${bikeIcon('#000', 50, 55, 1.6)}`) },
  { id:'SY5', category:'symboler', nameSv:'Symbol — handikapp', nameAr:'رمز — معاق', descSv:'Symbol för rörelsehindrad person, används bl.a. på parkeringsplatser.', descAr:'رمز يمثّل الأشخاص ذوي الإعاقة الحركية، يُستخدم في مواقف السيارات.',
    svg: SQ(`<circle cx="40" cy="32" r="6" fill="#000"/><path d="M 30 70 Q 30 50 45 50 L 55 50 L 60 70" stroke="#000" stroke-width="4" fill="none"/><circle cx="48" cy="65" r="14" fill="none" stroke="#000" stroke-width="3"/>`, '#0072CE', '#FFF') },

  // ========== 15) TILLÄGGSTAVLOR ==========
  { id:'TT1', category:'tillagg', nameSv:'Avstånd', nameAr:'مسافة', descSv:'Anger avståndet till den händelse eller plats som huvudmärket avser.', descAr:'المسافة إلى ما تشير إليه العلامة الرئيسية.',
    svg: SQ(`${txt('200 m', { y: 60, size: 22 })}`) },
  { id:'TT2', category:'tillagg', nameSv:'Sträckans längd', nameAr:'طول المسافة', descSv:'Hur långt företeelsen sträcker sig.', descAr:'طول المنطقة التي تنطبق فيها العلامة.',
    svg: SQ(`<text x="50" y="55" text-anchor="middle" font-family="Arial" font-size="20" font-weight="700">2 km</text><path d="M 25 70 L 75 70 M 25 65 L 25 75 M 75 65 L 75 75" stroke="#000" stroke-width="3"/>`) },
  { id:'TT3', category:'tillagg', nameSv:'Tidsangivelse', nameAr:'وقت السريان', descSv:'Tider när märket gäller.', descAr:'الأوقات التي تنطبق فيها العلامة.',
    svg: SQ(`<text x="50" y="50" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700">8-17</text><text x="50" y="72" text-anchor="middle" font-family="Arial" font-size="13">(8-13)</text>`) },
  { id:'TT4', category:'tillagg', nameSv:'Riktning', nameAr:'اتجاه', descSv:'Tilläggspil som visar i vilken riktning huvudmärket gäller.', descAr:'سهم إضافي يبيّن الاتجاه الذي تطبق فيه العلامة الرئيسية.',
    svg: SQ(`<path d="M 30 50 L 70 50 M 65 45 L 70 50 L 65 55" stroke="#000" stroke-width="5" fill="none"/>`) },
  { id:'TT5', category:'tillagg', nameSv:'Fordonsslag', nameAr:'نوع المركبة', descSv:'Anger vilket fordonsslag märket gäller.', descAr:'نوع المركبة التي تشير إليها العلامة.',
    svg: SQ(`${carIcon('#000', 50, 55, 1.2)}`) },
  { id:'TT6', category:'tillagg', nameSv:'Utsträckning av parkering', nameAr:'امتداد الوقوف', descSv:'Anger var parkeringen börjar/slutar.', descAr:'بداية أو نهاية مكان الوقوف.',
    svg: SQ(`<path d="M 25 50 L 75 50 M 25 45 L 25 55 M 75 45 L 75 55" stroke="#000" stroke-width="4"/>`) },

  // ========== 16) TRAFIKSIGNALER ==========
  { id:'TS1', category:'trafiksignal', nameSv:'Trafiksignal — rött ljus', nameAr:'إشارة حمراء', descSv:'Rött ljus betyder stopp, vänta tills grönt ljus visas.', descAr:'الضوء الأحمر يعني التوقف الإلزامي حتى يأتي الأخضر.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="10" width="30" height="80" rx="4" fill="#222"/><circle cx="50" cy="28" r="10" fill="#C8102E"/><circle cx="50" cy="50" r="10" fill="#444"/><circle cx="50" cy="72" r="10" fill="#444"/></svg>` },
  { id:'TS2', category:'trafiksignal', nameSv:'Trafiksignal — gult ljus', nameAr:'إشارة صفراء', descSv:'Gult ljus, stanna om du säkert kan, annars passera försiktigt.', descAr:'الضوء الأصفر — توقف إن أمكن بأمان، وإلا أكمل بحذر.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="10" width="30" height="80" rx="4" fill="#222"/><circle cx="50" cy="28" r="10" fill="#444"/><circle cx="50" cy="50" r="10" fill="#FFC700"/><circle cx="50" cy="72" r="10" fill="#444"/></svg>` },
  { id:'TS3', category:'trafiksignal', nameSv:'Trafiksignal — grönt ljus', nameAr:'إشارة خضراء', descSv:'Grönt ljus betyder fri väg, kör om vägen är klar.', descAr:'الضوء الأخضر يعني السماح بالمرور إن كان الطريق خالياً.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="10" width="30" height="80" rx="4" fill="#222"/><circle cx="50" cy="28" r="10" fill="#444"/><circle cx="50" cy="50" r="10" fill="#444"/><circle cx="50" cy="72" r="10" fill="#1B5E20"/></svg>` },
  { id:'TS4', category:'trafiksignal', nameSv:'Gångsignal — röd', nameAr:'إشارة المشاة الحمراء', descSv:'Röd gångfigur, fotgängare ska vänta.', descAr:'صورة المشاة الحمراء — على الراجل التوقف وعدم العبور.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="10" width="60" height="80" rx="4" fill="#222"/>${personIcon('#C8102E', 50, 50, 1.5)}</svg>` },
  { id:'TS5', category:'trafiksignal', nameSv:'Gångsignal — grön', nameAr:'إشارة المشاة الخضراء', descSv:'Grön gångfigur, fotgängare får korsa vägen.', descAr:'صورة المشاة الخضراء — يُسمح للراجل بعبور الطريق.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="10" width="60" height="80" rx="4" fill="#222"/>${personIcon('#1B5E20', 50, 50, 1.5)}</svg>` },

  // ========== 17) VAKT ==========
  { id:'V1', category:'vakt', nameSv:'Vägarbetsvakt — stopp', nameAr:'حارس أعمال طريق — قف', descSv:'Vägarbetsvakten håller upp en röd skylt, du måste stanna.', descAr:'حارس أعمال الطريق يرفع لافتة حمراء، عليك التوقف.',
    svg: SQ(`<rect x="42" y="30" width="16" height="20" fill="#C8102E"/><text x="50" y="45" text-anchor="middle" font-family="Arial Black" font-size="9" fill="#FFF">STOP</text>${personIcon('#000', 50, 65, 1.0)}`) },
  { id:'V2', category:'vakt', nameSv:'Vägarbetsvakt — kör', nameAr:'حارس — مر', descSv:'Vägarbetsvakten visar grön skylt, du får köra vidare.', descAr:'حارس أعمال الطريق يرفع لافتة خضراء، يُسمح بالمرور.',
    svg: SQ(`<rect x="42" y="30" width="16" height="20" fill="#1B5E20"/><text x="50" y="45" text-anchor="middle" font-family="Arial Black" font-size="9" fill="#FFF">GÅ</text>${personIcon('#000', 50, 65, 1.0)}`) },

  // ========== 18) ÖVRIGA ==========
  { id:'O1', category:'ovriga', nameSv:'Avstängningsanordning', nameAr:'حواجز إغلاق', descSv:'Anordning som tillfälligt stänger av en del av vägen vid arbete eller olycka.', descAr:'جهاز إغلاق يحجب جزءاً من الطريق مؤقتاً عند الأعمال أو الحوادث.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="40" width="80" height="20" fill="#C8102E"/><rect x="10" y="40" width="13" height="20" fill="#FFFFFF"/><rect x="36" y="40" width="14" height="20" fill="#FFFFFF"/><rect x="63" y="40" width="14" height="20" fill="#FFFFFF"/></svg>` },
  { id:'O2', category:'ovriga', nameSv:'Markeringspil', nameAr:'سهم توجيه', descSv:'Pil som visar passageriktning vid hinder.', descAr:'سهم يبين المرور حول العائق.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="35" width="88" height="30" fill="#FFC700" stroke="#000" stroke-width="2"/><path d="M 70 50 L 30 50 M 35 45 L 30 50 L 35 55" stroke="#000" stroke-width="6" fill="none" stroke-linecap="round"/></svg>` },
  { id:'O3', category:'ovriga', nameSv:'Sidomarkeringsskärm', nameAr:'لوحة جانبية', descSv:'Markerar vägkant eller hinder.', descAr:'تُحدد حافة الطريق أو حاجزاً.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="10" width="30" height="80" fill="#FFFFFF" stroke="#000" stroke-width="2"/><polygon points="35,10 65,10 50,30" fill="#C8102E"/><polygon points="35,40 65,40 50,60" fill="#C8102E"/><polygon points="35,70 65,70 50,90" fill="#C8102E"/></svg>` },

  // ========== 19) JÄRNVÄG ==========
  { id:'J1', category:'jarnvag', nameSv:'Andreaskryss (enkelspår)', nameAr:'صليب أندرياس (سكة واحدة)', descSv:'Andreaskors som markerar järnvägskorsning med ett spår.', descAr:'صليب أندرياس يُعلّم عن تقاطع سكة حديد بمسار واحد.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="44" y="6" width="12" height="88" fill="#FFFFFF"/><rect x="44" y="6" width="12" height="88" fill="#FFFFFF" transform="rotate(45 50 50)"/><rect x="44" y="6" width="12" height="88" fill="#FFFFFF" transform="rotate(-45 50 50)"/><g stroke="#C8102E" stroke-width="4" fill="none"><path d="M 12 50 L 88 50" transform="rotate(45 50 50)"/><path d="M 12 50 L 88 50" transform="rotate(-45 50 50)"/></g></svg>` },
  { id:'J2', category:'jarnvag', nameSv:'Andreaskryss (flerspårigt)', nameAr:'صليب أندرياس (متعدد المسارات)', descSv:'Järnvägskorsning med fler än ett spår.', descAr:'صليب أندرياس مزدوج يدل على تقاطع سكة بعدة مسارات.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#C8102E" stroke-width="6" fill="#FFFFFF"><line x1="14" y1="35" x2="86" y2="65" /><line x1="86" y1="35" x2="14" y2="65" /><line x1="14" y1="50" x2="86" y2="50" stroke-width="6"/></g></svg>` },
  { id:'J3', category:'jarnvag', nameSv:'Avståndsmärken till järnväg', nameAr:'علامات اقتراب من السكة', descSv:'Visar avståndet till järnvägskorsningen.', descAr:'تشير لمسافة الاقتراب من المعبر.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="60" height="60" fill="#FFFFFF" stroke="#C8102E" stroke-width="4"/><line x1="20" y1="38" x2="80" y2="38" stroke="#C8102E" stroke-width="3"/><line x1="20" y1="56" x2="80" y2="56" stroke="#C8102E" stroke-width="3"/><line x1="20" y1="74" x2="80" y2="74" stroke="#C8102E" stroke-width="3"/></svg>` },
  { id:'J4', category:'jarnvag', nameSv:'Ljus- och ljudsignal vid järnväg', nameAr:'إشارة ضوئية وصوتية للسكة', descSv:'Blinkande röda lampor — stopp.', descAr:'مصابيح حمراء وامضة — قف.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="35" width="20" height="35" fill="#222"/><circle cx="35" cy="50" r="9" fill="#C8102E"/><circle cx="65" cy="50" r="9" fill="#C8102E"/><rect x="48" y="70" width="4" height="20" fill="#000"/></svg>` },
];

if (typeof module !== 'undefined') module.exports = { CATEGORIES, SIGNS };
