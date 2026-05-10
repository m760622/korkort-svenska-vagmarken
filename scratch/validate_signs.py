
import os
import re
import json

# Paths
SIGNS_DATA_PATH = '/Users/mohammedabunada/Documents/Vipe/Körkort/signs-data.js'
ASSETS_DIR = '/Users/mohammedabunada/Documents/Vipe/Körkort/assets/signs/all'

def check_signs_data():
    errors = []
    with open(SIGNS_DATA_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract CATEGORIES array
    cat_match = re.search(r'const CATEGORIES = (\[.*?\]);', content, re.DOTALL)
    if not cat_match:
        errors.append("Error: Could not find CATEGORIES array in signs-data.js")
    else:
        try:
            categories = json.loads(cat_match.group(1))
            cat_keys = [c['key'] for c in categories]
            # Check for duplicates or missing fields in categories
            for cat in categories:
                for field in ['key', 'nameSv', 'nameAr', 'color', 'icon', 'descSv', 'descAr']:
                    if field not in cat or not cat[field]:
                        errors.append(f"Category {cat.get('key', 'unknown')} is missing field: {field}")
        except Exception as e:
            errors.append(f"Error parsing CATEGORIES: {e}")

    # Extract SIGNS array items
    # Format: { id:'A1', category:'varning', nameSv:'...', nameAr:'...', descSv:"...", descAr:"...", svg: IMG('assets/signs/all/A1.png') },
    sign_pattern = re.compile(r"\{\s*id:'(.*?)',\s*category:'(.*?)',\s*nameSv:'(.*?)',\s*nameAr:'(.*?)',\s*descSv:\"(.*?)\",\s*descAr:\"(.*?)\",\s*svg:\s*IMG\('(.*?)'\)\s*\}")
    signs = sign_pattern.findall(content)
    
    if not signs:
        errors.append("Error: No signs found in SIGNS array matching the expected pattern.")
    
    seen_ids = set()
    for s in signs:
        sid, cat, nSv, nAr, dSv, dAr, img_path = s
        
        # Check for duplicate IDs
        if sid in seen_ids:
            errors.append(f"Duplicate Sign ID: {sid}")
        seen_ids.add(sid)
        
        # Check if category exists
        if cat not in cat_keys:
            errors.append(f"Sign {sid} uses unknown category: {cat}")
            
        # Check if image file exists
        full_img_path = os.path.join('/Users/mohammedabunada/Documents/Vipe/Körkort', img_path)
        if not os.path.exists(full_img_path):
            errors.append(f"Missing image asset for sign {sid}: {img_path}")
            
        # Check for empty fields
        if not nSv or not nAr or not dSv or not dAr:
            errors.append(f"Sign {sid} has empty metadata field.")

    # Check for syntax errors (basic check)
    if content.count('{') != content.count('}'):
        errors.append("Potential syntax error: mismatched braces { }")
    if content.count('[') != content.count(']'):
        errors.append("Potential syntax error: mismatched brackets [ ]")

    return errors, len(signs)

errors, count = check_signs_data()
if not errors:
    print(f"✅ Success! All {count} signs and categories validated perfectly.")
else:
    print(f"❌ Found {len(errors)} errors:")
    for err in errors[:20]: # Show first 20
        print(f"  - {err}")
    if len(errors) > 20:
        print(f"  ... and {len(errors)-20} more.")
