

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Github,
  Star,
  GitFork,
  ExternalLink,
  Award,
  Briefcase,
  BookOpen,
  Code2,
  Globe,
  Heart,
  Languages,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";


import cvImage from "../assets/Joshua_Owuonda_CV.pdf";
import profileImage from "../assets/profileImage.png";

// Project Images
import uapmsImage from "../assets/uapmsImage.png";
import appointmentsImage from "../assets/appointmentsImage.png";
import mGatewayImage from "../assets/mGatewayImage.png";


// Animation wrapper component
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

// Tech icon component with real SVG icons
function TechIcon({ name, icon, color }: { name: string; icon: string; color: string }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-all"
      style={{ backgroundColor: `${color}15` }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-12 h-12 mb-3 flex items-center justify-center">
        <img src={icon} alt={name} className="w-full h-full object-contain" />
      </div>
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </motion.div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvImage;
    link.download = "Joshua_Owuonda_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactMe = () => {
    window.location.href = "mailto:joshuaowuonda41@gmail.com";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto flex">
        {/* Main Content */}
        <div className="flex-1 bg-white p-8 md:p-12">
          {/* Header Section */}
          <FadeInSection>
            <section id="header" className="mb-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2"></h1>
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Career Profile */}
          <FadeInSection delay={0.1}>
            <section id="profile" className="mb-12">
              <motion.div
                className="border-l-4 border-teal-600 pl-6 py-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-teal-600" />
                  Career Profile
                </h2>
              </motion.div>
              <div className="text-gray-700 space-y-3 mt-6">
                <p>
                  — Self-motivated software engineer seeking an internship in Software or Web Development. Skilled in full-stack development,
                  software design, and system implementation.
                </p>
                <p>
                  — I am proficient in Python, JavaScript, and frameworks like React and Django, with hands-on experience in developing
                  web applications and managing databases.
                </p>
                <p>
                  — I'm currently a Software Engineer trainee actively building impactful and user-focused solutions through my projects and
                  collaborative learning experiences.
                </p>
                <p>
                  — I thrive in team environments and possess excellent communication skills, making me a strong collaborator.
                </p>
                <p>
                  — I'm an adept at developing full-stack applications that support company operations, develop scalable software solutions, and
                  deliver user-friendly products to deliver high-quality products.
                </p>
                <p>
                  — I've also built practical solutions through pet-projects—such as a missing children search system now being re-developed with
                  AI enhancement.
                </p>
                <p>— My backend experience spans Django, Flask, and Node.js, while my frontend stack includes Vue.js and HTML/CSS.</p>
                <p>
                  I believe in lifelong learning, collaboration, and communication. I thrive in environments where curiosity meets purposeful
                  engineering.
                </p>
              </div>
            </section>
          </FadeInSection>

          {/* Experience */}
          <FadeInSection delay={0.2}>
            <section id="experience" className="mb-12">
              <motion.div
                className="border-l-4 border-teal-600 pl-6 py-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-teal-600" />
                  Experience
                </h2>
              </motion.div>

              <motion.div
                className="bg-white border border-gray-200 rounded-lg p-6 mt-6 hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Masterspace solutions</h3>
                        <p className="text-gray-600">Software Engineer Trainee</p>
                        <p className="text-sm text-gray-500">February 2026 - April 2026</p>
                      </div>
                      <Badge className="bg-black text-white">3 months</Badge>
                    </div>
                    <ul className="text-gray-700 space-y-2 mt-4 list-disc list-inside">
                      <li>I'm working to build internal applications to help on company operations.</li>
                      <li>Developing scalable software solutions using modern programming languages and frameworks.</li>
                      <li>Collaborating with cross-functional teams to deliver high-quality software on time.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </section>
          </FadeInSection>

          {/* Achievements */}
          <FadeInSection delay={0.3}>
            <section id="achievements" className="mb-12">
              <motion.div
                className="border-l-4 border-teal-600 pl-6 py-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-teal-600" />
                  Achievements
                </h2>
              </motion.div>

              <div className="space-y-6 mt-6">
                {[
                  {
                    icon: "🏆",
                    title: "Full-Stack Software Development (Final Year Project)",
                    description:
                      "Designed and implemented a UAPMS web application covering multiple project including HTML/CSS development, database design, API integration, and quality assurance with rigorous functionality and usability.",
                  },
                  {
                    icon: "📱",
                    title: "Applied Core Software Engineering Principles",
                    description:
                      "Applied agile software development (Scrum), requirements gathering, and quantitative problem-solving techniques across academic and personal projects to deliver robust and efficient software solutions.",
                  },
                  {
                    icon: "🗄️",
                    title: "Database Design & Integration",
                    description:
                      "Designed and integrated relational databases using SQL, implementing normalized schemas, CRUD operations, and optimized queries to support application functionality.",
                  },
                  {
                    icon: "⚙️",
                    title: "Version Control & Collaborative Development",
                    description:
                      "Utilized Git for version control and repository management, following practices such as meaningful commits, branching, and code review.",
                  },
                  {
                    icon: "🌐",
                    title: "Web Application Development & Testing",
                    description:
                      "Developed responsive and accessible web application functionally and debugged using to improve performance validation, and usability.",
                  },
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4 hover:bg-gray-50 p-4 rounded-lg transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-3xl">{achievement.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-gray-700">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </FadeInSection>

          {/* Blogs */}
          <FadeInSection delay={0.4}>
            <section id="blogs" className="mb-12">
              <motion.div
                className="border-l-4 border-teal-600 pl-6 py-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-teal-600" />
                  Blogs
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <motion.div
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="font-bold text-gray-900 mb-2">Web Browsing</h3>
                  <p className="text-gray-600 mb-4">
                    What happens when you type{" "}
                    <a href="https://www.google.com" className="text-teal-600 underline">
                      https://www.google.com
                    </a>{" "}
                    in your browser
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">SOFTWARE ENGINEERING</Badge>
                    <Badge variant="secondary">WEB DEVELOPMENT</Badge>
                  </div>
                </motion.div>

                <motion.div
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="font-bold text-gray-900 mb-2">Working With APIs</h3>
                  <p className="text-gray-600 mb-4">
                    SalesforceMarketers — Simplifying Salesforce for Everyone: An E-Learning Project
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">SOFTWARE ENGINEERING</Badge>
                    <Badge variant="secondary">WEB DEVELOPMENT</Badge>
                    <Badge variant="secondary">API</Badge>
                  </div>
                </motion.div>
              </div>
            </section>
          </FadeInSection>

          {/* Projects */}
          <FadeInSection delay={0.5}>
            <section id="projects" className="mb-12">
              <motion.div
                className="border-l-4 border-teal-600 pl-6 py-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-teal-600" />
                  Projects
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {[
                  {
                    title: "University Academic Performance Management System (UAPMS)",
                    type: "Final Year Project",
                    image: uapmsImage,
                    description:
                      "A web-based management system for online appointment scheduling, course details, lecturer and student management, and account access.",
                    features: [
                      "Multi-user authentication system for various user types",
                      "Built a responsive frontend for both mobile and web access",
                      "Implemented student dashboard to view GPA calculations, attendance tracking, and performance monitoring.",
                      "Created backend systems for GPA calculation, instructor/student registration, database connection, appointment booking, and course registration",
                      "Integrated Django REST database for secure data-related queries",
                      "Used Git for version control",
                    ],
                    tags: ["Python", "Django", "JavaScript", "HTML", "CSS", "Bootstrap"],
                    stars: 0,
                    forks: 0,
                    github: "https://github.com",
                  },
                  {
                    title: "Online Appointment Scheduling System",
                    type: "Web Application",
                    image: appointmentsImage,
                    description:
                      "A web-based platform for online appointment scheduling that simplifies booking, tracks availability, and sends automated confirmations to users.",
                    features: [
                      "Built a responsive frontend for both online and mobile access",
                      "Built a responsive frontend for both online and mobile access",
                      "Used OpenCV for real-time face detection",
                      "Designed user-specific dashboards for students, lecturers, and administrators",
                      "Optimized performance to support 50+ concurrent users using the concurrent users performance metric",
                    ],
                    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                    stars: 0,
                    forks: 0,
                    github: "https://github.com",
                  },
                  {
                    title: "Mpesa Gateway",
                    type: "API Integration",
                    image: mGatewayImage,
                    description:
                      "A C&on application that integrates with the M-Pesa API to facilitate mobile money transactions, including payments, balance inquiry, and transaction history retrieval.",
                    features: [
                      "Implemented STK Push for seamless payment collection",
                      "Used OAuth for secure access to M-Pesa API services",
                    ],
                    tags: ["NodeJs", "M-Pesa API", "REST API", "ExpressJs"],
                    stars: 0,
                    forks: 0,
                    github: "https://github.com",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    {/* Project Image */}
                    <div className="h-48 w-full overflow-hidden bg-gray-100">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-gray-900 mb-1">{project.title}</h3>
                      <p className="text-sm text-teal-600 mb-4">{project.type}</p>
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      <ul className="text-sm text-gray-600 space-y-2 mb-6 list-disc list-inside">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Tags:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-teal-600 border-teal-600">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* GitHub Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {project.stars} stars
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            {project.forks} forks
                          </span>
                        </div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm"
                        >
                          SOURCE
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </FadeInSection>

          {/* Tech Stack & Frameworks */}
          <FadeInSection delay={0.6}>
            <section id="tech-stack" className="mb-12">
              <motion.div
                className="border-l-4 border-teal-600 pl-6 py-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-teal-600" />
                  Tech Stack & Frameworks
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
                <TechIcon
                  name="Python"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  color="#3776AB"
                />
                <TechIcon
                  name="JavaScript"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  color="#F7DF1E"
                />
                <TechIcon
                  name="Java"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  color="#007396"
                />
                <TechIcon
                  name="PHP"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                  color="#777BB4"
                />
                <TechIcon
                  name="C"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                  color="#A8B9CC"
                />
                <TechIcon
                  name="C++"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  color="#00599C"
                />
                <TechIcon
                  name="HTML5"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  color="#E34F26"
                />
                <TechIcon
                  name="CSS3"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  color="#1572B6"
                />
                <TechIcon
                  name="Kotlin"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
                  color="#7F52FF"
                />
                <TechIcon
                  name="NodeJs"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  color="#339933"
                />
                <TechIcon
                  name="Django"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                  color="#092E20"
                />
                <TechIcon
                  name="Flask"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
                  color="#000000"
                />
                <TechIcon
                  name="PostgreSQL"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                  color="#4169E1"
                />
                <TechIcon
                  name="MySQL"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  color="#4479A1"
                />
                <TechIcon
                  name="Git"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  color="#F05032"
                />
                <TechIcon
                  name="REST APIs"
                  icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
                  color="#009688"
                />
              </div>

              {/* Technical Skills */}
              <div className="mt-12 space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["PHP", "Java", "Python", "SQL", "JavaScript", "TypeScript", "Kotlin", "C++", "C#"].map((lang) => (
                      <Badge key={lang} variant="secondary">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Web & Application Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "Bootstrap", "ReactJs", "NodeJs", "REST API (Integration)", "Responsive Web Design"].map(
                      (tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Databases & Cloud</h3>
                  <div className="flex flex-wrap gap-2">
                    {["MySQL", "PostgreSQL", "Firebase", "OracleDb", "API/MuleSoft"].map((db) => (
                      <Badge key={db} variant="secondary">
                        {db}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "VSCode", "IntelliJ", "Android Studio", "XAMPP", "Docker", "SQLite"].map((tool) => (
                      <Badge key={tool} variant="secondary">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Systems & Networking</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Linux Networking", "System configuration", "Troubleshooting"].map((sys) => (
                      <Badge key={sys} variant="secondary">
                        {sys}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Problem-solving & analytical thinking",
                      "Team collaboration & communication",
                      "Time management & accountability",
                      "Initiative & Support to team",
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>
        </div>

        {/* Sidebar */}
        <div className="w-96 bg-teal-700 text-white p-8 sticky top-0 h-screen overflow-y-auto">
          <FadeInSection>
            <div className="text-center mb-6">
              <div className="w-32 h-32 rounded-full bg-white mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-1">Joshua Owuonda</h2>
              <p className="text-teal-200 mb-4">Junior Software Engineer</p>
              
              {/* Action Buttons */}
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  onClick={handleContactMe}
                  className="bg-white text-teal-700 hover:bg-teal-50 w-full"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button
                  onClick={handleDownloadCV}
                  variant="outline"
                  className="bg-white text-teal-700 hover:bg-teal-50 w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </FadeInSection>

          {/* Fun Fact */}
          <FadeInSection delay={0.05}>
            <div className="mb-8 bg-teal-600 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-center">Fun Fact:</h3>
              <p className="text-center text-sm">
                I treat coding like a puzzle, I don’t stop until every piece fits perfectly.
              </p>
            </div>
          </FadeInSection>

          {/* Contact Information */}
          <FadeInSection delay={0.1}>
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                CONTACT INFORMATION
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>joshuaowuonda41@gmail.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <Globe className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>+254 799 732 318</span>
                </div>
                <div className="flex items-start gap-2">
                  <Github className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>github.com/Joshcode41</span>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Education */}
          <FadeInSection delay={0.2}>
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                EDUCATION
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Bachelors in Business Information Technology</p>
                  <p className="text-teal-200 text-sm">Strathmore University</p>
                  <p className="text-teal-200 text-sm">Nairobi, Kenya</p>
                  <p className="text-xs text-teal-300 mt-1">June 2023 - June 2027</p>
                </div>
                <div>
                  <p className="font-semibold">ALX - Software Engineering</p>
                  <p className="text-teal-200 text-sm">Software development</p>
                  <p className="text-xs text-teal-300 mt-1">2026 - ongoing</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Languages */}
          <FadeInSection delay={0.3}>
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Languages className="w-5 h-5" />
                LANGUAGES
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>English - fluent</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-full h-2 bg-white rounded"></div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Kiswahili - fluent</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-full h-2 bg-white rounded"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Interests & Hobbies */}
          <FadeInSection delay={0.4}>
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                INTERESTS & HOBBIES
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <span className="text-sm">Coding</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-sm">Reading</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-sm">Tech News</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-sm">Problem Solving</span>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Joshua Owuonda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}