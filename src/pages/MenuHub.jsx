import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiSearch, HiArrowRight } from 'react-icons/hi';
import { IoFastFood } from 'react-icons/io5';
import Container from '../components/Container.jsx';
import HorizontalScroll from '../components/HorizontalScroll.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Button from '../components/Button.jsx';
import { getCategoriesByType, getItemsByCategory } from '../data/catalog.js';

export default function MenuHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const foodCategories = getCategoriesByType('food');

  // Filter categories based on search
  const filteredCategories = foodCategories.filter(category => {
    if (!searchQuery) return true;
    const items = getItemsByCategory(category.slug);
    return (
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      items.some(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Container>
        <div className="py-16 md:py-24">
          {/* Header - BOLD DESIGN */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-ringa-red/10 border border-ringa-red/20">
              <IoFastFood className="w-5 h-5 text-ringa-red" />
              <span className="text-sm font-bold text-ringa-red tracking-wide">OUR FULL MENU</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-950 mb-6">
              Premium <span className="text-ringa-red">Food</span> Menu
            </h1>
            <p className="text-lg md:text-2xl font-bold text-slate-700 leading-relaxed mb-4">
              Flame-Grilled Perfection Meets Township Soul
            </p>
            <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-2xl mx-auto">
              All menu items served with <span className="font-bold text-slate-900">1x starch, 1x vegetable & 1x salad</span> of your choice
            </p>
          </div>

          {/* Search Bar - ENHANCED */}
          <div className="max-w-2xl mx-auto mb-20">
            <div className="relative group">
              <HiSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-ringa-red/60 group-focus-within:text-ringa-red transition-colors" />
              <input
                type="text"
                placeholder="Search for chicken, burgers, traditional meals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 rounded-2xl border-2 border-black/10 focus:border-ringa-red focus:outline-none focus-visible:ring-4 focus-visible:ring-ringa-red/20 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
              />
            </div>
          </div>

          {/* All Categories with Item Carousels */}
          <div className="space-y-16">
            {filteredCategories.map(category => {
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
                      to={`/menu/${category.slug}`}
                      className="hidden sm:flex items-center gap-2 px-6 py-3 bg-ringa-red hover:bg-ringa-red/90 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
                    >
                      View All
                      <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Items Carousel */}
                  <HorizontalScroll autoScroll={true} autoScrollInterval={5000} showArrows={true}>
                    {items.map(item => (
                      <div key={item.id} className="scroll-item flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[30%] snap-start">
                        <ProductCard item={item} showAddButton={true} />
                      </div>
                    ))}
                  </HorizontalScroll>

                  {/* Mobile View All Link */}
                  <div className="sm:hidden text-center">
                    <Button as={Link} to={`/menu/${category.slug}`} variant="ghost" className="w-full">
                      View All {category.title}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-black/60">
                No categories found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
