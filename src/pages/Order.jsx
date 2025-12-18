import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiPlus, HiMinus, HiTrash } from 'react-icons/hi';
import { HiPhone } from 'react-icons/hi2';
import Container from '../components/Container';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';
import { CONTACT } from '../constants/contact';

const Order = () => {
  const { items: cartItems, updateQty, removeItem, subtotal, hasWeightPricing: hasWeightPricingInCart } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [notes, setNotes] = useState('');

  const hasWeightPricing = hasWeightPricingInCart;

  const generateWhatsAppMessage = () => {
    const itemsList = cartItems
      .map(item => {
        const priceLabel = item.priceLabel === 'Priced by weight'
          ? `R${item.priceValue.toFixed(2)}/kg`
          : item.priceValue
            ? `R${(item.priceValue * item.qty).toFixed(2)}`
            : 'Price in-store';
        return `${item.qty}x ${item.name} — ${priceLabel}`;
      })
      .join('\n');

    const message = `Hi Ringa Café 👋

Call & Collect Order:
Name: ${customerName || '-'}
Pickup time: ${pickupTime || '-'}
Notes: ${notes || '-'}

Items:
${itemsList}

Location: Denlyn Shopping Centre, Mamelodi

Thank you!`;

    return message;
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${CONTACT.phone.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Container>
          <div className="py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-4">
                Your Order
              </h1>
              <p className="text-xl text-black/60 mb-8">
                Your cart is empty
              </p>
              <Link to="/menu">
                <Button size="lg">Browse Menu</Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-12 text-center">
              Your Order
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map(item => (
                  <div
                    key={item.id}
                    className="p-6 rounded-2xl border-2 border-black/10 bg-white"
                  >
                    <div className="flex gap-4">
                      {/* Item Image */}
                      <div className="w-24 h-24 rounded-xl overflow-hidden bg-black/5 flex-shrink-0">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-3xl">
                            {item.emoji || '🍽️'}
                          </div>
                        )}
                      </div>

                      {/* Item Info */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-black mb-1">
                          {item.name}
                        </h3>
                        <p className="text-lg font-medium text-black/70 mb-3">
                          {item.priceLabel === 'Priced by weight' ? (
                            `R${item.priceValue.toFixed(2)}/kg`
                          ) : item.priceValue ? (
                            `R${item.priceValue.toFixed(2)}`
                          ) : (
                            'Price in-store'
                          )}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              className="w-8 h-8 rounded-lg border-2 border-black/10 hover:border-black/30 flex items-center justify-center transition-colors"
                              disabled={item.qty <= 1}
                            >
                              <HiMinus className="text-lg text-black" />
                            </button>
                            <span className="text-lg font-bold text-black min-w-[2rem] text-center">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              className="w-8 h-8 rounded-lg border-2 border-black/10 hover:border-black/30 flex items-center justify-center transition-colors"
                            >
                              <HiPlus className="text-lg text-black" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                            title="Remove item"
                          >
                            <HiTrash className="text-xl" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary & Form */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Customer Details Form */}
                  <div className="p-6 rounded-2xl border-2 border-black/10 bg-white">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                      Order Details
                    </h2>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-black/60 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-black/30 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-black/60 mb-2">
                          Pickup Time
                        </label>
                        <input
                          type="text"
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          placeholder="e.g., 2:00 PM"
                          className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-black/30 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-black/60 mb-2">
                          Special Notes
                        </label>
                        <textarea
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Any special requests?"
                          rows="3"
                          className="w-full px-4 py-3 rounded-xl border-2 border-black/10 focus:border-black/30 focus:outline-none resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Order Total */}
                  <div className="p-6 rounded-2xl border-2 border-black/10 bg-white">
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-lg">
                        <span className="text-black/60">Items</span>
                        <span className="font-medium text-black">
                          {cartItems.reduce((sum, item) => sum + item.qty, 0)}
                        </span>
                      </div>

                      {!hasWeightPricing && (
                        <div className="flex justify-between text-lg">
                          <span className="text-black/60">Subtotal</span>
                          <span className="font-medium text-black">
                            R{subtotal.toFixed(2)}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t-2 border-black/10 mb-6">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xl font-bold text-black">Total</span>
                        <span className="text-2xl font-extrabold text-black">
                          {hasWeightPricing ? 'TBC' : `R${subtotal.toFixed(2)}`}
                        </span>
                      </div>
                    </div>

                    {hasWeightPricing && (
                      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 mb-6">
                        <p className="text-sm text-black/70">
                          Final total confirmed in-store based on actual weight
                        </p>
                      </div>
                    )}

                    <Button
                      onClick={handleWhatsAppOrder}
                      size="lg"
                      className="w-full"
                    >
                      <HiPhone className="text-xl" />
                      <span>Place Order via WhatsApp</span>
                    </Button>
                  </div>

                  {/* Location Info */}
                  <div className="p-4 rounded-xl bg-black/5 border border-black/10">
                    <p className="text-sm text-black/60 text-center">
                      <span className="font-medium text-black">Pickup Location:</span><br />
                      {CONTACT.address.full}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Order;
