import { useState, useMemo } from 'react'
import { galleryItems } from '../data/siteData'
import Lightbox from '../components/Lightbox'
import './Gallery.css'

interface GalleryFilter {
  id: string
  label: string
}

const filters: GalleryFilter[] = [
  { id: 'all', label: 'Sve' },
  { id: 'ambijent', label: 'Ambijent' },
  { id: 'hrana', label: 'Hrana' },
  { id: 'proslave', label: 'Proslave' },
  { id: 'smestaj', label: 'Smeštaj' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return galleryItems
    return galleryItems.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  const openLightbox = (idx: number) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)
  const navLightbox = (dir: -1 | 1) => {
    setLightboxIndex((prev) => {
      if (prev === null) return null
      const next = prev + dir
      if (next < 0 || next >= filtered.length) return prev
      return next
    })
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      <section>
        <div className="container">
          <div className="gallery-header">
            <p className="section-label">Fotografije</p>
            <h2 className="section-title">Galerija</h2>
            <div className="gallery-header-line" />
            <div className="gallery-filters">
              {filters.map((f) => (
                <button
                  key={f.id}
                  className={`gallery-filter-btn ${activeFilter === f.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <div
                key={`${item.category}-${item.caption}`}
                className="gallery-item"
                onClick={() => openLightbox(i)}
              >
                {item.image ? (
                  <img src={item.image} alt={item.caption} />
                ) : (
                  <div
                    className="gallery-item-placeholder"
                    style={{ background: item.bg }}
                  >
                    <span>[ {item.caption} ]</span>
                  </div>
                )}
                <div className="gallery-overlay">
                  <span>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNav={navLightbox}
        />
      )}
    </div>
  )
}
