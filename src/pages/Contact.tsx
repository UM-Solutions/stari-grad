import type { ReactNode } from 'react'
import './Contact.css'

interface ContactItem {
  icon: ReactNode
  content: ReactNode
}

const contactItems: ContactItem[] = [
  {
    icon: (
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    ),
    content: <a href="tel:+38112326999">+381 12 326 999</a>,
  },
  {
    icon: (
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    ),
    content: <a href="tel:+381644029212">064 / 402 - 9212</a>,
  },
  {
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    content: <span>Staro vašarište 24, 12300 Petrovac na Mlavi</span>,
  },
  {
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
    content: (
      <a href="https://instagram.com/starigradkodvase" target="_blank" rel="noreferrer">
        @starigradkodvase
      </a>
    ),
  },
  {
    icon: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    ),
    content: (
      <a href="https://facebook.com/StariGradKodVase" target="_blank" rel="noreferrer">
        Stari Grad kod Vase
      </a>
    ),
  },
]

export default function Contact() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section>
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <p className="section-label">Kontakt</p>
          <h2 className="section-title">Javite nam se</h2>
          <div className="section-line" style={{ margin: '12px auto 32px' }} />

          <div className="contact-info-col">
            {contactItems.map((item, i) => (
              <div key={i} className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
                  {item.icon}
                </svg>
                {item.content}
              </div>
            ))}
          </div>

          <div className="map-container">
            <iframe
              title="Lokacija restorana"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2840.5!2d21.4175!3d44.3700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDIyJzEyLjAiTiAyMcKwMjUnMDMuMCJF!5e0!3m2!1ssr!2srs!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(40%) contrast(1.1) brightness(.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
