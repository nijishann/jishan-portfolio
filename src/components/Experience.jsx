import { useEffect, useRef } from 'react'
import { experience } from '../data'
import './Experience.css'

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.timeline-item')
    if (!items) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('revealed'), i * 120)
          }
        })
      },
      { threshold: 0.15 }
    )
    items.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" className="section-wrap">
      <div className="section-label">Experience</div>
      <h2 className="section-title">My Journey</h2>

      <div className="timeline" ref={ref}>
        {experience.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-date">{item.date}</div>
              <h3 className="timeline-role">{item.role}</h3>
              <div className="timeline-company">{item.company}</div>
              <p className="timeline-desc">{item.desc}</p>
              <div className="timeline-tags">
                {item.tags.map((t, j) => (
                  <span className="tag tag-accent" key={j}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Academic Service Highlight */}
        <div className="academic-highlight">
          <div className="academic-icon">🎓</div>
          <div>
            <h4 className="academic-title">Academic Project Handler</h4>
            <p className="academic-desc">
              Are you a student who needs help building a project? I offer end-to-end academic project development — Python, Django, ML, web apps, and more. Let's build something great together!
            </p>
            <a href="#contact" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-flex' }}>
              Get Help →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
