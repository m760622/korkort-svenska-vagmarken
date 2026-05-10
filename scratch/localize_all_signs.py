
import json
import os

# Helper to format for JS
def IMG(id):
    return f"IMG('assets/signs/{id}.png')"

# Comprehensive Data for all categories
SIGNS_DATA = {
    "A": [
        {"id":"A1-1", "nameSv":"Farlig kurva (höger)", "descSv":"Märket anger en farlig kurva. Symbolen är anpassad efter förhållandena på platsen.", "nameAr":"تحذير من منعطف خطير (يمين)", "descAr":"تشير الشاخصة إلى وجود منعطف خطر نحو اليمين. يتم تكييف الرمز حسب ظروف الموقع."},
        {"id":"A1-2", "nameSv":"Farlig kurva (vänster)", "descSv":"Märket anger en farlig kurva. Symbolen är anpassad efter förhållandena på platsen.", "nameAr":"تحذير من منعطف خطير (يسار)", "descAr":"تشير الشاخصة إلى وجود منعطف خطر نحو اليسار. يتم تكييف الرمز حسب ظروف الموقع."},
        {"id":"A2-1", "nameSv":"Flera farliga kurvor (första höger)", "descSv":"Märket anger en serie av fler än två farliga kurvor. Symbolen är anpassad efter förhållandena på platsen.", "nameAr":"عدة منعطفات خطيرة (الأول لليمين)", "descAr":"تشير الشاخصة إلى وجود سلسلة من أكثر من منعطفين خطرين، يبدأ الأول منها نحو اليمين."},
        {"id":"A2-2", "nameSv":"Flera farliga kurvor (första vänster)", "descSv":"Märket anger en serie av fler än två farliga kurvor. Symbolen är anpassad efter förhållandena på platsen.", "nameAr":"عدة منعطفات خطيرة (الأول لليسار)", "descAr":"تشير الشاخصة إلى وجود سلسلة من أكثر من منعطفين خطرين، يبدأ الأول منها نحو اليسار."},
        {"id":"A3", "nameSv":"Brant backe (nedförslut)", "descSv":"Märket anger en brant nedförslutning. Siffran anger lutningen i procent.", "nameAr":"منحدر حاد", "descAr":"تحذير من وجود منحدر حاد أمامك. الرقم يوضح نسبة الميل بالمئة."},
        {"id":"A4", "nameSv":"Brant backe (stigning)", "descSv":"Märket anger en brant stigning. Siffran anger lutningen i procent.", "nameAr":"مرتفع حاد", "descAr":"تحذير من وجود مرتفع حاد أمامك. الرقم يوضح نسبة الميل بالمئة."},
        {"id":"A5-1", "nameSv":"Avsmalnande väg (båda sidor)", "descSv":"Märket anger att vägen eller körbanan smalnar av.", "nameAr":"طريق يضيق من الجانبين", "descAr":"تحذير من أن الطريق سيصبح أضيق من كلا الجانبين."},
        {"id":"A6", "nameSv":"Öppningsbar bro", "descSv":"Märket anger en öppningsbar bro.", "nameAr":"جسر قابل للفتح", "descAr":"تحذير من وجود جسر يمكن فتحه (جسر متحرك)."},
        {"id":"A8", "nameSv":"Ojämn väg", "descSv":"Märket anger att vägen är ojämn och att det kan vara lämpligt att sänka hastigheten.", "nameAr":"طريق غير مستوٍ", "descAr":"تحذير من وجود نتوءات أو حفر في الطريق؛ يُنصح بتخفيف السرعة."},
        {"id":"A9", "nameSv":"Vägbula", "descSv":"Märket anger en vägbula eller liknande farthinder som anlagts som en fartdämpande åtgärd.", "nameAr":"مطب صناعي", "descAr":"تحذير من وجود مطب صناعي أو عائق لتخفيف السرعة تم إنشاؤه لهذا الغرض."},
        {"id":"A10", "nameSv":"Slirig väg", "descSv":"Märket anger att vägen kan vara slirig.", "nameAr":"طريق زلق", "descAr":"تحذير من أن سطح الطريق قد يكون زلقاً؛ يستخدم خاصة عند وجود خطر الانزلاق."},
        {"id":"A13", "nameSv":"Övergångsställe", "descSv":"Märket anger ett övergångsställe där gående kan korsa vägen.", "nameAr":"معبر مشاة", "descAr":"تحذير من وجود معبر مشاة أمامك."},
        {"id":"A15", "nameSv":"Barn", "descSv":"Märket anger en vägsträcka där barn ofta vistas eller korsar vägen.", "nameAr":"أطفال", "descAr":"تحذير من احتمال وجود أطفال يعبرون الطريق أو يتواجدون قربه."},
        {"id":"A19-1", "nameSv":"Älgar", "descSv":"Märket anger risk för älgar på vägen.", "nameAr":"حيوان الأيل (Elk)", "descAr":"تحذير من خطر وجود حيوانات الأيل على الطريق."},
        {"id":"A20", "nameSv":"Vägarbete", "descSv":"Vägarbete pågår.", "nameAr":"أعمال الطريق", "descAr":"تحذير من وجود أعمال إصلاح أو صيانة على الطريق."},
        {"id":"A25", "nameSv":"Möte", "descSv":"Märket anger att trafiken på vägen sker i båda riktningarna.", "nameAr":"سير في الاتجاهين", "descAr":"تحذير من أن الطريق سيصبح ذو اتجاهين بعد أن كان اتجاه واحد."},
        {"id":"A30", "nameSv":"Cirkulationsplats", "descSv":"Märket anger en cirkulationsplats.", "nameAr":"دوار", "descAr":"تحذير من الاقتراب من دوار مروري."},
        {"id":"A40", "nameSv":"Annan fara", "descSv":"Märket anger annan fara än sådan som kan anges med något annat varningsmärke.", "nameAr":"خطر آخر", "descAr":"تحذير من وجود خطر غير محدد بالعلامات الأخرى. يجب الانتباه."},
    ],
    "B": [
        {"id":"B1", "nameSv":"Väjningsplikt", "descSv":"Lämna företräde. Märket anger att förare har väjningsplikt mot fordon på korsande väg.", "nameAr":"إفساح الطريق", "descAr":"أنت ملزم بإفساح الطريق لحركة المرور على الطريق المتقاطع."},
        {"id":"B2", "nameSv":"Stopplikt", "descSv":"Stanna vid stopplinjen. Märket anger att förare har stopplikt före infart på korsande väg.", "nameAr":"قف", "descAr":"الوقوف الإلزامي التام عند خط التوقف قبل دخول الطريق المتقاطع."},
        {"id":"B3", "nameSv":"Huvudled", "descSv":"Du kör på huvudled.", "nameAr":"طريق رئيسي", "descAr":"أنت تسير على طريق رئيسي."},
        {"id":"B5", "nameSv":"Väjningsplikt mot mötande", "descSv":"Du ska väja för mötande.", "nameAr":"أولوية المقابل", "descAr":"يجب عليك إفساح الطريق لحركة المرور القادمة من الاتجاه المعاكس."},
        {"id":"B6", "nameSv":"Mötande har väjningsplikt", "descSv":"Mötande ska väja för dig.", "nameAr":"أولويتك تجاه المقابل", "descAr":"حركة المرور القادمة من الاتجاه المعاكس ملزمة بإفساح الطريق لك."},
        {"id":"B8", "nameSv":"Cykelöverfart", "descSv":"Märket anger en cykelöverfart.", "nameAr":"معبر دراجات", "descAr":"يشير إلى معبر مخصص للدراجات الهوائية حيث تلتزم السيارات بإفساح الطريق."},
    ],
    "C": [
        {"id":"C1", "nameSv":"Förbud mot infart", "descSv":"Ingen infart.", "nameAr":"ممنوع الدخول", "descAr":"يُمنع دخول جميع المركبات في هذا الاتجاه."},
        {"id":"C2", "nameSv":"Förbud mot trafik med fordon", "descSv":"All fordonstrafik förbjuden.", "nameAr":"ممنوع مرور المركبات", "descAr":"يُمنع مرور جميع أنواع المركبات في هذا الاتجاه."},
        {"id":"C3", "nameSv":"Förbud mot motordrivet fordon", "descSv":"Ej motordrivna fordon.", "nameAr":"ممنوع المركبات ذات المحركات", "descAr":"يُمنع مرور جميع المركبات التي تعمل بمحرك باستثناء الموبيد من الفئة الثانية."},
        {"id":"C7", "nameSv":"Förbud mot trafik med tung lastbil", "descSv":"Tunga lastbilar förbjudna.", "nameAr":"ممنوع الشاحنات الثقيلة", "descAr":"يُمنع مرور الشاحنات التي يتجاوز وزنها الإجمالي 3.5 طن."},
        {"id":"C16", "nameSv":"Begränsad fordonsbredd", "descSv":"Förbud mot trafik med fordon över viss bredd.", "nameAr":"عرض محدود", "descAr":"يُمنع مرور المركبات التي يتجاوز عرضها الرقم المذكور."},
        {"id":"C17", "nameSv":"Begränsad fordonshöjd", "descSv":"Förbud mot trafik med fordon över viss höjd.", "nameAr":"ارتفاع محدود", "descAr":"يُمنع مرور المركبات التي يتجاوز ارتفاعها الرقم المذكور."},
        {"id":"C25", "nameSv":"Förbud mot sväng i korsning", "descSv":"Ej svänga.", "nameAr":"ممنوع الانعطاف", "descAr":"يُمنع الانعطاف في الاتجاه الموضح في التقاطع."},
        {"id":"C27", "nameSv":"Förbud mot omkörning", "descSv":"Förbjudet att köra om.", "nameAr":"ممنوع التجاوز", "descAr":"يُمنع تجاوز المركبات ذات المحركات الأخرى باستثناء الموبيد والدراجات النارية بدون عربة."},
        {"id":"C31", "nameSv":"Hastighetsbegränsning", "descSv":"Maximal hastighet.", "nameAr":"السرعة القصوى", "descAr":"يُمنع قيادة المركبة بسرعة أعلى من السرعة المحددة على الشاخصة."},
        {"id":"C35", "nameSv":"Förbud mot att parkera fordon", "descSv":"Parkering förbjuden.", "nameAr":"ممنوع الوقوف", "descAr":"يُمنع ركن السيارة على جانب الطريق الذي وضعت فيه الشاخصة."},
        {"id":"C39", "nameSv":"Förbud mot att stanna och parkera", "descSv":"Stoppförbud.", "nameAr":"ممنوع التوقف والوقوف", "descAr":"يُمنع التوقف أو ركن السيارة تماماً لأي سبب كان."},
    ],
    "D": [
        {"id":"D1-1", "nameSv":"Påbjuden körriktning (rakt fram)", "descSv":"Kör rakt fram.", "nameAr":"اتجاه إلزامي للأمام", "descAr":"يجب عليك السير في الاتجاه المستقيم فقط."},
        {"id":"D2-1", "nameSv":"Påbjuden körbana (höger)", "descSv":"Håll till höger.", "nameAr":"إلزام اليمين", "descAr":"يجب عليك البقاء على الجانب الأيمن من العلامة."},
        {"id":"D3", "nameSv":"Cirkulationsplats", "descSv":"Kör i cirkulationsplats.", "nameAr":"دوار إلزامي", "descAr":"يجب عليك السير في اتجاه الدوار الموضح."},
    ],
    "E": [
        {"id":"E1", "nameSv":"Motorväg", "descSv":"Motorväg börjar.", "nameAr":"طريق سريع", "descAr":"بداية الطريق السريع."},
        {"id":"E7", "nameSv":"Gågata", "descSv":"Fordon på gåendes villkor.", "nameAr":"شارع مشاة", "descAr":"منطقة مخصصة للمشاة، ويجب على المركبات السير بسرعة المشي وإفساح الطريق."},
        {"id":"E9", "nameSv":"Gångfartsområde", "descSv":"Max gångfart.", "nameAr":"منطقة سكنية (سرعة المشي)", "descAr":"منطقة يجب أن تسير فيها المركبات بسرعة المشي القصوى (حوالي 7 كم/س)."},
        {"id":"E11", "nameSv":"Rekommenderad lägre hastighet", "descSv":"Kör saktare.", "nameAr":"سرعة منخفضة موصى بها", "descAr":"يُنصح بالقيادة بسرعة أقل من المعتاد بسبب ظروف الطريق."},
        {"id":"E19", "nameSv":"Parkering", "descSv":"Parkering tillåten.", "nameAr":"موقف سيارات", "descAr":"يُسمح بركن السيارات في هذا المكان."},
    ],
    "M": [
        {"id":"M1", "nameSv":"Mittlinje", "descSv":"Skiljer körfält åt.", "nameAr":"خط الوسط", "descAr":"يفصل بين مسارات السير في اتجاهات متعاكسة."},
        {"id":"M8", "nameSv":"Heldragen linje", "descSv":"Får ej överskridas.", "nameAr":"خط متصل", "descAr":"يُمنع تجاوز هذا الخط أو القيادة فوقه."},
        {"id":"M13", "nameSv":"Stopplinje", "descSv":"Stanna här.", "nameAr":"خط التوقف", "descAr":"المكان الذي يجب أن تتوقف عنده تماماً عند وجود إشارة قف أو ضوء أحمر."},
        {"id":"M14", "nameSv":"Väjningslinje", "descSv":"Lämna företräde här.", "nameAr":"خط إفساح الطريق", "descAr":"الخط الذي يجب الوقوف خلفه عند إفساح الطريق للمركبات الأخرى."},
        {"id":"M15", "nameSv":"Övergångsställe", "descSv":"Markering för gående.", "nameAr":"تخطيط معبر مشاة", "descAr":"علامات أرضية تحدد معبر المشاة."},
    ],
    "T": [
        {"id":"T1", "nameSv":"Vägsträckans längd", "descSv":"Anger längd.", "nameAr":"طول المسافة", "descAr":"توضح طول المسافة التي تسري عليها الشاخصة."},
        {"id":"T13", "nameSv":"Flervägsväjning", "descSv":"Väjningsplikt från alla håll.", "nameAr":"إفساح طريق رباعي", "descAr":"تنبيه بأن جميع الأطراف في التقاطع ملزمون بإفساح الطريق لبعضهم."},
    ],
    "X": [
        {"id":"X1", "nameSv":"Markeringspil", "descSv":"Anordningen används för att markera en kurva, en plats där en väg slutar eller en plats där trafiken i övrigt kan behöva vägledning.", "nameAr":"سهم توجيه", "descAr":"تُستخدم هذه الأداة لتحديد منعطف، أو مكان ينتهي فيه الطريق، أو لتوجيه المرور."},
        {"id":"X10", "nameSv":"Stolpmarkeringsanordning", "descSv":"Anordningen används för att det ska vara lättare att upptäcka ett vägmärke. Den har samma färgsättning som märket ovanför.", "nameAr":"أداة تحديد الأعمدة", "descAr":"تُستخدم لتسهيل رؤية الشاخصة المرورية، وتأخذ نفس ألوان الشاخصة التي توضع تحتها."},
    ]
}

