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
  { id:'A1-1', category:'varning', nameSv:'Varning för farlig kurva (höger)', nameAr:'تحذير من منعطف خطير (يمين)', descSv:'Märket varnar för en farlig högerkurva.', descAr:'تحذير من وجود منعطف خطير نحو اليمين.',
    svg: '<img src="assets/signs/all/A1.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A1-2', category:'varning', nameSv:'Varning för farlig kurva (vänster)', nameAr:'تحذير من منعطف خطير (يسار)', descSv:'Varnar för en farlig vänsterkurva.', descAr:'تحذير من وجود منعطف خطير نحو اليسار.',
    svg: '<img src="assets/signs/all/A1.png" style="width:100%; height:100%; object-fit:contain; transform: scaleX(-1);" />' },
  { id:'A2', category:'varning', nameSv:'Varning för flera farliga kurvor', nameAr:'تحذير من عدة منعطفات خطيرة', descSv:'Varnar för minst två farliga kurvor.', descAr:'تحذير من وجود عدة منعطفات خطيرة (منعطفين على الأقل).',
    svg: '<img src="assets/signs/all/A2.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A3', category:'varning', nameSv:'Varning för nedförslutning', nameAr:'تحذير من منحدر هابط', descSv:'Varnar för en brant nedförslutning.', descAr:'تحذير من وجود منحدر هبوط شديد.',
    svg: '<img src="assets/signs/all/A3.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A4', category:'varning', nameSv:'Varning för stigning', nameAr:'تحذير من منحدر صاعد', descSv:'Varnar för en brant stigning.', descAr:'تحذير من وجود منحدر صعود شديد.',
    svg: '<img src="assets/signs/all/A4.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A5', category:'varning', nameSv:'Varning för avsmalnande väg', nameAr:'تحذير من ضيق الطريق', descSv:'Vägbanan blir smalare framöver.', descAr:'تحذير من أن الطريق سيضيق من كلا الجانبين.',
    svg: '<img src="assets/signs/all/A5.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A6', category:'varning', nameSv:'Varning för bro', nameAr:'تحذير من جسر متحرك', descSv:'Varnar för en öppningsbar bro.', descAr:'تحذير من وجود جسر متحرك (قابل للفتح).',
    svg: '<img src="assets/signs/all/A6.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A7', category:'varning', nameSv:'Varning för kaj', nameAr:'تحذير من رصيف ميناء', descSv:'Varnar för risk att köra i vatten.', descAr:'تحذير من خطر السقوط بالمركبة في الماء عند حافة الرصيف.',
    svg: '<img src="assets/signs/all/A7.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A8', category:'varning', nameSv:'Varning för ojämn väg', nameAr:'تحذير من طريق غير مستوٍ', descSv:'Varnar för gupp eller ojämnheter.', descAr:'تحذير من مطبات أو عدم استواء في سطح الطريق.',
    svg: '<img src="assets/signs/all/A8.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A9', category:'varning', nameSv:'Varning för farthinder', nameAr:'تحذير من مطب صناعي', descSv:'Varnar för ett farthinder.', descAr:'تحذير من وجود مطب صناعي لتخفيف السرعة.',
    svg: '<img src="assets/signs/all/A9.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A10', category:'varning', nameSv:'Varning för slirig väg', nameAr:'تحذير من طريق زلق', descSv:'Vägen kan vara hal.', descAr:'تحذير من أن الطريق قد يكون زلقاً.',
    svg: '<img src="assets/signs/all/A10.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A11', category:'varning', nameSv:'Varning för stenskott', nameAr:'تحذير من تطاير الحصى', descSv:'Risk att löst grus eller småsten slungas upp.', descAr:'تحذير من خطر تطاير الحصى أو الأحجار الصغيرة من الطريق.',
    svg: '<img src="assets/signs/all/A11.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A12', category:'varning', nameSv:'Varning för stenras', nameAr:'تحذير من انهيار صخري', descSv:'Risk för fallande stenar.', descAr:'تحذير من خطر تساقط الصخور على الطريق.',
    svg: '<img src="assets/signs/all/A12.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A13', category:'varning', nameSv:'Varning för övergångsställe', nameAr:'تحذير من معبر مشاة', descSv:'Varnar för övergångsställe längre fram.', descAr:'تحذير من وجود معبر مشاة قادم.',
    svg: '<img src="assets/signs/all/A13.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A14', category:'varning', nameSv:'Varning för gående', nameAr:'تحذير من مشاة', descSv:'Fotgängare på eller vid vägen.', descAr:'وجود مشاة على الطريق.',
    svg: '<img src="assets/signs/all/A14.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A15', category:'varning', nameSv:'Varning för barn', nameAr:'تحذير من أطفال', descSv:'Barn kan finnas på eller vid vägen.', descAr:'وجود أطفال قرب الطريق.',
    svg: '<img src="assets/signs/all/A15.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A16', category:'varning', nameSv:'Varning för cyklande och mopedförare', nameAr:'تحذير من دراجات', descSv:'Cyklande och mopedister kan korsa eller färdas på vägen.', descAr:'وجود راكبي دراجات على الطريق.',
    svg: '<img src="assets/signs/all/A16.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A17', category:'varning', nameSv:'Varning för skidåkare', nameAr:'تحذير من متزلجين', descSv:'Risk för skidåkare på eller vid vägen.', descAr:'خطر وجود متزلجين يعبرون الطريق أو يسيرون بمحاذاته.',
    svg: '<img src="assets/signs/all/A17.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A18', category:'varning', nameSv:'Varning för ridande', nameAr:'تحذير من فرسان', descSv:'Ridande kan finnas på eller vid vägen.', descAr:'احتمال وجود خيول وفرسان على الطريق أو بمحاذاته.',
    svg: '<img src="assets/signs/all/A18.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A19-1', category:'varning', nameSv:'Varning för djur (älg)', nameAr:'تحذير من حيوانات (موظ)', descSv:'Risk för älg som kan korsa vägen.', descAr:'خطر عبور حيوان الموظ.',
    svg: '<img src="assets/signs/all/A19.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A19-2', category:'varning', nameSv:'Varning för djur (ren)', nameAr:'تحذير من حيوانات (الرنة)', descSv:'Risk för ren.', descAr:'خطر وجود الرنة.',
    svg: '<img src="assets/signs/all/A19.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A20', category:'varning', nameSv:'Varning för vägarbete', nameAr:'تحذير من أعمال طريق', descSv:'Pågående vägarbete framöver.', descAr:'تحذير من وجود أعمال طرق جارية أمامك.',
    svg: '<img src="assets/signs/all/A20.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A21', category:'varning', nameSv:'Slut på sträcka med vägarbete', nameAr:'نهاية مسار أعمال الطريق', descSv:'Sträcka med vägarbete tar slut.', descAr:'انتهاء أعمال الطريق.',
    svg: '<img src="assets/signs/all/A21.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A22', category:'varning', nameSv:'Varning för flerfärgssignal', nameAr:'تحذير من إشارة مرور', descSv:'Trafikljus reglerar trafiken längre fram.', descAr:'تحذير من وجود إشارات مرور ضوئية تنظم حركة السير أمامك.',
    svg: '<img src="assets/signs/all/A22.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A23', category:'varning', nameSv:'Varning för lågt flygande flygplan', nameAr:'تحذير من طائرات منخفضة', descSv:'Flygplan kan flyga lågt över vägen.', descAr:'احتمال طائرات تحلّق منخفضة.',
    svg: '<img src="assets/signs/all/A23.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A24', category:'varning', nameSv:'Varning för sidvind', nameAr:'تحذير من رياح جانبية', descSv:'Stark sidvind kan påverka fordonet.', descAr:'تحذير من رياح جانبية قوية قد تؤثر على مسار المركبة.',
    svg: '<img src="assets/signs/all/A24.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A25', category:'varning', nameSv:'Varning för mötande trafik', nameAr:'تحذير من حركة مرور قادمة', descSv:'Mötande trafik kan förekomma.', descAr:'تحذير من احتمال وجود حركة مرور قادمة من الاتجاه المعاكس.',
    svg: '<img src="assets/signs/all/A25.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A26', category:'varning', nameSv:'Varning för tunnel', nameAr:'تحذير من نفق', descSv:'En tunnel finns framåt.', descAr:'تحذير من اقترابك من نفق.',
    svg: '<img src="assets/signs/all/A26.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A27', category:'varning', nameSv:'Varning för svag vägkant eller hög körbanekant', nameAr:'تحذير من حافة طريق خطرة', descSv:'Vägkanten är ostadig eller brant.', descAr:'تحذير من أن حافة الطريق ضعيفة أو شديدة الانحدار.',
    svg: '<img src="assets/signs/all/A27.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A28', category:'varning', nameSv:'Varning för vägkorsning', nameAr:'تحذير من تقاطع', descSv:'Vägkorsning där högerregeln gäller.', descAr:'تحذير من تقاطع طرق (تطبق فيه قاعدة الأولوية لليمين).',
    svg: '<img src="assets/signs/all/A28.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A29', category:'varning', nameSv:'Varning för vägkorsning där trafikanter på anslutande väg har väjningsplikt eller stopplikt', nameAr:'تقاطع: المركبات الجانبية ملزمة بإفساح الطريق', descSv:'Trafik från sidogator har väjningsplikt.', descAr:'حركة المرور القادمة من الطرق الجانبية ملزمة بإفساح الطريق لك.',
    svg: '<img src="assets/signs/all/A29.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A30', category:'varning', nameSv:'Varning för cirkulationsplats', nameAr:'تحذير من دوار', descSv:'En rondell finns framåt.', descAr:'تحذير من وجود دوار أمامك.',
    svg: '<img src="assets/signs/all/A30.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A31', category:'varning', nameSv:'Varning för långsamtgående fordon', nameAr:'تحذير من مركبات بطيئة', descSv:'Långsamtgående fordon kan förekomma.', descAr:'تحذير من احتمال وجود مركبات تسير ببطء على الطريق.',
    svg: '<img src="assets/signs/all/A31.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A32', category:'varning', nameSv:'Varning för fordon med förspänt dragdjur', nameAr:'تحذير من عربات تجرها حيوانات', descSv:'Fordon med dragdjur kan förekomma.', descAr:'تحذير من عربات تجرها خيول.',
    svg: '<img src="assets/signs/all/A32.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A33', category:'varning', nameSv:'Varning för terrängskotertrafik', nameAr:'تحذير من عربات الثلج (سكوتر)', descSv:'Terrängskotrar kan korsa vägen.', descAr:'احتمال عبور عربات الثلج (سكوتر ثلجي) للطريق.',
    svg: '<img src="assets/signs/all/A33.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A34', category:'varning', nameSv:'Varning för kö', nameAr:'تحذير من ازدحام مروري', descSv:'Risk för köbildning.', descAr:'تحذير من خطر تشكل طوابير وازدحام مروري.',
    svg: '<img src="assets/signs/all/A34.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A35', category:'varning', nameSv:'Varning för järnvägskorsning med bommar', nameAr:'تحذير من تقاطع سكة حديد ببوابات', descSv:'Järnvägskorsning utrustad med bommar.', descAr:'تحذير من تقاطع سكة حديد مزود بحواجز (بوابات).',
    svg: '<img src="assets/signs/all/A35.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A36', category:'varning', nameSv:'Varning för järnvägskorsning utan bommar', nameAr:'تحذير من تقاطع سكة حديد بدون بوابات', descSv:'Järnvägskorsning utan bommar.', descAr:'تحذير من تقاطع سكة حديد غير مزود بحواجز.',
    svg: '<img src="assets/signs/all/A36.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A37', category:'varning', nameSv:'Varning för korsning med spårväg utan bommar', nameAr:'تحذير من تقاطع ترام', descSv:'Spårvagn kan korsa vägen.', descAr:'تحذير من تقاطع قد يعبر منه الترام.',
    svg: '<img src="assets/signs/all/A37.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A38', category:'varning', nameSv:'Avstånd till plankorsning', nameAr:'علامات تحديد المسافة لتقاطع سكة حديد', descSv:'Visar avståndet till järnvägskorsningen.', descAr:'علامات تبين المسافة المتبقية للوصول إلى تقاطع السكة الحديدية.',
    svg: '<img src="assets/signs/all/A38.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A39', category:'varning', nameSv:'Kryssmärke', nameAr:'صليب أندرياس لمعبر السكة', descSv:'Andreaskors som markerar järnvägskorsning.', descAr:'علامة تقاطع السكة الحديدية.',
    svg: '<img src="assets/signs/all/A39.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A40', category:'varning', nameSv:'Varning för annan fara', nameAr:'تحذير من خطر آخر', descSv:'Annan fara än de som anges av andra varningsmärken.', descAr:'تحذير من خطر آخر لا توجد له علامة تحذيرية مخصصة.',
    svg: '<img src="assets/signs/all/A40.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'A41', category:'varning', nameSv:'Varning för olycka', nameAr:'تحذير من حادث', descSv:'En olycka har inträffat framåt.', descAr:'تحذير من وقوع حادث مروري أمامك.',
    svg: '<img src="assets/signs/all/A41.png" style="width:100%; height:100%; object-fit:contain;" />' },


  // ========== 2) VÄJNINGSPLIKT — علامات الأولوية ==========
  { id:'B1', category:'vajning', nameSv:'Väjningsplikt', nameAr:'إفساح الطريق', descSv:'Du har väjningsplikt mot trafik på korsande väg.', descAr:'أنت ملزم بإفساح الطريق لحركة المرور على الطريق المتقاطع.',
    svg: '<img src="assets/signs/all/B1.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'B2', category:'vajning', nameSv:'Stopplikt', nameAr:'قف', descSv:'Stanna helt vid stopplinjen och lämna företräde.', descAr:'الوقوف الإلزامي التام عند خط التوقف، وإعطاء الأولوية للآخرين.',
    svg: '<img src="assets/signs/all/B2.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'B3', category:'vajning', nameSv:'Övergångsställe', nameAr:'معبر مشاة', descSv:'Markerar plats där fotgängare har företräde att korsa vägen.', descAr:'يحدد مكان عبور المشاة، حيث تكون للمشاة الأولوية في عبور الطريق.',
    svg: '<img src="assets/signs/all/B3.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'B4', category:'vajning', nameSv:'Huvudled', nameAr:'طريق رئيسي', descSv:'Huvudled — du har företräde.', descAr:'أنت تقود على طريق رئيسي — ولديك الأولوية.',
    svg: '<img src="assets/signs/all/B4.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'B5', category:'vajning', nameSv:'Huvudled upphör', nameAr:'انتهاء الطريق الرئيسي', descSv:'Huvudleden tar slut och de allmänna väjningsreglerna börjar gälla igen.', descAr:'تشير إلى نهاية الطريق ذي الأولوية، وعندها تعود قواعد الأولوية العامة للسريان.',
    svg: '<img src="assets/signs/all/B5.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'B6', category:'vajning', nameSv:'Mötesplats', nameAr:'موضع مرور متبادل', descSv:'Plats där mötande fordon kan passera varandra.', descAr:'مكان مخصص لتلاقي ومرور المركبات القادمة من الاتجاهين (في الطرق الضيقة).',
    svg: '<img src="assets/signs/all/B6.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'B7', category:'vajning', nameSv:'Väjningsplikt mot mötande trafik', nameAr:'إفساح الطريق للمرور المقابل', descSv:'Väjningsplikt mot mötande trafik på smal väg.', descAr:'يجب عليك إفساح الطريق لحركة المرور القادمة من الاتجاه المعاكس في الطرق الضيقة.',
    svg: '<img src="assets/signs/all/B7.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'B8', category:'vajning', nameSv:'Mötande trafik har väjningsplikt', nameAr:'المرور المقابل يجب أن يفسح الطريق', descSv:'Mötande trafik måste väja.', descAr:'حركة المرور القادمة من الاتجاه المعاكس ملزمة بإفساح الطريق لك.',
    svg: '<img src="assets/signs/all/B8.png" style="width:100%; height:100%; object-fit:contain;" />' },

  // ========== 3) FÖRBUDSMÄRKEN — علامات الحظر ==========
  { id:'C1', category:'forbud', nameSv:'Förbud mot infart med fordon', nameAr:'ممنوع الدخول', descSv:'Inget motordrivet fordon, cykel eller annat fordon får passera märket.', descAr:'يُمنع دخول جميع المركبات (بما فيها الدراجات) لتجاوز هذه العلامة.',
    svg: '<img src="assets/signs/all/C1.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C2', category:'forbud', nameSv:'Förbud mot trafik med fordon', nameAr:'ممنوع المرور لجميع المركبات', descSv:'All fordonstrafik är förbjuden, gäller även cyklar och mopeder.', descAr:'يُمنع مرور كافة المركبات بما فيها الدراجات الهوائية.',
    svg: '<img src="assets/signs/all/C2.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C3', category:'forbud', nameSv:'Förbud mot trafik med motordrivet fordon', nameAr:'ممنوع المركبات الآلية', descSv:'Förbud mot motordrivet fordon (utom moped klass II).', descAr:'يمنع مرور المركبات بمحرك.',
    svg: '<img src="assets/signs/all/C3.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C4', category:'forbud', nameSv:'Förbud mot trafik med tung lastbil', nameAr:'ممنوع الشاحنات الثقيلة', descSv:'Lastbilar med totalvikt över 3,5 ton får inte passera märket.', descAr:'يُمنع مرور الشاحنات التي تتجاوز وزنها الإجمالي 3.5 طن.',
    svg: '<img src="assets/signs/all/C4.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C5', category:'forbud', nameSv:'Förbud mot trafik med fordon med farligt gods', nameAr:'ممنوع نقل البضائع الخطرة', descSv:'Fordon med farligt gods (kemikalier, explosiva ämnen, brandfarligt) får inte passera.', descAr:'يُمنع مرور المركبات الناقلة لمواد كيميائية أو متفجرة أو قابلة للاشتعال.',
    svg: '<img src="assets/signs/all/C5.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C6', category:'forbud', nameSv:'Förbud mot trafik med motorcykel', nameAr:'ممنوع الدراجات النارية', descSv:'Förbud mot motorcykel och moped klass I.', descAr:'يُمنع مرور الدراجات النارية والموبيد فئة 1.',
    svg: '<img src="assets/signs/all/C6.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C7', category:'forbud', nameSv:'Förbud mot trafik med moped klass II', nameAr:'ممنوع مرور الموبيد (دراجة نارية خفيفة) فئة 2', descSv:'Moped klass II (max 25 km/h) får inte trafikera vägen efter märket.', descAr:'يُمنع مرور دراجات الفئة II ذات السرعة القصوى 25 كم/س.',
    svg: '<img src="assets/signs/all/C7.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C8', category:'forbud', nameSv:'Förbud mot trafik med cykel och moped klass II', nameAr:'ممنوع الدراجات', descSv:'Cyklar och moped klass II får inte trafikera vägen.', descAr:'يُمنع مرور الدراجات الهوائية ودراجات الفئة II.',
    svg: '<img src="assets/signs/all/C8.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C9', category:'forbud', nameSv:'Förbud mot trafik med traktor', nameAr:'ممنوع الجرارات', descSv:'Traktorer och motorredskap som väghyvel eller jordbruksmaskin är förbjudna.', descAr:'يُمنع مرور الجرارات والمعدات الزراعية والصناعية ذاتية الحركة.',
    svg: '<img src="assets/signs/all/C9.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C10', category:'forbud', nameSv:'Förbud mot trafik med fordon lastat med farligt gods för vatten', nameAr:'ممنوع الناقلات الملوثة للمياه', descSv:'Fordon med last som kan förorena vatten är förbjudna, vanligen vid vattenskyddsområden.', descAr:'يُمنع مرور المركبات التي تحمل مواد قد تلوث المياه (غالباً قرب مناطق حماية المياه).',
    svg: '<img src="assets/signs/all/C10.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C11', category:'forbud', nameSv:'Förbud mot gångtrafik', nameAr:'ممنوع المشاة', descSv:'Fotgängare får inte beträda vägen efter märket.', descAr:'يُمنع على المشاة الدخول إلى الطريق بعد العلامة.',
    svg: '<img src="assets/signs/all/C11.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C12', category:'forbud', nameSv:'Förbud mot trafik med annat motordrivet fordon än moped klass II', nameAr:'ممنوع مرور المركبات الآلية باستثناء الموبيد فئة 2', descSv:'Endast moped klass II tillåten.', descAr:'يُسمح فقط بمرور الموبيد فئة 2.',
    svg: '<img src="assets/signs/all/C12.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C13', category:'forbud', nameSv:'Ändamålsplats', nameAr:'منطقة لغرض محدد', descSv:'Endast trafik för visst ändamål tillåten.', descAr:'يُسمح بالمرور فقط للمركبات التي تخدم غرضاً محدداً (مثل النقل إلى عقار).',
    svg: '<img src="assets/signs/all/C13.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C14', category:'forbud', nameSv:'Återvändsväg', nameAr:'طريق مغلق', descSv:'Vägen är en återvändsgata utan genomfart.', descAr:'الشارع مغلق في نهايته (طريق مسدود ولا يسمح بالمرور عبره).',
    svg: '<img src="assets/signs/all/C14.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C15', category:'forbud', nameSv:'Begränsad fordonsbredd', nameAr:'تحديد عرض المركبة', descSv:'Förbud mot fordon bredare än angivet.', descAr:'يُمنع مرور المركبات التي يزيد عرضها عن الرقم المذكور.',
    svg: '<img src="assets/signs/all/C15.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C16', category:'forbud', nameSv:'Begränsad fordonshöjd', nameAr:'تحديد ارتفاع المركبة', descSv:'Förbud mot fordon högre än angivet.', descAr:'يُمنع مرور المركبات التي يزيد ارتفاعها عن الرقم المذكور.',
    svg: '<img src="assets/signs/all/C16.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C17', category:'forbud', nameSv:'Begränsad fordonslängd', nameAr:'تحديد طول المركبة', descSv:'Förbud mot fordon längre än angivet.', descAr:'يُمنع مرور المركبات التي يزيد طولها عن الرقم المذكور.',
    svg: '<img src="assets/signs/all/C17.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C18', category:'forbud', nameSv:'Begränsad bruttovikt på fordon', nameAr:'تحديد الوزن الإجمالي للمركبة', descSv:'Förbud mot fordon med högre bruttovikt än angivet.', descAr:'يُمنع مرور المركبات التي يتجاوز وزنها الإجمالي (Bruttovikt) الرقم المذكور.',
    svg: '<img src="assets/signs/all/C18.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C19', category:'forbud', nameSv:'Begränsad bruttovikt på fordon och fordonståg', nameAr:'تحديد وزن المركبة والقاطرة', descSv:'Förbud mot fordon med högre bruttovikt.', descAr:'يُمنع مرور المركبة مع المقطورة إذا كان وزنهما الإجمالي يتجاوز الرقم المذكور.',
    svg: '<img src="assets/signs/all/C19.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C20', category:'forbud', nameSv:'Begränsad last på axel', nameAr:'تحديد الحمل المحوري', descSv:'Förbud mot fordon med högre axeltryck.', descAr:'يُمنع مرور المركبات التي يزيد ضغط محورها عن الرقم المذكور.',
    svg: '<img src="assets/signs/all/C20.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C21', category:'forbud', nameSv:'Begränsat axeltryck', nameAr:'تحديد ضغط المحور', descSv:'Förbud mot fordon med högre axeltryck än det angivna värdet.', descAr:'يُمنع المركبات التي يتجاوز حملها على المحور القيمة المذكورة.',
    svg: '<img src="assets/signs/all/C21.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C22', category:'forbud', nameSv:'Förbud mot omkörning', nameAr:'ممنوع التجاوز', descSv:'Förbud mot att köra om motordrivet fordon.', descAr:'يُمنع تجاوز أي مركبة آلية أخرى (أكثر من عجلتين).',
    svg: '<img src="assets/signs/all/C22.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C23', category:'forbud', nameSv:'Förbud mot omkörning med tung lastbil', nameAr:'ممنوع تجاوز الشاحنات الثقيلة', descSv:'Förare av tung lastbil får inte köra om annat motordrivet fordon.', descAr:'يُمنع على سائقي الشاحنات الثقيلة تجاوز المركبات الآلية الأخرى.',
    svg: '<img src="assets/signs/all/C23.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C24', category:'forbud', nameSv:'Slut på förbud mot omkörning', nameAr:'انتهاء حظر التجاوز', descSv:'Förbudet mot omkörning upphör.', descAr:'ينتهي هنا حظر التجاوز.',
    svg: '<img src="assets/signs/all/C24.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C25', category:'forbud', nameSv:'Slut på förbud mot omkörning med tung lastbil', nameAr:'انتهاء منع تجاوز الشاحنات', descSv:'Förbudet mot omkörning med tung lastbil tar slut här.', descAr:'ينتهي هنا حظر التجاوز المخصص للشاحنات الثقيلة.',
    svg: '<img src="assets/signs/all/C25.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C31', category:'forbud', nameSv:'Hastighetsbegränsning', nameAr:'تحديد السرعة', descSv:'Hastighetsbegränsning enligt angivet värde.', descAr:'الحد الأقصى للسرعة المسموح بها هو الرقم المذكور.',
    svg: '<img src="assets/signs/all/C31.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C32', category:'forbud', nameSv:'Tillfällig hastighetsbegränsning upphör', nameAr:'انتهاء تحديد السرعة المؤقت', descSv:'Den tillfälliga hastighetsbegränsningen slutar att gälla efter märket.', descAr:'تنتهي قيود السرعة المؤقتة ويبدأ سريان حد السرعة المعتاد.',
    svg: '<img src="assets/signs/all/C32.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C33', category:'forbud', nameSv:'Förbud mot stannande och parkering', nameAr:'ممنوع الوقوف والتوقف', descSv:'Förbud att stanna eller parkera.', descAr:'يُمنع منعاً باتاً وقوف أو توقف المركبة.',
    svg: '<img src="assets/signs/all/C33.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C35', category:'forbud', nameSv:'Förbud mot parkering', nameAr:'ممنوع الانتظار', descSv:'Det är förbjudet att parkera fordon, men kortare uppehåll får göras.', descAr:'يُمنع ركن السيارة، ولكن يُسمح بالتوقف القصير جداً لصعود/نزول الركاب أو التحميل.',
    svg: '<img src="assets/signs/all/C35.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C36', category:'forbud', nameSv:'Förbud mot parkering på dag med udda datum', nameAr:'ممنوع ركن السيارة في التواريخ الفردية', descSv:'Parkering förbjuden under dagar med udda datum (1, 3, 5, 7 osv).', descAr:'يُمنع ركن السيارة في الأيام التي توافق تواريخ فردية..',
    svg: '<img src="assets/signs/all/C36.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C37', category:'forbud', nameSv:'Förbud mot parkering på dag med jämnt datum', nameAr:'ممنوع ركن السيارة في التواريخ الزوجية', descSv:'Parkering förbjuden under dagar med jämnt datum (2, 4, 6, 8 osv).', descAr:'يُمنع ركن السيارة في الأيام التي توافق تواريخ زوجية..',
    svg: '<img src="assets/signs/all/C37.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C39', category:'forbud', nameSv:'Datumparkering', nameAr:'ركن السيارة حسب التاريخ', descSv:'Förbud att parkera under viss tid baserat på datum.', descAr:'تُطبق قواعد ركن السيارة بناءً على تواريخ الأيام (فردي/زوجي).',
    svg: '<img src="assets/signs/all/C39.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C40', category:'forbud', nameSv:'Slut på förbud', nameAr:'انتهاء كل الممنوعات', descSv:'Slut på alla lokala förbud för fordon i rörelse.', descAr:'نهاية كل الحظر المحلي للسيارات السائرة.',
    svg: '<img src="assets/signs/all/C40.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C41', category:'forbud', nameSv:'Slut på hastighetsbegränsning', nameAr:'انتهاء حد السرعة', descSv:'Den utmärkta hastighetsbegränsningen tar slut och allmän hastighet gäller igen.', descAr:'انتهاء حد السرعة المحدد.',
    svg: '<img src="assets/signs/all/C41.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C42', category:'forbud', nameSv:'Förbud mot U-sväng', nameAr:'ممنوع الدوران للخلف', descSv:'Förbud att göra U-sväng.', descAr:'يُمنع الدوران للخلف (القيام بحركة U-turn).',
    svg: '<img src="assets/signs/all/C42.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C43', category:'forbud', nameSv:'Förbud mot sväng i korsning', nameAr:'ممنوع الانعطاف في التقاطع', descSv:'Förbud att svänga vid nästa korsning.', descAr:'يُمنع الانعطاف عند التقاطع القادم.',
    svg: '<img src="assets/signs/all/C43.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'C45', category:'forbud', nameSv:'Förbud mot ljudsignal', nameAr:'ممنوع استخدام البوق', descSv:'Anger att signalhorn inte får användas annat än för att förebygga omedelbar fara.', descAr:'تشير إلى أنه يُمنع استخدام بوق السيارة (الزمور) إلا لغرض تفادي خطر وشيك.',
    svg: '<img src="assets/signs/all/C45.png" style="width:100%; height:100%; object-fit:contain;" />' },

  // ========== 4) PÅBUDSMÄRKEN — علامات الإلزام ==========
  { id:'D1-1', category:'pabud', nameSv:'Påbjuden körriktning (rakt fram)', nameAr:'إلزام بالسير للأمام', descSv:'Påbjuden körriktning rakt fram.', descAr:'يجب عليك السير في الاتجاه المستقيم فقط.',
    svg: '<img src="assets/signs/all/D1.png" style="width:100%; height:100%; object-fit:contain; transform:rotate(90deg);" />' },
  { id:'D1-2', category:'pabud', nameSv:'Påbjuden körriktning (höger)', nameAr:'إلزام بالاتجاه يميناً', descSv:'Du är skyldig att svänga höger vid korsningen.', descAr:'يجب عليك الانعطاف يميناً عند التقاطع.',
    svg: '<img src="assets/signs/all/D1.png" style="width:100%; height:100%; object-fit:contain; transform:rotate(180deg);" />' },
  { id:'D1-3', category:'pabud', nameSv:'Påbjuden körriktning (vänster)', nameAr:'إلزام بالاتجاه يساراً', descSv:'Du är skyldig att svänga vänster vid korsningen.', descAr:'يجب عليك الانعطاف يساراً عند التقاطع.',
    svg: '<img src="assets/signs/all/D1.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'D1-4', category:'pabud', nameSv:'Påbjuden körriktning (rakt fram eller höger)', nameAr:'مستقيم أو يمين', descSv:'Rakt fram eller höger.', descAr:'القيادة مسموحة إما بخط مستقيم أو بالانعطاف يميناً.',
    svg: '<img src="assets/signs/all/D1.png" style="width:100%; height:100%; object-fit:contain; transform:rotate(135deg);" />' },
  { id:'D1-5', category:'pabud', nameSv:'Påbjuden körriktning (rakt fram eller vänster)', nameAr:'مستقيم أو يسار', descSv:'Rakt fram eller vänster.', descAr:'القيادة مسموحة إما بخط مستقيم أو بالانعطاف يساراً.',
    svg: '<img src="assets/signs/all/D1.png" style="width:100%; height:100%; object-fit:contain; transform:rotate(45deg);" />' },
  { id:'D1-6', category:'pabud', nameSv:'Påbjuden körriktning (vänster eller höger)', nameAr:'يمين أو يسار', descSv:'Du måste välja att svänga antingen höger eller vänster, rakt fram tillåts inte.', descAr:'يجب عليك الانعطاف إما يميناً أو يساراً (يُمنع السير بخط مستقيم).',
    svg: '<img src="assets/signs/all/D1.png" style="width:100%; height:100%; object-fit:contain; transform:scaleY(-1);" />' },
  { id:'D2-1', category:'pabud', nameSv:'Påbjuden körbana (höger)', nameAr:'مسار إلزامي يميناً', descSv:'Passera hindret till höger.', descAr:'يجب عليك تجاوز العائق أو الجزيرة الوسطية من جهة اليمين.',
    svg: '<img src="assets/signs/all/D2.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'D2-2', category:'pabud', nameSv:'Påbjuden körbana (vänster)', nameAr:'مسار إلزامي يساراً', descSv:'Passera hindret till vänster.', descAr:'يجب عليك تجاوز العائق أو الجزيرة الوسطية من جهة اليسار.',
    svg: '<img src="assets/signs/all/D2.png" style="width:100%; height:100%; object-fit:contain; transform:scaleX(-1);" />' },
  { id:'D3', category:'pabud', nameSv:'Påbjuden cirkulation', nameAr:'إلزام بالدوار', descSv:'Cirkulationsplats — kör i pilarnas riktning.', descAr:'دوار (صينية) — يجب القيادة في اتجاه الأسهم الدائرية.',
    svg: '<img src="assets/signs/all/D3.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'D4', category:'pabud', nameSv:'Påbjuden gångbana', nameAr:'مسار مشاة إلزامي', descSv:'Banan är endast avsedd för gångtrafik, övrig trafik förbjuden.', descAr:'الطريق مخصص للمشاة فقط، ممنوع على المركبات والدراجات.',
    svg: '<img src="assets/signs/all/D4.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'D5', category:'pabud', nameSv:'Påbjuden cykelbana', nameAr:'مسار دراجات إلزامي', descSv:'Banan är reserverad för cyklister och moped klass II, övrig trafik förbjuden.', descAr:'مسار إلزامي ومخصص حصرياً للدراجات الهوائية والموبيد فئة 2.',
    svg: '<img src="assets/signs/all/D5.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'D6', category:'pabud', nameSv:'Påbjuden gång- och cykelbana', nameAr:'مسار للمشاة والدراجات', descSv:'Gemensam bana för gående och cyklister.', descAr:'مسار مشترك يستخدمه المشاة وراكبو الدراجات معاً.',
    svg: '<img src="assets/signs/all/D6.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'D7', category:'pabud', nameSv:'Påbjudna gång- och cykelbanor', nameAr:'مساران منفصلان للمشاة والدراجات', descSv:'Separata banor för gående och cyklister.', descAr:'مسارات منفصلة ومحددة: أحدهما للمشاة والآخر للدراجات.',
    svg: '<img src="assets/signs/all/D7.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'D8', category:'pabud', nameSv:'Påbjuden ridväg', nameAr:'مسار للخيل إلزامي', descSv:'Banan är reserverad för ridning, motorfordon och cyklar förbjudna.', descAr:'مسار مخصص لركوب الخيل، ممنوع على المركبات والدراجات.',
    svg: '<img src="assets/signs/all/D8.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'D9', category:'pabud', nameSv:'Påbjuden led för terrängmotorfordon', nameAr:'مسار لمركبات التضاريس', descSv:'Endast terrängmotorfordon som snöskoter eller fyrhjuling får trafikera leden.', descAr:'مسار مخصص لمركبات التضاريس كالعربات الجليدية والرباعية الدفع.',
    svg: '<img src="assets/signs/all/D9.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'D10', category:'pabud', nameSv:'Påbjuden led för moped klass II', nameAr:'مسار لدراجة كلاس II', descSv:'Endast moped klass II.', descAr:'مسار إلزامي ومخصص حصرياً للموبيد فئة 2.',
    svg: '<img src="assets/signs/all/D10.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'D11', category:'pabud', nameSv:'Slut på påbjuden bana eller led', nameAr:'انتهاء المسار الإلزامي', descSv:'Den påbjudna banan eller leden tar slut här.', descAr:'تشير إلى انتهاء المسار الإلزامي (سواء للمشاة، الدراجات، أو الخيل).',
    svg: '<img src="assets/signs/all/D11.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'D12', category:'pabud', nameSv:'Påbjudet körfält eller körbana för fordon i linjetrafik m.fl.', nameAr:'مسار إلزامي لمركبات النقل العام', descSv:'Körfältet är reserverat för bussar i linjetrafik, taxi och vissa nyttofordon.', descAr:'حارة سير محجوزة حصرياً لحافلات النقل العام، سيارات الأجرة، ومركبات محددة.',
    svg: '<img src="assets/signs/all/D12.png" style="width:100%; height:100%; object-fit:contain;" />' },

  // ========== 5) ANVISNINGSMÄRKEN — علامات الإرشاد ==========
  { id:'E1', category:'anvisning', nameSv:'Motorväg', nameAr:'طريق سريع (أوتوستراد)', descSv:'Motorväg börjar här, gångtrafik och cykling förbjudna, högsta hastighet upp till 120 km/h.', descAr:'بداية الطريق السريع: ممنوع دخول المشاة والدراجات، السرعة القصوى عادة 110 إلى 120 كم/س.',
    svg: '<img src="assets/signs/all/E1.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E2', category:'anvisning', nameSv:'Motorväg upphör', nameAr:'انتهاء الطريق السريع', descSv:'Motorvägsbestämmelserna upphör, allmänna trafikregler gäller igen.', descAr:'انتهاء الطريق السريع (Autobahn) وعودة سريان قواعد المرور العادية.',
    svg: '<img src="assets/signs/all/E2.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E3', category:'anvisning', nameSv:'Motortrafikled', nameAr:'طريق سيارات (Motortrafikled)', descSv:'Motortrafikled börjar här, endast motorfordon tillåtna, ofta lägre hastighet än motorväg.', descAr:'بداية طريق سيارات (Motortrafikled)، مخصص للمركبات الآلية فقط، السرعة القصوى أقل من الأوتوبان.',
    svg: '<img src="assets/signs/all/E3.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E4', category:'anvisning', nameSv:'Motortrafikled upphör', nameAr:'انتهاء طريق السيارات السريع', descSv:'Motortrafikledens regler upphör att gälla.', descAr:'ينتهي طريق السيارات السريع، وتُلغى القواعد الخاصة به.',
    svg: '<img src="assets/signs/all/E4.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E5', category:'anvisning', nameSv:'Tättbebyggt område', nameAr:'منطقة مأهولة', descSv:'Anger att du kör in i ett område där särskilda trafikregler för tätort och ofta lägre hastighetsgränser gäller.', descAr:'تشير إلى دخولك منطقة تطبق فيها قواعد المرور الخاصة بالمدن، وغالباً ما تكون حدود السرعة فيها أقل.',
    svg: '<img src="assets/signs/all/E5.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E6', category:'anvisning', nameSv:'Tättbebyggt område upphör', nameAr:'انتهاء المنطقة المأهولة', descSv:'Märket anger att det tättbebyggda området slutar och bashastigheten på 50 km/h upphör.', descAr:'انتهاء المنطقة المأهولة وحد السرعة الافتراضي 50 كم/س.',
    svg: '<img src="assets/signs/all/E6.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E7', category:'anvisning', nameSv:'Gågata', nameAr:'شارع للمشاة', descSv:'Anger en gata avsedd för gående. Fordon får endast föras i gångfart och har väjningsplikt.', descAr:'شارع مخصص للمشاة (Gågata). يُسمح بقيادة المركبات فيه بسرعة المشي فقط مع ضرورة إعطاء الأولوية القصوى للمشاة.',
    svg: '<img src="assets/signs/all/E7.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E8', category:'anvisning', nameSv:'Gågata upphör', nameAr:'انتهاء شارع المشاة', descSv:'Gågatan tar slut och vanlig fordonstrafik tillåts igen.', descAr:'انتهاء شارع المشاة، وتعود قواعد السير الاعتيادية للمركبات.',
    svg: '<img src="assets/signs/all/E8.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E9', category:'anvisning', nameSv:'Gångfartsområde', nameAr:'منطقة المشاة (بسرعة المشي)', descSv:'Område där fordon måste köras i gångfart (ca 7 km/h) och fotgängare har företräde.', descAr:'منطقة (Gångfartsområde) يجب على المركبات فيها السير بسرعة المشي فقط، وللمشاة أولوية مطلقة.',
    svg: '<img src="assets/signs/all/E9.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E10', category:'anvisning', nameSv:'Gångfartsområde upphör', nameAr:'انتهاء منطقة المشاة (سرعة المشي)', descSv:'Gångfartsområdet tar slut och vanlig hastighet får återupptas.', descAr:'انتهاء منطقة سرعة المشي، يمكن استئناف السرعة الاعتيادية.',
    svg: '<img src="assets/signs/all/E10.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E11', category:'anvisning', nameSv:'Rekommenderad lägre hastighet', nameAr:'سرعة منخفضة موصى بها', descSv:'Anger en lägre hastighet som rekommenderas av trafiksäkerhetsskäl.', descAr:'تشير إلى سرعة أقل يوصى بها لأسباب تتعلق بالسلامة المرورية.',
    svg: '<img src="assets/signs/all/E11.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E12', category:'anvisning', nameSv:'Rekommenderad lägre hastighet upphör', nameAr:'انتهاء السرعة الموصى بها', descSv:'Rekommendationen om lägre hastighet upphör att gälla.', descAr:'تنتهي توصية السرعة المنخفضة ويعود حد السرعة العام للسريان.',
    svg: '<img src="assets/signs/all/E12.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E13', category:'anvisning', nameSv:'Rekommenderad hastighet vid bristfälligt väglag', nameAr:'سرعة موصى بها عند سوء حالة الطريق', descSv:'Föreslagen lägre hastighet då vägen är hal, blöt eller på annat sätt bristfällig.', descAr:'سرعة أقل يوصى بها عندما يكون الطريق زلقاً أو رطباً أو سيئاً.',
    svg: '<img src="assets/signs/all/E13.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E14', category:'anvisning', nameSv:'Återvändsväg', nameAr:'طريق مسدود (غير نافذ)', descSv:'Anger en väg som är stängd i ena änden och inte medger genomfartstrafik.', descAr:'تشير إلى طريق مغلق من إحدى نهايتيه ولا يسمح بالمرور للجهة الأخرى.',
    svg: '<img src="assets/signs/all/E14.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E15', category:'anvisning', nameSv:'Vägnummer (Europaväg)', nameAr:'رقم طريق أوروبي', descSv:'Numrerad väg som ingår i det europeiska huvudvägnätet (E-väg).', descAr:'رقم طريق ضمن الشبكة الأوروبية للطرق الرئيسية (يبدأ بالحرف E).',
    svg: '<img src="assets/signs/all/E15.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E16', category:'anvisning', nameSv:'Vägnummer (Riksväg)', nameAr:'رقم طريق وطني', descSv:'Numrerad svensk riksväg som binder samman större orter.', descAr:'رقم طريق وطني سويدي يربط بين المدن الكبرى.',
    svg: '<img src="assets/signs/all/E16.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E17', category:'anvisning', nameSv:'Vägnummer (Länsväg)', nameAr:'رقم طريق إقليمي', descSv:'Numrerad länsväg av regional betydelse.', descAr:'رقم طريق إقليمي ضمن إحدى المقاطعات السويدية.',
    svg: '<img src="assets/signs/all/E17.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'E20', category:'anvisning', nameSv:'Områdesmärke', nameAr:'علامة منطقة', descSv:'Anger ett område med särskilda regler.', descAr:'منطقة لها قواعد خاصة.',
    svg: '<img src="assets/signs/all/E20.png" style="width:100%; height:100%; object-fit:contain;" />' },

  // ========== 6) LOKALISERING — VÄGVISNING ==========
  { id:'F1', category:'vagvisning', nameSv:'Orienteringstavla', nameAr:'لوحة توجيه', descSv:'Förhandsinformation om vägval, destinationer och vägnummer på en motorväg.', descAr:'لوحة استرشادية توضح الاتجاهات والوجهات وأرقام الطرق على الطريق السريع.',
    svg: RECT(`<text x="50" y="35" text-anchor="middle" font-family="Arial" font-size="11" fill="#FFF" font-weight="700">Stockholm</text><text x="50" y="55" text-anchor="middle" font-family="Arial" font-size="11" fill="#FFF" font-weight="700">Uppsala</text><text x="50" y="75" text-anchor="middle" font-family="Arial" font-size="11" fill="#FFF" font-weight="700">↑ E4</text>`, '#0072CE') },
  { id:'F4', category:'vagvisning', nameSv:'Vägvisare', nameAr:'لوحة وجهة', descSv:'Pilformad skylt som pekar i riktningen mot en specifik destination.', descAr:'لوحة سهمية تشير في اتجاه وجهة معينة.',
    svg: '<img src="assets/signs/all/F4.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'F5', category:'vagvisning', nameSv:'Tabellorienteringstavla', nameAr:'جدول توجيه', descSv:'Visar val av väg och destinationer i tabellform med pilar och avstånd.', descAr:'لوحة جدولية تعرض الوجهات والمسافات والاتجاهات.',
    svg: '<img src="assets/signs/all/F5.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'F6', category:'vagvisning', nameSv:'Avståndstavla', nameAr:'لوحة مسافات', descSv:'Visar avståndet i kilometer till olika orter längs vägen.', descAr:'لوحة تعرض المسافة بالكيلومتر لمختلف المدن على الطريق.',
    svg: '<img src="assets/signs/all/F6.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'F7', category:'vagvisning', nameSv:'Ortnamn', nameAr:'اسم بلدة', descSv:'Anger namn på en ort.', descAr:'اسم القرية أو المدينة.',
    svg: '<img src="assets/signs/all/F7.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'F8', category:'vagvisning', nameSv:'Avfartsvisare', nameAr:'إشارة المخرج', descSv:'Anger avfart från motorväg.', descAr:'مخرج من الطريق السريع.',
    svg: '<img src="assets/signs/all/F8.png" style="width:100%; height:100%; object-fit:contain;" />' },

  // ========== 7) LOKALISERING — GÅNG OCH CYKEL ==========
  { id:'G1', category:'gangcykel', nameSv:'Vägvisare för gång- och cykeltrafik', nameAr:'لوحة توجيه للمشاة والدراجات', descSv:'Vägvisare för cyklister och fotgängare.', descAr:'توجيه للمشاة وراكبي الدراجات.',
    svg: '<img src="assets/signs/all/G1.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'G2', category:'gangcykel', nameSv:'Cykelled', nameAr:'طريق إرشادي للدراجات', descSv:'Anger en särskilt markerad led för cykeltrafik, ofta över längre sträckor.', descAr:'تشير إلى مسار محدد خصيصاً لحركة الدراجات الهوائية، وغالباً ما يمتد لمسافات طويلة.',
    svg: '<img src="assets/signs/all/G2.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'G3', category:'gangcykel', nameSv:'Cykelparkering', nameAr:'موقف دراجات', descSv:'Reserverad parkeringsplats för cyklar.', descAr:'موقف مخصص لركن الدراجات الهوائية.',
    svg: '<img src="assets/signs/all/G3.png" style="width:100%; height:100%; object-fit:contain;" />' },

  // ========== 8) ALLMÄNNA INRÄTTNINGAR ==========
  { id:'H1', category:'allmanna', nameSv:'Sjukhus', nameAr:'مستشفى', descSv:'Anger vägen till ett sjukhus som är öppet dygnet runt och har akutmottagning.', descAr:'تشير إلى الطريق المؤدي إلى مستشفى مفتوح على مدار الساعة ويحتوي على قسم للطوارئ.',
    svg: '<img src="assets/signs/all/H1.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'H2', category:'allmanna', nameSv:'Polisstation', nameAr:'مركز الشرطة', descSv:'Anger vägen till en polisstation som är öppen för allmänheten.', descAr:'تشير إلى الطريق المؤدي لمركز شرطة مفتوح لاستقبال الجمهور.',
    svg: '<img src="assets/signs/all/H2.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'H3', category:'allmanna', nameSv:'Kommunhus', nameAr:'مبنى البلدية', descSv:'Vägvisning till kommunens huvudbyggnad eller stadshus.', descAr:'يدل على الطريق إلى مبنى البلدية أو مكاتب الإدارة المحلية.',
    svg: '<img src="assets/signs/all/H3.png" style="width:100%; height:100%; object-fit:contain;" />' },

  // ========== 9) SERVICEANLÄGGNINGAR ==========
  { id:'S1', category:'service', nameSv:'Drivmedel', nameAr:'محطة وقود', descSv:'Plats för drivmedel (bensin, diesel, el-laddning).', descAr:'محطة وقود (بنزين/ديزل/شحن كهربائي).',
    svg: '<img src="assets/signs/all/S1.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'S2', category:'service', nameSv:'Vandrarhem', nameAr:'بيت شباب', descSv:'Anger vägen till en inrättning som erbjuder enklare och mer prisvärd övernattning.', descAr:'تشير إلى الطريق المؤدي إلى منشأة تقدم مبيتاً بسيطاً وبأسعار اقتصادية.',
    svg: '<img src="assets/signs/all/S2.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'S3', category:'service', nameSv:'Hotell', nameAr:'فندق', descSv:'Anger vägen till en inrättning som erbjuder logi med tillhörande service.', descAr:'تشير إلى الطريق المؤدي إلى منشأة تقدم الإقامة الفندقية والخدمات المرافقة لها.',
    svg: '<img src="assets/signs/all/S3.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'S4', category:'service', nameSv:'Restaurang', nameAr:'مطعم', descSv:'Anger vägen till en inrättning där mat och dryck serveras.', descAr:'تشير إلى الطريق المؤدي لمنشأة تقدم وتُقدم فيها المأكولات والمشروبات.',
    svg: '<img src="assets/signs/all/S4.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'S5', category:'service', nameSv:'Servering', nameAr:'مقهى', descSv:'Anger en plats med enklare servering av kaffe eller mat.', descAr:'تشير إلى مكان تتوفر فيه خدمة تقديم القهوة أو الوجبات الخفيفة.',
    svg: '<img src="assets/signs/all/S5.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'S6', category:'service', nameSv:'Toalett', nameAr:'مرافق صحية', descSv:'Anger plats för offentlig toalett.', descAr:'موقع مرحاض عمومي للاستخدام.',
    svg: '<img src="assets/signs/all/S6.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'S7', category:'service', nameSv:'Information', nameAr:'معلومات', descSv:'Plats för turistinformation om sevärdheter och tjänster i området.', descAr:'مركز معلومات سياحية عن المنطقة وأماكنها.',
    svg: '<img src="assets/signs/all/S7.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'S8', category:'service', nameSv:'Verkstad', nameAr:'ورشة سيارات', descSv:'Plats för bilverkstad där fordon kan repareras eller servas.', descAr:'مكان تصليح وصيانة السيارات.',
    svg: '<img src="assets/signs/all/S8.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'S9', category:'service', nameSv:'Telefon', nameAr:'هاتف', descSv:'Anger plats för telefon, ofta nödtelefon längs motorvägen.', descAr:'موقع هاتف عمومي أو هاتف طوارئ.',
    svg: '<img src="assets/signs/all/S9.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'S10', category:'service', nameSv:'Första hjälpen', nameAr:'إسعافات أولية', descSv:'Anger plats för första hjälpen-utrustning eller akutvård.', descAr:'تشير إلى موقع لتقديم الإسعافات الأولية أو الرعاية الطارئة.',
    svg: '<img src="assets/signs/all/S10.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'S11', category:'service', nameSv:'Brandsläckare', nameAr:'طفاية حريق', descSv:'Anger plats för brandsläckare, vanligen i tunnlar och rastplatser.', descAr:'تشير إلى موقع طفاية حريق، تُوضع عادة في الأنفاق ومحطات الاستراحة.',
    svg: '<img src="assets/signs/all/S11.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'S12', category:'service', nameSv:'Rastplats', nameAr:'منطقة استراحة', descSv:'Plats för paus med bord, bänkar och ofta toaletter.', descAr:'منطقة للتوقف والاستراحة، تحتوي عادة على مقاعد وطاولات ودورات مياه.',
    svg: '<img src="assets/signs/all/S12.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'S13', category:'service', nameSv:'Stuga', nameAr:'كوخ/مبيت', descSv:'Plats för stuga eller mindre logi för uthyrning.', descAr:'كوخ صغير أو منزل ريفي للإقامة المؤقتة.',
    svg: '<img src="assets/signs/all/S13.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'S14', category:'service', nameSv:'Tältplats', nameAr:'منطقة خيام', descSv:'Plats avsedd för tältning.', descAr:'منطقة مخصصة لنصب الخيام والمبيت.',
    svg: SQ(`<polygon points="50,25 25,75 75,75" fill="#000"/><line x1="50" y1="25" x2="50" y2="75" stroke="#FFF" stroke-width="2"/>`) },
  { id:'S15', category:'service', nameSv:'Husvagnsplats', nameAr:'موقف كرفانات', descSv:'Plats avsedd för husvagn eller husbil.', descAr:'موقف مخصص للكرافانات والبيوت المتنقلة.',
    svg: SQ(`<rect x="20" y="45" width="55" height="20" fill="#000"/><circle cx="32" cy="68" r="4" fill="#000"/><circle cx="60" cy="68" r="4" fill="#000"/><rect x="75" y="55" width="8" height="3" fill="#000"/>`) },

  // ========== 10) TURIST ==========
  { id:'T1', category:'turist', nameSv:'Sevärdhet', nameAr:'معلم سياحي', descSv:'Anger vägen till en plats eller anläggning av särskilt intresse för turister.', descAr:'تشير إلى الطريق المؤدي لمعلم سياحي أو منشأة ذات أهمية خاصة للزوار.',
    svg: '<img src="assets/signs/all/T1.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'T2', category:'turist', nameSv:'Världsarv', nameAr:'موقع تراث عالمي', descSv:'Anger en plats som bedömts ha ett oersättligt kultur- eller naturvärde internationellt.', descAr:'تشير إلى موقع مصنف عالمياً لأهميته الثقافية أو الطبيعية الاستثنائية التي لا تعوض.',
    svg: '<img src="assets/signs/all/T2.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'T3', category:'turist', nameSv:'Slott', nameAr:'قلعة', descSv:'Anger vägen till en historisk fästning eller byggnad som är av intresse för besökare.', descAr:'تشير إلى الطريق المؤدي لقلعة أو مبنى تاريخي يمثل محطة اهتمام للزوار.',
    svg: '<img src="assets/signs/all/T3.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'T4', category:'turist', nameSv:'Kyrka', nameAr:'كنيسة', descSv:'Anger vägen till en religiös byggnad av särskilt kulturhistoriskt intresse.', descAr:'تشير إلى الطريق المؤدي لمبنى ديني ذي أهمية ثقافية وتاريخية خاصة.',
    svg: '<img src="assets/signs/all/T4.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'T5', category:'turist', nameSv:'Naturreservat', nameAr:'محمية طبيعية', descSv:'Anger vägen till ett naturskyddsområde med särskilda regler för att bevara miljö och natur.', descAr:'تشير إلى الطريق المؤدي لمحمية طبيعية تطبق فيها قواعد خاصة للحفاظ على البيئة والطبيعة.',
    svg: '<img src="assets/signs/all/T5.png" style="width:100%; height:100%; object-fit:contain;" />' },

  // ========== 11) UPPLYSNINGSMÄRKEN ==========
  { id:'I1', category:'upplysning', nameSv:'Plats för P-biljett', nameAr:'مكان لتذكرة الانتظار', descSv:'Plats med biljettautomat för köp av parkeringsbiljett.', descAr:'مكان فيه آلة لشراء تذكرة الانتظار قبل ركن السيارة.',
    svg: '<img src="assets/signs/all/I1.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'I2', category:'upplysning', nameSv:'Bro', nameAr:'جسر', descSv:'Informerar om namnet på den bro som vägen passerar över.', descAr:'تُعلم السائق باسم الجسر الذي سيمر الطريق من فوقه.',
    svg: '<img src="assets/signs/all/I2.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'I3', category:'upplysning', nameSv:'Tunnel', nameAr:'نفق', descSv:'Informerar om namnet på den tunnel som vägen leder in i.', descAr:'تُعلم السائق باسم النفق الذي سيقود الطريق إليه.',
    svg: '<img src="assets/signs/all/I3.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'I4', category:'upplysning', nameSv:'Riktning till nödutgång', nameAr:'اتجاه مخرج طوارئ', descSv:'Visar riktningen mot närmaste nödutgång inne i tunnel eller annat slutet utrymme.', descAr:'يدل على اتجاه أقرب مخرج طوارئ، خاصة داخل الأنفاق.',
    svg: '<img src="assets/signs/all/I4.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'I5', category:'upplysning', nameSv:'Övergångsställe', nameAr:'معبر مشاة', descSv:'Markerar plats där fotgängare har företräde att korsa vägen.', descAr:'تحدد موقع عبور المشاة، حيث تكون الأولوية لهم لقطع الطريق.',
    svg: A(`<rect x="20" y="60" width="60" height="20" fill="#FFF"/><line x1="30" y1="60" x2="30" y2="80" stroke="#0072CE" stroke-width="3"/><line x1="42" y1="60" x2="42" y2="80" stroke="#0072CE" stroke-width="3"/><line x1="54" y1="60" x2="54" y2="80" stroke="#0072CE" stroke-width="3"/><line x1="66" y1="60" x2="66" y2="80" stroke="#0072CE" stroke-width="3"/>${personIcon('#FFF', 50, 40, 0.9)}`, '#0072CE') },
  { id:'I6', category:'upplysning', nameSv:'Parkering', nameAr:'موقف انتظار', descSv:'Anger en yta som är särskilt avsedd för parkering av fordon.', descAr:'تشير إلى مساحة مخصصة خصيصاً لركن السيارات والمركبات.',
    svg: A(`${txt('P', { y: 70, size: 56, color:'#FFF' })}`, '#0072CE') },
  { id:'I7', category:'upplysning', nameSv:'Infartsparkering', nameAr:'موقف Park & Ride', descSv:'Pendlarparkering med koppling till kollektivtrafik (Park & Ride).', descAr:'موقف للسيارات بجانب محطة مواصلات عامة (Park & Ride).',
    svg: A(`${txt('P', { y: 50, size: 28, color:'#FFF' })}<text x="50" y="75" text-anchor="middle" font-family="Arial" font-size="9" fill="#FFF">+ tåg</text>`, '#0072CE') },
  { id:'I8', category:'upplysning', nameSv:'Lokal slinga', nameAr:'دائرة محلية', descSv:'Märker ut en lokal resväg för turister eller besökare som går tillbaka till startpunkten.', descAr:'تشير إلى مسار أو جولة محلية مخصصة للسياح والزوار تعود إلى نفس نقطة الانطلاق.',
    svg: A(`<circle cx="50" cy="50" r="25" fill="none" stroke="#FFF" stroke-width="3"/><path d="M 70 35 L 75 30 L 70 40" stroke="#FFF" stroke-width="3" fill="none"/>`, '#0072CE') },
  { id:'I9', category:'upplysning', nameSv:'Stopp för fordon i linjetrafik', nameAr:'موقف باص', descSv:'Plats där bussar i linjetrafik stannar för att släppa av och plocka upp passagerare.', descAr:'موقف لحافلات النقل العام لإنزال وتحميل الركاب.',
    svg: A(`${txt('🚌', { y: 65, size: 28 })}`, '#0072CE') },
  { id:'I10', category:'upplysning', nameSv:'Stopp för spårvagn', nameAr:'موقف ترام', descSv:'Plats där spårvagnar stannar för att släppa av och plocka upp passagerare.', descAr:'محطة لتوقف الترام لإنزال وتحميل الركاب.',
    svg: A(`${txt('🚊', { y: 65, size: 28 })}`, '#0072CE') },
  { id:'I11', category:'upplysning', nameSv:'Stopp för skolskjuts', nameAr:'موقف حافلة المدرسة', descSv:'Hållplats där skolbussen tar upp och släpper av elever.', descAr:'مكان مخصص لتوقف حافلة المدرسة لإنزال الأطفال أو تحميلهم.',
    svg: A(`<rect x="25" y="40" width="50" height="25" fill="#FFC700"/>${txt('SKOL', { y: 78, size: 9, color:'#FFF' })}<circle cx="35" cy="68" r="3" fill="#000"/><circle cx="65" cy="68" r="3" fill="#000"/>`, '#0072CE') },
  { id:'I12', category:'upplysning', nameSv:'Taxi', nameAr:'تاكسي', descSv:'Anger en uppställningsplats som är reserverad exklusivt för taxitrafik.', descAr:'تشير إلى موقف سيارات محجوز حصرياً لسيارات الأجرة (التاكسي).',
    svg: A(`${txt('TAXI', { y: 60, size: 18, color:'#FFC700' })}`, '#000') },
  { id:'I13', category:'upplysning', nameSv:'Plats reserverad för visst fordonsslag', nameAr:'مخصص لنوع مركبة محدد', descSv:'Plats reserverad för en viss typ av fordon, anges på tilläggstavla.', descAr:'مكان محجوز لنوع محدد من المركبات يُذكر في لوحة فرعية.',
    svg: A(`${txt('P', { y: 55, size: 26, color:'#FFF' })}${carIcon('#FFF', 50, 75, 0.5)}`, '#0072CE') },

  // ========== 12) VÄGMARKERINGAR ==========
  { id:'M1', category:'vagmark', nameSv:'Mittlinje', nameAr:'خط منتصف الطريق', descSv:'Streckad linje i mitten av vägen.', descAr:'خط متقطع في منتصف الطريق.',
    svg: '<img src="assets/signs/all/M1.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'M2', category:'vagmark', nameSv:'Heldragen linje', nameAr:'خط متصل', descSv:'Heldragen vit linje som inte får korsas eller överskridas.', descAr:'خط أبيض متصل لا يجوز تجاوزه أو عبوره.',
    svg: '<img src="assets/signs/all/M2.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'M3', category:'vagmark', nameSv:'Kantlinje', nameAr:'خط حافة الطريق', descSv:'Linje som markerar vägbanans yttre kant.', descAr:'خط يحدد حافة الطريق الخارجية.',
    svg: '<img src="assets/signs/all/M3.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'M4', category:'vagmark', nameSv:'Stopplinje', nameAr:'خط التوقف', descSv:'Linje där fordon ska stanna.', descAr:'خط يجب التوقف عنده.',
    svg: '<img src="assets/signs/all/M4.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'M5', category:'vagmark', nameSv:'Övergångsställe', nameAr:'معبر مشاة (خطوط على الأرض)', descSv:'Vägmarkering med vita ränder som markerar plats för fotgängare att korsa vägen.', descAr:'علامات معبر المشاة المرسومة على الأرض (Zebra crossing).',
    svg: '<img src="assets/signs/all/M5.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'M6', category:'vagmark', nameSv:'Cykelöverfart', nameAr:'معبر دراجات (خطوط على الأرض)', descSv:'Vägmarkering på vägbanan som markerar plats där cyklister kan korsa vägen.', descAr:'علامات معبر الدراجات المرسومة على سطح الطريق.',
    svg: '<img src="assets/signs/all/M6.png" style="width:100%; height:100%; object-fit:contain;" />' },

  // ========== 13) POLISMAN ==========
  { id:'PO1', category:'polis', nameSv:'Stoppsignal från polis', nameAr:'إشارة وقوف من الشرطي', descSv:'Polismannen höjer armen, alla fordon måste stanna.', descAr:'الشرطي يرفع يده، على كل المركبات التوقف فوراً.',
    svg: SQ(`${personIcon('#000', 50, 50, 1.4)}<line x1="50" y1="36" x2="50" y2="20" stroke="#000" stroke-width="4"/>`) },
  { id:'PO2', category:'polis', nameSv:'Klartecken från polis', nameAr:'إشارة بالمرور', descSv:'Polismannen vinkar fram trafiken, du får passera.', descAr:'الشرطي يلوّح بيده مشيراً بالمرور والمواصلة.',
    svg: SQ(`${personIcon('#000', 50, 55, 1.3)}<path d="M 60 45 L 80 35" stroke="#000" stroke-width="4"/>`) },

  // ========== 14) SYMBOLER ==========
  { id:'SY1', category:'symboler', nameSv:'Symbol — personbil', nameAr:'رمز — سيارة', descSv:'Symbol som representerar personbil på vägmärken eller tilläggstavlor.', descAr:'رمز يمثل سيارة الركاب الخاصة على لوحات المرور واللوحات التكميلية.',
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
  { id:'TT1', category:'tillagg', nameSv:'Avstånd', nameAr:'مسافة', descSv:'Anger avståndet fram till den plats där huvudmärkets regel eller varning börjar gälla.', descAr:'تشير إلى المسافة المتبقية حتى النقطة التي يبدأ فيها تطبيق القاعدة أو التحذير الموجود في العلامة الرئيسية.',
    svg: SQ(`${txt('200 m', { y: 60, size: 22 })}`) },
  { id:'TT2', category:'tillagg', nameSv:'Sträckans längd', nameAr:'طول المسافة', descSv:'Hur långt företeelsen sträcker sig.', descAr:'يشير إلى امتداد المسافة التي تسري عليها أو تستمر فيها قاعدة العلامة الرئيسية.',
    svg: SQ(`<text x="50" y="55" text-anchor="middle" font-family="Arial" font-size="20" font-weight="700">2 km</text><path d="M 25 70 L 75 70 M 25 65 L 25 75 M 75 65 L 75 75" stroke="#000" stroke-width="3"/>`) },
  { id:'TT3', category:'tillagg', nameSv:'Tidsangivelse', nameAr:'وقت السريان', descSv:'Tider när märket gäller.', descAr:'يوضح الأوقات الزمنية التي تكون فيها العلامة الرئيسية سارية المفعول.',
    svg: SQ(`<text x="50" y="50" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700">8-17</text><text x="50" y="72" text-anchor="middle" font-family="Arial" font-size="13">(8-13)</text>`) },
  { id:'TT4', category:'tillagg', nameSv:'Riktning', nameAr:'اتجاه', descSv:'Tilläggspil som visar i vilken riktning huvudmärket gäller.', descAr:'سهم فرعي يوضح الاتجاه الذي تسري عليه العلامة الرئيسية.',
    svg: SQ(`<path d="M 30 50 L 70 50 M 65 45 L 70 50 L 65 55" stroke="#000" stroke-width="5" fill="none"/>`) },
  { id:'TT5', category:'tillagg', nameSv:'Fordonsslag', nameAr:'نوع المركبة', descSv:'Anger vilket fordonsslag märket gäller.', descAr:'يحدد نوع المركبة (كالسيارة أو الشاحنة) التي تنطبق عليها العلامة الرئيسية.',
    svg: SQ(`${carIcon('#000', 50, 55, 1.2)}`) },
  { id:'TT6', category:'tillagg', nameSv:'Utsträckning av parkering', nameAr:'امتداد الوقوف', descSv:'Anger var parkeringen börjar/slutar.', descAr:'بداية أو نهاية مكان الوقوف.',
    svg: SQ(`<path d="M 25 50 L 75 50 M 25 45 L 25 55 M 75 45 L 75 55" stroke="#000" stroke-width="4"/>`) },

  // ========== 16) TRAFIKSIGNALER ==========
  { id:'TS1', category:'trafiksignal', nameSv:'Trafiksignal — rött ljus', nameAr:'إشارة حمراء', descSv:'Rött ljus betyder stopp, vänta tills grönt ljus visas.', descAr:'الضوء الأحمر: يجب التوقف التام والانتظار حتى يظهر الضوء الأخضر.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="10" width="30" height="80" rx="4" fill="#222"/><circle cx="50" cy="28" r="10" fill="#C8102E"/><circle cx="50" cy="50" r="10" fill="#444"/><circle cx="50" cy="72" r="10" fill="#444"/></svg>` },
  { id:'TS2', category:'trafiksignal', nameSv:'Trafiksignal — gult ljus', nameAr:'إشارة صفراء', descSv:'Gult ljus, stanna om du säkert kan, annars passera försiktigt.', descAr:'الضوء الأصفر: توقف إذا كان بإمكانك ذلك بأمان، فهو يشير لقرب تحول الإشارة للأحمر.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="10" width="30" height="80" rx="4" fill="#222"/><circle cx="50" cy="28" r="10" fill="#444"/><circle cx="50" cy="50" r="10" fill="#FFC700"/><circle cx="50" cy="72" r="10" fill="#444"/></svg>` },
  { id:'TS3', category:'trafiksignal', nameSv:'Trafiksignal — grönt ljus', nameAr:'إشارة خضراء', descSv:'Grönt ljus betyder fri väg, kör om vägen är klar.', descAr:'الضوء الأخضر: يُسمح بالمرور شريطة أن يكون الطريق سالكاً.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="10" width="30" height="80" rx="4" fill="#222"/><circle cx="50" cy="28" r="10" fill="#444"/><circle cx="50" cy="50" r="10" fill="#444"/><circle cx="50" cy="72" r="10" fill="#1B5E20"/></svg>` },
  { id:'TS4', category:'trafiksignal', nameSv:'Gångsignal — röd', nameAr:'إشارة المشاة الحمراء', descSv:'Röd gångfigur, fotgängare ska vänta.', descAr:'إشارة حمراء للمشاة: يجب على المشاة الانتظار وعدم عبور الطريق.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="10" width="60" height="80" rx="4" fill="#222"/>${personIcon('#C8102E', 50, 50, 1.5)}</svg>` },
  { id:'TS5', category:'trafiksignal', nameSv:'Gångsignal — grön', nameAr:'إشارة المشاة الخضراء', descSv:'Grön gångfigur, fotgängare får korsa vägen.', descAr:'إشارة خضراء للمشاة: يُسمح للمشاة بعبور الطريق.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="10" width="60" height="80" rx="4" fill="#222"/>${personIcon('#1B5E20', 50, 50, 1.5)}</svg>` },

  // ========== 17) VAKT ==========
  { id:'V1', category:'vakt', nameSv:'Vägarbetsvakt — stopp', nameAr:'حارس أعمال طريق — قف', descSv:'Vägarbetsvakten håller upp en röd skylt, du måste stanna.', descAr:'حارس أعمال الطريق يرفع لافتة حمراء، عليك التوقف.',
    svg: '<img src="assets/signs/all/V1.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'V2', category:'vakt', nameSv:'Vägarbetsvakt — kör', nameAr:'حارس — مر', descSv:'Vägarbetsvakten visar grön skylt, du får köra vidare.', descAr:'حارس أعمال الطريق يرفع لافتة خضراء، يُسمح بالمرور.',
    svg: '<img src="assets/signs/all/V2.png" style="width:100%; height:100%; object-fit:contain;" />' },

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
    svg: '<img src="assets/signs/all/J2.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'J3', category:'jarnvag', nameSv:'Avståndsmärken till järnväg', nameAr:'علامات اقتراب من السكة', descSv:'Visar avståndet till järnvägskorsningen.', descAr:'تشير لمسافة الاقتراب من المعبر.',
    svg: '<img src="assets/signs/all/J3.png" style="width:100%; height:100%; object-fit:contain;" />' },
  { id:'J4', category:'jarnvag', nameSv:'Ljus- och ljudsignal vid järnväg', nameAr:'إشارة ضوئية وصوتية للسكة', descSv:'Blinkande röda lampor — stopp.', descAr:'مصابيح حمراء وامضة — قف.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="35" width="20" height="35" fill="#222"/><circle cx="35" cy="50" r="9" fill="#C8102E"/><circle cx="65" cy="50" r="9" fill="#C8102E"/><rect x="48" y="70" width="4" height="20" fill="#000"/></svg>` },
];

if (typeof module !== 'undefined') module.exports = { CATEGORIES, SIGNS };
