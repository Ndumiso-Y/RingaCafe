import { useMemo, useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiShoppingBag } from "react-icons/hi";
import Container from "./Container.jsx";
import Button from "./Button.jsx";
import { useCart } from "../context/CartContext.jsx";
import logo from "../assets/ringa-logo.jpeg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/bytes", label: "Bytes" },
  { to: "/about", label: "About" },
  { to: "/location", label: "Location" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Detect scroll for navbar transformation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = useMemo(
    () => ({ isActive }) => {
      // Home page transparent navbar styles
      if (isHomePage && !scrolled) {
        return `text-sm font-bold transition-all duration-300 ${
          isActive ? "text-ringa-red" : "text-white hover:text-ringa-red drop-shadow-lg"
        }`;
      }
      // Scrolled or other pages solid navbar styles
      return `text-sm font-semibold transition-colors ${
        isActive ? "text-ringa-red" : "text-slate-700 hover:text-slate-950"
      }`;
    },
    [isHomePage, scrolled]
  );

  return (
    <header
      className={`${isHomePage ? '' : 'sticky top-0 z-50'} transition-all duration-300 ${
        isHomePage && !scrolled
          ? "bg-transparent border-b-0"
          : "bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-sm"
      }`}
    >
      <Container className={`transition-all duration-300 ${isHomePage && !scrolled ? "py-6" : "py-3"}`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Ringa Café logo"
              className={`h-10 w-10 rounded-xl object-cover transition-all duration-300 ${
                isHomePage && !scrolled
                  ? "border-2 border-white/40 shadow-2xl"
                  : "border border-black/10"
              }`}
            />
            <div className="leading-tight">
              <div
                className={`text-base font-black tracking-tight transition-colors ${
                  isHomePage && !scrolled ? "text-white drop-shadow-lg" : "text-slate-950"
                }`}
              >
                Ringa Café
              </div>
              <div
                className={`text-xs font-semibold transition-colors ${
                  isHomePage && !scrolled ? "text-white/80" : "text-slate-600"
                }`}
              >
                Bites & Bytes
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} className={linkClass} end={n.to === "/"}>
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/order"
              className={`relative inline-flex items-center gap-2 transition-all duration-300 ${
                isHomePage && !scrolled
                  ? "text-white hover:text-ringa-red drop-shadow-lg"
                  : "text-slate-700 hover:text-slate-950"
              }`}
            >
              <HiShoppingBag className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center h-5 w-5 rounded-full bg-ringa-red text-white text-xs font-bold shadow-lg">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>

          <button
            className={`md:hidden inline-flex items-center justify-center rounded-xl p-2 transition-all ${
              isHomePage && !scrolled
                ? "border-2 border-white/40 text-white shadow-2xl"
                : "border border-black/10 text-slate-900"
            }`}
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <HiMenu className="h-5 w-5" />
          </button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-lift p-5"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-black">Navigation</div>
              <button
                className="inline-flex items-center justify-center rounded-xl p-2 border border-black/10"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <HiX className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-semibold ${
                      isActive ? "bg-ringa-red/10 text-ringa-red" : "bg-slate-50 text-slate-900"
                    }`
                  }
                  end={n.to === "/"}
                >
                  {n.label}
                </NavLink>
              ))}
              <Link
                to="/order"
                className="relative rounded-xl px-4 py-3 text-sm font-semibold bg-slate-50 text-slate-900 flex items-center gap-2"
              >
                <HiShoppingBag className="w-5 h-5" />
                <span>Cart</span>
                {itemCount > 0 && (
                  <span className="ml-auto inline-flex items-center justify-center h-6 w-6 rounded-full bg-ringa-red text-white text-xs font-bold">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-black/10">
              <div className="text-xs font-semibold text-slate-600">Ringa Promise</div>
              <div className="mt-2 text-sm font-black">Heat • Flavour • Speed • Connection</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
