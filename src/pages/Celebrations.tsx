import { celebrationPlans } from '../data/siteData'
import './Celebrations.css'

export default function Celebrations() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section>
        <div className="container">
          <div className="celebrations-intro">
            <p className="section-label">Proslave</p>
            <h2 className="section-title">Vaši najlepši trenuci</h2>
            <div className="section-line" style={{ margin: '12px auto 24px' }} />
            <p>
              Organizujemo svadbe, rođendane, krštenja, slave i poslovne događaje.
              Naš prostor prima do 120 gostiju, a gornji nivo je idealan za intimnije
              proslave do 30 osoba.
            </p>
          </div>

          <div className="plans-grid">
            {celebrationPlans.map((plan, i) => (
              <div key={i} className={`plan-card ${plan.featured ? 'featured' : ''}`}>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-type">{plan.type}</p>
                <div className="plan-price">
                  {plan.price}
                  <span className="plan-price-unit">{plan.unit}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
