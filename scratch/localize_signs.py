
import os
import re
import requests

def download_and_localize():
    js_path = '/Users/mohammedabunada/Documents/Vipe/Körkort/signs-data.js'
    assets_dir = '/Users/mohammedabunada/Documents/Vipe/Körkort/assets/signs'
    
    if not os.path.exists(assets_dir):
        os.makedirs(assets_dir)

    with open(js_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    updated_lines = []
    
    # Regex to capture the whole sign line and extract id and url
    # Line format: { id:'A1-1', ..., svg: IMG('url') },
    line_re = re.compile(r"(.*?id:'([^']*)'.*?svg:\s*)IMG\('([^']*)'\)(.*)")

    for line in lines:
        match = line_re.search(line)
        if match:
            prefix, sign_id, url, suffix = match.groups()
            
            # Decide local filename
            # Some URLs are aspx, some png. We'll save all as png or svg.
            ext = 'png'
            if '.svg' in url.lower(): ext = 'svg'
            
            local_filename = f"{sign_id}.{ext}"
            local_path = f"assets/signs/{local_filename}"
            full_local_path = os.path.join(os.path.dirname(js_path), local_path)
            
            # Try downloading
            success = False
            try:
                # Try original URL
                print(f"Downloading {sign_id} from {url}...")
                resp = requests.get(url, timeout=10)
                if resp.status_code == 200:
                    with open(full_local_path, 'wb') as f_img:
                        f_img.write(resp.content)
                    success = True
                else:
                    print(f"Failed (Status {resp.status_code}). Trying variations...")
                    # Variation 1: Remove/Add -1 suffix in filename
                    if sign_id.endswith('-1'):
                        alt_url = url.replace(f"{sign_id}.png", f"{sign_id[:-2]}.png")
                    else:
                        alt_url = url.replace(f"{sign_id}.png", f"{sign_id}-1.png")
                    
                    if alt_url != url:
                        resp = requests.get(alt_url, timeout=10)
                        if resp.status_code == 200:
                            with open(full_local_path, 'wb') as f_img:
                                f_img.write(resp.content)
                            success = True
                            print(f"Success with variation: {alt_url}")
            except Exception as e:
                print(f"Error downloading {sign_id}: {e}")

            if success:
                # Update line to use local path string
                updated_line = f"{prefix}'{local_path}'{suffix}\n"
                updated_lines.append(updated_line)
            else:
                # Keep original if download failed
                updated_lines.append(line)
        else:
            updated_lines.append(line)

    with open(js_path, 'w', encoding='utf-8') as f:
        f.writelines(updated_lines)
    
    print("Localization complete.")

if __name__ == "__main__":
    download_and_localize()
