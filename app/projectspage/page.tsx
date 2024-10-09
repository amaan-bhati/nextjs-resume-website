import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
// import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-3">
       <section id="projects">
        <div className="space-y-10 w-full py-0">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-3 text-center">                
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl">
                    Check out my work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve lead, made and worked on a variety of projects, from
                  simple websites to complex web applications. Here are a few of
                  my favorites.
                </p>
                </div>
                {/* <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve lead, made and worked on a variety of projects, from
                  simple websites to complex web applications. Here are a few of
                  my favorites.
                </p> */}
              
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
                             
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.LeadProjects.map((project, id) => (
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
                  UI Projects
                </div>
                
                
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.uiProjects.map((project, id) => (
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
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
