// ===== TYPES =====

export interface MenuCategory {
  id: string
  label: string
}

export interface MenuItemData {
  name: string
  price: string
  desc: string
}

export interface GalleryItem {
  caption: string
  category: string
  bg: string
  image?: string
}

export interface CelebrationPlan {
  name: string
  type: string
  price: string
  unit: string
  featured: boolean
  features: string[]
}

export interface RoomImage {
  caption: string
  bg: string
}

export interface Room {
  slug: string
  name: string
  guests: string
  bed: string
  price: string
  size: string
  includes: string[]
  description: string
  highlights: string[]
  images: RoomImage[]
}

// ===== DATA =====

export const menuCategories: MenuCategory[] = [
  { id: 'predjela', label: 'Predjela' },
  { id: 'glavna', label: 'Glavna Jela' },
  { id: 'rostilj', label: 'Roštilj' },
  { id: 'salate', label: 'Salate' },
  { id: 'deserti', label: 'Deserti' },
  { id: 'pica', label: 'Pića' },
]

export const menuItems: Record<string, MenuItemData[]> = {
  predjela: [
    { name: 'Domaći kajmak', price: '350 RSD', desc: 'Domaći kajmak od kravljeg mleka, zrio minimum 30 dana. Služi se sa lepinjom iz furune.' },
    { name: 'Srpska zakuska', price: '550 RSD', desc: 'Domaći sir, kajmak, ajvar, proja i suvo meso — sve sa naših domaćinstava.' },
    { name: 'Dimljeni vrat', price: '420 RSD', desc: 'Tanko sečen dimljeni svinjski vrat, domaće sušenja.' },
    { name: 'Proja sa sirom', price: '280 RSD', desc: 'Domaća proja sa belim sirom, pečena u furuni.' },
  ],
  glavna: [
    { name: 'Karađorđeva šnicla', price: '850 RSD', desc: 'Svinjski file punjen kajmakom, pohovana i pečena do zlatne korice. Služi se sa tartarom i pomfritom.' },
    { name: 'Jagnjetina pod sačem', price: '1200 RSD', desc: 'Polako pečena jagnjetina sa krompirom ispod sača, minimalno 3 sata pripreme. Naručiti dan unapred.' },
    { name: 'Gulaš od divljači', price: '780 RSD', desc: 'Bogat gulaš sa mesom divljači, crvenom paprikom i domaćim rezancima.' },
    { name: 'Mućkalica', price: '720 RSD', desc: 'Mešano meso sa roštilja u sosu od paprike, paradajza i ljutih feferona. Služi se u glinenom sudu.' },
    { name: 'Pasta sa piletinom', price: '680 RSD', desc: 'Domaće rezance sa grilovana piletinom u kremastom sosu od pečuraka.' },
    { name: 'Lovačka šnicla', price: '750 RSD', desc: 'Svinjska šnicla u ljutom sosu sa pečurkama. Služi se sa domaćim pireom.' },
  ],
  rostilj: [
    { name: 'Ćevapi (10 kom)', price: '550 RSD', desc: 'Domaći ćevapi od mešanog mesa, sa lukom i kajmakom.' },
    { name: 'Pljeskavica', price: '500 RSD', desc: 'Klasična srpska pljeskavica od junećeg i svinjskog mesa, 200g.' },
    { name: 'Gurmanska pljeskavica', price: '650 RSD', desc: 'Punjena kajmakom i dimljenom slaninom, 250g. Sa prilogom po izboru.' },
    { name: 'Mešano meso (2 osobe)', price: '1600 RSD', desc: 'Ćevapi, pljeskavica, vešalica, kobasica, rebra — sa svim prilozima.' },
    { name: 'Vešalica', price: '480 RSD', desc: 'Svinjsko meso na žaru, marinirana u začinima.' },
  ],
  salate: [
    { name: 'Srpska salata', price: '250 RSD', desc: 'Paradajz, krastavac, luk, ljuta paprika.' },
    { name: 'Šopska salata', price: '300 RSD', desc: 'Paradajz, krastavac, paprika, luk i rendani beli sir.' },
    { name: 'Kiseli kupus', price: '200 RSD', desc: 'Domaći kiseli kupus sa začinskim biljem.' },
  ],
  deserti: [
    { name: 'Palačinke sa Nutellom', price: '350 RSD', desc: 'Dve tanke palačinke sa Nutellom, bananama i šlagom.' },
    { name: 'Tulumbe', price: '300 RSD', desc: 'Domaće tulumbe natopljene šećernim sirupom.' },
    { name: 'Voćna salata', price: '280 RSD', desc: 'Miks sezonskog voća sa šlagom.' },
  ],
  pica: [
    { name: 'Domaća rakija (šljivovica)', price: '200 RSD', desc: '0.05l — domaća šljivovica, destilisana u tradicionalnim kazanima.' },
    { name: 'Domaća rakija (kajsija)', price: '200 RSD', desc: '0.05l — voćna i blaga, od domaćih kajsija.' },
    { name: 'Domaće vino (crveno)', price: '350 RSD', desc: '0.2l — crveno vino iz lokalnih vinograda.' },
    { name: 'Pivo točeno', price: '250 RSD', desc: '0.5l — Jelen pivo, točeno.' },
    { name: 'Kafa domaća', price: '120 RSD', desc: 'Tradicionalna srpska kafa, kuvana u džezvi.' },
    { name: 'Ceđena limunada', price: '220 RSD', desc: 'Domaća limunada sa svežom nanom i medom.' },
  ],
}

