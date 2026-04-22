import { useEffect, useRef } from 'react'
import { personalInfo } from '../data'
import './About.css'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('revealed') },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section-wrap about-section">
      <div className="about-grid reveal-el" ref={ref}>
        <div className="about-img-wrap">
          <div className="about-img-card">
            <span className="avatar-initials">{personalInfo.shortName}</span>
          </div>
          <div className="about-float-tag">
            Python Dev<br />&amp; Amazon<br />Specialist
          </div>
        </div>

        <div className="about-text">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Passionate about code<br />&amp; commerce</h2>
          {personalInfo.about.map((para, i) => (
            <p key={i} className="about-para">{para}</p>
          ))}
          <div className="about-details">
            {personalInfo.details.map((d, i) => (
              <div className="detail-item" key={i}>
                <span className="detail-label">{d.label}</span>
                <span className="detail-val" style={d.accent ? { color: 'var(--accent)' } : {}}>
                  {d.value}
                </span>
              </div>
            ))}
          </div>
          <div className="about-cta">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-primary">
              GitHub ↗
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn-outline">
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
