import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FaPaperPlane, FaPhone, FaArrowRight, FaArrowUp, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import './Footer.scss'

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
]

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-root" id="contact">

      {/* ============ CTA HERO ============ */}
      <div className="footer-cta-hero">
        <div className="fcta-orb fcta-orb1" />
        <div className="fcta-orb fcta-orb2" />
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <div className="fcta-inner">
            <div className="fcta-left">
              <h2 className="fcta-title">
                Let's Build Something<br />
                <span>Amazing Together</span>
              </h2>
              <p className="fcta-desc">
                I'm currently open to new opportunities — freelance, full-time, or collaboration.
                Have a project in mind? Let's make it happen.
              </p>
            </div>
            <div className="fcta-right">
              <a
                href="mailto:rishipangotra84@gmail.com"
                className="fcta-btn-gradient"
              >
                <FaPaperPlane /> Send Me a Message
                <span className="fcta-arrow"><FaArrowRight /></span>
              </a>
              <button
                className="btn-white"
              >
                <FaPhone /> 826-414-6092
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* ============ GIANT TYPOGRAPHY BRAND FOOTER (WEB DESIGNER.) ============ */}
      <div className="footer-big-brand">
        <Container fluid className="px-md-4">
          <h1 className="fbb-text">
            WEB DESIGNER
          </h1>
        </Container>
      </div>

      {/* ============ BOTTOM BAR (MATCHING IMAGE 1) ============ */}
      <div className="footer-bar">
        <Container fluid className="px-md-5">
          <div className="fbar-inner">

            {/* Copyright */}
            <p className="fbar-copy">
              © Copyright - <span>Rishav Pangotra</span> {new Date().getFullYear()}. All rights reserved
            </p>

            {/* Nav Links & Scroll to Top */}
            <div className="fbar-nav-wrap">
              <div className="fbar-socials">
                <a href="https://www.linkedin.com/in/rishav-pangotra-20259522b/" target="_blank" rel="noopener noreferrer" className="fbar-social-btn">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/Rishi82-coder" target="_blank" rel="noopener noreferrer" className="fbar-social-btn">
                  <FaGithub />
                </a>
              </div>
            </div>

          </div>
        </Container>
      </div>

    </footer>
  )
}

export default Footer
