import { Link } from 'react-router-dom';
import { IoWifi } from 'react-icons/io5';
import { HiArrowRight } from 'react-icons/hi';
import Container from '../components/Container.jsx';
import HorizontalScroll from '../components/HorizontalScroll.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Button from '../components/Button.jsx';
import { getCategoriesByType, getItemsByCategory } from '../data/catalog.js';

export default function Bytes() {
  const bytesCategories = getCategoriesByType('bytes');

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section with Video */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-75"
          >
            <source src="/PhoneConnectivity-Hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-ringa-charcoal/70 via-black/50 to-ringa-red/40"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center py-16 md:py-24 max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-3xl bg-white/10 backdrop-blur-sm border-2 border-white/30 mb-6 shadow-2xl">
              <IoWifi className="w-10 h-10 text-white animate-pulse" />
            </div>
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/30">
              <IoWifi className="w-5 h-5 text-white" />
              <span className="text-sm font-bold text-white tracking-wide">CONNECTIVITY SERVICES</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 drop-shadow-2xl">
              Lightning-Fast <span className="text-ringa-red">Bytes</span>
            </h1>
            <p className="text-lg md:text-2xl font-bold text-white/90 leading-relaxed mb-4 drop-shadow-lg">
              Get Connected While You Wait
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              SIM activation, data bundles, prepaid devices, and more — <span className="font-bold text-white">sorted in minutes</span>
            </p>
          </div>
        </Container>
      </section>

      <Container>
        <div className="py-16 md:py-24">

          {/* All Categories with Service Carousels */}
          <div className="space-y-16">
            {bytesCategories.map(category => {
              const items = getItemsByCategory(category.slug);

              return (
                <div key={category.id} className="space-y-8 p-8 rounded-3xl bg-white border border-black/5 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* Category Header - ENHANCED */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight">
                        {category.title}
                      </h2>
                      <p className="mt-3 text-base md:text-lg text-black/70 font-medium">
                        {category.description}
                      </p>
                    </div>
                    <Link
                      to={`/bytes/${category.slug}`}
                      className="hidden sm:flex items-center gap-2 px-6 py-3 bg-ringa-charcoal hover:bg-black text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
                    >
                      View All
                      <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Services Carousel */}
                  <HorizontalScroll autoScroll={true} autoScrollInterval={5000} showArrows={true}>
                    {items.map(item => (
                      <div key={item.id} className="scroll-item flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[30%] snap-start">
                        <ProductCard item={item} showAddButton={false} />
                      </div>
                    ))}
                  </HorizontalScroll>

                  {/* Mobile View All Link */}
                  <div className="sm:hidden text-center">
                    <Button as={Link} to={`/bytes/${category.slug}`} variant="ghost" className="w-full">
                      View All {category.title}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Categories */}
          {bytesCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-black/60">
                No services available at the moment. Check back soon!
              </p>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="p-8 md:p-10 rounded-2xl bg-slate-50 border border-black/10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
                How It Works
              </h2>
              <div className="space-y-3 text-base text-black/70 leading-relaxed">
                <p>
                  While your food is being prepared, get sorted with quick connectivity services — all in one stop.
                </p>
                <p>
                  Browse our services, ask in-store about current offers, and our team will help you get connected in minutes.
                </p>
                <p className="text-sm font-semibold text-ringa-charcoal">
                  Bring your ID for SIM activation and swaps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
