import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaSass,
  FaFigma, FaReact, FaGitAlt, FaMobileAlt,
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import './Skills.scss'

const skills = [
  { icon: <FaHtml5 />,       name: 'HTML5 / CSS',        cls: 'skill-html'      },
  { icon: <FaSass />,        name: 'SCSS / Sass',         cls: 'skill-sass'      },
  { icon: <FaBootstrap />,   name: 'Bootstrap',           cls: 'skill-bootstrap' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS',        cls: 'skill-tailwind'  },
  { icon: <FaFigma />,       name: 'Figma to HTML',       cls: 'skill-figma'     },
  { icon: <FaReact />,       name: 'React',               cls: 'skill-react'     },
  { icon: <FaGitAlt />,      name: 'Git & Version Ctrl',  cls: 'skill-git'       },
  { icon: <FaMobileAlt />,   name: 'Responsive Design',   cls: 'skill-responsive'},
]

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <Container>
        <div className="skills-header">
          <span className="skills-header-line"></span>
          <h2 className="skills-title">My Skills</h2>
          <p className="skills-subtitle">Tools and technologies I work with</p>
        </div>

        <Row className="justify-content-center">
          {skills.map((skill, i) => (
            <Col key={i} xs={6} sm={4} md={3} lg="auto" className="skills-col">
              <div className={`skill-card ${skill.cls}`}>
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills
