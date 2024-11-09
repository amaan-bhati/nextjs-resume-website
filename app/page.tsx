import { HackathonCard } from "@/components/hackathon-card";
// import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
// import AnimatedGradientText from "@/components/ui/animated-gradient-text";
// import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
// import { BorderBeam } from "@/components/ui/border-beam";
// import { Cover } from "@/components/ui/cover";
// import DotPattern from "@/components/ui/dot-pattern";
// import ShineBorder from "@/components/ui/shine-border";
import { DATA } from "@/data/resume";
// import { cn } from "@/lib/utils";
// import { ChevronRight } from "lucide-react";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
// import GitHubCalendar from "react-github-calendar";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;
// This is the page.tsx file that actually works for the main and the hero page
// It contains the primary content and layout for the home page

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-6">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={0}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm 
                  ${DATA.name.split(" ")[0]}! `}
              />
               {/* <BlurFade
                delay={0}
                // className=" font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}>
                  <p className="text-s sm:text-xs">Building creative and interactive UI in a <Cover>FLASH</Cover></p>
                </BlurFade> */}
              <BlurFadeText
                className="max-w-[600px] md:text-xs"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="flex space-x-4 mt-4">
                  <Link
                    href={DATA.contact.social.GitHub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <DATA.contact.social.GitHub.icon className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
                  </Link>
                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DATA.contact.social.LinkedIn.icon className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
                  </Link>
                  <Link
                    href={DATA.contact.social.X.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DATA.contact.social.X.icon className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/17_n0GDyD6KECGSGHJg8XZBFFVlqRZun9/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-3 py-1 text-sm font-medium text-foreground bg-background border border-foreground rounded hover:bg-foreground hover:text-background transition-colors">
                      Resume
                    </button>
                  </Link>
                  <Link
                    href="https://blog.amaanbhati.tech"
                    rel="noopener noreferrer"
                  >
                    <button className="px-3 py-1 text-sm font-medium text-foreground bg-background border border-foreground rounded hover:bg-foreground hover:text-background transition-colors">
                      Blogs
                    </button> 

                    {/* <AnimatedGradientText className="px-3 py-1 text-sm">
                      
                      <span
                        className={cn(
                          `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                        )}
                      >
                        Resume
                      </span>
                      {/* <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
                    {/* </AnimatedGradientText>  */}

                  </Link>
                </div>{" "}
              </BlurFade>
            </div>
            {/* <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade> */}
          </div>
        </div>
      </section>

     

      <section id="images" className="py-1">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="overflow-hidden rounded-lg border">
              <img
                src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1730496263/hacktoberfest.webp"
                alt="HacktoberfestXmlsa"
                className="w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg border">
              <img
                src="/deffcon.webp"
                alt="DEFCON"
                className="w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg border">
              <img
                src="/web-team.webp"
                alt="MLSA Project Wing"
                className="w-full h-full"
              />
            </div>
            
            <div className="overflow-hidden rounded-lg border">
              <img
                src="https://res.cloudinary.com/dqwbkjfuh/image/upload/c_scale,h_960,w_750/v1730496263/the-stark-expo.webp"
                alt="The Stark Expo"
                className="w-full h-full"
              />
            </div>
          </div>
        </BlurFade>
      </section>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <section id="github">
          <GitHubCalendar username={"amaan-bhati"} />
        </section>
      </BlurFade>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-2xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

     
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-2xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-3xl">
              Skills, tech stack and tools
            </h2>

            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Langauges</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Frontend</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.frontendSkills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>

            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Backend</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.backendSkills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>

            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Tools</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.tools.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
            {/* </div> */}
          </div>
        </BlurFade>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl">
                    Check out my work
                  </h2>
                </div>
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Personal Projects
                </div>

                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a wide range of projects across multiple
                  tech stacks, exploring various domains beyond just web
                  development—driven by curiosity and a passion for learning.
                  All of these projects are available on my GitHub, but here are
                  a few of my personal favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Lead/Group Projects
                </div>

                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve lead, made and worked on a variety of projects, from
                  simple websites to complex web applications. Here are a few of
                  my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.LeadProjects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                {/* <ShineBorder
                  className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                > */}
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                {/* </ShineBorder> */}
                {/* <BorderBeam size={250} duration={12} delay={9} /> */}
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      {/* <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to talk about potential opportunities, modern libraries and frameworks or anything related to tech in general? Reach out to me on my {" "}
                <Link
                  href={"https://contact.amaanbhati.tech"}
                  className="text-blue-500 hover:underline"
                >
                  socials
                </Link>{" "}
                , Let's have a quick chat.
              </p>
            </div>
          </BlurFade> 
        </div>
      </section>*/}

      {/* <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-3xl font-bold">Testimonials</h2>
          </BlurFade>
          {DATA.testimonials.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h4 className="text-s font-semi-bold">
              Worked with me? know me personally? or liked my work? Feel free to
              share your opinion about my work on this{" "}
              <a
                href="https://forms.gle/DuJDvQ5e6VhKf7et8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                form
              </a>{" "}
              and your testimonial will be added in this section too!
            </h4>
          </BlurFade>
        </div>
      </section> */}

      <section id="portfolio">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl">
                  Previous portfolios
                </h2>
                <p className=" text-muted-bold-foreground md:text-xs/relaxed s:text-base/relaxed s:text-s/relaxed">
                  Portfolios are very important as a developer to showcase your
                  skills, work and to connect with like minded people and
                  potential employers. But above all it is also an opportunity
                  for a developer to stay updated with the design trends. Ive
                  been working as a web develper since 2021, where Ive seen
                  design trends change drastically from just static html, css
                  websites, to complex and attractive 3d websites and now simple
                  and very well performing bento grids in 2024. Ive made them
                  all, and hence heres a bunch of my previous portfolios.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.portfolio.map((portfolio, id) => (
              <BlurFade
                key={portfolio.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
              {/* <ShineBorder
                  className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >  */}
                <ProjectCard
                  href={portfolio.href}
                  key={portfolio.title}
                  title={portfolio.title}
                  description={portfolio.description}
                  dates={portfolio.dates}
                  tags={portfolio.technologies}
                  image={portfolio.image}
                  video={portfolio.video}
                  links={portfolio.links}
                />
                {/* </ShineBorder> */}
              </BlurFade>
            ))}
          </div>
        </div>
        {/* <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        /> */}
        {/* <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      /> */}
      </section>
    </main>
  );
}