export const galleryItems: GalleryItem[] = [
  { caption: 'Kamin u glavnoj sali', category: 'ambijent', bg: 'linear-gradient(135deg,#3d2a1a,#5a3d28)' },
  { caption: 'Glavna sala', category: 'ambijent', bg: 'linear-gradient(135deg,#2a1f16,#4a3525)' },
  { caption: 'Detalji enterijera', category: 'ambijent', bg: 'linear-gradient(135deg,#352818,#4d3822)' },
  { caption: 'Tradicionalna postava stola', category: 'ambijent', bg: 'linear-gradient(135deg,#3a2a1c,#523c28)' },
  { caption: 'Mešano meso sa roštilja', category: 'hrana', bg: 'linear-gradient(135deg,#2d2018,#4a3020)' },
  { caption: 'Domaće rezance u kremastom sosu', category: 'hrana', bg: 'linear-gradient(135deg,#322416,#4d3520)' },
  { caption: 'Karađorđeva šnicla', category: 'hrana', bg: 'linear-gradient(135deg,#2a1e14,#45321e)' },
  { caption: 'Gulaš od divljači', category: 'hrana', bg: 'linear-gradient(135deg,#33261a,#503a24)' },
  { caption: 'Rebarca sa žara', category: 'hrana', bg: 'linear-gradient(135deg,#2e2218,#483420)' },
  { caption: 'Svadbena dekoracija', category: 'proslave', bg: 'linear-gradient(135deg,#2c2018,#483628)' },
  { caption: 'Postavka za proslavu', category: 'proslave', bg: 'linear-gradient(135deg,#342618,#4e3a24)' },
  { caption: 'Detalji dekoracije', category: 'proslave', bg: 'linear-gradient(135deg,#30231a,#4b3822)' },
  { caption: 'Standardna soba', category: 'smestaj', bg: 'linear-gradient(135deg,#281e14,#42301e)' },
  { caption: 'Komfor soba', category: 'smestaj', bg: 'linear-gradient(135deg,#2e2118,#463422)' },
]

export const celebrationPlans: CelebrationPlan[] = [
  {
    name: 'Klasik',
    type: 'Rođendani · Okupljanja',
    price: '1500',
    unit: 'RSD / po osobi',
    featured: false,
    features: [
      'Predjelo + glavno jelo',
      'Salata i hleb',
      'Osnovni dekor stola',
      'Piće se naručuje posebno',
    ],
  },
  {
    name: 'Premium',
    type: 'Svadbe · Veridbe',
    price: '2500',
    unit: 'RSD / po osobi',
    featured: true,
    features: [
      'Srpska zakuska + 2 glavna jela',
      'Desert + torta',
      'Dekoracija prostora',
      'Piće uključeno (domaće)',
      'Muzika uživo (dogovor)',
    ],
  },
  {
    name: 'Daća',
    type: 'Pomeni · Daće',
    price: '1200',
    unit: 'RSD / po osobi',
    featured: false,
    features: [
      'Tradicionalni meni',
      'Posna ili mrsna trpeza',
      'Priprema prostora',
      'Organizacija po dogovoru',
    ],
  },
]

export const rooms: Room[] = [
  {
    slug: 'standardna-soba',
    name: 'Standardna Soba',
    guests: '2 osobe',
    bed: 'Bračni krevet',
    price: '30€',
    size: '18 m²',
    includes: ['Doručak', 'WiFi', 'Grejanje', 'TV'],
    description:
      'Udobna standardna soba smeštena u mirnom delu objekta, sa pogledom na dvorište restorana. Opremljena je svim neophodnim sadržajima za ugodan boravak — od klimatizacije i grejanja do besplatnog WiFi-ja. Doručak je uključen u cenu i priprema se svako jutro od svežih, domaćih namirnica.',
    highlights: [
      'Pogled na dvorište',
      'Klima i grejanje',
      'Doručak od domaćih namirnica',
      'Tiho okruženje',
      'Parking u krugu objekta',
    ],
    images: [
      { caption: 'Pogled na sobu', bg: 'linear-gradient(135deg,#2e1f14,#4a3220)' },
      { caption: 'Kupatilo', bg: 'linear-gradient(135deg,#1e1a16,#38281e)' },
      { caption: 'Detalji sobe', bg: 'linear-gradient(135deg,#2a2018,#40301e)' },
      { caption: 'Prozor sa pogledom', bg: 'linear-gradient(135deg,#251c14,#3e2c1c)' },
    ],
  },
  {
    slug: 'komfor-soba',
    name: 'Komfor Soba',
    guests: '2 osobe',
    bed: 'Bračni krevet',
    price: '30€',
    size: '24 m²',
    includes: ['Doručak', 'WiFi', 'Grejanje', 'TV', 'Mini bar'],
    description:
      'Prostranija komfor soba nudi sve što vam je potrebno za potpuno opuštanje. Pored standardnih sadržaja, ova soba raspolaže mini barom, extra mekim madracem i elegantno uređenim kupatilom sa kadom. Idealna za parove koji žele nešto posebno, ili za goste koji ostaju više noći.',
    highlights: [
      'Extra meki madrac',
      'Kada u kupatilu',
      'Mini bar',
      'Klima i grejanje',
      'Doručak od domaćih namirnica',
      'Parking u krugu objekta',
    ],
    images: [
      { caption: 'Pogled na sobu', bg: 'linear-gradient(135deg,#321e12,#523020)' },
      { caption: 'Kupatilo sa kadom', bg: 'linear-gradient(135deg,#221a14,#3c2a1e)' },
      { caption: 'Detalji enterijera', bg: 'linear-gradient(135deg,#2c2016,#463224)' },
      { caption: 'Mini bar', bg: 'linear-gradient(135deg,#261c12,#3e2c1a)' },
    ],
  },
]
