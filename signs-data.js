// Svenska Vägmärken — بيانات علامات الطرق السويدية
// المصدر: transportstyrelsen.se

const IMG = (url) => `<img src="${url}" style="width:100%; height:100%; object-fit:contain;" loading="lazy">`;

const CATEGORIES = [
  {
    "key": "varning",
    "nameSv": "Varningsmärken",
    "nameAr": "علامات التحذير",
    "color": "#FFC700",
    "icon": "⚠️"
  },
  {
    "key": "vajning",
    "nameSv": "Väjningspliktsmärken",
    "nameAr": "علامات الأولوية",
    "color": "#E63946",
    "icon": "🛑"
  },
  {
    "key": "forbud",
    "nameSv": "Förbudsmärken",
    "nameAr": "علامات الحظر",
    "color": "#C8102E",
    "icon": "🚫"
  },
  {
    "key": "pabud",
    "nameSv": "Påbudsmärken",
    "nameAr": "علامات الإلزام",
    "color": "#003F87",
    "icon": "⬆️"
  },
  {
    "key": "anvisning",
    "nameSv": "Anvisningsmärken",
    "nameAr": "علامات الإرشاد",
    "color": "#0072CE",
    "icon": "🅿️"
  },
  {
    "key": "vagvisning",
    "nameSv": "Lokaliseringsmärken för vägvisning",
    "nameAr": "لافتات التوجيه",
    "color": "#1B5E20",
    "icon": "➡️"
  },
  {
    "key": "allmanna",
    "nameSv": "Allmänna inrättningar",
    "nameAr": "المنشآت العامة",
    "color": "#1B5E20",
    "icon": "🏢"
  },
  {
    "key": "service",
    "nameSv": "Serviceanläggningar",
    "nameAr": "لافتات الخدمات",
    "color": "#0072CE",
    "icon": "🍴"
  },
  {
    "key": "turist",
    "nameSv": "Turistiskt intressanta mål",
    "nameAr": "مناطق سياحية",
    "color": "#4E342E",
    "icon": "🏰"
  },
  {
    "key": "upplysning",
    "nameSv": "Upplysningsmärken",
    "nameAr": "علامات المعلومات",
    "color": "#0072CE",
    "icon": "ℹ️"
  },
  {
    "key": "vagmark",
    "nameSv": "Vägmarkeringar",
    "nameAr": "علامات الطريق الأرضية",
    "color": "#FFFFFF",
    "icon": "➖"
  },
  {
    "key": "symboler",
    "nameSv": "Symboler",
    "nameAr": "الرموز",
    "color": "#212121",
    "icon": "⚛️"
  },
  {
    "key": "tillagg",
    "nameSv": "Tilläggstavlor",
    "nameAr": "لوحات إضافية",
    "color": "#212121",
    "icon": "🗒️"
  },
  {
    "key": "signaler",
    "nameSv": "Trafiksignaler",
    "nameAr": "إشارات ضوئية",
    "color": "#000000",
    "icon": "🚥"
  },
  {
    "key": "andra",
    "nameSv": "Andra anordningar",
    "nameAr": "أدوات تنظيم أخرى",
    "color": "#212121",
    "icon": "🚧"
  },
  {
    "key": "jarnvag",
    "nameSv": "Signaler vid järnväg",
    "nameAr": "إشارات السكك الحديدية",
    "color": "#E63946",
    "icon": "🚂"
  }
];

