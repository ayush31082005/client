import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const BG = '#F5EDD8';
const CARD = '#EFE6CC';
const GOLD = '#C9A24A';
const BROWN = '#1A1A1A';
const BORDER = 'rgba(139,94,10,0.25)';

const BusinessOpportunity = ({ businessHighlights, businessImage, handleNavigation }) => {
    return (
        <section style={{ background: CARD, padding: '80px 0', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div style={{ height: '1px', width: '48px', background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
                        <span style={{ color: GOLD, fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Opportunity</span>
                        <div style={{ height: '1px', width: '48px', background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Text */}
                    <div>
                        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#1A1A1A', marginBottom: '16px', lineHeight: 1.2 }}>
                            A Powerful <em style={{ color: GOLD, fontStyle: 'italic' }}>Business Opportunity</em>
                        </h2>
                        <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: 1.9, fontSize: '0.9rem', marginBottom: '24px' }}>
                            Sanyukt Parivaar & Rich Life Pvt.Ltd. offers a proven MLM business plan that allows individuals to earn through product sales, team building, and leadership development.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                            {businessHighlights.map((highlight, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{
                                        width: '22px', height: '22px', minWidth: '22px',
                                        background: 'rgba(201,162,74,0.15)',
                                        border: `1px solid rgba(201,162,74,0.4)`,
                                        borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <Check size={11} color={GOLD} />
                                    </div>
                                    <span style={{ fontSize: '0.87rem', color: 'rgba(0,0,0,0.8)' }}>{highlight}</span>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => handleNavigation('/opportunity')}
                            style={{
                                padding: '13px 32px',
                                background: GOLD,
                                color: '#fff', fontWeight: 700,
                                fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase',
                                border: 'none', borderRadius: '4px', cursor: 'pointer',
                                display: 'inline-flex', alignItems: 'center', gap: '10px',
                                boxShadow: '0 4px 20px rgba(201,162,74,0.35)', transition: 'all 0.3s'
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = '#a87715'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.transform = 'none'; }}
                        >
                            View Opportunities <ArrowRight size={14} />
                        </button>
                    </div>

                    {/* Image */}
                    <div style={{ position: 'relative' }}>
                        <div style={{ border: `1px solid rgba(201,162,74,0.35)`, borderRadius: '4px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}>
                            <img src={businessImage} alt="Business Opportunity"
                                style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                        {/* Badge */}
                        <div style={{
                            position: 'absolute', top: '-16px', right: '-16px',
                            background: GOLD, padding: '18px 22px', borderRadius: '4px',
                            boxShadow: '0 8px 24px rgba(201,162,74,0.4)', textAlign: 'center'
                        }}>
                            <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>Unlimited</div>
                            <div style={{ fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginTop: '4px' }}>Income Potential</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessOpportunity;