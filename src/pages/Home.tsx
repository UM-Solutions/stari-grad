import { Link } from 'react-router-dom'
import './Home.css'

const vipPerks = [
  'Privatan prostor do 30 gostiju',
  'Posvećeno osoblje za vaš sto',
  'Bez dodatne nadoplate',
  'Idealno za poslovne večere i proslave',
]

const aboutFeatures = [
  { num: '120', label: 'Mesta u sali' },
  { num: '30', label: 'VIP gornji nivo' },
  { num: '25+', label: 'Godina tradicije' },
  { num: '∞', label: 'Domaći ukus' },
]

export default function Home() {
  return (
    <div className="home-page">
      {/* HERO */}
      <div className="hero">
        <div className="hero-ornament" />
        <div className="hero-ornament" />
        <div className="hero-content">
          <div className="hero-divider" />
          <p className="hero-subtitle">Etno restoran · Petrovac na Mlavi</p>
          <h1>
            Stari Grad<br />
            <span>kod Vase</span>
          </h1>
          <p className="hero-location">Staro Vašarište 24 · od 1995.</p>
          <div className="hero-cta">
            <Link to="/meni" className="btn btn-primary">Pogledaj Meni</Link>
            <Link to="/proslave" className="btn btn-outline">Organizuj Proslavu</Link>
          </div>
        </div>
      </div>

      {/* ABOUT SNIPPET */}
      <section>
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <p className="section-label">Dobro došli</p>
              <h2 className="section-title">Ukus tradicije,<br />toplina doma</h2>
              <div className="section-line" />
              <p>
                Restoran „Stari Grad kod Vase" nalazi se u samom srcu Petrovca na Mlavi.
                Naš ambijent spaja toplinu drveta i cigle sa duhom starog srpskog gostoprimstva.
                Svako jelo pripremamo od svežih, domaćih namirnica — onako kako se nekada kuvalo.
              </p>
              <p>
                Sa kapacitetom od 120 mesta u glavnoj sali i posebnim gornjim nivoom za intimnija
                okupljanja do 30 gostiju, tu smo da vam pružimo nezaboravan doživljaj.
              </p>
              <div className="about-features">
                {aboutFeatures.map((f) => (
                  <div key={f.label} className="about-feature">
                    <div className="num">{f.num}</div>
                    <div className="label">{f.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-img">
              <div className="about-img-inner">
                <span className="img-placeholder">[ Fotografija enterijera ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP SECTION */}
      <section className="vip-section">
        <div className="container">
          <div className="vip-grid">
            <div>
              <div className="vip-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Ekskluzivno iskustvo
              </div>
              <h2 className="section-title">VIP Sto</h2>
              <div className="section-line" />
              <div className="vip-text">
                <p>
                  Za specijalne prilike i privatne večere nudimo poseban VIP prostor na gornjem
                  nivou restorana. Intimna atmosfera, pogled na ceo restoran i posvećena usluga
                  za vas i vaše goste.
                </p>
                <p>Bez dodatne nadoplate — samo uz prethodnu rezervaciju.</p>
              </div>
              <ul className="vip-perks">
                {vipPerks.map((perk) => (
                  <li key={perk}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
            <div className="vip-visual">
              <span className="img-placeholder">[ Fotografija VIP prostora ]</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
