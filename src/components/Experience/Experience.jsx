import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
  FaBriefcase, FaGraduationCap, FaChalkboardTeacher,
  FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle, FaCode,
} from 'react-icons/fa'
import { HiSparkles, HiLightningBolt } from 'react-icons/hi'
import './Experience.scss'

// ---- Work Experience Data ----
const workExp = [
  {
    role: 'Web Designer',
    company: 'Toxsl Technology',
    period: 'Aug 2023 – Present',
    location: 'Chandigarh, India',
    type: 'Full-time',
    current: true,
    tags: ['React', 'SCSS', 'Bootstrap', 'Figma'],
    points: [
      'Developed multi responsive websites for clients using modern frontend technologies.',
      'Created reusable UI components using SCSS and improved code efficiency.',
      'Collaborated with designers and backend developers to deliver complete projects.',
      'Handled website maintenance, updates, and performance optimization.',
    ],
  },
  {
    role: 'Web Designer',
    company: 'Nivara Inc.',
    period: 'Oct 2022 – Jul 2023',
    location: 'Remote',
    type: 'Full-time',
    current: false,
    tags: ['HTML', 'CSS', 'Tailwind', 'Bootstrap'],
    points: [
      'Designed and developed responsive websites using HTML, CSS, Bootstrap and Tailwind CSS.',
      'Converted Figma designs into pixel-perfect and mobile-friendly web pages.',
      'Worked on UI improvements and enhanced user experience.',
      'Fixed bugs and optimized website performance.',
      'Ensured cross-browser compatibility across multi devices.',
    ],
  },
]

// ---- Education Data ----
const education = [
  {
    degree: 'B.Tech – Computer Science',
    institution: 'Sri Sai College',
    year: '2018 – 2022',
    icon: <FaGraduationCap />,
    grade: 'Graduate',
  },
  {
    degree: 'Intermediate (12th) – Non-Medical',
    institution: 'Arya Boys School',
    year: '2018',
    icon: <FaGraduationCap />,
    grade: 'Passed',
  },
  {
    degree: 'High School (10th)',
    institution: 'Mahavir Public School',
    year: '2016',
    icon: <FaGraduationCap />,
    grade: 'Passed',
  },
]

const Experience = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className={`exp-section ${visible ? 'is-visible' : ''}`} id="experience" ref={ref}>
      {/* BG decoration */}
      <div className="exp-bg-blob eb1" />
      <div className="exp-bg-blob eb2" />

      <Container>
        {/* ===== SECTION HEADER ===== */}
        <div className="exp-top-header">
          
          <h2 className="exp-main-title">Experience & <span>Education</span></h2>
          <p className="exp-main-sub">
            My professional background, skills gained, and academic foundation.
          </p>
        </div>

        <Row className="g-4">
          {/* ========== LEFT: Work Experience ========== */}
          <Col lg={7} md={12}>
            <div className="exp-block-label">
              <FaBriefcase /> Work Experience
            </div>

            <div className="exp-cards-list">
              {workExp.map((job, i) => (
                <div
                  key={i}
                  className={`exp-card ${job.current ? 'exp-card--current' : ''}`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {/* Top row */}
                  <div className="ec-top">
                    <div className="ec-icon-col">
                      <div className="ec-icon"><FaBriefcase /></div>
                      {i < workExp.length - 1 && <div className="ec-line" />}
                    </div>
                    <div className="ec-header">
                      <div className="ec-title-row">
                        <h3 className="ec-role">{job.role}</h3>
                        {job.current && (
                          <span className="ec-badge-current">
                            <span className="pulse-dot" /> Current
                          </span>
                        )}
                      </div>
                      <div className="ec-meta">
                        <span className="ec-company">{job.company}</span>
                        <span className="ec-sep">·</span>
                        <span className="ec-period">
                          <FaCalendarAlt /> {job.period}
                        </span>
                        <span className="ec-sep">·</span>
                        <span className="ec-location">
                          <FaMapMarkerAlt /> {job.location}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="ec-tags">
                        {job.tags.map(t => (
                          <span key={t} className="ec-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="ec-points">
                    {job.points.map((pt, j) => (
                      <div key={j} className="ec-point">
                        <FaCheckCircle className="ec-check" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Training card */}
            <div className="exp-training-card">
              <div className="etc-header">
                <div className="etc-icon"><FaChalkboardTeacher /></div>
                <div>
                  <h4 className="etc-title">Training & Mentorship</h4>
                  <p className="etc-sub">Sharing knowledge with the next generation</p>
                </div>
                <span className="etc-badge"><FaChalkboardTeacher /> 10+ Trainees</span>
              </div>
              <div className="ec-points">
                {[
                  'Conducted training sessions on HTML, CSS, SCSS, Bootstrap, and Tailwind CSS.',
                  'Guided trainees in responsive design, UI best practices, and clean coding standards.',
                  'Mentored beginners in practical web development and helped them complete projects.',
                ].map((pt, j) => (
                  <div key={j} className="ec-point">
                    <FaCheckCircle className="ec-check" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* ========== RIGHT: Education ========== */}
          <Col lg={5} md={12}>
            <div className="exp-block-label">
              <FaGraduationCap /> Education
            </div>

            <div className="edu-cards-list">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="edu-card"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="edu-year-col">
                    <span className="edu-year">{edu.year}</span>
                    {i < education.length - 1 && <div className="edu-vline" />}
                  </div>
                  <div className="edu-icon-col">
                    <div className="edu-icon">{edu.icon}</div>
                  </div>
                  <div className="edu-body">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-inst">{edu.institution}</p>
                    <span className="edu-grade-badge">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stat card */}
            <div className="exp-stat-card">
              <h4 className="esc-title">At a Glance</h4>
              <div className="esc-grid">
                {[
                  { icon: <FaBriefcase />, num: '3+',  label: 'Years Experience' },
                  { icon: <FaCode />,      num: '100%', label: 'Pixel Perfect UI' },
                  { icon: <FaCheckCircle />, num: '10+', label: 'Trainees Mentored' },
                  { icon: <FaGraduationCap />, num: 'B.Tech', label: 'Degree' },
                ].map((s, i) => (
                  <div key={i} className="esc-item">
                    <span className="esc-icon">{s.icon}</span>
                    <span className="esc-num">{s.num}</span>
                    <span className="esc-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Experience
