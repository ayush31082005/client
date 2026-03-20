import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, ShoppingCart, Star, ArrowRight } from 'lucide-react';
import { API_URL } from '../../api';

const DARK_BG = '#3D2B1F';
const DARK_CARD = '#2E1F14';
const GOLD = '#E8C66A';
const BORDER = '#5C3D28';
const FONT = "'Cormorant Garamond', 'IM Fell English', Georgia, serif";

const ProductsCarousel = ({
    products,
    scroll,
    carouselRef,
    calculateDiscount,
    imageErrors,
    handleImageError,
    renderStars,
    addToCart,
    onProductClick,
    handleNavigation
}) => {
    return (
        <section className="py-20 relative overflow-hidden"
            style={{ background: `linear-gradient(180deg, ${DARK_CARD} 0%, ${DARK_BG} 100%)`, borderTop: `1px solid ${BORDER}` }}>
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="text-center md:text-left max-w-2xl">
                        <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                            <div style={{ height: 1, width: 32, background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
                            <span className="font-bold text-sm tracking-widest uppercase"
                                style={{ fontFamily: FONT, color: GOLD, opacity: 0.75 }}>
                                Discover Quality
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4"
                            style={{ fontFamily: FONT, color: GOLD }}>
                            Featured Products
                        </h2>
                        <p className="text-lg" style={{ fontFamily: FONT, color: GOLD, opacity: 0.65 }}>
                            Our best-selling products are trusted by customers and partners for their quality and effectiveness.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-3 flex-shrink-0">
                        <button onClick={() => scroll('left')}
                            className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                            style={{ border: `2px solid ${BORDER}`, color: GOLD, background: 'transparent' }}
                            onMouseEnter={e => { e.currentTarget.style.border = `2px solid ${GOLD}`; e.currentTarget.style.background = 'rgba(232,198,106,0.1)'; }}
                            onMouseLeave={e => { e.currentTarget.style.border = `2px solid ${BORDER}`; e.currentTarget.style.background = 'transparent'; }}>
                            <ChevronDown className="w-6 h-6 rotate-90" />
                        </button>
                        {/* Right arrow — uniform gold */}
                        <button onClick={() => scroll('right')}
                            className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                            style={{ background: GOLD, color: DARK_BG, boxShadow: '0 8px 24px rgba(232,198,106,0.25)' }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Products Carousel */}
                <div ref={carouselRef}
                    className="flex gap-8 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {products.map((product) => {
                        const price = product.price || product.dp || 0;
                        const oldPrice = product.oldPrice || product.mrp || 0;
                        const bv = product.bv || 0;
                        const rating = product.rating || 5;
                        const reviews = product.numReviews || product.reviews || 0;
                        const category = product.category || "General";
                        const discount = calculateDiscount(oldPrice, price);

                        const getImageUrl = (image) => {
                            if (!image) return null;
                            if (image.startsWith('http')) return image;
                            const path = image.startsWith('/uploads') ? image : `/uploads/${image}`;
                            return `${API_URL}${path}`;
                        };
                        const imageUrl = getImageUrl(product.image);

                        return (
                            <div key={product._id || product.slug}
                                className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px] snap-center">
                                <motion.div whileHover={{ y: -10 }}
                                    className="rounded-[32px] overflow-hidden transition-all duration-500 group relative"
                                    style={{ background: DARK_CARD, border: `1px solid ${BORDER}`, boxShadow: 'none' }}
                                    onMouseEnter={e => { e.currentTarget.style.border = `1px solid ${GOLD}`; e.currentTarget.style.boxShadow = `0 20px 40px rgba(232,198,106,0.1)`; }}
                                    onMouseLeave={e => { e.currentTarget.style.border = `1px solid ${BORDER}`; e.currentTarget.style.boxShadow = 'none'; }}>

                                    {/* Product Image */}
                                    <div className="relative h-64 overflow-hidden flex items-center justify-center cursor-pointer"
                                        style={{ background: DARK_BG }}
                                        onClick={() => onProductClick(product)}>
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity z-10"
                                            style={{ background: `linear-gradient(135deg, ${GOLD}, transparent)` }}></div>

                                        {imageUrl && !imageErrors[product._id || product.name] ? (
                                            <motion.img whileHover={{ scale: 1.15 }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                                src={imageUrl} alt={product.name}
                                                className="w-full h-full object-cover"
                                                onError={() => handleImageError(product._id || product.name)} />
                                        ) : (
                                            <div className="text-9xl grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110">
                                                {product.fallbackIcon || "📦"}
                                            </div>
                                        )}

                                        {/* Discount badge — uniform gold */}
                                        {parseInt(discount) > 0 && (
                                            <div className="absolute top-6 left-6 z-20">
                                                <span className="text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest"
                                                    style={{ background: GOLD, color: DARK_BG, fontFamily: FONT }}>
                                                    -{discount}%
                                                </span>
                                            </div>
                                        )}

                                        {/* Cart button on hover */}
                                        <div className="absolute bottom-6 right-6 z-20 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                                                className="w-16 h-16 rounded-full flex items-center justify-center transition-all"
                                                style={{ background: GOLD, color: DARK_BG }}
                                                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                                                <ShoppingCart className="w-7 h-7" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Product Details */}
                                    <div className="p-6 cursor-pointer" onClick={() => onProductClick(product)}>
                                        <div className="flex items-center gap-1.5 mb-3">
                                            {renderStars(rating)}
                                            <span className="text-[10px] font-black uppercase tracking-widest ml-1"
                                                style={{ fontFamily: FONT, color: GOLD, opacity: 0.5 }}>
                                                {reviews} Reviews
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-1.5 mb-2">
                                            <h3 className="text-xl font-bold truncate transition-colors"
                                                style={{ fontFamily: FONT, color: GOLD }}>
                                                {product.name}
                                            </h3>
                                            <span className="w-fit text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider"
                                                style={{ background: 'rgba(232,198,106,0.1)', color: GOLD, border: `1px solid ${BORDER}`, fontFamily: FONT }}>
                                                {category === "Beauty and cosmetic home based products" ? "Beauty & Cosmetics" : category}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex flex-col">
                                                <span className="text-2xl font-black" style={{ fontFamily: FONT, color: GOLD }}>
                                                    ₹{price}
                                                </span>
                                                {oldPrice > price && (
                                                    <span className="text-xs line-through font-medium"
                                                        style={{ fontFamily: FONT, color: GOLD, opacity: 0.4 }}>
                                                        MRP ₹{oldPrice}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <span className="px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest"
                                                    style={{ background: 'rgba(232,198,106,0.1)', color: GOLD, border: `1px solid ${BORDER}`, fontFamily: FONT }}>
                                                    BV {bv}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex flex-col gap-3">
                                            {/* Instant Buy — uniform gold */}
                                            <motion.button whileTap={{ scale: 0.95 }}
                                                onClick={() => handleNavigation('/checkout', { state: { product } })}
                                                className="w-full py-4 font-bold rounded-xl uppercase tracking-widest text-xs flex items-center justify-center gap-2 group/btn"
                                                style={{
                                                    background: GOLD,
                                                    color: DARK_BG, fontFamily: FONT,
                                                    boxShadow: '0 4px 16px rgba(232,198,106,0.2)',
                                                }}>
                                                <span>Instant Buy</span>
                                                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                            </motion.button>

                                            <button
                                                onClick={(e) => { e.stopPropagation(); onProductClick(product); }}
                                                className="w-full py-4 font-bold rounded-xl uppercase tracking-widest text-xs transition-all duration-300"
                                                style={{
                                                    border: `2px solid ${GOLD}`, color: GOLD,
                                                    background: 'transparent', fontFamily: FONT,
                                                }}
                                                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,198,106,0.1)'; }}
                                                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Decorative gold orbs */}
            <div className="absolute top-40 -right-20 w-80 h-80 rounded-full blur-3xl opacity-5 z-0"
                style={{ background: GOLD }}></div>
            <div className="absolute bottom-40 -left-20 w-80 h-80 rounded-full blur-3xl opacity-5 z-0"
                style={{ background: GOLD }}></div>

            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
        </section>
    );
};

export default ProductsCarousel;