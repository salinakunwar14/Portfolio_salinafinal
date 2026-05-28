import { useEffect, useMemo, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  FaAws,
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaEnvelope,
  FaFigma,
  FaFire,
  FaGithub,
  FaGitAlt,
  FaInstagram,
  FaHtml5,
  FaJava,
  FaJs,
  FaLaravel,
  FaLinkedin,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaMobileAlt,
  FaPhoneAlt,
  FaPhp,
  FaPython,
  FaReact,
  FaServer,
  FaFacebook,
} from "react-icons/fa";
import {
  SiAndroidstudio,
  SiDrizzle,
  SiFirebase,
  SiMysql,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

type SkillCategory = {
  title: string;
  icon: ReactNode;
  items: { name: string; icon: ReactNode }[];
};

const navItems = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "workshops",
  "contact",
];

const typedPhrases = [
  "Mobile & Full Stack Developer",
  "AI Enthusiast",
  "Problem Solver",
];

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <FaCode />,
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Mobile Development",
    icon: <FaMobileAlt />,
    items: [
      { name: "React Native", icon: <FaReact /> },
      { name: "Android Studio", icon: <SiAndroidstudio /> },
      { name: "Java", icon: <FaJava /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    title: "Backend & Database",
    icon: <FaServer />,
    items: [
      { name: "PHP", icon: <FaPhp /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Drizzle ORM", icon: <SiDrizzle /> },
    ],
  },
  {
    title: "Tools",
    icon: <FaDatabase />,
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <VscCode /> },
      { name: "Figma", icon: <FaFigma /> },
    ],
  },
];

const projects = [
  {
    title: "PotatoDoc - AI-Powered Potato Disease Diagnosis Platform",
    description:
      "A smart agriculture mobile app built to help farmers identify potato leaf diseases instantly. It uses AI-powered image analysis with 95%+ accuracy and provides quick guidance for timely crop treatment.",
    details:
      "Designed as a practical field tool: upload or capture leaf photos, get predictions in seconds, and store records using Supabase + Drizzle ORM for future monitoring.",
    technologies: [
      "React Native",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Machine Learning",
    ],
    githubUrl: "https://github.com/RegShadbhav041/PotatoDoc",
  },
  {
    title: "Online Voting System",
    description:
      "A secure university election website developed to elect class representatives and student leaders through a transparent digital process.",
    details:
      "Includes voter/candidate registration, login-based authentication, admin dashboard controls, and real-time vote counting with result visualization to reduce manual effort and errors.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com/salinakunwar14/onlinevoting-system",
  },
  {
    title: "WallpaperHub",
    description:
      "A wallpaper sharing web platform where users can upload, browse, and download wallpapers through a clean and organized interface.",
    details:
      "Focused on better content discovery with authentication, search filters, and category-based organization, plus Firebase-backed data flow for smooth user interaction.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Firebase"],
  },
  {
    title: "Tato Aalu - Multiplayer Potato Passing Game",
    description:
      "A fun multiplayer Android game inspired by potato-passing gameplay, built for fast interaction and competitive score challenges.",
    details:
      "Implements realtime player interaction and live score synchronization using Firebase Realtime Database to keep gameplay responsive and engaging.",
    technologies: ["Android Studio", "Java", "Firebase"],
    githubUrl: "https://github.com/salinakunwar14/tato-alu",
  },
  {
    title: "Quiz App",
    description:
      "An interactive Android quiz application designed for quick learning and assessment through multiple-choice question rounds.",
    details:
      "Provides instant score tracking, smooth question navigation, and a simple mobile-first interface that improves user engagement during practice sessions.",
    technologies: ["Android Studio", "Java"],
  },
];

const workshops = [
  { label: "Django", icon: <FaPython /> },
  { label: "AWS", icon: <FaAws /> },
  { label: "Laravel", icon: <FaLaravel /> },
  { label: "Bootstrap", icon: <FaBootstrap /> },
  { label: "Figma", icon: <FaFigma /> },
  { label: "AI & Machine Learning Basics", icon: <FaFire /> },
];

