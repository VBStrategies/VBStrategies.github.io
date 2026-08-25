# VB Strategies — návod: jak dostat web online (GitHub Pages)

Máš složku se soubory. Teď z ní uděláme živý web na veřejné adrese. Zdarma, zvládneš to za ~20 minut.

## 1. Založ účet na GitHubu

1. Jdi na **github.com** → klikni **Sign up**.
2. Zadej email, heslo a uživatelské jméno.
   - **Uživatelské jméno si rozmysli** — bude v adrese webu!
     Např. jméno `vasek-finance` → web bude `vasek-finance.github.io`.
3. Potvrď email.

## 2. Vytvoř repozitář (úložiště webu)

1. Vpravo nahoře klikni na **+** → **New repository**.
2. **Repository name** napiš přesně takto:
   `TVOJE-UZIVATELSKE-JMENO.github.io`
   (např. `vasek-finance.github.io` — musí sedět s tvým jménem)
3. Nastav na **Public**.
4. Klikni **Create repository**.

## 3. Nahraj soubory

1. V novém repozitáři klikni **uploading an existing file**
   (nebo záložka **Add file** → **Upload files**).
2. Otevři složku `website` v počítači a **přetáhni dovnitř VŠECHNY soubory a složky**:
   - `index.html` (úvodní stránka Home)
   - `investments.html` (On Investments)
   - `blog.html`
   - `about.html`
   - `style.css`
   - `script.js`
   - složku `projects/`
   - složku `blog/`
   - složku `files/`
   
   Důležité: nahraj i podsložky se stejnou strukturou.
3. Dole klikni **Commit changes**.

## 4. Zapni GitHub Pages

1. V repozitáři nahoře → **Settings**.
2. V levém menu → **Pages**.
3. V sekci **Source** vyber větev **main** (nebo **master**) a složku **/ (root)**.
4. Klikni **Save**.
5. Počkej 1–2 minuty a nahoře se objeví adresa tvého webu:
   `https://TVOJE-JMENO.github.io`

Hotovo — web je online. 🎉

## 5. Jak přidávat obsah později

- **Nový projekt (DCF/LBO):** zkopíruj `projects/dcf-company-x.html`, přejmenuj,
  uprav text, a přidej odkaz do `investments.html`.
- **Nový blog:** zkopíruj `blog/crypto-finance-intro.html`, uprav, a přidej
  odkaz + `data-tags` do `blog.html`.
- **Soubory (Excel/PDF):** nahraj do složky `files/` a odkaz už v šabloně je.

## Co upravit jako první

Kde upravit texty:
- [ ] Doplň text do About → Why? / Cíl / Contact
- [ ] Vyměň `[Company X]` a `[Target Co]` za reálné názvy, až budeš mít projekty
- [ ] Doplň odkaz na Support a Cal.com do About tiles

Barvy, font i disclaimer jsou už nastavené podle tvého zadání.


## Home je už nastavená jako úvodní stránka

Web začíná na Home (`index.html`) s grafikou a popisem. On Investments je
v `investments.html`, přístupná z menu. Vše je propojené, nemusíš nic prohazovat.