# Full Category mapping
CAT_MAP = {
    "A": "varning", "B": "vajning", "C": "forbud", "D": "pabud",
    "E": "anvisning", "F": "vagvisning", "G": "allmanna", "H": "service",
    "I": "turist", "J": "upplysning", "M": "vagmark", "S": "symboler",
    "T": "tillagg", "SIG": "signaler", "X": "andra", "Y": "jarnvag"
}

# Construct the JS string
output = "// Svenska Vägmärken — بيانات علامات الطرق السويدية\n// المصدر: transportstyrelsen.se\n\n"
output += "const IMG = (url) => `<img src=\"${url}\" style=\"width:100%; height:100%; object-fit:contain;\" loading=\"lazy\">`;\n\n"

output += "const CATEGORIES = " + json.dumps([
    {"key": "varning", "nameSv": "Varningsmärken", "nameAr": "علامات التحذير", "color": "#FFC700", "icon": "⚠️"},
    {"key": "vajning", "nameSv": "Väjningspliktsmärken", "nameAr": "علامات الأولوية", "color": "#E63946", "icon": "🛑"},
    {"key": "forbud", "nameSv": "Förbudsmärken", "nameAr": "علامات الحظر", "color": "#C8102E", "icon": "🚫"},
    {"key": "pabud", "nameSv": "Påbudsmärken", "nameAr": "علامات الإلزام", "color": "#003F87", "icon": "⬆️"},
    {"key": "anvisning", "nameSv": "Anvisningsmärken", "nameAr": "علامات الإرشاد", "color": "#0072CE", "icon": "🅿️"},
    {"key": "vagvisning", "nameSv": "Lokaliseringsmärken för vägvisning", "nameAr": "لافتات التوجيه", "color": "#1B5E20", "icon": "➡️"},
    {"key": "allmanna", "nameSv": "Allmänna inrättningar", "nameAr": "المنشآت العامة", "color": "#1B5E20", "icon": "🏢"},
    {"key": "service", "nameSv": "Serviceanläggningar", "nameAr": "لافتات الخدمات", "color": "#0072CE", "icon": "🍴"},
    {"key": "turist", "nameSv": "Turistiskt intressanta mål", "nameAr": "مناطق سياحية", "color": "#4E342E", "icon": "🏰"},
    {"key": "upplysning", "nameSv": "Upplysningsmärken", "nameAr": "علامات المعلومات", "color": "#0072CE", "icon": "ℹ️"},
    {"key": "vagmark", "nameSv": "Vägmarkeringar", "nameAr": "علامات الطريق الأرضية", "color": "#FFFFFF", "icon": "➖"},
    {"key": "symboler", "nameSv": "Symboler", "nameAr": "الرموز", "color": "#212121", "icon": "⚛️"},
    {"key": "tillagg", "nameSv": "Tilläggstavlor", "nameAr": "لوحات إضافية", "color": "#212121", "icon": "🗒️"},
    {"key": "signaler", "nameSv": "Trafiksignaler", "nameAr": "إشارات ضوئية", "color": "#000000", "icon": "🚥"},
    {"key": "andra", "nameSv": "Andra anordningar", "nameAr": "أدوات تنظيم أخرى", "color": "#212121", "icon": "🚧"},
    {"key": "jarnvag", "nameSv": "Signaler vid järnväg", "nameAr": "إشارات السكك الحديدية", "color": "#E63946", "icon": "🚂"}
], indent=2, ensure_ascii=False) + ";\n\n"

output += "const SIGNS = [\n"

# Add signs
for cat_key, signs in SIGNS_DATA.items():
    output += f"  // Category {cat_key}\n"
    for s in signs:
        output += f"  {{ id:'{s['id']}', category:'{CAT_MAP[cat_key]}', nameSv:'{s['nameSv']}', nameAr:'{s['nameAr']}', descSv:'{s['descSv']}', descAr:'{s['descAr']}', svg: {IMG(s['id'])} }},\n"
    output += "\n"

output += "];\n\n"
output += "if (typeof module !== 'undefined') module.exports = { CATEGORIES, SIGNS };\n"

with open('../signs-data.js', 'w', encoding='utf-8') as f:
    f.write(output)
print("Database updated with high-fidelity descriptions and professional translations.")
