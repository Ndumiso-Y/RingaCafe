export default function Button({ as: Tag = "button", variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ringa-red focus-visible:ring-offset-2";
  const variants = {
    primary: "bg-ringa-red text-white hover:translate-y-[-1px] hover:shadow-lift active:translate-y-0",
    secondary: "bg-ringa-charcoal text-white hover:translate-y-[-1px] hover:shadow-lift active:translate-y-0",
    ghost: "bg-transparent ringa-border text-slate-900 hover:bg-slate-50",
  };
  return <Tag className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props} />;
}
