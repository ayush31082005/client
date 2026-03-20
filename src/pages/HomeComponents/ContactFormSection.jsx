import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Twitter, Check } from 'lucide-react';

const BG = '#F5EDD8';
const CARD = '#EFE6CC';
const WHITE = '#FFFFFF';
const GOLD = '#C9A24A';
const BROWN = '#1A1A1A';

const inputStyle = {
    width: '100%', padding: '12px 16px',
    background: '#FFFFFF',
    border: '1px solid rgba(139,94,10,0.25)',
    borderRadius: '4px', color: '#1A1A1A',
    fontSize: '0.85rem', outline: 'none',
    fontFamily: 'inherit', transition: 'border-color 0.3s'
};

const ContactFormSection = ({ contactForm, setContactForm, handleContactSubmit, contactSubmitting, contactSuccess }) => {
    const infoCards = [
        { icon: Phone, title: 'Call Us', lines: ['+91 7880370057'], sub: 'Mon-Sat, 9 AM - 7 PM' },
        { icon: Mail, title: 'Email Us', lines: ['info@sanyuktparivaar.com'], sub: 'We reply within 24 hours' },
        { icon: MapPin, title: 'Visit Us', lines: ['Bhatiniya, Gopinathpur, Harraiya, Basti - 272130, UP'], sub: 'Head Office' },
        { icon: Clock, title: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 4:00 PM'], sub: 'IST' },
    ];

    return (
        <section style={{ background: BG, padding: '80px 0', borderTop: '1px solid rgba(139,94,10,0.2)' }}>
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <div style={{ height: '1px', width: '60px', background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
                        <span style={{ color: GOLD, fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Get In Touch</span>
                        <div style={{ height: '1px', width: '60px', background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
                    </div>
                    <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#1A1A1A', marginBottom: '10px' }}>
                        Contact <em style={{ color: GOLD, fontStyle: 'italic' }}>Us</em>
                    </h2>
                    <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.85rem', maxWidth: '480px', margin: '0 auto' }}>
                        Have questions about joining our family or our products? We're here to help.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Info cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {infoCards.map(({ icon: Icon, title, lines, sub }, i) => (
                            <div key={i} style={{
                                display: 'flex', alignItems: 'flex-start', gap: '16px',
                                padding: '20px', background: CARD,
                                border: '1px solid rgba(139,94,10,0.2)',
                                borderRadius: '4px', transition: 'all 0.3s',
                                boxShadow: '0 2px 8px rgba(44,26,14,0.05)'
                            }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,162,74,0.15)'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(139,94,10,0.2)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(44,26,14,0.05)'; }}
                            >
                                <div style={{
                                    width: '44px', height: '44px', minWidth: '44px',
                                    background: 'rgba(201,162,74,0.12)',
                                    border: '1px solid rgba(201,162,74,0.3)',
                                    borderRadius: '4px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <Icon size={18} color={GOLD} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, color: GOLD, marginBottom: '4px', fontSize: '0.9rem' }}>{title}</div>
                                    {lines.map((l, j) => <div key={j} style={{ fontSize: '0.82rem', color: 'rgba(0,0,0,0.75)' }}>{l}</div>)}
                                    <div style={{ fontSize: '0.7rem', color: 'rgba(0,0,0,0.45)', marginTop: '4px' }}>{sub}</div>
                                </div>
                            </div>
                        ))}

                        {/* Social */}
                        <div style={{ padding: '20px', background: CARD, border: '1px solid rgba(139,94,10,0.2)', borderRadius: '4px' }}>
                            <div style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: GOLD, fontWeight: 600, marginBottom: '14px' }}>Follow Us</div>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                {[
                                    { icon: Facebook, href: 'https://www.facebook.com/share/1CLin8tmY3/' },
                                    { icon: Instagram, href: 'https://www.instagram.com/sanyukt_parivaar_rich_life_57' },
                                    { icon: Youtube, href: 'https://www.youtube.com/@Sanyuktparivaarrichlife' },
                                    { icon: Twitter, href: 'https://x.com/sprichlife_57' },
                                ].map(({ icon: Icon, href }, i) => (
                                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{
                                        width: '40px', height: '40px',
                                        background: 'rgba(201,162,74,0.1)',
                                        border: '1px solid rgba(201,162,74,0.3)',
                                        borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: GOLD, textDecoration: 'none', transition: 'all 0.3s'
                                    }}
                                        onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = '#fff'; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,162,74,0.1)'; e.currentTarget.style.color = GOLD; }}
                                    >
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div style={{ background: '#FFFFFF', border: '1px solid rgba(139,94,10,0.2)', borderRadius: '8px', padding: '36px', boxShadow: '0 4px 20px rgba(44,26,14,0.08)' }}>
                        <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', color: '#1A1A1A', marginBottom: '6px' }}>Send a Message</h3>
                        <p style={{ fontSize: '0.82rem', color: 'rgba(0,0,0,0.55)', marginBottom: '24px' }}>Fill in your details and we'll get back to you.</p>

                        {contactSuccess ? (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <div style={{
                                    width: '64px', height: '64px', borderRadius: '50%',
                                    background: 'rgba(201,162,74,0.12)', border: '1px solid rgba(201,162,74,0.35)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px'
                                }}>
                                    <Check size={28} color={GOLD} />
                                </div>
                                <h4 style={{ fontFamily: 'Georgia, serif', color: GOLD, fontSize: '1.2rem', marginBottom: '6px' }}>Message Sent!</h4>
                                <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.85rem' }}>We'll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <div className="grid grid-cols-2 gap-3">
                                    {['firstName', 'lastName'].map(field => (
                                        <div key={field}>
                                            <label style={{ fontSize: '0.65rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: GOLD, fontWeight: 600, display: 'block', marginBottom: '5px' }}>
                                                {field === 'firstName' ? 'First Name' : 'Last Name'}
                                            </label>
                                            <input type="text" value={contactForm[field]}
                                                onChange={e => setContactForm(p => ({ ...p, [field]: e.target.value }))}
                                                style={inputStyle}
                                                onFocus={e => { e.target.style.borderColor = GOLD; }}
                                                onBlur={e => { e.target.style.borderColor = 'rgba(139,94,10,0.25)'; }}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {[
                                    { field: 'email', label: 'Email Address', type: 'email' },
                                    { field: 'phone', label: 'Phone Number', type: 'tel' },
                                ].map(({ field, label, type }) => (
                                    <div key={field}>
                                        <label style={{ fontSize: '0.65rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: GOLD, fontWeight: 600, display: 'block', marginBottom: '5px' }}>{label}</label>
                                        <input type={type} value={contactForm[field]} onChange={e => setContactForm(p => ({ ...p, [field]: e.target.value }))} style={inputStyle}
                                            onFocus={e => { e.target.style.borderColor = GOLD; }}
                                            onBlur={e => { e.target.style.borderColor = 'rgba(139,94,10,0.25)'; }}
                                        />
                                    </div>
                                ))}
                                <div>
                                    <label style={{ fontSize: '0.65rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: GOLD, fontWeight: 600, display: 'block', marginBottom: '5px' }}>Message</label>
                                    <textarea rows={4} value={contactForm.message}
                                        onChange={e => setContactForm(p => ({ ...p, message: e.target.value }))}
                                        style={{ ...inputStyle, resize: 'vertical' }}
                                        onFocus={e => { e.target.style.borderColor = GOLD; }}
                                        onBlur={e => { e.target.style.borderColor = 'rgba(139,94,10,0.25)'; }}
                                    />
                                </div>
                                <button
                                    type="submit" disabled={contactSubmitting}
                                    style={{
                                        padding: '14px', width: '100%',
                                        background: GOLD, color: '#fff', fontWeight: 700,
                                        fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase',
                                        border: 'none', borderRadius: '4px', cursor: 'pointer',
                                        opacity: contactSubmitting ? 0.7 : 1, transition: 'all 0.3s',
                                        boxShadow: '0 4px 14px rgba(201,162,74,0.3)'
                                    }}
                                    onMouseEnter={e => { if (!contactSubmitting) { e.currentTarget.style.background = '#a87715'; e.currentTarget.style.transform = 'translateY(-1px)'; } }}
                                    onMouseLeave={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.transform = 'none'; }}
                                >
                                    {contactSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;