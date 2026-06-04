import { FileText, Code, BookOpen, AlertCircle, Megaphone, GraduationCap, Mail, Linkedin, Github, ExternalLink, Briefcase, Award } from 'lucide-react';

export default function App() {
  const documentationSamples = [
    {
      title: "Product Requirement Document (PRD)",
      description: "Comprehensive product specifications, user stories, and acceptance criteria for new features",
      icon: FileText,
      tags: ["Product Management", "Requirements"],
      link: "https://drive.google.com/drive/folders/1_3pZBXnR_SS4XUEf9lO8yKBToD33IhS4?usp=sharing"
    },
    {
      title: "API Documentation",
      description: "Complete API reference with endpoints, authentication, request/response examples",
      icon: Code,
      tags: ["Technical Writing", "API"]
    },
    {
      title: "UI/UX Prototype",
      description: "Concept validation, User research ",
      icon: BookOpen,
      tags: ["Documentation", "User-facing"]
    },
    {
      title: "Data Analytics",
      description: "Concept validation, User research ",
      icon: BookOpen,
      tags: ["Documentation", "User-facing"],
      link: "https://drive.google.com/drive/folders/1XCoMs8nSUJH0aD9JD3Ne_Z9SsDHTtGEJ?usp=sharing"
    }
  ];

  const skills = {
    "Product Management": [
      "Product Strategy",
      "Roadmap Planning",
      "User Stories & Requirements",
      "Agile/Scrum",
      "Stakeholder Management"
    ],
    "Technical Documentation": [
      "API Documentation",
      "User Guides",
      "Product Requirements (PRDs)",
      "Release Notes",
      "Technical Writing"
    ],
    "User Research": [
      "User Interviews",
      "Usability Testing",
      "Survey Design",
      "Data Analysis",
      "Persona Development"
    ],
    "Analytics": [
      "Google Analytics",
      "Mixpanel",
      "SQL",
      "A/B Testing",
      "Product Metrics"
    ],
    "Design & Prototyping": [
      "Figma",
      "Adalo",
      "Bravo Studio",
      "Wireframing",
      "User Flows"
    ],
    "Technical Tools": [
      "Git/GitHub",
      "Markdown",
      "Airtable APIs",
      "REST APIs",
      "Jira/Confluence"
    ]
  };

  const experiences = [
    {
      company: "Thrive EdTech",
      role: "Product Analyst → Product Manager",
      period: "Sep 2020 – Oct 2022",
      highlights: [
        "Cerated comprehensive Product Requirement Documents",
        "Led the end-to-end product discovery and development",
        "Maintained API documentation using Postman",
        "Managed product roadmap using Agile/Scrum methodology"
      ]
    },
    {
      company: "Patronus Education",
      role: "Business Development Manager",
      period: "Mar 2019 - Nov 2020",
      highlights: [
        "Authored full-suite lecture materials, and compiled comprehensive guidebooks",
        "Designing and centralized learning management system (LMS)",
        "Developed mobile-responsive learning materials using HTML and Markdown",
        "Coordinated recruitment, onboarding, scheduleing, and marketing campaings"
      ]
    },
    {
      company: "McDonald's Roppongi Hills",
      role: "Crew Trainer",
      period: "Aug 2023 - Present",
      highlights: [
        "Analyzed past order data to optimize personel scheduling",
        "Trained crew members in English communication, enhancing service quality for international customers "
      ]
    },
    {
      company: "Mentors'",
      role: "Contract Instructor (Mathematics)",
      period: "Jan 2018 - Feb 2019",
      highlights: [
        "Conducted classes on SAT-level mathematics, analytical reasoning, and English proficiency tests",
        "Facilitated an average increase of 11% in test scores over the span of 6 weeks "
      ]
    }
  ];

  const projects = [
    {
      title: "Japanese Vocabulary Learning App",
      description: "Mobile app built with Adalo integrating Airtable APIs for vocabulary management and spaced repetition learning",
      tech: ["Adalo", "Airtable API", "Mobile UX"]
    },
      {
      title: "Bravo Studio Mobile App Prototype",
      description: "Interactive mobile prototype demonstrating product features and user flows",
      tech: ["Bravo Studio", "Figma", "Prototyping"]
    },
    {
      title: "API Documentation Portfolio",
      description: "Comprehensive REST API documentation with authentication, endpoints, and code examples",
      tech: ["Technical Writing", "API Design", "Markdown"]
    },
    {
      title: "User Research Case Studies",
      description: "Collection of user research projects including interviews, surveys, and usability tests",
      tech: ["User Research", "Data Analysis", "Insights"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">
          <div className="flex gap-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl mb-4 text-foreground">Sharat Iftekharul Islam</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Product Manager | Technical Documentation | User Research
          </p>
          <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Product Manager with expertise in SaaS and EdTech, specializing in Product Development Documentation,
            API Documentation, User Research, Agile Product Development, and Data Analytics. Bridging the gap between
            technical complexity and user clarity through data-driven insights.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              View Resume
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg hover:bg-accent transition-colors"
            >
              View Documentation Samples
            </a>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8 text-center">About Me</h2>
          <div className="bg-white rounded-xl p-8 border border-border">
            <p className="text-foreground/80 leading-relaxed mb-6">
              I'm a Product Manager transitioning into Technical Writing, currently pursuing a Bachelor of Science
              in Digital Business Innovation at Tokyo International University (GPA: 3.49/4.00). My career has been
              defined by a passion for identifying the minimum incremental feature improvements that brings the maximum user delight and multi-departmental alignment.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              At Thrive EdTech, I evolved from Product Analyst to Product Manager, where I led product discovery,
              designed prototypes, conducted user-validation interviews, prioritized feature backlogs, authored comprehensive product requirement documents, ran scrum sprints, maintained API documentations, and analyzed user adoption metrics. I've
              developed a strong foundation in translating technical requirements into clear, actionable documentation
              that serves both developers and end users.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My experience spans SaaS platforms, EdTech solutions, and mobile app development. I bring together
              product management rigor, technical writing clarity, and user research insights to create documentation
              that truly serves its audience. I've worked at the intersection of product documentation, user research, analytics, and Agile development to help teams build intuitive and impactful user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border border-border rounded-xl p-8 hover:border-foreground/20 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-secondary rounded-lg">
                    <Briefcase className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-1">{exp.role}</h3>
                    <p className="text-foreground/70">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-14">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-foreground/80 flex items-start gap-2">
                      <span className="text-muted-foreground mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Portfolio */}
      <section id="portfolio" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-4 text-center">Documentation Portfolio</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Samples of technical documentation, product requirements, and user-facing content
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentationSamples.map((sample, index) => {
              const Icon = sample.icon;
              const CardContent = (
                <>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="flex-1 text-lg leading-tight">{sample.title}</h3>
                    {sample.link && (
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </div>
                  <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                    {sample.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {sample.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-secondary text-foreground/70 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              );

              return sample.link ? (
                <a
                  key={index}
                  href={sample.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-6 border border-border hover:border-foreground/20 hover:shadow-sm transition-all cursor-pointer group block"
                >
                  {CardContent}
                </a>
              ) : (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-border hover:border-foreground/20 hover:shadow-sm transition-all cursor-pointer group"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="border border-border rounded-xl p-6 hover:border-foreground/20 transition-colors">
                <h3 className="text-lg mb-3">{project.title}</h3>
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 border border-border text-foreground/70 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-border">
                <h3 className="text-lg mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-muted-foreground" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-3 py-1.5 bg-secondary text-foreground rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-12 text-center">Education</h2>
          <div className="bg-white border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg">
                <GraduationCap className="w-6 h-6 text-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl mb-2">Bachelor of Science in Digital Business Innovation</h3>
                <p className="text-foreground/70 mb-1">Tokyo International University</p>
                <p className="text-sm text-muted-foreground mb-3">Currently Enrolled</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="inline-block bg-secondary px-3 py-1 rounded text-sm">
                    GPA: 3.49 / 4.00
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1Gn3nJ_CqkdiW7K4G1T6nHgDJlUTB2y4g/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    View Transcript
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6">Let's Connect</h2>
          <p className="text-foreground/70 mb-10 max-w-xl mx-auto">
            I'm actively seeking opportunities in Technical Writing and Product Management.
            Feel free to reach out to discuss potential collaborations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://www.linkedin.com/in/iftekharul-islam-sharat-585a681b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/sharat-iftekharul"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg hover:bg-white transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="mailto:sharat.islam@example.com"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg hover:bg-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 Sharat Iftekharul Islam. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
