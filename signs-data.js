// Svenska Vägmärken — بيانات علامات الطرق السويدية (FINAL FIX)

const IMG = (url) => `<img src="${url}" style="width:100%; height:100%; object-fit:contain;" loading="lazy">`;

const CATEGORIES = [
  {
    "key": "varning",
    "nameSv": "Varningsmärken",
    "nameAr": "علامات التحذير",
    "descSv": "Varningsmärken varnar för olika typer av faror och betyder att du ska vara extra uppmärksam och försiktig.",
    "descAr": "علامات التحذير تنبهك إلى وجود أنواع مختلفة من المخاطر وتعني أنه يجب عليك توخي الحذر الشديد والانتباه.",
    "color": "#FFC700",
    "icon": "⚠️"
  },
  {
    "key": "vajning",
    "nameSv": "Väjningspliktsmärken",
    "nameAr": "علامات الأولوية",
    "descSv": "Under gruppen väjningspliktsmärken hittar du de märken som upplyser om stopp- eller väjningsplikt.",
    "descAr": "تحت مجموعة علامات الأولوية، ستجد العلامات التي تبلغ عن وجوب التوقف أو إفساح الطريق للمركبات الأخرى.",
    "color": "#E63946",
    "icon": "🛑"
  },
  {
    "key": "forbud",
    "nameSv": "Förbudsmärken",
    "nameAr": "علامات الحظر",
    "descSv": "Förbudsmärken anger att någonting är förbjudet, till exempel förbud mot att parkera fordon.",
    "descAr": "تشير علامات الحظر إلى أن شيئاً ما ممنوع، على سبيل المثال منع ركن المركبات.",
    "color": "#C8102E",
    "icon": "🚫"
  },
  {
    "key": "pabud",
    "nameSv": "Påbudsmärken",
    "nameAr": "علامات الإلزام",
    "descSv": "Ett påbudsmärke innehåller en uppmaning som du är skyldig att följa.",
    "descAr": "تحتوي علامة الإلزام على أمر أنت ملزم باتباعه، على سبيل المثال أنه لا يجوز لك القيادة إلا في اتجاه معين.",
    "color": "#003F87",
    "icon": "⬆️"
  },
  {
    "key": "anvisning",
    "nameSv": "Anvisningsmärken",
    "nameAr": "علامات الإرشاد",
    "descSv": "Anvisningsmärken talar om vad som gäller för en viss plats, väg eller vägsträcka.",
    "descAr": "تخبرك علامات الإرشاد بما ينطبق على مكان أو طريق أو قسم معين من الطريق.",
    "color": "#0072CE",
    "icon": "🅿️"
  },
  {
    "key": "vagmark",
    "nameSv": "Vägmarkeringar",
    "nameAr": "علامات الطريق",
    "descSv": "Vägmarkeringar används för att reglera, varna eller vägleda trafikanter.",
    "descAr": "تُستخدم علامات الطريق الأرضية لتنظيم حركة المرور أو تحذير مستخدمي الطريق أو توجيههم.",
    "color": "#FFFFFF",
    "icon": "➖"
  },
  {
    "key": "andra",
    "nameSv": "Andra anordningar",
    "nameAr": "أدوات أخرى",
    "descSv": "Anordningar som ger anvisningar som inte fås av andra vägmärken.",
    "descAr": "الأدوات التي تعطي تعليمات لا توفرها علامات الطريق الأخرى.",
    "color": "#212121",
    "icon": "🚧"
  }
];

