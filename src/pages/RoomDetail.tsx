import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { rooms } from '../data/siteData'
import './RoomDetail.css'

export default function RoomDetail() {
  const { slug } = useParams<{ slug: string }>()
  const room = rooms.find((r) => r.slug === slug)
  const [activeImg, setActiveImg] = useState(0)

  if (!room) return <Navigate to="/smestaj" replace />

  return (
    <div className="room-detail-page" style={{ paddingTop: '80px' }}>

      {/* ── BREADCRUMB ── */}
      <div className="rd-breadcrumb">
        <div className="container">
          <Link to="/smestaj" className="rd-back-link">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Smeštaj
          </Link>
          <span className="rd-bc-sep">/</span>
          <span className="rd-bc-current">{room.name}</span>
        </div>
      </div>

      {/* ── HERO GALLERY ── */}
      <section className="rd-gallery-section">
        <div className="container">
          <div className="rd-gallery">

            {/* Glavna slika */}
            <div className="rd-main-img">
              <div
                className="rd-img-placeholder"
                style={{ background: room.images[activeImg]?.bg }}
              >
                <span className="rd-img-label">
                  [ {room.images[activeImg]?.caption} ]
                </span>
              </div>
              {/* Badge sobe */}
              <div className="rd-img-badge">{room.name}</div>
            </div>

            {/* Thumbnails */}
            <div className="rd-thumbs">
              {room.images.map((img, i) => (
                <button
                  key={i}
                  className={`rd-thumb ${activeImg === i ? 'active' : ''}`}
                  onClick={() => setActiveImg(i)}
                  aria-label={img.caption}
                >
                  <div
                    className="rd-thumb-inner"
                    style={{ background: img.bg }}
                  />
                  <span>{img.caption}</span>
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="rd-content-section">
        <div className="container">
          <div className="rd-layout">

            {/* Leva kolona — info */}
            <div className="rd-main-col">

              <div className="rd-header">
                <p className="section-label">Prenoćište</p>
                <h1 className="rd-title">{room.name}</h1>
                <div className="rd-meta">
                  <span className="rd-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    {room.guests}
                  </span>
                  <span className="rd-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                      <path d="M2 4v16h20V4H2zm0 8h20" />
                    </svg>
                    {room.bed}
                  </span>
                  <span className="rd-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                    {room.size}
                  </span>
                </div>
              </div>

              <div className="rd-divider" />

              <p className="rd-description">{room.description}</p>

              <div className="rd-divider" />

              <h3 className="rd-section-heading">Šta je uključeno</h3>
              <div className="rd-amenities">
                {room.includes.map((item) => (
                  <div key={item} className="rd-amenity">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" stroke="currentColor">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <div className="rd-divider" />

              <h3 className="rd-section-heading">Posebnosti sobe</h3>
              <ul className="rd-highlights">
                {room.highlights.map((h) => (
                  <li key={h}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>

            </div>

            {/* Desna kolona — booking card */}
            <div className="rd-side-col">
              <div className="rd-booking-card">
                <div className="rd-price-display">
                  <span className="rd-price-amount">{room.price}</span>
                  <span className="rd-price-unit">/ noć</span>
                </div>
                <p className="rd-price-note">Doručak uključen · 2 osobe</p>

                <div className="rd-booking-divider" />

                <div className="rd-booking-details">
                  {[
                    { label: 'Tip sobe', value: room.name },
                    { label: 'Kapacitet', value: room.guests },
                    { label: 'Krevet', value: room.bed },
                    { label: 'Veličina', value: room.size },
                  ].map(({ label, value }) => (
                    <div key={label} className="rd-booking-row">
                      <span className="rd-booking-label">{label}</span>
                      <span className="rd-booking-value">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="rd-booking-divider" />

                <a href="tel:+38112326999" className="btn btn-primary rd-cta-btn">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" width="16" height="16">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Pozovite za rezervaciju
                </a>

                <a href="tel:+381644029212" className="btn btn-outline rd-cta-btn">
                  064 / 402 - 9212
                </a>

                <p className="rd-booking-note">
                  Rezervacija se vrši isključivo telefonskim putem.
                  Molimo vas da pozovete najmanje 24h unapred.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OTHER ROOMS ── */}
      <section className="rd-other-section">
        <div className="container">
          <p className="section-label">Pogledajte i</p>
          <h2 className="rd-other-title">Ostale sobe</h2>
          <div className="rd-other-grid">
            {rooms
              .filter((r) => r.slug !== room.slug)
              .map((r) => (
                <Link key={r.slug} to={`/smestaj/${r.slug}`} className="rd-other-card">
                  <div
                    className="rd-other-img"
                    style={{ background: r.images[0]?.bg }}
                  >
                    <span>[ {r.images[0]?.caption} ]</span>
                  </div>
                  <div className="rd-other-info">
                    <h4>{r.name}</h4>
                    <p>{r.size} · {r.bed}</p>
                    <span className="rd-other-price">{r.price} <em>/ noć</em></span>
                  </div>
                  <div className="rd-other-arrow">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

    </div>
  )
}
