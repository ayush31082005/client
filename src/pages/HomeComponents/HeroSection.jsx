import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const GOLD = '#C9A24A';
const BROWN = '#1A1A1A';

const HeroSection = ({ currentSlide, setCurrentSlide, heroSlides, isLoggedIn, userRole, handleNavigation }) => {
    return (
        <section className="relative h-[600px] md:h-[750px] overflow-hidden" style={{ background: '#EFE6CC' }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    {/* Overlay light left-side gradient so text is readable but image is clearly visible */}
                    <div className="absolute inset-0 z-10" style={{
                        background: 'linear-gradient(105deg, rgba(239,230,204,0.75) 0%, rgba(239,230,204,0.4) 45%, rgba(239,230,204,0.1) 100%)'
                    }} />
                    <div className="absolute inset-0 z-10" style={{
                        background: 'linear-gradient(180deg, transparent 65%, rgba(245,237,216,0.55) 100%)'
                    }} />
                    <img
                        src={heroSlides[currentSlide].image}
                        alt={`Slide ${currentSlide + 1}`}
                        className="w-full h-full object-cover"
                        style={{ filter: 'brightness(1) sepia(0.05)' }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ delay: 0.3, duration: 0.9 }}
                            className="max-w-3xl"
                        >
                            <h1 style={{
                                fontFamily: 'Georgia, serif',
                                fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)',
                                fontWeight: 700,
                                lineHeight: 1.15,
                                color: '#fff',
                                marginBottom: '16px',
                                textShadow: '0 2px 12px rgba(0,0,0,0.3)'
                            }}>
                                {heroSlides[currentSlide].title}
                            </h1>
                            <h2 style={{
                                fontFamily: 'Georgia, serif',
                                fontStyle: 'italic',
                                fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
                                color: '#F5EDD8',
                                marginBottom: '20px',
                                fontWeight: 500,
                                textShadow: '0 1px 8px rgba(0,0,0,0.25)'
                            }}>
                                {heroSlides[currentSlide].subtitle}
                            </h2>
                            <p style={{
                                fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)',
                                lineHeight: 1.85, maxWidth: '560px', marginBottom: '40px',
                                textShadow: '0 1px 6px rgba(0,0,0,0.2)'
                            }}>
                                {heroSlides[currentSlide].description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => {
                                        if (isLoggedIn) {
                                            handleNavigation(userRole === 'admin' ? '/admin/dashboard' : '/my-account');
                                        } else {
                                            handleNavigation('/register');
                                        }
                                    }}
                                    style={{
                                        padding: '14px 36px',
                                        background: GOLD,
                                        color: '#fff',
                                        fontWeight: 700,
                                        fontSize: '0.8rem',
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        boxShadow: '0 4px 20px rgba(201,162,74,0.4)'
                                    }}
                                >
                                    {isLoggedIn ? (userRole === 'admin' ? 'Admin Dashboard' : 'My Dashboard') : 'Get Started'}
                                    <ArrowRight size={16} />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => handleNavigation('/contact')}
                                    style={{
                                        padding: '14px 36px',
                                        background: 'transparent',
                                        color: '#1A1A1A',
                                        fontWeight: 600,
                                        fontSize: '0.8rem',
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase',
                                        border: `1px solid rgba(0,0,0,0.35)`,
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s'
                                    }}
                                    onHoverStart={e => { }}
                                >
                                    Read More
                                </motion.button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Slide dots */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        style={{
                            height: '3px',
                            width: index === currentSlide ? '40px' : '16px',
                            background: index === currentSlide ? GOLD : 'rgba(0,0,0,0.3)',
                            border: 'none',
                            borderRadius: '2px',
                            cursor: 'pointer',
                            transition: 'all 0.4s'
                        }}
                    />
                ))}
            </div>

            {/* Bottom border */}
            <div className="absolute bottom-0 left-0 right-0 z-30" style={{ height: 2, background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
        </section>
    );
};

export default HeroSection;