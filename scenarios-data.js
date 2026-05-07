const SCENARIOS = [
  {
    id: "sc1",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#81c784"/>
      <rect x="75" y="0" width="50" height="150" fill="#455a64"/>
      <rect x="0" y="50" width="200" height="50" fill="#455a64"/>
      <line x1="100" y1="0" x2="100" y2="150" stroke="#fff" stroke-width="2" stroke-dasharray="10,10"/>
      <line x1="0" y1="75" x2="200" y2="75" stroke="#fff" stroke-width="2" stroke-dasharray="10,10"/>
      <!-- Blue Car -->
      <g transform="translate(105, 110)">
        <rect width="18" height="30" rx="3" fill="#2196f3"/>
        <rect x="2" y="5" width="14" height="8" fill="#e3f2fd" opacity="0.7"/>
        <rect x="3" y="1" width="3" height="2" fill="#ffeb3b"/>
        <rect x="12" y="1" width="3" height="2" fill="#ffeb3b"/>
      </g>
      <!-- Red Car -->
      <g transform="translate(40, 55)">
        <rect width="30" height="18" rx="3" fill="#f44336"/>
        <rect x="20" y="2" width="8" height="14" fill="#ffebee" opacity="0.7"/>
        <rect x="29" y="3" width="2" height="4" fill="#ffeb3b"/>
        <rect x="29" y="11" width="2" height="4" fill="#ffeb3b"/>
      </g>
    </svg>`,
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#81c784"/>
      <rect x="0" y="55" width="200" height="40" fill="#455a64"/>
      <line x1="0" y1="75" x2="200" y2="75" stroke="#fff" stroke-width="2" stroke-dasharray="8,8"/>
      <!-- Blue Car -->
      <g transform="translate(40, 78)">
        <rect width="30" height="16" rx="3" fill="#2196f3"/>
        <rect x="20" y="2" width="8" height="12" fill="#e3f2fd" opacity="0.7"/>
        <circle cx="28" cy="4" r="2" fill="#ffeb3b"><animate attributeName="opacity" values="1;0;1" dur="0.5s" repeatCount="indefinite"/></circle>
      </g>
      <!-- Town Sign -->
      <g transform="translate(100, 15)">
        <rect width="60" height="25" fill="#fff" stroke="#000" stroke-width="2"/>
        <text x="30" y="17" font-family="sans-serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Stockholm</text>
      </g>
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#81c784"/>
      <path d="M 0 50 L 60 50 C 80 50, 90 60, 110 60 L 200 60 L 200 90 L 110 90 C 90 90, 80 100, 60 100 L 0 100 Z" fill="#455a64"/>
      <line x1="0" y1="75" x2="60" y2="75" stroke="#fff" stroke-width="2" stroke-dasharray="6,6"/>
      <!-- Blue Car -->
      <g transform="translate(10, 78)">
        <rect width="30" height="16" rx="3" fill="#2196f3"/>
        <rect x="20" y="2" width="7" height="12" fill="#e3f2fd" opacity="0.7"/>
      </g>
      <!-- Red Car (Meeting) -->
      <g transform="translate(160, 64) rotate(180, 15, 8)">
        <rect width="30" height="16" rx="3" fill="#f44336"/>
        <rect x="20" y="2" width="7" height="12" fill="#ffebee" opacity="0.7"/>
      </g>
      <!-- Sign -->
      <g transform="translate(60, 5)">
        <circle cx="20" cy="20" r="18" fill="#fff" stroke="#d32f2f" stroke-width="3"/>
        <path d="M 15 10 L 15 30 M 10 15 L 15 10 L 20 15" stroke="#000" stroke-width="3" fill="none"/>
        <path d="M 25 30 L 25 10 M 20 25 L 25 30 L 30 25" stroke="#d32f2f" stroke-width="3" fill="none"/>
      </g>
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#9e9e9e"/>
      <rect x="0" y="70" width="200" height="40" fill="#455a64"/>
      <line x1="0" y1="90" x2="200" y2="90" stroke="#fff" stroke-width="2" stroke-dasharray="8,8"/>
      <!-- Sidewalk with children -->
      <rect x="0" y="40" width="200" height="30" fill="#bdbdbd"/>
      <circle cx="150" cy="55" r="4" fill="#ff9800"/>
      <circle cx="170" cy="50" r="4" fill="#9c27b0"/>
      <!-- Blue Car -->
      <g transform="translate(40, 92)">
        <rect width="30" height="16" rx="3" fill="#2196f3"/>
        <rect x="20" y="2" width="7" height="12" fill="#e3f2fd" opacity="0.7"/>
      </g>
      <!-- Speed Sign -->
      <g transform="translate(80, 5)">
        <circle cx="18" cy="18" r="16" fill="#ffeb3b" stroke="#d32f2f" stroke-width="3"/>
        <text x="18" y="23" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">30</text>
      </g>
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <!-- Pavement/Houses area -->
      <rect x="0" y="0" width="200" height="150" fill="#b0bec5"/>
      <path d="M 0 20 L 200 20 M 0 40 L 200 40 M 0 60 L 200 60 M 0 80 L 200 80 M 0 100 L 200 100 M 0 120 L 200 120 M 120 0 L 120 150" stroke="#90a4ae" stroke-width="1"/>
      <!-- Blue Car -->
      <g transform="translate(10, 80)">
        <rect width="32" height="18" rx="3" fill="#2196f3"/>
        <rect x="22" y="2" width="8" height="14" fill="#e3f2fd" opacity="0.7"/>
      </g>
      <!-- People -->
      <circle cx="100" cy="50" r="5" fill="#f44336"/>
      <circle cx="140" cy="80" r="5" fill="#4caf50"/>
      <!-- Sign -->
      <g transform="translate(10, 10)">
        <rect width="25" height="35" fill="#1976d2" rx="2"/>
        <circle cx="12" cy="12" r="4" fill="#fff"/>
        <path d="M 12 16 L 12 28 M 8 20 L 16 20 M 12 28 L 8 33 M 12 28 L 16 33" stroke="#fff" stroke-width="2"/>
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#81c784"/>
      <!-- Roundabout -->
      <circle cx="100" cy="75" r="45" fill="#455a64"/>
      <circle cx="100" cy="75" r="25" fill="#81c784"/>
      <!-- Roads -->
      <rect x="85" y="0" width="30" height="35" fill="#455a64"/>
      <rect x="85" y="115" width="30" height="35" fill="#455a64"/>
      <rect x="0" y="60" width="60" height="30" fill="#455a64"/>
      <rect x="140" y="60" width="60" height="30" fill="#455a64"/>
      <!-- Blue Car entering -->
      <g transform="translate(92, 125)">
        <rect width="16" height="22" rx="3" fill="#2196f3"/>
      </g>
      <!-- Red Car inside -->
      <g transform="translate(65, 67)">
        <rect width="22" height="16" rx="3" fill="#f44336"/>
        <rect x="12" y="2" width="6" height="12" fill="#ffebee" opacity="0.7"/>
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
      <rect width="200" height="150" fill="#81c784"/>
      <rect x="75" y="0" width="50" height="150" fill="#455a64"/>
      <rect x="0" y="50" width="200" height="50" fill="#455a64"/>
      <!-- Blue Car -->
      <g transform="translate(105, 120)">
        <rect width="18" height="28" rx="3" fill="#2196f3"/>
        <rect x="2" y="5" width="14" height="7" fill="#e3f2fd" opacity="0.7"/>
      </g>
      <!-- Red Car from right -->
      <g transform="translate(160, 55)">
        <rect width="28" height="18" rx="3" fill="#f44336"/>
        <rect x="5" y="2" width="7" height="14" fill="#ffebee" opacity="0.7"/>
      </g>
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
      <rect x="0" y="60" width="200" height="50" fill="#455a64"/>
      <line x1="0" y1="85" x2="200" y2="85" stroke="#fff" stroke-width="2" stroke-dasharray="10,10"/>
      <!-- Blue Car -->
      <g transform="translate(40, 88)">
        <rect width="32" height="18" rx="3" fill="#2196f3"/>
        <rect x="22" y="2" width="8" height="14" fill="#e3f2fd" opacity="0.7"/>
      </g>
      <!-- Ambulance -->
      <g transform="translate(140, 65)">
        <rect width="45" height="22" rx="4" fill="#fff" stroke="#d32f2f" stroke-width="2"/>
        <rect x="5" y="4" width="8" height="14" fill="#2196f3"><animate attributeName="opacity" values="1;0;1" dur="0.4s" repeatCount="indefinite"/></rect>
        <rect x="32" y="4" width="8" height="14" fill="#d32f2f"><animate attributeName="opacity" values="0;1;0" dur="0.4s" repeatCount="indefinite"/></rect>
      </g>
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
      <rect width="200" height="150" fill="#81c784"/>
      <rect x="0" y="55" width="200" height="40" fill="#455a64"/>
      <!-- Zebra -->
      <rect x="100" y="55" width="40" height="40" fill="#fff"/>
      <rect x="110" y="55" width="20" height="40" fill="#455a64"/>
      <!-- Blue Car -->
      <g transform="translate(30, 67)">
        <rect width="32" height="18" rx="3" fill="#2196f3"/>
        <rect x="22" y="2" width="8" height="14" fill="#e3f2fd" opacity="0.7"/>
      </g>
      <!-- Pedestrian -->
      <g transform="translate(115, 30)">
        <circle cx="5" cy="5" r="4" fill="#ffccbc"/>
        <rect x="3" y="10" width="4" height="8" fill="#5c6bc0"/>
      </g>
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
      <!-- Blue Car -->
      <g transform="translate(40, 48)">
        <rect width="32" height="18" rx="3" fill="#2196f3"/>
        <rect x="22" y="2" width="8" height="14" fill="#e3f2fd" opacity="0.7"/>
      </g>
      <!-- Sign -->
      <g transform="translate(160, 10)">
        <rect width="30" height="20" fill="#1976d2" rx="2"/>
        <path d="M 5 10 L 25 10 M 20 5 L 25 10 L 20 15" stroke="#fff" stroke-width="2" fill="none"/>
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
  },
  {
    id: "sc11",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#81c784"/>
      <rect x="0" y="50" width="200" height="50" fill="#455a64"/>
      <line x1="0" y1="75" x2="200" y2="75" stroke="#fff" stroke-width="3" stroke-dasharray="15,10"/>
      <!-- Blue Car -->
      <g transform="translate(60, 78)">
        <rect width="32" height="18" rx="3" fill="#2196f3"/>
        <rect x="22" y="2" width="8" height="14" fill="#e3f2fd" opacity="0.7"/>
      </g>
      <!-- Speed Sign -->
      <g transform="translate(140, 10)">
        <circle cx="18" cy="18" r="16" fill="#ffeb3b" stroke="#d32f2f" stroke-width="3"/>
        <text x="18" y="23" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">70</text>
      </g>
    </svg>`,
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#81c784"/>
      <rect x="75" y="0" width="50" height="150" fill="#455a64"/>
      <rect x="0" y="50" width="200" height="50" fill="#455a64"/>
      <!-- Blue Car -->
      <g transform="translate(90, 110)">
        <rect width="18" height="30" rx="3" fill="#2196f3"/>
        <rect x="2" y="5" width="14" height="8" fill="#e3f2fd" opacity="0.7"/>
      </g>
      <!-- Sign: No Right Turn -->
      <g transform="translate(130, 60)">
        <circle cx="15" cy="15" r="14" fill="#fff" stroke="#d32f2f" stroke-width="2"/>
        <path d="M 8 15 L 22 15 L 18 11 M 22 15 L 18 19" stroke="#000" stroke-width="2" fill="none"/>
        <line x1="5" y1="25" x2="25" y2="5" stroke="#d32f2f" stroke-width="2"/>
      </g>
    </svg>`,
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#bdbdbd"/>
      <rect x="70" y="0" width="60" height="150" fill="#455a64"/>
      <!-- Blue Car -->
      <g transform="translate(85, 110)">
        <rect width="30" height="30" rx="3" fill="#2196f3"/>
      </g>
      <!-- No Entry Sign -->
      <g transform="translate(85, 20)">
        <circle cx="15" cy="15" r="14" fill="#d32f2f"/>
        <rect x="5" y="12" width="20" height="6" fill="#fff"/>
      </g>
    </svg>`,
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#81c784"/>
      <rect x="0" y="55" width="200" height="40" fill="#455a64"/>
      <!-- Double Solid Lines -->
      <line x1="0" y1="73" x2="200" y2="73" stroke="#fff" stroke-width="1.5"/>
      <line x1="0" y1="77" x2="200" y2="77" stroke="#fff" stroke-width="1.5"/>
      <!-- Blue Car -->
      <g transform="translate(30, 78)">
        <rect width="32" height="18" rx="3" fill="#2196f3"/>
      </g>
      <!-- Red Car -->
      <g transform="translate(100, 78)">
        <rect width="32" height="18" rx="3" fill="#f44336"/>
      </g>
    </svg>`,
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <!-- Road -->
      <rect x="0" y="55" width="200" height="40" fill="#455a64"/>
      <rect x="0" y="73" width="200" height="2" fill="#fff" stroke-dasharray="8,4"/>
      <!-- Ambulance (White with Blue Flash) -->
      <g transform="translate(130, 60)">
        <rect width="35" height="20" rx="2" fill="#ffffff"/>
        <rect x="5" y="5" width="25" height="10" fill="#e3f2fd" opacity="0.6"/>
        <rect x="0" y="8" width="35" height="4" fill="#d32f2f"/>
        <rect x="25" y="0" width="8" height="3" fill="#2196f3">
          <animate attributeName="opacity" values="1;0.2;1" dur="0.4s" repeatCount="indefinite"/>
        </rect>
      </g>
      <!-- Your Car -->
      <g transform="translate(30, 68)">
        <rect width="25" height="16" rx="3" fill="#2196f3"/>
        <rect x="18" y="2" width="5" height="12" fill="#e3f2fd" opacity="0.7"/>
      </g>
    </svg>`,
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#81c784"/>
      <!-- Intersection -->
      <rect x="75" y="0" width="50" height="150" fill="#455a64"/>
      <rect x="0" y="50" width="200" height="50" fill="#455a64"/>
      <!-- Yellow Car from Right -->
      <g transform="translate(140, 67)">
        <rect width="25" height="16" rx="3" fill="#ffeb3b"/>
        <rect x="2" y="2" width="6" height="12" fill="#fff9c4" opacity="0.7"/>
      </g>
      <!-- Your Car -->
      <g transform="translate(88, 120)">
        <rect width="24" height="28" rx="4" fill="#2196f3"/>
        <rect x="4" y="5" width="16" height="8" fill="#e3f2fd" opacity="0.7"/>
      </g>
    </svg>`,
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#81c784"/>
      <rect x="0" y="50" width="200" height="50" fill="#455a64"/>
      <!-- Zebra Crossing -->
      <g fill="#fff">
        <rect x="80" y="50" width="8" height="50"/>
        <rect x="95" y="50" width="8" height="50"/>
        <rect x="110" y="50" width="8" height="50"/>
      </g>
      <!-- Pedestrian -->
      <circle cx="100" cy="40" r="5" fill="#f44336"/>
      <rect x="98" y="45" width="4" height="8" fill="#f44336"/>
      <!-- Your Car -->
      <g transform="translate(20, 67)">
        <rect width="25" height="16" rx="3" fill="#2196f3"/>
        <rect x="15" y="2" width="6" height="12" fill="#e3f2fd" opacity="0.7"/>
      </g>
    </svg>`,
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#90a4ae"/>
      <rect x="0" y="60" width="200" height="30" fill="#455a64"/>
      <!-- Railway -->
      <rect x="90" y="0" width="20" height="150" fill="#37474f"/>
      <rect x="90" y="0" width="2" height="150" fill="#9e9e9e"/>
      <rect x="108" y="0" width="2" height="150" fill="#9e9e9e"/>
      <g stroke="#9e9e9e" stroke-width="1">
        <line x1="90" y1="20" x2="110" y2="20"/><line x1="90" y1="40" x2="110" y2="40"/>
        <line x1="90" y1="60" x2="110" y2="60"/><line x1="90" y1="80" x2="110" y2="80"/>
      </g>
      <!-- Barriers (Red/White) -->
      <rect x="75" y="55" width="5" height="40" fill="#d32f2f"/>
      <rect x="75" y="65" width="5" height="10" fill="#fff"/>
      <rect x="75" y="85" width="5" height="10" fill="#fff"/>
      <!-- Your Car -->
      <g transform="translate(30, 67)">
        <rect width="25" height="16" rx="3" fill="#2196f3"/>
      </g>
    </svg>`,
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#81c784"/>
      <rect x="0" y="50" width="200" height="50" fill="#455a64"/>
      <!-- Bus Stop -->
      <rect x="100" y="45" width="50" height="5" fill="#ffeb3b"/>
      <!-- Bus -->
      <g transform="translate(110, 60)">
        <rect width="45" height="22" rx="2" fill="#ff9800"/>
        <rect x="5" y="3" width="10" height="16" fill="#e3f2fd" opacity="0.6"/>
        <rect x="35" y="2" width="6" height="4" fill="#ffeb3b">
          <animate attributeName="opacity" values="1;0;1" dur="0.6s" repeatCount="indefinite"/>
        </rect>
      </g>
      <!-- Your Car -->
      <g transform="translate(20, 67)">
        <rect width="25" height="16" rx="3" fill="#2196f3"/>
      </g>
    </svg>`,
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
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#81c784"/>
      <!-- T-Junction -->
      <rect x="75" y="0" width="50" height="150" fill="#455a64"/>
      <rect x="0" y="50" width="75" height="50" fill="#455a64"/>
      <!-- Your Car (at bottom) -->
      <g transform="translate(88, 120)">
        <rect width="24" height="28" rx="4" fill="#2196f3"/>
      </g>
      <!-- Car from left -->
      <g transform="translate(20, 67)">
        <rect width="25" height="16" rx="3" fill="#ff9800"/>
      </g>
    </svg>`,
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
      "Jag lämnar alltid företräده till bilen från vänster."
    ],
    correctIdx: 2
  },
  {
    id: "sc21",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#90a4ae"/>
      <rect x="0" y="55" width="200" height="40" fill="#455a64"/>
      <!-- Breakdown Car -->
      <g transform="translate(140, 68)">
        <rect width="30" height="18" rx="3" fill="#f44336"/>
        <rect x="2" y="2" width="6" height="14" fill="#e3f2fd" opacity="0.6"/>
        <rect x="25" y="2" width="4" height="4" fill="#ffeb3b">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
        </rect>
      </g>
      <!-- Warning Triangle -->
      <g transform="translate(70, 75)">
        <polygon points="0,15 7.5,0 15,15" fill="#d32f2f"/>
        <polygon points="3,13 7.5,4 12,13" fill="#fff"/>
      </g>
      <!-- Your Car -->
      <g transform="translate(20, 68)">
        <rect width="25" height="16" rx="3" fill="#2196f3"/>
      </g>
    </svg>`,
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
      <rect width="200" height="150" fill="#455a64"/>
      <!-- Night Scene -->
      <rect x="0" y="55" width="200" height="40" fill="#263238"/>
      <!-- Car with Headlights -->
      <g transform="translate(40, 68)">
        <rect width="25" height="16" rx="3" fill="#2196f3"/>
        <path d="M 25 2 L 60 -10 L 60 28 L 25 14" fill="yellow" opacity="0.2"/>
      </g>
      <!-- Pedestrian with Reflector -->
      <circle cx="150" cy="50" r="4" fill="#cfd8dc"/>
      <rect x="149" y="54" width="2" height="10" fill="#fff">
        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>
      </rect>
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
      <rect width="200" height="150" fill="#81c784"/>
      <!-- Highway Merge -->
      <path d="M 0 60 L 120 60 Q 150 60 180 100 L 200 100 L 200 140 L 0 140 Z" fill="#455a64"/>
      <rect x="180" y="100" width="20" height="40" fill="#455a64"/>
      <line x1="0" y1="120" x2="200" y2="120" stroke="#fff" stroke-dasharray="10,5"/>
      <!-- Merging Car -->
      <g transform="translate(130, 80) rotate(30)">
        <rect width="25" height="16" rx="3" fill="#ff9800"/>
      </g>
      <!-- Main Road Car -->
      <g transform="translate(50, 125)">
        <rect width="30" height="18" rx="4" fill="#2196f3"/>
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
      <!-- Parking Exit -->
      <rect x="80" y="95" width="40" height="55" fill="#455a64"/>
      <!-- Car exiting parking -->
      <g transform="translate(88, 110)">
        <rect width="24" height="28" rx="4" fill="#ffeb3b"/>
      </g>
      <!-- Car on main road -->
      <g transform="translate(20, 67)">
        <rect width="25" height="16" rx="3" fill="#2196f3"/>
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
      <rect width="200" height="150" fill="#81c784"/>
      <rect x="60" y="0" width="80" height="150" fill="#455a64"/>
      <!-- One Way Sign -->
      <g transform="translate(150, 60)">
        <rect width="20" height="30" fill="#2196f3"/>
        <path d="M 10 5 L 10 25 M 5 10 L 10 5 L 15 10" stroke="#fff" stroke-width="2" fill="none"/>
      </g>
      <!-- Your Car (positioning for left turn) -->
      <g transform="translate(65, 110)">
        <rect width="24" height="28" rx="4" fill="#2196f3"/>
        <rect x="2" y="2" width="5" height="5" fill="#ff9800">
          <animate attributeName="opacity" values="1;0;1" dur="0.6s" repeatCount="indefinite"/>
        </rect>
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
      <rect x="80" y="0" width="40" height="150" fill="#455a64"/>
      <rect x="0" y="55" width="200" height="40" fill="#455a64"/>
      <rect x="90" y="125" width="20" height="10" rx="2" fill="#2196f3"/>
      <rect x="50" y="10" width="30" height="16" rx="3" fill="#f44336"/>
      <g transform="translate(130, 20) scale(0.6)">
        <rect width="30" height="30" fill="#fff" stroke="#d32f2f" stroke-width="4"/>
        <rect x="5" y="5" width="20" height="20" fill="#000"/>
        <rect x="10" y="10" width="10" height="10" fill="#fff"/>
      </g>
    </svg>`,
    questionAr: "تصل إلى هذا التقاطع وتوجد علامة (طريق ذو أولوية). سيارة قادمة من يسارك. من له الأولوية؟",
    questionSv: "Du kommer till denna korsning med märke för huvudled. En bil kommer från vänster. Vem har företräde?",
    optionsAr: [
      "السيارة القادمة من اليسار.",
      "لي الأولوية لأنني على طريق رئيسي.",
      "نطبق قاعدة اليمين.",
      "من يصل للتقاطع أولاً."
    ],
    optionsSv: [
      "Bilen från vänster.",
      "Jag har företräde eftersom jag kör på huvudled.",
      "Högerregeln gäller.",
      "Den som kommer först till korsningen."
    ],
    correctIdx: 1
  },
  {
    id: "sc27",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="100" y="50" width="15" height="10" fill="#fff" stroke="#000"/>
      <rect x="105" y="45" width="5" height="5" fill="#f44336"/>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
    </svg>`,
    questionAr: "تلاحظ وجود سيارة تخرج من موقف سيارات خاص. من يجب أن يفسح المجال؟",
    questionSv: "Du ser en bil som kör ut från en parkeringsplats. Vem har väjningsplikt?",
    optionsAr: [
      "أنا، لأنني قادم من اليسار.",
      "السيارة الخارجة من الموقف (قاعدة الخروج).",
      "نطبق قاعدة اليمين.",
      "السيارة الأسرع تمر أولاً."
    ],
    optionsSv: [
      "Jag, eftersom jag kommer från vänster.",
      "Bilen som kör ut från parkeringen (utfartsregeln).",
      "Högerregeln gäller.",
      "Den snabbaste bilen kör först."
    ],
    correctIdx: 1
  },
  {
    id: "sc28",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="80" y="100" width="40" height="10" fill="#757575"/>
      <rect x="80" y="90" width="40" height="10" fill="#fff"/>
      <rect x="90" y="92" width="20" height="6" fill="#1976d2"/>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
    </svg>`,
    questionAr: "ماذا تعني العلامة الزرقاء الصغيرة التي تظهر أحياناً تحت إشارة المرور؟",
    questionSv: "Vad betyder den lilla blå skylten som ibland sitter under ett vägmärke?",
    optionsAr: [
      "أن العلامة تنطبق فقط على الشاحنات.",
      "لوحة إضافية توضح معلومات تكميلية (مثل الوقت أو المسافة).",
      "أن العلامة ملغاة حالياً.",
      "أنها مجرد زينة."
    ],
    optionsSv: [
      "Att märket endast gäller lastbilar.",
      "Tilläggstavla som ger kompletterande information (t.ex. tid eller avstånd).",
      "Att märket är ogiltigt just nu.",
      "Att det bara är dekoration."
    ],
    correctIdx: 1
  },
  {
    id: "sc29",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <circle cx="100" cy="80" r="15" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="5,3"/>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
    </svg>`,
    questionAr: "هل يسمح لك بالوقوف (Parkera) بجانب خط أصفر متقطع على حافة الرصيف؟",
    questionSv: "Får du parkera bredvid en streckad gul linje på trottoarkanten?",
    optionsAr: [
      "نعم، لا مشكلة.",
      "لا، الخط المتقطع يعني ممنوع الوقوف ولكن يسمح بالتوقف السريع (Stanna).",
      "مسموح فقط في عطلة نهاية الأسبوع.",
      "مسموح للشاحنات فقط."
    ],
    optionsSv: [
      "Ja, inga problem.",
      "Nej, streckad linje betyder parkeringsförbud men tillåtet att stanna.",
      "Tillåtet endast på helger.",
      "Tillåtet endast för lastbilar."
    ],
    correctIdx: 1
  },
  {
    id: "sc30",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="80" y="0" width="40" height="150" fill="#455a64"/>
      <rect x="0" y="55" width="200" height="40" fill="#455a64"/>
      <circle cx="70" cy="50" r="8" fill="#ffeb3b" stroke="#000" stroke-width="1"/>
      <path d="M 65 50 L 75 50 M 70 45 L 70 55" stroke="#000" stroke-width="2"/>
      <rect x="90" y="125" width="20" height="10" rx="2" fill="#2196f3"/>
    </svg>`,
    questionAr: "تصل إلى تقاطع وإشارة المرور تومض باللون الأصفر. ماذا يعني ذلك؟",
    questionSv: "Du kommer till en korsning och trafiksignalen blinkar gult. Vad betyder det?",
    optionsAr: [
      "أن الإشارة ستتحول للأحمر قريباً.",
      "أن الإشارة خارج الخدمة، ويجب اتباع اللوحات المرورية أو قاعدة اليمين.",
      "يجب أن أتوقف تماماً قبل العبور.",
      "لي الأولوية القصوى."
    ],
    optionsSv: [
      "Att det snart slår om till rött.",
      "Att signalen är ur funktion, följ vägmärken eller högerregeln.",
      "Jag måste stanna helt innan jag kör över.",
      "Jag har högsta företräde."
    ],
    correctIdx: 1
  },
  {
    id: "sc31",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="100" y="55" width="40" height="50" fill="#fff"/>
      <rect x="110" y="55" width="20" height="50" fill="#455a64"/>
      <rect x="40" y="72" width="28" height="14" rx="3" fill="#2196f3"/>
      <circle cx="110" cy="50" r="10" fill="#ffeb3b" stroke="#d32f2f" stroke-width="3"/>
      <path d="M 105 50 L 115 50 M 110 45 L 110 55" stroke="#000" stroke-width="2"/>
    </svg>`,
    questionAr: "أنت تقترب من معبر مشاة محمي بإشارات ضوئية تومض بالأصفر. كيف تتصرف؟",
    questionSv: "Du närmar dig ett övergångsställe med blinkande gult ljus. Hur agerar du?",
    optionsAr: [
      "أستمر بنفس السرعة، الضوء الأصفر لا يعني شيئاً للمشاة.",
      "يجب أن أعطي الأولوية للمشاة الذين هم على وشك العبور أو بدأوا العبور.",
      "أستخدم البوق لأحذر المشاة.",
      "أتوقف تماماً حتى ينطفئ الضوء."
    ],
    optionsSv: [
      "Jag fortsätter i samma fart, gult ljus spelar ingen roll för gående.",
      "Jag måste lämna företräde åt gående som gått ut på eller ska gå ut på övergångsstället.",
      "Jag tutar för att varna de gående.",
      "Jag stannar helt tills ljuset slocknar."
    ],
    correctIdx: 1
  },
  {
    id: "sc32",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#81c784"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="120" y="55" width="40" height="50" fill="#fbc02d"/>
      <rect x="125" y="55" width="30" height="50" fill="#455a64"/>
      <rect x="40" y="72" width="28" height="14" rx="3" fill="#2196f3"/>
    </svg>`,
    questionAr: "ما هو أفضل أسلوب للقيادة البيئية (Eco-driving) عند الاقتراب من إشارة حمراء؟",
    questionSv: "Vad är bästa sättet för miljöanpassad körning (Eco-driving) när du närmar dig rött ljus?",
    optionsAr: [
      "الضغط على المكابح بقوة في آخر لحظة.",
      "ترك الدواسة وترك السيارة تتباطأ تدريجياً مع تعشيق التروس (Engine braking).",
      "وضع ناقل الحركة في الوضع المحايد (N).",
      "زيادة السرعة لتجاوز الإشارة قبل أن تغلق."
    ],
    optionsSv: [
      "Bromsa kraftigt i sista sekunden.",
      "Släppa gasen i god tid och motorbromsa.",
      "Lägga i friläge (N).",
      "Öka farten för att hinna över."
    ],
    correctIdx: 1
  },
  {
    id: "sc33",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="40" width="200" height="70" fill="#455a64"/>
      <rect x="30" y="80" width="40" height="20" rx="4" fill="#2196f3"/>
      <rect x="130" y="50" width="40" height="20" rx="4" fill="#f44336"/>
    </svg>`,
    questionAr: "أنت تقود في طريق زلق جداً (Black ice). ما هو أنسب تصرف إذا بدأت السيارة في الانزلاق؟",
    questionSv: "Du kör på extremt hal väg (svartis). Vad är lämpligast om bilen börjar få sladd?",
    optionsAr: [
      "الضغط بقوة على المكابح.",
      "توجيه المقود عكس اتجاه الانزلاق والضغط على البنزين.",
      "رفع القدم عن الدواسات، والضغط على القابض (Clutch) وتوجيه المقود بهدوء في اتجاه الانزلاق.",
      "إغلاق المحرك فوراً."
    ],
    optionsSv: [
      "Bromsa hårt.",
      "Styra emot och gasa.",
      "Släppa pedalerna, trycka ner kopplingen och styra lugnt i sladdens riktning.",
      "Stänga av motorn direkt."
    ],
    correctIdx: 2
  },
  {
    id: "sc34",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="80" y="0" width="40" height="150" fill="#455a64"/>
      <rect x="0" y="55" width="200" height="40" fill="#455a64"/>
      <rect x="40" y="70" width="30" height="16" rx="3" fill="#2196f3"/>
      <rect x="130" y="70" width="30" height="16" rx="3" fill="#f44336"/>
      <circle cx="100" cy="75" r="10" fill="#66bb6a" stroke="#fff" stroke-width="2"/>
    </svg>`,
    questionAr: "في الدوار ذو المسارين، أي مسار تختار للذهاب لليسار (المخرج الثالث)؟",
    questionSv: "I en tvåfilig rondell, vilket körfält väljer du för att svänga vänster (tredje utfarten)?",
    optionsAr: [
      "المسار الأيمن دائماً.",
      "المسار الأيسر.",
      "أي مسار، كلاهما صحيح.",
      "المسار الأيمن إذا كانت السيارة كبيرة."
    ],
    optionsSv: [
      "Höger körfält alltid.",
      "Vänster körfält.",
      "Vilket som helst.",
      "Höger körfält om fordonet är stort."
    ],
    correctIdx: 1
  },
  {
    id: "sc35",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="120" y="40" width="40" height="15" fill="#1976d2" rx="2"/>
      <text x="140" y="51" font-size="8" fill="#fff" text-anchor="middle">P</text>
      <rect x="120" y="55" width="40" height="8" fill="#fff" stroke="#000" stroke-width="1"/>
      <text x="140" y="61" font-size="6" text-anchor="middle">2 tim 9-18</text>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
    </svg>`,
    questionAr: "توجد علامة موقف (P) مع لوحة إضافية مكتوب عليها (2 tim 9-18). ماذا يعني هذا يوم السبت؟",
    questionSv: "Det finns en P-skylt med tilläggstavla (2 tim 9-18). Vad betyder det på en lördag?",
    optionsAr: [
      "الركن مجاني طوال اليوم بدون قيود.",
      "يسمح بالركن لمدة ساعتين فقط بين الساعة 9 و18، وباقي الوقت مجاني.",
      "ممنوع الوقوف تماماً يوم السبت.",
      "الركن مسموح فقط للباصات."
    ],
    optionsSv: [
      "Fri parkering hela dagen.",
      "Parkering tillåten 2 timmar mellan 9-18, övrig tid fri.",
      "Parkeringsförbud på lördagar.",
      "Endast för bussar."
    ],
    correctIdx: 1
  },
  {
    id: "sc36",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="80" y="65" width="40" height="25" fill="#f44336"/>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
      <path d="M 60 40 L 140 40" stroke="#ffeb3b" stroke-width="2" stroke-dasharray="5,3"/>
    </svg>`,
    questionAr: "ما هي المسافة الآمنة التي يجب تركها بينك وبين السيارة أمامك في طريق جاف؟",
    questionSv: "Vilket avstånd bör du hålla till framförvarande fordon på torr väg?",
    optionsAr: [
      "مسافة طول سيارة واحدة.",
      "قاعدة الـ 3 ثوانٍ (أو المسافة التي تقطعها في 3 ثوانٍ).",
      "10 أمتار دائماً.",
      "لا حاجة لترك مسافة إذا كانت سرعتي بطيئة."
    ],
    optionsSv: [
      "En billängd.",
      "Tresekundersregeln.",
      "Alltid 10 meter.",
      "Inget avstånd behövs vid låg fart."
    ],
    correctIdx: 1
  },
  {
    id: "sc37",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="80" y="0" width="40" height="150" fill="#455a64"/>
      <rect x="0" y="55" width="200" height="40" fill="#455a64"/>
      <rect x="90" y="125" width="20" height="10" rx="2" fill="#2196f3"/>
      <rect x="125" y="65" width="30" height="16" rx="3" fill="#f44336"/>
      <circle cx="100" cy="75" r="5" fill="#4caf50"/>
    </svg>`,
    questionAr: "تصل إلى تقاطع مزود بإشارات ضوئية وتعمل باللون الأخضر، ولكن هناك زحام مروري يسد التقاطع. ماذا تفعل؟",
    questionSv: "Du kommer till en korsning med grönt ljus, men det är köbildning som blockerar korsningen. Vad gör du?",
    optionsAr: [
      "أدخل التقاطع لأن إشارتي خضراء.",
      "أنتظر قبل خط التوقف حتى تتوفر مساحة تسمح لي بعبور التقاطع بالكامل دون إغلاقه.",
      "أستخدم البوق لأطلب من السيارات التحرك.",
      "أدخل وأتوقف وسط التقاطع."
    ],
    optionsSv: [
      "Jag kör in i korsningen eftersom jag har grönt.",
      "Jag väntar före stopplinjen tills det finns plats att köra igenom hela korsningen.",
      "Jag tutar på bilarna framför.",
      "Jag kör in och stannar mitt i korsningen."
    ],
    correctIdx: 1
  },
  {
    id: "sc38",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="140" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
      <g transform="translate(80, 10)">
        <polygon points="20,0 40,40 0,40" fill="#fff" stroke="#d32f2f" stroke-width="4"/>
        <path d="M 10 30 L 30 10 M 10 10 L 30 30" stroke="#000" stroke-width="4"/>
      </g>
    </svg>`,
    questionAr: "ترى علامة تحذير من تقاطع طرق (Junction warning). ماذا تعني بالنسبة للأولوية؟",
    questionSv: "Du ser ett varningsmärke för vägkorsning. Vad innebär det för företrädet?",
    optionsAr: [
      "لي الأولوية القصوى.",
      "يجب اتباع قاعدة اليمين في هذا التقاطع.",
      "يجب أن أتوقف تماماً.",
      "التقاطع مغلق."
    ],
    optionsSv: [
      "Jag har företräde.",
      "Högerregeln gäller i korsningen.",
      "Jag måste stanna helt.",
      "Korsningen är avstängd."
    ],
    correctIdx: 1
  },
  {
    id: "sc39",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="40" y="0" width="120" height="150" fill="#455a64"/>
      <rect x="100" y="100" width="30" height="16" rx="3" fill="#2196f3"/>
      <circle cx="135" cy="100" r="8" fill="#f44336" opacity="0.6"/>
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
      "Det område som inte syns i backspeglarna.",
      "Området precis framför bilen.",
      "Området under bilen.",
      "Mötande bilars helljus."
    ],
    correctIdx: 0
  },
  {
    id: "sc40",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="150" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
      <rect x="20" y="65" width="20" height="30" fill="#4caf50" rx="2"/>
      <text x="30" y="85" font-size="10" fill="#fff" text-anchor="middle">E</text>
    </svg>`,
    questionAr: "أنت تخرج من منطقة سكنية (Gårdsgata/Hemzon). من يجب أن يفسح المجال؟",
    questionSv: "Du kör ut från ett gångfartsområde. Vem har väjningsplikt?",
    optionsAr: [
      "السيارات القادمة من اليسار فقط.",
      "أنا، يجب أن أفسح المجال لجميع المشاة والمركبات في الطريق الذي أدخله (قاعدة الخروج).",
      "نطبق قاعدة اليمين.",
      "لي الأولوية لأنني خرجت أولاً."
    ],
    optionsSv: [
      "Endast bilar från vänster.",
      "Jag har väjningsplikt mot alla på den väg jag kör in på (utfartsregeln).",
      "Högerregeln gäller.",
      "Jag har företräde."
    ],
    correctIdx: 1
  },
  {
    id: "sc41",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <circle cx="100" cy="30" r="15" fill="#ffeb3b" stroke="#d32f2f" stroke-width="3"/>
      <path d="M 95 30 L 105 30 M 100 25 L 100 35" stroke="#000" stroke-width="2"/>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
    </svg>`,
    questionAr: "تسمع صوت طائرة مروحية أو ترى أضواء زرقاء في السماء. ماذا تتوقع؟",
    questionSv: "Du hör en helikopter eller ser blått ljus på himlen. Vad kan du förvänta dig?",
    optionsAr: [
      "حادث كبير أو حالة طوارئ قريبة، يجب أن أكون حذراً ومستعداً لإفساح المجال.",
      "احتفال وطني.",
      "أن الطريق مغلق للصيانة.",
      "لا شيء يخص السائقين."
    ],
    optionsSv: [
      "En allvarlig olycka eller nödsituation, var beredd att underlätta för utryckningsfordon.",
      "En nationell högtid.",
      "Vägarbete.",
      "Ingenting som rör förare."
    ],
    correctIdx: 0
  },
  {
    id: "sc42",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
      <rect x="150" y="50" width="30" height="15" fill="#f44336" rx="2"/>
      <rect x="150" y="95" width="30" height="15" fill="#f44336" rx="2"/>
    </svg>`,
    questionAr: "هل يسمح بالتجاوز في التقاطعات؟",
    questionSv: "Är det tillåtet att köra om i en korsning?",
    optionsAr: [
      "نعم، دائماً.",
      "لا، كقاعدة عامة يمنع التجاوز في التقاطعات إلا إذا كان طريقاً ذو أولوية أو بإشارات ضوئية.",
      "نعم، إذا كانت السيارة أمامي بطيئة.",
      "نعم، ولكن فقط للدراجات النارية."
    ],
    optionsSv: [
      "Ja, alltid.",
      "Nej, generellt förbjudet utom på huvudled eller i signalreglerad korsning.",
      "Ja, om bilen framför är långsam.",
      "Ja, men bara motorcyklar."
    ],
    correctIdx: 1
  },
  {
    id: "sc43",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="40" width="200" height="70" fill="#455a64"/>
      <rect x="150" y="85" width="40" height="20" rx="3" fill="#2196f3"/>
      <circle cx="100" cy="50" r="5" fill="#f44336"/>
    </svg>`,
    questionAr: "ما هو تأثير الكحول على مسافة الرد (Reaction distance)؟",
    questionSv: "Hur påverkar alkohol reaktionssträckan?",
    optionsAr: [
      "تصبح المسافة أقصر.",
      "تصبح المسافة أطول (يزداد زمن الرد).",
      "لا تتأثر المسافة.",
      "تتحسن قدرة السائق على التركيز."
    ],
    optionsSv: [
      "Den blir kortare.",
      "Den blir längre (reaktionstiden ökar).",
      "Den påverkas inte.",
      "Förarens koncentration förbättras."
    ],
    correctIdx: 1
  },
  {
    id: "sc44",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="140" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
      <rect x="60" y="20" width="30" height="30" fill="#fff" stroke="#d32f2f" stroke-width="3"/>
      <circle cx="75" cy="35" r="8" fill="#1976d2"/>
      <path d="M 72 35 L 78 35 M 75 32 L 75 38" stroke="#fff" stroke-width="1"/>
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
    id: "sc45",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="120" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
      <rect x="50" y="72" width="30" height="16" rx="3" fill="#f44336"/>
      <path d="M 85 80 L 105 80" stroke="#ffeb3b" stroke-width="4"/>
    </svg>`,
    questionAr: "ما هي عقوبة القيادة تحت تأثير الكحول في السويد؟",
    questionSv: "Vad är straffet för rattfylleri i Sverige?",
    optionsAr: [
      "غرامة مالية بسيطة فقط.",
      "سحب رخصة القيادة، غرامة مالية كبيرة، وقد تصل للسجن.",
      "تحذير شفهي.",
      "لا توجد عقوبة إذا لم يقع حادث."
    ],
    optionsSv: [
      "Bara en liten böter.",
      "Indraget körkort, höga böter och eventuellt fängelse.",
      "En muntlig varning.",
      "Inget straff om ingen olycka sker."
    ],
    correctIdx: 1
  },
  {
    id: "sc46",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <path d="M 80 60 L 120 100" stroke="#fff" stroke-width="4"/>
      <path d="M 120 60 L 80 100" stroke="#fff" stroke-width="4"/>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
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
      "Att man stannar helt innan sammanvävning."
    ],
    correctIdx: 1
  },
  {
    id: "sc47",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <circle cx="50" cy="80" r="10" fill="#fbc02d" opacity="0.8"/>
      <rect x="150" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
    </svg>`,
    questionAr: "متى يجب استخدام أضواء الضباب الخلفية؟",
    questionSv: "När ska dimbakljus användas?",
    optionsAr: [
      "عندما تكون الرؤية ضعيفة جداً بسبب الضباب أو المطر الغزير أو الثلج، ليراك السائقون خلفك.",
      "دائماً عند القيادة ليلاً.",
      "داخل الأنفاق فقط.",
      "عند ركن السيارة في الظلام."
    ],
    optionsSv: [
      "När sikten är kraftigt nedsatt vid dimma, regn eller snö.",
      "Alltid vid mörkerkörning.",
      "Endast i tunnlar.",
      "Vid parkering i mörker."
    ],
    correctIdx: 0
  },
  {
    id: "sc48",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="40" width="200" height="70" fill="#455a64"/>
      <circle cx="100" cy="75" r="30" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="10,5"/>
      <rect x="20" y="65" width="30" height="16" rx="3" fill="#2196f3"/>
    </svg>`,
    questionAr: "ما هو الوقت القانوني لاستخدام الإطارات المرصعة (Dubbdäck) في السويد؟",
    questionSv: "Under vilken tid är det normalt tillåtet att använda dubbdäck i Sverige?",
    optionsAr: [
      "طوال العام.",
      "من 1 أكتوبر إلى 15 أبريل.",
      "من 1 ديسمبر إلى 31 مارس فقط.",
      "فقط عند وجود جليد."
    ],
    optionsSv: [
      "Hela året.",
      "1 oktober till 15 april.",
      "Endast 1 december till 31 mars.",
      "Bara när det är isigt."
    ],
    correctIdx: 1
  },
  {
    id: "sc49",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <path d="M 100 50 L 120 80 L 80 80 Z" fill="#795548"/>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
    </svg>`,
    questionAr: "إذا صدمت حيواناً برياً كبيراً (مثل الأيائل/Moose)، فما هو أول إجراء يجب اتخاذه؟",
    questionSv: "Om du krockar med ett större vilt djur (t.ex. en älg), vad är din första skyldighet?",
    optionsAr: [
      "الاستمرار في القيادة إذا كانت السيارة تعمل.",
      "تأمين مكان الحادث، مساعدة المصابين، وإبلاغ الشرطة (112) ووضع علامة في مكان الحادث.",
      "أخذ الحيوان معي.",
      "البحث عن صاحب الحيوان."
    ],
    optionsSv: [
      "Köra vidare om bilen fungerar.",
      "Säkra platsen, hjälpa skadade, larma polisen (112) och markera platsen.",
      "Ta med djuret hem.",
      "Leta efter djurets ägare."
    ],
    correctIdx: 1
  },
  {
    id: "sc50",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="150" y="55" width="40" height="20" fill="#ffeb3b" rx="2"/>
      <text x="170" y="68" font-size="8" text-anchor="middle">SCHOOL</text>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
    </svg>`,
    questionAr: "تقترب من حافلة مدرسية متوقفة وتومض أضواؤها. ماذا يجب أن تتوقع؟",
    questionSv: "Du närmar dig en skolskjuts som har stannat och blinkar. Vad ska du vara beredd på?",
    optionsAr: [
      "أن الحافلة معطلة.",
      "أن أطفالاً قد يركضون فجأة عبر الطريق أمام أو خلف الحافلة.",
      "أن الحافلة ستتحرك بسرعة.",
      "لا شيء، الحافلة لها مسارها الخاص."
    ],
    optionsSv: [
      "Att bussen är trasig.",
      "Att barn kan springa ut framför eller bakom bussen.",
      "Att bussen ska köra iväg fort.",
      "Ingenting, bussen har sin egen bana."
    ],
    correctIdx: 1
  },
  {
    id: "sc51",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="40" y="0" width="120" height="150" fill="#455a64"/>
      <rect x="60" y="60" width="80" height="40" fill="#fff" opacity="0.3"/>
      <rect x="100" y="120" width="30" height="16" rx="3" fill="#2196f3"/>
    </svg>`,
    questionAr: "لماذا يمنع غسل السيارة في ساحة المنزل أو في الشارع (بشكل عام) في السويد؟",
    questionSv: "Varför bör man undvika att tvätta bilen på gatan eller garageuppfarten?",
    optionsAr: [
      "لأنها تسبب زحاماً.",
      "لأن المواد الكيميائية والزيوت تذهب مباشرة مع مياه الأمطار إلى البحيرات والمياه الجوفية دون تنقية.",
      "لأنها تستهلك الكثير من الماء.",
      "لأن الجيران قد يتذمرون."
    ],
    optionsSv: [
      "Det orsakar köer.",
      "Miljöfarliga ämnen rinner rakt ut i naturen via dagvattenbrunnar.",
      "Det förbrukar för mycket vatten.",
      "Grannarna kan klaga."
    ],
    correctIdx: 1
  },
  {
    id: "sc52",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="140" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
      <rect x="170" y="75" width="20" height="10" fill="#795548"/>
      <path d="M 170 75 L 195 75" stroke="#000" stroke-width="2"/>
    </svg>`,
    questionAr: "كم يسمح لحمولة السيارة أن تبرز من الخلف دون الحاجة لوضع علامة تحذيرية (في وضح النهار)؟",
    questionSv: "Hur mycket får last skjuta ut bakåt utan att behöva markeras (i dagsljus)?",
    optionsAr: [
      "متر واحد (1 meter).",
      "لا يسمح بأي بروز.",
      "50 سم فقط.",
      "3 أمتار."
    ],
    optionsSv: [
      "1 meter.",
      "Ingenting får skjuta ut.",
      "Endast 50 cm.",
      "3 meter."
    ],
    correctIdx: 0
  },
  {
    id: "sc53",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <circle cx="100" cy="80" r="12" fill="#d32f2f" stroke="#fff" stroke-width="2"/>
      <text x="100" y="84" font-size="8" fill="#fff" text-anchor="middle">ABS</text>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
    </svg>`,
    questionAr: "إذا أضاء مصباح (ABS) في لوحة القيادة أثناء القيادة، ماذا يعني ذلك؟",
    questionSv: "Om ABS-lampan lyser under färd, vad innebär det?",
    optionsAr: [
      "أن المكابح لا تعمل تماماً.",
      "أن نظام منع انغلاق المكابح قد تعطل، ولكن المكابح العادية لا تزال تعمل.",
      "يجب زيادة سرعة السيارة.",
      "أن ضغط الإطارات منخفض."
    ],
    optionsSv: [
      "Bromsarna fungerar inte alls.",
      "Låsningsfria systemet är ur funktion, men vanliga bromsar fungerar.",
      "Man ska öka farten.",
      "Däcktrycket är lågt."
    ],
    correctIdx: 1
  },
  {
    id: "sc54",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
      <rect x="150" y="70" width="40" height="20" fill="#ff5722"/>
    </svg>`,
    questionAr: "ما هو أقل عمق مسموح به لفرزات الإطارات الصيفية (Summer tires)؟",
    questionSv: "Vilket är det minsta tillåtna mönsterdjupet för sommardäck?",
    optionsAr: [
      "3 ملم (3 mm).",
      "1.6 ملم (1.6 mm).",
      "5 ملم (5 mm).",
      "1 ملم (1 mm)."
    ],
    optionsSv: [
      "3 mm.",
      "1,6 mm.",
      "5 mm.",
      "1 mm."
    ],
    correctIdx: 1
  },
  {
    id: "sc55",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="50" y="10" width="30" height="30" fill="#fff" stroke="#d32f2f" stroke-width="4"/>
      <circle cx="65" cy="25" r="8" fill="#000"/>
      <rect x="140" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
    </svg>`,
    questionAr: "ما هو السن القانوني للحصول على رخصة قيادة السيارة (B) في السويد؟",
    questionSv: "Vilken är åldersgränsen för att få ta körkort för personbil (B) i Sverige?",
    optionsAr: [
      "16 سنة.",
      "18 سنة.",
      "20 سنة.",
      "21 سنة."
    ],
    optionsSv: [
      "16 år.",
      "18 år.",
      "20 år.",
      "21 år."
    ],
    correctIdx: 1
  },
  {
    id: "sc56",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
      <rect x="80" y="75" width="20" height="10" fill="#757575"/>
      <rect x="110" y="72" width="30" height="16" rx="3" fill="#ff9800"/>
    </svg>`,
    questionAr: "أنت تقوم بسحب سيارة أخرى (Towing). ما هي السرعة القصوى المسموح بها؟",
    questionSv: "Du bogserar en annan bil. Vilken är den högsta tillåtna hastigheten?",
    optionsAr: [
      "50 كم/س.",
      "30 كم/س.",
      "20 كم/س.",
      "10 كم/س."
    ],
    optionsSv: [
      "50 km/h.",
      "30 km/h.",
      "20 km/h.",
      "10 km/h."
    ],
    correctIdx: 1
  },
  {
    id: "sc57",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="100" y="10" width="10" height="40" fill="#fff" stroke="#000"/>
      <rect x="102" y="15" width="6" height="6" fill="#1976d2"/>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
    </svg>`,
    questionAr: "ما هو الإجراء الصحيح عند استخدام جهاز قياس الكحول (Breathalyzer) من قبل الشرطة؟",
    questionSv: "Vad är rätt vid ett utandningsprov hos polisen?",
    optionsAr: [
      "لي الحق في الرفض.",
      "يجب علي التعاون والنفخ في الجهاز، والرفض قد يؤدي لسحب الرخصة فوراً.",
      "النفخ ببطء شديد لخداع الجهاز.",
      "طلب محامي قبل النفخ."
    ],
    optionsSv: [
      "Jag har rätt att vägra.",
      "Jag är skyldig att medverka, vägran kan leda till indraget körkort.",
      "Blåsa väldigt löst.",
      "Begära advokat först."
    ],
    correctIdx: 1
  },
  {
    id: "sc58",
    img: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="140" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
      <circle cx="50" cy="50" r="15" fill="#fff" stroke="#d32f2f" stroke-width="3"/>
      <text x="50" y="55" font-size="10" text-anchor="middle">70</text>
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
      <rect width="200" height="150" fill="#cfd8dc"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
      <rect x="150" y="72" width="30" height="16" rx="3" fill="#f44336"/>
      <path d="M 80 50 L 120 50 L 100 20 Z" fill="#fff" stroke="#d32f2f" stroke-width="2"/>
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
      <rect width="200" height="150" fill="#a5d6a7"/>
      <rect x="0" y="60" width="200" height="40" fill="#455a64"/>
      <rect x="40" y="72" width="30" height="16" rx="3" fill="#2196f3"/>
      <circle cx="150" cy="80" r="15" fill="#fff" stroke="#d32f2f" stroke-width="3"/>
      <line x1="140" y1="70" x2="160" y2="90" stroke="#d32f2f" stroke-width="3"/>
      <line x1="160" y1="70" x2="140" y2="90" stroke="#d32f2f" stroke-width="3"/>
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
