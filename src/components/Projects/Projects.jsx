import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaArrowUpRightFromSquare, FaTag } from 'react-icons/fa6'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import { projects } from './allProjectsData'
import './Projects.scss'

const CATEGORIES = ['All', 'AI & Apps', 'E-Commerce', 'Health & Wellness', 'Events & Finance']

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => {
      if (activeCategory === 'AI & Apps') return p.category.includes('AI')
      if (activeCategory === 'E-Commerce') return p.category.includes('Commerce') || p.category.includes('Fashion')
      if (activeCategory === 'Health & Wellness') return p.category.includes('Health') || p.category.includes('Food')
      if (activeCategory === 'Events & Finance') return p.category.includes('Auctions') || p.category.includes('Finance') || p.category.includes('Events')
      return true
    })

  return (
    <section className="projects-section" id="projects">
      {/* Background Blobs */}
      <div className="proj-bg-blob pb1" />
      <div className="proj-bg-blob pb2" />

      <Container className="position-relative" style={{ zIndex: 2 }}>

        {/* ---- SECTION HEADER ---- */}
        <div className="proj-header-block">
          <div className="ph-left">
            <h2 className="proj-main-title">
              Featured <span>Projects</span>
            </h2>
            <p className="proj-main-sub">
              Explore my latest web design projects, Figma translations, e-commerce stores, and responsive web applications.
            </p>
          </div>
        </div>

        {/* ---- CATEGORY FILTER TABS ---- */}
        <div className="proj-tabs-wrapper">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`proj-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ---- PROJECTS GRID ---- */}
        <Row className="g-4 proj-cards-grid">
          {filteredProjects.map((proj, index) => (
            <Col key={proj.id} lg={4} md={6} sm={12}>
              <div className="proj-card" style={{ animationDelay: `${index * 0.1}s` }}>

                {/* Image Frame */}
                <div className="pc-img-wrap">
                  <img src={proj.img} alt={proj.title} className="pc-img" />
                  <div className="pc-overlay" />

                  {/* Category Pill Tag - High Contrast & Crisp */}
                  <div className="pc-cat-badge">
                    <span>{proj.category}</span>
                  </div>

                  {/* Quick Action Button on Hover */}
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pc-hover-btn"
                    aria-label={`Visit ${proj.title}`}
                  >
                    <span>Visit Live Site</span>
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>

                {/* Card Body */}
                <div className="pc-body">
                  <h3 className="pc-title">{proj.title}</h3>
                  <p className="pc-desc">{proj.desc}</p>

                  {/* Tech Tags */}
                  <div className="pc-tags">
                    {proj.tags && proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="pc-tag">
                        <FaTag className="tag-icon" /> {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Footer Link */}
                  <div className="pc-footer">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pc-link-btn"
                    >
                      <span>Open Website</span>
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  )
}

export default Projects
