import re
import os

js_path = '/Users/mohammedabunada/Documents/Vipe/Körkort/signs-data.js'

with open(js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Ensure the IMG function is correct (with escaped quotes)
content = re.sub(
    r"const IMG = \(url\) => .*",
    r"const IMG = (url) => `<img src=\"${url}\" style=\"width:100%; height:100%; object-fit:contain;\" loading=\"lazy\">`;",
    content
)

# 2. Fix the broken IMG('assets/') by stripping the broken wrapper first
content = re.sub(
    r"IMG\(['\"](assets/|http)['\"]\)",
    r"'\1'",
    content
)

# 3. Correctly wrap everything
def wrap_svg(match):
    key = match.group(1)
    quote = match.group(2)
    path = match.group(3) + match.group(4)
    return f"{key}: IMG({quote}{path}{quote})"

# This time we match everything inside the quotes
content = re.sub(
    r"(svg)\s*:\s*(['\"])(assets/|http)(.*?)\2",
    wrap_svg,
    content
)

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("signs-data.js updated correctly.")
