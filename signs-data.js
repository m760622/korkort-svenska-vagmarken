// Svenska Vägmärken — بيانات علامات الطرق السويدية
// المصدر: transportstyrelsen.se

const IMG = (url) => `<img src=\"${url}\" style=\"width:100%; height:100%; object-fit:contain;\" loading=\"lazy\">`;

const CATEGORIES = [
  { key: 'varning',       nameSv: 'Varningsmärken',                            nameAr: 'علامات التحذير',                  color: '#FFC700', icon: '⚠️' },
  { key: 'vajning',       nameSv: 'Väjningspliktsmärken',                      nameAr: 'علامات الأولوية',                 color: '#E63946', icon: '🛑' },
  { key: 'forbud',        nameSv: 'Förbudsmärken',                             nameAr: 'علامات الحظر',                    color: '#C8102E', icon: '🚫' },
  { key: 'pabud',         nameSv: 'Påbudsmärken',                              nameAr: 'علامات الإلزام',                  color: '#003F87', icon: '⬆️' },
  { key: 'anvisning',     nameSv: 'Anvisningsmärken',                          nameAr: 'علامات الإرشاد',                  color: '#0072CE', icon: '🅿️' },
  { key: 'vagvisning',    nameSv: 'Lokaliseringsmärken för vägvisning',        nameAr: 'لافتات التوجيه',                 color: '#1B5E20', icon: '➡️' },
  { key: 'allmanna',      nameSv: 'Allmänna inrättningar',                      nameAr: 'المنشآت العامة',                  color: '#1B5E20', icon: '🏢' },
  { key: 'service',       nameSv: 'Serviceanläggningar',                       nameAr: 'لافتات الخدمات',                 color: '#0072CE', icon: '🍴' },
  { key: 'turist',        nameSv: 'Turistiskt intressanta mål',                nameAr: 'مناطق سياحية',                  color: '#4E342E', icon: '🏰' },
  { key: 'upplysning',    nameSv: 'Upplysningsmärken',                         nameAr: 'علامات المعلومات',                color: '#0072CE', icon: 'ℹ️' },
  { key: 'vagmark',       nameSv: 'Vägmarkeringar',                            nameAr: 'علامات الطريق الأرضية',           color: '#FFFFFF', icon: '➖' },
  { key: 'symboler',      nameSv: 'Symboler',                                  nameAr: 'الرموز',                         color: '#212121', icon: '⚛️' },
  { key: 'tillagg',       nameSv: 'Tilläggstavlor',                            nameAr: 'لوحات إضافية',                  color: '#212121', icon: '🗒️' },
  { key: 'signaler',      nameSv: 'Trafiksignaler',                            nameAr: 'إشارات ضوئية',                  color: '#000000', icon: '🚥' },
  { key: 'andra',         nameSv: 'Andra anordningar',                         nameAr: 'أدوات تنظيم أخرى',                color: '#212121', icon: '🚧' },
  { key: 'jarnvag',       nameSv: 'Signaler vid järnväg',                      nameAr: 'إشارات السكك الحديدية',           color: '#E63946', icon: '🚂' }
];

