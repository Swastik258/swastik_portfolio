type SkillClusterProps = {
  title: string;
  items: string[];
};

export function SkillCluster({ title, items }: SkillClusterProps) {
  return (
    <div className="border border-[#303832] bg-[#1b211d] p-5">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#a7c69b]">
        {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="border border-[#3a463c] bg-[#222a24] px-2.5 py-1 text-sm font-medium text-stone-200 transition hover:border-[#a7c69b] hover:text-[#d5e8ce]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
