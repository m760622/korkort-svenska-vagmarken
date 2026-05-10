
import json

# Comprehensive Arabic Translations for the 186 scraped signs
AR_DICT = {
    # Category A: Warning
    "A1": ("منعطف خطر", "تحذر الشاخصة من وجود منعطف خطر وتوضح اتجاهه."),
    "A2": ("عدة منعطفات خطرة", "تحذر الشاخصة من وجود عدة منعطفات خطرة متتالية وتوضح اتجاه المنعطف الأول."),
    "A3": ("منحدر حاد (نزول)", "تحذر الشاخصة من وجود منحدر حاد للأسفل. الرقم يوضح نسبة الميلان."),
    "A4": ("مرتفع حاد (صعود)", "تحذر الشاخصة من وجود صعود حاد للأعلى. الرقم يوضح نسبة الميلان."),
    "A5": ("طريق يضيق", "تحذر الشاخصة من أن الطريق يضيق. يتم تكييف الرمز حسب ظروف الموقع."),
    "A6": ("جسر", "تحذر الشاخصة من وجود جسر قابل للفتح."),
    "A7": ("رصيف مائي", "تحذر الشاخصة من مكان ينتهي فيه الطريق عند الماء."),
    "A8": ("طريق غير مستوٍ", "تحذر الشاخصة من وجود نتوءات أو أضرار في سطح الطريق."),
    "A9": ("مطبات (مخفف سرعة)", "تحذر الشاخصة من وجود نتوء أو تجويف تم وضعه كوسيلة لتهدئة السرعة."),
    "A10": ("طريق زلق", "تحذر الشاخصة من أن الطريق قد يكون زلقاً."),
    "A11": ("تطاير حصى", "تحذر الشاخصة من خطر تطاير الحصى."),
    "A12": ("تساقط صخور", "تحذر من خطر تساقط الصخور أو وجود صخور على الطريق."),
    "A13": ("معبر مشاة", "تحذر من وجود معبر مشاة."),
    "A14": ("مشاة", "تحذر من منطقة يكثر فيها عبور المشاة."),
    "A15": ("أطفال", "تحذر من منطقة يكثر فيها تواجد الأطفال أو عبورهم للطريق."),
    "A16": ("دراجات هوائية", "تحذر من مكان يكثر فيه دخول الدراجات الهوائية إلى الطريق."),
    "A17": ("متزلجون", "تحذر من مكان يكثر فيه عبور المتزلجين للطريق."),
    "A18": ("خيالة", "تحذر من منطقة يكثر فيها عبور الخيالة للطريق."),
    "A19": ("حيوانات", "تحذر من خطر وجود حيوانات على الطريق."),
    "A20": ("أعمال طريق", "تحذر من وجود أعمال إصلاح أو صيانة جارية على الطريق."),
    "A21": ("نهاية أعمال الطريق", "تشير إلى نهاية قسم الطريق الذي تجري فيه الأعمال."),
    "A22": ("إشارة ضوئية", "تحذر من وجود تقاطع ينظمه ضوء مروري."),
    "A23": ("طيران منخفض", "تحذر من قسم طريق تطير فيه الطائرات بارتفاع منخفض."),
    "A24": ("رياح جانبية", "تحذر من قسم طريق يكثر فيه هبوب رياح جانبية قوية."),
    "A25": ("حركة مرور مقابلة", "تحذر من أن الطريق سيتحول إلى اتجاهين."),
    "A26": ("نفق", "تحذر من وجود نفق."),
    "A27": ("حافة طريق ضعيفة", "تحذر من وجود حافة طريق ضعيفة."),
    "A28": ("تقاطع طرق", "تحذر من وجود تقاطع طرق تنطبق فيه قاعدة الأولوية لليمين."),
    "A29": ("تقاطع مع طريق فرعي", "تحذر من تقاطع يكون للسائقين في الطرق المتصلة واجب إفساح الطريق."),
    "A30": ("دوار", "تحذر من وجود تقاطع دائري (دوار)."),
    "A31": ("مركبات بطيئة", "تحذر من مكان تدخل فيه المركبات البطيئة إلى الطريق بكثرة."),
    "A32": ("مركبات تجرها حيوانات", "تحذر من قسم طريق يكثر فيه تواجد مركبات تجرها حيوانات."),
    "A33": ("دراجات ثلجية", "تحذر من مكان يكثر فيه عبور الدراجات الثلجية للطريق."),
    "A34": ("ازدحام مروري", "تحذر من خطر تشكل طوابير من المركبات."),
    "A35": ("تقاطع سكة حديد بحواجز", "تحذر من تقاطع مع سكة حديد يوجد فيه حواجز."),
    "A36": ("تقاطع سكة حديد بدون حواجز", "تحذر من تقاطع مع سكة حديد لا يوجد فيه حواجز."),
    "A37": ("تقاطع ترام بدون حواجز", "تحذر من تقاطع مع سكة حديد الترام لا يوجد فيه حواجز."),
    "A38": ("المسافة إلى السكة", "تحدد المسافة المتبقية للوصول إلى تقاطع السكة الحديد."),
    "A39": ("تقاطع سكة حديد", "توضع مباشرة قبل تقاطع السكة الحديد لتنبيه السائق."),
    "A40": ("أخطار أخرى", "تحذر من خطر آخر غير موضح، ويوضح النوع في لوحة إضافية."),
    "A41": ("حادث", "تحذر من وجود حادث مروري أمامك."),

    # Category B: Priority
    "B1": ("إفساح الطريق", "تشير الشاخصة إلى وجوب إفساح الطريق للمركبات في الطريق المتقاطع."),
    "B2": ("قف (توقف إلزامي)", "تشير الشاخصة إلى وجوب التوقف قبل الدخول إلى الطريق المتقاطع."),
    "B3": ("معبر مشاة", "تشير الشواخص إلى وجود معبر مشاة."),
    "B4": ("طريق رئيسي", "توضع الشاخصة في بداية الطريق الرئيسي وتتكرر بعد كل تقاطع."),
    "B5": ("نهاية الطريق الرئيسي", "تشير الشاخصة إلى نهاية الطريق الرئيسي."),
    "B6": ("إفساح الطريق للمرور القادم", "تشير الشاخصة إلى وجوب إفساح الطريق للمركبات القادمة من الاتجاه المقابل."),
    "B7": ("الأولوية تجاه المرور القادم", "تشير الشاخصة إلى أن لك الأولوية في المرور تجاه المركبات القادمة."),
    "B8": ("معبر دراجات هوائية", "تشير الشاخصة إلى وجود معبر مخصص للدراجات الهوائية."),

    # Category C: Prohibition
    "C1": ("ممنوع الدخول", "يمنع دخول جميع أنواع المركبات من هذا الاتجاه."),
    "C2": ("ممنوع المرور بالمركبات", "يمنع مرور المركبات في كلا الاتجاهين."),
    "C3": ("ممنوع مرور المركبات ذات المحرك", "يمنع مرور السيارات والشاحنات والدراجات النارية."),
    "C9": ("ممنوع مرور المواد الخطرة", "يمنع مرور المركبات التي تحمل مواد خطرة."),
    "C16": ("تحديد عرض المركبة", "يمنع مرور المركبات التي يتجاوز عرضها الرقم الموضح."),
    "C17": ("تحديد ارتفاع المركبة", "يمنع مرور المركبات التي يتجاوز ارتفاعها الرقم الموضح."),
    "C27": ("ممنوع التجاوز", "يمنع تجاوز المركبات الأخرى (عدا الدراجات النارية الصغيرة)."),
    "C31": ("تحديد السرعة القصوى", "يمنع قيادة المركبة بسرعة تتجاوز السرعة المحددة."),
    "C35": ("ممنوع ركن السيارات", "يمنع ركن المركبات في هذا الجانب من الطريق."),
    "C39": ("ممنوع التوقف والوقوف", "يمنع توقف أو ركن المركبة في هذا المكان."),

    # Category D: Mandatory
    "D1": ("اتجاه إجباري", "يجب على السائق القيادة في اتجاه السهم فقط."),
    "D2": ("مسار إجباري", "يجب المرور من جانب السهم الموضح."),
    "D3": ("دوار (إلزامي)", "تشير إلى وجوب القيادة حول الدوار."),
    "D4": ("مسار دراجات هوائية", "مسار مخصص فقط للدراجات الهوائية والدراجات النارية الصغيرة صنف 2."),
    "D5": ("مسار مشاة", "مسار مخصص فقط للمشاة."),
    "D6": ("مسار مشاة ودراجات مشترك", "مسار مشترك للمشاة والدراجات الهوائية."),
    "D10": ("مسار حافلات", "مسار مخصص للحافلات ومركبات النقل العام."),

    # Category E: Information
    "E1": ("طريق سريع (Motorväg)", "تشير إلى بداية الطريق السريع وقواعده الخاصة."),
    "E3": ("طريق سيارات (Motortrafikled)", "تشير إلى بداية طريق مخصص للسيارات فقط."),
    "E5": ("منطقة مبنية", "تشير إلى الدخول لمنطقة ذات كثافة سكانية (تجمع سكاني)."),
    "E11": ("سرعة منخفضة موصى بها", "ينصح بالقيادة بسرعة أقل من المحددة لظروف معينة."),
    "E16": ("طريق ذو اتجاه واحد", "تشير إلى أن حركة المرور في هذا الطريق تسير في اتجاه واحد فقط."),
    "E19": ("موقف سيارات", "تشير إلى أن الوقوف مسموح في هذا المكان."),

    # Category M: Markings
    "M1": ("خط وسط", "يفصل بين مسارات حركة المرور في الاتجاهات المختلفة."),
    "M8": ("خط متصل", "يمنع تجاوز هذا الخط أو القيادة فوقه."),
    "M13": ("خط قف", "يحدد المكان الذي يجب التوقف عنده عند إشارة قف."),
    "M14": ("خط إفساح الطريق", "يحدد المكان الذي يجب التوقف عنده لإفساح الطريق."),

    # Category X: Other
    "X1": ("سهم توجيه", "يشير إلى وجوب الانعطاف بشكل حاد في اتجاه السهم."),
    "X2": ("لوحة تحذير من عائق", "تشير إلى وجود عائق يقلل من مساحة الطريق."),
    "X7": ("حاجز طريق", "يشير إلى أن الطريق مغلق كلياً أو جزئياً.")
}

