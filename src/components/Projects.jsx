import { useEffect, useRef, useState } from 'react'
import { projects, ecommerce, personalInfo } from '../data'
import './Projects.css'

const filters = ['All', 'Python', 'Machine Learning', 'Django', 'Tool']

export default function Projects() {
  const [active, setActive] = useState('All')
  const gridRef = useRef(null)

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.tags.some(t => t.toLowerCase().includes(active.toLowerCase())))

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.project-card')
    if (!cards) return
    cards.forEach(c => { c.style.opacity = '0'; c.style.transform = 'translateY(16px)' })
    const t = setTimeout(() => {
      cards.forEach((c, i) => {
        setTimeout(() => {
          c.style.opacity = '1'
          c.style.transform = 'translateY(0)'
        }, i * 60)
      })
    }, 50)
    return () => clearTimeout(t)
  }, [active])

  return (
    <section id="projects" className="section-wrap projects-section">
      <div className="section-label">Projects</div>
      <h2 className="section-title">Featured Work</h2>
      <p className="section-sub" style={{ marginBottom: '2rem' }}>
        Python tools, machine learning systems, and web applications.
      </p>

      <div className="filter-bar">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-btn ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects-grid" ref={gridRef}>
        {filtered.map((p, i) => (
          <div className="project-card card" key={i} style={{ transition: 'opacity 0.4s ease, transform 0.4s ease, border-color 0.25s, box-shadow 0.25s' }}>
            <div className="project-img">
              <span className="project-emoji">{p.emoji}</span>
            </div>
            <div className="project-body">
              <div className="project-cat">{p.category}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t, j) => <span className="tag tag-accent" key={j}>{t}</span>)}
              </div>
              <div className="project-links">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="project-link">
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* E-commerce Section */}
      <div className="ecommerce-section">
        <div className="section-label" style={{ marginTop: '4rem' }}>E-commerce</div>
        <h3 className="section-title" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>Amazon Services</h3>
        <div className="ecom-grid">
          {ecommerce.map((e, i) => (
            <div className="ecom-card card" key={i}>
              <div className="ecom-icon">{e.icon}</div>
              <div>
                <h4 className="ecom-title">{e.title}</h4>
                <p className="ecom-desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
