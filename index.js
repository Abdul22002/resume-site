"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, Phone, Download, Shield, Lock, Database, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.1),transparent_70%)]"></div>
        <div className="grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] h-full w-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="bg-blue-500/10 rounded-full blur-xl"
              style={{
                gridColumn: `${Math.floor(Math.random() * 20) + 1} / span ${Math.floor(Math.random() * 3) + 1}`,
                gridRow: `${Math.floor(Math.random() * 20) + 1} / span ${Math.floor(Math.random() * 3) + 1}`,
                opacity: Math.random() * 0.3,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-zinc-800 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-blue-500 font-mono text-xl font-bold tracking-tighter">
            <span className="text-white">ABDUL</span>ALGHANIM
          </div>
          <nav className="hidden md:flex space-x-8">
            {["About", "Skills", "Education", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-400 hover:text-blue-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
          <Button
            variant="outline"
            className="border-blue-500 text-blue-400 hover:bg-blue-950/30"
            onClick={() => window.print()}
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        {/* Profile Section */}
        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
              <div className="relative mx-auto md:mx-0">
                <div className="relative h-64 w-64 rounded-full overflow-hidden border-4 border-zinc-800">
                  <div className="absolute inset-0 border border-blue-500/20 rounded-full"></div>
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Abdullrahman Alghanim"
                    width={256}
                    height={256}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-blue-950/30 border border-blue-500/30 rounded-full text-blue-400 text-xs font-mono mb-2">
                  INFORMATION SECURITY SPECIALIST
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span className="text-white">Abdullrahman</span>
                  <span className="text-blue-400"> Alghanim</span>
                </h1>
                <p className="text-xl text-zinc-300">Cybersecurity Professional</p>
                <p className="text-zinc-400 max-w-2xl">
                  Dedicated information security specialist with a passion for protecting digital assets and
                  infrastructure. Focused on implementing robust security solutions and staying ahead of emerging
                  threats in the cybersecurity landscape.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center text-zinc-300">
                    <Mail className="h-4 w-4 mr-2 text-blue-400" />
                    <a href="mailto:abdulalghanim476@gmail.com" className="hover:text-blue-400 transition-colors">
                      abdulalghanim476@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <Phone className="h-4 w-4 mr-2 text-blue-400" />
                    <span>(813) 474-8982</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 pt-2">
                  <Link
                    href="https://github.com/Abdul22002"
                    target="_blank"
                    className="text-zinc-400 hover:text-blue-400 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/abdul-alghanim/"
                    target="_blank"
                    className="text-zinc-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-zinc-800" />

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">
              Technical <span className="text-blue-400">Skills</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Core Competencies</h3>
                <div className="space-y-4">
                  {[
                    { name: "Network Security", level: 85 },
                    { name: "Vulnerability Assessment", level: 80 },
                    { name: "Security Monitoring", level: 75 },
                    { name: "Incident Response", level: 70 },
                    { name: "Penetration Testing", level: 65 },
                    { name: "Security Architecture", level: 70 },
                    { name: "Risk Assessment", level: 75 },
                    { name: "Compliance & Governance", level: 70 },
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-zinc-300">{skill.name}</span>
                        <span className="text-xs text-blue-400">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-1.5 bg-zinc-800" indicatorClassName="bg-blue-500" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Technical Expertise</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-blue-400 font-medium mb-3">Security Tools</h4>
                    <ul className="space-y-2">
                      {["Wireshark", "Nmap", "Metasploit", "Burp Suite", "Kali Linux", "Splunk", "Snort", "OSSEC"].map(
                        (tool, index) => (
                          <li key={index} className="flex items-start text-zinc-300">
                            <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-blue-400"></div>
                            <span>{tool}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-medium mb-3">Technologies</h4>
                    <ul className="space-y-2">
                      {[
                        "Python",
                        "Linux",
                        "Windows Server",
                        "AWS Security",
                        "Firewalls",
                        "IDS/IPS",
                        "SIEM",
                        "VPNs",
                      ].map((tech, index) => (
                        <li key={index} className="flex items-start text-zinc-300">
                          <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-blue-400"></div>
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-blue-400 font-medium mb-3">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "CompTIA Security+",
                      "CompTIA Network+",
                      "CEH (Pursuing)",
                      "CISSP (Pursuing)",
                      "AWS Security (Pursuing)",
                    ].map((cert, index) => (
                      <Badge key={index} className="bg-zinc-800 text-blue-300 hover:bg-zinc-700 border-zinc-700">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-zinc-800" />

        {/* Education Section */}
        <section id="education" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-blue-400">Education</span> & Training
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  degree: "Bachelor of Science in Cybersecurity",
                  institution: "University of South Florida",
                  period: "2020 - 2024",
                  details:
                    "Focus on network security, ethical hacking, and security operations. Relevant coursework includes cryptography, secure software development, and digital forensics.",
                },
                {
                  degree: "Associate of Science in Information Technology",
                  institution: "Hillsborough Community College",
                  period: "2018 - 2020",
                  details: "Foundation in computer systems, networking, and basic security principles.",
                },
              ].map((edu, index) => (
                <Card
                  key={index}
                  className="bg-zinc-900 border-zinc-800 backdrop-blur-sm hover:border-blue-500/30 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <div className="inline-block px-3 py-1 bg-blue-950/30 border border-blue-500/30 rounded-full text-blue-400 text-xs font-mono">
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-blue-400 mb-3">{edu.institution}</p>
                    <p className="text-zinc-300">{edu.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-6">Professional Development</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    course: "Ethical Hacking Workshop",
                    provider: "Black Hat Conference",
                    year: "2023",
                  },
                  {
                    course: "Cloud Security Fundamentals",
                    provider: "AWS Training",
                    year: "2023",
                  },
                  {
                    course: "Incident Response Training",
                    provider: "SANS Institute",
                    year: "2022",
                  },
                  {
                    course: "Network Defense Essentials",
                    provider: "Cybersecurity & Infrastructure Security Agency",
                    year: "2022",
                  },
                  {
                    course: "Security Operations Center Analyst Training",
                    provider: "Cybrary",
                    year: "2021",
                  },
                  {
                    course: "Python for Security Professionals",
                    provider: "Udemy",
                    year: "2021",
                  },
                ].map((training, index) => (
                  <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-white">{training.course}</h4>
                      <span className="text-blue-400 text-xs">{training.year}</span>
                    </div>
                    <p className="text-zinc-400 text-sm mt-1">{training.provider}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-zinc-800" />

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">
              Security <span className="text-blue-400">Projects</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Network Intrusion Detection System",
                  description:
                    "Developed a custom IDS using Python and Scapy to monitor network traffic and detect potential security threats based on signature and anomaly-based detection methods.",
                  tags: ["Python", "Scapy", "Network Security", "Threat Detection"],
                  icon: <Shield className="h-10 w-10 text-blue-400" />,
                },
                {
                  title: "Vulnerability Assessment Framework",
                  description:
                    "Created an automated vulnerability scanning framework that integrates multiple open-source tools to provide comprehensive security assessments of network infrastructure.",
                  tags: ["Bash", "Nmap", "OpenVAS", "Automation"],
                  icon: <Lock className="h-10 w-10 text-blue-400" />,
                },
                {
                  title: "Secure File Encryption Tool",
                  description:
                    "Built a file encryption application with AES-256 encryption that allows secure storage and transfer of sensitive documents with multi-factor authentication.",
                  tags: ["Python", "Cryptography", "AES", "Authentication"],
                  icon: <Database className="h-10 w-10 text-blue-400" />,
                },
                {
                  title: "Security Monitoring Dashboard",
                  description:
                    "Designed and implemented a real-time security monitoring dashboard that aggregates logs from multiple sources and visualizes potential security incidents.",
                  tags: ["ELK Stack", "SIEM", "Data Visualization", "Log Analysis"],
                  icon: <Server className="h-10 w-10 text-blue-400" />,
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="bg-zinc-900 border-zinc-800 backdrop-blur-sm hover:border-blue-500/30 transition-all group"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">{project.icon}</div>
                    <div className="mb-2 h-1 w-12 bg-blue-500 group-hover:w-20 transition-all duration-300"></div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="border-zinc-700 text-blue-300 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator className="bg-zinc-800" />

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">
              Contact <span className="text-blue-400">Information</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-zinc-300">
                      <div className="bg-blue-950/30 p-2 rounded-full">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-zinc-400">Email</p>
                        <a href="mailto:abdulalghanim476@gmail.com" className="hover:text-blue-400 transition-colors">
                          abdulalghanim476@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-zinc-300">
                      <div className="bg-blue-950/30 p-2 rounded-full">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-zinc-400">Phone</p>
                        <span>(813) 474-8982</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">Professional Profiles</h3>
                  <div className="space-y-4">
                    <Link
                      href="https://www.linkedin.com/in/abdul-alghanim/"
                      target="_blank"
                      className="flex items-center space-x-3 text-zinc-300 hover:text-blue-400 transition-colors"
                    >
                      <div className="bg-blue-950/30 p-2 rounded-full">
                        <Linkedin className="h-5 w-5" />
                      </div>
                      <span>LinkedIn Profile</span>
                    </Link>
                    <Link
                      href="https://github.com/Abdul22002"
                      target="_blank"
                      className="flex items-center space-x-3 text-zinc-300 hover:text-blue-400 transition-colors"
                    >
                      <div className="bg-blue-950/30 p-2 rounded-full">
                        <Github className="h-5 w-5" />
                      </div>
                      <span>GitHub Projects</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Abdullrahman Alghanim. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link
              href="https://github.com/Abdul22002"
              target="_blank"
              className="text-zinc-400 hover:text-blue-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdul-alghanim/"
              target="_blank"
              className="text-zinc-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:abdulalghanim476@gmail.com"
              className="text-zinc-400 hover:text-blue-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          
          header, footer, .bg-zinc-900, .fixed {
            display: none !important;
          }
          
          main {
            padding: 0 !important;
          }
          
          section {
            page-break-inside: avoid;
            padding: 10px 0 !important;
          }
          
          h1, h2, h3, h4 {
            color: black !important;
          }
          
          .text-blue-400 {
            color: #3b82f6 !important;
          }
          
          .text-zinc-300, .text-zinc-400 {
            color: #333 !important;
          }
          
          .border-zinc-800, .border-blue-500\\/30 {
            border-color: #ccc !important;
          }
          
          .bg-blue-950\\/30, .bg-zinc-800, .bg-zinc-800\\/30 {
            background-color: #f0f0f0 !important;
          }
        }
      `}</style>
    </div>
  )
}
