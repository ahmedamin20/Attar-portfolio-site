'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, ExternalLink, Mail, Linkedin, ArrowUp, Moon, Sun, ImageIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const experiences = [
  {
    title: "Senior Backend Developer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: "Led backend development for high-traffic e-commerce platform. Implemented microservices architecture using Node.js and Docker. Optimized database queries, improving overall system performance by 30%."
  },
  {
    title: "Backend Developer",
    company: "Data Systems LLC",
    period: "2018 - 2020",
    description: "Developed RESTful APIs for financial data processing. Optimized database queries, improving response times by 40%. Implemented robust error handling and logging systems."
  }
]

const projects = [
  {
    title: "E-commerce Platform",
    description: "Scalable backend for a major retail client. Handled 1M+ daily transactions.",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://example-ecommerce.com",
    mainImage: "https://placehold.co/600x400/EEE/31343C",
    images: [
      "https://placehold.co/600x400/EEE/31343C",
      "https://placehold.co/600x400/EEE/31343C",
      "https://placehold.co/600x400/EEE/31343C",
    ]
  },
  {
    title: "Data Analytics Pipeline",
    description: "Real-time data processing pipeline for IoT devices. Processed 5TB of data daily.",
    technologies: ["Python", "Apache Kafka", "Elasticsearch", "Docker"],
    github: "https://github.com/yourusername/data-pipeline",
    live: "https://example-analytics.com",
    mainImage: "https://placehold.co/600x400/EEE/31343C",
    images: [
      "https://placehold.co/600x400/EEE/31343C",
      "https://placehold.co/600x400/EEE/31343C",
      "https://placehold.co/600x400/EEE/31343C",
    ]
  },
  {
    title: "Microservices Architecture",
    description: "Designed and implemented a microservices-based backend for a social media platform.",
    technologies: ["Go", "gRPC", "PostgreSQL", "RabbitMQ", "Kubernetes"],
    github: "https://github.com/yourusername/social-media-microservices",
    live: "https://example-social.com",
    mainImage: "https://placehold.co/600x400/EEE/31343C",
    images: [
      "https://placehold.co/600x400/EEE/31343C",
      "https://placehold.co/600x400/EEE/31343C",
      "https://placehold.co/600x400/EEE/31343C",
    ]
  }
]

interface SkillInterface {
  name: string,
  imageUrl: string
}

const skills: SkillInterface[] = [
  { name: "JavaScript", imageUrl: "https://placehold.co/300x300/EEE/31343C" },
  { name: "Python", imageUrl: "/placeholder.svg?height=100&width=100" },
  { name: "Node.js", imageUrl: "/placeholder.svg?height=100&width=100" },
  { name: "Docker", imageUrl: "/placeholder.svg?height=100&width=100" },
  { name: "MongoDB", imageUrl: "/placeholder.svg?height=100&width=100" },
  { name: "SQL", imageUrl: "/placeholder.svg?height=100&width=100" },
  { name: "AWS", imageUrl: "/placeholder.svg?height=100&width=100" },
  { name: "Kubernetes", imageUrl: "/placeholder.svg?height=100&width=100" },
]

export default function Portfolio() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<string>('experience')
  const [isVisible, setIsVisible] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const tabFromURL = searchParams.get('tab')
    if (tabFromURL) {
      setActiveTab(tabFromURL)
    }
  }, [searchParams])

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    router.push(`?tab=${tab}`)
  }

  useEffect(() => {
    setIsVisible(true)
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      if (prev) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      return !prev;
    });
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <div className="bg-background text-foreground transition-colors duration-200 min-h-screen p-8">
          <motion.header
            className="max-w-4xl mx-auto mb-12 text-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h1 className="text-4xl font-bold mb-4">Mohamed Attar</h1>
            <p className="text-xl text-muted-foreground mb-4">Backend Developer With Laravel And .NET</p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:mohammedattar0100020@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/MohammedElattar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" onClick={toggleDarkMode}>
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </motion.header>

          <Tabs value={activeTab} onValueChange={handleTabChange} defaultValue="experience" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="experience">
              <motion.section
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription>{exp.company} | {exp.period}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{exp.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.section>
            </TabsContent>

            <TabsContent value="projects">
              <motion.section
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <h2 className="text-2xl font-semibold mb-6">Projects</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {projects.map((project, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <img src={project.mainImage} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                        <div className="mb-4">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="mr-2 mb-2">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-4">
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <ImageIcon className="mr-2 h-4 w-4" />
                                View Images
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                              <div className="grid grid-cols-2 gap-4">
                                {project.images.map((img, i) => (
                                  <img key={i} src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-auto rounded-md" />
                                ))}
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.section>
            </TabsContent>

            <TabsContent value="skills">
              <motion.section
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <h2 className="text-2xl font-semibold mb-6">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img src={skill.imageUrl} alt={skill.name} className="w-16 h-16 mb-2" />
                      <p className="text-lg font-medium">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            </TabsContent>


            <TabsContent value="contact">
              <motion.section
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
                <div className="space-y-4 max-w-lg mx-auto">
                  <Input type="text" placeholder="Your Name" className="mb-4" />
                  <Input type="email" placeholder="Your Email" className="mb-4" />
                  <Textarea placeholder="Your Message" className="mb-4" />
                  <Button className="w-full" variant={"secondary"}>
                    Send Message
                  </Button>
                </div>
              </motion.section>
            </TabsContent>
          </Tabs>

          <AnimatePresence>
            {showScrollTop && (
              <motion.div
                className="fixed bottom-8 right-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="outline" size="icon" onClick={scrollToTop}>
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Suspense>
  )
}