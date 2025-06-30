import { Code, Database, Settings, Github, Linkedin, Mail } from "lucide-react"

export const skills = [
  {
    category: "Frontend",
    icon: Code,
    skills: [
      { name: "React", level: 90 },
      { name: "React Native", level: 75 },
      { name: "Angular", level: 65 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: Database,
    skills: [
      { name: "Java", level: 95 },
      { name: "Spring Boot", level: 95 },
      { name: ".NET", level: 75 },
      { name: "Python", level: 60 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    category: "Tools & Others",
    icon: Settings,
    skills: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "IntelliJ", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Docker", level: 60 },
      { name: "AWS", level: 65 },
    ],
  },
]

export const projects = [
  {
    title: "Multiplayer Chess Application",
    description:
      "Real-time multiplayer chess game with live gameplay, move validation, and advanced game state management",
    tags: ["React", "Node.js", "Socket.io"],
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication, product management, and secure payment processing",
    tags: ["Java", "Spring Boot", "React"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Enterprise Web Application",
    description: "Modern enterprise web application with responsive design and optimized performance",
    tags: ["Python", "Flask", "PostgreSQL"],
    gradient: "from-orange-500 to-red-600",
  },
]

export const socialLinks = [
  { href: "https://github.com/shantanukhilare", icon: Github },
  { href: "https://www.linkedin.com/in/shantanu-khilare-b2a825259/", icon: Linkedin },
  { href: "mailto:shantanu.khilare.16@gmail.com", icon: Mail },
]

export const experience = {
  title: "Software Development Intern",
  company: "Mahindra Teqo",
  year: "2024",
  responsibilities: [
    "Developed and maintained enterprise-grade web applications using Java and Spring Boot",
    "Collaborated with cross-functional teams on high-impact software development projects",
    "Gained extensive hands-on experience with full-stack development best practices",
  ],
}

export const personalInfo = {
  name: "Shantanu Khilare",
  title: "Elite Full Stack Developer",
  technologies: "Java • React • .NET",
  description:
    "Crafting exceptional digital experiences with precision, innovation, and uncompromising quality. Based in Mumbai, delivering world-class solutions globally.",
  email: "shantanu.khilare.16@gmail.com",
  aboutText: [
    "I'm a passionate full-stack developer based in Thane, Mumbai, with a proven track record of building robust, scalable web applications. My expertise spans across Java, Spring Boot, React, and .NET technologies, always striving to create efficient and user-friendly solutions that exceed expectations.",
    "When I'm not crafting code, you'll find me strategizing over chess games, analyzing complex algorithms, or exploring cutting-edge technologies. I'm driven by continuous learning and take pride in delivering solutions that push the boundaries of what's possible.",
  ],
}
