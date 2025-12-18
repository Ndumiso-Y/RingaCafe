import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { HiChevronLeft, HiPlus, HiMinus } from 'react-icons/hi';
import Container from '../components/Container';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { getItem } from '../data/catalog';
import { useCart } from '../context/CartContext';

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = getItem(id);
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  if (!item) {
    return (
      <div className="min-h-screen bg-white">
        <Container>
          <div className="py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-4">
              Item Not Found
            </h1>
            <Link to="/menu">
              <Button>Back to Menu</Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(item, quantity);
    navigate('/order');
  };

  const incrementQty = () => setQuantity(prev => prev + 1);
  const decrementQty = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="py-16 md:py-24">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-black/60 hover:text-black mb-8 transition-colors"
          >
            <HiChevronLeft className="text-2xl" />
            <span className="text-lg font-medium">Back</span>
          </button>

          {/* Item Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Image */}
            <div className="w-full">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-black/10 bg-black/5">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-8xl">
                    {item.emoji || '🍽️'}
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col">
              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <Badge key={tag} variant="light">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Name */}
              <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-4">
                {item.name}
              </h1>

              {/* Description */}
              {item.description && (
                <p className="text-lg text-black/60 mb-6 leading-relaxed">
                  {item.description}
                </p>
              )}

              {/* Price */}
              <div className="mb-8">
                {item.hasWeightPricing ? (
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-black mb-2">
                      R{item.price.toFixed(2)}/kg
                    </p>
                    <p className="text-sm text-black/60">
                      Final price calculated at checkout based on actual weight
                    </p>
                  </div>
                ) : item.price ? (
                  <p className="text-3xl md:text-4xl font-bold text-black">
                    R{item.price.toFixed(2)}
                  </p>
                ) : (
                  <p className="text-2xl font-bold text-black/60">
                    Price available in-store
                  </p>
                )}
              </div>

              {/* Nutritional Info */}
              {item.nutritionalInfo && (
                <div className="mb-8 p-6 rounded-2xl bg-black/5 border border-black/10">
                  <h3 className="text-xl font-bold text-black mb-3">
                    Nutritional Information
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {Object.entries(item.nutritionalInfo).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-black/60">
                          {key.charAt(0).toUpperCase() + key.slice(1)}:
                        </span>
                        <span className="ml-2 font-medium text-black">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Controls */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-black/60 mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={decrementQty}
                    className="w-12 h-12 rounded-xl border-2 border-black/10 hover:border-black/30 flex items-center justify-center transition-colors"
                    disabled={quantity <= 1}
                  >
                    <HiMinus className="text-xl text-black" />
                  </button>
                  <span className="text-2xl font-bold text-black min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQty}
                    className="w-12 h-12 rounded-xl border-2 border-black/10 hover:border-black/30 flex items-center justify-center transition-colors"
                  >
                    <HiPlus className="text-xl text-black" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button onClick={handleAddToCart} size="lg" className="w-full">
                Add to Order
              </Button>

              {/* Additional Notes */}
              {item.allergens && item.allergens.length > 0 && (
                <div className="mt-6 p-4 rounded-2xl bg-red-50 border border-red-200">
                  <p className="text-sm font-medium text-red-900">
                    Allergens: {item.allergens.join(', ')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ItemDetail;
