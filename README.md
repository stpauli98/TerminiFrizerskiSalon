# Termin - Frizerski Salon Booking

Platforma za online rezervaciju termina u frizerskim salonima u Banja Luci.

## O projektu

Termin je web aplikacija koja omogućava korisnicima da pretražuju frizerske salone, pregledaju usluge i rezervišu termine online. Cilj projekta je pojednostaviti proces rezervacije i pomoći lokalnim frizerskim salonima da privuku nove klijente.

### Funkcionalnosti

- Pretraga salona i usluga
- Filtriranje po kategorijama (muško/žensko šišanje, farbanje, tretmani, styling)
- Pregled popularnih salona sa ocjenama
- Rezervacija termina (u izradi)
- Registracija i prijava korisnika (UI gotov, backend u izradi)

## Tehnologije

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Fontovi**: DM Sans, Playfair Display (Google Fonts)
- **Ikone**: Lucide React

## Pokretanje projekta

### Preduvjeti

- Node.js 18+
- npm ili pnpm

### Instalacija

```bash
# Kloniraj repo
git clone https://github.com/stpauli98/TerminiFrizerskiSalon.git
cd TerminiFrizerskiSalon

# Instaliraj dependencies
npm install

# Pokreni dev server
npm run dev
```

Aplikacija će biti dostupna na `http://localhost:3000`

### Build za produkciju

```bash
npm run build
npm start
```

## Struktura projekta

```
app/
├── page.tsx          # Početna stranica
├── login/            # Stranica za prijavu
├── register/         # Stranica za registraciju
├── layout.tsx        # Root layout
└── globals.css       # Globalni stilovi

components/
└── home/
    ├── Header.tsx        # Navigacija
    ├── HeroSection.tsx   # Hero sekcija
    ├── CategoryFilter.tsx # Filter kategorija
    ├── ServiceCard.tsx   # Kartica usluge
    ├── Sidebar.tsx       # Sidebar sa top salonima
    ├── Footer.tsx        # Footer
    └── index.ts          # Exports

public/
├── LogoAplikacije.jpg    # Logo
├── HeroSection.jpg       # Hero slika
└── ...                   # Ostale slike
```

## Dizajn sistem

Aplikacija koristi custom paletu boja:

| Boja | RGB | Upotreba |
|------|-----|----------|
| Tamna siva | 61, 73, 85 | Primarni tekst, dugmadi |
| Srednja siva | 144, 158, 167 | Sekundarni tekst |
| Svijetla siva | 217, 226, 231 | Pozadina |
| Akcent (bakrena) | 180, 120, 90 | CTA dugmadi, istaknuti elementi |

## Planirane funkcionalnosti

- [ ] Integracija sa backendom (Supabase)
- [ ] Autentifikacija korisnika
- [ ] Sistem rezervacija sa kalendarom
- [ ] Notifikacije (email/SMS)
- [ ] Admin panel za vlasnike salona
- [ ] Sistem ocjenjivanja i recenzija

## Autor

Nikola Milosevic | Next Pixel
