import React from 'react';
import { Smartphone, ArrowRight, Check } from 'lucide-react';

const RechargeSection = ({
    mobileNumber, setMobileNumber,
    operator, setOperator,
    amount, setAmount,
    operators, openPlanPopup,
    handleRecharge, isLoggedIn
}) => {
    const inputStyle = {
        width: '100%', padding: '13px 16px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: '2px', color: '#f5efe0',
        fontSize: '0.9rem', outline: 'none',
        fontFamily: 'inherit', transition: 'border-color 0.3s'
    };

    const features = [
        'Instant recharge for all networks',
        'Secure payment via wallet or online',
        'Earn reward points on every recharge',
    ];

    return (
        <section id="recharge" style={{
            background: 'linear-gradient(135deg, #0a0800 0%, #161209 50%, #0a0800 100%)',
            padding: '80px 0',
            borderBottom: '1px solid rgba(201,168,76,0.12)',
            position: 'relative', overflow: 'hidden'
        }}>
            {/* Glow */}
            <div style={{
                position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)',
                width: '500px', height: '500px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(201,168,76,0.06), transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container mx-auto px-4 md:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

                    {/* Left: Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, #c9a84c)' }} />
                            <span style={{ color: '#c9a84c', fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Fast & Secure</span>
                        </div>
                        <h2 style={{
                            fontFamily: 'Georgia, serif',
                            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                            color: '#fff', lineHeight: 1.2, marginBottom: '16px'
                        }}>
                            Instant Mobile<br />
                            <em style={{ color: '#e8c97a', fontStyle: 'italic' }}>Recharge</em>
                        </h2>
                        <p style={{ color: 'rgba(196,185,154,0.8)', lineHeight: 1.85, fontSize: '0.9rem', marginBottom: '32px', maxWidth: '380px' }}>
                            Experience the power of instant connectivity. Recharge any mobile instantly with zero waiting time.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {features.map((f, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{
                                        width: '22px', height: '22px', minWidth: '22px',
                                        background: 'rgba(201,168,76,0.12)',
                                        border: '1px solid rgba(201,168,76,0.35)',
                                        borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <Check size={11} color="#c9a84c" />
                                    </div>
                                    <span style={{ fontSize: '0.87rem', color: 'rgba(245,239,224,0.8)' }}>{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div style={{
                        background: '#13100a',
                        border: '1px solid rgba(201,168,76,0.2)',
                        borderRadius: '4px', padding: '36px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                        position: 'relative'
                    }}>
                        {/* Gold top line */}
                        <div style={{
                            position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                            width: '80px', height: '2px',
                            background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)'
                        }} />

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                            <div style={{
                                width: '40px', height: '40px',
                                background: 'rgba(201,168,76,0.12)',
                                border: '1px solid rgba(201,168,76,0.3)',
                                borderRadius: '4px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Smartphone size={18} color="#c9a84c" />
                            </div>
                            <div>
                                <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', color: '#e8c97a' }}>Recharge Now</div>
                                <div style={{ fontSize: '0.7rem', color: 'rgba(196,185,154,0.5)', letterSpacing: '1px' }}>All operators supported</div>
                            </div>
                        </div>

                        <form onSubmit={handleRecharge} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {/* Mobile Number */}
                            <div>
                                <label style={{ fontSize: '0.63rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                                    Mobile Number
                                </label>
                                <input
                                    type="tel" maxLength={10}
                                    value={mobileNumber}
                                    onChange={e => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                                    placeholder="Enter 10-digit number"
                                    style={{ ...inputStyle }}
                                    onFocus={e => { e.target.style.borderColor = '#c9a84c'; }}
                                    onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }}
                                />
                            </div>

                            {/* Operator */}
                            <div>
                                <label style={{ fontSize: '0.63rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                                    Select Operator
                                </label>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                                    {operators.map(op => (
                                        <button
                                            key={op.id}
                                            type="button"
                                            onClick={() => setOperator(op.id)}
                                            style={{
                                                padding: '10px 4px',
                                                background: operator === op.id ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.03)',
                                                border: operator === op.id ? '1px solid #c9a84c' : '1px solid rgba(201,168,76,0.15)',
                                                borderRadius: '2px', cursor: 'pointer',
                                                color: operator === op.id ? '#e8c97a' : 'rgba(196,185,154,0.6)',
                                                fontSize: '0.7rem', fontWeight: 600,
                                                textAlign: 'center', transition: 'all 0.3s'
                                            }}
                                        >
                                            {op.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Amount */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                                    <label style={{ fontSize: '0.63rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600 }}>
                                        Amount (₹)
                                    </label>
                                    <button
                                        type="button"
                                        onClick={openPlanPopup}
                                        style={{
                                            background: 'none', border: 'none',
                                            color: '#c9a84c', fontSize: '0.65rem',
                                            letterSpacing: '1.5px', textTransform: 'uppercase',
                                            cursor: 'pointer', fontWeight: 600,
                                            textDecoration: 'underline', textUnderlineOffset: '3px'
                                        }}
                                    >
                                        Browse Plans
                                    </button>
                                </div>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={e => setAmount(e.target.value)}
                                    placeholder="Enter amount"
                                    min="1"
                                    style={inputStyle}
                                    onFocus={e => { e.target.style.borderColor = '#c9a84c'; }}
                                    onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }}
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    padding: '14px', width: '100%',
                                    background: 'linear-gradient(135deg, #c9a84c, #8a6b2a)',
                                    color: '#0a0800', fontWeight: 700,
                                    fontSize: '0.72rem', letterSpacing: '2.5px', textTransform: 'uppercase',
                                    border: 'none', borderRadius: '2px', cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                                    boxShadow: '0 4px 20px rgba(201,168,76,0.25)', transition: 'all 0.3s'
                                }}
                                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 28px rgba(201,168,76,0.45)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,168,76,0.25)'; e.currentTarget.style.transform = 'none'; }}
                            >
                                {isLoggedIn ? 'Proceed to Recharge' : 'Login to Recharge'} <ArrowRight size={14} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RechargeSection;
