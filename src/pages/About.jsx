import { Link } from 'react-router-dom';
import { HiFire } from 'react-icons/hi';
import { IoFastFood, IoWifi } from 'react-icons/io5';
import Container from '../components/Container.jsx';
import Button from '../components/Button.jsx';
import { CONTACT } from '../constants/contact.js';

export default function About() {
  return (
    <div className="bg-white">
      <Container>
        <div className="py-16 md:py-24">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-950 mb-4">
              About Ringa Café
            </h1>
            <p className="text-base md:text-lg text-black/70 leading-relaxed">
              Bites & Bytes — serving quality food and connectivity in the heart of Mamelodi
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Story Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
                Our Story
              </h2>
              <div className="space-y-4 text-base md:text-lg text-black/70 leading-relaxed">
                <p>
                  Ringa Café is a family-owned restaurant located in Denlyn Shopping Centre,
                  Mamelodi. We've been serving our community with fresh, delicious meals and
                  warm hospitality.
                </p>
                <p>
                  Our mission is simple: provide quality food at affordable prices, made with
                  love and care. From flame-grilled chicken to traditional township favourites,
                  everything we make is prepared with our customers in mind.
                </p>
                <p>
                  We've now added Bytes — quick connectivity services to help you get sorted
                  while you wait for your food. One stop for bites and bytes.
                </p>
              </div>
            </section>

            {/* Values Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-black/10 bg-white shadow-soft">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-ringa-red/10 mb-4">
                  <HiFire className="w-6 h-6 text-ringa-red" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">
                  Quality Food
                </h3>
                <p className="text-sm text-black/70">
                  Fresh ingredients, bold flavour, generous portions — every meal prepared with care.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-black/10 bg-white shadow-soft">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-ringa-ember/20 mb-4">
                  <IoFastFood className="w-6 h-6 text-ringa-ember" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">
                  Community First
                </h3>
                <p className="text-sm text-black/70">
                  Proud to serve Mamelodi and be part of our vibrant local culture.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-black/10 bg-white shadow-soft">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-ringa-charcoal/10 mb-4">
                  <IoWifi className="w-6 h-6 text-ringa-charcoal" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">
                  One Stop Shop
                </h3>
                <p className="text-sm text-black/70">
                  Food and connectivity in one place — get sorted while you eat.
                </p>
              </div>
            </section>

            {/* What We Offer */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">
                What We Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-black/10">
                  <h3 className="text-lg font-bold text-slate-950 mb-2">Fresh Meals</h3>
                  <p className="text-sm text-black/70">
                    Flame-grilled chicken, premium steaks, burgers, and traditional township classics — all prepared fresh daily.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-black/10">
                  <h3 className="text-lg font-bold text-slate-950 mb-2">Bytes Services</h3>
                  <p className="text-sm text-black/70">
                    SIM activation, data bundles, prepaid devices — get connected while you wait.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-black/10">
                  <h3 className="text-lg font-bold text-slate-950 mb-2">Call & Collect</h3>
                  <p className="text-sm text-black/70">
                    Order via phone or WhatsApp and pick up at your convenience.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-black/10">
                  <h3 className="text-lg font-bold text-slate-950 mb-2">All Meals Include</h3>
                  <p className="text-sm text-black/70">
                    1x starch, 1x vegetable & 1x salad of your choice with every meal.
                  </p>
                </div>
              </div>
            </section>

            {/* Location Info */}
            <section className="p-8 md:p-10 rounded-2xl bg-ringa-red/5 border border-ringa-red/10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4 text-center">
                Visit Us Today
              </h2>
              <div className="text-center space-y-2 mb-6">
                <p className="text-base md:text-lg text-black/70">
                  {CONTACT.address.full}
                </p>
                <p className="text-base font-semibold text-slate-950">
                  {CONTACT.hours.display}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button as={Link} to="/location" variant="primary">
                  View Location
                </Button>
                <Button as={Link} to="/menu" variant="secondary">
                  Browse Menu
                </Button>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
