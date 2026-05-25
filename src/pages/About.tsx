import './About.css'

interface InfoCard {
  title: string
  text: string
}

const infoCards: InfoCard[] = [
  { title: 'Kapacitet', text: '120 mesta u glavnoj sali, plus gornji nivo za intimne proslave do 30 gostiju.' },
  { title: 'Kuhinja', text: 'Tradicionalna srpska kuhinja sa svežim, lokalnim namirnicama. Sve se priprema istog dana.' },
  { title: 'Radno vreme', text: 'Ponedeljak — Nedelja\n08:00 — 23:00' },
  { title: 'Lokacija', text: 'Staro vašarište 24\n12300 Petrovac na Mlavi' },
]

export default function About() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section>
        <div className="container">
          <div className="about-page-content">
            <p className="section-label">O nama</p>
            <h2 className="section-title">Naša priča</h2>
            <div className="section-line" />
            <div className="about-story">
              Restoran „Stari Grad kod Vase" otvoren je sa jednom jednostavnom idejom — da sačuva
              ukus i duh tradicionalne srpske kuhinje. Smešten na uglu ulica Osmog oktobra i Staro
              vašarište u Petrovcu na Mlavi, naš restoran je brzo postao omiljeno mesto za porodična
              okupljanja, proslave i poslovne ručkove. Sa kaminom koji greje tokom zimskih meseci i
              prijatnom baštom za leto, trudimo se da svaki gost oseti kao kod kuće.
            </div>
            <div className="about-info-grid">
              {infoCards.map((card, i) => (
                <div key={i} className="about-info-card">
                  <h4>{card.title}</h4>
                  <p>
                    {card.text.split('\n').map((line, j, arr) => (
                      <span key={j}>
                        {line}
                        {j < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
