// Svenska Vägmärken — بيانات علامات الطرق السويدية
// المصدر: transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/vagmarken/

const CATEGORIES = [
  { key: 'varning',       nameSv: 'Varningsmärken',                            nameAr: 'علامات التحذير',                  color: '#FFC700', icon: '⚠️' },
  { key: 'vajning',       nameSv: 'Väjningspliktsmärken',                      nameAr: 'علامات الأولوية',                 color: '#E63946', icon: '🛑' },
  { key: 'forbud',        nameSv: 'Förbudsmärken',                             nameAr: 'علامات الحظر',                    color: '#C8102E', icon: '🚫' },
  { key: 'pabud',         nameSv: 'Påbudsmärken',                              nameAr: 'علامات الإلزام',                  color: '#003F87', icon: '⬆️' },
  { key: 'anvisning',     nameSv: 'Anvisningsmärken',                          nameAr: 'علامات الإرشاد',                  color: '#0072CE', icon: '🅿️' },
  { key: 'vagvisning',    nameSv: 'Lokaliseringsmärken för vägvisning',        nameAr: 'لافتات التوجيه على الطرق',        color: '#1B5E20', icon: '➡️' },
  { key: 'service',       nameSv: 'Lokaliseringsmärken för serviceanläggningar', nameAr: 'لافتات الخدمات',                color: '#0072CE', icon: '⛽' },
  { key: 'upplysning',    nameSv: 'Upplysningsmärken',                         nameAr: 'علامات المعلومات',                color: '#0072CE', icon: 'ℹ️' },
  { key: 'vagmark',       nameSv: 'Vägmarkeringar',                            nameAr: 'علامات الطريق على الأرض',        color: '#FFFFFF', icon: '〰️' },
  { key: 'jarnvag',       nameSv: 'Signaler vid järnvägs- eller spårvägskorsningar', nameAr: 'إشارات تقاطعات السكك الحديدية', color: '#C8102E', icon: '🚂' },
];

const IMG = (url) => `<img src='${url}' style='width:100%; height:100%; object-fit:contain;' alt='Vägmärke'/>`;

