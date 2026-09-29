type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div style={{ maxWidth: 700 }} className="space-y-4">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a7c69b]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#f1f1eb] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-stone-400 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
