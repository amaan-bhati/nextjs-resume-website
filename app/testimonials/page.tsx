import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="work">
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
      </section>
    </main>
  );
}
