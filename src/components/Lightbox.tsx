import { useEffect, useCallback } from 'react'
import type { GalleryItem } from '../data/siteData'
import './Lightbox.css'

interface LightboxProps {
  items: GalleryItem[]
  currentIndex: number
  onClose: () => void
  onNav: (dir: -1 | 1) => void
}

export default function Lightbox({ items, currentIndex, onClose, onNav }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNav(-1)
      if (e.key === 'ArrowRight') onNav(1)
    },
    [onClose, onNav]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  const item = items[currentIndex]
  const total = items.length

  return (
    <div className="lightbox open" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>&times;</button>

      <button
        className="lightbox-nav lightbox-prev"
        onClick={(e) => { e.stopPropagation(); onNav(-1) }}
        disabled={currentIndex <= 0}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-img-container">
          {item.image ? (
            <img src={item.image} alt={item.caption} className="lightbox-img" />
          ) : (
            <span className="lightbox-placeholder">[ Fotografija: {item.caption} ]</span>
          )}
        </div>
        <p className="lightbox-caption">{item.caption}</p>
      </div>

      <button
        className="lightbox-nav lightbox-next"
        onClick={(e) => { e.stopPropagation(); onNav(1) }}
        disabled={currentIndex >= total - 1}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="lightbox-counter">
        {currentIndex + 1} / {total}
      </div>
    </div>
  )
}
