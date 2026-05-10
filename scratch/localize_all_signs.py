
import json
import os
import urllib.request
import ssl
import glob

# Paths
JSON_PATH = '/Users/mohammedabunada/Documents/Vipe/Körkort/transportstyrelsen_vagmarken_sv_ar_with_descriptions.json'
ASSETS_DIR = '/Users/mohammedabunada/Documents/Vipe/Körkort/assets/signs/all'
SIGNS_DATA_PATH = '/Users/mohammedabunada/Documents/Vipe/Körkort/signs-data.js'

# Create assets dir if missing
os.makedirs(ASSETS_DIR, exist_ok=True)

# Bypass SSL verification for those few problematic URLs
ssl_context = ssl._create_unverified_context()

# Mapping group_id to category key
GROUP_TO_CAT = {
    "A": "varning", "B": "vajning", "C": "forbud", "D": "pabud", "E": "anvisning",
    "F": "lokalisering", "G": "lokalisering", "H": "lokalisering", "I": "lokalisering",
    "J": "anvisning", "M": "vagmark", "P": "polisman", "S": "symboler",
    "SIG": "trafiksignaler", "T": "tillagg", "V": "vakt", "X": "andra", "Y": "jarnvag"
}

CAT_CONFIG = {
    "varning": {"nameSv": "Varningsmärken", "nameAr": "علامات التحذير", "color": "#FFC700", "icon": "⚠️", "descSv": "Varnar för fara.", "descAr": "تحذر من وجود خطر."},
    "vajning": {"nameSv": "Väjningspliktsmärken", "nameAr": "علامات الأولوية", "color": "#E63946", "icon": "🛑", "descSv": "Upplyser om väjningsplikt.", "descAr": "توضح وجوب إعطاء الأولوية."},
    "forbud": {"nameSv": "Förbudsmärken", "nameAr": "علامات المنع", "color": "#C8102E", "icon": "🚫", "descSv": "Anger förbud.", "descAr": "تشير إلى منع معين."},
    "pabud": {"nameSv": "Påbudsmärken", "nameAr": "علامات الإلزام", "color": "#003F87", "icon": "⬆️", "descSv": "Anger påbud.", "descAr": "تشير إلى أمر إلزامي."},
    "anvisning": {"nameSv": "Anvisningsmärken", "nameAr": "إشارات الإرشاد", "color": "#0072CE", "icon": "🅿️", "descSv": "Upplyser om regler.", "descAr": "تخبر بالقواعد المنطبقة."},
    "lokalisering": {"nameSv": "Lokaliseringsmärken", "nameAr": "علامات التوجيه والخدمات", "color": "#007A33", "icon": "📍", "descSv": "Vägvisning och service.", "descAr": "علامات توجيه وخدمات."},
    "tillagg": {"nameSv": "Tilläggstavlor", "nameAr": "لوحات إضافية", "color": "#FFFFFF", "icon": "📝", "descSv": "Kompletterande anvisningar.", "descAr": "تعليمات تكميلية."},
    "vagmark": {"nameSv": "Vägmarkeringar", "nameAr": "علامات الطريق", "color": "#FFFFFF", "icon": "➖", "descSv": "Markeringar på vägbanan.", "descAr": "علامات أرضية."},
    "polisman": {"nameSv": "Tecken av polisman", "nameAr": "إشارات الشرطي", "color": "#002366", "icon": "👮", "descSv": "Anvisningar av polis.", "descAr": "تعليمات الشرطة."},
    "symboler": {"nameSv": "Symboler", "nameAr": "الرموز", "color": "#FFFFFF", "icon": "🚛", "descSv": "Symboler för fordon.", "descAr": "رموز لأنواع المركبات."},
    "trafiksignaler": {"nameSv": "Trafiksignaler", "nameAr": "إشارات المرور الضوئية", "color": "#000000", "icon": "🚦", "descSv": "Ljussignaler.", "descAr": "إشارات ضوئية لتنظيم المرور."},
    "vakt": {"nameSv": "Tecken av vakt", "nameAr": "إشارات الحراس", "color": "#FFC700", "icon": "🛑", "descSv": "Anvisningar av vakt.", "descAr": "تعليمات من حراس الطريق."},
    "andra": {"nameSv": "Andra anordningar", "nameAr": "أدوات أخرى", "color": "#212121", "icon": "🚧", "descSv": "Övriga anvisningar.", "descAr": "أدوات تنظيمية أخرى."},
    "jarnvag": {"nameSv": "Järnvägskorsning", "nameAr": "تقاطع السكك الحديدية", "color": "#E63946", "icon": "🛤️", "descSv": "Signaler vid järnväg.", "descAr": "إشارات عند تقاطع السكك الحديدية."}
}

