import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
  FaMapMarkerAlt, FaEnvelope, FaPhone, FaBriefcase,
  FaArrowRight, FaCheckCircle, FaPalette, FaMobileAlt, FaLayerGroup
} from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import './About.scss'

const SKILL_TAGS = [
  'HTML5 & CSS3',
  'SCSS / SASS',
  'Bootstrap & Tailwind',
  'React UI Styling',
  'Figma to HTML',
  'Responsive Layouts'
]

const About = () => {
  return (
    <section className="about-section" id="about">
      {/* Ambient background blur blobs */}
      <div className="about-blob ab1" />
      <div className="about-blob ab2" />

      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="align-items-center g-5">

          {/* Left Column: Text & Information */}
          <Col lg={7} md={12} className="about-text-col">
            <div className="about-header-block">
              <h2 className="about-title">
                About <span>Me</span>
              </h2>
            </div>

            <p className="about-desc">
              Specialized in crafting pixel-perfect web interfaces using HTML, CSS, SCSS, Bootstrap, Tailwind CSS, and React UI styling. I bridge the gap between design concepts and functional frontend layouts — focusing on modern aesthetics, clean architecture, cross-browser compatibility, and smooth mobile responsiveness.
            </p>

            {/* Quick Stats / Info Cards Grid */}
            <div className="about-info-grid">
              <div className="aig-card">
                <div className="aig-icon"><FaBriefcase /></div>
                <div className="aig-content">
                  <span className="aig-value">3+ Years</span>
                  <span className="aig-label">Web Design Experience</span>
                </div>
              </div>

              <div className="aig-card">
                <div className="aig-icon"><FaMapMarkerAlt /></div>
                <div className="aig-content">
                  <span className="aig-value">Phase 5, Mohali</span>
                  <span className="aig-label">Available for Hybrid / Onsite</span>
                </div>
              </div>

              <div className="aig-card">
                <div className="aig-icon"><FaEnvelope /></div>
                <div className="aig-content">
                  <span className="aig-value">rishipangotra84@gmail.com</span>
                  <span className="aig-label">For Collaborations</span>
                </div>
              </div>

              <div className="aig-card">
                <div className="aig-icon"><FaPhone /></div>
                <div className="aig-content">
                  <span className="aig-value">826-414-6092</span>
                  <span className="aig-label">Call / WhatsApp</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="about-actions">
              <a href="#contact" className="btn-green">
                Let's Work Together <FaArrowRight />
              </a>
              <a href="#projects" className="btn-white">
                View My Projects
              </a>
            </div>
          </Col>

          {/* Right Column: Visual Image Showcase */}
          <Col lg={5} md={12} className="about-img-col">
            <div className="about-img-wrapper">
              
              {/* Outer decorative ring */}
              <div className="about-glow-ring" />

              {/* Main Image Frame */}
              <div className="about-img-frame">
                <img
                  src="/images/about-workspace.jpg"
                  alt="Rishav Pangotra Web Designer Workspace"
                  className="about-img"
                />
                <div className="about-img-overlay" />
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="about-float-badge float-badge-top">
                <div className="afb-icon-box"><FaPalette /></div>
                <div className="afb-text">
                  <span className="afb-title">Web Design</span>
                  <span className="afb-sub">Figma to Pixel-Perfect HTML</span>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="about-float-badge float-badge-bottom">
                <div className="afb-icon-box afb-icon-green"><FaMobileAlt /></div>
                <div className="afb-text">
                  <span className="afb-title">100% Responsive</span>
                  <span className="afb-sub">All Screen Sizes</span>
                </div>
              </div>

              {/* Floating Pillar Banner */}
              <div className="about-pillar-card">
                <div className="apc-item">
                  <FaLayerGroup />
                  <span>Design</span>
                </div>
                <div className="apc-dot">•</div>
                <div className="apc-item">
                  <FaPalette />
                  <span>Style</span>
                </div>
                <div className="apc-dot">•</div>
                <div className="apc-item">
                  <FaCheckCircle />
                  <span>Deploy</span>
                </div>
              </div>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default About
