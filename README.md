# Milan Routine

Een installeerbare web-app (PWA) voor training, voeding en herstel. Werkt op laptop én telefoon, slaat alles lokaal op je apparaat op en werkt offline na de eerste keer laden.

## Bestanden
- `index.html` — de app
- `manifest.webmanifest` — app-instellingen (naam, kleuren, icoon)
- `sw.js` — service worker (offline)
- `icon.svg` — app-icoon
- `icons.html` — *optioneel*: genereert PNG-iconen voor iPhone (eenmalig)

> Tip: dubbelklikken op `index.html` werkt voor een snelle blik, maar **installeren en offline werken lukt alleen via een echte link (https)**. Host hem daarom met één van de twee opties hieronder.

---

## Optie A — Netlify Drop (snelst, ± 1 minuut)
1. Ga naar **https://app.netlify.com/drop**
2. Sleep de **hele map `milan-routine`** op het vlak.
3. Je krijgt direct een link, bijvoorbeeld `https://iets-willekeurigs.netlify.app`.
4. Maak (gratis) een account aan om de link permanent te houden en een mooiere naam te kiezen.

## Optie B — GitHub Pages (permanent, zonder terminal)
1. Maak een gratis account op **https://github.com** (als je die nog niet hebt).
2. Klik **New repository** → naam bijv. `routine` → **Create**.
3. Klik **uploading an existing file** → sleep alle bestanden uit `milan-routine` erin → **Commit changes**.
4. Ga naar **Settings → Pages** → bij *Branch* kies `main` en map `/ (root)` → **Save**.
5. Na ± 1 minuut staat je app op `https://<jouw-gebruikersnaam>.github.io/routine/`.

---

## Op de telefoon zetten (zo voelt het als een echte app)
- **Android (Chrome):** open de link → menu (⋮) → **App installeren** / **Toevoegen aan startscherm**.
- **iPhone (Safari):** open de link → deel-knop (⬆️) → **Zet op beginscherm**.
  - Eigen icoon op iPhone? Open eenmalig `icons.html`, sla de PNG's op in de map en host opnieuw.

## Data
Alles staat lokaal in je browser (localStorage). Wis je browserdata of gebruik je een ander apparaat, dan begin je leeg. Gebruik in de app **Meer → Export** om een back-up te maken en **Import** om die terug te zetten.
