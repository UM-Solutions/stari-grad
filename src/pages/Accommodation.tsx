import { Link } from 'react-router-dom'
import { rooms } from '../data/siteData'
import './Accommodation.css'

export default function Accommodation() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section>
        <div className="container">
          <p className="section-label">Prenoćište</p>
          <h2 className="section-title">Smeštaj</h2>
          <div className="section-line" />
          <p className="accommodation-intro">
            Pored restorana nudimo udobne sobe za prenoćište. Svaka soba je za dve osobe,
            a doručak je uključen u cenu.
          </p>
          <div className="accommodation-grid">
            {rooms.map((room, i) => (
              <Link
                key={room.slug}
                to={`/smestaj/${room.slug}`}
                className="room-card"
              >
                <div className="room-img">
                  <span className="img-placeholder">[ Fotografija sobe {i + 1} ]</span>
                  <div className="room-img-overlay">
                    <span>Pogledaj detalje</span>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="room-info">
                  <h3 className="room-name">{room.name}</h3>
                  <div className="room-details">
                    <span className="room-detail">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                      {room.guests}
                    </span>
                    <span className="room-detail">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                        <path d="M2 4v16h20V4H2zm0 8h20" />
                      </svg>
                      {room.bed}
                    </span>
                    <span className="room-detail">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                      {room.size}
                    </span>
                  </div>
                  <div className="room-includes">
                    {room.includes.map((inc, j) => (
                      <span key={j}>{inc}</span>
                    ))}
                  </div>
                  <div className="room-price-row">
                    <div className="room-price">
                      {room.price} <span>/ noć</span>
                    </div>
                    <span className="room-view-link">Detalji →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
