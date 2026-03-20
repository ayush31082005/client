import React from 'react';
import { Smartphone, ArrowRight, Check } from 'lucide-react';

const BG = '#3D2B1F';
const CARD = '#EFE6CC';
const GOLD = '#C9A24A';
const BROWN = '#1A1A1A';

const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    background: '#FFFFFF',   // ✅ white background
    border: '1px solid rgba(201,162,74,0.4)',
    borderRadius: '4px',
    color: '#000000',        // ✅ black text
    fontSize: '0.9rem',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.3s'
};

const features = [
    'Instant recharge for all networks',
    'Secure payment via wallet or online',
    'Earn reward points on every recharge',
];

const RechargeSection = ({
    mobileNumber, setMobileNumber,
    operator, setOperator,
    amount, setAmount,
    operators, openPlanPopup,
    handleRecharge, isLoggedIn
}) => {
    return (
        <section id="recharge" style={{
            background: BG,
            padding: '80px 0',
            borderBottom: `1px solid rgba(139,94,10,0.2)`,
            position: 'relative', overflow: 'hidden'
        }}>
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

                    {/* Left: Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div style={{ height: '1px', width: '40px', background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
                            <span style={{ color: '#FFFFF4', fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Fast & Secure</span>
                        </div>
                        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#fffffa', lineHeight: 1.2, marginBottom: '16px' }}>
                            Instant Mobile<br />
                            <em style={{ color: '#FFFFF4', fontStyle: 'italic' }}>Recharge</em>
                        </h2>
                        <p
                            style={{
                                color: '#FFFFF4',
                                lineHeight: 1.85,
                                fontSize: '0.9rem',
                                marginBottom: '32px',
                                maxWidth: '380px'
                            }}
                        >
                            Experience the power of instant connectivity. Recharge any mobile instantly with zero waiting time.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {features.map((f, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{
                                        width: '22px', height: '22px', minWidth: '22px',
                                        background: '#fffffa',
                                        border: `1px solid rgba(201,162,74,0.4)`,
                                        borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <Check size={11} color={GOLD} />
                                    </div>
                                    <span style={{ fontSize: '0.87rem', color: '#fffff' }}>{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div style={{
                        background: '#FFFFFF',
                        border: `1px solid rgba(201,162,74,0.35)`,
                        borderRadius: '8px', padding: '36px',
                        boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
                        position: 'relative'
                    }}>
                        {/* Gold top line */}
                        <div style={{
                            position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                            width: '80px', height: '3px',
                            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`
                        }} />

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                            <div style={{
                                width: '40px', height: '40px',
                                background: 'rgba(201,162,74,0.12)',
                                border: `1px solid rgba(201,162,74,0.35)`,
                                borderRadius: '4px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Smartphone size={18} color={GOLD} />
                            </div>
                            <div>
                                <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', color: '#1A1A1A', fontWeight: 600 }}>Recharge Now</div>
                                <div style={{ fontSize: '0.7rem', color: 'rgba(0,0,0,0.5)', letterSpacing: '1px' }}>All operators supported</div>
                            </div>
                        </div>

                        <form onSubmit={handleRecharge} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div>
                                <label style={{ fontSize: '0.63rem', letterSpacing: '2px', textTransform: 'uppercase', textcolor: '#1A1A1A', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                                    Mobile Number
                                </label>
                                <input
                                    type="tel" maxLength={10}
                                    value={mobileNumber}
                                    onChange={e => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                                    placeholder="Enter 10-digit number"
                                    style={inputStyle}
                                    onFocus={e => { e.target.style.borderColor = GOLD; }}
                                    onBlur={e => { e.target.style.borderColor = 'rgba(139,94,10,0.3)'; }}
                                />
                            </div>

                            <div>
                                <label style={{ fontSize: '0.63rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#1A1A1A', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                                    Select Operator
                                </label>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                                    {operators.map(op => (
                                        <button
                                            key={op.id} type="button"
                                            onClick={() => setOperator(op.id)}
                                            style={{
                                                padding: '10px 4px',
                                                background: operator === op.id ? 'rgba(201,162,74,0.15)' : '#FFFFFF',
                                                border: operator === op.id ? `1.5px solid ${GOLD}` : `1px solid rgba(139,94,10,0.2)`,
                                                borderRadius: '4px', cursor: 'pointer',
                                                color: operator === op.id ? GOLD : 'rgba(0,0,0,0.6)',
                                                fontSize: '0.72rem', fontWeight: 600,
                                                textAlign: 'center', transition: 'all 0.2s'
                                            }}
                                        >
                                            {op.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                                    <label style={{ fontSize: '0.63rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#1A1A1A', fontWeight: 600 }}>Amount (₹)</label>
                                    <button type="button" onClick={openPlanPopup}
                                        style={{ background: 'none', border: 'none', color: '#1A1A1A', fontSize: '0.65rem', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                                        Browse Plans
                                    </button>
                                </div>
                                <input
                                    type="number" value={amount}
                                    onChange={e => setAmount(e.target.value)}
                                    placeholder="Enter amount" min="1"
                                    style={inputStyle}
                                    onFocus={e => { e.target.style.borderColor = GOLD; }}
                                    onBlur={e => { e.target.style.borderColor = 'rgba(139,94,10,0.3)'; }}
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    padding: '14px', width: '100%',
                                    background: GOLD,
                                    color: '#fff', fontWeight: 700,
                                    fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase',
                                    border: 'none', borderRadius: '4px', cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                                    boxShadow: '0 4px 16px rgba(201,162,74,0.3)', transition: 'all 0.3s'
                                }}
                                onMouseEnter={e => { e.currentTarget.style.background = '#a87715'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.transform = 'none'; }}
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