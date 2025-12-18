import { Link } from "react-router-dom";
import { HiFire, HiLightningBolt } from "react-icons/hi";
import { IoFastFood, IoWifi } from "react-icons/io5";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import ProductCard from "../components/ProductCard.jsx";
import HorizontalScroll from "../components/HorizontalScroll.jsx";
import Navbar from "../components/Navbar.jsx";
import { getFeatured } from "../data/catalog.js";
import { CONTACT } from "../constants/contact.js";

export default function Home() {
  const featuredFood = getFeatured("food").slice(0, 3);
  const traditionalItems = getFeatured("food").filter(item =>
    item.badges?.some(b => b.toLowerCase().includes("traditional"))
  ).slice(0, 3);

  return (
    <>
      {/* Navbar - Fixed at top, integrated with hero */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section with Video Background - STRIKING DESIGN */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-90"
          >
            <source src="/GrillVideo-optimized.mp4" type="video/mp4" />
          </video>
          {/* Dark dramatic overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-ringa-red/60"></div>
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-ringa-red/30 via-transparent to-transparent animate-pulse"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full py-32 md:py-40">
          <Container>
            <div className="max-w-5xl mx-auto text-center">
              {/* Striking Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <HiFire className="w-5 h-5 text-ringa-red animate-pulse" />
                <span className="text-sm font-bold text-white tracking-wide">DENLYN'S HOTTEST SPOT</span>
                <IoWifi className="w-5 h-5 text-ringa-red animate-pulse" />
              </div>

              {/* Main Headline - MASSIVE & BOLD */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 drop-shadow-2xl">
                <span className="inline-block animate-[pulse_2s_ease-in-out_infinite]">BITES</span>
                <span className="text-ringa-red mx-2 md:mx-4">&</span>
                <span className="inline-block animate-[pulse_2s_ease-in-out_infinite_0.5s]">BYTES</span>
              </h1>

              {/* Subheadline - Bold contrast */}
              <p className="mt-8 text-xl md:text-3xl font-bold text-white leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                Flame-Grilled Food <span className="text-ringa-red">+</span> Lightning-Fast Connectivity
              </p>

              <p className="mt-4 text-base md:text-xl text-white/90 max-w-2xl mx-auto">
                Premium takeaway & traditional township classics. Get connected while you wait!
              </p>

              {/* CTA Buttons - BOLD & LARGE */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/menu"
                  className="group relative px-10 py-5 bg-ringa-red hover:bg-ringa-red/90 text-white font-black text-lg rounded-2xl shadow-2xl hover:shadow-ringa-red/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <IoFastFood className="w-6 h-6" />
                    EXPLORE FOOD MENU
                    <HiFire className="w-5 h-5 animate-pulse" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </Link>

                <Link
                  to="/bytes"
                  className="group relative px-10 py-5 bg-white hover:bg-slate-50 text-ringa-charcoal font-black text-lg rounded-2xl shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto overflow-hidden border-4 border-white"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <IoWifi className="w-6 h-6" />
                    GET CONNECTED
                    <HiLightningBolt className="w-5 h-5 animate-pulse text-ringa-red" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ringa-red/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </Link>
              </div>

              {/* Trust indicator */}
              <div className="mt-10 flex items-center justify-center gap-2 text-white/80">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-ringa-red border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-ringa-charcoal border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-ringa-red border-2 border-white"></div>
                </div>
                <p className="text-sm font-semibold">
                  Trusted by <span className="text-white font-bold">1000+</span> Denlyn customers daily
                </p>
              </div>
            </div>
          </Container>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Two-Lane Feature Cards */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {/* FOOD Lane */}
            <Link
              to="/menu"
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-white to-slate-50 p-8 md:p-10 shadow-soft hover:shadow-lift transition-shadow duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-2xl bg-ringa-red/10 flex items-center justify-center shrink-0">
                  <IoFastFood className="w-7 h-7 text-ringa-red" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-950">Food Menu</h2>
                  <p className="mt-2 text-base text-black/70 leading-relaxed">
                    Flame-grilled chicken, premium steaks, burgers, and traditional township classics — ready fast.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ringa-red">
                    <span>Browse menu</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* BYTES Lane */}
            <Link
              to="/bytes"
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-white to-slate-50 p-8 md:p-10 shadow-soft hover:shadow-lift transition-shadow duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-2xl bg-ringa-charcoal flex items-center justify-center shrink-0">
                  <IoWifi className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-950">Bytes Services</h2>
                  <p className="mt-2 text-base text-black/70 leading-relaxed">
                    SIM activation, data bundles, prepaid devices — get connected while your food is being prepared.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ringa-charcoal">
                    <span>Explore services</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* Featured Food Items */}
      {featuredFood.length > 0 && (
        <section className="py-16 md:py-24 bg-slate-50">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-950">Featured Favourites</h2>
              <p className="mt-3 text-base text-black/70">
                Customer favourites — bold flavour, generous portions.
              </p>
            </div>

            <HorizontalScroll autoScroll={true} autoScrollInterval={4000} showArrows={true}>
              {featuredFood.map((item) => (
                <div key={item.id} className="scroll-item flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[30%] snap-start">
                  <ProductCard item={item} priority={true} />
                </div>
              ))}
            </HorizontalScroll>

            <div className="mt-10 text-center">
              <Button as={Link} to="/menu" variant="primary">
                View Full Menu
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* Traditional Spotlight */}
      {traditionalItems.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-950">Traditional Favourites</h2>
              <p className="mt-3 text-base text-black/70">
                Township classics — mogodu, beef stew, tlhakwana, livers. Cooked honest, served generous.
              </p>
            </div>

            <HorizontalScroll autoScroll={true} autoScrollInterval={4000} showArrows={true}>
              {traditionalItems.map((item) => (
                <div key={item.id} className="scroll-item flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[30%] snap-start">
                  <ProductCard item={item} priority={true} />
                </div>
              ))}
            </HorizontalScroll>

            <div className="mt-10 text-center">
              <Button as={Link} to="/menu/traditional-meals" variant="secondary">
                Explore Traditional Meals
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* Why Ringa Strip */}
      <section className="py-16 md:py-24 bg-ringa-charcoal text-white">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-ringa-red/20 mb-4">
                <HiFire className="w-6 h-6 text-ringa-red" />
              </div>
              <h3 className="text-lg font-bold">Heat</h3>
              <p className="mt-2 text-sm text-white/70">Flame-grilled with attitude</p>
            </div>

            <div>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-ringa-ember/20 mb-4">
                <IoFastFood className="w-6 h-6 text-ringa-ember" />
              </div>
              <h3 className="text-lg font-bold">Flavour</h3>
              <p className="mt-2 text-sm text-white/70">Bold portions, big taste</p>
            </div>

            <div>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-ringa-red/20 mb-4">
                <HiLightningBolt className="w-6 h-6 text-ringa-red" />
              </div>
              <h3 className="text-lg font-bold">Speed</h3>
              <p className="mt-2 text-sm text-white/70">Fast takeaway, ready quick</p>
            </div>

            <div>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/10 mb-4">
                <IoWifi className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold">Connection</h3>
              <p className="mt-2 text-sm text-white/70">Get sorted while you eat</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Location Teaser */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950">Visit Us</h2>
            <p className="mt-4 text-base md:text-lg text-black/70">
              {CONTACT.address.full}
            </p>
            <p className="mt-2 text-sm text-black/60">
              {CONTACT.hours.display}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button as={Link} to="/location" variant="primary">
                Get Directions
              </Button>
              <Button as="a" href={CONTACT.phone.href} variant="secondary">
                Call Us: {CONTACT.phone.display}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
