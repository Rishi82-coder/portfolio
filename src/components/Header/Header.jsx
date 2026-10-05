import React, { useState, useEffect } from 'react'
import { Container, Nav, Navbar, Offcanvas, Button } from 'react-bootstrap'
import { FaDownload, FaBars } from 'react-icons/fa'
import './Header.scss'

const navLinks = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

const Header = () => {
  const [scrolled, setScrolled]         = useState(false)
  const [activeLink, setActiveLink]     = useState('home')
  const [showCanvas, setShowCanvas]     = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClose = () => setShowCanvas(false)
  const handleOpen  = () => setShowCanvas(true)

  const handleNavClick = (link, closeMobile = false) => {
    setActiveLink(link)
    if (closeMobile) handleClose()
  }

  return (
    <>
      {/* ════════════════════════════════
           MAIN NAVBAR
          ════════════════════════════════ */}
      <Navbar
        fixed="top"
        className={`header-navbar${scrolled ? ' header-scrolled' : ''}`}
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#home" className="header-brand">
            <span className="header-logo-box">R</span>
            <span className="header-logo-text">Rishav</span>
          </Navbar.Brand>

          {/* ── DESKTOP NAV (lg and above) ── */}
          <div className="header-desktop-wrap d-none d-lg-flex align-items-center flex-grow-1">
            <Nav className="mx-auto header-nav-menu">
              {navLinks.map((link) => (
                <Nav.Link
                  key={link}
                  href={`#${link}`}
                  className={`header-link${activeLink === link ? ' header-link-active' : ''}`}
                  onClick={() => handleNavClick(link)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
            <div className="header-cta">
              <a
                className="btn-outline-green"
                href="/images/Rishav-Resume.pdf"
                download="Rishav-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume <FaDownload className="header-btn-icon" />
              </a>
            </div>
          </div>

          {/* ── MOBILE TOGGLE (below lg only) ── */}
          <button
            className="header-mobile-toggle d-lg-none"
            onClick={handleOpen}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </Container>
      </Navbar>

      {/* ════════════════════════════════
           MOBILE OFFCANVAS (right side)
          ════════════════════════════════ */}
      <Offcanvas
        show={showCanvas}
        onHide={handleClose}
        placement="end"
        className="header-offcanvas"
      >
        {/* Offcanvas Header */}
        <Offcanvas.Header closeButton className="header-offcanvas-head">
          <Offcanvas.Title className="header-offcanvas-brand">
            <span className="header-logo-box">R</span>
            <span className="header-logo-text">Rishav</span>
          </Offcanvas.Title>
        </Offcanvas.Header>

        {/* Offcanvas Body */}
        <Offcanvas.Body className="header-offcanvas-body">
          <Nav className="header-mobile-nav">
            {navLinks.map((link) => (
              <Nav.Link
                key={link}
                href={`#${link}`}
                className={`header-mobile-link${activeLink === link ? ' header-mobile-link-active' : ''}`}
                onClick={() => handleNavClick(link, true)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Nav.Link>
            ))}
          </Nav>

          <div className="header-offcanvas-cta">
            <a
              className="btn-outline-green"
              href="/images/Rishav-Resume.pdf"
              download="Rishav-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
            >
              Download Resume <FaDownload className="header-btn-icon" />
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header
