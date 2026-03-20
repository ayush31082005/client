import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Twitter, Check } from 'lucide-react';

const ContactFormSection = ({ contactForm, setContactForm, handleContactSubmit, contactSubmitting, contactSuccess }) => {
    const infoCards = [
        { icon: Phone, title: 'Call Us', lines: ['+91 7880370057'], sub: 'Mon-Sat, 9 AM - 7 PM' },
        { icon: Mail, title: 'Email Us', lines: ['info@sanyuktparivaar.com'], sub: 'We reply within 24 hours' },
        { icon: MapPin, title: 'Visit Us', lines: ['Bhatiniya, Gopinathpur, Harraiya, Basti - 272130, UP'], sub: 'Head Office' },
        { icon: Clock, title: 'Business Hours', lines: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 4:00 PM'], sub: 'IST' },
    ];

    const inputStyle = {
        width: '100%', padding: '12px 16px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: '2px', color: '#f5efe0',
        fontSize: '0.85rem', outline: 'none',
        fontFamily: 'inherit', transition: 'border-color 0.3s'
    };

    return (
        <section style={{ background: '#0f0d07', padding: '80px 0', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
            <div className="container mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #c9a84c)' }} />
                        <span style={{ color: '#c9a84c', fontSize: '0.65rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Get In Touch</span>
                        <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />
                    </div>
                    <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#fff', marginBottom: '10px' }}>
                        Contact <em style={{ color: '#e8c97a', fontStyle: 'italic' }}>Us</em>
                    </h2>
                    <p style={{ color: 'rgba(196,185,154,0.7)', fontSize: '0.85rem', maxWidth: '480px', margin: '0 auto' }}>
                        Have questions about joining our family or our products? We're here to help.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Info cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {infoCards.map(({ icon: Icon, title, lines, sub }, i) => (
                            <div key={i} style={{
                                display: 'flex', alignItems: 'flex-start', gap: '16px',
                                padding: '20px', background: '#13100a',
                                border: '1px solid rgba(201,168,76,0.15)',
                                borderRadius: '4px', transition: 'all 0.3s'
                            }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'; }}
                            >
                                <div style={{
                                    width: '44px', height: '44px', minWidth: '44px',
                                    background: 'rgba(201,168,76,0.1)',
                                    border: '1px solid rgba(201,168,76,0.3)',
                                    borderRadius: '4px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <Icon size={18} color="#c9a84c" />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, color: '#e8c97a', marginBottom: '4px', fontSize: '0.9rem' }}>{title}</div>
                                    {lines.map((l, j) => <div key={j} style={{ fontSize: '0.82rem', color: 'rgba(245,239,224,0.8)' }}>{l}</div>)}
                                    <div style={{ fontSize: '0.7rem', color: 'rgba(196,185,154,0.5)', marginTop: '4px' }}>{sub}</div>
                                </div>
                            </div>
                        ))}

                        {/* Social */}
                        <div style={{
                            padding: '20px', background: 'rgba(201,168,76,0.06)',
                            border: '1px solid rgba(201,168,76,0.2)', borderRadius: '4px'
                        }}>
                            <div style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, marginBottom: '14px' }}>Follow Us</div>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                {[
                                    { icon: Facebook, href: 'https://www.facebook.com/share/1CLin8tmY3/' },
                                    { icon: Instagram, href: 'https://www.instagram.com/sanyukt_parivaar_rich_life_57' },
                                    { icon: Youtube, href: 'https://www.youtube.com/@Sanyuktparivaarrichlife' },
                                    { icon: Twitter, href: 'https://x.com/sprichlife_57' },
                                ].map(({ icon: Icon, href }, i) => (
                                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{
                                        width: '40px', height: '40px',
                                        background: 'rgba(201,168,76,0.1)',
                                        border: '1px solid rgba(201,168,76,0.3)',
                                        borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#c9a84c', textDecoration: 'none', transition: 'all 0.3s'
                                    }}
                                        onMouseEnter={e => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.color = '#0a0800'; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; e.currentTarget.style.color = '#c9a84c'; }}
                                    >
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div style={{
                        background: '#13100a', border: '1px solid rgba(201,168,76,0.2)',
                        borderRadius: '4px', padding: '36px'
                    }}>
                        {contactSuccess ? (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <div style={{
                                    width: '64px', height: '64px', borderRadius: '50%',
                                    background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 20px'
                                }}>
                                    <Check size={28} color="#c9a84c" />
                                </div>
                                <h3 style={{ fontFamily: 'Georgia, serif', color: '#e8c97a', fontSize: '1.4rem', marginBottom: '8px' }}>Message Sent!</h3>
                                <p style={{ color: 'rgba(196,185,154,0.7)', fontSize: '0.85rem' }}>We'll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div className="grid grid-cols-2 gap-4">
                                    {['firstName', 'lastName'].map((field) => (
                                        <div key={field}>
                                            <label style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                                                {field === 'firstName' ? 'First Name' : 'Last Name'}
                                            </label>
                                            <input
                                                type="text"
                                                value={contactForm[field]}
                                                onChange={e => setContactForm(p => ({ ...p, [field]: e.target.value }))}
                                                style={inputStyle}
                                                onFocus={e => { e.target.style.borderColor = '#c9a84c'; }}
                                                onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {[
                                    { field: 'email', label: 'Email Address', type: 'email' },
                                    { field: 'phone', label: 'Phone Number', type: 'tel' },
                                ].map(({ field, label, type }) => (
                                    <div key={field}>
                                        <label style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, display: 'block', marginBottom: '6px' }}>{label}</label>
                                        <input type={type} value={contactForm[field]} onChange={e => setContactForm(p => ({ ...p, [field]: e.target.value }))} style={inputStyle}
                                            onFocus={e => { e.target.style.borderColor = '#c9a84c'; }}
                                            onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }}
                                        />
                                    </div>
                                ))}
                                <div>
                                    <label style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Message</label>
                                    <textarea
                                        rows={4}
                                        value={contactForm.message}
                                        onChange={e => setContactForm(p => ({ ...p, message: e.target.value }))}
                                        style={{ ...inputStyle, resize: 'vertical' }}
                                        onFocus={e => { e.target.style.borderColor = '#c9a84c'; }}
                                        onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={contactSubmitting}
                                    style={{
                                        padding: '14px', width: '100%',
                                        background: 'linear-gradient(135deg, #c9a84c, #8a6b2a)',
                                        color: '#0a0800', fontWeight: 700,
                                        fontSize: '0.72rem', letterSpacing: '2.5px', textTransform: 'uppercase',
                                        border: 'none', borderRadius: '2px', cursor: 'pointer',
                                        opacity: contactSubmitting ? 0.7 : 1, transition: 'all 0.3s'
                                    }}
                                    onMouseEnter={e => { if (!contactSubmitting) e.currentTarget.style.boxShadow = '0 6px 24px rgba(201,168,76,0.4)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
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
