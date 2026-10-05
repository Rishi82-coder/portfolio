import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaArrowRight, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { projects } from '../../components/Projects/allProjectsData'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './AllProjects.scss'

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />

      <div className="all-projects-page">
        {/* ---- Hero Header ---- */}
        <div className="all-projects-hero">
          <Container>
          
            <div className="hero-content">
              <span className="hero-badge">Portfolio</span>
              <h1 className="hero-title">All Projects</h1>
              <p className="hero-subtitle">
                A complete showcase of every project I've built — from AI-powered platforms to
                e-commerce stores, auctions, and financial tools.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-num">{projects.length}+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <span className="stat-num">5+</span>
                  <span className="stat-label">Industries</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <span className="stat-num">100%</span>
                  <span className="stat-label">Live Sites</span>
                </div>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="hero-blob blob-1" />
            <div className="hero-blob blob-2" />
          </Container>
        </div>

        {/* ---- Projects Grid ---- */}
        <div className="all-projects-grid-section">
          <Container>
            <Row className="g-4">
              {projects.map((proj, i) => (
                <Col key={i} lg={4} md={6} sm={12}>
                  <div className={`ap-card ${proj.cls}`} style={{ animationDelay: `${i * 0.08}s` }}>
                    {/* Image */}
                    <div className="ap-img-box">
                      <img src={proj.img} alt={proj.title} className="ap-img" />
                      <div className="ap-img-overlay">
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ap-open-btn"
                          aria-label={`Open ${proj.title}`}
                        >
                          <FaExternalLinkAlt />
                          <span>Open Site</span>
                        </a>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="ap-body">
                      <span className="ap-category">{proj.category}</span>
                      <h2 className="ap-title">{proj.title}</h2>
                      <p className="ap-desc">{proj.desc}</p>
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ap-link"
                      >
                        View Project <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        {/* ---- Footer CTA ---- */}
        <div className="all-projects-cta">
          <Container className="text-center">
            <h3>Interested in working together?</h3>
            <p>I'm always open to exciting new projects and collaborations.</p>
            <Link to="/" className="cta-btn">
              Go Back Home <FaArrowRight />
            </Link>
          </Container>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default AllProjects
