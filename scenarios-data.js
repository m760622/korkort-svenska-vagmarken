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
  }
];

if (typeof module !== 'undefined') module.exports = { SCENARIOS };
