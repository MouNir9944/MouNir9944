import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [expandedSections, setExpandedSections] = useState({
    about: true,
    skills: false,
    experience: false,
    education: false,
    projects: false,
    contact: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="wave">👋</span> Hi, I'm <span className="highlight">Mounir Mahroug</span>
            </h1>
            <h2 className="hero-subtitle">Embedded Systems Engineer & IoT Solutions Developer</h2>
            <p className="hero-description">
              Passionate about creating innovative embedded solutions and IoT systems that bridge the gap between hardware and software. 
              Specialized in industrial automation, predictive maintenance, and smart communication modules.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View My Work</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <img 
                  src="/images/mounir-headshot.jpg" 
                  alt="Mounir Mahroug - Embedded Systems Engineer"
                  className="profile-photo"
                />
              </div>
              <div className="profile-info">
                <h3>Mounir Mahroug</h3>
                <p>Embedded Systems Engineer</p>
                <div className="profile-links">
                  <a href="mailto:mounir.mmahroug@gmail.com" className="profile-link">
                    📧 Email
                  </a>
                  <a href="https://www.linkedin.com/in/mounirmahroug" target="_blank" rel="noopener noreferrer" className="profile-link">
                    💼 LinkedIn
                  </a>
                  <a href="/Profile.pdf" target="_blank" rel="noopener noreferrer" className="profile-link">
                    📄 Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title" onClick={() => toggleSection("about")}>
          <span className="section-icon">🛠️</span> What I Do
          <span className="toggle-icon">{expandedSections.about ? "▲" : "▼"}</span>
        </h2>
        {expandedSections.about && (
          <div className="section-content">
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon">🔌</div>
                <h3>Embedded Systems Development</h3>
                <p>STM32, ESP32, Arduino, Raspberry Pi, Embedded Linux</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🌐</div>
                <h3>IoT Solutions Design</h3>
                <p>SIM800L/SIM900/SIM7000G, Quectel EG95-EX, MQTT, Modbus</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">💻</div>
                <h3>Programming Languages</h3>
                <p>C, C++, Python, Java, Shell scripting</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">⚙️</div>
                <h3>Tools & Frameworks</h3>
                <p>Keil, STM32CubeIDE, PlatformIO, ESP-IDF, FreeRTOS, NI LabVIEW, Git</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🧩</div>
                <h3>PCB & Hardware Design</h3>
                <p>CAO tools, Altium Designer, SolidWorks</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="section-title" onClick={() => toggleSection("experience")}>
          <span className="section-icon">👨‍💼</span> Professional Experience
          <span className="toggle-icon">{expandedSections.experience ? "▲" : "▼"}</span>
        </h2>
        {expandedSections.experience && (
          <div className="section-content">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>🔧 Electronic Engineer</h3>
                  <h4>SERMA International | September 2024 - Present (1 year 1 month)</h4>
                  <p>Ariana, Tunisia</p>
                  <p>Developing and maintaining electronic systems and embedded solutions for industrial applications. Specializing in electronic circuit design, PCB development, and embedded system integration.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>💼 Freelance</h3>
                  <h4>Freelance | September 2024 - Present (1 year 1 month)</h4>
                  <p>Providing freelance embedded systems and electronic engineering services to various clients. Working on diverse projects including IoT solutions, embedded software development, and electronic design.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>🌐 Embedded System Engineer || IoT Solutions</h3>
                  <h4>SFM Telecom-SFM Technologies | May 2022 - August 2024 (2 years 4 months)</h4>
                  <p>Tunis, Tunisia</p>
                  <p>Developed and maintained embedded systems for telecommunications infrastructure, focusing on IoT connectivity and industrial automation solutions. Led the design of smart communication modules using STM32 and ESP32 microcontrollers, implementing MQTT and Modbus protocols for industrial IoT applications.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>💻 Embedded Software Engineer</h3>
                  <h4>SMDEi | June 2021 - March 2022 (10 months)</h4>
                  <p>Developed embedded software solutions for various industrial applications. Worked on microcontroller programming, real-time systems, and embedded software architecture design.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>🔍 Quality Control Technician</h3>
                  <h4>TTelectronics Aerostanrew | March 2018 - June 2021 (3 years 4 months)</h4>
                  <p>Ensured quality standards for electronic components and systems. Conducted testing, inspection, and validation of electronic products to maintain high quality standards in manufacturing processes.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2 className="section-title" onClick={() => toggleSection("education")}>
          <span className="section-icon">🎓</span> Education & Certifications
          <span className="toggle-icon">{expandedSections.education ? "▲" : "▼"}</span>
        </h2>
        {expandedSections.education && (
          <div className="section-content">
            <div className="education-grid">
              <div className="education-card">
                <h3>🎓 Mechatronics, Robotics & Automation Engineering</h3>
                <h4>Ecole Supérieure Privée d'Ingénierie et de Technologies - ESPRIT</h4>
                <p><strong>Degree:</strong> Excellent</p>
                <p><strong>Duration:</strong> September 2019 - May 2022</p>
                <p>Comprehensive education in embedded systems, robotics, and industrial automation technologies. Specialized coursework in microcontroller programming, control systems, and IoT development.</p>
              </div>
              <div className="education-card">
                <h3>🎓 Electronic, Electrotechnical and Automatic</h3>
                <h4>Institute Superior of Science and Industrial Gabes</h4>
                <p><strong>Duration:</strong> September 2014 - June 2017</p>
                <p>Foundation education in electronic systems, electrotechnical engineering, and automation. Focused on fundamental principles of electronics, electrical systems, and automatic control.</p>
              </div>
              <div className="certifications">
                <h4>🏅 Professional Certifications</h4>
                <ul>
                  <li><strong>C Programming for Embedded Applications</strong> - 2020</li>
                  <li><strong>SolidWorks Design & Simulation</strong> - 2019</li>
                  <li><strong>Scrum Fundamentals Certified (SFC)</strong> - 2021</li>
                  <li><strong>STM32 Microcontroller Development</strong> - 2022</li>
                  <li><strong>IoT Development with ESP32</strong> - 2021</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title" onClick={() => toggleSection("projects")}>
          <span className="section-icon">🚀</span> Current Projects
          <span className="toggle-icon">{expandedSections.projects ? "▲" : "▼"}</span>
        </h2>
        {expandedSections.projects && (
          <div className="section-content">
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-icon">🌡️</div>
                <h3>Industrial IoT Predictive Maintenance System</h3>
                <p><strong>Duration:</strong> 2022 - Present</p>
                <p>Developed a comprehensive IoT-based predictive maintenance solution using STM32 microcontrollers, machine learning algorithms, and cloud connectivity. The system monitors industrial equipment health in real-time and predicts maintenance needs with 95% accuracy.</p>
                <div className="project-tech">
                  <span className="tech-tag">STM32</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">TensorFlow</span>
                  <span className="tech-tag">MQTT</span>
                </div>
              </div>
              <div className="project-card">
                <div className="project-icon">📶</div>
                <h3>Smart Industrial Communication Gateway</h3>
                <p><strong>Duration:</strong> 2021 - 2022</p>
                <p>Designed and implemented a multi-protocol communication gateway for industrial automation using ESP32 and Quectel EG95-EX modules. Supports MQTT, Modbus RTU/TCP, and custom protocols for seamless device integration.</p>
                <div className="project-tech">
                  <span className="tech-tag">ESP32</span>
                  <span className="tech-tag">C++</span>
                  <span className="tech-tag">Modbus</span>
                  <span className="tech-tag">4G/LTE</span>
                </div>
              </div>
              <div className="project-card">
                <div className="project-icon">🔬</div>
                <h3>Custom Embedded Development Boards</h3>
                <p><strong>Duration:</strong> 2020 - 2021</p>
                <p>Created custom embedded development boards and PCB designs for specialized industrial applications. Designed power-efficient boards with integrated sensors, wireless connectivity, and industrial-grade components using Altium Designer.</p>
                <div className="project-tech">
                  <span className="tech-tag">Altium Designer</span>
                  <span className="tech-tag">PCB Design</span>
                  <span className="tech-tag">Embedded C</span>
                  <span className="tech-tag">FreeRTOS</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title" onClick={() => toggleSection("contact")}>
          <span className="section-icon">📫</span> Get In Touch
          <span className="toggle-icon">{expandedSections.contact ? "▲" : "▼"}</span>
        </h2>
        {expandedSections.contact && (
          <div className="section-content">
            <div className="contact-content">
              <div className="contact-info">
                <h3>Let's work together!</h3>
                <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p>
                <div className="contact-methods">
                  <a href="mailto:mounir.mmahroug@gmail.com" className="contact-method">
                    <span className="contact-icon">📧</span>
                    <div>
                      <h4>Email</h4>
                      <p>mounir.mmahroug@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/mounirmahroug" target="_blank" rel="noopener noreferrer" className="contact-method">
                    <span className="contact-icon">💼</span>
                    <div>
                      <h4>LinkedIn</h4>
                      <p>Connect with me professionally</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="contact-form">
                <h4>Send me a message</h4>
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

