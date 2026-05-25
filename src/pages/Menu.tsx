import { useState } from 'react'
import type { MenuItemData } from '../data/siteData'
import { menuCategories, menuItems } from '../data/siteData'
import './Menu.css'

interface MenuItemProps {
  item: MenuItemData
}

function MenuItem({ item }: MenuItemProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`menu-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="menu-item-header">
        <span className="menu-item-name">{item.name}</span>
        <span className="menu-item-dots" />
        <span className="menu-item-price">{item.price}</span>
        <div className="menu-item-toggle">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" stroke="currentColor">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
      <div className="menu-item-desc">
        <p>{item.desc}</p>
      </div>
    </div>
  )
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('predjela')

  return (
    <div className="menu-page" style={{ paddingTop: '80px' }}>
      <div className="menu-page-header">
        <p className="section-label">Ponuda</p>
        <h2 className="section-title">Naš Meni</h2>
        <div className="menu-header-line" />
        <div className="menu-categories">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              className={`menu-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-items-container">
        <h3 className="menu-category-title">
          {menuCategories.find((c) => c.id === activeCategory)?.label}
        </h3>
        <div className="menu-category-line" />
        {(menuItems[activeCategory] ?? []).map((item, i) => (
          <MenuItem key={`${activeCategory}-${i}`} item={item} />
        ))}
      </div>
    </div>
  )
}
