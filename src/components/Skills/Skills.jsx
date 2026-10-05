import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaSass,
  FaFigma, FaReact, FaGitAlt, FaMobileAlt, FaJs,
} from 'react-icons/fa'
import { SiTailwindcss, SiPhp, SiPython } from 'react-icons/si'
import { HiLightningBolt } from 'react-icons/hi'
import './Skills.scss'

const CATEGORIES = ['All', 'Design Tools', 'Styling', 'Worked With']

const skills = [
  // Design Tools
  { icon: <FaHtml5 />,       name: 'HTML5',            level: 95, cat: 'Design Tools', cls: 'skill-html',       desc: 'Semantic, clean markup' },
  { icon: <FaCss3Alt />,     name: 'CSS3',             level: 93, cat: 'Design Tools', cls: 'skill-css',        desc: 'Layouts, animations, effects' },
  { icon: <FaSass />,        name: 'SCSS / Sass',      level: 90, cat: 'Styling',      cls: 'skill-sass',       desc: 'Variables, mixins, nesting' },
  { icon: <FaBootstrap />,   name: 'Bootstrap',        level: 90, cat: 'Styling',      cls: 'skill-bootstrap',  desc: 'Responsive grid & components' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS',     level: 82, cat: 'Styling',      cls: 'skill-tailwind',   desc: 'Utility-first styling' },
  { icon: <FaFigma />,       name: 'Figma',            level: 65, cat: 'Design Tools', cls: 'skill-figma',      desc: 'Basic wireframes & layouts' },
  { icon: <FaMobileAlt />,   name: 'Responsive Design',level: 93, cat: 'Design Tools', cls: 'skill-responsive', desc: 'Mobile-first approach' },
  { icon: <FaGitAlt />,      name: 'Git & GitHub',     level: 75, cat: 'Design Tools', cls: 'skill-git',        desc: 'Version control basics' },
  // Worked With (design templates / theming)
  { icon: <FaReact />,       name: 'React',            level: 60, cat: 'Worked With',  cls: 'skill-react',      desc: 'Component-based UI theming' },
  { icon: <FaJs />,          name: 'JavaScript',       level: 65, cat: 'Worked With',  cls: 'skill-js',         desc: 'Basic scripting & DOM' },
  { icon: <SiPhp />,         name: 'PHP / Yii',        level: 55, cat: 'Worked With',  cls: 'skill-php',        desc: 'Worked on design layer in Yii' },
  { icon: <SiPython />,      name: 'Python',           level: 50, cat: 'Worked With',  cls: 'skill-python',     desc: 'Basic exposure in projects' },
]

const Skills = () => {
  const [active, setActive] = useState('All')
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef(null)

  const filtered = active === 'All' ? skills : skills.filter(s => s.cat === active)

  // Trigger bar animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Reset animation when filter changes
  useEffect(() => {
    setAnimated(false)
    const t = setTimeout(() => setAnimated(true), 80)
    return () => clearTimeout(t)
  }, [active])

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      {/* background decoration */}
      <div className="skills-bg-orb sk-orb-1" />
      <div className="skills-bg-orb sk-orb-2" />

      <Container>
        {/* ===== TOP HEADER ===== */}
        <div className="skills-top">
          <div className="skills-heading-block">
            <h2 className="sk-title">My <span>Skills</span></h2>
            <p className="sk-subtitle">
              Tools and technologies I use to design beautiful, responsive,
              and pixel-perfect websites as a Web Designer.
            </p>
          </div>
        </div>

        {/* ===== CATEGORY TABS ===== */}
        <div className="sk-tabs">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`sk-tab ${active === cat ? 'sk-tab--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
              {active === cat && <span className="tab-dot" />}
            </button>
          ))}
        </div>

        {/* ===== SKILLS GRID ===== */}
        <Row className="skills-grid g-3">
          {filtered.map((skill, i) => (
            <Col key={`${active}-${i}`} xl={3} lg={4} md={6} sm={6} xs={12}>
              <div className={`sk-card ${skill.cls}`} style={{ animationDelay: `${i * 0.06}s` }}>
                {/* Icon + label */}
                <div className="sk-card-top">
                  <div className="sk-icon-wrap">
                    <span className="sk-icon">{skill.icon}</span>
                  </div>
                  <div className="sk-card-info">
                    <span className="sk-name">{skill.name}</span>
                    <span className="sk-desc">{skill.desc}</span>
                  </div>
                  <span className="sk-percent">{skill.level}%</span>
                </div>

                {/* Progress bar */}
                <div className="sk-bar-track">
                  <div
                    className="sk-bar-fill"
                    style={{ width: animated ? `${skill.level}%` : '0%' }}
                  />
                </div>

                {/* Category pill */}
                <span className="sk-cat-pill">{skill.cat}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills
