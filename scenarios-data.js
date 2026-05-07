const SCENARIOS = [
  {
    id: "sc1",
    img: "assets/scenarios/sc1.png",
    questionAr: "تصل إلى تقاطع لا توجد فيه لوحات مرورية أو إشارات ضوئية. من له الأولوية؟",
    questionSv: "Du kommer till en korsning där det inte finns några vägmärken eller trafiksignaler. Vem har företräde?",
    optionsAr: [
      "السيارة القادمة من اليسار.",
      "السيارة القادمة من اليمين (قاعدة اليمين).",
      "السيارة الأسرع.",
      "السيارة التي تسير في الطريق الأكبر."
    ],
    optionsSv: [
      "Bilen som kommer från vänster.",
      "Bilen som kommer från höger (högerregeln).",
      "Den snabbaste bilen.",
      "Bilen på den största vägen."
    ],
    correctIdx: 1
  },
  {
    id: "sc2",
    img: "assets/scenarios/sc2.png",
    questionAr: "أنت تمر بهذه العلامة. كيف يجب أن تتغير قيادتك؟",
    questionSv: "Du passerar detta märke. Hur ska din körning ändras?",
    optionsAr: [
      "لا شيء يتغير، استمر بنفس السرعة.",
      "يجب أن ألتزم بقواعد المرور داخل المدن، وتصبح السرعة القصوى 50 كم/س ما لم يشار لغير ذلك.",
      "يمكنني زيادة السرعة الآن.",
      "ممنوع استخدام السيارات في هذه المنطقة."
    ],
    optionsSv: [
      "Inget ändras, fortsätt i samma hastighet.",
      "Jag måste följa tätortsregler, max 50 km/h gäller om inget annat anges.",
      "Jag kan öka hastigheten nu.",
      "Biltrafik är förbjuden i detta område."
    ],
    correctIdx: 1
  },
  {
    id: "sc3",
    img: "assets/scenarios/sc3.png",
    questionAr: "الشارع يضيق أمامك وتوجد هذه العلامة. سيارة قادمة من الجهة المعاكسة. من له الأولوية؟",
    questionSv: "Vägen smalnar av och detta märke finns uppsatt. En mötande bil kommer. Vem har företräde?",
    optionsAr: [
      "لدي الأولوية لأنني على اليمين.",
      "لدي الأولوية، يجب على السيارة الأخرى التوقف.",
      "ليس لدي الأولوية، يجب أن أفسح المجال للسيارة القادمة.",
      "الأولوية للمركبة الأكبر حجماً."
    ],
    optionsSv: [
      "Jag har företräde eftersom jag är till höger.",
      "Jag har företräde, den andra bilen måste stanna.",
      "Jag har inte företräde, jag måste lämna företräde.",
      "Störst fordon kör först."
    ],
    correctIdx: 2
  },
  {
    id: "sc4",
    img: "assets/scenarios/sc4.png",
    questionAr: "ترى هذه العلامة بجوار مدرسة. ما هي القاعدة؟",
    questionSv: "Du ser detta märke bredvid en skola. Vilken regel gäller?",
    optionsAr: [
      "السرعة الموصى بها هي 30، ولكن يمكنني القيادة حتى 50.",
      "يُمنع منعاً باتاً تجاوز سرعة 30 كم/س.",
      "الحد الأدنى للسرعة هو 30 كم/س.",
      "ينتهي حد السرعة 30 هنا."
    ],
    optionsSv: [
      "Rekommenderad hastighet är 30, men jag får köra i 50.",
      "Det är strängt förbjudet att köra fortare än 30 km/h.",
      "Lägsta tillåtna hastighet är 30 km/h.",
      "Hastighetsbegränsningen 30 upphör här."
    ],
    correctIdx: 1
  },
  {
    id: "sc5",
    img: "assets/scenarios/sc5.png",
    questionAr: "أنت تقود سيارتك وتدخل شارعاً به هذه العلامة (شارع مشاة). كيف تتصرف؟",
    questionSv: "Du kör bil och kör in på en gata med detta märke (gågata). Hur agerar du?",
    optionsAr: [
      "يجب أن أقود بسرعة المشي فقط وأعطي الأولوية للمشاة.",
      "يمكنني القيادة بسرعة 30 كم/س.",
      "يجب أن أتوقف تماماً ولا أُكمل القيادة.",
      "يمكنني القيادة كالمعتاد ولكن بحذر."
    ],
    optionsSv: [
      "Jag får bara köra i gångfart och har väjningsplikt mot gående.",
      "Jag får köra i 30 km/h.",
      "Jag måste stanna helt och får inte köra vidare.",
      "Jag kan köra som vanligt fast försiktigt."
    ],
    correctIdx: 0
  },
  {
    id: "sc6",
    img: "assets/scenarios/sc6.png",
    questionAr: "أنت تقترب من هذا الدوار. سيارة موجودة بالفعل داخل الدوار قادمة من يسارك. من له الأولوية؟",
    questionSv: "Du närmar dig denna rondell. En bil befinner sig redan i rondellen och kommer från vänster. Vem har företräde?",
    optionsAr: [
      "لي الأولوية لأنني قادم من اليمين.",
      "الأولوية للسيارة الموجودة داخل الدوار.",
      "الأولوية لمن يصل أولاً لخط التوقف.",
      "يجب أن نتوقف نحن الاثنان."
    ],
    optionsSv: [
      "Jag har företräde eftersom jag kommer från höger.",
      "Bilen som befinner sig i rondellen har företräde.",
      "Den som kommer först till stopplinjen har företräde.",
      "Båda måste stanna."
    ],
    correctIdx: 1
  },
  {
    id: "sc7",
    img: "assets/scenarios/sc7.png",
    questionAr: "في هذا التقاطع لا توجد أي علامات مرورية أو إشارات ضوئية. سيارة قادمة من يمينك. ما هي القاعدة؟",
    questionSv: "I denna korsning finns inga märken eller signaler. En bil kommer från höger. Vilken regel gäller?",
    optionsAr: [
      "قاعدة اليمين (Högerregeln): يجب أن أفسح المجال للسيارة القادمة من اليمين.",
      "قاعدة الأولوية للقادم من الطريق الرئيسي.",
      "لي الأولوية لأنني أسير في خط مستقيم.",
      "السيارة القادمة من اليمين يجب أن تنتظر."
    ],
    optionsSv: [
      "Högerregeln: Jag muste lämna företräde åt bilen från höger.",
      "Huvudledsregeln gäller.",
      "Jag har företräde eftersom jag kör rakt fram.",
      "Bilen från höger måste vänta."
    ],
    correctIdx: 0
  },
  {
    id: "sc8",
    img: "assets/scenarios/sc8.png",
    questionAr: "تسمع صوت صفارة إنذار وترى سيارة إسعاف خلفك بأضواء زرقاء وامضة. ماذا تفعل؟",
    questionSv: "Du hör sirener och ser en ambulans bakom dig med blåljus. Vad gör du?",
    optionsAr: [
      "أزيد سرعتي لأبتعد عنها.",
      "أستمر بنفس السرعة، هي ستتجاوزني.",
      "أفسح المجال بأمان، وإذا لزم الأمر أتوقف على جانب الطريق.",
      "أستخدم أضواء التنبيه (فلشر) وأتوقف مكاني."
    ],
    optionsSv: [
      "Jag ökar farten för att komma undan.",
      "Jag fortsätter i samma fart, den kör om mig.",
      "Jag underlättar framkomsten på ett säkert sätt, stannar vid behov vid vägkanten.",
      "Jag sätter på varningsblinkers och stannar direkt."
    ],
    correctIdx: 2
  },
  {
    id: "sc9",
    img: "assets/scenarios/sc9.png",
    questionAr: "أنت تقترب من معبر مشاة (Zebra) وهناك شخص يستعد للعبور. ماذا تفعل؟",
    questionSv: "Du närmar dig ett övergångsställe och en person ska gå över. Vad gör du?",
    optionsAr: [
      "أستمر بالقيادة، المشاة يجب أن ينتظروا.",
      "أعطي تنبيهاً بالبوق (الزامور) لكي يسرعوا.",
      "أتوقف تماماً وأسمح للمشاة بالعبور.",
      "أزيد سرعتي لتجاوز المعبر قبل وصولهم."
    ],
    optionsSv: [
      "Jag kör vidare, gående måste vänta.",
      "Jag tutar så att de skyndar sig.",
      "Jag stannar helt och låter de gående passera.",
      "Jag ökar farten för att hinna förbi innan de går ut."
    ],
    correctIdx: 2
  },
  {
    id: "sc10",
    img: "assets/scenarios/sc10.png",
    questionAr: "ترى هذه العلامة في شارع ذو اتجاه واحد. هل يسمح لك بالدوران والعودة (U-turn)؟",
    questionSv: "Du ser detta märke på en enkelriktad gata. Får du göra en U-sväng?",
    optionsAr: [
      "نعم، إذا كان الشارع خالياً.",
      "لا، ممنوع الدوران في شارع ذو اتجاه واحد.",
      "نعم، ولكن فقط في حالات الطوارئ.",
      "نعم، ولكن ببطء شديد."
    ],
    optionsSv: [
      "Ja, om gatan är tom.",
      "Nej, det är förbjudet att vända på en enkelriktad gata.",
      "Ja, men bara i nödfall.",
      "Ja, men väldigt långsamt."
    ],
    correctIdx: 1
  },
  {
    id: "sc11",
    img: "assets/scenarios/sc11.png",
    questionAr: "أنت تقود في طريق ريفي (Landväg) وتوجد هذه العلامة. ما هي السرعة القصوى؟",
    questionSv: "Du kör på en landsväg och ser detta märke. Vad är högsta tillåtna hastighet?",
    optionsAr: [
      "70 كم/س.",
      "90 كم/س.",
      "50 كم/س.",
      "110 كم/س."
    ],
    optionsSv: [
      "70 km/h.",
      "90 km/h.",
      "50 km/h.",
      "110 km/h."
    ],
    correctIdx: 0
  },
  {
    id: "sc12",
    img: "assets/scenarios/sc12.png",
    questionAr: "هل يسمح لك بالانعطاف يميناً في هذا التقاطع؟",
    questionSv: "Är det tillåtet att svänga till höger i denna korsning?",
    optionsAr: [
      "نعم، إذا لم تكن هناك سيارات أخرى.",
      "لا، العلامة تمنع الانعطاف لليمين.",
      "نعم، ولكن فقط للشاحنات.",
      "نعم، ولكن ببطء."
    ],
    optionsSv: [
      "Ja, om det inte finns andra bilar.",
      "Nej, märket förbjuder högersväng.",
      "Ja, men bara för lastbilar.",
      "Ja, men sakta."
    ],
    correctIdx: 1
  },
  {
    id: "sc13",
    img: "assets/scenarios/sc13.png",
    questionAr: "ماذا تعني هذه العلامة الحمراء ذات الخط الأبيض الأفقي؟",
    questionSv: "Vad betyder detta märke (röd cirkel med vitt horisontellt streck)?",
    optionsAr: [
      "ممنوع الوقوف.",
      "ممنوع الدخول (اتجاه واحد معاكس).",
      "ممنوع التوقف.",
      "نهاية الطريق."
    ],
    optionsSv: [
      "Förbud mot att parkera.",
      "Förbud mot infart med fordon.",
      "Förbud mot att stanna.",
      "Vägen upphör."
    ],
    correctIdx: 1
  },
  {
    id: "sc14",
    img: "assets/scenarios/sc14.png",
    questionAr: "هل يسمح لك بتجاوز السيارة التي أمامك هنا؟",
    questionSv: "Får du köra om bilen framför dig här?",
    optionsAr: [
      "نعم، إذا كانت تسير ببطء.",
      "لا، لوجود خطين متصلين يمنعان التجاوز.",
      "نعم، ولكن فقط في النهار.",
      "نعم، إذا كان الطريق خالياً."
    ],
    optionsSv: [
      "Ja, om den kör sakta.",
      "Nej, de dubbla heldragna linjerna förbjuder omkörning.",
      "Ja, men bara på dagen.",
      "Ja, om vägen är fri."
    ],
    correctIdx: 1
  },
  {
    id: "sc15",
    img: "assets/scenarios/sc15.png",
    questionAr: "سيارة إسعاف تقترب منك من الخلف مع تشغيل الأضواء الزرقاء الوامضة. ماذا تفعل؟",
    questionSv: "En ambulans närmar sig bakifrån med blåljus påslagna. Vad gör du?",
    optionsAr: [
      "أسرع لأبتعد عنها.",
      "أتوقف فوراً في مكاني.",
      "أفسح لها الطريق فوراً دون تعريض حركة المرور للخطر، وإذا لزم الأمر أتوقف على الرصيف.",
      "أنتظر حتى تطلب مني عبر مكبر الصوت."
    ],
    optionsSv: [
      "Kör fortare för att komma undan.",
      "Stannar omedelbart där jag är.",
      "Underlättar framkomligheten genom att köra åt sidan eller stanna på lämplig plats.",
      "Väntar tills de ber mig flytta på mig."
    ],
    correctIdx: 2
  },
  {
    id: "sc16",
    img: "assets/scenarios/sc16.png",
    questionAr: "أنت تقترب من تقاطع متساوي الأضلاع لا توجد فيه إشارات أو لوحات. سيارة قادمة من اليمين. من له الأولوية؟",
    questionSv: "Du närmar dig en korsning utan skyltar eller signaler. En bil kommer från höger. Vem har företräde?",
    optionsAr: [
      "أنا، لأنني أسير في طريق مستقيم.",
      "السيارة القادمة من اليمين (قاعدة اليمين).",
      "السيارة الأكبر حجماً.",
      "من يطلق البوق أولاً."
    ],
    optionsSv: [
      "Jag, eftersom jag kör rakt fram.",
      "Bilen från höger (högerregeln).",
      "Det största fordonet.",
      "Den som tutar först."
    ],
    correctIdx: 1
  },
  {
    id: "sc17",
    img: "assets/scenarios/sc17.png",
    questionAr: "أنت تقترب من ممر مشاة (Övergångsställe) وهناك شخص يستعد للعبور. ماذا تفعل؟",
    questionSv: "Du närmar dig ett övergångsställe och en person ska gå över. Vad gör du?",
    optionsAr: [
      "أسرع قبل أن يبدأ بالعبور.",
      "أطلق البوق لتنبيهه.",
      "أخفض السرعة أو أتوقف لأظهر بوضوح أنني سأسمح له بالمرور.",
      "أستمر بالقيادة إذا كان هناك مجال."
    ],
    optionsSv: [
      "Kör fortare för att hinna före.",
      "Tutar för att varna.",
      "Saktar ner eller stannar för att visa att jag lämnar företräde.",
      "Kör vidare om det finns plats."
    ],
    correctIdx: 2
  },
  {
    id: "sc18",
    img: "assets/scenarios/sc18.png",
    questionAr: "أنت تقترب من تقاطع سكة حديد والأضواء الحمراء تومض. ماذا تفعل؟",
    questionSv: "Du närmar dig en plankorsning och de röda lamporna blinkar. Vad gör du?",
    optionsAr: [
      "أعبر بسرعة قبل وصول القطار.",
      "أتوقف فوراً قبل خط التوقف أو الحاجز.",
      "أعبر إذا كان الحاجز لا يزال مرفوعاً.",
      "أتوقف فقط إذا رأيت القطار."
    ],
    optionsSv: [
      "Kör över snabbt.",
      "Stannar före stopplinjen eller bommen.",
      "Kör över om bommen fortfarande är uppe.",
      "Stannar bara om jag ser tåget."
    ],
    correctIdx: 1
  },
  {
    id: "sc19",
    img: "assets/scenarios/sc19.png",
    questionAr: "حافلة (Bus) تعطي إشارة للخروج من محطة الحافلات في طريق سرعته 50 كم/س أو أقل. ماذا تفعل؟",
    questionSv: "En buss blinkar ut från en hållplats på en väg med hastighetsgräns 50 km/h eller lägre. Vad gör du?",
    optionsAr: [
      "أتجاوزها بسرعة.",
      "أطلق البوق لتنبيه السائق.",
      "أبطئ أو أتوقف للسماح لها بالخروج (الأولوية للحافلة).",
      "ليس لي علاقة بها."
    ],
    optionsSv: [
      "Kör om snabbt.",
      "Tutar.",
      "Saktar ner eller stannar för att släppa ut bussen (bussregeln).",
      "Bryr mig inte."
    ],
    correctIdx: 2
  },
  {
    id: "sc20",
    img: "assets/scenarios/sc20.png",
    questionAr: "أنت تقترب من تقاطع T (T-korsning) ولا توجد لوحات. سيارة قادمة من اليسار. ماذا تفعل؟",
    questionSv: "Du närmar dig en T-korsning utan skyltar. En bil kommer från vänster. Vad gör du?",
    optionsAr: [
      "أستمر بالقيادة، السيارة من اليسار يجب أن تتوقف لي.",
      "أتوقف تماماً، لأنني أنا من يواجه التقاطع.",
      "أستمر بحذر، قاعدة اليمين تعني أنني لي الأولوية على السيارة القادمة من اليسار.",
      "أعطي الأولوية للسيارة القادمة من اليسار دائماً."
    ],
    optionsSv: [
      "Jag kör vidare, bilen från vänster ska stanna.",
      "Jag stannar helt.",
      "Jag kör vidare med försiktighet, högerregeln ger mig företräde framför bilen från vänster.",
      "Jag lämnar alltid företräde till bilen från vänster."
    ],
    correctIdx: 2
  },
  {
    id: "sc21",
    img: "assets/scenarios/sc21.png",
    questionAr: "تتعطل سيارتك في طريق سريع (Motorway). أين يجب وضع مثلث التحذير؟",
    questionSv: "Din bil går sönder på en motorväg. Var ska du placera varningstriangeln?",
    optionsAr: [
      "خلف السيارة بـ 50-100 متر على الأقل.",
      "بجانب السيارة مباشرة.",
      "فوق سقف السيارة.",
      "خلف السيارة بـ 10 أمتار فقط."
    ],
    optionsSv: [
      "Minst 50-100 meter bakom bilen.",
      "Precis bredvid bilen.",
      "På bilens tak.",
      "Endast 10 meter bakom bilen."
    ],
    correctIdx: 0
  },
  {
    id: "sc22",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#263238"/> <!-- Night -->
      <rect x="0" y="70" width="200" height="50" fill="#212121"/>
      
      <!-- Car with Headlights -->
      <g transform="translate(40, 85)">
        <rect width="35" height="18" rx="4" fill="#1e88e5"/>
        <path d="M 35 4 L 100 -10 L 100 28 L 35 14" fill="yellow" opacity="0.2"/>
        <rect x="33" y="2" width="2" height="4" fill="#fff"/>
        <rect x="33" y="12" width="2" height="4" fill="#fff"/>
      </g>
      
      <!-- Pedestrian with Reflex -->
      <g transform="translate(150, 80)">
        <circle cx="5" cy="5" r="4" fill="#ffccbc"/>
        <rect x="2" y="10" width="6" height="15" fill="#333"/>
        <rect x="3" y="18" width="4" height="2" fill="#fff"><animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite"/></rect>
      </g>
    </svg>`,
    questionAr: "أنت تقود في الليل. ما هي أهمية استخدام العاكس (Reflex) للمشاة؟",
    questionSv: "Du kör i mörker. Vad är viktigast med reflexer för fotgängare?",
    optionsAr: [
      "يجعلهم يظهرون بوضوح من مسافة أكبر بكثير (حوالي 125 متراً).",
      "يجعلهم يبدون أكثر أناقة.",
      "ليس له أهمية إذا كانت هناك إنارة شوارع.",
      "يستخدم فقط في الطرق السريعة."
    ],
    optionsSv: [
      "Det gör att de syns på mycket längre håll (ca 125 meter).",
      "Det ser snyggt ut.",
      "Det behövs inte om det finns gatubelysning.",
      "Det används bara på motorvägar."
    ],
    correctIdx: 0
  },
  {
    id: "sc23",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <path d="M 0 60 L 120 60 Q 150 60 180 100 L 200 100 L 200 140 L 0 140 Z" fill="#37474f"/>
      <rect x="180" y="100" width="20" height="40" fill="#37474f"/>
      <line x1="0" y1="120" x2="200" y2="120" stroke="#fff" stroke-dasharray="10,5"/>
      
      <!-- Car Merging (Yellow) -->
      <g transform="translate(130, 80) rotate(30)">
        <rect width="32" height="18" rx="4" fill="#ffeb3b"/>
        <rect x="22" y="2" width="8" height="14" fill="#fff9c4" opacity="0.8"/>
      </g>
      
      <!-- Your Car (Blue) -->
      <g transform="translate(50, 125)">
        <rect width="35" height="18" rx="4" fill="#1e88e5"/>
      </g>
    </svg>`,
    questionAr: "أنت تقود في الطريق الرئيسي وسيارته تندمج من ممر التسارع. من المسؤول عن الاندماج الآمن؟",
    questionSv: "Du kör på huvudleden och en bil kör in från accelerationsfältet. Vem ansvarar för att det sker säkert?",
    optionsAr: [
      "السائق المندمج فقط.",
      "أنا فقط.",
      "المسؤولية مشتركة، يجب على الطرفين التعاون لتسهيل الاندماج.",
      "من يملك السيارة الأسرع."
    ],
    optionsSv: [
      "Endast den som kör in.",
      "Endast jag.",
      "Gemensamt ansvar, båda ska samarbeta för att underlätta.",
      "Den med snabbast bil."
    ],
    correctIdx: 2
  },
  {
    id: "sc24",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="55" width="200" height="40" fill="#455a64"/>
      <rect x="80" y="95" width="40" height="55" fill="#455a64"/>
      <!-- Pavement edge -->
      <rect x="80" y="95" width="2" height="55" fill="#9e9e9e"/>
      <rect x="118" y="95" width="2" height="55" fill="#9e9e9e"/>
      
      <!-- Car exiting parking (Yellow) -->
      <g transform="translate(88, 110)">
        <rect width="24" height="32" rx="4" fill="#ffeb3b"/>
        <rect x="2" y="5" width="20" height="8" fill="#fff9c4" opacity="0.8"/>
      </g>
      
      <!-- Car on main road (Blue) -->
      <g transform="translate(20, 67)">
        <rect width="32" height="18" rx="4" fill="#1e88e5"/>
      </g>
    </svg>`,
    questionAr: "أنت تخرج من موقف سيارات (Parkering) وتدخل طريقاً عاماً. من له الأولوية؟",
    questionSv: "Du kör ut från en parkering till en gata. Vem har företräde?",
    optionsAr: [
      "أنا، لأنني بدأت بالحركة.",
      "المرور الموجود على الطريق العام (قاعدة الخروج/Utfartsregeln).",
      "من يعطي إشارة أولاً.",
      "قاعدة اليمين تطبق هنا."
    ],
    optionsSv: [
      "Jag, eftersom jag började köra.",
      "Trafiken på gatan (utfartsregeln).",
      "Den som blinkar först.",
      "Högerregeln gäller."
    ],
    correctIdx: 1
  },
  {
    id: "sc25",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <rect x="60" y="0" width="80" height="150" fill="#37474f"/>
      <rect x="98" y="0" width="4" height="150" fill="#fff" stroke-dasharray="10,10"/>
      
      <!-- One Way Sign -->
      <g transform="translate(150, 60)">
        <rect width="20" height="30" fill="#1e88e5" rx="2"/>
        <path d="M 10 5 L 10 25 M 5 10 L 10 5 L 15 10" stroke="#fff" stroke-width="2" fill="none"/>
      </g>
      
      <!-- Your Car (positioning for left turn) -->
      <g transform="translate(65, 110)">
        <rect width="28" height="35" rx="5" fill="#1e88e5"/>
        <rect x="2" y="4" width="24" height="10" fill="#e3f2fd" opacity="0.8"/>
        <!-- Left indicator -->
        <rect x="1" y="1" width="4" height="3" fill="#ff9800"><animate attributeName="opacity" values="1;0;1" dur="0.6s" repeatCount="indefinite"/></rect>
      </g>
    </svg>`,
    questionAr: "أنت في شارع ذو اتجاه واحد (Enkelriktad) وتريد الانعطاف يساراً في التقاطع القادم. كيف تتموضع؟",
    questionSv: "Du kör på en enkelriktad gata och ska svänga vänster. Var placerar du dig?",
    optionsAr: [
      "في منتصف الطريق.",
      "إلى أقصى جهة اليمين.",
      "إلى أقصى جهة اليسار.",
      "لا يهم التموضع في الشوارع ذات الاتجاه الواحد."
    ],
    optionsSv: [
      "I mitten av vägen.",
      "Längst till höger.",
      "Längst till vänster.",
      "Placeringen spelar ingen roll på enkelriktade gator."
    ],
    correctIdx: 2
  },
  {
    id: "sc26",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="50" fill="#37474f"/>
      
      <!-- Zebra Crossing -->
      <g fill="#fff">
        <rect x="100" y="60" width="10" height="50"/>
        <rect x="115" y="60" width="10" height="50"/>
        <rect x="130" y="60" width="10" height="50"/>
      </g>
      
      <!-- Child Pedestrian -->
      <g transform="translate(120, 35)">
        <circle cx="5" cy="5" r="3" fill="#ffccbc"/>
        <rect x="3" y="8" width="4" height="10" fill="#ff7043"/>
        <line x1="4" y1="18" x2="4" y2="25" stroke="#000" stroke-width="1.5"/>
      </g>
      
      <!-- Car -->
      <g transform="translate(20, 75)">
        <rect width="35" height="20" rx="4" fill="#1e88e5"/>
        <rect x="25" y="2" width="8" height="16" fill="#e3f2fd" opacity="0.8"/>
      </g>
    </svg>`,
    questionAr: "أنت تقترب من ممر مشاة وهناك طفل يستعد للعبور. ماذا تفعل؟",
    questionSv: "Du närmar dig ett övergångsställe och ett barn förbereder sig för att gå över. Vad gör du?",
    optionsAr: [
      "أستخدم المنبه الصوتي لتحذيره.",
      "أتوقف تماماً وأعطي إشارة واضحة للطفل ليعبر بأمان.",
      "أزيد من سرعتي لأمر بسرعة قبل أن يبدأ بالعبور.",
      "أستمر بالقيادة ببطء دون توقف."
    ],
    optionsSv: [
      "Jag använder tutan för att varna barnet.",
      "Jag stannar helt och ger ett tydligt tecken så barnet kan gå över säkert.",
      "Jag accelererar för att hinna förbi innan barnet börjar gå.",
      "Jag fortsätter köra sakta utan att stanna."
    ],
    correctIdx: 1
  },
  {
    id: "sc27",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      
      <!-- Bus Stop -->
      <rect x="120" y="45" width="60" height="15" fill="#fbc02d"/>
      <text x="150" y="55" font-size="8" fill="#000" text-anchor="middle">BUS</text>
      
      <!-- Bus (Yellow) -->
      <g transform="translate(130, 60)">
        <rect width="55" height="22" rx="2" fill="#ffeb3b"/>
        <!-- Left indicator -->
        <rect x="1" y="1" width="4" height="4" fill="#ff9800"><animate attributeName="opacity" values="1;0;1" dur="0.6s" repeatCount="indefinite"/></rect>
        <rect x="40" y="2" width="12" height="18" fill="#fff9c4" opacity="0.8"/>
      </g>
      
      <!-- Your Car -->
      <g transform="translate(40, 72)">
        <rect width="35" height="18" rx="4" fill="#1e88e5"/>
      </g>
    </svg>`,
    questionAr: "باص بدأ بإعطاء إشارة للانطلاق من الموقف في طريق سرعته 50 كم/ساعة. كيف تتصرف؟",
    questionSv: "En buss blinkar för att köra ut från en hållplats på en 50-väg. Vad gör du?",
    optionsAr: [
      "لي الأولوية، يجب على الباص الانتظار.",
      "يجب علي إعطاء الأولوية للباص والسماح له بالخروج.",
      "أستخدم المنبه الصوتي وأمر بسرعة.",
      "أتوقف فقط إذا كان هناك ركاب يعبرون الشارع."
    ],
    optionsSv: [
      "Jag har företräde, bussen måste vänta.",
      "Jag måste lämna företräde åt bussen och låta den köra ut.",
      "Jag tutar och kör förbi snabbt.",
      "Jag stannar bara om det finns passagerare som korsar vägen."
    ],
    correctIdx: 1
  },
  {
    id: "sc28",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="85" y="0" width="30" height="150" fill="#455a64"/>
      <rect x="0" y="85" width="200" height="30" fill="#455a64"/>
      
      <!-- Parked Car -->
      <g transform="translate(125, 90)">
        <rect width="32" height="18" rx="3" fill="#9e9e9e"/>
        <rect x="22" y="2" width="8" height="14" fill="#cfd8dc" opacity="0.6"/>
      </g>
      
      <!-- Measurement -->
      <line x1="115" y1="125" x2="160" y2="125" stroke="#d32f2f" stroke-width="1.5"/>
      <path d="M 115 120 L 115 130 M 160 120 L 160 130" stroke="#d32f2f" stroke-width="1.5"/>
      <text x="137" y="140" font-size="10" fill="#d32f2f" text-anchor="middle" font-weight="bold">7 m</text>
    </svg>`,
    questionAr: "هل يسمح بركن السيارة على بعد 7 أمتار من تقاطع طرق؟",
    questionSv: "Får man parkera 7 meter från en korsning?",
    optionsAr: [
      "نعم، المسافة القانونية هي 5 أمتار.",
      "لا، يجب أن تكون المسافة 10 أمتار على الأقل قبل التقاطع.",
      "نعم، طالما لا توجد لوحة تمنع ذلك.",
      "نعم، ولكن فقط خلال النهار."
    ],
    optionsSv: [
      "Ja, gränsen är 5 meter.",
      "Nej, det måste vara minst 10 meter före en korsning.",
      "Ja, så länge ingen skylt förbjuder det.",
      "Ja, men bara på dagtid."
    ],
    correctIdx: 1
  },
  {
    id: "sc29",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <rect x="0" y="20" width="200" height="60" fill="#37474f"/>
      <rect x="0" y="50" width="200" height="2" fill="#fff" stroke-dasharray="10,10"/>
      
      <!-- Acceleration lane -->
      <path d="M 0 130 Q 100 130 150 80 L 200 80" stroke="#37474f" stroke-width="30" fill="none"/>
      
      <!-- Your Car in lane -->
      <g transform="translate(60, 115) rotate(-15)">
        <rect width="35" height="18" rx="4" fill="#1e88e5"/>
        <rect x="24" y="2" width="9" height="14" fill="#e3f2fd" opacity="0.8"/>
      </g>
    </svg>`,
    questionAr: "كيف يجب أن يكون تصرفك عند الدخول إلى طريق سريع عبر ممر التسارع؟",
    questionSv: "Hur ska du agera när du kör in på en motorväg via ett accelerationsfält?",
    optionsAr: [
      "أتوقف في نهاية الممر وأنتظر فجوة.",
      "أزيد من سرعتي لتناسب سرعة المرور وأندمج بسلاسة.",
      "لي الأولوية دائماً في ممر التسارع.",
      "أدخل الطريق بأقل سرعة ممكنة لضمان الأمان."
    ],
    optionsSv: [
      "Jag stannar vid slutet av fältet och väntar.",
      "Jag anpassar min fart till trafiken och flätar samman smidigt.",
      "Jag har alltid företräde i accelerationsfältet.",
      "Jag kör in med så låg fart som möjligt för säkerhets skull."
    ],
    correctIdx: 1
  },
  {
    id: "sc30",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#212121"/>
      <rect x="0" y="65" width="200" height="40" fill="#000"/>
      
      <!-- Night High Beam Cone -->
      <path d="M 55 85 L 180 50 L 180 120 Z" fill="#fff59d" opacity="0.4"/>
      
      <!-- Your Car -->
      <g transform="translate(20, 77)">
        <rect width="35" height="16" rx="4" fill="#1e88e5"/>
        <rect x="33" y="1" width="2" height="4" fill="#fff"/>
        <rect x="33" y="11" width="2" height="4" fill="#fff"/>
      </g>
      
      <!-- Opposing Car -->
      <g transform="translate(160, 70)">
        <rect width="32" height="16" rx="4" fill="#e53935"/>
        <rect x="1" y="2" width="4" height="4" fill="#fff"/>
        <rect x="1" y="10" width="4" height="4" fill="#fff"/>
      </g>
    </svg>`,
    questionAr: "أنت تقود في الليل وتقترب سيارة من الاتجاه المعاكس. متى يجب إطفاء الضوء العالي (Helljus)؟",
    questionSv: "Du kör i mörker och en bil närmar sig från motsatt håll. När ska du blända av till halvljus?",
    optionsAr: [
      "عندما تومض لي السيارة الأخرى فقط.",
      "بمجرد أن يضيء ضوء السيارة الأخرى الطريق أمامي ولتجنب إبهار السائق.",
      "لا أطفئه أبداً إذا كان الطريق مظلماً جداً.",
      "قبل 100 متر بالضبط."
    ],
    optionsSv: [
      "Endast när den andra bilen blinkar åt mig.",
      "Så snart den andra bilens ljus lyser upp vägen framför mig och för att inte blända föraren.",
      "Jag bländar aldrig av om vägen är väldigt mörk.",
      "Exakt 100 meter innan mötet."
    ],
    correctIdx: 1
  },
  {
    id: "sc31",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#eceff1"/>
      <rect x="0" y="70" width="200" height="40" fill="#455a64"/>
      
      <!-- Svartis Effect (Glassy patches) -->
      <ellipse cx="60" cy="90" rx="30" ry="10" fill="#fff" opacity="0.4"/>
      <ellipse cx="140" cy="85" rx="25" ry="8" fill="#fff" opacity="0.3"/>
      
      <!-- Bridge style -->
      <rect x="0" y="110" width="200" height="10" fill="#78909c"/>
      <rect x="20" y="110" width="4" height="20" fill="#546e7a"/>
      <rect x="170" y="110" width="4" height="20" fill="#546e7a"/>
      
      <!-- Car sliding -->
      <g transform="translate(100, 75) rotate(10)">
        <rect width="35" height="18" rx="4" fill="#1e88e5"/>
        <rect x="24" y="2" width="10" height="14" fill="#e3f2fd" opacity="0.8"/>
      </g>
    </svg>`,
    questionAr: "ما هو الانزلاق المفاجئ (Black ice / Svartis) وأين يكثر حدوثه؟",
    questionSv: "Vad är 'svartis' och var är risken störst att den uppstår?",
    optionsAr: [
      "ثلج ظاهر بوضوح، يحدث في الغابات.",
      "طبقة رقيقة وشفافة من الجليد تصعب رؤيتها، تكثر في الجسور والأماكن المظللة.",
      "جليد يذوب بسرعة، يحدث في المدن.",
      "نوع من الإسفلت الناعم."
    ],
    optionsSv: [
      "Tydlig snö, uppstår i skogar.",
      "Tunn, osynlig isbeläggning, vanlig på broar och i skuggiga partier.",
      "Is som smälter snabbt, vanlig i städer.",
      "En typ av mjuk asfalt."
    ],
    correctIdx: 1
  },
  {
    id: "sc32",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <!-- Railway Crossing Realistic -->
      <rect x="100" y="0" width="30" height="150" fill="#78909c"/>
      <rect x="108" y="0" width="1" height="150" fill="#000"/>
      <rect x="122" y="0" width="1" height="150" fill="#000"/>
      
      <rect x="0" y="70" width="200" height="40" fill="#37474f"/>
      
      <!-- Warning Lights -->
      <g transform="translate(140, 30)">
        <rect width="12" height="22" fill="#333" rx="2"/>
        <circle cx="6" cy="7" r="4" fill="#d32f2f"><animate attributeName="opacity" values="1;0;1" dur="0.4s" repeatCount="indefinite"/></circle>
        <circle cx="6" cy="15" r="4" fill="#d32f2f"><animate attributeName="opacity" values="0;1;0" dur="0.4s" repeatCount="indefinite"/></circle>
      </g>
      
      <!-- Boms (Still up) -->
      <rect x="135" y="60" width="5" height="50" fill="#fff" stroke="#d32f2f" stroke-width="2" transform="rotate(-70, 137.5, 110)"/>
    </svg>`,
    questionAr: "أنت تقترب من سكة حديد والأضواء الحمراء تومض لكن الحواجز لا تزال مرفوعة. ماذا تفعل؟",
    questionSv: "Du närmar dig en järnvägskorsning. De röda lamporna blinkar men bommarna är fortfarande uppe. Vad gör du?",
    optionsAr: [
      "أعبر بسرعة قبل أن تنزل الحواجز.",
      "أتوقف تماماً، الوميض الأحمر يعني منعاً باتاً للعبور.",
      "أستمر إذا لم أسمع صوت القطار.",
      "أمر بحذر شديد."
    ],
    optionsSv: [
      "Jag kör över snabbt innan bommarna sänks.",
      "Jag stannar helt, blinkande rött ljus innebär absolut förbud att passera.",
      "Jag kör över om jag inte hör tåget.",
      "Jag kör över med stor försiktighet."
    ],
    correctIdx: 1
  },
  {
    id: "sc33",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#2e7d32"/> <!-- Dense Forest -->
      <rect x="0" y="70" width="200" height="40" fill="#37474f"/>
      
      <!-- Trees -->
      <circle cx="30" cy="40" r="15" fill="#1b5e20"/>
      <circle cx="170" cy="40" r="15" fill="#1b5e20"/>
      
      <!-- Moose/Vilt Sign -->
      <g transform="translate(130, 20)">
        <polygon points="15,0 30,25 0,25" fill="#fff" stroke="#d32f2f" stroke-width="2"/>
        <path d="M 10 15 Q 15 10 20 15" stroke="#000" fill="none"/>
      </g>
      
      <!-- Car in twilight -->
      <g transform="translate(40, 80)">
        <rect width="35" height="18" rx="4" fill="#1e88e5"/>
        <rect x="33" y="3" width="2" height="4" fill="#fff" opacity="0.5"/>
      </g>
    </svg>`,
    questionAr: "في أي وقت من اليوم يزداد خطر اصطدام الحيوانات البرية (مثل الموظ) بالسيارات؟",
    questionSv: "Vid vilken tid på dygnet är risken störst för viltolyckor (t.ex. med älg)?",
    optionsAr: [
      "وقت الظهيرة.",
      "الفجر والغسق (عند شروق الشمس وغروبها).",
      "منتصف الليل فقط.",
      "لا يوجد وقت محدد."
    ],
    optionsSv: [
      "Mitt på dagen.",
      "I skymning och gryning.",
      "Endast mitt i natten.",
      "Det finns ingen specifik tid."
    ],
    correctIdx: 1
  },
  {
    id: "sc34",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <rect x="0" y="60" width="200" height="50" fill="#37474f"/>
      
      <!-- Cykelöverfart Markings -->
      <g fill="#fff">
        <rect x="100" y="60" width="40" height="5"/>
        <rect x="100" y="75" width="40" height="5"/>
        <rect x="100" y="90" width="40" height="5"/>
        <rect x="100" y="105" width="40" height="5"/>
      </g>
      
      <!-- Cyclist -->
      <g transform="translate(110, 30)">
        <circle cx="10" cy="5" r="3" fill="#ffccbc"/>
        <rect x="8" y="8" width="4" height="10" fill="#1e88e5"/>
        <circle cx="5" cy="22" r="4" fill="none" stroke="#000" stroke-width="1.5"/>
        <circle cx="15" cy="22" r="4" fill="none" stroke="#000" stroke-width="1.5"/>
        <line x1="5" y1="22" x2="15" y2="22" stroke="#000"/>
      </g>
      
      <!-- Car -->
      <g transform="translate(30, 75)">
        <rect width="35" height="20" rx="4" fill="#1e88e5"/>
      </g>
    </svg>`,
    questionAr: "أنت تعبر ممر دراجات هوائية (Cykelöverfart). من له الأولوية؟",
    questionSv: "Du korsar en cykelöverfart. Vem har företräde?",
    optionsAr: [
      "السيارة دائماً.",
      "الدراجات الهوائية لها الأولوية ويجب على السيارة التوقف.",
      "من يصل أولاً.",
      "الدراجة يجب أن تتوقف دائماً."
    ],
    optionsSv: [
      "Bilen har alltid företräde.",
      "Cyklisterna har företräde och bilen måste stanna.",
      "Den som kommer först.",
      "Cyklisterna måste alltid stanna."
    ],
    correctIdx: 1
  },
  {
    id: "sc35",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#90a4ae"/>
      <!-- Parking Sign Realistic -->
      <g transform="translate(75, 20)">
        <rect width="50" height="70" fill="#1e88e5" rx="3" stroke="#fff" stroke-width="2"/>
        <text x="25" y="35" font-family="Arial" font-size="30" fill="#fff" text-anchor="middle" font-weight="bold">P</text>
        <rect x="5" y="45" width="40" height="20" fill="#fff" rx="1"/>
        <text x="25" y="58" font-family="Arial" font-size="10" fill="#000" text-anchor="middle" font-weight="bold">9 - 18</text>
      </g>
      <rect x="98" y="90" width="4" height="40" fill="#78909c"/>
    </svg>`,
    questionAr: "ماذا تعني اللوحة الإضافية (9-18) تحت علامة مواقف السيارات (P)؟",
    questionSv: "Vad betyder tilläggstavlan (9-18) under ett P-märke?",
    optionsAr: [
      "يسمح بالوقوف مجاناً طوال اليوم.",
      "الركن يحتاج لدفع أو خاضع لشروط خلال هذه الساعات في الأيام العادية.",
      "يمنع الوقوف بتاتاً في هذه الساعات.",
      "الركن مسموح فقط لـ 9 ساعات."
    ],
    optionsSv: [
      "Fri parkering hela dygnet.",
      "Parkering är reglerad (t.ex. avgift/tidsbegränsad) dessa tider på vardagar.",
      "Parkering är förbjuden dessa tider.",
      "Man får bara parkera i 9 timmar."
    ],
    correctIdx: 1
  },
  {
    id: "sc36",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <rect x="0" y="50" width="200" height="60" fill="#37474f"/>
      <rect x="0" y="78" width="200" height="4" fill="#fff" stroke-dasharray="10,5"/>
      
      <!-- Your Car (Blue) - Starting to pull out -->
      <g transform="translate(40, 85) rotate(-5)">
        <rect width="35" height="18" rx="4" fill="#1e88e5"/>
        <rect x="33" y="1" width="2" height="4" fill="#ff9800"><animate attributeName="opacity" values="1;0;1" dur="0.5s" repeatCount="indefinite"/></rect>
      </g>
      
      <!-- Car ahead (Red) -->
      <g transform="translate(130, 82)">
        <rect width="35" height="18" rx="4" fill="#e53935"/>
      </g>
      
      <!-- Checking Mirror Context -->
      <circle cx="20" cy="20" r="15" fill="#fff" stroke="#90a4ae" stroke-width="2"/>
      <path d="M 10 20 L 30 20 M 20 10 L 20 30" stroke="#90a4ae" stroke-width="1"/>
    </svg>`,
    questionAr: "عندما تشرع في تجاوز سيارة أخرى، ما هو أهم شيء يجب التأكد منه؟",
    questionSv: "Vad är viktigast att kontrollera innan du påbörjar en omkörning?",
    optionsAr: [
      "أن سرعة سيارتي عالية جداً.",
      "خلو الطريق المقابل، وعدم وجود سيارة خلفي بدأت فعلياً بتجاوزي.",
      "أن لون السيارة الأخرى واضح.",
      "استخدام المنبه الصوتي."
    ],
    optionsSv: [
      "Att min bil har väldigt hög fart.",
      "Att mötande körfält är fritt och att ingen bil bakom redan påbörjat en omkörning av mig.",
      "Att den andra bilens färg syns tydligt.",
      "Att använda tutan."
    ],
    correctIdx: 1
  },
  {
    id: "sc37",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <circle cx="100" cy="75" r="50" fill="#455a64"/>
      <circle cx="100" cy="75" r="25" fill="#7cb342"/>
      
      <!-- Roads -->
      <rect x="90" y="0" width="20" height="30" fill="#455a64"/>
      <rect x="170" y="65" width="30" height="20" fill="#455a64"/>
      
      <!-- Your Car leaving -->
      <g transform="translate(140, 60) rotate(45)">
        <rect width="28" height="16" rx="4" fill="#1e88e5"/>
        <!-- Right Indicator -->
        <rect x="23" y="13" width="4" height="4" fill="#ff9800"><animate attributeName="opacity" values="1;0;1" dur="0.5s" repeatCount="indefinite"/></rect>
      </g>
    </svg>`,
    questionAr: "متى يجب عليك استخدام الغماز (الإشارة الضوئية) عند القيادة في الدوار؟",
    questionSv: "När måste du använda blinkers i en cirkulationsplats?",
    optionsAr: [
      "عند الدخول فقط.",
      "عند الخروج من الدوار فقط.",
      "عند الدخول والخروج.",
      "لا يجب استخدامه في الدوار."
    ],
    optionsSv: [
      "Endast vid infart.",
      "Endast vid utfart ur cirkulationen.",
      "Vid både infart och utfart.",
      "Man behöver inte blinka i en rondell."
    ],
    correctIdx: 1
  },
  {
    id: "sc38",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#9ccc65"/>
      <rect x="0" y="60" width="200" height="40" fill="#37474f"/>
      
      <!-- Huvudled upphör Sign -->
      <g transform="translate(130, 20)">
        <rect width="30" height="30" fill="#ffeb3b" stroke="#000" stroke-width="2" transform="rotate(45, 15, 15)"/>
        <line x1="-5" y1="35" x2="35" y2="-5" stroke="#000" stroke-width="3"/>
      </g>
      
      <!-- Car -->
      <g transform="translate(40, 72)">
        <rect width="35" height="18" rx="4" fill="#1e88e5"/>
      </g>
    </svg>`,
    questionAr: "ماذا تعني هذه اللوحة (مربع أصفر مع خط أسود مائل)؟",
    questionSv: "Vad betyder detta märke (gul romb med ett svart diagonalt streck)?",
    optionsAr: [
      "بداية طريق رئيسي.",
      "نهاية الطريق الرئيسي (تطبق قاعدة اليمين غالباً بعدها).",
      "طريق مسدود.",
      "ممنوع المرور."
    ],
    optionsSv: [
      "Huvudled börjar.",
      "Huvudled upphör (högerregeln gäller ofta efteråt).",
      "Återvändsgata.",
      "Förbud mot trafik."
    ],
    correctIdx: 1
  },
  {
    id: "sc39",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="40" width="200" height="80" fill="#37474f"/>
      <rect x="0" y="80" width="200" height="2" fill="#fff" stroke-dasharray="10,10"/>
      
      <!-- Blind Spot Highlight -->
      <path d="M 60 90 L 140 120 L 140 150 L 20 150 Z" fill="#f44336" opacity="0.3"/>
      
      <!-- Your Car -->
      <g transform="translate(40, 85)">
        <rect width="35" height="20" rx="4" fill="#1e88e5"/>
        <rect x="2" y="2" width="6" height="16" fill="#e3f2fd" opacity="0.6"/>
      </g>
      
      <!-- Car in blind spot -->
      <g transform="translate(120, 120)">
        <rect width="32" height="18" rx="4" fill="#e53935" opacity="0.5"/>
      </g>
    </svg>`,
    questionAr: "ماذا تعني 'المنطقة العمياء' (Blind spot) عند تغيير المسار؟",
    questionSv: "Vad menas med 'döda vinkeln' vid körfältsbyte?",
    optionsAr: [
      "المنطقة التي لا تظهر في المرايا الجانبية أو المرآة الداخلية.",
      "منطقة أمام السيارة مباشرة.",
      "المنطقة تحت السيارة.",
      "الأضواء العالية للسيارات القادمة."
    ],
    optionsSv: [
      "Den zon som inte syns i backspeglarna.",
      "Zonen direkt framför bilen.",
      "Zonen under bilen.",
      "Helljuset på mötande bilar."
    ],
    correctIdx: 0
  },
  {
    id: "sc40",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#f5f5f5"/>
      <rect x="0" y="100" width="200" height="20" fill="#455a64"/>
      
      <!-- Speed 1 -->
      <g transform="translate(10, 85)">
        <rect width="25" height="14" rx="2" fill="#1e88e5"/>
        <text x="12" y="-5" font-size="8" fill="#1e88e5" text-anchor="middle">50 km/h</text>
        <line x1="25" y1="7" x2="50" y2="7" stroke="#333" stroke-width="1" stroke-dasharray="2,2"/>
        <rect x="50" y="115" width="2" height="5" fill="#f44336"/> <!-- End of stop -->
      </g>
      
      <!-- Speed 2 (Double) -->
      <g transform="translate(10, 50)">
        <rect width="25" height="14" rx="2" fill="#e53935"/>
        <text x="12" y="-5" font-size="8" fill="#e53935" text-anchor="middle">100 km/h</text>
        <line x1="25" y1="7" x2="150" y2="7" stroke="#333" stroke-width="1" stroke-dasharray="2,2"/>
        <rect x="150" y="115" width="2" height="5" fill="#f44336"/> <!-- Much longer stop -->
      </g>
      
      <!-- Visualization of 1x vs 4x -->
      <rect x="25" y="102" width="25" height="4" fill="#1e88e5" opacity="0.5"/>
      <rect x="25" y="110" width="125" height="4" fill="#e53935" opacity="0.5"/>
      <text x="100" y="135" font-size="10" fill="#333" text-anchor="middle">Distance x 4</text>
    </svg>`,
    questionAr: "إذا تضاعفت سرعة السيارة مرتين، كم مرة تزداد مسافة الكبح (Bromssträcka)؟",
    questionSv: "Om du dubblerar farten, hur många gånger ökar bromssträckan?",
    optionsAr: [
      "مرتين.",
      "4 مرات (تزداد تربيعياً).",
      "3 مرات.",
      "لا تتغير."
    ],
    optionsSv: [
      "2 gånger.",
      "4 gånger.",
      "3 gånger.",
      "Ingen skillnad."
    ],
    correctIdx: 1
  },
  {
    id: "sc41",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <rect x="0" y="70" width="200" height="40" fill="#37474f"/>
      
      <!-- Car with Trailer -->
      <g transform="translate(40, 82)">
        <rect width="32" height="18" rx="4" fill="#1e88e5"/>
        <line x1="0" y1="9" x2="-8" y2="9" stroke="#333" stroke-width="2"/>
        <rect x="-35" y="4" width="28" height="22" rx="2" fill="#90a4ae"/>
        <circle cx="-10" cy="24" r="3" fill="#000"/>
        <circle cx="-30" cy="24" r="3" fill="#000"/>
      </g>
      
      <!-- 80 Sign -->
      <g transform="translate(140, 20)">
        <circle cx="20" cy="20" r="18" fill="#ffeb3b" stroke="#d32f2f" stroke-width="4"/>
        <text x="20" y="26" font-family="Arial" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">80</text>
      </g>
    </svg>`,
    questionAr: "ما هي السرعة القصوى المسموح بها لسيارة تسحب مقطورة (Släpvagn)؟",
    questionSv: "Vilken är den högsta tillåtna hastigheten för en bil med släpvagn?",
    optionsAr: [
      "70 كم/ساعة.",
      "80 كم/ساعة.",
      "90 كم/ساعة.",
      "100 كم/ساعة."
    ],
    optionsSv: [
      "70 km/h.",
      "80 km/h.",
      "90 km/h.",
      "100 km/h."
    ],
    correctIdx: 1
  },
  {
    id: "sc42",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#e8f5e9"/>
      <circle cx="100" cy="75" r="50" fill="none" stroke="#4caf50" stroke-width="4" stroke-dasharray="10,5"/>
      <path d="M 80 80 Q 100 40 120 80" stroke="#4caf50" stroke-width="5" fill="none"/>
      <text x="100" y="110" font-family="Arial" font-size="14" fill="#2e7d32" text-anchor="middle" font-weight="bold">ECO DRIVING</text>
      
      <!-- Leaf icon -->
      <path d="M 100 40 Q 110 30 120 40 Q 110 50 100 40" fill="#4caf50"/>
    </svg>`,
    questionAr: "أي من هذه التصرفات يعتبر من أساليب القيادة الاقتصادية (Eco-driving)؟",
    questionSv: "Vilket av följande är ett exempel på sparsam körning (Eco-driving)?",
    optionsAr: [
      "القيادة بترس (Gear) منخفض وسرعة عالية.",
      "التسارع ببطء، وتجنب الكبح المفاجئ، واستخدام فرملة المحرك.",
      "ترك المحرك يعمل أثناء التوقف لفترات طويلة.",
      "استخدام الفرامل دائماً بدل الغيارات."
    ],
    optionsSv: [
      "Hög växel och lågt varvtal.",
      "Planerad körning, motorbroms och lugn acceleration.",
      "Tomgångskörning.",
      "Ständig användning av fotbroms."
    ],
    correctIdx: 1
  },
  {
    id: "sc43",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#ffebee"/>
      <circle cx="100" cy="75" r="40" fill="none" stroke="#d32f2f" stroke-width="6"/>
      <line x1="75" y1="50" x2="125" y2="100" stroke="#d32f2f" stroke-width="6"/>
      <text x="100" y="80" font-family="Arial" font-size="18" fill="#d32f2f" text-anchor="middle" font-weight="bold">0.2 ‰</text>
      
      <!-- Glass icon with prohibition -->
      <g transform="translate(140, 20)">
        <path d="M 5 0 L 25 0 L 15 20 L 15 30 L 5 30 L 25 30" stroke="#333" fill="none"/>
        <line x1="0" y1="0" x2="30" y2="30" stroke="#d32f2f" stroke-width="3"/>
      </g>
    </svg>`,
    questionAr: "ما هو الحد القانوني لنسبة الكحول في الدم للقيادة في السويد؟",
    questionSv: "Vilken är den lagliga gränsen för promille i blodet vid bilkörning i Sverige?",
    optionsAr: [
      "0.5 بروميل.",
      "0.2 بروميل.",
      "0.8 بروميل.",
      "0.0 بروميل تماماً."
    ],
    optionsSv: [
      "0,5 promille.",
      "0,2 promille.",
      "0,8 promille.",
      "0,0 promille."
    ],
    correctIdx: 1
  },
  {
    id: "sc44",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#fffde7"/>
      <rect x="0" y="80" width="200" height="40" fill="#455a64"/>
      
      <!-- Car with long load -->
      <g transform="translate(60, 92)">
        <rect width="35" height="18" rx="4" fill="#1e88e5"/>
        <!-- Load -->
        <rect x="10" y="-10" width="60" height="6" fill="#795548"/>
        <!-- Red Flag -->
        <rect x="68" y="-10" width="8" height="6" fill="#d32f2f"/>
      </g>
      
      <text x="100" y="60" font-size="12" fill="#d32f2f" text-anchor="middle" font-weight="bold">> 1 meter</text>
    </svg>`,
    questionAr: "إذا كانت الحمولة تبرز من مقدمة السيارة بأكثر من متر واحد، فماذا يجب عليك فعله؟",
    questionSv: "Om lasten sticker ut mer än en meter framför bilen, vad måste du göra?",
    optionsAr: [
      "لا شيء.",
      "يجب تمييز الحمولة بعلامة واضحة (أو ضوء في الليل).",
      "يجب ربطها بحبل أحمر فقط.",
      "يمنع نقل حمولة تبرز من الأمام."
    ],
    optionsSv: [
      "Ingenting.",
      "Märkas ut tydligt.",
      "Bara binda fast den.",
      "Det är förbjudet."
    ],
    correctIdx: 1
  },
  {
    id: "sc45",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <rect x="0" y="60" width="200" height="60" fill="#37474f"/>
      <rect x="0" y="90" width="200" height="2" fill="#fff" stroke-dasharray="10,10"/>
      
      <!-- Mandatory Lane Sign -->
      <g transform="translate(130, 15)">
        <circle cx="20" cy="20" r="18" fill="#1e88e5" stroke="#fff" stroke-width="2"/>
        <path d="M 20 5 L 20 30 M 12 15 L 20 5 L 28 15" stroke="#fff" stroke-width="3" fill="none"/>
      </g>
      
      <!-- Car in lane -->
      <g transform="translate(40, 92)">
        <rect width="35" height="18" rx="4" fill="#1e88e5"/>
      </g>
    </svg>`,
    questionAr: "ماذا تعني علامة 'طريق مخصص لمركبات معينة'؟",
    questionSv: "Vad betyder märket 'påbjudet körfält för vissa fordon'?",
    optionsAr: [
      "أن الطريق مسموح للجميع.",
      "يجب على المركبات الموضحة في العلامة فقط استخدام هذا المسار.",
      "يمنع دخول هذه المركبات.",
      "أن الطريق تحت الصيانة."
    ],
    optionsSv: [
      "Vägen är öppen för alla.",
      "Endast de fordon som visas på märket får använda körfältet.",
      "Dessa fordon får inte köra här.",
      "Vägen är under reparation."
    ],
    correctIdx: 1
  },
  {
    id: "sc46",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <!-- Zipper Merge Path -->
      <path d="M 0 50 L 100 50 Q 140 50 170 80 L 200 80" stroke="#37474f" stroke-width="30" fill="none"/>
      <path d="M 0 110 L 100 110 Q 140 110 170 80 L 200 80" stroke="#37474f" stroke-width="30" fill="none"/>
      
      <!-- Cars merging like a zipper -->
      <g transform="translate(40, 42)">
        <rect width="32" height="16" rx="4" fill="#1e88e5"/>
      </g>
      <g transform="translate(80, 102)">
        <rect width="32" height="16" rx="4" fill="#e53935"/>
      </g>
      <g transform="translate(130, 45) rotate(25)">
        <rect width="32" height="16" rx="4" fill="#ffeb3b"/>
      </g>
      
      <text x="100" y="25" font-size="12" fill="#333" text-anchor="middle" font-weight="bold">BLIXTLÅSPRINCIPEN</text>
    </svg>`,
    questionAr: "ما هو 'مبدأ السحاب' (Zipper merge) في المرور؟",
    questionSv: "Vad innebär 'kugghjulsprincipen' (blixtlåsprincipen) i trafiken?",
    optionsAr: [
      "أن السيارات في المسار الأيمن لها الأولوية دائماً.",
      "عند اندماج مسارين، تندمج السيارات واحدة بواحدة بالتناوب (مثل السحاب).",
      "أن أسرع سيارة تندمج أولاً.",
      "التوقف تماماً قبل الاندماج."
    ],
    optionsSv: [
      "Att höger körfält alltid har företräde.",
      "Vid sammanvävning kör bilarna varannan (som ett blixtlås).",
      "Att snabbaste bilen kör först.",
      "Att stanna helt innan man väver samman."
    ],
    correctIdx: 1
  },
  {
    id: "sc47",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#263238"/>
      <rect x="0" y="60" width="200" height="40" fill="#212121"/>
      
      <!-- Car with Fog Lights -->
      <g transform="translate(100, 72)">
        <rect width="35" height="18" rx="4" fill="#1e88e5"/>
        <rect x="2" y="2" width="4" height="14" fill="#f44336"/> <!-- Rear fog light -->
        <path d="M 0 5 L -40 -10 L -40 20 Z" fill="#f44336" opacity="0.3"/> <!-- Fog light cone -->
      </g>
      
      <!-- Fog context -->
      <rect width="200" height="150" fill="#fff" opacity="0.1"/>
    </svg>`,
    questionAr: "متى يجب استخدام أضواء الضباب الخلفية؟",
    questionSv: "När ska dimbakljus användas?",
    optionsAr: [
      "دائماً في الليل.",
      "عندما تكون الرؤية ضعيفة جداً (ضباب أو مطر كثيف) لمنع الاصطدام من الخلف.",
      "عند القيادة في الأنفاق.",
      "لا يجب استخدامها في السويد."
    ],
    optionsSv: [
      "Alltid i mörker.",
      "Vid nedsatt sikt (dimma/kraftigt regn) för att varna bilar bakom.",
      "I tunnlar.",
      "De ska aldrig användas."
    ],
    correctIdx: 1
  },
  {
    id: "sc48",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="70" width="200" height="40" fill="#455a64"/>
      
      <!-- Water Patches -->
      <ellipse cx="100" cy="90" rx="40" ry="8" fill="#bbdefb" opacity="0.6"/>
      
      <!-- Car Splashing -->
      <g transform="translate(80, 80)">
        <rect width="35" height="18" rx="4" fill="#1e88e5"/>
        <path d="M 0 18 Q -10 15 -15 25 M 35 18 Q 45 15 50 25" stroke="#bbdefb" stroke-width="2" fill="none"/>
      </g>
    </svg>`,
    questionAr: "ما هو الانزلاق المائي (Aquaplaning) وكيف تتجنبه؟",
    questionSv: "Vad är vattenplaning och hur undviker du det?",
    optionsAr: [
      "فقدان السيطرة بسبب الجليد.",
      "ارتفاع السيارة فوق طبقة ماء؛ يتجنب بخفض السرعة واستخدام إطارات جيدة.",
      "نوع من الفرامل القوية.",
      "القيادة في وسط الطريق."
    ],
    optionsSv: [
      "Sladd på grund av is.",
      "Bilen lyfter på vatten; undviks med bra däck och låg fart.",
      "En typ av kraftig bromsning.",
      "Att köra mitt i vägen."
    ],
    correctIdx: 1
  },
  {
    id: "sc49",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <rect x="0" y="60" width="200" height="50" fill="#37474f"/>
      
      <!-- Emergency Vehicle -->
      <g transform="translate(130, 65)">
        <rect width="55" height="25" rx="2" fill="#fff"/>
        <rect x="40" y="4" width="10" height="18" fill="#e3f2fd" opacity="0.8"/>
        <circle cx="50" cy="4" r="4" fill="#2196f3"><animate attributeName="opacity" values="1;0;1" dur="0.3s" repeatCount="indefinite"/></circle>
      </g>
      
      <!-- Your Car pulling to side -->
      <g transform="translate(30, 95) rotate(15)">
        <rect width="35" height="18" rx="4" fill="#1e88e5"/>
      </g>
    </svg>`,
    questionAr: "سيارة طوارئ (إسعاف) تقترب مع إطلاق صافرات الإنذار. ماذا تفعل؟",
    questionSv: "Ett utryckningsfordon närmar sig med blåljus och sirener. Vad gör du?",
    optionsAr: [
      "أزيد من سرعتي لأبتعد عنها.",
      "أفسح الطريق فوراً بأمان، حتى لو اضطررت للتنحي جانباً أو التوقف.",
      "أستمر في القيادة بشكل طبيعي.",
      "أتبعها بسرعة لأستفيد من الطريق المفتوح."
    ],
    optionsSv: [
      "Gasar för att komma undan.",
      "Lämnar fri väg omedelbart på ett säkert sätt.",
      "Kör vidare som vanligt.",
      "Hänger på bakom."
    ],
    correctIdx: 1
  },
  {
    id: "sc50",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <rect x="80" y="0" width="40" height="150" fill="#37474f"/>
      <rect x="0" y="70" width="200" height="40" fill="#37474f"/>
      
      <!-- Your Car (Bottom) -->
      <g transform="translate(90, 120)">
        <rect width="20" height="32" rx="4" fill="#1e88e5"/>
      </g>
      <!-- Car from Right -->
      <g transform="translate(150, 78)">
        <rect width="35" height="20" rx="4" fill="#e53935"/>
      </g>
    </svg>`,
    questionAr: "في تقاطع طرق لا توجد فيه لوحات مرور، من له الأولوية؟",
    questionSv: "Vem har företräde i en korsning utan skyltar?",
    optionsAr: [
      "السيارة القادمة من اليسار.",
      "السيارة القادمة من اليمين (قاعدة اليمين).",
      "أكبر سيارة.",
      "أسرع سيارة."
    ],
    optionsSv: [
      "Bilen från vänster.",
      "Bilen från höger (högerregeln).",
      "Största fordonet.",
      "Snabbaste bilen."
    ],
    correctIdx: 1
  },
  {
    id: "sc51",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <!-- Traffic Light Realistic -->
      <g transform="translate(90, 20)">
        <rect width="20" height="60" fill="#333" rx="4"/>
        <circle cx="10" cy="12" r="7" fill="#d32f2f"/>
        <circle cx="10" cy="30" r="7" fill="#fbc02d"/>
        <circle cx="10" cy="48" r="7" fill="#388e3c"/>
        <rect x="9" y="60" width="2" height="40" fill="#546e7a"/>
      </g>
    </svg>`,
    questionAr: "ما هو ترتيب ألون إشارة المرور من الأعلى إلى الأسفل؟",
    questionSv: "I vilken ordning sitter färgerna i ett trafikljus uppifrån och ner?",
    optionsAr: [
      "أخضر، أصفر، أحمر.",
      "أحمر، أصفر، أخضر.",
      "أصفر، أحمر، أخضر.",
      "أحمر، أخضر، أصفر."
    ],
    optionsSv: [
      "Grön, gul, röd.",
      "Röd, gul, grön.",
      "Gul, röd, grön.",
      "Röd, grön, gul."
    ],
    correctIdx: 1
  },
  {
    id: "sc52",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <rect x="0" y="60" width="200" height="50" fill="#37474f"/>
      
      <!-- Thick Stop Line -->
      <rect x="120" y="60" width="10" height="50" fill="#fff"/>
      
      <!-- Stop Sign -->
      <g transform="translate(140, 20)">
        <polygon points="10,0 30,0 40,10 40,30 30,40 10,40 0,30 0,10" fill="#d32f2f" stroke="#fff" stroke-width="2"/>
        <text x="20" y="26" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">STOP</text>
      </g>
      
      <!-- Your Car -->
      <g transform="translate(40, 75)">
        <rect width="35" height="20" rx="4" fill="#1e88e5"/>
      </g>
    </svg>`,
    questionAr: "ماذا تعني الخطوط العرضية البيضاء المتصلة قبل إشارة المرور أو علامة قف؟",
    questionSv: "Vad betyder de tjocka vita tvärgående linjerna på vägen?",
    optionsAr: [
      "مكان لركن السيارات.",
      "خط التوقف (Stopplinje)؛ يجب الوقوف قبله تماماً.",
      "ممنوع العبور.",
      "للزينة فقط."
    ],
    optionsSv: [
      "Parkeringsplats.",
      "Stopplinje; man måste stanna precis före den.",
      "Förbjudet att köra över.",
      "Bara dekoration."
    ],
    correctIdx: 1
  },
  {
    id: "sc53",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#fffde7"/>
      <!-- Sun icon -->
      <circle cx="170" cy="30" r="15" fill="#fbc02d"/>
      
      <!-- Hot Car -->
      <g transform="translate(50, 70)">
        <rect width="100" height="50" rx="8" fill="#e53935"/>
        <rect x="15" y="10" width="70" height="25" fill="#e3f2fd" opacity="0.6"/>
        <!-- Child head icon in car -->
        <circle cx="50" cy="20" r="5" fill="#ffccbc"/>
      </g>
      <text x="100" y="140" font-size="12" fill="#d32f2f" text-anchor="middle" font-weight="bold">WARNING: HIGH TEMP</text>
    </svg>`,
    questionAr: "هل يسمح بترك الأطفال بمفردهم داخل السيارة في يوم حار؟",
    questionSv: "Är det tillåtet att lämna barn ensamma i en bil en varm dag?",
    optionsAr: [
      "نعم، إذا كان الوقت قصيراً.",
      "لا، خطير جداً وقد يؤدي للوفاة بسبب الحرارة.",
      "نعم، إذا كانت النوافذ مفتوحة قليلاً.",
      "نعم، لا مشكلة في ذلك."
    ],
    optionsSv: [
      "Ja, en kort stund.",
      "Nej, livsfarligt på grund av värmen.",
      "Ja, om fönstret är lite öppet.",
      "Ja, det är inga problem."
    ],
    correctIdx: 1
  },
  {
    id: "sc54",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#f5f5f5"/>
      <!-- Tire cross section -->
      <circle cx="100" cy="75" r="50" fill="#212121"/>
      <circle cx="100" cy="75" r="35" fill="#9e9e9e"/>
      <!-- Grooves -->
      <path d="M 65 75 L 135 75 M 100 40 L 100 110" stroke="#fff" stroke-width="4" stroke-dasharray="5,5"/>
      <text x="100" y="78" font-size="12" fill="#fff" text-anchor="middle" font-weight="bold">1.6 mm</text>
    </svg>`,
    questionAr: "ما هو الحد الأدنى لعمق نقوش الإطارات الصيفية في السويد؟",
    questionSv: "Vad är det minsta tillåtna mönsterdjupet för sommardäck i Sverige?",
    optionsAr: [
      "3 ملم.",
      "1.6 ملم.",
      "1 ملم.",
      "5 ملم."
    ],
    optionsSv: [
      "3 mm.",
      "1,6 mm.",
      "1 mm.",
      "5 mm."
    ],
    correctIdx: 1
  },
  {
    id: "sc55",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#e1f5fe"/>
      <!-- Winter Tire -->
      <circle cx="100" cy="75" r="50" fill="#212121"/>
      <circle cx="100" cy="75" r="35" fill="#9e9e9e"/>
      <!-- Snowflakes around -->
      <text x="100" y="78" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">3 mm</text>
      <text x="30" y="30" font-size="10">❄️</text>
      <text x="170" y="120" font-size="10">❄️</text>
    </svg>`,
    questionAr: "ما هو الحد الأدنى لعمق نقوش الإطارات الشتوية؟",
    questionSv: "Vad är det minsta tillåtna mönsterdjupet för vinterdäck?",
    optionsAr: [
      "1.6 ملم.",
      "3 ملم.",
      "5 ملم.",
      "2 ملم."
    ],
    optionsSv: [
      "1,6 mm.",
      "3 mm.",
      "5 mm.",
      "2 mm."
    ],
    correctIdx: 1
  },
  {
    id: "sc56",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#90a4ae"/>
      <!-- P-skiva Realistic -->
      <rect x="60" y="20" width="80" height="110" fill="#1e88e5" rx="5" stroke="#fff" stroke-width="2"/>
      <circle cx="100" cy="75" r="30" fill="#fff"/>
      <text x="100" y="78" font-size="10" fill="#000" text-anchor="middle">10:30</text>
      <path d="M 100 75 L 100 55" stroke="#d32f2f" stroke-width="2"/>
      <text x="100" y="45" font-size="12" fill="#fff" text-anchor="middle" font-weight="bold">P-SKIVA</text>
    </svg>`,
    questionAr: "ماذا تعني علامة 'القرص الزمني' (P-skiva) في مواقف السيارات؟",
    questionSv: "Vad innebär kravet på P-skiva?",
    optionsAr: [
      "دفع رسوم بالبطاقة.",
      "يجب ضبط وقت الوصول على القرص ووضعه بشكل مرئي.",
      "الركن مسموح فقط للشاحنات.",
      "يمنع الركن تماماً."
    ],
    optionsSv: [
      "Betala med kort.",
      "Du måste ställa in ankomsttid på skivan.",
      "Endast lastbilar.",
      "Förbjudet att parkera."
    ],
    correctIdx: 1
  },
  {
    id: "sc57",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <rect x="0" y="70" width="200" height="40" fill="#37474f"/>
      
      <!-- Bogsering (Towing) -->
      <g transform="translate(30, 82)">
        <rect width="32" height="16" rx="4" fill="#1e88e5"/>
        <line x1="32" y1="9" x2="60" y2="9" stroke="#ffeb3b" stroke-width="2" stroke-dasharray="4,2"/>
        <rect x="60" y="8" width="32" height="16" rx="4" fill="#e53935"/>
      </g>
      
      <text x="100" y="60" font-size="14" fill="#d32f2f" text-anchor="middle" font-weight="bold">MAX 30 km/h</text>
    </svg>`,
    questionAr: "ما هي السرعة القصوى المسموح بها عند سحب سيارة أخرى (Bogsering)؟",
    questionSv: "Vilken är den högsta tillåtna hastigheten vid bogsering?",
    optionsAr: [
      "20 كم/ساعة.",
      "30 كم/ساعة.",
      "40 كم/ساعة.",
      "50 كم/ساعة."
    ],
    optionsSv: [
      "20 km/h.",
      "30 km/h.",
      "40 km/h.",
      "50 km/h."
    ],
    correctIdx: 1
  },
  {
    id: "sc58",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <rect x="0" y="60" width="200" height="40" fill="#37474f"/>
      
      <!-- Rain context -->
      <line x1="20" y1="10" x2="10" y2="25" stroke="#bbdefb" stroke-width="1"/>
      <line x1="50" y1="5" x2="40" y2="20" stroke="#bbdefb" stroke-width="1"/>
      
      <!-- Car slowing down -->
      <g transform="translate(80, 72)">
        <rect width="35" height="20" rx="4" fill="#1e88e5"/>
        <rect x="1" y="2" width="2" height="16" fill="#f44336"/>
      </g>
      
      <text x="100" y="40" font-size="12" fill="#333" text-anchor="middle">Adapt speed to road conditions</text>
    </svg>`,
    questionAr: "ماذا تعني 'سرعة الأمان' (Basic speed rule)؟",
    questionSv: "Vad innebär den grundläggande hastighetsbestämmelsen?",
    optionsAr: [
      "القيادة دائماً بأقصى سرعة مسموحة.",
      "تعديل السرعة دائماً لتناسب ظروف الرؤية وحالة الطريق والمرور وحمولة السيارة.",
      "القيادة بسرعة 50 كم/س في كل مكان.",
      "القيادة بسرعة السيارات التي حولي."
    ],
    optionsSv: [
      "Köra i max tillåten hastighet.",
      "Anpassa hastigheten efter sikt, väglag och trafik.",
      "Alltid köra 50 km/h.",
      "Köra lika fort som andra."
    ],
    correctIdx: 1
  },
  {
    id: "sc59",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <rect x="0" y="60" width="200" height="30" fill="#37474f"/>
      
      <!-- Meeting on narrow road -->
      <rect x="80" y="60" width="40" height="30" fill="#78909c"/> <!-- Obstacle -->
      
      <!-- Your Car (Blue) - blocked -->
      <g transform="translate(40, 67)">
        <rect width="32" height="16" rx="4" fill="#1e88e5"/>
      </g>
      
      <!-- Opposing Car (Red) - free path -->
      <g transform="translate(140, 67)">
        <rect width="32" height="16" rx="4" fill="#e53935"/>
      </g>
    </svg>`,
    questionAr: "أنت تقابل سيارة أخرى في طريق ضيق جداً (Meeting). من الذي يجب أن يتوقف؟",
    questionSv: "Du möter ett annat fordon på en mycket smal väg. Vem ska stanna?",
    optionsAr: [
      "السيارة الأكبر.",
      "السيارة التي لديها عائق في جهتها من الطريق، أو كلاهما للتفاهم.",
      "دائماً السيارة القادمة من جهة اليمين.",
      "السيارة الأقدم."
    ],
    optionsSv: [
      "Det största fordonet.",
      "Den som har hindret på sin sida, eller båda för att visa hänsyn.",
      "Alltid bilen från höger.",
      "Den äldsta bilen."
    ],
    correctIdx: 1
  },
  {
    id: "sc60",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#7cb342"/>
      <rect x="0" y="60" width="200" height="40" fill="#37474f"/>
      
      <!-- Accident Scene -->
      <g transform="translate(100, 72) rotate(45)">
        <rect width="35" height="18" rx="4" fill="#e53935"/>
      </g>
      <g transform="translate(150, 40)">
        <polygon points="0,15 10,0 20,15" fill="#d32f2f"/>
      </g>
      
      <!-- Emergency Call icon -->
      <g transform="translate(20, 20)">
        <rect width="20" height="30" fill="#333" rx="3"/>
        <text x="10" y="20" font-size="8" fill="#fff" text-anchor="middle">112</text>
      </g>
    </svg>`,
    questionAr: "ما هو التصرف الصحيح إذا شاهدت حادثاً مرورياً على الطريق؟",
    questionSv: "Vad är rätt handlande om du kommer först till en olycksplats?",
    optionsAr: [
      "تصوير الحادث ونشره في وسائل التواصل.",
      "الاستمرار في القيادة لعدم إعاقة المرور.",
      "التوقف، تأمين المكان (مثلث التحذير)، مساعدة المصابين، والاتصال بـ 112.",
      "البحث عن شهود."
    ],
    optionsSv: [
      "Filma olyckan.",
      "Köra vidare.",
      "Stanna, varna (varningstriangel), hjälpa skadade och larma 112.",
      "Leta vittnen."
    ],
    correctIdx: 2
  }
];

if (typeof module !== 'undefined') module.exports = { SCENARIOS };
