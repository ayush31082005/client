import React from 'react';

const WhyChooseSection = ({ whyChoosePoints }) => {
    return (
        <section style={{ background: '#0a0800', padding: '80px 0', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
            <div className="container mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #c9a84c)' }} />
                        <span style={{ color: '#c9a84c', fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Our Strength</span>
                        <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />
                    </div>
                    <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#fff', marginBottom: '10px' }}>
                        Why Choose <em style={{ color: '#e8c97a', fontStyle: 'italic' }}>Sanyukt Parivaar?</em>
                    </h2>
                    <p style={{ color: 'rgba(196,185,154,0.7)', fontSize: '0.85rem', maxWidth: '480px', margin: '0 auto' }}>
                        Discover what makes us the preferred choice for thousands of entrepreneurs
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                    {whyChoosePoints.map((point, index) => (
                        <div
                            key={index}
                            style={{
                                background: '#13100a',
                                border: '1px solid rgba(201,168,76,0.15)',
                                padding: '28px 22px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                transition: 'all 0.35s',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.border = '1px solid rgba(201,168,76,0.45)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.4)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.border = '1px solid rgba(201,168,76,0.15)';
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Gold bottom border line */}
                            <div style={{
                                position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
                                background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)'
                            }} />
                            <div style={{
                                width: '40px', height: '40px',
                                background: 'rgba(201,168,76,0.12)',
                                border: '1px solid rgba(201,168,76,0.3)',
                                borderRadius: '4px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '14px', color: '#c9a84c'
                            }}>
                                {point.icon}
                            </div>
                            <p style={{ color: 'rgba(196,185,154,0.85)', fontSize: '0.82rem', lineHeight: 1.75 }}>
                                {point.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
