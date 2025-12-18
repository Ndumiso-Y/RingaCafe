import { Link } from "react-router-dom";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import Container from "./Container.jsx";
import { CONTACT } from "../constants/contact.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ringa-charcoal text-white mt-16">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="text-lg font-black tracking-tight">Ringa Café</div>
            <div className="mt-1 text-sm text-white/75">Bites & Bytes — one stop for food and connection.</div>
            <div className="mt-4 text-xs text-white/60">© {year} Ringa Café. All rights reserved.</div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-sm font-bold mb-3">Quick Links</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link className="text-white/80 hover:text-ringa-red transition-colors" to="/">Home</Link>
              <Link className="text-white/80 hover:text-ringa-red transition-colors" to="/menu">Food Menu</Link>
              <Link className="text-white/80 hover:text-ringa-red transition-colors" to="/bytes">Bytes Services</Link>
              <Link className="text-white/80 hover:text-ringa-red transition-colors" to="/about">About</Link>
              <Link className="text-white/80 hover:text-ringa-red transition-colors" to="/location">Location & Hours</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-bold mb-3">Get in Touch</div>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <a
                href={CONTACT.phone.href}
                className="flex items-center gap-2 hover:text-ringa-red transition-colors"
              >
                <HiPhone className="w-4 h-4" />
                {CONTACT.phone.display}
              </a>
              <a
                href={CONTACT.email.href}
                className="flex items-center gap-2 hover:text-ringa-red transition-colors"
              >
                <HiMail className="w-4 h-4" />
                {CONTACT.email.display}
              </a>
              <a
                href={CONTACT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-ringa-red transition-colors"
              >
                <FaFacebook className="w-4 h-4" />
                Facebook
              </a>
            </div>
          </div>

          {/* Location & Hours */}
          <div>
            <div className="text-sm font-bold mb-3">Visit Us</div>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <HiLocationMarker className="w-4 h-4 mt-0.5 shrink-0" />
                <div>{CONTACT.address.full}</div>
              </div>
              <div>
                <div className="font-semibold text-white/90">{CONTACT.hours.days}</div>
                <div className="text-xs text-white/70">{CONTACT.hours.time}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/60">
          Website by Embark Digitals
        </div>
      </Container>
    </footer>
  );
}
