import { Icons } from "@/components/icons";
import { Contact } from "lucide-react";

export const DATA = {
  name: "Amaan Bhati",
  initials: "DV",
  url: "https://amaanbhati.tech",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/bangalore",
  description:
    "Result driven final year Computer Science student with a strong aptitude for development and proficiency in modern frameworks. Eager to contribute technical skills and innovation to a dynamic software engineering role in a cutting-edge tech environment. Recognized for being a quick learner with the ability to swiftly adapt to new technology stacks",
  // summary:
  //   "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the period 2021 - 2025, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: ["Javascript", "Typescript", "HTML", "CSS", "SQL", "C++", "Python"],
  frontendSkills: [
    "React.js",
    "Next.js",
    "Redux",
    "Three.js",
    "CSS",
    "TailwindCSS",
    "Shadcn",
    "Magic UI",
    "SCSS",
    "Framer Motion",
    "GSAP",
  ],
  backendSkills: [
    "Nodejs",
    "Expressjs",
    "Mongodb",
    "Postgres",
    "Postman",
    "Supabase",
    "NeonDB",
  ],
  tools: [
    "VS Code",
    "GIT",
    "Github",
    "Bash",
    "AWS EC2",
    "AWS S3",
    "Wappalyzer",
    "Lighthouse",
    "Docker",
    "Vercel",
    "Netlify",
    "Vite",
    "SketchFab",
    "Postman",
    "Figma",
    "Chatgpt",
  ],
  contact: {
    email: "amaanbhati49@gmail.com",
    tel: "6200658194",
    social: {
      GitHub: {
        url: "https://github.com/amaan-bhati",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/amaan-bhati/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/front_end_er",
        icon: Icons.x,
      },
      
    },
  },

  work: [
    {
      company: "KIIT Digital",
      href: "https://kiit.ac.in",
      badges: [],
      location: "On-Site",
      title: "Web and Software Developer",
      logoUrl: "/kiit.png",
      start: "Feb 2024",
      end: "May 2024",
      description:
        "",
    },

    {
      company: "MLSAKIIT",
      href: "https://mlsakiit.com",
      badges: [],
      location: "On-Site",
      title: "Web Dev Lead",
      logoUrl: "/mlsa-logo.png",
      start: "July 2023",
      end: "July 2022",
      description:
        "",
    },
    
  ],
  education: [
    {
      school: "KIIT Bhubaneswar",
      href: "https://kiituniversity.com",
      degree: "B.Tech in Computer Science and Engineering (CSE)",
      logoUrl: "/kiit.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "GITHUB LANDING PAGE CLONE",
      href: "https://github-clone-by-amaan.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "GitHub landing page, meticulously crafted with Next.js, Tailwind CSS, and TypeScript. It boasts pixel-perfect visual fidelity, replicating the original's text animations, fonts, colors, and even animations. Built on top of Next.js, Tailwind CSS, and TypeScript.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://github-clone-by-amaan.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/amaan-bhati/github-landing-page-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
