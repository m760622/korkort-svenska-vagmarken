
import re

# Paths
SIGNS_DATA_PATH = '/Users/mohammedabunada/Documents/Vipe/Körkort/signs-data.js'

# Detailed descriptions dictionary
EXTENDED_DATA = {
    "A29": {
        "sv": "Märket anger en vägkorsning där förare av fordon på anslutande vägar har väjningsplikt eller stopplikt. Symbolen är anpassad efter förhållandena på platsen.",
        "ar": "تحذّر هذه الإشارة من تقاطع طرق تكون فيه الأولوية أو التوقف واجبًا على القادمين من الطريق المتصل. يتم تكييف الرمز حسب ظروف المكان."
    },
    "B1": {
        "sv": "Märket anger att förare har väjningsplikt mot fordon på korsande väg eller led och att bestämmelserna i 3 kap. 5 § trafikförordningen (1998:1276) är tillämpliga.",
        "ar": "توضح هذه الإشارة قاعدة أولوية: وجوب إعطاء الأولوية للمركبات على الطريق المتقاطع، وتطبق أحكام الفصل 3 المادة 5 من قانون المرور (1998:1276)."
    },
    "B2": {
        "sv": "Märket anger att förare har stopplikt före infart på korsande väg, led eller spårområde och att bestämmelserna i 3 kap. 19 § trafikförordningen är tillämpliga.",
        "ar": "توضح هذه الإشارة قاعدة أولوية: وجوب التوقف قبل الدخول إلى الطريق المتقاطع أو منطقة المسار، وتطبق أحكام الفصل 3 المادة 19 من قانون المرور."
    },
    "B8": {
        "sv": "Märket anger en cykelöverfart. Vid cykelöverfarter är för fordonsförare bestämmelserna i 3 kap. 61 a § och för cyklande och förare av moped klass II bestämmelserna i 6 kap. 6 § trafikförordningen tillämpliga.",
        "ar": "تشير هذه الإشارة إلى معبر دراجات. عند معابر الدراجات، تنطبق أحكام الفصل 3 المادة 61 أ من قانون المرور على سائقي المركبات، بينما تنطبق أحكام الفصل 6 المادة 6 على راكبي الدراجات وقائدي الدراجات النارية من الفئة الثانية."
    },
    "C31": {
        "sv": "Märket anger förbud mot att föra fordon med högre hastighet än den som anges på märket. Angivelsen gäller till den plats där en annan högsta tillåtna hastighet anges eller där märke C32, tillfällig hastighetsbegränsning upphör, är uppsatt.",
        "ar": "تشير هذه الإشارة إلى تحديد السرعة القصوى المسموح بها. يسري هذا التحديد حتى الوصول إلى مكان يتم فيه تحديد سرعة قصوى أخرى أو حتى ظهور إشارة C32 التي تنهي تحديد السرعة المؤقت."
    },
    "C35": {
        "sv": "Märket anger förbud mot att parkera fordon. Angivelsen gäller på den sida av vägen där märket är uppsatt. Angivelsen gäller till nästa korsning om inte annat anges.",
        "ar": "تشير هذه الإشارة إلى حظر وقوف المركبات. يسري المنع على جانب الطريق الذي وضعت فيه الإشارة، ويمتد حتى التقاطع التالي ما لم يذكر خلاف ذلك."
    },
    "D1": {
        "sv": "Märket anger att fordon endast får föras i pilens eller, där två pilar finns, i endera pilens riktning. Symbolen är anpassad efter förhållandena på platsen.",
        "ar": "تفرض هذه الإشارة اتجاه سير إلزامي؛ حيث لا يجوز قيادة المركبة إلا في اتجاه السهم أو أحد السهمين (إذا وجد سهمان). يتم تكييف الرمز حسب ظروف المكان."
    },
    "E1": {
        "sv": "Märket anger att en väg är motorväg. Bestämmelser för trafik på motorväg finns i 9 kap. 1 och 2 §§ trafikförordningen (1998:1276).",
        "ar": "تشير هذه الإشارة إلى بداية طريق سريع. توجد قواعد المرور على الطرق السريعة في الفصل 9 المادتين 1 و 2 من قانون المرور (1998:1276)."
    }
}

with open(SIGNS_DATA_PATH, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    updated = False
    for code, data in EXTENDED_DATA.items():
        if f"id:'{code}'" in line:
            # Replace descSv:"..." and descAr:"..."
            line = re.sub(r'descSv:".*?"', f'descSv:"{data["sv"]}"', line)
            line = re.sub(r'descAr:".*?"', f'descAr:"{data["ar"]}"', line)
            new_lines.append(line)
            updated = True
            break
    if not updated:
        new_lines.append(line)

with open(SIGNS_DATA_PATH, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Successfully updated key signs with extended legal descriptions.")
