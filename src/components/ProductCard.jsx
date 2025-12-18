import { Link } from "react-router-dom";
import { useState } from "react";
import { HiShoppingBag } from "react-icons/hi";
import Badge from "./Badge.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ item, showAddButton = true, priority = false }) {
  const { addItem } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(item);
  };

  const handleImageError = (e) => {
    setImageError(true);
    // Don't try to load another image, just hide it gracefully
    e.currentTarget.style.display = 'none';
  };

  return (
    <Link
      to={`/item/${item.id}`}
      className="group rounded-2xl border border-black/10 bg-white overflow-hidden shadow-soft hover:shadow-lift transition-shadow duration-200"
    >
      <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
        {!imageError && (
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-out"
            loading={priority ? "eager" : "lazy"}
            onError={handleImageError}
          />
        )}
        {imageError && (
          <div className="h-full w-full flex items-center justify-center text-slate-400">
            <div className="text-center">
              <div className="text-4xl mb-2">🍽️</div>
              <div className="text-xs">Image unavailable</div>
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="text-base font-black tracking-tight text-slate-950">{item.name}</div>
            <p className="mt-1 text-sm text-slate-600 line-clamp-2">{item.description}</p>
          </div>
          <div className="shrink-0">
            {item.priceLabel === "Priced by weight" || item.priceLabel === "In-store quote" || item.priceLabel === "In-store support" ? (
              <div className="rounded-xl bg-slate-100 text-slate-700 px-3 py-2 text-xs font-semibold text-center">
                {item.priceLabel}
              </div>
            ) : (
              <div className="rounded-xl bg-ringa-red text-white px-3 py-2 text-sm font-black">
                {item.priceLabel}
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {(item.badges || []).slice(0, 2).map((b) => (
              <Badge key={b} tone="neutral">{b}</Badge>
            ))}
          </div>

          {showAddButton && item.priceLabel !== "In-store quote" && item.priceLabel !== "In-store support" && (
            <button
              onClick={handleAddToCart}
              className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border-2 border-black/20 bg-white text-slate-700 px-3 py-2 text-xs font-medium hover:border-black/40 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
              aria-label={`Add ${item.name} to cart`}
            >
              <HiShoppingBag className="w-4 h-4" />
              <span>Add to cart</span>
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
