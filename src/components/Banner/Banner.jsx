import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import './Banner.scss'

const Banner = () => {
  return (
    <section className="banner-section" id="home">
      <div className="banner-blob-top"></div>
      <div className="banner-blob-bottom"></div>

      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12} className="banner-col">
            <div className="banner-badge">
              <span className="banner-badge-dot"></span>
              Web Designer
            </div>

            <h1 className="banner-heading">
              Hi, I'm <span className="banner-name">Rishav Pangotra</span>
            </h1>

            <h2 className="banner-subtitle">
              Web Designer | UI Enthusiast | Creative Thinker
            </h2>

            <p className="banner-desc">
              Passionate Web Designer with 3+ years of experience in creating visually appealing,
              responsive, and user-centric websites. Skilled in HTML, CSS, React, JavaScript and Git.
              Proven track record in collaborating with design teams to bring creative concepts to life.
            </p>

            <div className="banner-actions">
              <Button className="banner-btn-primary" href="#projects">
                View My Work →
              </Button>
              <Button className="banner-btn-secondary" href="#contact">
                Contact Me
              </Button>
            </div>

            <div className="banner-socials">
              <a
                href="https://www.linkedin.com/in/rishav-pangotra-20259522b/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                className="banner-social"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/Rishi82-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="banner-social"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
