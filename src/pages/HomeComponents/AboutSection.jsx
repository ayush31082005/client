import React from 'react';

const AboutSection = ({ aboutImage, teamImages }) => {
    return (
        <section style={{ background: '#0f0d07', padding: '80px 0', borderTop: '1px solid rgba(201,168,76,0.12)' }}>
            <div className="container mx-auto px-4 md:px-12">
                {/* Section header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #c9a84c)' }} />
                        <span style={{ color: '#c9a84c', fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Our Story</span>
                        <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />
                    </div>
                    <h2 style={{
                        fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                        color: '#fff', marginBottom: '12px'
                    }}>
                        Who <em style={{ color: '#e8c97a', fontStyle: 'italic' }}>We Are</em>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Text */}
                    <div className="order-2 md:order-1">
                        <h3 style={{
                            fontFamily: 'Georgia, serif', fontSize: '1.3rem',
                            color: '#e8c97a', marginBottom: '16px', fontWeight: 400, fontStyle: 'italic'
                        }}>
                            Sanyukt Parivaar & Rich Life Pvt.Ltd.
                        </h3>
                        <p style={{ color: 'rgba(196,185,154,0.9)', lineHeight: 1.9, fontSize: '0.9rem', marginBottom: '16px' }}>
                            Founded with a clear vision — to create financial independence through ethical direct selling. We believe in growing together as one family, where every member gets equal opportunity, proper training, and long-term support.
                        </p>
                        <p style={{ color: 'rgba(196,185,154,0.9)', lineHeight: 1.9, fontSize: '0.9rem' }}>
                            Our company focuses on personal development, leadership growth, and community success while promoting reliable lifestyle, wellness, and personal care products.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative order-1 md:order-2">
                        <div style={{
                            position: 'relative', borderRadius: '4px', overflow: 'hidden',
                            border: '1px solid rgba(201,168,76,0.25)',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
                        }}>
                            <img
                                src={aboutImage}
                                alt="About Us"
                                style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block', filter: 'brightness(0.85) sepia(0.15)' }}
                            />
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'linear-gradient(to top, rgba(10,8,0,0.5) 0%, transparent 60%)'
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;