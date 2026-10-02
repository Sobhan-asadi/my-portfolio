export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#05050b]"
    >
      {/* Main violet glow */}
      <div className="absolute top-[12%] left-[-12%] h-[520px] w-[520px] rounded-full bg-violet-600/[0.08] blur-[150px] sm:h-[680px] sm:w-[680px]" />

      {/* Secondary indigo glow */}
      <div className="absolute top-[38%] right-[-14%] h-[480px] w-[480px] rounded-full bg-indigo-500/[0.055] blur-[150px] sm:h-[650px] sm:w-[650px]" />

      {/* Bottom glow */}
      <div className="absolute bottom-[-20%] left-[30%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.045] blur-[160px] sm:h-[700px] sm:w-[700px]" />

      {/* Very subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,5,11,0.35)_70%,rgba(5,5,11,0.8)_100%)]" />

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#05050b]/70 to-transparent" />
    </div>
  );
}