def download_image(url, code):
    if not url:
        return None
    
    # Check if any file with this code already exists
    existing = glob.glob(os.path.join(ASSETS_DIR, f"{code}.*"))
    if existing:
        return os.path.basename(existing[0])
    
    ext = url.split('.')[-1].split('?')[0]
    if len(ext) > 4: ext = "png" # Safety for weird URLs
    filename = f"{code}.{ext}"
    dest_path = os.path.join(ASSETS_DIR, filename)
    
    try:
        headers = {'User-Agent': 'Mozilla/5.0'}
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10, context=ssl_context) as response, open(dest_path, 'wb') as out_file:
            out_file.write(response.read())
        return filename
    except Exception as e:
        print(f"Error downloading {code} from {url}: {e}")
        return None

# Load the reference JSON
with open(JSON_PATH, 'r', encoding='utf-8') as f:
    ref_data = json.load(f)

# Process Groups and Items
CATEGORIES_LIST = []
used_cats = set()
SIGNS_LIST = []

for group in ref_data.get('groups', []):
    group_id = group.get('group_id')
    cat_key = GROUP_TO_CAT.get(group_id, "andra")
    
    if cat_key not in used_cats:
        conf = CAT_CONFIG.get(cat_key, {})
        CATEGORIES_LIST.append({
            "key": cat_key,
            "nameSv": conf.get("nameSv", group.get("name_sv")),
            "nameAr": conf.get("nameAr", group.get("name_ar")),
            "color": conf.get("color", "#CCCCCC"),
            "icon": conf.get("icon", "❓"),
            "descSv": conf.get("descSv", group.get("description_sv")),
            "descAr": conf.get("descAr", group.get("description_ar"))
        })
        used_cats.add(cat_key)
    
    for item in group.get('items', []):
        code = item.get('code')
        img_url = item.get('image_url')
        local_filename = download_image(img_url, code)
        
        if not local_filename:
            local_filename = f"{code}.png" # Final fallback
            
        SIGNS_LIST.append({
            "id": code,
            "category": cat_key,
            "nameSv": item.get('name_sv'),
            "nameAr": item.get('name_ar'),
            "descSv": item.get('description_sv'),
            "descAr": item.get('description_ar'),
            "local_file": local_filename
        })

# Generate signs-data.js content
output = "// Svenska Vägmärken — Comprehensive Database\n"
output += "const IMG = (url) => `<img src=\"${url}\" style=\"width:100%; height:100%; object-fit:contain;\" loading=\"lazy\">`;\n\n"
output += "const CATEGORIES = " + json.dumps(CATEGORIES_LIST, indent=2, ensure_ascii=False) + ";\n\n"
output += "const SIGNS = [\n"
for s in SIGNS_LIST:
    dSv = s['descSv'].replace('"', '\\"').replace('\n', ' ')
    dAr = s['descAr'].replace('"', '\\"').replace('\n', ' ')
    output += f"  {{ id:'{s['id']}', category:'{s['category']}', nameSv:'{s['nameSv']}', nameAr:'{s['nameAr']}', descSv:\"{dSv}\", descAr:\"{dAr}\", svg: IMG('assets/signs/all/{s['local_file']}') }},\n"
output += "];\n\n"
output += "if (typeof module !== 'undefined') module.exports = { CATEGORIES, SIGNS };\n"

with open(SIGNS_DATA_PATH, 'w', encoding='utf-8') as f:
    f.write(output)

print(f"Successfully processed {len(SIGNS_LIST)} signs across {len(CATEGORIES_LIST)} categories.")
