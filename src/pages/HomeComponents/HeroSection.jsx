import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection = ({ currentSlide, setCurrentSlide, heroSlides, isLoggedIn, userRole, handleNavigation }) => {
    return (
        <section className="relative h-[100vh] min-h-[600px] overflow-hidden" style={{ background: '#0a0800' }}>
            {/* Gold particle overlay */}
            <div className="absolute inset-0 z-0" style={{
                backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%),
                           
                radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.05) 0%, transparent 50%)`,
            }} />

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.6 }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 z-10" style={{
                        background: 'linear-gradient(105deg, rgba(10,8,0,0.92) 0%, rgba(10,8,0,0.75) 50%, rgba(10,8,0,0.45) 100%)'
                    }} />
                    <img
                        src={heroSlides[currentSlide].image}
                        alt={`Slide ${currentSlide + 1}`}
                        className="w-full h-full object-cover"
                        style={{ filter: 'brightness(0.7) sepia(0.2)' }}
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
                            {/* Eyebrow */}
                            {/* <div className="flex items-center gap-3 mb-5">
                                <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, #c9a84c)' }} />
                                <span style={{
                                    fontSize: '0.68rem', letterSpacing: '4px', textTransform: 'uppercase',
                                    color: '#c9a84c', fontWeight: 600, fontFamily: 'sans-serif'
                                }}>
                                    Rich Life Family
                                </span>
                            </div> */}

                            <h1 style={{
                                fontFamily: 'Georgia, serif',
                                fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                                fontWeight: 700,
                                lineHeight: 1.15,
                                color: '#fff',
                                marginBottom: '16px',
                                textShadow: '0 2px 20px rgba(0,0,0,0.5)'
                            }}>
                                {heroSlides[currentSlide].title}
                            </h1>

                            <h2 style={{
                                fontFamily: 'Georgia, serif',
                                fontStyle: 'italic',
                                fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                                color: '#e8c97a',
                                marginBottom: '20px',
                                fontWeight: 400
                            }}>
                                {heroSlides[currentSlide].subtitle}
                            </h2>

                            <p style={{
                                fontSize: '0.95rem', color: 'rgba(245,239,224,0.85)',
                                lineHeight: 1.85, maxWidth: '560px', marginBottom: '40px'
                            }}>
                                {heroSlides[currentSlide].description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(201,168,76,0.45)' }}
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
                                        background: 'linear-gradient(135deg, #c9a84c, #8a6b2a)',
                                        color: '#0a0800',
                                        fontWeight: 700,
                                        fontSize: '0.75rem',
                                        letterSpacing: '2.5px',
                                        textTransform: 'uppercase',
                                        border: 'none',
                                        borderRadius: '2px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        boxShadow: '0 4px 24px rgba(201,168,76,0.3)'
                                    }}
                                >
                                    {isLoggedIn ? (userRole === 'admin' ? 'Admin Dashboard' : 'My Dashboard') : 'Join Now'}
                                    <ArrowRight size={16} />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.04, background: 'rgba(201,168,76,0.12)' }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => handleNavigation('/contact')}
                                    style={{
                                        padding: '14px 36px',
                                        background: 'transparent',
                                        color: '#e8c97a',
                                        fontWeight: 600,
                                        fontSize: '0.75rem',
                                        letterSpacing: '2.5px',
                                        textTransform: 'uppercase',
                                        border: '1px solid rgba(201,168,76,0.5)',
                                        borderRadius: '2px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    Contact Us
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
                            background: index === currentSlide ? '#c9a84c' : 'rgba(201,168,76,0.3)',
                            border: 'none',
                            borderRadius: '2px',
                            cursor: 'pointer',
                            transition: 'all 0.4s'
                        }}
                    />
                ))}
            </div>

            {/* Scroll hint */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 right-12 z-30 hidden md:flex flex-col items-center gap-2"
                style={{ color: 'rgba(201,168,76,0.6)' }}
            >
                <span style={{ fontSize: '0.6rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Scroll</span>
                <ChevronDown size={16} />
            </motion.div>
        </section>
    );
};

export default HeroSection;
