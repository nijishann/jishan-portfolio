import { personalInfo } from '../data'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="#hero" className="footer-logo">NIJ.</a>
        <p className="footer-text">
          © {new Date().getFullYear()} {personalInfo.name}. Built with React + Vite. Hosted on Vercel.
        </p>
        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
