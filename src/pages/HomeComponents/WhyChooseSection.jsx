import React from 'react';

const BG = '#F5EDD8';
const CARD = '#EDE0C4';
const GOLD = '#C9A24A';
const BROWN = '#1A1A1A';
const BORDER = 'rgba(139,94,10,0.3)';

const WhyChooseSection = ({ whyChoosePoints }) => {
    return (
        <section style={{ background: BG, padding: '72px 0', borderTop: `1px solid ${BORDER}` }}>
            <div className="container mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <div style={{ height: '1px', width: '60px', background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
                        <span style={{ color: GOLD, fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Our Strength</span>
                        <div style={{ height: '1px', width: '60px', background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
                    </div>
                    <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#1A1A1A', marginBottom: '8px' }}>
                        Why Choose <em style={{ color: GOLD, fontStyle: 'italic' }}>Sanyukt Parivaar?</em>
                    </h2>
                    <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.85rem', maxWidth: '480px', margin: '0 auto' }}>
                        Discover what makes us the preferred choice for thousands of entrepreneurs
                    </p>
                </div>

                {/* Cards image 1 style: rounded, beige bg, gold icon top-center, title, description */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                    {whyChoosePoints.map((point, index) => (
                        <div
                            key={index}
                            style={{
                                background: CARD,
                                border: `3px solid ${BORDER}`,
                                borderRadius: '12px',
                                padding: '32px 20px 28px',
                                textAlign: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 10px rgba(44,26,14,0.07)',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.border = '1.5px solid transparent'; // ❌ border hata diya
                                e.currentTarget.style.transform = 'translateY(-6px)';
                                e.currentTarget.style.boxShadow = '0 12px 30px rgba(201,162,74,0.25)';
                            }}

                            onMouseLeave={e => {
                                e.currentTarget.style.border = `1.5px solid ${BORDER}`; // ✅ wapas normal border
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.boxShadow = '0 2px 10px rgba(44,26,14,0.07)';
                            }}
                        >
                            {/* Gold icon circle top center */}
                            <div style={{
                                width: '52px', height: '52px',
                                background: 'rgba(201,162,74,0.18)',
                                border: `1.5px solid rgba(201,162,74,0.5)`,
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 16px',
                                color: GOLD,
                            }}>
                                {point.icon}
                            </div>

                            {/* Title use first few words as title */}
                            <div style={{
                                fontFamily: 'Georgia, serif',
                                fontSize: '0.95rem', fontWeight: 700,
                                color: '#1A1A1A', marginBottom: '8px',
                                lineHeight: 1.3
                            }}>
                                {point.text.split(' ').slice(0, 4).join(' ')}
                            </div>

                            {/* Description */}
                            <p style={{ color: 'rgba(0,0,0,0.65)', fontSize: '0.78rem', lineHeight: 1.7, margin: 0 }}>
                                {point.text}
                            </p>

                            {/* Gold bottom accent line */}
                            <div style={{
                                position: 'absolute', bottom: 0, left: '20%', right: '20%', height: '3px',
                                background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                                borderRadius: '2px'
                            }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;