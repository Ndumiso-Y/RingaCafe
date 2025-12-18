export default function Badge({ children, tone = "neutral" }) {
  const tones = {
    neutral: "bg-slate-100 text-slate-700",
    red: "bg-ringa-red/10 text-ringa-red",
    dark: "bg-ringa-charcoal text-white",
    ember: "bg-ringa-ember/15 text-slate-900",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone] || tones.neutral}`}>
      {children}
    </span>
  );
}
