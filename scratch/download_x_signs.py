
import os
import requests

signs = [
  {
    "id": "X4",
    "url": "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x04.-avfartsskarm/x4-1.png"
  },
  {
    "id": "X5",
    "url": "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x05.-gul-ljuspil-eller-ljuspilar/x5-1.png"
  },
  {
    "id": "X6",
    "url": "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x06.-sarskild-varningsanordning/x6-1.png"
  },
  {
    "id": "X7",
    "url": "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x07.-vagbom/x7-1.png"
  },
  {
    "id": "X8",
    "url": "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x08.-tillfallig-stangning/x8-1.png"
  },
  {
    "id": "X9",
    "url": "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x09.-cirkulationstrafik/x9-1.png"
  },
  {
    "id": "X10",
    "url": "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x10.-stolpmarkeringsanordning/x10.png"
  }
]

assets_dir = '/Users/mohammedabunada/Documents/Vipe/Körkort/assets/signs'

for s in signs:
    path = os.path.join(assets_dir, f"{s['id']}.png")
    print(f"Downloading {s['id']}...")
    try:
        resp = requests.get(s['url'], timeout=10)
        if resp.status_code == 200:
            with open(path, 'wb') as f:
                f.write(resp.content)
            print("Success.")
        else:
            print(f"Failed: {resp.status_code}")
    except Exception as e:
        print(f"Error: {e}")
