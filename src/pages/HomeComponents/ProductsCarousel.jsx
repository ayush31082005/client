import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, ShoppingCart, ArrowRight } from 'lucide-react';
import { API_URL } from '../../api';

const DARK_BG = '#3D2B1F';
const DARK_CARD = '#2E1F14';
const GOLD = '#E8C66A';
const BORDER = '#5C3D28';
const FONT = "'Cormorant Garamond', Georgia, serif";

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
        <section
            className="py-20 relative overflow-hidden"
            style={{
                background: `linear-gradient(180deg, ${DARK_CARD} 0%, ${DARK_BG} 100%)`,
                borderTop: `1px solid ${BORDER}`
            }}
        >
            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="text-center md:text-left max-w-2xl">
                        <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                            <div style={{ height: 1, width: 32, background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
                            <span className="font-bold text-sm tracking-widest uppercase" style={{ fontFamily: FONT, color: GOLD }}>
                                Discover Quality
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: FONT, color: GOLD }}>
                            Featured Products
                        </h2>

                        <p className="text-base" style={{ fontFamily: FONT, color: GOLD, opacity: 0.65 }}>
                            Our best-selling products are trusted by customers and partners.
                        </p>
                    </div>

                    {/* Arrows */}
                    <div className="flex gap-3">
                        <button onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ border: `2px solid ${BORDER}`, color: GOLD }}>
                            <ChevronDown className="w-5 h-5 rotate-90" />
                        </button>

                        <button onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ background: GOLD, color: DARK_BG }}>
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div ref={carouselRef}
                    className="flex gap-5 overflow-x-auto pb-10 pt-4 snap-x">

                    {products.map((product) => {
                        const price = product.price || product.dp || 0;
                        const oldPrice = product.oldPrice || product.mrp || 0;
                        const bv = product.bv || 0;
                        const discount = calculateDiscount(oldPrice, price);

                        const imageUrl = product.image?.startsWith('http')
                            ? product.image
                            : `${API_URL}/uploads/${product.image}`;

                        return (
                            <div key={product._id}
                                className="min-w-[220px] sm:min-w-[250px] md:min-w-[280px] snap-center">

                                <motion.div whileHover={{ y: -8 }}
                                    className="rounded-2xl overflow-hidden group"
                                    style={{ background: DARK_CARD, border: `1px solid ${BORDER}` }}>

                                    {/* Image */}
                                    <div className="relative h-48 flex items-center justify-center"
                                        style={{ background: DARK_BG }}
                                        onClick={() => onProductClick(product)}>

                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            src={imageUrl}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Discount */}
                                        {discount > 0 && (
                                            <div className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full"
                                                style={{ background: GOLD, color: DARK_BG }}>
                                                -{discount}%
                                            </div>
                                        )}

                                        {/* Cart */}
                                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                                                className="w-12 h-12 rounded-full flex items-center justify-center"
                                                style={{ background: GOLD, color: DARK_BG }}>
                                                <ShoppingCart size={18} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="p-4">

                                        {/* Stars */}
                                        <div className="flex items-center gap-1 mb-2">
                                            {renderStars(product.rating || 5)}
                                        </div>

                                        {/* Name */}
                                        <h3 className="text-lg font-bold truncate"
                                            style={{ fontFamily: FONT, color: GOLD }}>
                                            {product.name}
                                        </h3>

                                        {/* Category */}
                                        <span className="text-[10px] px-2 py-1 rounded mt-1 inline-block"
                                            style={{ border: `1px solid ${BORDER}`, color: GOLD }}>
                                            {product.category}
                                        </span>

                                        {/* Price */}
                                        <div className="flex justify-between items-center mt-3">
                                            <div>
                                                <div className="text-xl font-bold" style={{ color: GOLD }}>
                                                    ₹{price}
                                                </div>
                                                {oldPrice > price && (
                                                    <div className="text-xs line-through text-gray-400">
                                                        ₹{oldPrice}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="text-xs px-2 py-1 rounded"
                                                style={{ border: `1px solid ${BORDER}`, color: GOLD }}>
                                                BV {bv}
                                            </div>
                                        </div>

                                        {/* Buttons */}
                                        <div className="mt-4 flex flex-col gap-2">

                                            <button
                                                onClick={() => handleNavigation('/checkout', { state: { product } })}
                                                className="w-full py-3 rounded-lg text-xs font-bold flex justify-center items-center gap-1"
                                                style={{ background: GOLD, color: DARK_BG }}>
                                                Instant Buy <ArrowRight size={14} />
                                            </button>

                                            <button
                                                onClick={() => onProductClick(product)}
                                                className="w-full py-3 rounded-lg text-xs font-bold"
                                                style={{ border: `1px solid ${GOLD}`, color: GOLD }}>
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
        </section>
    );
};

export default ProductsCarousel;