import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';
import Container from '../components/Container.jsx';
import Button from '../components/Button.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Badge from '../components/Badge.jsx';
import { getCategory, getItemsByCategory } from '../data/catalog.js';

export default function BytesCategory() {
  const { category: categorySlug } = useParams();
  const category = getCategory(categorySlug);
  const allItems = getItemsByCategory(categorySlug);

  const [sortBy, setSortBy] = useState('default');

  if (!category) {
    return (
      <div className="bg-white">
        <Container>
          <div className="py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-950 mb-4">
              Category Not Found
            </h1>
            <Link to="/bytes">
              <Button variant="primary">Back to Bytes</Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  // Sort items
  const sortedItems = [...allItems].sort((a, b) => {
    switch (sortBy) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="py-16 md:py-24">
          {/* Back Button */}
          <Link
            to="/bytes"
            className="inline-flex items-center gap-2 text-black/60 hover:text-slate-950 mb-8 transition-colors group"
          >
            <HiChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold">Back to Bytes</span>
          </Link>

          {/* Category Header with Image */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
              {/* Category Image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 shadow-soft">
                <img
                  src={category.heroImage}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Category Info */}
              <div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-950 mb-4">
                  {category.title}
                </h1>
                <p className="text-base md:text-lg text-black/70 leading-relaxed mb-4">
                  {category.description}
                </p>
                {category.meta && (
                  <Badge tone="dark">{category.meta}</Badge>
                )}
              </div>
            </div>
          </div>

          {/* Sort Control */}
          <div className="flex justify-end mb-8">
            <div className="w-full sm:w-64">
              <label className="block text-sm font-semibold text-black/60 mb-2">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-ringa-red focus:outline-none focus-visible:ring-2 focus-visible:ring-ringa-red focus-visible:ring-offset-2"
              >
                <option value="default">Default</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
              </select>
            </div>
          </div>

          {/* Services Grid - ALL items with images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedItems.map(item => (
              <ProductCard key={item.id} item={item} showAddButton={false} />
            ))}
          </div>

          {/* No Items */}
          {sortedItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-black/60">
                No services available in this category
              </p>
            </div>
          )}

          {/* Items Count */}
          <div className="mt-8 text-center text-sm text-black/60">
            Showing {sortedItems.length} services
          </div>
        </div>
      </Container>
    </div>
  );
}
