"use client";

import { ArrowUpRight, GitBranchPlus } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectCard({
  title,
  stack,
  summary,
  details,
  highlight,
  diagram,
  link,
}: {
  title: string;
  stack: string[];
  summary: string;
  details: string[];
  highlight: string;
  diagram?: { label: string; tone: string }[];
  link: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden border border-[#303832] bg-[#1b211d] p-6"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(167,198,155,0.08),transparent_42%)] opacity-90" />
      <div className="relative space-y-5">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 border border-[#52634f] bg-[#263126] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#c5dbbc]">
            <GitBranchPlus className="h-3.5 w-3.5" />
            {highlight}
          </span>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`View project: ${title}`}
            className="inline-flex h-9 w-9 items-center justify-center border border-[#3a463c] bg-[#222a24] text-stone-200 transition hover:border-[#a7c69b] hover:text-[#d5e8ce]"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[#f1f1eb]">{title}</h3>
          <p className="text-sm leading-6 text-stone-400">{summary}</p>
        </div>

        {diagram ? (
          <div className="border border-[#303832] bg-[#151a17] p-4">
            <div className="flex items-center justify-center gap-4">
              {diagram.map((item, index) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl border text-[10px] font-medium uppercase tracking-[0.18em] ${
                      item.tone === "blue"
                        ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-200"
                        : item.tone === "cyan"
                          ? "border-sky-400/40 bg-sky-500/10 text-sky-200"
                          : item.tone === "violet"
                            ? "border-violet-400/40 bg-violet-500/10 text-violet-200"
                            : "border-teal-400/40 bg-teal-500/10 text-teal-200"
                    }`}
                  >
                    {item.label}
                  </div>
                  {index < diagram.length - 1 ? (
                    <div className="h-px w-8 bg-[#61765c]" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="border border-[#3a463c] bg-[#222a24] px-2.5 py-1 text-xs font-medium text-stone-300"
            >
              {item}
            </span>
          ))}
        </div>

        <ul className="space-y-2 text-sm leading-6 text-stone-400">
          {details.map((detail) => (
            <li key={detail} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 bg-[#a7c69b]" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
