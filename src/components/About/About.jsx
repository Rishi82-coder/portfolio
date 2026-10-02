import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBriefcase } from 'react-icons/fa'
import './About.scss'

const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="align-items-center">
          {/* Left: Text Content */}
          <Col lg={6} md={12} className="about-text-col">
            <div className="about-title-block">
              <span className="about-title-line"></span>
              <h2 className="about-title">About Me</h2>
            </div>

            <p className="about-desc">
              Passionate Web Designer with 3+ years of experience in creating visually appealing,
              responsive, and user-centric websites. Skilled in HTML, CSS, React, Basic of JavaScript
              and Git. Proven track record in collaborating with design teams to bring creative concepts
              to life while ensuring high-quality user experiences and seamless functionality across
              various devices.
            </p>

            <div className="about-info-list">
              <div className="about-info-item">
                <div className="about-info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="about-info-text">
                  <span className="about-info-value">Phase 5, Mohali</span>
                  <span className="about-info-label">Available for Hybrid / Onsite</span>
                </div>
              </div>

              <div className="about-info-item">
                <div className="about-info-icon">
                  <FaEnvelope />
                </div>
                <div className="about-info-text">
                  <span className="about-info-value">rishipangotra84@gmail.com</span>
                  <span className="about-info-label">For collaborations / work</span>
                </div>
              </div>

              <div className="about-info-item">
                <div className="about-info-icon">
                  <FaPhone />
                </div>
                <div className="about-info-text">
                  <span className="about-info-value">826-414-6092</span>
                  <span className="about-info-label">Call / WhatsApp</span>
                </div>
              </div>

              <div className="about-info-item">
                <div className="about-info-icon">
                  <FaBriefcase />
                </div>
                <div className="about-info-text">
                  <span className="about-info-value">3+ Years Experience</span>
                  <span className="about-info-label">Web Design & Frontend Development</span>
                </div>
              </div>
            </div>

            <Button className="about-more-btn" href="#contact">
              More About Me →
            </Button>
          </Col>

          {/* Right: Image + Design Card */}
          <Col lg={6} md={12} className="about-img-col">
            <div className="about-img-wrapper">
              <div className="about-img-frame">
                <img
                  src="/images/about-workspace.jpg"
                  alt="Professional workspace"
                  className="about-img"
                />
              </div>
              <div className="about-design-card">
                <span className="design-word">Design</span>
                <span className="design-word">Build</span>
                <span className="design-word">Grow</span>
                <div className="design-card-line"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
