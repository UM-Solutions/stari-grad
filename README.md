# Restoran Stari Grad kod Vase — Website

Etno restoran u Petrovcu na Mlavi. React multipage sajt.

## Pokretanje

```bash
# Instaliraj dependencies
npm install

# Pokreni dev server
npm start

# Build za produkciju
npm run build
```

## Struktura projekta

```
src/
├── components/       # Navbar, Footer, Lightbox, ScrollToTop
├── pages/            # Home, Menu, Celebrations, Accommodation, Gallery, About, Contact
├── data/             # siteData.js — svi podaci (meni, galerija, planovi za proslave)
├── styles/           # global.css — CSS varijable i zajednički stilovi
├── assets/           # Folder za slike (dodaj .jpg/.png fajlove ovde)
├── App.js            # Routing
└── index.js          # Entry point
```

## Dodavanje slika

1. Stavi slike u `src/assets/` folder
2. U `src/data/siteData.js` u `galleryItems` nizu dodaj `image` polje:
   ```js
   { caption: 'Kamin', category: 'ambijent', image: require('../assets/kamin.jpg') }
   ```
3. Za slike na stranicama (hero, sobe, itd) — zameni `img-placeholder` elemente sa `<img>` tagovima

## Stranice

- `/` — Početna (hero, o restoranu, VIP sto)
- `/meni` — Meni sa kategorijama i expand/collapse opisima
- `/proslave` — 3 plana (Klasik, Premium, Daća)
- `/smestaj` — Sobe za prenoćište
- `/galerija` — Galerija sa filterima i lightbox-om
- `/o-nama` — Priča o restoranu
- `/kontakt` — Telefoni, adresa, mapa

## Tehnologije

- React 18
- React Router v6
- CSS (bez frameworka — čist CSS sa varijablama)
- Google Fonts (Playfair Display, Cormorant Garamond, Source Sans 3)