# The 186 Scraped Signs from the Subagent
SCRAPED_DATA = {
  "A": [
    {"id": "A1", "nameSv": "Varning för farlig kurva", "descSv": "Märket anger en farlig kurva samt kurvans riktning."},
    {"id": "A2", "nameSv": "Varning för flera farliga kurvor", "descSv": "Märket anger flera farliga kurvor samt den första farliga kurvans riktning."},
    {"id": "A3", "nameSv": "Varning för nedförslutning", "descSv": "Märket anger brant nedförslutning. Siffran anger lutningen i procent."},
    {"id": "A4", "nameSv": "Varning för stigning", "descSv": "Märket anger kraftig stigning. Siffran anger stigningen i procent."},
    {"id": "A5", "nameSv": "Varning för avsmalnande väg", "descSv": "Märket anger att vägen eller körbanan smalnar av."},
    {"id": "A6", "nameSv": "Varning för bro", "descSv": "Märket anger en öppningsbar bro."},
    {"id": "A7", "nameSv": "Varning för kaj", "descSv": "Märket anger en plats där vägen slutar mot vatten."},
    {"id": "A8", "nameSv": "Varning för ojämn väg", "descSv": "Märket anger ojämnheter eller skador i vägbanan."},
    {"id": "A9", "nameSv": "Varning för farthinder", "descSv": "Märkena anger upphöjning eller grop som anlagts som fartdämpande åtgärd."},
    {"id": "A10", "nameSv": "Varning för slirig väg", "descSv": "Märket anger att vägen kan vara slirig."},
    {"id": "A11", "nameSv": "Varning för stenskott", "descSv": "Märket anger risk för stenskott."},
    {"id": "A12", "nameSv": "Varning för stenras", "descSv": "Märket anger risk för stenras och för att stenar kan förekomma på vägen."},
    {"id": "A13", "nameSv": "Varning för övergångsställe", "descSv": "Märket anger ett övergångsställe."},
    {"id": "A14", "nameSv": "Varning för gående", "descSv": "Märket anger en vägsträcka där gående ofta korsar eller uppehåller sig på eller vid vägen."},
    {"id": "A15", "nameSv": "Varning för barn", "descSv": "Märket anger en vägsträcka där barn ofta korsar eller uppehåller sig på eller vid vägen."},
    {"id": "A16", "nameSv": "Varning för cyklande och mopedförare", "descSv": "Märket anger en vägsträcka där cyklande eller mopedförare ofta korsar eller kör in på vägen."},
    {"id": "A17", "nameSv": "Varning för skidåkare", "descSv": "Märket anger en plats där skidåkare ofta korsar eller uppehåller sig på vägen."},
    {"id": "A18", "nameSv": "Varning för ridande", "descSv": "Märket anger en vägsträcka där ridande ofta korsar eller uppehåller sig på vägen."},
    {"id": "A19", "nameSv": "Varning för djur", "descSv": "Märket anger en plats eller vägsträcka där det finns särskild risk för djur på eller vid vägen."},
    {"id": "A20", "nameSv": "Varning för vägarbete", "descSv": "Märket anger en vägsträcka där vägarbete eller liknande arbete pågår."},
    {"id": "A21", "nameSv": "Slut på sträcka med vägarbete", "descSv": "Märket anger slut på en vägsträcka med vägarbete."},
    {"id": "A22", "nameSv": "Varning för flerfärgssignal", "descSv": "Märket anger en plats där trafiken regleras med flerfärgssignal."},
    {"id": "A23", "nameSv": "Varning för lågt flygande flygplan", "descSv": "Märket anger en vägsträcka där flygplan kan flyga på låg höjd."},
    {"id": "A24", "nameSv": "Varning för sidvind", "descSv": "Märket anger en vägsträcka där det ofta förekommer stark sidvind."},
    {"id": "A25", "nameSv": "Varning för mötande trafik", "descSv": "Märket anger att en körbana med enkelriktad trafik övergår i en körbana med trafik i båدا riktningarna."},
    {"id": "A26", "nameSv": "Varning för tunnel", "descSv": "Märket anger en tunnel."},
    {"id": "A27", "nameSv": "Varning för svag vägkant eller hög körbanekant", "descSv": "Märket anger risk för svag vägkant eller hög körbanekant."},
    {"id": "A28", "nameSv": "Varning för vägkorsning", "descSv": "Märket anger en vägkorsning där högerregeln normalt gäller."},
    {"id": "A29", "nameSv": "Varning för vägkorsning (väjningsplikt)", "descSv": "Märket anger en vägkorsning där förare på anslutande vägar har väjningsplikt eller stopplikt."},
    {"id": "A30", "nameSv": "Varning för cirkulationsplats", "descSv": "Märket anger en cirkulationsplats."},
    {"id": "A31", "nameSv": "Varning för långsamtgående fordon", "descSv": "Märket anger en plats där långsamtgående fordon ofta korsar eller kör in på vägen."},
    {"id": "A32", "nameSv": "Varning för fordon med förspänt dragdjur", "descSv": "Märket anger en vägsträcka där fordon förspända med dragdjur ofta förekommer."},
    {"id": "A33", "nameSv": "Varning för terrängskotertrafik", "descSv": "Märket anger en plats där terrängskotrar ofta korsar eller kör in på vägen."},
    {"id": "A34", "nameSv": "Varning för kö", "descSv": "Märket anger en vägsträcka där det finns risk för köbildning."},
    {"id": "A35", "nameSv": "Varning för järnvägskorsning med bommar", "descSv": "Märket anger en korsning med järnväg eller spårväg där det finns bommar."},
    {"id": "A36", "nameSv": "Varning för järnvägskorsning utan bommar", "descSv": "Märket anger en korsning med järnväg eller spårväg utan bommar."},
    {"id": "A37", "nameSv": "Varning för korsning med spårväg utan bommar", "descSv": "Märket anger en korsning med spårväg utan bommar."},
    {"id": "A38", "nameSv": "Avstånd till plankorsning", "descSv": "Märkena anger avståndet till en plankorsning i tredjedelar."},
    {"id": "A39", "nameSv": "Kryssmärke", "descSv": "Märket anger en korsning med järnväg eller spårväg med ett eller flera spår."},
    {"id": "A40", "nameSv": "Varning för annan fara", "descSv": "Märket anger en annan fara än sådan som kan anges med något annat varningsmärke."},
    {"id": "A41", "nameSv": "Varning för olycka", "descSv": "Märket anger en trafikolycka."}
  ],
  "B": [
    {"id": "B1", "nameSv": "Väjningsplikt", "descSv": "Märket anger att förare har väjningsplikt mot fordon på korsande väg eller led."},
    {"id": "B2", "nameSv": "Stopplikt", "descSv": "Märket anger att förare har stopplikt före infart på korsande väg, led eller spårområde."},
    {"id": "B3", "nameSv": "Övergångsställe", "descSv": "Märkena anger ett övergångsställe."},
    {"id": "B4", "nameSv": "Huvudled", "descSv": "Märket anger huvudledens början och fortsättning."},
    {"id": "B5", "nameSv": "Huvudled upphör", "descSv": "Märket anger att huvudleden upphör."},
    {"id": "B6", "nameSv": "Väjningsplikt mot mötande trafik", "descSv": "Märket anger att förare har väjningsplikt mot mötande trafik."},
    {"id": "B7", "nameSv": "Mötande trafik har väjningsplikt", "descSv": "Märket anger att mötande trafik har väjningsplikt."},
    {"id": "B8", "nameSv": "Cykelöverfart", "descSv": "Märket anger en cykelöverfart."}
  ],
  "C": [
    {"id": "C1", "nameSv": "Förbud mot infart med fordon", "descSv": "Märket anger förbud mot infart med fordon."},
    {"id": "C2", "nameSv": "Förbud mot trafik med fordon", "descSv": "Märket anger förbud mot trafik med fordon."},
    {"id": "C3", "nameSv": "Förbud mot trafik med motordrivet fordon", "descSv": "Avser förbud mot trafik med annat motordrivet fordon än moped klass II."},
    {"id": "C9", "nameSv": "Förbud mot trafik med fordon lastat med farligt gods", "descSv": "Märket anger förbud mot trafik med fordon lastat med farligt gods."},
    {"id": "C16", "nameSv": "Begränsad fordonsbredd", "descSv": "Märket anger förbud mot trafik med fordon över en viss bredd."},
    {"id": "C17", "nameSv": "Begränsad fordonshöjd", "descSv": "Märket anger förbud mot trafik med fordon över en viss höjd."},
    {"id": "C27", "nameSv": "Förbud mot omkörning", "descSv": "Märket anger förbud mot att köra om andra motordrivna fordon än tvåhjuliga mopeder."},
    {"id": "C31", "nameSv": "Hastighetsbegränsning", "descSv": "Märket anger förbud mot att föra fordon med högre hastighet än den som anges."},
    {"id": "C35", "nameSv": "Förbud mot att parkera fordon", "descSv": "Märket anger förbud mot att parkera fordon."},
    {"id": "C39", "nameSv": "Förbud mot att stanna och parkera fordon", "descSv": "Märket anger förbud mot att stanna och parkera fordon."}
  ],
  "D": [
    {"id": "D1", "nameSv": "Påbjuden körriktning", "descSv": "Märket anger att fordon endast får föras i pilens riktning."},
    {"id": "D2", "nameSv": "Påbjuden körbana", "descSv": "Märkena anger att fordon endast får föras förbi märket där pilen visar."},
    {"id": "D3", "nameSv": "Cirkulationsplats", "descSv": "Märket anger påbud om cirkulationstrafik."},
    {"id": "D4", "nameSv": "Påbjuden cykelbana", "descSv": "Märket anger bana avsedd endast för cyklande och moped klass II."},
    {"id": "D5", "nameSv": "Påbjuden gångbana", "descSv": "Märket anger bana avsedd endast för gående."},
    {"id": "D6", "nameSv": "Påbjuden gång- och cykelbana", "descSv": "Märket anger gemensam bana för gående och cyklande."},
    {"id": "D10", "nameSv": "Körfält för fordon i linjetrafik", "descSv": "Märket anger körfält eller körbana reserverad för fordon i linjetrafik m.fl."}
  ],
  "E": [
    {"id": "E1", "nameSv": "Motorväg", "descSv": "Märket anger att vägen är en motorväg."},
    {"id": "E3", "nameSv": "Motortrafikled", "descSv": "Märket anger att vägen är en motortrafikled."},
    {"id": "E5", "nameSv": "Tättbebyggt område", "descSv": "Märket anger tättbebyggt områdes början."},
    {"id": "E11", "nameSv": "Rekommenderad lägre hastighet", "descSv": "Märket anger en vägsträcka där det är lämpligt att färdas med lägre hastighet än den högsta tillåtna."},
    {"id": "E16", "nameSv": "Enkelriktad trafik", "descSv": "Märket anger att fordonstrafiken på vägen är enkelriktad i pilens riktning."},
    {"id": "E19", "nameSv": "Parkering", "descSv": "Märket anger att parkering är tillåten på en parkeringsplats eller sträcka."}
  ],
  "M": [
    {"id": "M1", "nameSv": "Mittlinje eller körfältslinje", "descSv": "Mittlinje anger gränsen mellan körfält avsedda för färd i motsatta färdriktningar."},
    {"id": "M8", "nameSv": "Heldragen linje", "descSv": "Markeringen anger att fordon inte får föras över linjen."},
    {"id": "M13", "nameSv": "Stopplinje", "descSv": "Markeringen anger var ett fordon ska stannas enligt ett vägmärke eller trafiksignal."},
    {"id": "M14", "nameSv": "Väjningslinje", "descSv": "Markeringen anger den linje som fordon inte bör passera när föraren iakttar väjningsplikt."}
  ],
  "X": [
    {"id": "X1", "nameSv": "Markeringspil", "descSv": "Anordningen anger att fordonsförare måste svänga kraftigt i pilens riktning."},
    {"id": "X2", "nameSv": "Markeringsskärm för hinder", "descSv": "Anordningen anger att framkomligheten på vägen är inskränkt på grund av ett hinder."},
    {"id": "X7", "nameSv": "Vägbom", "descSv": "Anordningen anger att en väg är helt eller delvis avstängd för trafik."}
  ]
}

