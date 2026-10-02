import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaCircle, FaQuoteLeft, FaChalkboardTeacher } from 'react-icons/fa'
import './Experience.scss'

const Experience = () => {
  return (
    <section className="exp-section" id="experience">
      <Container>
        <Row>
          {/* ===== LEFT: Work Experience ===== */}
          <Col lg={6} md={12} className="exp-col">
            <div className="exp-heading-block">
              <span className="exp-heading-line"></span>
              <h2 className="exp-heading">Experience</h2>
            </div>

            <div className="exp-timeline">
              {/* Job 1 - Toxsl (Current) */}
              <div className="exp-item">
                <div className="exp-dot"><FaCircle /></div>
                <div className="exp-item-body">
                  <div className="exp-item-top">
                    <h4 className="exp-role">Web Designer</h4>
                    <span className="exp-period">Aug 2023 – Present</span>
                  </div>
                  <p className="exp-company">Toxsl Technology</p>
                  <ul className="exp-points">
                    <li>Developed multi responsive websites for clients using modern frontend technologies.</li>
                    <li>Created reusable UI components using SCSS and improved code efficiency.</li>
                    <li>Collaborated with designers and backend developers to deliver complete projects.</li>
                    <li>Handled website maintenance, updates, and performance optimization.</li>
                  </ul>
                </div>
              </div>

              {/* Job 2 - Nivara */}
              <div className="exp-item">
                <div className="exp-dot"><FaCircle /></div>
                <div className="exp-item-body">
                  <div className="exp-item-top">
                    <h4 className="exp-role">Web Designer</h4>
                    <span className="exp-period">Oct 2022 – Jul 2023</span>
                  </div>
                  <p className="exp-company">Nivara Inc.</p>
                  <ul className="exp-points">
                    <li>Designed and developed responsive websites using HTML, CSS, Bootstrap and Tailwind CSS.</li>
                    <li>Converted Figma designs into pixel-perfect and mobile-friendly web pages.</li>
                    <li>Worked on UI improvements and enhanced user experience.</li>
                    <li>Fixed bugs and optimized website performance.</li>
                    <li>Ensured cross-browser compatibility across multi devices.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Training & Mentorship */}
            <div className="exp-training-block">
              <div className="exp-training-header">
                <FaChalkboardTeacher className="exp-training-ico" />
                <h3 className="exp-training-title">Training & Mentorship</h3>
              </div>
              <ul className="exp-points">
                <li>Conducted training sessions for 10+ trainees on HTML, CSS, SCSS, Bootstrap, and Tailwind CSS.</li>
                <li>Guided trainees in responsive design, UI best practices, and clean coding standards.</li>
                <li>Mentored beginners in practical web development and helped them complete assigned projects.</li>
              </ul>
            </div>
          </Col>

          {/* ===== RIGHT: Education + Quote ===== */}
          <Col lg={6} md={12} className="edu-col">
            <div className="exp-heading-block">
              <span className="exp-heading-line"></span>
              <h2 className="exp-heading">Education</h2>
            </div>

            <div className="exp-timeline">
              {/* B.Tech */}
              <div className="exp-item">
                <div className="exp-dot"><FaCircle /></div>
                <div className="exp-item-body">
                  <div className="exp-item-top">
                    <h4 className="exp-role">B.Tech – Computer Science</h4>
                    <span className="exp-period">2018 – 2022</span>
                  </div>
                  <p className="exp-company">Sri Sai College</p>
                </div>
              </div>

              {/* 12th */}
              <div className="exp-item">
                <div className="exp-dot"><FaCircle /></div>
                <div className="exp-item-body">
                  <div className="exp-item-top">
                    <h4 className="exp-role">Intermediate (12th) – Non-Medical</h4>
                    <span className="exp-period">2018</span>
                  </div>
                  <p className="exp-company">Arya Boys School</p>
                </div>
              </div>

              {/* 10th */}
              <div className="exp-item">
                <div className="exp-dot"><FaCircle /></div>
                <div className="exp-item-body">
                  <div className="exp-item-top">
                    <h4 className="exp-role">High School (10th)</h4>
                    <span className="exp-period">2016</span>
                  </div>
                  <p className="exp-company">Mahavir Public School</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Experience
