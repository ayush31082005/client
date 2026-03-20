import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const BusinessOpportunity = ({ businessHighlights, businessImage, handleNavigation }) => {
    return (
        <section style={{
            background: 'linear-gradient(135deg, #0f0d07 0%, #1a1508 50%, #0f0d07 100%)',
            padding: '80px 0',
            borderTop: '1px solid rgba(201,168,76,0.12)',
            borderBottom: '1px solid rgba(201,168,76,0.12)',
            position: 'relative', overflow: 'hidden'
        }}>
            {/* Background radial glow */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                width: '700px', height: '700px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(201,168,76,0.05), transparent 65%)',
                pointerEvents: 'none'
            }} />

            <div className="container mx-auto px-4 md:px-12">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Text */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, #c9a84c)' }} />
                            <span style={{ color: '#c9a84c', fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Opportunity</span>
                        </div>
                        <h2 style={{
                            fontFamily: 'Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                            color: '#fff', marginBottom: '16px', lineHeight: 1.2
                        }}>
                            A Powerful <em style={{ color: '#e8c97a', fontStyle: 'italic' }}>Business Opportunity</em>
                        </h2>
                        <p style={{ color: 'rgba(196,185,154,0.85)', lineHeight: 1.9, fontSize: '0.9rem', marginBottom: '24px' }}>
                            Sanyukt Parivaar & Rich Life Pvt.Ltd. offers a proven MLM business plan that allows individuals to earn through product sales, team building, and leadership development.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
                            {businessHighlights.map((highlight, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{
                                        width: '22px', height: '22px', minWidth: '22px',
                                        background: 'rgba(201,168,76,0.15)',
                                        border: '1px solid rgba(201,168,76,0.4)',
                                        borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <Check size={11} color="#c9a84c" />
                                    </div>
                                    <span style={{ fontSize: '0.87rem', color: 'rgba(245,239,224,0.85)' }}>{highlight}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => handleNavigation('/opportunity')}
                            style={{
                                padding: '13px 32px',
                                background: 'linear-gradient(135deg, #c9a84c, #8a6b2a)',
                                color: '#0a0800', fontWeight: 700,
                                fontSize: '0.72rem', letterSpacing: '2.5px', textTransform: 'uppercase',
                                border: 'none', borderRadius: '2px', cursor: 'pointer',
                                display: 'inline-flex', alignItems: 'center', gap: '10px',
                                boxShadow: '0 4px 24px rgba(201,168,76,0.3)',
                                transition: 'all 0.3s'
                            }}
                            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 32px rgba(201,168,76,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(201,168,76,0.3)'; e.currentTarget.style.transform = 'none'; }}
                        >
                            View Opportunities <ArrowRight size={14} />
                        </button>
                    </div>

                    {/* Image */}
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            border: '1px solid rgba(201,168,76,0.25)',
                            borderRadius: '4px', overflow: 'hidden',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
                        }}>
                            <img src={businessImage} alt="Business Opportunity"
                                style={{ width: '100%', height: '300px', objectFit: 'cover', filter: 'brightness(0.8) sepia(0.15)', display: 'block' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,0,0.4), transparent)' }} />
                        </div>
                        {/* Floating badge */}
                        <div style={{
                            position: 'absolute', top: '-16px', right: '-16px',
                            background: 'linear-gradient(135deg, #c9a84c, #8a6b2a)',
                            padding: '18px 22px', borderRadius: '4px',
                            boxShadow: '0 8px 32px rgba(201,168,76,0.4)', textAlign: 'center'
                        }}>
                            <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', fontWeight: 700, color: '#0a0800', lineHeight: 1 }}>Unlimited</div>
                            <div style={{ fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(10,8,0,0.75)', marginTop: '4px' }}>Income Potential</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessOpportunity;
