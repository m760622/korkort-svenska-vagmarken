import re
import os

js_path = '/Users/mohammedabunada/Documents/Vipe/Körkort/signs-data.js'
assets_dir = '/Users/mohammedabunada/Documents/Vipe/Körkort/assets/signs/'

with open(js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Function to reconstruct path based on ID
def reconstruct(match):
    sign_id = match.group(1)
    # Check if .png or .svg exists in assets
    path_png = f"assets/signs/{sign_id}.png"
    path_svg = f"assets/signs/{sign_id}.svg"
    
    final_path = path_png # Default
    if os.path.exists(os.path.join('/Users/mohammedabunada/Documents/Vipe/Körkort/', path_svg)):
        final_path = path_svg
    
    return f"id:'{sign_id}'," + match.group(2) + f"svg: IMG('{final_path}')"

# Match id:'...', [any chars], svg: IMG('assets/')
# We need to be careful with the greedy match
content = re.sub(
    r"id:'([^']*)',(.*?)svg:\s*IMG\(['\"]assets/['\"]\)",
    reconstruct,
    content,
    flags=re.DOTALL
)

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("signs-data.js reconstructed.")
