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
    "Result driven final year Computer Science student with a strong aptitude for development and proficiency in modern frameworks. Eager to contribute technical skills and innovation to a dynamic software engineering role in a cutting-edge tech environment. Recognized for being a quick learner with the ability to swiftly adapt to new technology stacks.",
  avatarUrl: "/me.webp",
  skills: [
    "Javascript", "Typescript", "HTML", "CSS", "SQL", "C++", "Python"

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
    { href: "/blog", icon: PencilLine , label: "Blog" },
    { href: "/testimonials", icon: NotebookIcon, label: "Testimonials" },
    // { href: "/projects", icon: CodeIcon, label: "Projects" },
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

    {
      company: "GSSoC",
      badges: [],
      href: "https://gssoc.girlscript.tech/",
      location: "Remote",
      title: "Open Source Mentor",
      logoUrl: "/gssoc-logo.webp",
      start: "May 2024",
      end: "Aug 2024",
      description:
        "",
    },

    {
      company: "KIITFEST",
      badges: [],
      href: "https://kiitfest.org",
      location: "On-Site",
      title: "Web Developer",
      logoUrl: "/kiitfest-logo.webp",
      start: "Dec 2023",
      end: "Feb 2024",
      description:
        "",
    },

    {
      company: "Ziroh Labs",
      badges: [],
      href: "https://ziroh.social",
      location: "On-Site",
      title: "EWL Project Member",
      logoUrl: "/ziroh-labs-logo.webp",
      start: "Nov 2023",
      end: "Jan 2024",
      description:
        "",
    },

    
    {
      company: "TEDxKIIT",
      badges: [],
      href: "https://tedxkiituniversity.in",
      location: "On-Site",
      title: "Web Developer and OC member",
      logoUrl: "/tedx.webp",
      start: "Mar 2023",
      end: "Apr 2023",
      description:
        "",
    },
   
    
  ],

  education: [
    {
      school: "KIIT University, Bhubaneswar",
      href: "https://kiit.ac.in",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/kiit-logo.webp",
      start: "2021",
      end: "2025",
    },
    {
      school: "Pitts Modern School, Bokaro",
      href: "https://kiit.ac.in",
      degree: "Upto class 10th and High School education in PCM and CS",
      logoUrl: "/pms-logo.webp",
      start: "2008",
      end: "2021",
    },
   
   
  ],
 
  projects: [
    //zeroth-project
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

    {//first-project
      title: "React Moodboard",
      href: "https://moodboardbyamaan.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "This project is a user-friendly, interactive moodboard application built with React.js. It empowers users to create visually inspiring collages through intuitive drag-and-drop functionality.",
      technologies: [
        "React.js",
        "Javascript",
        "CSS",
        "Emotion",
      ],
      links: [
        {
          type: "Website",
          href: "https://moodboardbyamaan.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/amaan-bhati/react-moodboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

//second-project
    {
      title: "Dice roller Threejs",
      href: "https://dice-roller-blond.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "This project is a fun and interactive dice roller application featuring two animated 3D dice models. It simulates a realistic dice roll with animation and provides the sum of both dice as the final output.",
      technologies: [
        "HTML",
        "Threejs",
        "CSS",
        "HTML Canvas",
      ],
      links: [
        {
          type: "Website",
          href: "https://dice-roller-blond.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/amaan-bhati/dice-roller-threejs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

//third-project
    {
      title: "Drag and drop using computer vision",
      href: "https://github.com/amaan-bhati/drag-and-drop-computer-vision",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Finger Drag & Drop (Python & OpenCV) Control your screen with your fingers! Use computer vision to drag and drop objects for an intuitive and touchless user experience.",
      technologies: [
        "Python",
        "Opencv",
        "Computer Vision",
      ],
      links: [
       
        {
          type: "Source",
          href: "https://github.com/amaan-bhati/drag-and-drop-computer-vision",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

    //fourth-project
    {
      title: "HEX code opacity Generator",
      href: "https://hexcode-opacity-generator.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "This React.js application empowers you to explore the vast world of color possibilities while streamlining your design process. It serves as a user-friendly hex code opacity generator, offering a convenient and efficient way to generate and adjust hex color codes with varying levels of transparency.",
      technologies: [
        "Reactjs",
        "Javascript",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://hexcode-opacity-generator.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/amaan-bhati/hex-code-generatore",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

    //fifth-card

    {
      title: "Other Projects",
      href: "https://github.com/amaan-bhati",
      dates: "Nov 2021 - Present",
      active: true,
      description:
        "Check out all of my projects by visiting my github and checking out all of the project repositiories. Each project repository contains the source code for the project, detailed about section explaining the project and even live links on each project in case of web development based projects",
      technologies: [
        
      ],
      links: [
        {
          type: "Website",
          href: "https://amaanbhati.tech/projects/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/amaan-bhati",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    
   
  ],

  testimonials: [
    {
      company: "Chatgpt",
      href: "",
      badges: [],
      location:"",
      title: "AI Tool at Openai",
      logoUrl: "/chatgpt-logo.webp",
      start: "",
      end: "",
      description:
        "Hi Amaan, thanks for always bringing the best out of my potetntial whilst always being polite with me. You're amazing!",
    },
    {
      company: "D Chadrashekhar Reddy",
      badges: [],
      href: "https://instagram.com/_shekhar_reddy_",
      location: "On-Site",
      title: "Student at KIIT Bhubaneswar",
      logoUrl: "/shekhar.webp",
      start: "",
      end: "",
      description:
        "I've had the pleasure of knowing Amaan for the past three years, and I can confidently say that he's not only an exceptional developer but also a remarkable individual. During our time in college, Amaan quickly became the go-to person for anyone needing tech-related assistance or general advice. His vast knowledge across various tech stacks and his willingness to help others—regardless of the complexity of the issue—truly set him apart. Beyond his technical expertise, Amaan is incredibly approachable and patient, qualities that make him a pleasure to work with. He has faced both ups and downs, and his growth and gratitude for his experiences only add to his character. Amaan's dedication, combined with his genuine nature, makes him a standout professional and a wonderful person",
    },
    
    {
      company: "Pradipto Chowdhury",
      badges: [],
      href: "https://www.linkedin.com/in/pradipto-chowdhury-36992222b",
      location: "On-Site",
      title: "Ex Visiting Researcher - The University of Tromsø, Norway",
      logoUrl: "/pradipto.webp",
      start: "",
      end: "",
      description:
        "Amaan is an exceptional professional with whom I collaborated on a benchmarking-based minor project. His development background, consistency in delivering high-quality work, and ability to tackle complex problems sets him apart. Despite his impressive skills, he remains down-to-earth and humble. He approaches each task with genuine enthusiasm and a willingness to learn, never hesitating to seek input or share his knowledge. His clear communication and patience in explaining technical concepts make him an invaluable team member and an asset to any project or team.",
    },
    

    {
      company: "Alok Kumar Jha",
      badges: [],
      href: "https://www.linkedin.com/in/alok-kumar-jha-316572224",
      location: "On-Site",
      title: "Ex-SDE Intern at Dell",
      logoUrl: "/alok-jha.webp",
      start: "",
      end: "",
      description:
        "Amaan is a creative and talented individual. His technical expertise, combined with his eagerness to learn and experiment, make him an outstanding developer. Having worked with him on various hackathons and projects, I have witnessed his problem-solving abilities and deep technical knowledge firsthand. Beyond his technical skills, Amaan excels as a team leader and communicator while also being a great team player.",
    },

    {
      company: "Nandini Pahuja",
      badges: [],
      href: "https://www.linkedin.com/in/nandini-pahuja-b81774277?trk=blended-typeahead",
      location: "On-Site",
      title: "3rd year student at KIIT University",
      logoUrl: "/Nandini.webp",
      start: "",
      end: "",
      description:
        "Amaan Bhati is not only intelligent but also exceptionally hardworking. Whether it’s his own tasks or assisting others, he remains committed until everything is complete. Working with him has always been a pleasure, as his focus is on both personal growth and helping others achieve the same. His ultimate goal is to broaden knowledge and enhance expertise. Additionally, his sense of humor is commendable. As a team lead, he skillfully navigates the next steps while maintaining a healthy work-life balance for himself and his team.",
    },

   

  ],

  portfolio: [
    //zeroth-project
    {
      title: "React typing js portfolio",
      href: "https://amaanbhati.tech",
      dates: "June 2022 - Present",
      active: true,
      description:
        "One of the notable designs I created is built on top of ReactJS, standing tall and responsive for the last two years. This website features a typing effect on the landing page and Particle.js in the background, which was the most trending design pattern for two consecutive years in 2022 and 2023. The typing effect wasn't just popular in portfolio websites but also became a staple in many modern websites of that era. However, this design trend had a dual nature. While the animations in the loader, landing page background, and throughout the website were eye-catching and visually appealing, they came with significant drawbacks. These animations required considerable time to load and perform flawlessly, especially without caching. This not only increased the load time but also affected the website's bandwidth usage, making it more expensive to host and deploy on a domain. Additionally, the performance of the website suffered, with scores below 70 on desktop and below 50 on mobile devices. This led to a poor user experience due to slow loading times and high bandwidth consumption.",
      technologies: [
        "React.js",
        "Javascript",
        "CSS",
        "Typingjs",
        "Particlejs",
      ],
      links: [
        {
          type: "Website",
          href: "https://amaan-bhati.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
       
      ],
      image: "",
      video: "",
    },


    {
      title: "Nextjs static bento grid",
      href: "https://contact.amaanbhati.tech",
      dates: "May 2024 - Present",
      active: true,
      description:
        "Built upon Next.js and TailwindCSS, and enhanced with subtle Framer animations, this website employs the innovative Bento Grid design system of 2024. It features a static and straightforward layout where elements, designed as boxes or cards, are distributed randomly, eschewing parallelism for a dynamic visual appeal. This design is inspired by the Bento Grids system, an advanced iteration of Linktree, which allows users to consolidate links to various social media profiles and other important resources in one streamlined interface. The website is optimized for performance, boasting incredibly fast load and render times that enhance the user experience by 200%. It achieves a perfect SEO score of 100 for both mobile and desktop views, thanks to its minimal bandwidth usage. This efficiency not only ensures a seamless user experience but also provides a cost-effective deployment solution, making it both user-friendly and economical.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Framer-Motion",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://contact.amaanbhati.tech",
          icon: <Icons.globe className="size-3" />,
        },
       
      ],
      image: "",
      video: "",
    },

    {
      title: "3d Portfolio Website using threejs",
      href: "https://contact.amaanbhati.tech",
      dates: "Oct 2022 - Present",
      active: true,
      description:
        "One of the most accomplished projects is a 3D website built using ReactJS, vanilla CSS, GSAP and Three.js, with Vite for efficient builds. This site was based on the 3D web design trend that surged in popularity in 2022 and 2023, celebrated for its visual appeal and technical sophistication. The website's centerpiece is a captivating 3D model on the landing page, crafted with Three.js, which immediately engages users and sets a dynamic tone for their experience. The design is a masterclass in minimalism, balancing simplicity with innovation. The layout is clean, allowing the 3D features to stand out without overwhelming the user. The color scheme is deliberately minimalistic, offering both light and dark modes that are equally aesthetically pleasing. The light mode provides a fresh, modern look, while the dark mode adds a sleek, sophisticated feel, ensuring the site is visually appealing in any context. Despite the challenges inherent in 3D web design, particularly in maintaining performance, this project successfully optimizes load times and ensures a smooth user experience, a common issue in 3D-heavy sites.",
      technologies: [
        "Reactjs",
        "Javascript",
        "CSS",
        "GSAP",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://amaanbhati3dportfolio.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
       
      ],
      image: "",
      video: "",
    },  

  ],
  
} as const;
