import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.scss'

const projects = [
  {
    img: '/images/cloths.png',
    category: 'Fashion & Lifestyle',
    title: 'Ladies Fashion Store',
    desc: 'An elegant e-commerce platform for ladies fashion & clothing. Browse the latest trends in dresses, outfits and accessories with a smooth shopping experience.',
    link: 'https://nomad.codebynish.com/',
    cls: 'proj-cloths',
  },
  {
    img: '/images/juice.png',
    category: 'Food & Beverage',
    title: 'Juice Café Website',
    desc: 'A vibrant and fresh website for a juice café. Features a colorful menu, online ordering experience and a healthy lifestyle brand identity.',
    link: 'https://juice.codebynish.com/',
    cls: 'proj-juice',
  },
  {
    img: '/images/weeding.png',
    category: 'Events & Rentals',
    title: 'Widoora – Event Supplies',
    desc: 'A professional platform for renting wedding and event supplies. Offers furniture, décor and essentials for weddings, parties and outdoor functions.',
    link: 'https://www.widoora.com/',
    cls: 'proj-weeding',
  },
  {
    img: '/images/taxsimba.png',
    category: 'Finance & Tax',
    title: 'TaxSimba – Self Tax Filing',
    desc: 'An intuitive online tax management platform allowing users to hassle-free file, calculate and manage their taxes self-service online.',
    link: 'https://taxsimba.co.uk/',
    cls: 'proj-taxsimba',
  },
]

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <Container>
        {/* Top row: heading + view all */}
        <div className="projects-top">
          <div className="projects-heading-block">
            <span className="projects-title-line"></span>
            <h2 className="projects-title">My Projects</h2>
            <p className="projects-subtitle">Some of the projects I've worked on</p>
          </div>
          {/* <a href="#" className="projects-view-all">
            View All Projects <FaArrowRight />
          </a> */}
        </div>

        {/* Project Cards */}
        <Row>
          {projects.map((proj, i) => (
            <Col key={i} lg={3} md={6} sm={12} className="proj-col">
              <div className={`proj-card ${proj.cls}`}>
                <div className="proj-img-box">
                  <img src={proj.img} alt={proj.title} className="proj-img" />
                  {proj.link !== '#' && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-overlay-link"
                      aria-label={`Open ${proj.title}`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
                <div className="proj-body">
                  <span className="proj-category">{proj.category}</span>
                  <h3 className="proj-name">{proj.title}</h3>
                  <p className="proj-desc">{proj.desc}</p>
                  <a
                    href={proj.link}
                    target={proj.link !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="proj-link"
                  >
                    View Project <FaArrowRight />
                  </a>
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
