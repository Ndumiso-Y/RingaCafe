import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Badge from "./Badge.jsx";

export default function CategoryCard({ title, description, to, icon, tone = "red", meta }) {
  return (
    <Link
      to={to}
      className="group rounded-2xl ringa-border bg-white p-6 shadow-soft hover:shadow-lift transition-shadow duration-200"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`h-11 w-11 rounded-2xl flex items-center justify-center ${tone === "dark" ? "bg-ringa-charcoal text-white" : "bg-ringa-red/10 text-ringa-red"}`}>
            {icon}
          </div>
          <div className="text-lg font-black tracking-tight text-slate-950">{title}</div>
        </div>
        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
      </div>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
      {meta && (
        <div className="mt-4">
          <Badge tone={tone === "dark" ? "dark" : "red"}>{meta}</Badge>
        </div>
      )}
    </Link>
  );
}
