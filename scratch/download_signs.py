
import os
import re
import requests
import json

def download_signs():
    js_path = '/Users/mohammedabunada/Documents/Vipe/Körkort/signs-data.js'
    assets_dir = '/Users/mohammedabunada/Documents/Vipe/Körkort/assets/signs'
    
    if not os.path.exists(assets_dir):
        os.makedirs(assets_dir)

    with open(js_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all entries: { id:'...', ..., svg: IMG('...') }
    # This regex is a bit loose but should work for the current format
    pattern = re.compile(r"\{\s*id:'([^']*)'.*?svg:\s*IMG\('([^']*)'\)\s*\}", re.DOTALL)
    
    matches = pattern.findall(content)
    print(f"Found {len(matches)} signs to download.")

    for sign_id, url in matches:
        # Determine extension
        ext = 'png'
        if '.png' in url.lower(): ext = 'png'
        elif '.svg' in url.lower(): ext = 'svg'
        elif '.aspx' in url.lower(): ext = 'png' # Most aspx on TS seem to be images
        
        filename = f"{sign_id}.{ext}"
        filepath = os.path.join(assets_dir, filename)
        
        print(f"Downloading {sign_id} from {url} ...")
        try:
            response = requests.get(url, timeout=10)
            if response.status_code == 200:
                with open(filepath, 'wb') as f:
                    f.write(response.content)
                # Update content in memory
                # Replace the IMG('url') with 'assets/signs/filename'
                content = content.replace(f"IMG('{url}')", f"'assets/signs/{filename}'")
            else:
                print(f"Failed to download {sign_id}: Status {response.status_code}")
        except Exception as e:
            print(f"Error downloading {sign_id}: {e}")

    # Write updated JS file
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Download and update complete.")

if __name__ == "__main__":
    download_signs()
