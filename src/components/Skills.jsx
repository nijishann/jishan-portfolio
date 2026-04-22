import { useEffect, useRef } from 'react'
import { skills } from '../data'
import './Skills.css'

export default function Skills() {
  const gridRef = useRef(null)

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.skill-card')
    if (!cards) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('revealed'), i * 80)
          }
        })
      },
      { threshold: 0.1 }
    )
    cards.forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="section-wrap">
      <div className="skills-header">
        <div>
          <div className="section-label">Skills</div>
          <h2 className="section-title">What I work with</h2>
        </div>
        <p className="section-sub">
          A mix of Python development, machine learning, web scraping, and Amazon e-commerce expertise.
        </p>
      </div>

      <div className="skills-grid" ref={gridRef}>
        {skills.map((skill, i) => (
          <div className="skill-card card" key={i}>
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <div className="skill-tags">
              {skill.tags.map((tag, j) => (
                <span className="tag" key={j}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
