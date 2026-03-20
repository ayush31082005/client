import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const TrainingSection = ({ supportItems, trainingImage, handleNavigation }) => {
    return (
        <section style={{ background: '#0a0800', padding: '80px 0', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Image */}
                    <div style={{ position: 'relative', order: 1 }}>
                        <div style={{
                            border: '1px solid rgba(201,168,76,0.25)', borderRadius: '4px',
                            overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
                        }}>
                            <img src={trainingImage} alt="Training"
                                style={{ width: '100%', height: '320px', objectFit: 'cover', filter: 'brightness(0.8) sepia(0.15)', display: 'block' }}
                            />
                        </div>
                        {/* Floating badge */}
                        <div style={{
                            position: 'absolute', bottom: '-16px', left: '-16px',
                            background: '#13100a', border: '1px solid rgba(201,168,76,0.4)',
                            padding: '14px 18px', borderRadius: '4px',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                            display: 'flex', alignItems: 'center', gap: '12px'
                        }}>
                            <div style={{
                                background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)',
                                borderRadius: '50%', width: '36px', height: '36px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Play size={14} color="#c9a84c" fill="#c9a84c" />
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#e8c97a' }}>Leadership Programs</div>
                                <div style={{ fontSize: '0.7rem', color: 'rgba(196,185,154,0.7)' }}>Top 10 in India</div>
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div style={{ order: 2 }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, #c9a84c)' }} />
                            <span style={{ color: '#c9a84c', fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Training</span>
                        </div>
                        <h2 style={{
                            fontFamily: 'Georgia, serif', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                            color: '#fff', marginBottom: '16px', lineHeight: 1.2
                        }}>
                            Training & <em style={{ color: '#e8c97a', fontStyle: 'italic' }}>Support System</em>
                        </h2>
                        <p style={{ color: 'rgba(196,185,154,0.85)', lineHeight: 1.9, fontSize: '0.9rem', marginBottom: '24px' }}>
                            We believe success comes with knowledge and guidance. That's why we provide structured training programs, online resources, offline seminars, and continuous mentorship to help every partner grow confidently.
                        </p>

                        <div style={{
                            borderLeft: '2px solid rgba(201,168,76,0.4)',
                            paddingLeft: '18px', marginBottom: '32px'
                        }}>
                            <h3 style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, marginBottom: '14px' }}>Support Includes</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {supportItems.map((item, index) => (
                                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{
                                            width: '5px', height: '5px', borderRadius: '50%',
                                            background: '#c9a84c', minWidth: '5px'
                                        }} />
                                        <span style={{ fontSize: '0.85rem', color: 'rgba(245,239,224,0.8)' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => handleNavigation('/training')}
                            style={{
                                background: 'transparent', border: 'none',
                                color: '#c9a84c', cursor: 'pointer',
                                fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase',
                                fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px',
                                borderBottom: '1px solid rgba(201,168,76,0.4)', paddingBottom: '3px',
                                transition: 'color 0.3s'
                            }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#e8c97a'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#c9a84c'; }}
                        >
                            Learn More <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainingSection;
