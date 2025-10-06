const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Taileind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
];

export default function SkillsSection() {
  return (
    <section className="bg-secondary*=/30 relative px-4 py-24" id="skills">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((item) => (
            <div
              className="bg-card card-hover rounded-lg p-6 shadow-xs"
              key={item.name}
            >
              <div className="mb-4 text-left">
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>
              <div className="bg-secondary/50 h-2 w-full overflow-hidden rounded-full">
                <div
                  className="bg-primary h-2 origin-left animate-[grow_1.5s_ease-out] rounded-full"
                  style={{ width: item.level + "%" }}
                />
              </div>
              <div className="mt-1 text-right">
                <span className="text-muted-foreground text-sm">
                  {item.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
