import "./App.css";

const skills = [
  "Java",
  "Spring Boot",
  "REST APIs",
  "Microservices",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "SQL",
  "MySQL",
  "MongoDB",
  "Kafka",
  "Git",
  "GitHub",
  "HTML5",
  "CSS3",
];

function App() {
  return (
    <div className="site">

      {/* Background */}
      <div className="background-grid"></div>
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="logo">
          ST<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=tsanjay2995@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="nav-contact"
        >
          Let's talk <span>↗</span>
        </a>
      </header>

      <main>

        {/* HERO */}
        <section className="hero" id="home">

          <div className="hero-content">

            <div className="availability">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="eyebrow">B.Tech Information Technology · 2026</p>

            <h1>
              Building software
              <br />
              <span>that solves</span>
              <br />
              real problems.
            </h1>

            <p className="hero-description">
              I'm Sanjay, a software developer focused on building reliable
              backend systems, web applications, and security-oriented
              solutions.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-button">
                Explore my work
                <span>↗</span>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tsanjay2995@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                Get in touch
              </a>
            </div>

          </div>

          {/* Developer Card */}
          <div className="developer-card">

            <div className="card-top">
              <span>developer.profile</span>

              <div className="window-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>

            <div className="code-content">
              <span className="line-number">01</span>
              <span className="code-keyword">const</span>{" "}
              <span className="code-variable">developer</span> = {"{"}

              <br />

              <span className="line-number">02</span>
              <span className="indent">name:</span>{" "}
              <span className="code-string">"Sanjay T"</span>,

              <br />

              <span className="line-number">03</span>
              <span className="indent">role:</span>{" "}
              <span className="code-string">
                "Software Engineer"
              </span>,

              <br />

              <span className="line-number">04</span>
              <span className="indent">focus:</span> [

              <br />

              <span className="line-number">05</span>
              <span className="indent-double code-string">
                "Backend"
              </span>,

              <br />

              <span className="line-number">06</span>
              <span className="indent-double code-string">
                "Full Stack"
              </span>,

              <br />

              <span className="line-number">07</span>
              <span className="indent-double code-string">
                "Security"
              </span>

              <br />

              <span className="line-number">08</span>
              <span className="indent">]</span>

              <br />

              <span className="line-number">09</span>
              {"}"};
            </div>

            <div className="card-footer">
              <span>● online</span>
              <span>India</span>
            </div>

          </div>

        </section>

        {/* MARQUEE */}
        <div className="tech-strip">
          <div className="tech-track">
            <span>JAVA</span>
            <b>✦</b>
            <span>SPRING BOOT</span>
            <b>✦</b>
            <span>REACT</span>
            <b>✦</b>
            <span>SQL</span>
            <b>✦</b>
            <span>MICROSERVICES</span>
            <b>✦</b>
            <span>SECURITY</span>
            <b>✦</b>
            <span>JAVA</span>
            <b>✦</b>
            <span>SPRING BOOT</span>
            <b>✦</b>
            <span>REACT</span>
            <b>✦</b>
            <span>SQL</span>
          </div>
        </div>

        {/* ABOUT */}
        <section className="section about-section" id="about">

          <div className="section-label">
            <span>01</span>
            About me
          </div>

          <div className="about-intro">

            <div className="about-heading">
              <p className="about-kicker">A little about me</p>

              <h2>
                I build systems
                <br />
                <span>with purpose.</span>
              </h2>
            </div>

            <div className="about-description">

              <p className="about-lead">
                I'm an Information Technology graduate passionate about
                software development, backend engineering, and building
                practical technology solutions.
              </p>

              <p>
                My development journey has taken me across backend systems,
                full-stack applications, databases, distributed systems,
                and security-focused software.
              </p>

              <p>
                I enjoy taking a problem from an idea and turning it into
                a working, maintainable solution.
              </p>

            </div>

          </div>

          <div className="about-cards">

            <div className="about-card about-card-large">

              <div className="about-card-number">01</div>

              <div className="about-card-content">

                <span>FOCUS</span>

                <h3>
                  Backend
                  <br />
                  Engineering
                </h3>

                <p>
                  Designing APIs, services, database-driven applications
                  and scalable backend systems.
                </p>

              </div>

              <div className="about-card-icon">
                &lt;/&gt;
              </div>

            </div>


            <div className="about-card">

              <div className="about-card-number">02</div>

              <div className="about-card-content">

                <span>INTEREST</span>

                <h3>
                  Security &
                  <br />
                  Systems
                </h3>

                <p>
                  Exploring security engineering, threat detection,
                  audit systems and reliable software.
                </p>

              </div>

              <div className="about-card-icon">
                ◈
              </div>

            </div>


            <div className="about-card">

              <div className="about-card-number">03</div>

              <div className="about-card-content">

                <span>APPROACH</span>

                <h3>
                  Learn.
                  <br />
                  Build. Improve.
                </h3>

                <p>
                  I believe the best way to learn technology is to
                  build real things with it.
                </p>

              </div>

              <div className="about-card-icon">
                ↗
              </div>

            </div>

          </div>


          <div className="about-stats">

            <div className="stat">

              <strong>2026</strong>

              <span>Graduate</span>

            </div>


            <div className="stat">

              <strong>B.Tech</strong>

              <span>Information Technology</span>

            </div>


            <div className="stat">

              <strong>Java</strong>

              <span>Primary language</span>

            </div>


            <div className="stat">

              <strong>Full Stack</strong>

              <span>Development focus</span>

            </div>

          </div>

        </section>

        {/* WORK */}
        <section className="section work-section" id="work">

          <div className="section-header">

            <div className="section-label">
              <span>02</span>
              Selected work
            </div>

            <p>
              A collection of systems and applications I've built while
              exploring backend engineering, full-stack development and security.
            </p>

          </div>


          <div className="project-showcase">


            {/* PROJECT 01 */}
            <article className="showcase-project featured-project">

              <div className="project-visual insight-visual">
                <img
                  src="/projects/insight-x.jpeg"
                  alt="INSIGHT-X Security Dashboard"
                />
              </div>


              <div className="showcase-info">

                <div className="project-meta">

                  <span className="project-number">01</span>

                  <span className="project-type">
                    Security · Backend · Microservices
                  </span>

                </div>


                <h3>INSIGHT-X</h3>


                <p className="showcase-description">
                  An intent-aware and trust-adaptive framework for insider
                  threat detection and response. The system combines continuous
                  trust scoring, behavioral analysis, graph relationships and
                  policy-driven response mechanisms.
                </p>


                <div className="showcase-bottom">

                  <div className="showcase-tags">
                    <span>Java 21</span>
                    <span>Spring Boot</span>
                    <span>Kafka</span>
                    <span>PostgreSQL</span>
                    <span>Neo4j</span>
                  </div>

                  <a
                    href="https://github.com/Tsanjay05/INSIGHT-X-Insider-Threat-Detection-Response-Framework"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </article>


            {/* PROJECT 02 */}
            <article className="showcase-project">

              <div className="project-visual security-audit-visual">
                <img
                  src="/projects/security-audit-dashboard.png"
                  alt="Security Audit Log Dashboard"
                />
              </div>


              <div className="showcase-info">

                <div className="project-meta">

                  <span className="project-number">02</span>

                  <span className="project-type">
                    Full Stack · Security
                  </span>

                </div>


                <h3>Security Audit Log Dashboard</h3>


                <p className="showcase-description">
                  A full-stack security dashboard designed for processing,
                  searching, filtering and analyzing audit logs through a
                  clean database-driven interface.
                </p>


                <div className="showcase-bottom">

                  <div className="showcase-tags">
                    <span>React</span>
                    <span>Vite</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                  </div>

                  <a
                    href="https://github.com/Tsanjay05/Security-Audit-Dashboard"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </article>


            {/* PROJECT 03 */}
            <article className="showcase-project">

              <div className="project-visual food-ordering-visual">
                <img
                  src="/projects/food-ordering.png"
                  alt="Food Ordering Microservices Project"
                />
              </div>


              <div className="showcase-info">

                <div className="project-meta">

                  <span className="project-number">03</span>

                  <span className="project-type">
                    Microservices · Backend · Full Stack
                  </span>

                </div>


                <h3>Food Ordering & Delivery System</h3>


                <p className="showcase-description">
                  A microservices-based food ordering system that manages the
                  complete order lifecycle from order creation to delivery.
                  The system uses REST APIs, asynchronous messaging and workflow
                  orchestration to coordinate order and delivery services.
                </p>


                <div className="showcase-bottom">

                  <div className="showcase-tags">
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>REST API</span>
                    <span>Camunda</span>
                    <span>ActiveMQ</span>
                    <span>Docker</span>
                    <span>React</span>
                  </div>


                  <a
                    href="https://github.com/Tsanjay05/Food-Ordering"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </article>


          </div>

        </section>

        {/* SKILLS */}
        <section className="section skills-section" id="skills">

          <div className="section-label">
            <span>03</span>
            Technical skills
          </div>

          <div className="skills-layout">

            <h2>
              Tools I use to
              <span> build.</span>
            </h2>

            <div className="skills-grid">

              {skills.map((skill, index) => (
                <div className="skill-item" key={skill}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{skill}</strong>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* EDUCATION */}
        <section className="section education-section">

          <div className="section-label">
            <span>04</span>
            Education
          </div>

          {/* Graduation */}
          <div className="education-card">

            <div>
              <p className="small-label">2022 — 2026</p>

              <h2>Panimalar Engineering College</h2>

              <p>B.Tech — Information Technology</p>
            </div>

            <div className="cgpa">
              <span>CGPA</span>
              <strong>8.1</strong>
            </div>

          </div>


          {/* 12th */}
          <div className="education-card">

            <div>
              <p className="small-label">2022</p>

              <h2>Adarsh Matric Higher Secondary School</h2>

              <p>Higher Secondary (12th) — Tamil Nadu State Board</p>
            </div>

            <div className="cgpa">
              <span>PERCENTAGE</span>
              <strong>82.33%</strong>
            </div>

          </div>


          {/* 10th */}
          <div className="education-card">

            <div>
              <p className="small-label">2020</p>

              <h2>Adarsh Matric Higher Secondary School</h2>

              <p>SSLC (10th) — Tamil Nadu State Board</p>
            </div>

            <div className="cgpa">
              <span>PERCENTAGE</span>
              <strong>72.6%</strong>
            </div>

          </div>

        </section>

        {/* CERTIFICATIONS & TRAINING */}
        <section className="section certifications-section" id="certifications">

          <div className="section-label">
            <span>05</span>
            Certifications & Training
          </div>

          <div className="certifications-list">

            {/* 01 */}
            <div className="certification-item">

              <div className="certification-number">
                01
              </div>

              <div className="certification-content">
                <h3>JAVA Training, Qspiders</h3>

                <p>
                  Completed hands-on Java training covering core and advanced Java
                  concepts, OOP principles, and practical programming exercises.
                </p>
              </div>

            </div>


            {/* 02 */}
            <div className="certification-item">

              <div className="certification-number">
                02
              </div>

              <div className="certification-content">
                <h3>Programming Using Java, Infosys Springboard</h3>

                <p>
                  Completed the Programming Using Java certification, covering Java
                  programming fundamentals, object-oriented concepts, and practical
                  coding exercises.
                </p>
              </div>

            </div>


            {/* 03 */}
            <div className="certification-item">

              <div className="certification-number">
                03
              </div>

              <div className="certification-content">
                <h3>Database and SQL, Infosys Springboard</h3>

                <p>
                  Completed training in database concepts and SQL, including queries,
                  data manipulation, relational database concepts, and practical SQL
                  exercises.
                </p>
              </div>

            </div>


            {/* 04 */}
            <div className="certification-item">

              <div className="certification-number">
                04
              </div>

              <div className="certification-content">
                <h3>Welcome to ServiceNow, ServiceNow</h3>

                <p>
                  Successfully completed the certification requirements for the
                  Micro-Certification — Welcome to ServiceNow.
                </p>
              </div>

            </div>


            {/* 05 */}
            <div className="certification-item">

              <div className="certification-number">
                05
              </div>

              <div className="certification-content">
                <h3>
                  Oracle Cloud Infrastructure 2024 Generative AI Certified Professional
                </h3>

                <p>
                  Earned the Oracle Cloud Infrastructure 2024 Generative AI Certified
                  Professional certification, demonstrating knowledge of generative AI
                  concepts and Oracle Cloud Infrastructure.
                </p>
              </div>

            </div>


            {/* 06 */}
            <div className="certification-item">

              <div className="certification-number">
                06
              </div>

              <div className="certification-content">
                <h3>Artificial Intelligence for Real World Application, TCS iON</h3>

                <p>
                  Completed training focused on artificial intelligence concepts and
                  their applications to real-world problems and use cases.
                </p>
              </div>

            </div>


            {/* 07 */}
            <div className="certification-item">

              <div className="certification-number">
                07
              </div>

              <div className="certification-content">
                <h3>
                  Domain 1 Review: AWS Certified Developer — Associate (DVA-C02),
                  AWS Training & Certification
                </h3>

                <p>
                  Completed the Domain 1 Review training for the AWS Certified
                  Developer — Associate (DVA-C02) certification, covering key AWS
                  developer concepts and services.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">

          <div className="contact-inner">

            <p className="eyebrow">Have a project or opportunity?</p>

            <h2>
              Let's build
              <br />
              something <span>great.</span>
            </h2>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tsanjay2995@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact-button"
            >
              tsanjay2995@gmail.com
              <span>↗</span>
            </a>

            <div className="social-links">

              <a
                href="https://github.com/Tsanjay05"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/tsanjay05"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>

        <span>© 2026 Sanjay T</span>

        <span>Designed & built with React</span>

        <a href="#home">Back to top ↑</a>

      </footer>

    </div>
  );
}

export default App;