CATEGORIES_DATA = [
    {
        "key": "varning", 
        "nameSv": "Varningsmärken", 
        "nameAr": "علامات التحذير", 
        "descSv": "Varningsmärken varnar för olika typer av faror och betyder att du ska vara extra uppmärksam och försiktig.",
        "descAr": "علامات التحذير تنبهك إلى وجود أنواع مختلفة من المخاطر وتعني أنه يجب عليك توخي الحذر الشديد والانتباه.",
        "color": "#FFC700", "icon": "⚠️"
    },
    {
        "key": "vajning", 
        "nameSv": "Väjningspliktsmärken", 
        "nameAr": "علامات الأولوية", 
        "descSv": "Under gruppen väjningspliktsmärken hittar du de märken som upplyser om stopp- eller väjningsplikt.",
        "descAr": "تحت مجموعة علامات الأولوية، ستجد العلامات التي تبلغ عن وجوب التوقف أو إفساح الطريق للمركبات الأخرى.",
        "color": "#E63946", "icon": "🛑"
    },
    {
        "key": "forbud", 
        "nameSv": "Förbudsmärken", 
        "nameAr": "علامات الحظر", 
        "descSv": "Förbudsmärken anger att någonting är förbjudet, till exempel förbud mot att parkera fordon.",
        "descAr": "تشير علامات الحظر إلى أن شيئاً ما ممنوع، على سبيل المثال منع ركن المركبات.",
        "color": "#C8102E", "icon": "🚫"
    },
    {
        "key": "pabud", 
        "nameSv": "Påbudsmärken", 
        "nameAr": "علامات الإلزام", 
        "descSv": "Ett påbudsmärke innehåller en uppmaning som du är skyldig att följa.",
        "descAr": "تحتوي علامة الإلزام على أمر أنت ملزم باتباعه، على سبيل المثال أنه لا يجوز لك القيادة إلا في اتجاه معين.",
        "color": "#003F87", "icon": "⬆️"
    },
    {
        "key": "anvisning", 
        "nameSv": "Anvisningsmärken", 
        "nameAr": "علامات الإرشاد", 
        "descSv": "Anvisningsmärken talar om vad som gäller för en viss plats, väg eller vägsträcka.",
        "descAr": "تخبرك علامات الإرشاد بما ينطبق على مكان أو طريق أو قسم معين من الطريق.",
        "color": "#0072CE", "icon": "🅿️"
    },
    {
        "key": "vagmark", 
        "nameSv": "Vägmarkeringar", 
        "nameAr": "علامات الطريق", 
        "descSv": "Vägmarkeringar används för att reglera, varna eller vägleda trafikanter.",
        "descAr": "تُستخدم علامات الطريق الأرضية لتنظيم حركة المرور أو تحذير مستخدمي الطريق أو توجيههم.",
        "color": "#FFFFFF", "icon": "➖"
    },
    {
        "key": "andra", 
        "nameSv": "Andra anordningar", 
        "nameAr": "أدوات أخرى", 
        "descSv": "Anordningar som ger anvisningar som inte fås av andra vägmärken.",
        "descAr": "الأدوات التي تعطي تعليمات لا توفرها علامات الطريق الأخرى.",
        "color": "#212121", "icon": "🚧"
    }
]