const SIGNS = [
  // Category A
  { id:'A1-1', category:'varning', nameSv:'Farlig kurva (höger)', nameAr:'تحذير من منعطف خطير (يمين)', descSv:'Märket anger en farlig kurva. Symbolen är anpassad efter förhållandena på platsen.', descAr:'تشير الشاخصة إلى وجود منعطف خطر نحو اليمين. يتم تكييف الرمز حسب ظروف الموقع.', svg: IMG('assets/signs/A1-1.png') },
  { id:'A1-2', category:'varning', nameSv:'Farlig kurva (vänster)', nameAr:'تحذير من منعطف خطير (يسار)', descSv:'Märket anger en farlig kurva. Symbolen är anpassad efter förhållandena på platsen.', descAr:'تشير الشاخصة إلى وجود منعطف خطر نحو اليسار. يتم تكييف الرمز حسب ظروف الموقع.', svg: IMG('assets/signs/A1-2.png') },
  { id:'A2-1', category:'varning', nameSv:'Flera farliga kurvor (första höger)', nameAr:'عدة منعطفات خطيرة (الأول لليمين)', descSv:'Märket anger en serie av fler än två farliga kurvor. Symbolen är anpassad efter förhållandena på platsen.', descAr:'تشير الشاخصة إلى وجود سلسلة من أكثر من منعطفين خطرين، يبدأ الأول منها نحو اليمين.', svg: IMG('assets/signs/A2-1.png') },
  { id:'A2-2', category:'varning', nameSv:'Flera farliga kurvor (första vänster)', nameAr:'عدة منعطفات خطيرة (الأول لليسار)', descSv:'Märket anger en serie av fler än två farliga kurvor. Symbolen är anpassad efter förhållandena på platsen.', descAr:'تشير الشاخصة إلى وجود سلسلة من أكثر من منعطفين خطرين، يبدأ الأول منها نحو اليسار.', svg: IMG('assets/signs/A2-2.png') },
  { id:'A3', category:'varning', nameSv:'Brant backe (nedförslut)', nameAr:'منحدر حاد', descSv:'Märket anger en brant nedförslutning. Siffran anger lutningen i procent.', descAr:'تحذير من وجود منحدر حاد أمامك. الرقم يوضح نسبة الميل بالمئة.', svg: IMG('assets/signs/A3.png') },
  { id:'A4', category:'varning', nameSv:'Brant backe (stigning)', nameAr:'مرتفع حاد', descSv:'Märket anger en brant stigning. Siffran anger lutningen i procent.', descAr:'تحذير من وجود مرتفع حاد أمامك. الرقم يوضح نسبة الميل بالمئة.', svg: IMG('assets/signs/A4.png') },
  { id:'A5-1', category:'varning', nameSv:'Avsmalnande väg (båda sidor)', nameAr:'طريق يضيق من الجانبين', descSv:'Märket anger att vägen eller körbanan smalnar av.', descAr:'تحذير من أن الطريق سيصبح أضيق من كلا الجانبين.', svg: IMG('assets/signs/A5-1.png') },
  { id:'A6', category:'varning', nameSv:'Öppningsbar bro', nameAr:'جسر قابل للفتح', descSv:'Märket anger en öppningsbar bro.', descAr:'تحذير من وجود جسر يمكن فتحه (جسر متحرك).', svg: IMG('assets/signs/A6.png') },
  { id:'A8', category:'varning', nameSv:'Ojämn väg', nameAr:'طريق غير مستوٍ', descSv:'Märket anger att vägen är ojämn och att det kan vara lämpligt att sänka hastigheten.', descAr:'تحذير من وجود نتوءات أو حفر في الطريق؛ يُنصح بتخفيف السرعة.', svg: IMG('assets/signs/A8.png') },
  { id:'A9', category:'varning', nameSv:'Vägbula', nameAr:'مطب صناعي', descSv:'Märket anger en vägbula eller liknande farthinder som anlagts som en fartdämpande åtgärd.', descAr:'تحذير من وجود مطب صناعي أو عائق لتخفيف السرعة تم إنشاؤه لهذا الغرض.', svg: IMG('assets/signs/A9.png') },
  { id:'A10', category:'varning', nameSv:'Slirig väg', nameAr:'طريق زلق', descSv:'Märket anger att vägen kan vara slirig.', descAr:'تحذير من أن سطح الطريق قد يكون زلقاً؛ يستخدم خاصة عند وجود خطر الانزلاق.', svg: IMG('assets/signs/A10.png') },
  { id:'A13', category:'varning', nameSv:'Övergångsställe', nameAr:'معبر مشاة', descSv:'Märket anger ett övergångsställe där gående kan korsa vägen.', descAr:'تحذير من وجود معبر مشاة أمامك.', svg: IMG('assets/signs/A13.png') },
  { id:'A15', category:'varning', nameSv:'Barn', nameAr:'أطفال', descSv:'Märket anger en vägsträcka där barn ofta vistas eller korsar vägen.', descAr:'تحذير من احتمال وجود أطفال يعبرون الطريق أو يتواجدون قربه.', svg: IMG('assets/signs/A15.png') },
  { id:'A19-1', category:'varning', nameSv:'Älgar', nameAr:'حيوان الأيل (Elk)', descSv:'Märket anger risk för älgar på vägen.', descAr:'تحذير من خطر وجود حيوانات الأيل على الطريق.', svg: IMG('assets/signs/A19-1.png') },
  { id:'A20', category:'varning', nameSv:'Vägarbete', nameAr:'أعمال الطريق', descSv:'Vägarbete pågår.', descAr:'تحذير من وجود أعمال إصلاح أو صيانة على الطريق.', svg: IMG('assets/signs/A20.png') },
  { id:'A25', category:'varning', nameSv:'Möte', nameAr:'سير في الاتجاهين', descSv:'Märket anger att trafiken på vägen sker i båda riktningarna.', descAr:'تحذير من أن الطريق سيصبح ذو اتجاهين بعد أن كان اتجاه واحد.', svg: IMG('assets/signs/A25.png') },
  { id:'A30', category:'varning', nameSv:'Cirkulationsplats', nameAr:'دوار', descSv:'Märket anger en cirkulationsplats.', descAr:'تحذير من الاقتراب من دوار مروري.', svg: IMG('assets/signs/A30.png') },
  { id:'A40', category:'varning', nameSv:'Annan fara', nameAr:'خطر آخر', descSv:'Märket anger annan fara än sådan som kan anges med något annat varningsmärke.', descAr:'تحذير من وجود خطر غير محدد بالعلامات الأخرى. يجب الانتباه.', svg: IMG('assets/signs/A40.png') },

  // Category B
  { id:'B1', category:'vajning', nameSv:'Väjningsplikt', nameAr:'إفساح الطريق', descSv:'Lämna företräde. Märket anger att förare har väjningsplikt mot fordon på korsande väg.', descAr:'أنت ملزم بإفساح الطريق لحركة المرور على الطريق المتقاطع.', svg: IMG('assets/signs/B1.png') },
  { id:'B2', category:'vajning', nameSv:'Stopplikt', nameAr:'قف', descSv:'Stanna vid stopplinjen. Märket anger att förare har stopplikt före infart på korsande väg.', descAr:'الوقوف الإلزامي التام عند خط التوقف قبل دخول الطريق المتقاطع.', svg: IMG('assets/signs/B2.png') },
  { id:'B3', category:'vajning', nameSv:'Huvudled', nameAr:'طريق رئيسي', descSv:'Du kör på huvudled.', descAr:'أنت تسير على طريق رئيسي.', svg: IMG('assets/signs/B3.png') },
  { id:'B5', category:'vajning', nameSv:'Väjningsplikt mot mötande', nameAr:'أولوية المقابل', descSv:'Du ska väja för mötande.', descAr:'يجب عليك إفساح الطريق لحركة المرور القادمة من الاتجاه المعاكس.', svg: IMG('assets/signs/B5.png') },
  { id:'B6', category:'vajning', nameSv:'Mötande har väjningsplikt', nameAr:'أولويتك تجاه المقابل', descSv:'Mötande ska väja för dig.', descAr:'حركة المرور القادمة من الاتجاه المعاكس ملزمة بإفساح الطريق لك.', svg: IMG('assets/signs/B6.png') },
  { id:'B8', category:'vajning', nameSv:'Cykelöverfart', nameAr:'معبر دراجات', descSv:'Märket anger en cykelöverfart.', descAr:'يشير إلى معبر مخصص للدراجات الهوائية حيث تلتزم السيارات بإفساح الطريق.', svg: IMG('assets/signs/B8.png') },

  // Category C
  { id:'C1', category:'forbud', nameSv:'Förbud mot infart', nameAr:'ممنوع الدخول', descSv:'Ingen infart.', descAr:'يُمنع دخول جميع المركبات في هذا الاتجاه.', svg: IMG('assets/signs/C1.png') },
  { id:'C2', category:'forbud', nameSv:'Förbud mot trafik med fordon', nameAr:'ممنوع مرور المركبات', descSv:'All fordonstrafik förbjuden.', descAr:'يُمنع مرور جميع أنواع المركبات في هذا الاتجاه.', svg: IMG('assets/signs/C2.png') },
  { id:'C3', category:'forbud', nameSv:'Förbud mot motordrivet fordon', nameAr:'ممنوع المركبات ذات المحركات', descSv:'Ej motordrivna fordon.', descAr:'يُمنع مرور جميع المركبات التي تعمل بمحرك باستثناء الموبيد من الفئة الثانية.', svg: IMG('assets/signs/C3.png') },
  { id:'C7', category:'forbud', nameSv:'Förbud mot trafik med tung lastbil', nameAr:'ممنوع الشاحنات الثقيلة', descSv:'Tunga lastbilar förbjudna.', descAr:'يُمنع مرور الشاحنات التي يتجاوز وزنها الإجمالي 3.5 طن.', svg: IMG('assets/signs/C7.png') },
  { id:'C16', category:'forbud', nameSv:'Begränsad fordonsbredd', nameAr:'عرض محدود', descSv:'Förbud mot trafik med fordon över viss bredd.', descAr:'يُمنع مرور المركبات التي يتجاوز عرضها الرقم المذكور.', svg: IMG('assets/signs/C16.png') },
  { id:'C17', category:'forbud', nameSv:'Begränsad fordonshöjd', nameAr:'ارتفاع محدود', descSv:'Förbud mot trafik med fordon över viss höjd.', descAr:'يُمنع مرور المركبات التي يتجاوز ارتفاعها الرقم المذكور.', svg: IMG('assets/signs/C17.png') },
  { id:'C25', category:'forbud', nameSv:'Förbud mot sväng i korsning', nameAr:'ممنوع الانعطاف', descSv:'Ej svänga.', descAr:'يُمنع الانعطاف في الاتجاه الموضح في التقاطع.', svg: IMG('assets/signs/C25.png') },
  { id:'C27', category:'forbud', nameSv:'Förbud mot omkörning', nameAr:'ممنوع التجاوز', descSv:'Förbjudet att köra om.', descAr:'يُمنع تجاوز المركبات ذات المحركات الأخرى باستثناء الموبيد والدراجات النارية بدون عربة.', svg: IMG('assets/signs/C27.png') },
  { id:'C31', category:'forbud', nameSv:'Hastighetsbegränsning', nameAr:'السرعة القصوى', descSv:'Maximal hastighet.', descAr:'يُمنع قيادة المركبة بسرعة أعلى من السرعة المحددة على الشاخصة.', svg: IMG('assets/signs/C31.png') },
  { id:'C35', category:'forbud', nameSv:'Förbud mot att parkera fordon', nameAr:'ممنوع الوقوف', descSv:'Parkering förbjuden.', descAr:'يُمنع ركن السيارة على جانب الطريق الذي وضعت فيه الشاخصة.', svg: IMG('assets/signs/C35.png') },
  { id:'C39', category:'forbud', nameSv:'Förbud mot att stanna och parkera', nameAr:'ممنوع التوقف والوقوف', descSv:'Stoppförbud.', descAr:'يُمنع التوقف أو ركن السيارة تماماً لأي سبب كان.', svg: IMG('assets/signs/C39.png') },

  // Category D
  { id:'D1-1', category:'pabud', nameSv:'Påbjuden körriktning (rakt fram)', nameAr:'اتجاه إلزامي للأمام', descSv:'Kör rakt fram.', descAr:'يجب عليك السير في الاتجاه المستقيم فقط.', svg: IMG('assets/signs/D1-1.png') },
  { id:'D2-1', category:'pabud', nameSv:'Påbjuden körbana (höger)', nameAr:'إلزام اليمين', descSv:'Håll till höger.', descAr:'يجب عليك البقاء على الجانب الأيمن من العلامة.', svg: IMG('assets/signs/D2-1.png') },
  { id:'D3', category:'pabud', nameSv:'Cirkulationsplats', nameAr:'دوار إلزامي', descSv:'Kör i cirkulationsplats.', descAr:'يجب عليك السير في اتجاه الدوار الموضح.', svg: IMG('assets/signs/D3.png') },

  // Category E
  { id:'E1', category:'anvisning', nameSv:'Motorväg', nameAr:'طريق سريع', descSv:'Motorväg börjar.', descAr:'بداية الطريق السريع.', svg: IMG('assets/signs/E1.png') },
  { id:'E7', category:'anvisning', nameSv:'Gågata', nameAr:'شارع مشاة', descSv:'Fordon på gåendes villkor.', descAr:'منطقة مخصصة للمشاة، ويجب على المركبات السير بسرعة المشي وإفساح الطريق.', svg: IMG('assets/signs/E7.png') },
  { id:'E9', category:'anvisning', nameSv:'Gångfartsområde', nameAr:'منطقة سكنية (سرعة المشي)', descSv:'Max gångfart.', descAr:'منطقة يجب أن تسير فيها المركبات بسرعة المشي القصوى (حوالي 7 كم/س).', svg: IMG('assets/signs/E9.png') },
  { id:'E11', category:'anvisning', nameSv:'Rekommenderad lägre hastighet', nameAr:'سرعة منخفضة موصى بها', descSv:'Kör saktare.', descAr:'يُنصح بالقيادة بسرعة أقل من المعتاد بسبب ظروف الطريق.', svg: IMG('assets/signs/E11.png') },
  { id:'E19', category:'anvisning', nameSv:'Parkering', nameAr:'موقف سيارات', descSv:'Parkering tillåten.', descAr:'يُسمح بركن السيارات في هذا المكان.', svg: IMG('assets/signs/E19.png') },

  // Category M
  { id:'M1', category:'vagmark', nameSv:'Mittlinje', nameAr:'خط الوسط', descSv:'Skiljer körfält åt.', descAr:'يفصل بين مسارات السير في اتجاهات متعاكسة.', svg: IMG('assets/signs/M1.png') },
  { id:'M8', category:'vagmark', nameSv:'Heldragen linje', nameAr:'خط متصل', descSv:'Får ej överskridas.', descAr:'يُمنع تجاوز هذا الخط أو القيادة فوقه.', svg: IMG('assets/signs/M8.png') },
  { id:'M13', category:'vagmark', nameSv:'Stopplinje', nameAr:'خط التوقف', descSv:'Stanna här.', descAr:'المكان الذي يجب أن تتوقف عنده تماماً عند وجود إشارة قف أو ضوء أحمر.', svg: IMG('assets/signs/M13.png') },
  { id:'M14', category:'vagmark', nameSv:'Väjningslinje', nameAr:'خط إفساح الطريق', descSv:'Lämna företräde här.', descAr:'الخط الذي يجب الوقوف خلفه عند إفساح الطريق للمركبات الأخرى.', svg: IMG('assets/signs/M14.png') },
  { id:'M15', category:'vagmark', nameSv:'Övergångsställe', nameAr:'تخطيط معبر مشاة', descSv:'Markering för gående.', descAr:'علامات أرضية تحدد معبر المشاة.', svg: IMG('assets/signs/M15.png') },

  // Category T
  { id:'T1', category:'tillagg', nameSv:'Vägsträckans längd', nameAr:'طول المسافة', descSv:'Anger längd.', descAr:'توضح طول المسافة التي تسري عليها الشاخصة.', svg: IMG('assets/signs/T1.png') },
  { id:'T13', category:'tillagg', nameSv:'Flervägsväjning', nameAr:'إفساح طريق رباعي', descSv:'Väjningsplikt från alla håll.', descAr:'تنبيه بأن جميع الأطراف في التقاطع ملزمون بإفساح الطريق لبعضهم.', svg: IMG('assets/signs/T13.png') },

  // Category X
  { id:'X1', category:'andra', nameSv:'Markeringspil', nameAr:'سهم توجيه', descSv:'Anordningen används för att markera en kurva, en plats där en väg slutar eller en plats där trafiken i övrigt kan behöva vägledning.', descAr:'تُستخدم هذه الأداة لتحديد منعطف، أو مكان ينتهي فيه الطريق، أو لتوجيه المرور.', svg: IMG('assets/signs/X1.png') },
  { id:'X10', category:'andra', nameSv:'Stolpmarkeringsanordning', nameAr:'أداة تحديد الأعمدة', descSv:'Anordningen används för att det ska vara lättare att upptäcka ett vägmärke. Den har samma färgsättning som märket ovanför.', descAr:'تُستخدم لتسهيل رؤية الشاخصة المرورية، وتأخذ نفس ألوان الشاخصة التي توضع تحتها.', svg: IMG('assets/signs/X10.png') },

];

if (typeof module !== 'undefined') module.exports = { CATEGORIES, SIGNS };