const SIGNS = [
  // 1) WARNING (A)
  { id:'A1-1', category:'varning', nameSv:'Farlig kurva (höger)', nameAr:'تحذير من منعطف خطير (يمين)', descSv:'Farlig högerkurva.', descAr:'تحذير من وجود منعطف خطير نحو اليمين.', svg: IMG('https://www.transportstyrelsen.se/link/316e25e7b16d4eec97e8637bcfe61f33.aspx') },
  { id:'A1-2', category:'varning', nameSv:'Farlig kurva (vänster)', nameAr:'تحذير من منعطف خطير (يسار)', descSv:'Farlig vänsterkurva.', descAr:'تحذير من وجود منعطف خطير نحو اليسار.', svg: IMG('https://www.transportstyrelsen.se/link/e4180c96f2d2479998cc2de5f9d140d9.aspx') },
  { id:'A2-1', category:'varning', nameSv:'Flera farliga kurvor (första höger)', nameAr:'عدة منعطفات خطيرة (الأول لليمين)', descSv:'Serie av kurvor, första till höger.', descAr:'تحذير من وجود سلسلة منعطفات خطيرة، يبدأ الأول منها نحو اليمين.', svg: IMG('https://www.transportstyrelsen.se/link/4d5bf02ebbf545b5b9626c63ff6f2843.aspx') },
  { id:'A3', category:'varning', nameSv:'Brant backe (nedförsluta)', nameAr:'منحدر حاد', descSv:'Brant nedförsbacke.', descAr:'تحذير من وجود منحدر حاد أمامك.', svg: IMG('https://www.transportstyrelsen.se/link/4dbf39db0ef744ba8506ff8bb7fd0f91.aspx') },
  { id:'A5-1', category:'varning', nameSv:'Avsmalnande väg (båda sidor)', nameAr:'طريق يضيق من الجانبين', descSv:'Vägen smalnar av från båda sidor.', descAr:'تحذير من أن الطريق سيصبح أضيق من كلا الجانبين.', svg: IMG('https://www.transportstyrelsen.se/link/7fe23683e8db4b7ba88e37ae87b5fa5d.aspx') },
  { id:'A7-1', category:'varning', nameSv:'Ojämn väg', nameAr:'طريق غير مستوٍ', descSv:'Varning för gupp eller hål.', descAr:'تحذير من وجود نتوءات أو حفر في الطريق.', svg: IMG('https://www.transportstyrelsen.se/link/31e5bc945de644bdabd066951a1ca344.aspx') },
  { id:'A8', category:'varning', nameSv:'Vägbula', nameAr:'مطب صناعي', descSv:'Farthinder i form av gupp.', descAr:'تحذير من وجود مطب صناعي لتخفيف السرعة.', svg: IMG('https://www.transportstyrelsen.se/link/c8ae03a8008d4107970047786f769a10.aspx') },
  { id:'A9', category:'varning', nameSv:'Slirig väg', nameAr:'طريق زلق', descSv:'Varning för halka.', descAr:'تحذير من أن سطح الطريق قد يكون زلقاً.', svg: IMG('https://www.transportstyrelsen.se/link/08ffbb964e9340b1829acfd61c9e03bd.aspx') },
  { id:'A10', category:'varning', nameSv:'Stensprut', nameAr:'تطاير الحصى', descSv:'Risk för stensprut.', descAr:'تحذير من خطر تطاير الحصى من عجلات السيارات.', svg: IMG('https://www.transportstyrelsen.se/link/07f465c192d141f19664687d898c63bc.aspx') },
  { id:'A12', category:'varning', nameSv:'Övergångsställe', nameAr:'معبر مشاة', descSv:'Var beredd på gående.', descAr:'تحذير من وجود معبر مشاة أمامك.', svg: IMG('https://www.transportstyrelsen.se/link/6f7f75b137274068a1172f065bb44682.aspx') },
  { id:'A14', category:'varning', nameSv:'Barn', nameAr:'أطفال', descSv:'Barn rör sig ofta här.', descAr:'تحذير من احتمال وجود أطفال يعبرون الطريق.', svg: IMG('https://www.transportstyrelsen.se/link/8b3de7f826c842b48ac7367d374ae9ba.aspx') },
  { id:'A15', category:'varning', nameSv:'Cyklande och mopedförare', nameAr:'دراجات هوائية', descSv:'Cykelöverfart framför dig.', descAr:'تحذير من وجود معبر للدراجات الهوائية.', svg: IMG('https://www.transportstyrelsen.se/link/01d26c263aee414a9ebcc4f61252f0c7.aspx') },
  { id:'A19-1', category:'varning', nameSv:'Älgar', nameAr:'أيل', descSv:'Risk för vilt på vägen.', descAr:'تحذير من احتمال وجود حيوانات الأيل.', svg: IMG('https://www.transportstyrelsen.se/link/0c62c4a3f8ae47fa9803b1721f441b6c.aspx') },
  { id:'A20', category:'varning', nameSv:'Vägarbete', nameAr:'أعمال طريق', descSv:'Pågående vägarbete.', descAr:'تحذير من وجود أعمال طرق جارية.', svg: IMG('https://www.transportstyrelsen.se/link/afc047eda2964ef59893d084e7aadf8d.aspx') },
  { id:'A21', category:'varning', nameSv:'Flerfärgssignal', nameAr:'إشارات ضوئية', descSv:'Trafikljus framöver.', descAr:'تحذير من وجود إشارات ضوئية لتنظيم المرور.', svg: IMG('https://www.transportstyrelsen.se/link/fcff8fed172e4c5aa479e072765b638e.aspx') },
  { id:'A24', category:'varning', nameSv:'Mötande trafik', nameAr:'مرور مقابل', descSv:'Dubbelriktad trafik börjar.', descAr:'تحذير من أن الطريق سيصبح ذو اتجاهين.', svg: IMG('https://www.transportstyrelsen.se/link/7114fe4969c146d4831cfd62d133d943.aspx') },
  { id:'A32', category:'varning', nameSv:'Annan fara', nameAr:'خطر آخر', descSv:'Annan fara än de som nämnts.', descAr:'تحذير من وجود خطر غير محدد بالعلامات الأخرى.', svg: IMG('https://www.transportstyrelsen.se/link/adf1f200563c443bb823f7452dff7569.aspx') },
  { id:'A39-1', category:'varning', nameSv:'Kryssmärke (enkelspår)', nameAr:'صليب أندرياس (سكة واحدة)', descSv:'Varning för järnväg.', descAr:'تحذير من معبر سكة حديدية ذو مسار واحد.', svg: IMG('https://www.transportstyrelsen.se/link/11d00c13a6d64d8584f28985fc45e144.aspx') },

  // 2) PRIORITY (B)
  { id:'B1', category:'vajning', nameSv:'Väjningsplikt', nameAr:'إفساح الطريق', descSv:'Lämna företräde.', descAr:'أنت ملزم بإفساح الطريق لحركة المرور على الطريق المتقاطع.', svg: IMG('https://www.transportstyrelsen.se/link/a411f0cd189548eb91d6da0a622295cc.aspx') },
  { id:'B2', category:'vajning', nameSv:'Stopplikt', nameAr:'قف', descSv:'Stanna vid stopplinjen.', descAr:'الوقوف الإلزامي التام عند خط التوقف.', svg: IMG('https://www.transportstyrelsen.se/link/e56c907ba203404eaf0f3fe2c270d1f3.aspx') },
  { id:'B3', category:'vajning', nameSv:'Huvudled', nameAr:'طريق رئيسي', descSv:'Du kör på huvudled.', descAr:'أنت تسير على طريق رئيسي.', svg: IMG('https://www.transportstyrelsen.se/link/616451ea419c4fcda058a9994ba6815f.aspx') },
  { id:'B4', category:'vajning', nameSv:'Huvudled upphör', nameAr:'نهاية الطريق الرئيسي', descSv:'Huvudled slutar.', descAr:'نهاية حق الأولوية الذي يمنحه الطريق الرئيسي.', svg: IMG('https://www.transportstyrelsen.se/link/f22f452faa0d46a8932257d7b0006ef9.aspx') },
  { id:'B5', category:'vajning', nameSv:'Väjningsplikt mot mötande', nameAr:'أولوية المقابل', descSv:'Du ska väja för mötande.', descAr:'يجب عليك إفساح الطريق لحركة المرور القادمة من الاتجاه المعاكس.', svg: IMG('https://www.transportstyrelsen.se/link/eb840fbfa1dd43d08904c746d87e6965.aspx') },
  { id:'B6', category:'vajning', nameSv:'Mötande har väjningsplikt', nameAr:'أولويتك تجاه المقابل', descSv:'Mötande ska väja för dig.', descAr:'حركة المرور القادمة من الاتجاه المعاكس ملزمة بإفساح الطريق لك.', svg: IMG('https://www.transportstyrelsen.se/link/8b65fc14cb4347a49add999296fc173b.aspx') },
  { id:'B7', category:'vajning', nameSv:'Cirkulationsplats', nameAr:'دوار', descSv:'Du närmar dig en rondell.', descAr:'تحذير من الاقتراب من دوار مروري.', svg: IMG('https://www.transportstyrelsen.se/link/7ef925a7b2d04e0b89aee503fa648ab4.aspx') },

  // 3) PROHIBITION (C)
  { id:'C1', category:'forbud', nameSv:'Förbud mot infart', nameAr:'ممنوع الدخول', descSv:'Ingen infart.', descAr:'يُمنع دخول جميع المركبات.', svg: IMG('https://www.transportstyrelsen.se/link/ea7859c843b14a02b8cdfb8950658014.aspx') },
  { id:'C2', category:'forbud', nameSv:'Förbud mot trafik med fordon', nameAr:'ممنوع مرور المركبات', descSv:'All fordonstrafik förbjuden.', descAr:'يُمنع مرور جميع أنواع المركبات في هذا الاتجاه.', svg: IMG('https://www.transportstyrelsen.se/link/e08976ca1d13469da5a119d4c4370477.aspx') },
  { id:'C3', category:'forbud', nameSv:'Förbud mot motordrivet fordon', nameAr:'ممنوع المركبات ذات المحركات', descSv:'Ej motordrivna fordon.', descAr:'يُمنع مرور جميع المركبات التي تعمل بمحرك.', svg: IMG('https://www.transportstyrelsen.se/link/1601c1e1d59e48cbb1faefa7c159610e.aspx') },
  { id:'C7', category:'forbud', nameSv:'Förbud mot tung lastbil', nameAr:'ممنوع الشاحنات الثقيلة', descSv:'Tunga lastbilar förbjudna.', descAr:'يُمنع مرور الشاحنات التي يتجاوز وزنها الإجمالي 3.5 طن.', svg: IMG('https://www.transportstyrelsen.se/link/fddb6d2240c74faf9df593d13ee71fef.aspx') },
  { id:'C19-1', category:'forbud', nameSv:'Förbud mot sväng (vänster)', nameAr:'ممنوع اليسار', descSv:'Ej svänga till vänster.', descAr:'يُمنع الانعطاف نحو اليسار.', svg: IMG('https://www.transportstyrelsen.se/link/ed9aa211d35a4710bff2a51b6cefed7a.aspx') },
  { id:'C20', category:'forbud', nameSv:'Förbud mot u-sväng', nameAr:'ممنوع الدوران للخلف', descSv:'U-sväng förbjuden.', descAr:'يُمنع القيام بدوران للخلف.', svg: IMG('https://www.transportstyrelsen.se/link/4a1ae22f13b045229d477963e4072c50.aspx') },
  { id:'C25', category:'forbud', nameSv:'Omkörningsförbud', nameAr:'ممنوع التجاوز', descSv:'Förbjudet att köra om.', descAr:'يُمنع تجاوز المركبات ذات المحركات.', svg: IMG('https://www.transportstyrelsen.se/link/e64dc8f2231c4721a462a3b3b9aec12c.aspx') },
  { id:'C31-30', category:'forbud', nameSv:'Begränsning 30', nameAr:'سرعة 30', descSv:'Högsta hastighet 30.', descAr:'الحد الأقصى للسرعة هو 30 كم/ساعة.', svg: IMG('https://www.transportstyrelsen.se/link/cf476563cf2f4345a4302283365299bb.aspx') },
  { id:'C31-50', category:'forbud', nameSv:'Begränsning 50', nameAr:'سرعة 50', descSv:'Högsta hastighet 50.', descAr:'الحد الأقصى للسرعة هو 50 كم/ساعة.', svg: IMG('https://www.transportstyrelsen.se/link/6fdf393848974868953163737b98d9e0.aspx') },
  { id:'C31-70', category:'forbud', nameSv:'Begränsning 70', nameAr:'سرعة 70', descSv:'Högsta hastighet 70.', descAr:'الحد الأقصى للسرعة هو 70 كم/ساعة.', svg: IMG('https://www.transportstyrelsen.se/link/cf476563cf2f4345a4302283365299bb.aspx') },
  { id:'C39', category:'forbud', nameSv:'Förbud mot parkering', nameAr:'ممنوع الوقوف', descSv:'Parkering förbjuden.', descAr:'يُمنع وقوف السيارات.', svg: IMG('https://www.transportstyrelsen.se/link/03db55ab957640cc97397991c87e999d.aspx') },
  { id:'C40', category:'forbud', nameSv:'Förbud mot stanna/parkera', nameAr:'ممنوع التوقف والوقوف', descSv:'Stoppförbud.', descAr:'يُمنع التوقف أو ركن السيارة تماماً.', svg: IMG('https://www.transportstyrelsen.se/link/eb248e65d93b4a479e637991721278db.aspx') },

  // 4) MANDATORY (D)
  { id:'D1-1', category:'pabud', nameSv:'Rakt fram', nameAr:'للأمام فقط', descSv:'Kör rakt fram.', descAr:'يجب عليك السير في الاتجاه المستقيم فقط.', svg: IMG('https://www.transportstyrelsen.se/link/150ce05730314a6d9b38200a3e989045.aspx') },
  { id:'D1-2', category:'pabud', nameSv:'Höger', nameAr:'يمين فقط', descSv:'Sväng höger.', descAr:'يجب عليك الانعطاف نحو اليمين فقط.', svg: IMG('https://www.transportstyrelsen.se/link/2d8dd142db1444179caa7e8b133f0274.aspx') },
  { id:'D2-1', category:'pabud', nameSv:'Håll höger', nameAr:'إلزام اليمين', descSv:'Håll till höger.', descAr:'يجب عليك البقاء على الجانب الأيمن من العلامة.', svg: IMG('https://www.transportstyrelsen.se/link/2d8dd142db1444179caa7e8b133f0274.aspx') },
  { id:'D4', category:'pabud', nameSv:'Cykelbana', nameAr:'مسار دراجات', descSv:'Endast cykel och moped kl II.', descAr:'يُسمح فقط بمرور الدراجات الهوائية.', svg: IMG('https://www.transportstyrelsen.se/link/70b0999d7a1e4709a2adc1f4c0ccb213.aspx') },
  { id:'D5', category:'pabud', nameSv:'Gångbana', nameAr:'مسار مشاة', descSv:'Endast gående.', descAr:'يُسمح فقط بمرور المشاة.', svg: IMG('https://www.transportstyrelsen.se/link/3c104d2e1bec41cea8f6f0b8ef32fed4.aspx') },
  { id:'D6', category:'pabud', nameSv:'Gång- och cykelbana', nameAr:'مشاة ودراجات', descSv:'Gående och cyklister.', descAr:'مسار مشترك للمشاة والدراجات.', svg: IMG('https://www.transportstyrelsen.se/link/b5720fc30845469b9d2e0b0541e6921c.aspx') },

  // 5) INSTRUCTION (E)
  { id:'E1', category:'anvisning', nameSv:'Motorväg', nameAr:'طريق سريع', descSv:'Motorväg börjar.', descAr:'بداية الطريق السريع.', svg: IMG('https://www.transportstyrelsen.se/link/3673ef13303c46648e897d1b329249e0.aspx') },
  { id:'E2', category:'anvisning', nameSv:'Motorväg upphör', nameAr:'نهاية الطريق سريع', descSv:'Motorväg slutar.', descAr:'نهاية قواعد الطريق السريع.', svg: IMG('https://www.transportstyrelsen.se/link/0e0f393848974868953163737b98d9e0.aspx') },
  { id:'E5-1', category:'anvisning', nameSv:'Tättbebyggt område', nameAr:'منطقة سكنية', descSv:'Stadsliknande område.', descAr:'بداية منطقة سكنية.', svg: IMG('https://www.transportstyrelsen.se/link/72669e0e378c4a169b27568f6826629e.aspx') },
  { id:'E7', category:'anvisning', nameSv:'Gångfartsområde', nameAr:'منطقة مشاة', descSv:'Fordon på gåendes villkor.', descAr:'منطقة يجب أن تسير فيها المركبات بسرعة المشي.', svg: IMG('https://www.transportstyrelsen.se/link/39832873138b438384813f8899999999.aspx') },
  { id:'E11', category:'anvisning', nameSv:'Övergångsställe', nameAr:'معبر مشاة إرشادي', descSv:'Plats för gående.', descAr:'يشير إلى المكان المخصص لعبور المشاة.', svg: IMG('https://www.transportstyrelsen.se/link/113898f86899457896472f8899999999.aspx') },
  { id:'E19', category:'anvisning', nameSv:'Parkering', nameAr:'موقف سيارات', descSv:'Parkering tillåten.', descAr:'يُسمح بركن السيارات في هذا المكان.', svg: IMG('https://www.transportstyrelsen.se/link/39832873138b438384813f8899999999.aspx') },

  // 10) SIGNALS (Y)
  { id:'Y1', category:'jarnvag', nameSv:'Rött blinkande ljus', nameAr:'إشارة ضوئية حمراء', descSv:'Stanna vid järnväg.', descAr:'إشارة ضوئية توجب التوقف عند المعبر.', svg: IMG('https://www.transportstyrelsen.se/link/79e4419b40d943188af936b404a3b6f0.aspx') },
  { id:'Y2', category:'jarnvag', nameSv:'Ljudsignal', nameAr:'إشارة صوتية', descSv:'Ljudvarning vid korsning.', descAr:'تحذير صوتي ينبه لاقتراب القطار.', svg: IMG('https://www.transportstyrelsen.se/link/fdf0e83fa55a43f095cf80a9a7249090.aspx') },
  { id:'Y3', category:'jarnvag', nameSv:'Bom', nameAr:'حاجز', descSv:'Fysiskt hinder vid spår.', descAr:'حاجز ميكانيكي ينخفض لمنع عبور المركبات.', svg: IMG('https://www.transportstyrelsen.se/link/5443078688684afa94b2734df068ff12.aspx') },
  { id:'Y4', category:'jarnvag', nameSv:'Plankorsningsskärm', nameAr:'لوحة معبر السكة', descSv:'Markering vid korsning.', descAr:'لوحة إرشادية توضح مكان المعبر.', svg: IMG('https://www.transportstyrelsen.se/link/166bd3ad3b844025a330097f0ed589f5.aspx') },
];

if (typeof module !== 'undefined') module.exports = { CATEGORIES, SIGNS };
