const SCENARIOS = [
  {
    id: "sc1",
    signId: "B1",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="80" y="0" width="40" height="150" fill="#455a64"/>
      <rect x="0" y="55" width="200" height="40" fill="#455a64"/>
      <rect x="80" y="55" width="40" height="40" fill="#455a64"/>
      <line x1="100" y1="0" x2="100" y2="55" stroke="#fff" stroke-width="2" stroke-dasharray="6,6"/>
      <line x1="100" y1="95" x2="100" y2="150" stroke="#fff" stroke-width="2" stroke-dasharray="6,6"/>
      <line x1="0" y1="75" x2="80" y2="75" stroke="#fff" stroke-width="2" stroke-dasharray="6,6"/>
      <line x1="120" y1="75" x2="200" y2="75" stroke="#fff" stroke-width="2" stroke-dasharray="6,6"/>
      <line x1="80" y1="95" x2="120" y2="95" stroke="#fff" stroke-width="4" stroke-dasharray="4,4"/>
      <rect x="105" y="105" width="14" height="26" rx="3" fill="#2196f3"/>
      <rect x="60" y="58" width="26" height="14" rx="3" fill="#f44336"/>
      <g transform="translate(130, 100) scale(0.6)">
        <polygon points="25,50 0,0 50,0" fill="#fff" stroke="#d32f2f" stroke-width="6" stroke-linejoin="round"/>
      </g>
    </svg>`,
    questionAr: "تصل إلى هذا التقاطع وتلاحظ هذه العلامة. سيارة قادمة من اليسار. ماذا تفعل؟",
    questionSv: "Du kommer till denna korsning och ser detta märke. En bil kommer från vänster. Vad gör du?",
    optionsAr: [
      "أتوقف تماماً وأعطي الأولوية للسيارة.",
      "أخفض سرعتي وأعطي الأولوية للسيارة.",
      "لدي الأولوية، أستمر بالقيادة.",
      "أُعطي الأولوية فقط للسيارات القادمة من اليمين."
    ],
    optionsSv: [
      "Jag stannar helt och lämnar företräde.",
      "Jag sänker farten och lämnar företräde.",
      "Jag har företräde, jag fortsätter köra.",
      "Jag lämnar endast företräde åt höger."
    ],
    correctIdx: 1
  },
  {
    id: "sc2",
    signId: "E5",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#c8e6c9"/>
      <rect x="0" y="55" width="200" height="40" fill="#455a64"/>
      <line x1="0" y1="75" x2="200" y2="75" stroke="#fff" stroke-width="2" stroke-dasharray="8,8"/>
      <line x1="0" y1="55" x2="200" y2="55" stroke="#fff" stroke-width="1"/>
      <line x1="0" y1="95" x2="200" y2="95" stroke="#fff" stroke-width="1"/>
      <rect x="40" y="78" width="28" height="14" rx="3" fill="#2196f3"/>
      <path d="M 75 85 L 85 85 L 80 80 M 85 85 L 80 90" stroke="#2196f3" stroke-width="2" fill="none"/>
      <g transform="translate(100, 20)">
        <rect width="60" height="20" fill="#fff" stroke="#000" stroke-width="2"/>
        <text x="30" y="14" font-family="sans-serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Stockholm</text>
      </g>
      <rect x="128" y="40" width="4" height="15" fill="#757575"/>
    </svg>`,
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
    signId: "B7",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <path d="M 0 50 L 60 50 C 80 50, 90 60, 110 60 L 200 60 L 200 90 L 110 90 C 90 90, 80 100, 60 100 L 0 100 Z" fill="#455a64"/>
      <line x1="0" y1="75" x2="60" y2="75" stroke="#fff" stroke-width="2" stroke-dasharray="6,6"/>
      <rect x="10" y="78" width="28" height="14" rx="3" fill="#2196f3"/>
      <rect x="160" y="65" width="28" height="14" rx="3" fill="#f44336"/>
      <g transform="translate(60, 10)">
        <circle cx="20" cy="20" r="18" fill="#fff" stroke="#d32f2f" stroke-width="4"/>
        <polygon points="12,25 12,12 8,12 15,4 22,12 18,12 18,25" fill="#000"/>
        <polygon points="25,15 25,28 21,28 28,36 35,28 31,28 31,15" fill="#d32f2f"/>
      </g>
      <rect x="78" y="46" width="4" height="14" fill="#757575"/>
    </svg>`,
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
    signId: "C31",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#c8e6c9"/>
      <rect x="0" y="70" width="200" height="40" fill="#455a64"/>
      <line x1="0" y1="90" x2="200" y2="90" stroke="#fff" stroke-width="2" stroke-dasharray="8,8"/>
      <rect x="0" y="40" width="200" height="30" fill="#e0e0e0"/>
      <circle cx="150" cy="55" r="4" fill="#ff9800"/>
      <rect x="148" y="60" width="4" height="8" fill="#2196f3"/>
      <circle cx="170" cy="50" r="4" fill="#9c27b0"/>
      <rect x="168" y="55" width="4" height="8" fill="#e91e63"/>
      <rect x="40" y="95" width="28" height="14" rx="3" fill="#2196f3"/>
      <g transform="translate(80, 10)">
        <circle cx="20" cy="20" r="18" fill="#ffeb3b" stroke="#d32f2f" stroke-width="4"/>
        <text x="20" y="26" font-family="sans-serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">30</text>
      </g>
      <rect x="98" y="46" width="4" height="24" fill="#757575"/>
    </svg>`,
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
    signId: "E7",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#bdbdbd"/>
      <path d="M 20 0 L 20 150 M 40 0 L 40 150 M 60 0 L 60 150 M 80 0 L 80 150 M 100 0 L 100 150 M 120 0 L 120 150 M 140 0 L 140 150 M 160 0 L 160 150 M 180 0 L 180 150" stroke="#9e9e9e" stroke-width="1"/>
      <path d="M 0 20 L 200 20 M 0 40 L 200 40 M 0 60 L 200 60 M 0 80 L 200 80 M 0 100 L 200 100 M 0 120 L 200 120 M 0 140 L 200 140" stroke="#9e9e9e" stroke-width="1"/>
      <circle cx="100" cy="50" r="6" fill="#f44336"/>
      <rect x="96" y="58" width="8" height="12" fill="#3f51b5"/>
      <circle cx="140" cy="80" r="6" fill="#4caf50"/>
      <rect x="136" y="88" width="8" height="12" fill="#ff9800"/>
      <rect x="-10" y="65" width="30" height="16" rx="3" fill="#2196f3"/>
      <g transform="translate(10, 10)">
        <rect width="30" height="40" fill="#1976d2" rx="3"/>
        <circle cx="15" cy="18" r="4" fill="#fff"/>
        <path d="M 12 25 L 8 40 M 18 25 L 22 40 M 10 32 L 20 32" stroke="#fff" stroke-width="2" fill="none"/>
        <rect x="14" y="22" width="2" height="10" fill="#fff"/>
      </g>
    </svg>`,
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
    signId: "D1",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <circle cx="100" cy="75" r="40" fill="#455a64"/>
      <circle cx="100" cy="75" r="25" fill="#a5d6a7"/>
      <rect x="80" y="0" width="40" height="35" fill="#455a64"/>
      <rect x="80" y="115" width="40" height="35" fill="#455a64"/>
      <rect x="0" y="55" width="60" height="40" fill="#455a64"/>
      <rect x="140" y="55" width="60" height="40" fill="#455a64"/>
      <rect x="90" y="120" width="20" height="10" rx="2" fill="#2196f3"/>
      <rect x="10" y="65" width="30" height="16" rx="3" fill="#f44336"/>
      <g transform="translate(85, 135) rotate(180) scale(0.4)">
        <circle cx="20" cy="20" r="18" fill="#1976d2" stroke="#fff" stroke-width="2"/>
        <path d="M 20 5 L 20 35 M 10 15 L 20 5 L 30 15" stroke="#fff" stroke-width="4" fill="none"/>
      </g>
    </svg>`,
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="80" y="0" width="40" height="150" fill="#455a64"/>
      <rect x="0" y="55" width="200" height="40" fill="#455a64"/>
      <rect x="90" y="125" width="20" height="10" rx="2" fill="#2196f3"/>
      <rect x="125" y="65" width="30" height="16" rx="3" fill="#f44336"/>
    </svg>`,
    questionAr: "في هذا التقاطع لا توجد أي علامات مرورية أو إشارات ضوئية. سيارة قادمة من يمينك. ما هي القاعدة؟",
    questionSv: "I denna korsning finns inga märken eller signaler. En bil kommer från höger. Vilken regel gäller?",
    optionsAr: [
      "قاعدة اليمين (Högerregeln): يجب أن أفسح المجال للسيارة القادمة من اليمين.",
      "قاعدة الأولوية للقادم من الطريق الرئيسي.",
      "لي الأولوية لأنني أسير في خط مستقيم.",
      "السيارة القادمة من اليمين يجب أن تنتظر."
    ],
    optionsSv: [
      "Högerregeln: Jag måste lämna företräde åt bilen från höger.",
      "Huvudledsregeln gäller.",
      "Jag har företräde eftersom jag kör rakt fram.",
      "Bilen från höger måste vänta."
    ],
    correctIdx: 0
  },
  {
    id: "sc8",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#90caf9"/>
      <rect x="0" y="60" width="200" height="60" fill="#455a64"/>
      <line x1="0" y1="90" x2="200" y2="90" stroke="#fff" stroke-width="3" stroke-dasharray="10,10"/>
      <rect x="40" y="95" width="35" height="18" rx="4" fill="#2196f3"/>
      <rect x="140" y="65" width="45" height="22" rx="4" fill="#f44336"/>
      <rect x="145" y="62" width="10" height="5" fill="#2196f3"/>
      <rect x="175" y="62" width="10" height="5" fill="#2196f3"/>
      <path d="M 150 50 L 180 50 L 165 20 Z" fill="#fff" stroke="#d32f2f" stroke-width="2"/>
    </svg>`,
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="55" width="200" height="40" fill="#455a64"/>
      <rect x="100" y="55" width="40" height="40" fill="#fff"/>
      <rect x="110" y="55" width="20" height="40" fill="#455a64"/>
      <rect x="40" y="65" width="28" height="14" rx="3" fill="#2196f3"/>
      <circle cx="110" cy="40" r="8" fill="#ffccbc"/>
      <circle cx="110" cy="32" r="5" fill="#ffccbc"/>
    </svg>`,
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#388e3c"/>
      <rect x="0" y="40" width="200" height="70" fill="#455a64"/>
      <line x1="0" y1="75" x2="200" y2="75" stroke="#fff" stroke-width="2" stroke-dasharray="15,15"/>
      <rect x="20" y="45" width="35" height="18" rx="4" fill="#2196f3"/>
      <rect x="140" y="85" width="35" height="18" rx="4" fill="#f44336"/>
      <g transform="translate(90, 10)">
        <rect width="20" height="25" fill="#1976d2" stroke="#fff" stroke-width="2"/>
        <path d="M 10 20 L 10 5 M 5 10 L 10 5 L 15 10" stroke="#fff" stroke-width="3" fill="none"/>
      </g>
    </svg>`,
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
  }
  {
    id: "sc11",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="120" y="0" width="40" height="150" fill="#455a64"/>
      <rect x="120" y="60" width="40" height="40" fill="#455a64"/>
      <rect x="60" y="10" width="26" height="14" rx="3" fill="#f44336"/>
      <rect x="125" y="110" width="14" height="26" rx="3" fill="#2196f3"/>
      <g transform="translate(145, 45) scale(0.5)">
        <rect width="24" height="30" fill="#fff" stroke="#d32f2f" stroke-width="4"/>
        <circle cx="12" cy="10" r="4" fill="#000"/>
        <path d="M 4 20 L 20 20" stroke="#000" stroke-width="3"/>
      </g>
    </svg>`,
    questionAr: "تصل إلى هذا التقاطع وتلاحظ وجود خط توقف (Stop line) وعلامة قف. ماذا تفعل؟",
    questionSv: "Du kommer till en korsning med stopplinje och stopplikt. Vad gör du?",
    optionsAr: [
      "أخفض سرعتي وأتأكد من خلو الطريق ثم أستمر.",
      "يجب أن أتوقف تماماً عند خط التوقف قبل المتابعة.",
      "أتوقف فقط إذا كانت هناك سيارات قادمة.",
      "أعطي تنبيهاً ضوئياً وأستمر."
    ],
    optionsSv: [
      "Jag sänker farten och kontrollerar trafiken innan jag kör vidare.",
      "Jag måste stanna helt vid stopplinjen innan jag fortsätter.",
      "Jag stannar bara om det kommer bilar.",
      "Jag blinkar och kör vidare."
    ],
    correctIdx: 1
  },
  {
    id: "sc12",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="40" y="0" width="120" height="150" fill="#455a64"/>
      <line x1="100" y1="0" x2="100" y2="150" stroke="#fff" stroke-width="4"/>
      <rect x="60" y="100" width="28" height="16" rx="3" fill="#2196f3"/>
      <g transform="translate(165, 30)">
        <rect width="30" height="40" fill="#1976d2" stroke="#fff" stroke-width="2"/>
        <text x="15" y="25" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">M</text>
      </g>
    </svg>`,
    questionAr: "أنت تقود في طريق ضيق وترى هذه العلامة (M). ماذا تعني؟",
    questionSv: "Du kör på en smal väg och ser detta märke (M). Vad betyder det?",
    optionsAr: [
      "مكان مخصص للوقوف الطويل (Motorway).",
      "مكان التقاء (Mötesplats): مكان لتسهيل التقابل في الطرق الضيقة.",
      "بداية طريق سريع.",
      "منطقة سكنية."
    ],
    optionsSv: [
      "Långtidsparkering (Motorway).",
      "Mötesplats: En plats för att underlätta möte på smala vägar.",
      "Början på motorväg.",
      "Bostadsområde."
    ],
    correctIdx: 1
  },
  {
    id: "sc13",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="140" y="45" width="40" height="15" fill="#ffeb3b"/>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
      <g transform="translate(150, 20)">
        <rect width="20" height="25" fill="#fff" stroke="#000" stroke-width="2"/>
        <rect x="4" y="4" width="12" height="8" fill="#ffeb3b" stroke="#000" stroke-width="1"/>
        <circle cx="7" cy="16" r="2" fill="#000"/>
        <circle cx="13" cy="16" r="2" fill="#000"/>
      </g>
    </svg>`,
    questionAr: "أنت تقترب من محطة باصات في منطقة سرعتها 50 كم/س. الباص أعطى إشارة للخروج من المحطة. ماذا تفعل؟",
    questionSv: "Du närmar dig en busshållplats i ett 50-område. Bussen blinkar ut. Vad gör du?",
    optionsAr: [
      "أستمر في القيادة، الأولوية لي.",
      "يجب أن أخفض سرعتي وأسمح للباص بالخروج (قاعدة الباص).",
      "أستخدم البوق لأنبه الباص أنني قادم.",
      "أتجاوز الباص بسرعة قبل أن يخرج."
    ],
    optionsSv: [
      "Jag fortsätter köra, jag har företräde.",
      "Jag måste sänka farten och låta bussen köra ut (bussregeln).",
      "Jag tutar för att varna bussen.",
      "Jag kör om bussen snabbt innan den hinner ut."
    ],
    correctIdx: 1
  },
  {
    id: "sc14",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#c8e6c9"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="130" y="60" width="40" height="40" fill="#42a5f5"/>
      <rect x="135" y="60" width="30" height="40" fill="#455a64"/>
      <rect x="40" y="72" width="28" height="14" rx="3" fill="#2196f3"/>
      <g transform="translate(140, 25)">
        <circle cx="10" cy="10" r="10" fill="#1976d2" stroke="#fff" stroke-width="1"/>
        <circle cx="6" cy="12" r="3" fill="none" stroke="#fff" stroke-width="1"/>
        <circle cx="14" cy="12" r="3" fill="none" stroke="#fff" stroke-width="1"/>
        <path d="M 6 12 L 14 12 M 10 12 L 10 7 L 7 7" stroke="#fff" stroke-width="1" fill="none"/>
      </g>
    </svg>`,
    questionAr: "أنت تقود وتمر بجانب ممر للدراجات الهوائية. ما الذي يجب أن تنتبه إليه؟",
    questionSv: "Du kör förbi en cykelbana. Vad ska du vara extra uppmärksam på?",
    optionsAr: [
      "لا شيء، الدراجات لا تؤثر على حركة السيارات.",
      "الدراجات قد تخرج فجأة إلى الطريق، ويجب إعطاؤهم مساحة كافية عند التجاوز.",
      "الدراجات يجب أن تتوقف دائماً عند رؤية سيارة.",
      "يُمنع وجود الدراجات في هذا الطريق."
    ],
    optionsSv: [
      "Ingenting, cyklar påverkar inte biltrafiken.",
      "Cyklister kan svänga ut på vägen, jag måste hålla säkert avstånd vid omkörning.",
      "Cyklister måste alltid stanna när de ser en bil.",
      "Cyklar är förbjudna på denna väg."
    ],
    correctIdx: 1
  },
  {
    id: "sc15",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="70" width="200" height="40" fill="#455a64"/>
      <rect x="80" y="60" width="40" height="60" fill="#78909c"/>
      <line x1="80" y1="90" x2="120" y2="90" stroke="#ffeb3b" stroke-width="4"/>
      <line x1="80" y1="80" x2="120" y2="80" stroke="#ffeb3b" stroke-width="4"/>
      <line x1="80" y1="100" x2="120" y2="100" stroke="#ffeb3b" stroke-width="4"/>
      <rect x="30" y="82" width="28" height="14" rx="3" fill="#2196f3"/>
      <g transform="translate(140, 20)">
        <polygon points="15,0 30,30 0,30" fill="#fff" stroke="#d32f2f" stroke-width="3"/>
        <rect x="10" y="10" width="10" height="15" fill="#000"/>
        <rect x="12" y="5" width="6" height="5" fill="#000"/>
      </g>
    </svg>`,
    questionAr: "أنت تقترب من تقاطع مع سكة حديد بدون حواجز. ماذا تفعل؟",
    questionSv: "Du närmar dig en järnvägskorsning utan bommar. Vad gör du?",
    optionsAr: [
      "أعبر بسرعة لأتجنب القطار.",
      "أخفض السرعة، أنظر جيداً لليسار واليمين وأستمع لأي صوت قطار قبل العبور.",
      "أستمر بنفس السرعة، القطار سيعطي تنبيهاً.",
      "أتوقف تماماً لمدة دقيقة ثم أعبر."
    ],
    optionsSv: [
      "Jag kör snabbt över för att undvika tåget.",
      "Jag sänker farten, tittar noga åt båda hållen och lyssnar efter tåg innan jag kör över.",
      "Jag fortsätter i samma fart, tåget kommer tuta.",
      "Jag stannar helt i en minut innan jag kör över."
    ],
    correctIdx: 1
  }
];

if (typeof module !== 'undefined') module.exports = { SCENARIOS };
