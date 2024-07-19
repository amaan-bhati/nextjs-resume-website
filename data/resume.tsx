import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  
  name: "Amaan Bhati",
  initials: "AB",
  url: "https://amaanbhati.tech",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/bangalore",
  description:
    "Web Developer with 2+ years of web development experience, aspiring a fulltime software developer role.",
  summary:
    "Result driven final year Computer Science student with a strong aptitude for development and proficiency in modern frameworks. Eager to contribute technical skills and innovation to a dynamic software engineering role in a cutting-edge tech environment. Recognized for being a quick learner with the ability to swiftly adapt to new technology stacks",
  avatarUrl: "/me.png",
  skills: [
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
    "Nodejs",
    "Expressjs",
    "Mongodb",
    "Postgres",
    "Postman",
    "Supabase",
    "NeonDB",
    "VS Code",
    "GIT",
    "Github",
    "Bash",
    
  ],
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

   navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "#", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "amaanbhati49@gmail.com",
    tel: "6200658194",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/amaan-bhati",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/amaan-bhati",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/front_end_er",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "KIIT Digital",
      href: "https://kiit.ac.in",
      badges: [],
      location: "Om-Site",
      title: "Web and Software intern",
      logoUrl: "/kiit-logo.webp",
      start: "Feb 2024",
      end: "June 2024",
      description:
        "~KIIT Digital is the tech backbone of KIIT University, responsible for crafting user-friendly interfaces for all university school and conference websites. KIIT Digital also manage and support software applications crucial for the Computer Science & Engineering department, ensuring smooth operation for faculty and students. I worked as a Web/Software developer in order to develop and implement responsive user interfaces (UIs) and software for multiple KIIT University school and conference websites. I also Collaborated closely with KIIT Digital designers to translate UI mockups into user-friendly front-end code. Optimized website UIs for improved user experience (UX) and faster loading times, adhering to best practices for web performance. Implemented accessibility features to ensure all users can navigate KIIT University websites effectively. Utilized modern software technologies to build dynamic and interactive website elements.Established a code review process to maintain code quality and consistency across KIIT Digital projects.",
    },
    {
      company: "Microsoft Learn Student Ambassador, KIIT Chapter",
      badges: [],
      href: "https://mlsakiit.com",
      location: "On-Site",
      title: "Web Development Lead",
      logoUrl: "/mlsa-logo.webp",
      start: "July 2023",
      end: "July 2024",
      description:
        "Led High-Performing Tech Team: Managed a team of 20+ designers, front-end, and back-end developers, fostering collaboration and driving project success. Oversaw the development of multiple high-traffic website, ensuring high functionality and scalability. Led initiatives to build a vibrant tech community, attracting, hosting and engaging aspiring developers through various events and activities. Pioneered High-Traffic Community Website: Led the design and development of the official MLSAKIIT website, utilizing Figma for UI/UX design and leveraging cutting-edge Next.js and Tailwind CSS frameworks. The website efficiently handles high traffic due to its robust architecture and scalability.Implemented the idea of user dashboard and digital passes for tech events making the entry smooth and fast using Next.js when it was not yet mainstream.",
    },
    
  ],
  education: [
    {
      school: "KIIT University",
      href: "https://kiit.ac.in",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/kiit-logo.webp",
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
  // hackathons: [
  //   {
  //     title: "",
  //     dates: "",
  //     location: "",
  //     description:
  //       "",
  //     image:
  //       "",
  //     mlh: "",
  //     links: [],
  //   },
  //   ,
} as const;
