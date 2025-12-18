import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Container from '../components/Container.jsx';
import Button from '../components/Button.jsx';
import { CONTACT } from '../constants/contact.js';

export default function Location() {
  const handleCallClick = () => {
    window.location.href = CONTACT.phone.href;
  };

  const handleWhatsAppClick = () => {
    const message = 'Hi Ringa Café 👋\n\nI would like to make an enquiry.';
    const whatsappUrl = `${CONTACT.phone.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = CONTACT.email.href;
  };

  const handleDirectionsClick = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address.full)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="bg-white">
      <Container>
        <div className="py-16 md:py-24">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-950 mb-4">
              Visit Us
            </h1>
            <p className="text-base md:text-lg text-black/70 leading-relaxed">
              Find us at Denlyn Shopping Centre in Mamelodi — your one stop for bites and bytes.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Address Card */}
              <div className="p-8 rounded-2xl border border-black/10 bg-white shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-ringa-red/10 shrink-0">
                    <HiLocationMarker className="w-6 h-6 text-ringa-red" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-950 mb-2">Address</h3>
                    <p className="text-base text-black/70 mb-4">
                      {CONTACT.address.full}
                    </p>
                    <Button onClick={handleDirectionsClick} variant="primary">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-8 rounded-2xl border border-black/10 bg-white shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-ringa-ember/20 shrink-0">
                    <HiClock className="w-6 h-6 text-ringa-ember" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-950 mb-2">Opening Hours</h3>
                    <p className="text-base font-semibold text-black/70 mb-1">
                      {CONTACT.hours.days}
                    </p>
                    <p className="text-sm text-black/60">
                      {CONTACT.hours.time}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-8 rounded-2xl border border-black/10 bg-white shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-ringa-charcoal/10 shrink-0">
                    <HiPhone className="w-6 h-6 text-ringa-charcoal" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-950 mb-2">Phone</h3>
                    <p className="text-base text-black/70 mb-4">
                      {CONTACT.phone.display}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button onClick={handleCallClick} variant="primary">
                        Call Now
                      </Button>
                      <Button onClick={handleWhatsAppClick} variant="secondary">
                        <FaWhatsapp className="w-4 h-4" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email & Social Card */}
              <div className="p-8 rounded-2xl border border-black/10 bg-white shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-ringa-red/10 shrink-0">
                    <HiMail className="w-6 h-6 text-ringa-red" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-950 mb-2">Email & Social</h3>
                    <p className="text-base text-black/70 mb-3">
                      {CONTACT.email.display}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button onClick={handleEmailClick} variant="primary">
                        Send Email
                      </Button>
                      <Button
                        as="a"
                        href={CONTACT.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                      >
                        <FaFacebook className="w-4 h-4" />
                        Facebook
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl border-2 border-black/10 overflow-hidden bg-white shadow-xl">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.2844569842573!2d28.37037!3d-25.71778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9565e8f8b8f8f8%3A0x1e9565e8f8b8f8f8!2sDenlyn%20Shopping%20Centre%2C%20Mamelodi!5e0!3m2!1sen!2sza!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Denlyn Shopping Centre, Mamelodi - Google Maps"
                ></iframe>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-8 md:p-10 rounded-2xl bg-ringa-red/5 border border-ringa-red/10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4">
                Ready to Order?
              </h2>
              <p className="text-base md:text-lg text-black/70 mb-6 max-w-2xl mx-auto">
                Browse our menu and place your call & collect order via WhatsApp. We'll have it ready for you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleWhatsAppClick} variant="primary">
                  <FaWhatsapp className="w-5 h-5" />
                  Order on WhatsApp
                </Button>
                <Button as="a" href="/menu" variant="secondary">
                  Browse Menu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
