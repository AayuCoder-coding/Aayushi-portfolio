import React from 'react';
import { Mail, Linkedin, Github, ExternalLink, Calendar, Award, BookOpen } from 'lucide-react';
import './App.css';

function App() {
  const skills = [
    "Java", "Python", "C", "DSA", "OOPs", "Operating Systems", "Computer Networks", 
    "DBMS", "SQL", "MySQL", "Git", "Github", "HTML", "CSS", "JavaScript", "Streamlit", 
    "Multithreading", "Concurrency", "Asynchronous Programming", "Performance Optimization", 
    "System Design", "Pandas", "NumPy", "Scikit-learn", "TensorFlow/Keras"
  ];

  const education = [
    {
      institution: "DIT University, Dehradun",
      period: "2022 - 2026",
      degree: "B.Tech. - Computer Science & Engineering, Artificial Intelligence & Machine Learning and Robotics",
      score: "CGPA: 8.42/10"
    },
    {
      institution: "GOVT GIRLS SR SEC SCHOOL, Chandigarh",
      period: "2022",
      degree: "12th | CBSE",
      score: "Percentage: 72.60/100"
    },
    {
      institution: "ST. XAVIER'S HIGH SCHOOL, Panchkula",
      period: "2020",
      degree: "10th | CISCE",
      score: "Percentage: 77.50/100"
    }
  ];

  const internships = [
    {
      company: "Labmentix",
      period: "15 May, 2025 - 15 Aug, 2025",
      role: "AIML Intern",
      achievements: [
        "Automated data validation and processing pipelines in Python, improving system efficiency and reducing manual reporting time by 40%",
        "Designed and executed SQL-based test suites to ensure data accuracy, consistency, and integrity across ETL workflows",
        "Collaborated with cross-functional engineering teams to troubleshoot and resolve pipeline failures, enhancing reliability and performance",
        "Received a Letter of Recommendation for outstanding technical contribution and professionalism"
      ]
    },
    {
      company: "Elevate Labs",
      period: "26 May, 2025 - 28 Jun, 2025",
      role: "ML Intern",
      achievements: [
        "Built a fraud detection pipeline with automated scheduled retraining and validation jobs, ensuring consistent model accuracy over time",
        "Developed real-time monitoring dashboards to track precision, recall, and drift, enabling proactive issue detection and faster debugging"
      ]
    }
  ];

  const projects = [
    {
      name: "Snake Game",
      link: "https://github.com/AayuCoder-coding/Snake-Game",
      description: "Developed a 2D interactive Snake Game using Java and Swing, demonstrating strong understanding of OOP principles and event-driven design.",
      features: [
        "Real-time game loop using javax.swing.Timer for smooth frame updates",
        "Asynchronous keyboard input handling with KeyListener",
        "Collision detection, apple spawning, and score tracking using arrays"
      ]
    },
    {
      name: "Credit Card Fraud Detection",
      link: "https://github.com/AayuCoder-coding/Fraud-Detection-App",
      description: "Built a fraud detection pipeline integrating Isolation Forest, LOF, and XGBoost with automated retraining and validation.",
      features: [
        "Preprocessing and data balancing workflows with integrated test cases",
        "Streamlit-based dashboard for real-time fraud monitoring, reducing manual review by 40%"
      ]
    },
    {
      name: "Retail Store Forecasting and Optimization",
      link: "https://github.com/AayuCoder-coding/Store_Optimization",
      description: "Engineered an LSTM-driven time-series forecasting system with automated evaluation pipelines.",
      features: [
        "Reduced forecasting error by 18%",
        "Market Basket Analysis with automated test scripts",
        "Interactive dashboards with actionable insights for business optimization"
      ]
    }
  ];

  const certifications = [
    "Python Project for Data Science",
    "Implementing Machine Learning Solution with Azure Databricks",
    "Introduction to Java", 
    "Introduction to Software Engineering"
  ];

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1 className="name">AAYUSHI VERMA</h1>
          <p className="title">B.Tech. - Computer Science & Engineering, Artificial Intelligence & Machine Learning and Robotics</p>
          <div className="contact-info">
            <a href="mailto:1000019368@dit.edu.in" className="contact-link">
              <Mail size={16} />
              1000019368@dit.edu.in
            </a>
            <a href="https://www.linkedin.com/in/aayushi-verma-b479b5262/" className="contact-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href="https://github.com/AayuCoder-coding" className="contact-link" target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">PROFESSIONAL SUMMARY</h2>
          <div className="summary">
            <p>
              Final-year B.Tech CSE (AI, ML & Robotics) student with strong programming and problem-solving skills. 
              Experienced in Java, Python, and distributed systems fundamentals. Built multiple projects focusing on 
              performance, scalability, and clean code design. Strong grasp of DSA, OS, DBMS, and Computer Networks. 
              Seeking a Software Engineer role to build high-performance compute systems and contribute to distributed query optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">SKILLS & EXPERTISE</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            <BookOpen size={20} />
            EDUCATION
          </h2>
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-header">
                  <h3>{edu.institution}</h3>
                  <span className="period">{edu.period}</span>
                </div>
                <p className="degree">{edu.degree}</p>
                <p className="score">{edu.score}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            <Calendar size={20} />
            INTERNSHIPS
          </h2>
          <div className="internships-list">
            {internships.map((intern, index) => (
              <div key={index} className="internship-item">
                <div className="internship-header">
                  <h3>{intern.company}</h3>
                  <span className="period">{intern.period}</span>
                </div>
                <p className="role">{intern.role}</p>
                <ul className="achievements">
                  {intern.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            <Award size={20} />
            PROJECTS
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">CERTIFICATIONS</h2>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Aayushi Verma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;