import React from 'react'

function Resume() {
  return (
    <section className="section" data-section="resume">
        <h2 className="section__heading">
            <span className="section__icon" style={{ color: "var(--primary)", opacity: 0.7 }}>⎔</span> Resume
        </h2>
        <h3 className="resume__sub-heading">Experience</h3>
        <div className="timeline">
            <div className="timeline-item">
                <div className="timeline-dot timeline-dot--active"></div>
                <span className="timeline-item__period timeline-item__period--active">2023 — 2026</span>
                <h4 className="timeline-item__title">Frontend Developer <span className="timeline-item__company">· Relaxplzz Technologies Pvt Ltd</span>
                </h4>
                <p className="timeline-item__desc">Leading the design systems team, building scalable component libraries and establishing visual standards across 12 product lines.</p>
            </div>
            <div className="timeline-item">
                <div className="timeline-dot timeline-dot--inactive"></div>
                <span className="timeline-item__period timeline-item__period--inactive">2022 — 2023</span>
                <h4 className="timeline-item__title">Digital Interaction Advisor <span className="timeline-item__company">· 24/7 AI, Bangalore</span>
                </h4>
                <p className="timeline-item__desc">Engineered high-performance React applications for enterprise clients, focusing on data visualization and real-time dashboards.</p>
            </div>
           
        </div>
        <h3 className="resume__sub-heading">Education</h3>
        <div className="timeline">
            <div className="timeline-item">
                <div className="timeline-dot timeline-dot--inactive"></div>
                <span className="timeline-item__period timeline-item__period--inactive">2018 — 2022</span>
                <h4 className="timeline-item__title">B.E. Electronics and Communications Engineering <span className="timeline-item__company">· Anna University</span>
                </h4>
                <p className="timeline-item__desc">Built a strong foundation in engineering principles, problem-solving, and system design. Developed an interest in software development and user-focused applications.</p>
            </div>
        </div>
        <h3 className="resume__sub-heading">Skills</h3>
        <div className="skills-grid">
            <div>
                <div className="skill__header">
                    <span className="skill__name">React / Next.js</span>
                    <span className="skill__pct">95%</span>
                </div>
                <div className="skill__bar">
                    <div className="skill__fill" style={{ width: '95%' }} data-level="95"></div>
                </div>
            </div>
            <div>
                <div className="skill__header">
                    <span className="skill__name">TypeScript</span>
                    <span className="skill__pct">90%</span>
                </div>
                <div className="skill__bar">
                    <div className="skill__fill" style={{ width: '90%' }} data-level="90"></div>
                </div>
            </div>
            <div>
                <div className="skill__header">
                    <span className="skill__name">UI/UX Design</span>
                    <span className="skill__pct">92%</span>
                </div>
                <div className="skill__bar">
                    <div className="skill__fill" style={{ width: '92%' }} data-level="92"></div>
                </div>
            </div>
            <div>
                <div className="skill__header">
                    <span className="skill__name">Figma / Adobe Suite</span>
                    <span className="skill__pct">88%</span>
                </div>
                <div className="skill__bar">
                    <div className="skill__fill" style={{ width: '88%' }} data-level="88"></div>
                </div>
            </div>
            <div>
                <div className="skill__header">
                    <span className="skill__name">Three.js / WebGL</span>
                    <span className="skill__pct">75%</span>
                </div>
                <div className="skill__bar">
                    <div className="skill__fill" style={{ width: '75%' }} data-level="75"></div>
                </div>
            </div>
            <div>
                <div className="skill__header">
                    <span className="skill__name">Node.js</span>
                    <span className="skill__pct">82%</span>
                </div>
                <div className="skill__bar">
                    <div className="skill__fill" style={{ width: '82%' }} data-level="82"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Resume