function useTypingEffect(words: string[]) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex === current.length) {
          setDeleting(true);
          return;
        }

        if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
          return;
        }

        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 55 : subIndex === current.length ? 1500 : 95
    );

    return () => clearTimeout(timeout);
  }, [deleting, index, subIndex, words]);

  return `${words[index].slice(0, subIndex)}|`;
}

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, amount: 0.3 },
} as const;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const typedText = useTypingEffect(typedPhrases);
  const profileGitHub = useMemo(() => "https://github.com/salinakunwar14", []);

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-6rem] top-[10%] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-6rem] top-[35%] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
        />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-wide text-white">
            portfolio<span className="text-fuchsia-400">.</span>
          </a>
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="text-sm capitalize text-slate-300 transition hover:text-fuchsia-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
        {mobileOpen && (
          <div className="border-t border-white/10 bg-slate-900/95 px-6 py-4 md:hidden">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="block capitalize text-slate-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl space-y-24 px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:space-y-32">
        <motion.section id="home" {...fadeInUp} className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-fuchsia-950/30 backdrop-blur-xl sm:p-12">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <p className="mb-4 inline-flex rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-fuchsia-300">
                  BIT Student | Developer
                </p>
                <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                  Salina Kunwar
                </h1>
                <p className="mt-4 min-h-[2rem] text-lg text-cyan-300 sm:text-xl">{typedText}</p>
                <p className="mt-5 max-w-3xl text-base text-slate-300 sm:text-lg">
                  Passionate about building innovative applications, AI-powered
                  solutions, and user-friendly digital experiences.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#projects" className="btn-primary">
                    View Projects
                  </a>
                  <a
                    href={profileGitHub}
                    className="btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                    Visit GitHub
                  </a>
                  <a href="#contact" className="btn-secondary">
                    Contact Me
                  </a>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hero-photo-ring mx-auto sm:ml-6 sm:mr-0"
              >
                <img
                  src="/salina-photo.png"
                  alt="Salina Kunwar profile"
                  className="hero-photo"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section id="about" {...fadeInUp} className="section-card">
          <h2 className="section-title">About</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              I am a Bachelor of Information Technology student at Gandaki
              University, currently in my 8th semester.
            </p>
            <p>
              I am passionate about AI, mobile development, and innovative
              technologies that solve real-world challenges.
            </p>
            <p>
              I enjoy problem-solving, practical application development, and
              continuously learning modern tools. I thrive in collaborative
              teams and adapt quickly to new stacks.
            </p>
          </div>
        </motion.section>

        <motion.section id="skills" {...fadeInUp} className="space-y-6">
          <h2 className="section-title">Skills</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="section-card"
              >
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                  <span className="text-fuchsia-300">{category.icon}</span>
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <div key={item.name} className="skill-pill">
                      <span className="text-cyan-300">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" {...fadeInUp} className="space-y-6">
          <h2 className="section-title">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="section-card group flex h-full flex-col"
              >
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 flex-grow text-sm text-slate-300">{project.description}</p>
                <p className="mt-3 text-sm text-slate-400">{project.details}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-pill text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary text-sm"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  ) : (
                    <span className="btn-secondary cursor-not-allowed text-sm opacity-60">
                      <FaGithub />
                      GitHub unavailable
                    </span>
                  )}
                  <span className="btn-secondary cursor-not-allowed text-sm opacity-60">
                    Demo unavailable
                  </span>
                </div>
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/0 to-fuchsia-500/0 opacity-0 blur-2xl transition group-hover:opacity-40" />
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="education" {...fadeInUp} className="section-card">
          <h2 className="section-title">Education</h2>
          <h3 className="text-xl font-semibold text-white">Gandaki University</h3>
          <p className="mt-2 text-slate-300">Bachelor of Information Technology (BIT)</p>
          <p className="text-slate-400">2022 - Present</p>
          <p className="text-cyan-300">Currently in 8th Semester</p>
        </motion.section>

        <motion.section id="workshops" {...fadeInUp} className="section-card">
          <h2 className="section-title">Workshop & Learning</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {workshops.map((item, i) => (
              <motion.div
                key={item.label}
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.12,
                }}
                className="skill-pill"
              >
                <span className="text-fuchsia-300">{item.icon}</span>
                {item.label}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" {...fadeInUp} className="section-card">
          <h2 className="section-title">Contact</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <a className="contact-item" href="mailto:salinawu425@gmail.com">
              <FaEnvelope />
              salinawu425@gmail.com
            </a>
            <a
              className="contact-item"
              href="https://github.com/salinakunwar14"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              github.com/salinakunwar14
            </a>
            <a
              className="contact-item"
              href="https://linkedin.com/in/salina-kunwar-a38319369"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              www.linkedin.com/in/salina-kunwar-a38319369
            </a>
            <a
              className="contact-item"
              href="https://www.instagram.com/_salinnaa01/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
              instagram.com/_salinnaa01
            </a>
            <a
              className="contact-item"
              href="https://www.facebook.com/salina.chhetri.24"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
              facebook.com/salina.chhetri.24
            </a>
            <a className="contact-item" href="tel:+9779816164066">
              <FaPhoneAlt />
              +977 9816164066
            </a>
            <a className="contact-item" href="https://maps.google.com/?q=Pokhara+15+Nepal" target="_blank" rel="noreferrer">
              <FaMapMarkerAlt />
              Pokhara-15, Nepal
            </a>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Salina Kunwar. Built with React.</p>
          <div className="flex items-center gap-4 text-lg">
            <a
              href="https://github.com/salinakunwar14"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-fuchsia-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/salina-kunwar-a38319369"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-fuchsia-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/_salinnaa01/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-fuchsia-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/salina.chhetri.24"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-fuchsia-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="mailto:salinawu425@gmail.com"
              className="transition hover:text-fuchsia-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
