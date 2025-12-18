export default function SectionHeading({ eyebrow, title, desc, align = "left" }) {
  const a = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-3 ${a}`}>
      {eyebrow && (
        <div className="inline-flex items-center rounded-full bg-ringa-red/10 px-3 py-1 text-xs font-semibold text-ringa-red">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">{title}</h2>
      {desc && <p className="max-w-2xl text-base text-slate-600">{desc}</p>}
    </div>
  );
}
