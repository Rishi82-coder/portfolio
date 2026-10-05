import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaLinkedinIn, FaGithub, FaArrowRight, FaEnvelope, FaCode, FaPaintBrush, FaLayerGroup } from 'react-icons/fa'
import './Banner.scss'

const roles = ['Web Designer', 'UI Enthusiast', 'Creative Thinker', 'Visual Designer']

const Banner = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullText = roles[roleIndex]
    let timer

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.substring(0, prev.length - 1))
      }, 40)
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => fullText.substring(0, prev.length + 1))
      }, 80)
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, roleIndex])

  return (
    <section className="banner-section" id="home">
      {/* Background Decorative Mesh & Glowing Particles */}
      <div className="banner-grid-overlay"></div>
      <div className="banner-glow-orb banner-orb-1"></div>
      <div className="banner-glow-orb banner-orb-2"></div>

      <Container>
        <Row className="justify-content-center">
          <Col lg={9} md={11} sm={12} className="banner-col">

            {/* Top Status Badge */}
            <div className="banner-badge-wrapper">
              <div className="banner-badge">
                <span className="banner-badge-dot"></span>
                <span className="banner-badge-text">Available for Freelance & Full-time Roles</span>
              </div>
            </div>

            {/* Hero Main Heading */}
            <h1 className="banner-heading">
              Hi, I'm <span className="banner-name">Rishav Pangotra</span>
            </h1>

            {/* Dynamic Typewriter Subtitle */}
            <h2 className="banner-subtitle">
              Creative <span className="typewriter-text">{currentText}</span>
              <span className="typewriter-cursor">|</span>
            </h2>

            {/* Description */}
            <p className="banner-desc">
              Passionate Web Designer with 3+ years of experience in creating visually appealing,
              responsive, and user-centric websites. Skilled in HTML, CSS, React, JavaScript and Git.
              Proven track record in collaborating with design teams to bring creative concepts to life.
            </p>

            {/* Skill Pills Showcase */}
            <div className="banner-skills-pills">
              <span className="skill-pill"><FaPaintBrush className="pill-icon" /> Web Design</span>
              <span className="skill-pill"><FaLayerGroup className="pill-icon" /> UI Design</span>
              <span className="skill-pill"><FaCode className="pill-icon" /> HTML & CSS</span>
              <span className="skill-pill">Responsive Layouts</span>
              <span className="skill-pill">Figma Design</span>
            </div>

            {/* Action CTA Buttons */}
            <div className="banner-actions">
              <Button className="banner-btn-primary" href="#projects">
                <span>View My Work</span> <FaArrowRight className="btn-icon" />
              </Button>
              <Button className="banner-btn-secondary" href="#contact">
                <FaEnvelope className="btn-icon" /> <span>Contact Me</span>
              </Button>
            </div>

            {/* Key Statistics Bar */}
            <div className="banner-stats-box">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Trainees Mentored</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="banner-socials-wrapper">
              <div className="banner-socials">
                <a
                  href="https://www.linkedin.com/in/rishav-pangotra-20259522b/?isSelfProfile=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="banner-social"
                  aria-label="LinkedIn"
                  title="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/Rishi82-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="banner-social"
                  aria-label="GitHub"
                  title="GitHub Profile"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
