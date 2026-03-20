import React from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Star, ArrowRight } from 'lucide-react';
import { API_URL } from '../../api';

const ProductsCarousel = ({
    products, scroll, carouselRef, calculateDiscount,
    imageErrors, handleImageError, renderStars,
    addToCart, onProductClick, handleNavigation
}) => {
    return (
        <section style={{
            background: 'linear-gradient(180deg, #0f0d07 0%, #0a0800 100%)',
            padding: '80px 0',
            borderTop: '1px solid rgba(201,168,76,0.1)',
            overflow: 'hidden'
        }}>
            <div className="container mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, #c9a84c)' }} />
                            <span style={{ color: '#c9a84c', fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Our Products</span>
                        </div>
                        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#fff', marginBottom: '8px' }}>
                            Featured <em style={{ color: '#e8c97a', fontStyle: 'italic' }}>Products</em>
                        </h2>
                        <p style={{ color: 'rgba(196,185,154,0.7)', fontSize: '0.85rem' }}>
                            Trusted by customers for quality and effectiveness.
                        </p>
                    </div>

                    {/* Nav buttons */}
                    <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
                        {[{ dir: 'left', Icon: ChevronLeft }, { dir: 'right', Icon: ChevronRight }].map(({ dir, Icon }) => (
                            <button
                                key={dir}
                                onClick={() => scroll(dir)}
                                style={{
                                    width: '48px', height: '48px', borderRadius: '50%',
                                    background: dir === 'right' ? 'linear-gradient(135deg, #c9a84c, #8a6b2a)' : 'transparent',
                                    border: dir === 'left' ? '1px solid rgba(201,168,76,0.4)' : 'none',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: dir === 'right' ? '#0a0800' : '#c9a84c',
                                    cursor: 'pointer', transition: 'all 0.3s'
                                }}
                                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,168,76,0.3)'; }}
                                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
                            >
                                <Icon size={20} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={carouselRef}
                    style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '12px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products.map((product) => {
                        const price = product.price || product.dp || 0;
                        const oldPrice = product.oldPrice || product.mrp || 0;
                        const rating = product.rating || 5;
                        const reviews = product.numReviews || product.reviews || 0;
                        const category = product.category || 'General';
                        const discount = calculateDiscount(oldPrice, price);

                        const getImageUrl = (image) => {
                            if (!image) return null;
                            if (image.startsWith('http')) return image;
                            const path = image.startsWith('/uploads') ? image : `/uploads/${image}`;
                            return `${API_URL}${path}`;
                        };
                        const imageUrl = getImageUrl(product.image);

                        return (
                            <div
                                key={product._id || product.slug}
                                style={{
                                    minWidth: '260px', maxWidth: '280px',
                                    background: '#13100a',
                                    border: '1px solid rgba(201,168,76,0.15)',
                                    borderRadius: '4px', overflow: 'hidden',
                                    cursor: 'pointer', transition: 'all 0.35s', flexShrink: 0
                                }}
                                onClick={() => onProductClick(product)}
                                onMouseEnter={e => {
                                    e.currentTarget.style.border = '1px solid rgba(201,168,76,0.45)';
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.border = '1px solid rgba(201,168,76,0.15)';
                                    e.currentTarget.style.transform = 'none';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Image */}
                                <div style={{ position: 'relative', height: '200px', background: '#1c1710', overflow: 'hidden' }}>
                                    {discount > 0 && (
                                        <div style={{
                                            position: 'absolute', top: '12px', left: '12px', zIndex: 2,
                                            background: 'linear-gradient(135deg, #c9a84c, #8a6b2a)',
                                            color: '#0a0800', fontSize: '0.6rem', fontWeight: 700,
                                            padding: '3px 8px', borderRadius: '2px', letterSpacing: '1px'
                                        }}>
                                            {discount}% OFF
                                        </div>
                                    )}
                                    {imageUrl && !imageErrors[product.name] ? (
                                        <img
                                            src={imageUrl}
                                            alt={product.name}
                                            onError={() => handleImageError(product.name)}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }}
                                        />
                                    ) : (
                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <ShoppingCart size={40} color="rgba(201,168,76,0.3)" />
                                        </div>
                                    )}
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,0,0.6), transparent 60%)' }} />
                                    <div style={{
                                        position: 'absolute', bottom: '10px', left: '12px',
                                        fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase',
                                        color: 'rgba(232,201,122,0.8)', fontWeight: 600
                                    }}>{category}</div>
                                </div>

                                {/* Body */}
                                <div style={{ padding: '18px' }}>
                                    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', color: '#f5efe0', marginBottom: '8px', lineHeight: 1.3 }}>
                                        {product.name}
                                    </h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                                        <div style={{ display: 'flex', gap: '2px' }}>{renderStars(rating)}</div>
                                        <span style={{ fontSize: '0.72rem', color: 'rgba(196,185,154,0.6)' }}>({reviews})</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                                        <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#c9a84c', fontWeight: 700 }}>
                                            ₹{price}
                                        </span>
                                        {oldPrice > price && (
                                            <span style={{ fontSize: '0.8rem', color: 'rgba(196,185,154,0.4)', textDecoration: 'line-through' }}>₹{oldPrice}</span>
                                        )}
                                    </div>
                                    <button
                                        onClick={e => { e.stopPropagation(); addToCart(product); }}
                                        style={{
                                            width: '100%', padding: '10px',
                                            background: 'rgba(201,168,76,0.1)',
                                            border: '1px solid rgba(201,168,76,0.35)',
                                            borderRadius: '2px', color: '#c9a84c',
                                            fontSize: '0.68rem', letterSpacing: '2px', textTransform: 'uppercase',
                                            fontWeight: 600, cursor: 'pointer',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                            transition: 'all 0.3s'
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.background = 'linear-gradient(135deg, #c9a84c, #8a6b2a)';
                                            e.currentTarget.style.color = '#0a0800';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.background = 'rgba(201,168,76,0.1)';
                                            e.currentTarget.style.color = '#c9a84c';
                                        }}
                                    >
                                        <ShoppingCart size={14} /> Add to Cart
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* View all */}
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <button
                        onClick={() => handleNavigation('/products')}
                        style={{
                            background: 'transparent', border: '1px solid rgba(201,168,76,0.4)',
                            color: '#c9a84c', padding: '12px 32px', borderRadius: '2px',
                            fontSize: '0.72rem', letterSpacing: '2.5px', textTransform: 'uppercase',
                            fontWeight: 600, cursor: 'pointer',
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.08)'; e.currentTarget.style.borderColor = '#c9a84c'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; }}
                    >
                        View All Products <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductsCarousel;
