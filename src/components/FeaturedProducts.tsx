import React from 'react';
import { productsData } from '../constants.ts';
import SectionTitle from './SectionTitle.tsx';
import type { Product } from '../types.ts';

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    } else if (i - 0.5 <= rating) {
      stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
    } else {
      stars.push(<i key={i} className="far fa-star"></i>);
    }
  }
  return stars;
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="overflow-hidden h-48">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-poppins font-semibold text-primary mb-2">{product.name}</h3>
        <div className="flex items-center mb-3">
          <div className="text-accent">{renderStars(product.rating)}</div>
          <span className="text-sm text-gray ml-2">({product.reviews} reviews)</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-primary">{product.price}</span>
            {product.originalPrice && <span className="text-sm text-gray line-through ml-2">{product.originalPrice}</span>}
          </div>
          <button className="bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary transition-colors" aria-label={`Add ${product.name} to cart`}>
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>Featured Products</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;