const SIGNS = [
  // 1) WARNING (A)
  { id:'A1-1', category:'varning', nameSv:'Farlig kurva (höger)', nameAr:'تحذير من منعطف خطير (يمين)', descSv:'Märket anger en farlig kurva. Symbolen är anpassad efter förhållandena på platsen.', descAr:'تحذير من وجود منعطف خطير نحو اليمين. يتم تكييف الرمز حسب ظروف الموقع.', svg: IMG('assets/signs/A1-2.png') },
  { id:'A1-2', category:'varning', nameSv:'Farlig kurva (vänster)', nameAr:'تحذير من منعطف خطير (يسار)', descSv:'Märket anger en farlig kurva. Symbolen är anpassad efter förhållandena på platsen.', descAr:'تحذير من وجود منعطف خطير نحو اليسار. يتم تكييف الرمز حسب ظروف الموقع.', svg: IMG('assets/signs/A1-1.png') },
  { id:'A2-1', category:'varning', nameSv:'Flera farliga kurvor (första höger)', nameAr:'عدة منعطفات خطيرة (الأول لليمين)', descSv:'Märket anger en serie av fler än två farliga kurvor. Symbolen är anpassad efter förhållandena på platsen.', descAr:'تحذير من وجود سلسلة من أكثر من منعطفين خطرين، يبدأ الأول منها نحو اليمين.', svg: IMG('assets/signs/A2-2.png') },
  { id:'A2-2', category:'varning', nameSv:'Flera farliga kurvor (första vänster)', nameAr:'عدة منعطفات خطيرة (الأول لليسار)', descSv:'Märket anger en serie av fler än två farliga kurvor. Symbolen är anpassad efter förhållandena på platsen.', descAr:'تحذير من وجود سلسلة من أكثر من منعطفين خطرين، يبدأ الأول منها نحو اليسار.', svg: IMG('assets/signs/A2-1.png') },
  { id:'A3', category:'varning', nameSv:'Brant backe (nedförslut)', nameAr:'منحدر حاد', descSv:'Märket anger en brant nedförslutning. Siffran anger lutningen i procent.', descAr:'تحذير من وجود منحدر حاد أمامك. الرقم يوضح نسبة الميل.', svg: IMG('assets/signs/A3.png') },
  { id:'A4', category:'varning', nameSv:'Brant backe (stigning)', nameAr:'مرتفع حاد', descSv:'Märket anger en brant stigning. Siffran anger lutningen i procent.', descAr:'تحذير من وجود مرتفع حاد أمامك. الرقم يوضح نسبة الميل.', svg: IMG('assets/signs/A4.png') },
  { id:'A5-1', category:'varning', nameSv:'Avsmalnande väg (båدا sidor)', nameAr:'طريق يضيق من الجانبين', descSv:'Märket anger att vägen eller körbanan smalnar av.', descAr:'تحذير من أن الطريق سيصبح أضيق من كلا الجانبين.', svg: IMG('assets/signs/A5-1.png') },
  { id:'A5-2', category:'varning', nameSv:'Avsmalnande väg (höger)', nameAr:'طريق يضيق من اليمين', descSv:'Märket anger att vägen eller körbanan smalnar av från höger.', descAr:'تحذير من أن الطريق سيصبح أضيق من الجانب الأيمن.', svg: IMG('assets/signs/A5-3.png') },
  { id:'A5-3', category:'varning', nameSv:'Avsmalnande väg (vänster)', nameAr:'طريق يضيق من اليسار', descSv:'Märket anger att vägen eller körbanان smalnar av från vänster.', descAr:'تحذير من أن الطريق سيصبح أضيق من الجانب الأيسر.', svg: IMG('assets/signs/A5-2.png') },
  { id:'A6', category:'varning', nameSv:'Öppningsbar bro', nameAr:'جسر قابل للفتح', descSv:'Märket anger en öppningsbar bro.', descAr:'تحذير من وجود جسر يمكن فتحه (جسر متحرك).', svg: IMG('assets/signs/A6.png') },
  { id:'A7', category:'varning', nameSv:'Kaj eller strandkant', nameAr:'رصيف مائي أو شاطئ', descSv:'Märket anger en plats där vägen slutar mot en kaj, en strandkant eller liknande.', descAr:'تحذير من وجود رصيف ميناء أو شاطئ مائي في نهاية الطريق.', svg: IMG('assets/signs/A7.png') },
  { id:'A8', category:'varning', nameSv:'Ojämn väg', nameAr:'طريق غير مستوٍ', descSv:'Märket anger att vägen är ojämn och att det kan vara lämpligt att sänka hastigheten.', descAr:'تحذير من وجود نتوءات أو حفر في الطريق؛ يُنصح بتخفيف السرعة.', svg: IMG('assets/signs/A8.png') },
  { id:'A9', category:'varning', nameSv:'Vägbula', nameAr:'مطب صناعي', descSv:'Märket anger en vägbula eller liknande farthinder som anlagts som en fartdämpande åtgärd.', descAr:'تحذير من وجود مطب صناعي أو عائق لتخفيف السرعة تم إنشاؤه لهذا الغرض.', svg: IMG('assets/signs/A9.png') },
  { id:'A10', category:'varning', nameSv:'Slirig väg', nameAr:'طريق زلق', descSv:'Märket anger att vägen kan vara slirig. Används främst när det finns risk för halka av annat skäl än snö eller is.', descAr:'تحذير من أن سطح الطريق قد يكون زلقاً؛ يستخدم خاصة عند وجود خطر الانزلاق لأسباب غير الثلج والجليد.', svg: IMG('assets/signs/A10.png') },
  { id:'A11', category:'varning', nameSv:'Stensprut', nameAr:'تطاير الحصى', descSv:'Märket anger risk för stensprut.', descAr:'تحذير من خطر تطاير الحصى من عجلات السيارات.', svg: IMG('assets/signs/A11.png') },
  { id:'A12', category:'varning', nameSv:'Stenras', nameAr:'تساقط حجارة', descSv:'Märket anger en vägsträcka där det finns risk för stenfall eller att stenar ligger på vägen.', descAr:'تحذير من خطر تساقط الحجارة أو وجود صخور على الطريق.', svg: IMG('assets/signs/A12.png') },
  { id:'A13', category:'varning', nameSv:'Övergångsställe', nameAr:'معبر مشاة', descSv:'Märket anger ett övergångsställe där gående kan كorsa vägen.', descAr:'تحذير من وجود معبر مشاة أمامك.', svg: IMG('assets/signs/A13.png') },
  { id:'A14', category:'varning', nameSv:'Gående', nameAr:'مشاة', descSv:'Märket anger en vägsträcka där gående ofta korsar eller uppehåller sig på vägen.', descAr:'تحذير من وجود مشاة يعبرون أو يتواجدون بكثرة على الطريق.', svg: IMG('assets/signs/A14.png') },
  { id:'A15', category:'varning', nameSv:'Barn', nameAr:'أطفال', descSv:'Märket anger en vägsträcka där barn ofta vistas eller korsar vägen.', descAr:'تحذير من احتمال وجود أطفال يعبرون الطريق أو يتواجدون قربه.', svg: IMG('assets/signs/A15.png') },
  { id:'A16', category:'varning', nameSv:'Cyklande och mopedförare', nameAr:'دراجات هوائية', descSv:'Märket anger en vägsträcka där cyklande eller mopedförare ofta korsar eller uppehåller sig på körbanan.', descAr:'تحذير من وجود معبر أو منطقة يكثر فيها ركوب الدراجات.', svg: IMG('assets/signs/A16.png') },
  { id:'A17', category:'varning', nameSv:'Skidåkare', nameAr:'متزلجون', descSv:'Märket anger en plats där skidåkare ofta korsar eller uppehåller sig på vägen.', descAr:'تحذير من وجود متزلجين يعبرون الطريق.', svg: IMG('assets/signs/A17.png') },
  { id:'A18', category:'varning', nameSv:'Ridande', nameAr:'خيالة', descSv:'Märket anger en plats där ridande ofta korsar eller uppehåller sig på vägen.', descAr:'تحذير من وجود فرسان أو خيالة يعبرون الطريق.', svg: IMG('assets/signs/A18.png') },
  { id:'A19-1', category:'varning', nameSv:'Älgar', nameAr:'حيوان الأيل (Elk)', descSv:'Märket anger risk för älgar på vägen.', descAr:'تحذير من خطر وجود حيوانات الأيل على الطريق.', svg: IMG('assets/signs/A19-1.png') },
  { id:'A19-2', category:'varning', nameSv:'Rådjur', nameAr:'الغزال (Deer)', descSv:'Märket anger risk för rådjur på vägen.', descAr:'تحذير من خطر وجود الغزلان على الطريق.', svg: IMG('assets/signs/A19-2.png') },
  { id:'A20', category:'varning', nameSv:'Djur (Häst)', nameAr:'خيول', descSv:'Märket anger risk för hästar på vägen.', descAr:'تحذير من خطر وجود خيول على الطريق.', svg: IMG('assets/signs/A20.png') },
  { id:'A21', category:'varning', nameSv:'Djur (Nötkreatur)', nameAr:'أبقار', descSv:'Märket anger risk för nötkreatur på vägen.', descAr:'تحذير من خطر وجود أبقار أو ماشية على الطريق.', svg: IMG('assets/signs/A21.png') },
  { id:'A22', category:'varning', nameSv:'Djur (Får)', nameAr:'أغنام', descSv:'Märket anger risk för får på vägen.', descAr:'تحذير من خطر وجود أغنام على الطريق.', svg: IMG('assets/signs/A22.png') },
  { id:'A23', category:'varning', nameSv:'Djur (Renar)', nameAr:'حيوان الرنة (Reindeer)', descSv:'Märket anger risk för renar på vägen.', descAr:'تحذير من خطر وجود حيوانات الرنة على الطريق.', svg: IMG('assets/signs/A23.png') },
  { id:'A24', category:'varning', nameSv:'Vägarbete', nameAr:'أعمال الطريق', descSv:'Vägarbete pågår.', descAr:'تحذير من وجود أعمال إصلاح أو صيانة على الطريق.', svg: IMG('assets/signs/A24.png') },
  { id:'A25', category:'varning', nameSv:'Slut på vägarbete', nameAr:'نهاية أعمال الطريق', descSv:'Vägarbete upphör.', descAr:'نهاية منطقة أعمال الطريق.', svg: IMG('assets/signs/A25.png') },
  { id:'A26', category:'varning', nameSv:'Ljus- eller ljudsignal', nameAr:'إشارة ضوئية', descSv:'Märket anger en signal för att reglera trafiken.', descAr:'تحذير من وجود إشارات ضوئية لتنظيم المرور أمامك.', svg: IMG('assets/signs/A26.png') },
  { id:'A27', category:'varning', nameSv:'Lågt flygande flygplan', nameAr:'طائرات منخفضة', descSv:'Märket anger risk för lågt flygande flygplan.', descAr:'تحذير من طائرات تطير على ارتفاع منخفض قد تسبب ضوضاء أو تشتيت.', svg: IMG('assets/signs/A27.png') },
  { id:'A28', category:'varning', nameSv:'Sidvind', nameAr:'رياح جانبية', descSv:'Märket anger en vägsträcka där det ofta förekommer stark sidvind.', descAr:'تحذير من هبوب رياح جانبية قوية.', svg: IMG('assets/signs/A28.png') },
  { id:'A29', category:'varning', nameSv:'Möte', nameAr:'سير في الاتجاهين', descSv:'Märket anger att trafiken på vägen sker i båda riktningarna.', descAr:'تحذير من أن الطريق سيصبح ذو اتجاهين بعد أن كان اتجاه واحد.', svg: IMG('assets/signs/A29.png') },
  { id:'A30', category:'varning', nameSv:'Cirkulationsplats', nameAr:'دوار', descSv:'Märket anger en cirkulationsplats.', descAr:'تحذير من الاقتراب من دوار مروري.', svg: IMG('assets/signs/A30.png') },
  { id:'A31', category:'varning', nameSv:'Långsamtgående fordon', nameAr:'مركبات بطيئة', descSv:'Märket anger en plats där långsamtgående fordon ofta korsar vägen.', descAr:'تحذير من وجود مركبات بطيئة الحركة (مثل الجرارات) تعبر الطريق.', svg: IMG('assets/signs/A31.png') },
  { id:'A32', category:'varning', nameSv:'Fordon med dragdjur', nameAr:'مركبات تجرها حيوانات', descSv:'Märket anger en plats där fordon med dragdjur ofta korsar vägen.', descAr:'تحذير من وجود مركبات تجرها خيول أو حيوانات أخرى.', svg: IMG('assets/signs/A32.png') },
  { id:'A33', category:'varning', nameSv:'Terrängskotertrafik', nameAr:'مركبات الثلج', descSv:'Märket anger en plats där terrängskotrar ofta korsar vägen.', descAr:'تحذير من وجود مركبات الثلج (Snowmobiles) تعبر الطريق.', svg: IMG('assets/signs/A33.png') },
  { id:'A34', category:'varning', nameSv:'Kö', nameAr:'ازدحام مروري', descSv:'Märket anger en risk för köbildning.', descAr:'تحذير من احتمال حدوث ازدحام مروري أو طوابير سيارات.', svg: IMG('assets/signs/A34.png') },
  { id:'A35', category:'varning', nameSv:'Järnvägskorsning med bommar', nameAr:'معبر سكة حديد بحواجز', descSv:'Märket anger en plankorsning med järnväg med bommar.', descAr:'تحذير من معبر سكة حديدية مجهز بحواجز (بوابات).', svg: IMG('assets/signs/A35.png') },
  { id:'A36', category:'varning', nameSv:'Järnvägskorsning utan bommar', nameAr:'معبر سكة حديد بدون حواجز', descSv:'Märket anger en plankorsning med järnväg utan bommar.', descAr:'تحذير من معبر سكة حديدية غير مجهز بحواجز.', svg: IMG('assets/signs/A36.png') },
  { id:'A37', category:'varning', nameSv:'Korsning med spårväg', nameAr:'معبر ترام', descSv:'Märket anger en plankorsning med spårväg utan bommar.', descAr:'تحذير من معبر للسكة الحديدية الخاصة بالترام (بدون حواجز).', svg: IMG('assets/signs/A37.png') },
  { id:'A38', category:'varning', nameSv:'Avstånd till plankorsning', nameAr:'المسافة إلى معبر السكة', descSv:'Märkena anger avståndet till en plankorsning i tredjedelar.', descAr:'تشير اللوحات إلى المسافة المتبقية للوصول إلى معبر السكة الحديدية (بالأثلاث).', svg: IMG('assets/signs/A38.png') },
  { id:'A39-1', category:'varning', nameSv:'Kryssmärke (enkelspår)', nameAr:'صليب أندرياس (سكة واحدة)', descSv:'Märket anger en plankorsning med ett spår.', descAr:'تحذير من معبر سكة حديدية ذو مسار واحد.', svg: IMG('assets/signs/A39-1.png') },
  { id:'A39-2', category:'varning', nameSv:'Kryssmärke (flera spår)', nameAr:'صليب أندرياس (عدة مسارات)', descSv:'Märket anger en plankorsning med två eller flera spår.', descAr:'تحذير من معبر سكة حديدية ذو مسارين أو أكثر.', svg: IMG('assets/signs/A39-2.png') },
  { id:'A40', category:'varning', nameSv:'Annan fara', nameAr:'خطر آخر', descSv:'Märket anger annan fara än sådan som kan anges med något annat varningsmärke.', descAr:'تحذير من وجود خطر غير محدد بالعلامات الأخرى. يجب الانتباه.', svg: IMG('assets/signs/A40.png') },
  { id:'A41', category:'varning', nameSv:'Olycka', nameAr:'حادث مروري', descSv:'Märket anger en olycksplats.', descAr:'تحذير من وجود حادث مروري أمامك.', svg: IMG('assets/signs/A41.png') },

  // 2) PRIORITY (B)
  { id:'B1', category:'vajning', nameSv:'Väjningsplikt', nameAr:'إفساح الطريق', descSv:'Lämna företräde.', descAr:'أنت ملزم بإفساح الطريق لحركة المرور على الطريق المتقاطع.', svg: IMG('assets/signs/B1.png') },
  { id:'B2', category:'vajning', nameSv:'Stopplikt', nameAr:'قف', descSv:'Stanna vid stopplinjen.', descAr:'الوقوف الإلزامي التام عند خط التوقف.', svg: IMG('assets/signs/B2.png') },
  { id:'B3', category:'vajning', nameSv:'Huvudled', nameAr:'طريق رئيسي', descSv:'Du kör på huvudled.', descAr:'أنت تسير على طريق رئيسي.', svg: IMG('assets/signs/B3.png') },
  { id:'B4', category:'vajning', nameSv:'Huvudled upphör', nameAr:'نهاية الطريق الرئيسي', descSv:'Huvudled slutar.', descAr:'نهاية حق الأولوية الذي يمنحه الطريق الرئيسي.', svg: IMG('assets/signs/B4.png') },
  { id:'B5', category:'vajning', nameSv:'Väjningsplikt mot mötande', nameAr:'أولوية المقابل', descSv:'Du ska väja för mötande.', descAr:'يجب عليك إفساح الطريق لحركة المرور القادمة من الاتجاه المعاكس.', svg: IMG('assets/signs/B5.png') },
  { id:'B6', category:'vajning', nameSv:'Mötande har väjningsplikt', nameAr:'أولويتك تجاه المقابل', descSv:'Mötande ska väja för dig.', descAr:'حركة المرور القادمة من الاتجاه المعاكس ملزمة بإفساح الطريق لك.', svg: IMG('assets/signs/B6.png') },
  { id:'B7', category:'vajning', nameSv:'Varning för väjningsplikt', nameAr:'تحذير من إفساح الطريق', descSv:'Varning för väjningsplikt vid korsning.', descAr:'تحذير مسبق من وجود علامة إفساح الطريق في التقاطع القادم.', svg: IMG('assets/signs/B7.png') },

  // 3) PROHIBITION (C)
  { id:'C1', category:'forbud', nameSv:'Förbud mot infart', nameAr:'ممنوع الدخول', descSv:'Ingen infart.', descAr:'يُمنع دخول جميع المركبات.', svg: IMG('assets/signs/C1.png') },
  { id:'C2', category:'forbud', nameSv:'Förbud mot trafik med fordon', nameAr:'ممنوع مرور المركبات', descSv:'All fordonstrafik förbjuden.', descAr:'يُمنع مرور جميع أنواع المركبات في هذا الاتجاه.', svg: IMG('assets/signs/C2.png') },
  { id:'C3', category:'forbud', nameSv:'Förbud mot motordrivet fordon', nameAr:'ممنوع المركبات ذات المحركات', descSv:'Ej motordrivna fordon.', descAr:'يُمنع مرور جميع المركبات التي تعمل بمحرك.', svg: IMG('assets/signs/C3.png') },
  { id:'C7', category:'forbud', nameSv:'Förbud mot tung lastbil', nameAr:'ممنوع الشاحنات الثقيلة', descSv:'Tunga lastbilar förbjudna.', descAr:'يُمنع مرور الشاحنات التي يتجاوز وزنها الإجمالي 3.5 طن.', svg: IMG('assets/signs/C7.png') },
  { id:'C19-1', category:'forbud', nameSv:'Förbud mot sväng (vänster)', nameAr:'ممنوع اليسار', descSv:'Ej svänga till vänster.', descAr:'يُمنع الانعطاف نحو اليسار.', svg: IMG('assets/signs/C19-1.png') },
  { id:'C20', category:'forbud', nameSv:'Förbud mot u-sväng', nameAr:'ممنوع الدوران للخلف', descSv:'U-sväng förbjuden.', descAr:'يُمنع القيام بدوران للخلف.', svg: IMG('assets/signs/C20.png') },
  { id:'C25', category:'forbud', nameSv:'Omkörningsförbud', nameAr:'ممنوع التجاوز', descSv:'Förbjudet att köra om.', descAr:'يُمنع تجاوز المركبات ذات المحركات.', svg: IMG('assets/signs/C25.png') },
  { id:'C31-30', category:'forbud', nameSv:'Begränsning 30', nameAr:'سرعة 30', descSv:'Högsta hastighet 30.', descAr:'الحد الأقصى للسرعة هو 30 كم/ساعة.', svg: IMG('assets/signs/C31-30.png') },
  { id:'C31-50', category:'forbud', nameSv:'Begränsning 50', nameAr:'سرعة 50', descSv:'Högsta hastighet 50.', descAr:'الحد الأقصى للسرعة هو 50 كم/ساعة.', svg: IMG('assets/signs/C31-50.png') },
  { id:'C31-70', category:'forbud', nameSv:'Begränsning 70', nameAr:'سرعة 70', descSv:'Högsta hastighet 70.', descAr:'الحد الأقصى للسرعة هو 70 كم/ساعة.', svg: IMG('assets/signs/C31-70.png') },
  { id:'C39', category:'forbud', nameSv:'Förbud mot parkering', nameAr:'ممنوع الوقوف', descSv:'Parkering förbjuden.', descAr:'يُمنع وقوف السيارات.', svg: IMG('assets/signs/C39.png') },
  { id:'C40', category:'forbud', nameSv:'Förbud mot stanna/parkera', nameAr:'ممنوع التوقف والوقوف', descSv:'Stoppförbud.', descAr:'يُمنع التوقف أو ركن السيارة تماماً.', svg: IMG('assets/signs/C40.png') },

  // 4) MANDATORY (D)
  { id:'D1-1', category:'pabud', nameSv:'Rakt fram', nameAr:'للأمام فقط', descSv:'Kör rakt fram.', descAr:'يجب عليك السير في الاتجاه المستقيم فقط.', svg: IMG('assets/signs/D1-1.png') },
  { id:'D1-2', category:'pabud', nameSv:'Höger', nameAr:'يمين فقط', descSv:'Sväng höger.', descAr:'يجب عليك الانعطاف نحو اليمين فقط.', svg: IMG('assets/signs/D1-2.png') },
  { id:'D2-1', category:'pabud', nameSv:'Håll höger', nameAr:'إلزام اليمين', descSv:'Håll till höger.', descAr:'يجب عليك البقاء على الجانب الأيمن من العلامة.', svg: IMG('assets/signs/D2-1.png') },
  { id:'D4', category:'pabud', nameSv:'Cykelbana', nameAr:'مسار دراجات', descSv:'Endast cykel och moped kl II.', descAr:'يُسمح فقط بمرور الدراجات الهوائية.', svg: IMG('assets/signs/D4.png') },
  { id:'D5', category:'pabud', nameSv:'Gångbana', nameAr:'مسار مشاة', descSv:'Endast gående.', descAr:'يُسمح فقط بمرور المشاة.', svg: IMG('assets/signs/D5.png') },
  { id:'D6', category:'pabud', nameSv:'Gång- och cykelbana', nameAr:'مشاة ودراجات', descSv:'Gående och cyklister.', descAr:'مسار مشترك للمشاة والدراجات.', svg: IMG('assets/signs/D6.png') },

  // 5) INSTRUCTION (E)
  { id:'E1', category:'anvisning', nameSv:'Motorväg', nameAr:'طريق سريع', descSv:'Motorväg börjar.', descAr:'بداية الطريق السريع.', svg: IMG('assets/signs/E1.png') },
  { id:'E2', category:'anvisning', nameSv:'Motorväg upphör', nameAr:'نهاية الطريق سريع', descSv:'Motorväg slutar.', descAr:'نهاية قواعد الطريق السريع.', svg: IMG('assets/signs/E2.png') },
  { id:'E5-1', category:'anvisning', nameSv:'Tättbebyggt område', nameAr:'منطقة سكنية', descSv:'Stadsliknande område.', descAr:'بداية منطقة سكنية.', svg: IMG('assets/signs/E5-1.png') },
  { id:'E7', category:'anvisning', nameSv:'Gångfartsområde', nameAr:'منطقة مشاة', descSv:'Fordon på gåendes villkor.', descAr:'منطقة يجب أن تسير فيها المركبات بسرعة المشي.', svg: IMG('assets/signs/E7.png') },
  { id:'E11', category:'anvisning', nameSv:'Övergångsställe', nameAr:'معبر مشاة إرشادي', descSv:'Plats för gående.', descAr:'يشير إلى المكان المخصص لعبور المشاة.', svg: IMG('assets/signs/E11.png') },
  { id:'E19', category:'anvisning', nameSv:'Parkering', nameAr:'موقف سيارات', descSv:'Parkering tillåten.', descAr:'يُسمح بركن السيارات في هذا المكان.', svg: IMG('assets/signs/E19.png') },

  // 10) SIGNALS (Y)
  { id:'Y1', category:'jarnvag', nameSv:'Rött blinkande ljus', nameAr:'إشارة ضوئية حمراء', descSv:'Stanna vid järnväg.', descAr:'إشارة ضوئية توجب التوقف عند المعبر.', svg: IMG('assets/signs/Y1.png') },
  { id:'Y2', category:'jarnvag', nameSv:'Ljudsignal', nameAr:'إشارة صوتية', descSv:'Ljudvarning vid korsning.', descAr:'تحذير صوتي ينبه لاقتراب القطار.', svg: IMG('assets/signs/Y2.png') },
  { id:'Y3', category:'jarnvag', nameSv:'Bom', nameAr:'حاجز', descSv:'Fysiskt hinder vid spår.', descAr:'حاجز ميكانيكي ينخفض لمنع عبور المركبات.', svg: IMG('assets/signs/Y3.png') },
  { id:'Y4', category:'jarnvag', nameSv:'Plankorsningsskärm', nameAr:'لوحة معبر السكة', descSv:'Markering vid korsning.', descAr:'لوحة إرشادية توضح مكان المعبر.', svg: IMG('assets/signs/Y4.png') },

  // 6) DIRECTION (F)
  { id:'F1-1', category:'vagvisning', nameSv:'Orienteringstavla', nameAr:'لوحة توجيهية (مخطط)', descSv:'Anger vägvisning före en korsning.', descAr:'لوحة توجيهية تظهر شكل التقاطع والاتجاهات قبله.', svg: IMG('assets/signs/F1-1.png') },
  { id:'F2', category:'vagvisning', nameSv:'Orienteringstavla vid förbjuden sväng', nameAr:'لوحة توجيهية عند منعطف ممنوع', descSv:'Visar alternativ väg vid körförbud.', descAr:'توضح الطريق البديل عند وجود منعطف ممنوع في التقاطع.', svg: IMG('assets/signs/F2.png') },
  { id:'F5', category:'vagvisning', nameSv:'Vägvisare', nameAr:'مؤشر طريق', descSv:'Anger riktning till ett mål.', descAr:'يشير إلى اتجاه الوصول إلى منطقة أو مدينة معينة.', svg: IMG('assets/signs/F5.png') },
  { id:'F13', category:'vagvisning', nameSv:'Avståndstavla', nameAr:'لوحة المسافات', descSv:'Anger avstånd till orter.', descAr:'لوحة توضح المسافات المتبقية بالكيلومتر للمدن القادمة.', svg: IMG('assets/signs/F13.png') },
  { id:'F14', category:'vagvisning', nameSv:'Vägnummer', nameAr:'رقم الطريق', descSv:'Anger vägens nummer.', descAr:'لوحة توضح رقم الطريق الحالي (مثل E4).', svg: IMG('assets/signs/F14.png') },
  { id:'F15', category:'vagvisning', nameSv:'Omledning', nameAr:'تحويلة مرورية', descSv:'Anger tillfällig väg.', descAr:'تشير إلى وجود طريق بديل مؤقت بسبب أعمال أو إغلاق.', svg: IMG('assets/signs/F15.png') },

  // 7) PUBLIC INSTITUTIONS (G)
  { id:'G4', category:'allmanna', nameSv:'Akutsjukhus', nameAr:'مستشفى طوارئ', descSv:'Väg till sjukhus med akutmottagning.', descAr:'تدل على وجود مستشفى يحتوي على قسم للطوارئ.', svg: IMG('assets/signs/G4.png') },
  { id:'G6', category:'allmanna', nameSv:'Järnvägsstation', nameAr:'محطة قطار', descSv:'Anger väg till tågstation.', descAr:'تشير إلى الاتجاه المؤدي إلى محطة القطار.', svg: IMG('assets/signs/G6.png') },
  { id:'G8', category:'allmanna', nameSv:'Flygplats', nameAr:'مطار', descSv:'Anger väg till flygplats.', descAr:'تشير إلى الاتجاه المؤدي إلى المطار.', svg: IMG('assets/signs/G8.png') },

  // 8) SERVICE (H)
  { id:'H1', category:'service', nameSv:'Informationsplats', nameAr:'مركز معلومات', descSv:'Plats för turistinformation.', descAr:'مكان يوفر معلومات سياحية أو مرورية.', svg: IMG('assets/signs/H1.png') },
  { id:'H3', category:'service', nameSv:'Drivmedel', nameAr:'محطة وقود', descSv:'Anger bensinmack.', descAr:'تشير إلى وجود محطة لتعبئة الوقود.', svg: IMG('assets/signs/H3.png') },
  { id:'H6', category:'service', nameSv:'Restaurang', nameAr:'مطعم', descSv:'Matservering.', descAr:'تشير إلى وجود مطعم.', svg: IMG('assets/signs/H6.png') },
  { id:'H13', category:'service', nameSv:'Rastplats', nameAr:'استراحة طريق', descSv:'Plats för vila.', descAr:'مكان مخصص للاستراحة بجانب الطريق.', svg: IMG('assets/signs/H13.png') },
  { id:'H22', category:'service', nameSv:'Sevärdhet', nameAr:'معلم سياحي', descSv:'Turistiskt mål.', descAr:'تشير إلى وجود مكان أو معلم سياحي يستحق الزيارة.', svg: IMG('assets/signs/H22.png') },
  { id:'H27', category:'service', nameSv:'Laddstation', nameAr:'محطة شحن كهربائية', descSv:'Laddning för elbilar.', descAr:'مكان مخصص لشحن السيارات الكهربائية.', svg: IMG('assets/signs/H27.png') },

  // 9) TOURIST (I)
  { id:'I1', category:'turist', nameSv:'Turistväg', nameAr:'طريق سياحي', descSv:'Väg med vacker natur eller kultur.', descAr:'يشير إلى طريق ذو طبيعة خلابة أو أهمية ثقافية.', svg: IMG('assets/signs/I1.png') },
  { id:'I4', category:'turist', nameSv:'Världsarv', nameAr:'موقع تراث عالمي', descSv:'Unesco världsarv.', descAr:'يشير إلى موقع مسجل ضمن التراث العالمي لليونسكو.', svg: IMG('assets/signs/I4.png') },

  // 10) INFORMATION (J)
  { id:'J2', category:'upplysning', nameSv:'Upplysningsmärke', nameAr:'علامة معلومات عامة', descSv:'Allmän upplysning.', descAr:'توفر معلومات عامة للسائقين.', svg: IMG('assets/signs/J2.png') },
  { id:'J3', category:'upplysning', nameSv:'Livsfarlig ledning', nameAr:'خطر الموت: كابلات كهربائية', descSv:'Varning för högspänning.', descAr:'تحذير من وجود كابلات كهربائية ذات جهد عالٍ تشكل خطراً على الحياة.', svg: IMG('assets/signs/J3.png') },

  // 11) ROAD MARKINGS (M)
  { id:'M1', category:'vagmark', nameSv:'Mittlinje', nameAr:'خط الوسط', descSv:'Skiljer körfält åt.', descAr:'خط متقطع يفصل بين مسارات المرور في الاتجاهات المختلفة.', svg: IMG('assets/signs/M1.png') },
  { id:'M8', category:'vagmark', nameSv:'Heldragen linje', nameAr:'خط متصل', descSv:'Förbud mot filbyte.', descAr:'خط متصل يمنع تجاوزه أو تغيير المسار فوقه.', svg: IMG('assets/signs/M8.png') },
  { id:'M13', category:'vagmark', nameSv:'Stopplinje', nameAr:'خط التوقف', descSv:'Här ska du stanna.', descAr:'الخط الذي يجب التوقف عنده تماماً عند وجود علامة "قف".', svg: IMG('assets/signs/M13.png') },
  { id:'M15', category:'vagmark', nameSv:'Övergångsställe', nameAr:'معبر مشاة (أرضي)', descSv:'Markering för gående.', descAr:'تحديد المكان المخصص للمشاة لعبور الطريق.', svg: IMG('assets/signs/M15.png') },
  { id:'M32', category:'vagmark', nameSv:'Stopp', nameAr:'كلمة "STOP"', descSv:'Skriftlig anvisning.', descAr:'كلمة "STOP" مكتوبة على الأرض للتأكيد على وجوب التوقف.', svg: IMG('assets/signs/M32.png') },

  // 12) SYMBOLS (S)
  { id:'S1', category:'symboler', nameSv:'Tung lastbil', nameAr:'شاحنة ثقيلة', descSv:'Symbol för lastbil.', descAr:'رمز يشير إلى الشاحنات الثقيلة.', svg: IMG('assets/signs/S1.png') },
  { id:'S7', category:'symboler', nameSv:'Motorcykel', nameAr:'دراجة نارية', descSv:'Symbol för motorcykel.', descAr:'رمز يشير إلى الدراجات النارية.', svg: IMG('assets/signs/S7.png') },

  // 13) SUPPLEMENTARY (T)
  { id:'T1', category:'tillagg', nameSv:'Vägsträckas längd', nameAr:'طول المسافة', descSv:'Anger sträcka.', descAr:'تحدد طول المسافة التي يسري عليها مفعول اللوحة الأساسية.', svg: IMG('assets/signs/T1.png') },
  { id:'T6', category:'tillagg', nameSv:'Tidsangivelse', nameAr:'الأوقات', descSv:'Giltighetstider.', descAr:'تحدد الأوقات أو الأيام التي يسري فيها مفعول اللوحة.', svg: IMG('assets/signs/T6.png') },
  { id:'T16', category:'tillagg', nameSv:'Avgift', nameAr:'رسوم', descSv:'Avgiftsbelagd parkering.', descAr:'تشير إلى أن الوقوف في هذا المكان يتطلب دفع رسوم.', svg: IMG('assets/signs/T16.png') },

  // 14) SIGNALS (SIG)
  { id:'SIG1', category:'signaler', nameSv:'Röd', nameAr:'أحمر', descSv:'Stanna.', descAr:'إشارة التوقف التام.', svg: IMG('assets/signs/SIG1.png') },
  { id:'SIG3', category:'signaler', nameSv:'Grön', nameAr:'أخضر', descSv:'Kör.', descAr:'إشارة السماح بالمرور.', svg: IMG('assets/signs/SIG3.png') },

  // 15) OTHER (X)
  { id:'X1', category:'andra', nameSv:'Markeringspil', nameAr:'سهم توجيه', descSv:'Anordningen används för att markera en kurva, en plats där en väg slutar eller en plats där trafiken i övrigt kan behöva vägledning. Symbolen är anpassad efter förhållandena på platsen.', descAr:'تُستخدم هذه الأداة لتحديد منعطف، أو مكان ينتهي فيه الطريق، أو مكان قد يحتاج فيه المرور إلى توجيه آخر. يتم تكييف الرمز حسب الظروف في الموقع.', svg: IMG('assets/signs/X1.png') },
  { id:'X2', category:'andra', nameSv:'Markeringsskärm för hinder', nameAr:'لوحة تحديد العوائق', descSv:'Anordningen används för att markera ett hinder. Den används också för att markera en plats där en körbana slutar eller där vägen slutar.', descAr:'تُستخدم هذه الأداة لتحديد عائق. كما تُستخدم أيضاً لتحديد مكان ينتهي فيه مسار القيادة أو ينتهي فيه الطريق.', svg: IMG('assets/signs/X2.png') },
  { id:'X3', category:'andra', nameSv:'Markeringsskärm för sidohinder', nameAr:'لوحة تحديد العوائق الجانبية', descSv:'Anordningen används för att markera sidohinder eller för att markera farthinder.', descAr:'تُستخدم هذه الأداة لتحديد العوائق الجانبية أو لتحديد مخففات السرعة (المطبات).', svg: IMG('assets/signs/X3.png') },
  { id:'X4', category:'andra', nameSv:'Avfartsskärm', nameAr:'لوحة مخرج (شاشة مخرج)', descSv:'Anordningen anger plats där körbanan delar sig, till exempel vid en avfart med retardationsfält.', descAr:'تحدد هذه الأداة المكان الذي ينقسم فيه مسار القيادة، على سبيل المثال عند مخرج يحتوي على حارة تباطؤ.', svg: IMG('assets/signs/X4.png') },
  { id:'X5', category:'andra', nameSv:'Gul ljuspil eller ljuspilar', nameAr:'سهم أو أسهم ضوئية صفراء', descSv:'Anordningen anger att trafikanter ska passera på den sida pilen visar. Den kan vara tänd med fast eller blinkande sken.', descAr:'تشير هذه الأداة إلى وجوب مرور مستخدمي الطريق من الجانب الذي يظهره السهم. يمكن أن تضيء بضوء ثابت أو وامض.', svg: IMG('assets/signs/X5.png') },
  { id:'X6', category:'andra', nameSv:'Särskild varningsanordning', nameAr:'أداة تحذير خاصة', descSv:'Anordningen anger att vägen är helt eller delvis stängd för trafik eller att vägen är begränsad på grund av ett tillfälligt hinder eller liknande.', descAr:'تشير هذه الأداة إلى أن الطريق مغلق كلياً أو جزئياً أمام حركة المرور، أو أن الطريق مقيد بسبب عائق مؤقت أو ما شابه.', svg: IMG('assets/signs/X6.png') },
  { id:'X7', category:'andra', nameSv:'Vägbom', nameAr:'حاجز طريق (بوابة)', descSv:'Anordningen anger att vägen är helt eller delvis stängd för trafik.', descAr:'تشير هذه الأداة إلى أن الطريق مغلق كلياً أو جزئياً أمام حركة المرور.', svg: IMG('assets/signs/X7.png') },
  { id:'X8', category:'andra', nameSv:'Tillfällig stängning', nameAr:'إغلاق مؤقت (لإشارة)', descSv:'Anordningen anger att ett visst trafikmärke tillfälligt inte gäller. Anordningen placeras över det märke som inte ska gälla.', descAr:'تشير هذه الأداة إلى أن شاخصة مرورية معينة لم تعد سارية المفعول مؤقتاً. توضع الأداة فوق الشاخصة التي لا ينبغي العمل بها.', svg: IMG('assets/signs/X8.png') },
  { id:'X9', category:'andra', nameSv:'Cirkulationstrafik', nameAr:'علامة نقطة المركز في الدوار', descSv:'Anordningen anger mittpunkten i en cirkulationsplats som fordon ska köras runt.', descAr:'تحدد هذه الأداة نقطة المركز في الدوار التي يجب على المركبات الالتفاف حولها.', svg: IMG('assets/signs/X9.png') },
  { id:'X10', category:'andra', nameSv:'Stolpmarkeringsanordning', nameAr:'أداة تحديد الأعمدة', descSv:'Anordningen används för att det ska vara lättare att upptäcka ett vägmärke eller en annan anordning enligt denna förordning. Anordningen är placerad på en stolpe eller motsvarande som bär upp ett vägmärke eller en annan anordning. Anordningen är anpassad till förhållandena på platsen. En stolpmarkeringsanordning har samma färgsättning som det vägmärke eller den andra anordning som den sitter under om inte Transportstyrelsen föreskriver annat.', descAr:'تُستخدم هذه الأداة لتسهيل اكتشاف شاخصة مرورية أو أداة أخرى وفقاً لهذه اللوائح. توضع الأداة على عمود أو ما يماثله يحمل شاخصة مرورية أو أداة أخرى. يتم تكييف الأداة حسب الظروف في الموقع. تأخذ أداة تحديد الأعمدة نفس ألوان الشاخصة المرورية أو الأداة الأخرى التي توضع تحتها، ما لم تنص مصلحة النقل (Transportstyrelsen) على خلاف ذلك.', svg: IMG('assets/signs/X10.png') },

  // Additional Important Signs
  { id:'F25', category:'vagvisning', nameSv:'Körfält upphör', nameAr:'نهاية المسار', descSv:'Körfältet slutar.', descAr:'تشير إلى أن المسار الحالي سينتهي ويجب الاندماج في المسار المجاور.', svg: IMG('assets/signs/F25.png') },
  { id:'M19', category:'vagmark', nameSv:'Körfältspilar', nameAr:'أسهم المسارات', descSv:'Välj körfält.', descAr:'تحدد الاتجاهات المسموح بها من كل مسار (حارة).', svg: IMG('assets/signs/M19.png') },
  { id:'T13', category:'tillagg', nameSv:'Flervägsväjning', nameAr:'إفساح طريق رباعي', descSv:'Väjningsplikt från alla håll.', descAr:'تنبيه بأن جميع الأطراف في التقاطع ملزمون بإفساح الطريق لبعضهم (قاعدة الأولوية للقادم أولاً).', svg: IMG('assets/signs/T13.png') },
];

if (typeof module !== 'undefined') module.exports = { CATEGORIES, SIGNS };
