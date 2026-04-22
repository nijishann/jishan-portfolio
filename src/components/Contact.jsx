import { useState } from 'react'
import { personalInfo } from '../data'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="section-wrap contact-section">
      <div className="section-label">Contact</div>
      <h2 className="section-title">Let's work together</h2>

      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-intro">
            Have a Python project, need Amazon help, or want someone to build your academic project?
            Feel free to reach out — I'd love to hear from you!
          </p>

          <div className="contact-cards">
            <a href={`mailto:${personalInfo.email}`} className="contact-card card">
              <span className="contact-card-icon">✉️</span>
              <div>
                <div className="contact-card-label">Email</div>
                <div className="contact-card-val">{personalInfo.email}</div>
              </div>
            </a>

            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact-card card">
              <span className="contact-card-icon">💻</span>
              <div>
                <div className="contact-card-label">GitHub</div>
                <div className="contact-card-val">github.com/nijishann</div>
              </div>
            </a>

            <div className="contact-card card">
              <span className="contact-card-icon">📍</span>
              <div>
                <div className="contact-card-label">Location</div>
                <div className="contact-card-val">Bangladesh</div>
              </div>
            </div>

            <div className="contact-card card" style={{ cursor: 'default' }}>
              <span className="contact-card-icon">🟢</span>
              <div>
                <div className="contact-card-label">Status</div>
                <div className="contact-card-val" style={{ color: 'var(--accent)' }}>Available Now</div>
              </div>
            </div>
          </div>

          <div className="services-list">
            <div className="services-title">I can help with:</div>
            {[
              '🐍 Python Development & Automation',
              '🤖 Machine Learning Projects',
              '📦 Amazon FBA/FBM Management',
              '📢 Digital Marketing (FB, Google, IG, TikTok)',
              '🎓 Academic Project Handling',
              '🕷️ Web Scraping & Email Finding',
            ].map((s, i) => (
              <div className="service-item" key={i}>{s}</div>
            ))}
          </div>
        </div>

        <div className="contact-form">
          <div className="form-row">
            <div className="form-field">
              <label>Your Name</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@email.com" />
            </div>
          </div>
          <div className="form-field">
            <label>Subject</label>
            <input name="subject" value={form.subject} onChange={handleChange} placeholder="Python project / Amazon help..." />
          </div>
          <div className="form-field">
            <label>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or requirement..." />
          </div>
          <button className={`btn-primary send-btn ${sent ? 'sent' : ''}`} onClick={handleSubmit}>
            {sent ? '✓ Message Sent!' : 'Send Message →'}
          </button>
        </div>
      </div>
    </section>
  )
}
