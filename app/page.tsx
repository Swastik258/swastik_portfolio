import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Briefcase, GitBranch, Globe, Mail, MapPin, MoveRight, Phone, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SkillCluster } from "@/components/skill-cluster";
import { experience, heroWords, navItems, projects, socialLinks, stats, skillGroups } from "@/lib/site-data";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#121513] text-stone-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(133,155,122,0.1),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(190,205,186,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(190,205,186,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />

      <header className="sticky top-0 z-50 border-b border-[#303832] bg-[#121513]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#top" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-[#71876b] bg-[#263126] font-mono text-sm font-semibold text-[#c5dbbc]">
              SP
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-stone-400">Swastik</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a7c69b]">SRE / DevOps</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-stone-400 transition hover:text-[#c5dbbc]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#71876b] bg-[#263126] px-4 py-2 text-sm font-medium text-[#d5e8ce] transition hover:border-[#a7c69b] hover:bg-[#303d30]"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <section id="top" className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 border border-[#3a463c] bg-[#1b211d] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-stone-300">
              <span className="h-2 w-2 rounded-full bg-[#a7c69b]" />
              Available for opportunities
            </div>

            <div className="space-y-6">
              <p className="font-mono text-sm uppercase tracking-[0.22em] text-[#a7c69b]">
                Site Reliability Engineer • Cloud Automation
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-[#f1f1eb] md:text-6xl xl:text-7xl">
                Swastik Pradhan
              </h1>
              <div className="flex items-center gap-3 text-xl text-stone-300 md:text-2xl">
                <span className="font-medium">DevOps / Site Reliability Engineer</span>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-stone-400">
                I build resilient CI/CD pipelines, automate cloud infrastructure as code, and set up observability that cuts release times and incident response by up to 40%.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[#a7c69b] px-5 py-3 text-sm font-medium text-[#172016] transition hover:bg-[#c5dbbc]"
              >
                View Projects
                <MoveRight className="h-4 w-4" />
              </a>
              <a
                href="/Swastik_Pradhan_Resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-[#3a463c] bg-[#1b211d] px-5 py-3 text-sm font-medium text-stone-200 transition hover:border-[#a7c69b] hover:bg-[#263126]"
              >
                Download Resume
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-[#3a463c] bg-transparent px-5 py-3 text-sm font-medium text-stone-300 transition hover:border-[#a7c69b] hover:text-[#d5e8ce]"
              >
                Get in Touch
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-3 text-sm text-slate-300">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name === "Email" ? undefined : "_blank"}
                  rel={link.name === "Email" ? undefined : "noreferrer"}
                  className="inline-flex items-center gap-2 border border-[#3a463c] bg-[#1b211d] px-3 py-2 transition hover:border-[#a7c69b] hover:text-[#d5e8ce]"
                >
                  {link.name === "GitHub" ? <GitBranch className="h-4 w-4" /> : link.name === "LinkedIn" ? <Globe className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                  <span>{link.handle}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 bg-[#a7c69b]/[0.06] blur-2xl" />
            <div className="relative overflow-hidden border border-[#303832] bg-[#1b211d] p-5">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#754c46]" />
                  <span className="h-3 w-3 rounded-full bg-[#8f7a4c]" />
                  <span className="h-3 w-3 rounded-full bg-[#78956d]" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a7c69b]">
                  prod.monitor
                </div>
              </div>

              <div className="space-y-6">
                <div className="border border-[#52634f] bg-[#263126] p-4">
                  <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-cyan-200/80">
                    <span className="font-mono">Service health</span>
                    <span className="text-emerald-300">99.98%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden bg-[#151a17]">
                    <div className="h-full w-[99%] bg-[#a7c69b]" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      pipeline
                    </span>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                      healthy
                    </span>
                  </div>
                  <div className="flex items-end gap-2">
                    {[30, 54, 38, 72, 68, 92, 100, 96, 88, 74, 86, 98].map((height, index) => (
                      <div key={height + index} className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-500 via-sky-400 to-violet-500" style={{ height: `${height}px` }} />
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      stack
                    </span>
                    <Sparkles className="h-4 w-4 text-cyan-300" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {heroWords.map((word) => (
                      <span
                        key={word}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-200"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="border border-[#303832] bg-[#1b211d] p-6">
            <SectionHeading eyebrow="About" title="Production-minded systems engineer." />
          </div>
          <div className="space-y-6 border border-[#303832] bg-[#1b211d] p-6">
            <p className="text-lg leading-8 text-slate-200">
              Bengaluru, India. 2+ years production experience across AWS, Azure, Kubernetes, and Terraform. Builds CI/CD pipelines, automates infra with IaC, and sets up SLA-aligned observability.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <MapPin className="h-4 w-4 text-cyan-300" />
                Bengaluru, India
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <Briefcase className="h-4 w-4 text-violet-300" />
                2+ years production experience
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Release velocity, system resilience, and signal quality."
          description="Recent work across cloud operations, observability architecture, and automated delivery systems."
        />

        <div className="mt-12 space-y-8">
          {experience.map((job) => (
            <div key={job.company} className="relative grid gap-6 lg:grid-cols-[220px_1fr]">
              <div className="lg:pt-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-cyan-300/80">
                  {job.period}
                </div>
              </div>

              <div className="relative border border-[#303832] bg-[#1b211d] p-6">
                <div className="absolute -left-4 top-7 hidden h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 lg:block" />
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{job.company}</h3>
                    <p className="mt-1 text-lg text-cyan-200">{job.role}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <span>{job.location}</span>
                  </div>
                </div>

                <ul className="space-y-3 text-base leading-7 text-slate-300">
                  {job.achievements.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tooling and automation for resilient systems."
          description="A practical stack built for production delivery, observability, and infrastructure scale."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCluster key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured projects"
          title="Platform work with measurable outcomes."
          description="Selected work spanning self-healing AWS automation, real-time monitoring, and sustainability tooling."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="education" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 backdrop-blur-xl">
          <SectionHeading eyebrow="Education" title="B.E. Computer Science" description="Visvesvaraya Technological University, Bengaluru — Aug 2019–Aug 2023" />
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border border-[#303832] bg-[#1b211d] p-8">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build the next reliable release pipeline."
              description="Open to platform engineering, SRE, and DevOps opportunities where automation and observability can drive measurable outcomes."
            />
            <div className="mt-8 space-y-4 text-slate-300">
              <a
                href="mailto:swastik.pradhan.sre@gmail.com"
                className="flex items-center justify-between gap-4 border border-[#52634f] bg-[#263126] px-4 py-3 text-[#d5e8ce] transition hover:border-[#a7c69b]"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#a7c69b]" />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-[#a7c69b]">Email directly</span>
                    <span className="block break-all">swastik.pradhan.sre@gmail.com</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>
              <a href="tel:+918144426649" className="flex items-center gap-3 transition hover:text-cyan-200">
                <Phone className="h-5 w-5 text-cyan-300" />
                +91 81444 26649
              </a>
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
                <span>Status: available for opportunities</span>
              </div>
            </div>
          </div>

          <form action="mailto:swastik.pradhan.sre@gmail.com" method="post" encType="text/plain" className="border border-[#303832] bg-[#1b211d] p-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">Name</label>
                <input id="name" name="name" type="text" className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">Email</label>
                <input id="email" name="email" type="email" className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60" placeholder="Tell me about your team, stack, or deployment goals." />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_34px_rgba(59,130,246,0.35)] transition hover:-translate-y-0.5">
                Send message
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target={link.name === "Email" ? undefined : "_blank"} rel={link.name === "Email" ? undefined : "noreferrer"} className="transition hover:text-cyan-200">
                {link.name}
              </a>
            ))}
          </div>
          <p>Built with Next.js, deployed on Vercel.</p>
        </div>
      </footer>
    </main>
  );
}