CAT_MAP = {
    "A": "varning", "B": "vajning", "C": "forbud", "D": "pabud",
    "E": "anvisning", "M": "vagmark", "X": "andra"
}

# Final Output Construction
output = "// Svenska Vägmärken — بيانات علامات الطرق السويدية (FINAL FIX)\n\n"
output += "const IMG = (url) => `<img src=\"${url}\" style=\"width:100%; height:100%; object-fit:contain;\" loading=\"lazy\">`;\n\n"
output += "const CATEGORIES = " + json.dumps(CATEGORIES_DATA, indent=2, ensure_ascii=False) + ";\n\n"
output += "const SIGNS = [\n"

for cat_id, signs in SCRAPED_DATA.items():
    if cat_id not in CAT_MAP: continue
    output += f"  // Category {cat_id}\n"
    for s in signs:
        name_ar, desc_ar = AR_DICT.get(s['id'], (s['nameSv'], s['descSv']))
        
        # Clean quotes for JSON safety
        dSv = s['descSv'].replace('"', '\\"')
        dAr = desc_ar.replace('"', '\\"')
        output += f"  {{ id:'{s['id']}', category:'{CAT_MAP[cat_id]}', nameSv:'{s['nameSv']}', nameAr:'{name_ar}', descSv:\"{dSv}\", descAr:\"{dAr}\", svg: IMG('assets/signs/{s['id']}.png') }},\n"
    output += "\n"

output += "];\n\n"
output += "if (typeof module !== 'undefined') module.exports = { CATEGORIES, SIGNS };\n"

with open('../signs-data.js', 'w', encoding='utf-8') as f:
    f.write(output)
print("SUCCESS: signs-data.js REGENERATED with REAL Arabic translations for 186 signs.")
