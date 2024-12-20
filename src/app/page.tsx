'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FaGithub,
  FaEnvelope,
  FaLinkedinIn,
  FaArrowUp,
  FaMoon,
  FaSun,
  FaRegImages,
  FaExternalLinkSquareAlt,
  FaWhatsapp
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
];

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
];

const skills = [
  { name: "JavaScript", imageUrl: "https://placehold.co/300x300/EEE/31343C" },
  { name: "Python", imageUrl: "/placeholder.svg?height=100&width=100" }
];

export default function Portfolio() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>('experience');
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
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
  useEffect(() => {
    const tabFromURL = searchParams.get('tab');
    if (tabFromURL) {
      setActiveTab(tabFromURL);
    }
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`?tab=${tab}`);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      if (!prev) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return !prev;
    });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
                  <FaEnvelope className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/MohammedElattar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaWhatsapp className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" onClick={toggleDarkMode}>
                {isDarkMode ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
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
                              <FaGithub className="mr-2 h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <FaExternalLinkSquareAlt className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <FaRegImages className="mr-2 h-4 w-4" />
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
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block my-1 text-sm font-medium text-foreground">Name</label>
                        <Input id="name" placeholder="Your Name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                        <Textarea id="message" placeholder="Your message here..." />
                      </div>
                      <Button type="submit">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.section>
            </TabsContent>
            <TabsContent value="experience">
              <motion.section initial="hidden" animate="visible" variants={fadeIn}>
                <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
                {experiences.map((exp, index) => (
                  <Card className='my-2' key={index}>
                    <CardHeader>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>{exp.company} | {exp.period}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
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
                  <FaArrowUp className="h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Suspense>
  );
}
