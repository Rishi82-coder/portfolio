import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaLinkedinIn, FaGithub, FaArrowRight,
} from 'react-icons/fa'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer-root" id="contact">
      {/* Main CTA Area */}
      <div className="footer-main">
        <Container>
          <Row className="align-items-center">
            {/* CTA Text */}
            <Col lg={5} md={12} className="footer-cta-col">
              <h2 className="footer-cta-title">Let's Work Together</h2>
              <p className="footer-cta-desc">
                I'm currently open to new opportunities. If you have a project in mind or
                just want to say hello, feel free to reach out!
              </p>
            </Col>

            {/* Contact Info */}
            <Col lg={4} md={12} className="footer-info-col">
              <div className="footer-contacts">
                <div className="footer-contact-row">
                  <FaEnvelope className="footer-contact-ico" />
                  <span className="footer-contact-text">rishipangotra84@gmail.com</span>
                </div>
                <div className="footer-contact-row">
                  <FaPhone className="footer-contact-ico" />
                  <span className="footer-contact-text">826-414-6092</span>
                </div>
                <div className="footer-contact-row">
                  <FaMapMarkerAlt className="footer-contact-ico" />
                  <span className="footer-contact-text">Phase 5, Mohali</span>
                </div>
              </div>
            </Col>

            {/* Send Button */}
            <Col lg={3} md={12} className="footer-btn-col">
              <Button className="footer-send-btn" href="mailto:rishipangotra84@gmail.com">
                Send Message <FaArrowRight className="footer-send-ico" />
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bar">
        <Container>
          <div className="footer-bar-inner">
            <p className="footer-copy">© 2025 Rishav Pangotra. All rights reserved.</p>
            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/rishav-pangotra-20259522b/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/Rishi82-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
