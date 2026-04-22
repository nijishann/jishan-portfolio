import { personalInfo } from '../data'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-blob" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-badge animate-fadeUp">
          <span className="badge-dot" />
          Available for hire
        </div>

        <h1 className="hero-name animate-fadeUp" style={{ animationDelay: '0.1s' }}>
          {personalInfo.name.split(' ').map((word, i) => (
            <span key={i} className={i === 2 ? 'accent' : ''}>
              {word}{i < 2 ? ' ' : ''}
            </span>
          ))}
        </h1>

        <p className="hero-title animate-fadeUp" style={{ animationDelay: '0.2s' }}>
          {personalInfo.title}
          <br />
          <span className="hero-sub">{personalInfo.subtitle}</span>
        </p>

        <div className="hero-cta animate-fadeUp" style={{ animationDelay: '0.3s' }}>
          <a href="#projects" className="btn-primary">View Projects →</a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-outline">
            GitHub ↗
          </a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>

        <div className="hero-stats animate-fadeUp" style={{ animationDelay: '0.45s' }}>
          {personalInfo.stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll-hint animate-fadeIn" style={{ animationDelay: '1s' }}>
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