const SIGNS = [
  // Category A
  { id:'A1', category:'varning', nameSv:'Varning för farlig kurva', nameAr:'منعطف خطر', descSv:"Märket anger en farlig kurva samt kurvans riktning.", descAr:"تحذر الشاخصة من وجود منعطف خطر وتوضح اتجاهه.", svg: IMG('assets/signs/A1.png') },
  { id:'A2', category:'varning', nameSv:'Varning för flera farliga kurvor', nameAr:'عدة منعطفات خطرة', descSv:"Märket anger flera farliga kurvor samt den första farliga kurvans riktning.", descAr:"تحذر الشاخصة من وجود عدة منعطفات خطرة متتالية وتوضح اتجاه المنعطف الأول.", svg: IMG('assets/signs/A2.png') },
  { id:'A3', category:'varning', nameSv:'Varning för nedförslutning', nameAr:'منحدر حاد (نزول)', descSv:"Märket anger brant nedförslutning. Siffran anger lutningen i procent.", descAr:"تحذر الشاخصة من وجود منحدر حاد للأسفل. الرقم يوضح نسبة الميلان.", svg: IMG('assets/signs/A3.png') },
  { id:'A4', category:'varning', nameSv:'Varning för stigning', nameAr:'مرتفع حاد (صعود)', descSv:"Märket anger kraftig stigning. Siffran anger stigningen i procent.", descAr:"تحذر الشاخصة من وجود صعود حاد للأعلى. الرقم يوضح نسبة الميلان.", svg: IMG('assets/signs/A4.png') },
  { id:'A5', category:'varning', nameSv:'Varning för avsmalnande väg', nameAr:'طريق يضيق', descSv:"Märket anger att vägen eller körbanan smalnar av.", descAr:"تحذر الشاخصة من أن الطريق يضيق. يتم تكييف الرمز حسب ظروف الموقع.", svg: IMG('assets/signs/A5.png') },
  { id:'A6', category:'varning', nameSv:'Varning för bro', nameAr:'جسر', descSv:"Märket anger en öppningsbar bro.", descAr:"تحذر الشاخصة من وجود جسر قابل للفتح.", svg: IMG('assets/signs/A6.png') },
  { id:'A7', category:'varning', nameSv:'Varning för kaj', nameAr:'رصيف مائي', descSv:"Märket anger en plats där vägen slutar mot vatten.", descAr:"تحذر الشاخصة من مكان ينتهي فيه الطريق عند الماء.", svg: IMG('assets/signs/A7.png') },
  { id:'A8', category:'varning', nameSv:'Varning för ojämn väg', nameAr:'طريق غير مستوٍ', descSv:"Märket anger ojämnheter eller skador i vägbanan.", descAr:"تحذر الشاخصة من وجود نتوءات أو أضرار في سطح الطريق.", svg: IMG('assets/signs/A8.png') },
  { id:'A9', category:'varning', nameSv:'Varning för farthinder', nameAr:'مطبات (مخفف سرعة)', descSv:"Märkena anger upphöjning eller grop som anlagts som fartdämpande åtgärd.", descAr:"تحذر الشاخصة من وجود نتوء أو تجويف تم وضعه كوسيلة لتهدئة السرعة.", svg: IMG('assets/signs/A9.png') },
  { id:'A10', category:'varning', nameSv:'Varning för slirig väg', nameAr:'طريق زلق', descSv:"Märket anger att vägen kan vara slirig.", descAr:"تحذر الشاخصة من أن الطريق قد يكون زلقاً.", svg: IMG('assets/signs/A10.png') },
  { id:'A11', category:'varning', nameSv:'Varning för stenskott', nameAr:'تطاير حصى', descSv:"Märket anger risk för stenskott.", descAr:"تحذر الشاخصة من خطر تطاير الحصى.", svg: IMG('assets/signs/A11.png') },
  { id:'A12', category:'varning', nameSv:'Varning för stenras', nameAr:'تساقط صخور', descSv:"Märket anger risk för stenras och för att stenar kan förekomma på vägen.", descAr:"تحذر من خطر تساقط الصخور أو وجود صخور على الطريق.", svg: IMG('assets/signs/A12.png') },
  { id:'A13', category:'varning', nameSv:'Varning för övergångsställe', nameAr:'معبر مشاة', descSv:"Märket anger ett övergångsställe.", descAr:"تحذر من وجود معبر مشاة.", svg: IMG('assets/signs/A13.png') },
  { id:'A14', category:'varning', nameSv:'Varning för gående', nameAr:'مشاة', descSv:"Märket anger en vägsträcka där gående ofta korsar eller uppehåller sig på eller vid vägen.", descAr:"تحذر من منطقة يكثر فيها عبور المشاة.", svg: IMG('assets/signs/A14.png') },
  { id:'A15', category:'varning', nameSv:'Varning för barn', nameAr:'أطفال', descSv:"Märket anger en vägsträcka där barn ofta korsar eller uppehåller sig på eller vid vägen.", descAr:"تحذر من منطقة يكثر فيها تواجد الأطفال أو عبورهم للطريق.", svg: IMG('assets/signs/A15.png') },
  { id:'A16', category:'varning', nameSv:'Varning för cyklande och mopedförare', nameAr:'دراجات هوائية', descSv:"Märket anger en vägsträcka där cyklande eller mopedförare ofta korsar eller kör in på vägen.", descAr:"تحذر من مكان يكثر فيه دخول الدراجات الهوائية إلى الطريق.", svg: IMG('assets/signs/A16.png') },
  { id:'A17', category:'varning', nameSv:'Varning för skidåkare', nameAr:'متزلجون', descSv:"Märket anger en plats där skidåkare ofta korsar eller uppehåller sig på vägen.", descAr:"تحذر من مكان يكثر فيه عبور المتزلجين للطريق.", svg: IMG('assets/signs/A17.png') },
  { id:'A18', category:'varning', nameSv:'Varning för ridande', nameAr:'خيالة', descSv:"Märket anger en vägsträcka där ridande ofta korsar eller uppehåller sig på vägen.", descAr:"تحذر من منطقة يكثر فيها عبور الخيالة للطريق.", svg: IMG('assets/signs/A18.png') },
  { id:'A19', category:'varning', nameSv:'Varning för djur', nameAr:'حيوانات', descSv:"Märket anger en plats eller vägsträcka där det finns särskild risk för djur på eller vid vägen.", descAr:"تحذر من خطر وجود حيوانات على الطريق.", svg: IMG('assets/signs/A19.png') },
  { id:'A20', category:'varning', nameSv:'Varning för vägarbete', nameAr:'أعمال طريق', descSv:"Märket anger en vägsträcka där vägarbete eller liknande arbete pågår.", descAr:"تحذر من وجود أعمال إصلاح أو صيانة جارية على الطريق.", svg: IMG('assets/signs/A20.png') },
  { id:'A21', category:'varning', nameSv:'Slut på sträcka med vägarbete', nameAr:'نهاية أعمال الطريق', descSv:"Märket anger slut på en vägsträcka med vägarbete.", descAr:"تشير إلى نهاية قسم الطريق الذي تجري فيه الأعمال.", svg: IMG('assets/signs/A21.png') },
  { id:'A22', category:'varning', nameSv:'Varning för flerfärgssignal', nameAr:'إشارة ضوئية', descSv:"Märket anger en plats där trafiken regleras med flerfärgssignal.", descAr:"تحذر من وجود تقاطع ينظمه ضوء مروري.", svg: IMG('assets/signs/A22.png') },
  { id:'A23', category:'varning', nameSv:'Varning för lågt flygande flygplan', nameAr:'طيران منخفض', descSv:"Märket anger en vägsträcka där flygplan kan flyga på låg höjd.", descAr:"تحذر من قسم طريق تطير فيه الطائرات بارتفاع منخفض.", svg: IMG('assets/signs/A23.png') },
  { id:'A24', category:'varning', nameSv:'Varning för sidvind', nameAr:'رياح جانبية', descSv:"Märket anger en vägsträcka där det ofta förekommer stark sidvind.", descAr:"تحذر من قسم طريق يكثر فيه هبوب رياح جانبية قوية.", svg: IMG('assets/signs/A24.png') },
  { id:'A25', category:'varning', nameSv:'Varning för mötande trafik', nameAr:'حركة مرور مقابلة', descSv:"Märket anger att en körbana med enkelriktad trafik övergår i en körbana med trafik i båda riktningarna.", descAr:"تحذر من أن الطريق سيتحول إلى اتجاهين.", svg: IMG('assets/signs/A25.png') },
  { id:'A26', category:'varning', nameSv:'Varning för tunnel', nameAr:'نفق', descSv:"Märket anger en tunnel.", descAr:"تحذر من وجود نفق.", svg: IMG('assets/signs/A26.png') },
  { id:'A27', category:'varning', nameSv:'Varning för svag vägkant eller hög körbanekant', nameAr:'حافة طريق ضعيفة', descSv:"Märket anger risk för svag vägkant eller hög körbanekant.", descAr:"تحذر من وجود حافة طريق ضعيفة.", svg: IMG('assets/signs/A27.png') },
  { id:'A28', category:'varning', nameSv:'Varning för vägkorsning', nameAr:'تقاطع طرق', descSv:"Märket anger en vägkorsning där högerregeln normalt gäller.", descAr:"تحذر من وجود تقاطع طرق تنطبق فيه قاعدة الأولوية لليمين.", svg: IMG('assets/signs/A28.png') },
  { id:'A29', category:'varning', nameSv:'Varning för vägkorsning (väjningsplikt)', nameAr:'تقاطع مع طريق فرعي', descSv:"Märket anger en vägkorsning där förare på anslutande vägar har väjningsplikt eller stopplikt.", descAr:"تحذر من تقاطع يكون للسائقين في الطرق المتصلة واجب إفساح الطريق.", svg: IMG('assets/signs/A29.png') },
  { id:'A30', category:'varning', nameSv:'Varning för cirkulationsplats', nameAr:'دوار', descSv:"Märket anger en cirkulationsplats.", descAr:"تحذر من وجود تقاطع دائري (دوار).", svg: IMG('assets/signs/A30.png') },
  { id:'A31', category:'varning', nameSv:'Varning för långsamtgående fordon', nameAr:'مركبات بطيئة', descSv:"Märket anger en plats där långsamtgående fordon ofta korsar eller kör in på vägen.", descAr:"تحذر من مكان تدخل فيه المركبات البطيئة إلى الطريق بكثرة.", svg: IMG('assets/signs/A31.png') },
  { id:'A32', category:'varning', nameSv:'Varning för fordon med förspänt dragdjur', nameAr:'مركبات تجرها حيوانات', descSv:"Märket anger en vägsträcka där fordon förspända med dragdjur ofta förekommer.", descAr:"تحذر من قسم طريق يكثر فيه تواجد مركبات تجرها حيوانات.", svg: IMG('assets/signs/A32.png') },
  { id:'A33', category:'varning', nameSv:'Varning för terrängskotertrafik', nameAr:'دراجات ثلجية', descSv:"Märket anger en plats där terrängskotrar ofta korsar eller kör in på vägen.", descAr:"تحذر من مكان يكثر فيه عبور الدراجات الثلجية للطريق.", svg: IMG('assets/signs/A33.png') },
  { id:'A34', category:'varning', nameSv:'Varning för kö', nameAr:'ازدحام مروري', descSv:"Märket anger en vägsträcka där det finns risk för köbildning.", descAr:"تحذر من خطر تشكل طوابير من المركبات.", svg: IMG('assets/signs/A34.png') },
  { id:'A35', category:'varning', nameSv:'Varning för järnvägskorsning med bommar', nameAr:'تقاطع سكة حديد بحواجز', descSv:"Märket anger en korsning med järnväg eller spårväg där det finns bommar.", descAr:"تحذر من تقاطع مع سكة حديد يوجد فيه حواجز.", svg: IMG('assets/signs/A35.png') },
  { id:'A36', category:'varning', nameSv:'Varning för järnvägskorsning utan bommar', nameAr:'تقاطع سكة حديد بدون حواجز', descSv:"Märket anger en korsning med järnväg eller spårväg utan bommar.", descAr:"تحذر من تقاطع مع سكة حديد لا يوجد فيه حواجز.", svg: IMG('assets/signs/A36.png') },
  { id:'A37', category:'varning', nameSv:'Varning för korsning med spårväg utan bommar', nameAr:'تقاطع ترام بدون حواجز', descSv:"Märket anger en korsning med spårväg utan bommar.", descAr:"تحذر من تقاطع مع سكة حديد الترام لا يوجد فيه حواجز.", svg: IMG('assets/signs/A37.png') },
  { id:'A38', category:'varning', nameSv:'Avstånd till plankorsning', nameAr:'المسافة إلى السكة', descSv:"Märkena anger avståndet till en plankorsning i tredjedelar.", descAr:"تحدد المسافة المتبقية للوصول إلى تقاطع السكة الحديد.", svg: IMG('assets/signs/A38.png') },
  { id:'A39', category:'varning', nameSv:'Kryssmärke', nameAr:'تقاطع سكة حديد', descSv:"Märket anger en korsning med järnväg eller spårväg med ett eller flera spår.", descAr:"توضع مباشرة قبل تقاطع السكة الحديد لتنبيه السائق.", svg: IMG('assets/signs/A39.png') },
  { id:'A40', category:'varning', nameSv:'Varning för annan fara', nameAr:'أخطار أخرى', descSv:"Märket anger en annan fara än sådan som kan anges med något annat varningsmärke.", descAr:"تحذر من خطر آخر غير موضح، ويوضح النوع في لوحة إضافية.", svg: IMG('assets/signs/A40.png') },
  { id:'A41', category:'varning', nameSv:'Varning för olycka', nameAr:'حادث', descSv:"Märket anger en trafikolycka.", descAr:"تحذر من وجود حادث مروري أمامك.", svg: IMG('assets/signs/A41.png') },

  // Category B
  { id:'B1', category:'vajning', nameSv:'Väjningsplikt', nameAr:'إفساح الطريق', descSv:"Märket anger att förare har väjningsplikt mot fordon på korsande väg eller led.", descAr:"تشير الشاخصة إلى وجوب إفساح الطريق للمركبات في الطريق المتقاطع.", svg: IMG('assets/signs/B1.png') },
  { id:'B2', category:'vajning', nameSv:'Stopplikt', nameAr:'قف (توقف إلزامي)', descSv:"Märket anger att förare har stopplikt före infart på korsande väg, led eller spårområde.", descAr:"تشير الشاخصة إلى وجوب التوقف قبل الدخول إلى الطريق المتقاطع.", svg: IMG('assets/signs/B2.png') },
  { id:'B3', category:'vajning', nameSv:'Övergångsställe', nameAr:'معبر مشاة', descSv:"Märkena anger ett övergångsställe.", descAr:"تشير الشواخص إلى وجود معبر مشاة.", svg: IMG('assets/signs/B3.png') },
  { id:'B4', category:'vajning', nameSv:'Huvudled', nameAr:'طريق رئيسي', descSv:"Märket anger huvudledens början och fortsättning.", descAr:"توضع الشاخصة في بداية الطريق الرئيسي وتتكرر بعد كل تقاطع.", svg: IMG('assets/signs/B4.png') },
  { id:'B5', category:'vajning', nameSv:'Huvudled upphör', nameAr:'نهاية الطريق الرئيسي', descSv:"Märket anger att huvudleden upphör.", descAr:"تشير الشاخصة إلى نهاية الطريق الرئيسي.", svg: IMG('assets/signs/B5.png') },
  { id:'B6', category:'vajning', nameSv:'Väjningsplikt mot mötande trafik', nameAr:'إفساح الطريق للمرور القادم', descSv:"Märket anger att förare har väjningsplikt mot mötande trafik.", descAr:"تشير الشاخصة إلى وجوب إفساح الطريق للمركبات القادمة من الاتجاه المقابل.", svg: IMG('assets/signs/B6.png') },
  { id:'B7', category:'vajning', nameSv:'Mötande trafik har väjningsplikt', nameAr:'الأولوية تجاه المرور القادم', descSv:"Märket anger att mötande trafik har väjningsplikt.", descAr:"تشير الشاخصة إلى أن لك الأولوية في المرور تجاه المركبات القادمة.", svg: IMG('assets/signs/B7.png') },
  { id:'B8', category:'vajning', nameSv:'Cykelöverfart', nameAr:'معبر دراجات هوائية', descSv:"Märket anger en cykelöverfart.", descAr:"تشير الشاخصة إلى وجود معبر مخصص للدراجات الهوائية.", svg: IMG('assets/signs/B8.png') },

  // Category C
  { id:'C1', category:'forbud', nameSv:'Förbud mot infart med fordon', nameAr:'ممنوع الدخول', descSv:"Märket anger förbud mot infart med fordon.", descAr:"يمنع دخول جميع أنواع المركبات من هذا الاتجاه.", svg: IMG('assets/signs/C1.png') },
  { id:'C2', category:'forbud', nameSv:'Förbud mot trafik med fordon', nameAr:'ممنوع المرور بالمركبات', descSv:"Märket anger förbud mot trafik med fordon.", descAr:"يمنع مرور المركبات في كلا الاتجاهين.", svg: IMG('assets/signs/C2.png') },
  { id:'C3', category:'forbud', nameSv:'Förbud mot trafik med motordrivet fordon', nameAr:'ممنوع مرور المركبات ذات المحرك', descSv:"Avser förbud mot trafik med annat motordrivet fordon än moped klass II.", descAr:"يمنع مرور السيارات والشاحنات والدراجات النارية.", svg: IMG('assets/signs/C3.png') },
  { id:'C9', category:'forbud', nameSv:'Förbud mot trafik med fordon lastat med farligt gods', nameAr:'ممنوع مرور المواد الخطرة', descSv:"Märket anger förbud mot trafik med fordon lastat med farligt gods.", descAr:"يمنع مرور المركبات التي تحمل مواد خطرة.", svg: IMG('assets/signs/C9.png') },
  { id:'C16', category:'forbud', nameSv:'Begränsad fordonsbredd', nameAr:'تحديد عرض المركبة', descSv:"Märket anger förbud mot trafik med fordon över en viss bredd.", descAr:"يمنع مرور المركبات التي يتجاوز عرضها الرقم الموضح.", svg: IMG('assets/signs/C16.png') },
  { id:'C17', category:'forbud', nameSv:'Begränsad fordonshöjd', nameAr:'تحديد ارتفاع المركبة', descSv:"Märket anger förbud mot trafik med fordon över en viss höjd.", descAr:"يمنع مرور المركبات التي يتجاوز ارتفاعها الرقم الموضح.", svg: IMG('assets/signs/C17.png') },
  { id:'C27', category:'forbud', nameSv:'Förbud mot omkörning', nameAr:'ممنوع التجاوز', descSv:"Märket anger förbud mot att köra om andra motordrivna fordon än tvåhjuliga mopeder.", descAr:"يمنع تجاوز المركبات الأخرى (عدا الدراجات النارية الصغيرة).", svg: IMG('assets/signs/C27.png') },
  { id:'C31', category:'forbud', nameSv:'Hastighetsbegränsning', nameAr:'تحديد السرعة القصوى', descSv:"Märket anger förbud mot att föra fordon med högre hastighet än den som anges.", descAr:"يمنع قيادة المركبة بسرعة تتجاوز السرعة المحددة.", svg: IMG('assets/signs/C31.png') },
  { id:'C35', category:'forbud', nameSv:'Förbud mot att parkera fordon', nameAr:'ممنوع ركن السيارات', descSv:"Märket anger förbud mot att parkera fordon.", descAr:"يمنع ركن المركبات في هذا الجانب من الطريق.", svg: IMG('assets/signs/C35.png') },
  { id:'C39', category:'forbud', nameSv:'Förbud mot att stanna och parkera fordon', nameAr:'ممنوع التوقف والوقوف', descSv:"Märket anger förbud mot att stanna och parkera fordon.", descAr:"يمنع توقف أو ركن المركبة في هذا المكان.", svg: IMG('assets/signs/C39.png') },

  // Category D
  { id:'D1', category:'pabud', nameSv:'Påbjuden körriktning', nameAr:'اتجاه إجباري', descSv:"Märket anger att fordon endast får föras i pilens riktning.", descAr:"يجب على السائق القيادة في اتجاه السهم فقط.", svg: IMG('assets/signs/D1.png') },
  { id:'D2', category:'pabud', nameSv:'Påbjuden körbana', nameAr:'مسار إجباري', descSv:"Märkena anger att fordon endast får föras förbi märket där pilen visar.", descAr:"يجب المرور من جانب السهم الموضح.", svg: IMG('assets/signs/D2.png') },
  { id:'D3', category:'pabud', nameSv:'Cirkulationsplats', nameAr:'دوار (إلزامي)', descSv:"Märket anger påbud om cirkulationstrafik.", descAr:"تشير إلى وجوب القيادة حول الدوار.", svg: IMG('assets/signs/D3.png') },
  { id:'D4', category:'pabud', nameSv:'Påbjuden cykelbana', nameAr:'مسار دراجات هوائية', descSv:"Märket anger bana avsedd endast för cyklande och moped klass II.", descAr:"مسار مخصص فقط للدراجات الهوائية والدراجات النارية الصغيرة صنف 2.", svg: IMG('assets/signs/D4.png') },
  { id:'D5', category:'pabud', nameSv:'Påbjuden gångbana', nameAr:'مسار مشاة', descSv:"Märket anger bana avsedd endast för gående.", descAr:"مسار مخصص فقط للمشاة.", svg: IMG('assets/signs/D5.png') },
  { id:'D6', category:'pabud', nameSv:'Påbjuden gång- och cykelbana', nameAr:'مسار مشاة ودراجات مشترك', descSv:"Märket anger gemensam bana för gående och cyklande.", descAr:"مسار مشترك للمشاة والدراجات الهوائية.", svg: IMG('assets/signs/D6.png') },
  { id:'D10', category:'pabud', nameSv:'Körfält för fordon i linjetrafik', nameAr:'مسار حافلات', descSv:"Märket anger körfält eller körbana reserverad för fordon i linjetrafik m.fl.", descAr:"مسار مخصص للحافلات ومركبات النقل العام.", svg: IMG('assets/signs/D10.png') },

  // Category E
  { id:'E1', category:'anvisning', nameSv:'Motorväg', nameAr:'طريق سريع (Motorväg)', descSv:"Märket anger att vägen är en motorväg.", descAr:"تشير إلى بداية الطريق السريع وقواعده الخاصة.", svg: IMG('assets/signs/E1.png') },
  { id:'E3', category:'anvisning', nameSv:'Motortrafikled', nameAr:'طريق سيارات (Motortrafikled)', descSv:"Märket anger att vägen är en motortrafikled.", descAr:"تشير إلى بداية طريق مخصص للسيارات فقط.", svg: IMG('assets/signs/E3.png') },
  { id:'E5', category:'anvisning', nameSv:'Tättbebyggt område', nameAr:'منطقة مبنية', descSv:"Märket anger tättbebyggt områdes början.", descAr:"تشير إلى الدخول لمنطقة ذات كثافة سكانية (تجمع سكاني).", svg: IMG('assets/signs/E5.png') },
  { id:'E11', category:'anvisning', nameSv:'Rekommenderad lägre hastighet', nameAr:'سرعة منخفضة موصى بها', descSv:"Märket anger en vägsträcka där det är lämpligt att färdas med lägre hastighet än den högsta tillåtna.", descAr:"ينصح بالقيادة بسرعة أقل من المحددة لظروف معينة.", svg: IMG('assets/signs/E11.png') },
  { id:'E16', category:'anvisning', nameSv:'Enkelriktad trafik', nameAr:'طريق ذو اتجاه واحد', descSv:"Märket anger att fordonstrafiken på vägen är enkelriktad i pilens riktning.", descAr:"تشير إلى أن حركة المرور في هذا الطريق تسير في اتجاه واحد فقط.", svg: IMG('assets/signs/E16.png') },
  { id:'E19', category:'anvisning', nameSv:'Parkering', nameAr:'موقف سيارات', descSv:"Märket anger att parkering är tillåten på en parkeringsplats eller sträcka.", descAr:"تشير إلى أن الوقوف مسموح في هذا المكان.", svg: IMG('assets/signs/E19.png') },

  // Category M
  { id:'M1', category:'vagmark', nameSv:'Mittlinje eller körfältslinje', nameAr:'خط وسط', descSv:"Mittlinje anger gränsen mellan körfält avsedda för färd i motsatta färdriktningar.", descAr:"يفصل بين مسارات حركة المرور في الاتجاهات المختلفة.", svg: IMG('assets/signs/M1.png') },
  { id:'M8', category:'vagmark', nameSv:'Heldragen linje', nameAr:'خط متصل', descSv:"Markeringen anger att fordon inte får föras över linjen.", descAr:"يمنع تجاوز هذا الخط أو القيادة فوقه.", svg: IMG('assets/signs/M8.png') },
  { id:'M13', category:'vagmark', nameSv:'Stopplinje', nameAr:'خط قف', descSv:"Markeringen anger var ett fordon ska stannas enligt ett vägmärke eller trafiksignal.", descAr:"يحدد المكان الذي يجب التوقف عنده عند إشارة قف.", svg: IMG('assets/signs/M13.png') },
  { id:'M14', category:'vagmark', nameSv:'Väjningslinje', nameAr:'خط إفساح الطريق', descSv:"Markeringen anger den linje som fordon inte bör passera när föraren iakttar väjningsplikt.", descAr:"يحدد المكان الذي يجب التوقف عنده لإفساح الطريق.", svg: IMG('assets/signs/M14.png') },

  // Category X
  { id:'X1', category:'andra', nameSv:'Markeringspil', nameAr:'سهم توجيه', descSv:"Anordningen anger att fordonsförare måste svänga kraftigt i pilens riktning.", descAr:"يشير إلى وجوب الانعطاف بشكل حاد في اتجاه السهم.", svg: IMG('assets/signs/X1.png') },
  { id:'X2', category:'andra', nameSv:'Markeringsskärm för hinder', nameAr:'لوحة تحذير من عائق', descSv:"Anordningen anger att framkomligheten på vägen är inskränkt på grund av ett hinder.", descAr:"تشير إلى وجود عائق يقلل من مساحة الطريق.", svg: IMG('assets/signs/X2.png') },
  { id:'X7', category:'andra', nameSv:'Vägbom', nameAr:'حاجز طريق', descSv:"Anordningen anger att en väg är helt eller delvis avstängd för trafik.", descAr:"يشير إلى أن الطريق مغلق كلياً أو جزئياً.", svg: IMG('assets/signs/X7.png') },

];

if (typeof module !== 'undefined') module.exports = { CATEGORIES, SIGNS };
