import re
import os

js_path = '/Users/mohammedabunada/Documents/Vipe/Körkort/signs-data.js'

with open(js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the IMG function definition
content = re.sub(
    r"const IMG = \(url\) => url;",
    r"const IMG = (url) => `<img src=\"${url}\" style=\"width:100%; height:100%; object-fit:contain;\" loading=\"lazy\">`;",
    content
)

# 2. Find all svg: 'path' and wrap them in IMG('path')
# This regex avoids double wrapping by checking if IMG is already there
# It looks for svg: 'assets/...' or svg: 'http...'
def wrap_svg(match):
    full_match = match.group(0)
    key = match.group(1)
    quote = match.group(2)
    path = match.group(3)
    
    # If already wrapped in IMG, return as is
    if 'IMG(' in full_match:
        return full_match
        
    return f"{key}: IMG({quote}{path}{quote})"

# Matches svg: 'assets/signs/A1.png' or svg: 'https://...'
content = re.sub(
    r"(svg)\s*:\s*(['\"])(assets/|http)(.*?)\2",
    wrap_svg,
    content
)

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("signs-data.js updated and IMG function fixed.")
