// 🔤 Add to index.html: <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet">
import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

// ─── Theme Constants ────────────────────────────────────────────────────────
const DARK_BG = '#1E1510';          // deep espresso — matches screenshot
const DARK_BG_DEEPER = '#140F0A';
const GOLD = '#C9A84C';
const GOLD_GRADIENT = 'linear-gradient(90deg, #C9A84C 0%, #E8C66A 50%, #C9A84C 100%)';
const BORDER_COLOR = '#3A2A1A';
const TEXT_MUTED = 'rgba(201,168,76,0.75)';

const goldText = {
    background: GOLD_GRADIENT,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
};

// ─── Styled Components ───────────────────────────────────────────────────────

const FooterContainer = styled(Box)({
    backgroundColor: DARK_BG,
    color: GOLD,
    fontFamily: "'Playfair Display', serif",
    width: '100%',
    borderTop: `1px solid ${BORDER_COLOR}`,
});

const FooterContent = styled(Container)(({ theme }) => ({
    maxWidth: '1200px !important',
    margin: '0 auto',
    paddingTop: '52px',
    paddingBottom: '52px',
    [theme?.breakpoints?.up('md') ?? '@media (min-width:900px)']: {
        paddingTop: '72px',
        paddingBottom: '72px',
    },
}));

const LogoContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '22px',
    cursor: 'pointer',
});

const LogoImage = styled('img')({
    height: '48px',
    width: 'auto',
    objectFit: 'contain',
    filter: 'drop-shadow(0 0 6px rgba(201,168,76,0.4))',
});

const LogoTextContainer = styled(Box)({ display: 'flex', flexDirection: 'column' });

const LogoMain = styled('span')({
    fontFamily: "'Playfair Display', serif",
    fontWeight: 800,
    fontSize: '1.45rem',
    background: GOLD_GRADIENT,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '0.03em',
    lineHeight: 1.2,
});

const CompanyDescription = styled(Typography)({
    fontSize: '13.5px',
    lineHeight: 1.75,
    color: TEXT_MUTED,
    fontFamily: "'Playfair Display', serif",
    maxWidth: '320px',
    marginBottom: '24px',
});

const SectionTitle = styled(Typography)({
    fontSize: '14.5px',
    fontWeight: 700,
    background: GOLD_GRADIENT,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '16px',
    fontFamily: "'Playfair Display', serif",
    borderBottom: `1px solid ${BORDER_COLOR}`,
    paddingBottom: '10px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
});

const FooterLink = styled(Link)({
    display: 'block',
    color: TEXT_MUTED,
    fontSize: '13px',
    textDecoration: 'none',
    marginBottom: '9px',
    fontFamily: "'Playfair Display', serif",
    transition: 'all 0.22s ease',
    cursor: 'pointer',
    '&:hover': {
        paddingLeft: '5px',
        background: GOLD_GRADIENT,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    },
});

const ContactText = styled(Typography)({
    fontSize: '13.5px',
    lineHeight: 1.65,
    color: TEXT_MUTED,
    marginBottom: '8px',
    fontFamily: "'Playfair Display', serif",
});

const ContactLine = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '10px',
    fontSize: '13.5px',
    color: TEXT_MUTED,
    fontFamily: "'Playfair Display', serif",
    cursor: 'pointer',
    transition: 'opacity 0.2s',
    '&:hover': { opacity: 1 },
});

const SocialButton = styled('a')({
    color: GOLD,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(201,168,76,0.08)',
    border: `1px solid ${BORDER_COLOR}`,
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: 'rgba(201,168,76,0.22)',
        border: `1px solid ${GOLD}`,
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 14px rgba(201,168,76,0.25)',
    },
});

const BottomBar = styled(Box)({
    backgroundColor: DARK_BG_DEEPER,
    padding: '16px 24px',
    borderTop: `1px solid ${BORDER_COLOR}`,
});

const CopyrightText = styled(Typography)({
    color: TEXT_MUTED,
    fontSize: '13px',
    fontFamily: "'Playfair Display', serif",
});

// ─── Component ────────────────────────────────────────────────────────────────

const Footer = () => {
    const [logoError, setLogoError] = useState(false);

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/company/about' },
        { name: 'Company Profile', path: '/company/profile' },
        { name: 'Our Products', path: '/products' },
        { name: 'Opportunities', path: '/opportunities' },
        { name: 'Seminar List', path: '/seminars' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Downloads', path: '/downloads' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const policyLinks = [
        { name: 'Exchange Policy', path: '/exchange-policy' },
        { name: 'Marketing & Sales Policy', path: '/marketing-sales-policy' },
        { name: 'Order Policy', path: '/order-policy' },
        { name: 'Payment Policy', path: '/payment-policy' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms & Conditions', path: '/terms-conditions' },
        { name: 'Cancellation Policy', path: '/cancellation-policy' },
        { name: 'Shipping & Delivery Policy', path: '/shipment-delivery-policy' },
        { name: 'Testimonial Policy', path: '/testimonial-policy' },
        { name: 'Grievance', path: '/grievance' },
        { name: 'FAQ', path: '/faq' },
    ];

    const handleNavigation = (path) => { window.location.href = path; };

    return (
        <FooterContainer>
            <FooterContent>
                <Grid container spacing={4} justifyContent="space-between">

                    {/* ── COLUMN 1 – COMPANY INFO ── */}
                    <Grid item xs={12} md={4}>
                        <LogoContainer onClick={() => handleNavigation('/')}>
                            {!logoError && (
                                <LogoImage
                                    src="/logo.png"
                                    alt="Sanyukt Parivaar Logo"
                                    onError={() => setLogoError(true)}
                                />
                            )}
                            <LogoTextContainer>
                                <LogoMain>Sanyukt Parivaar</LogoMain>
                                <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, ...goldText, mb: 0.4 }}>
                                    &amp; Rich Life Pvt.Ltd.
                                </Typography>
                                <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, color: TEXT_MUTED, letterSpacing: '0.02em' }}>
                                    Together We Grow, Together We Prosper
                                </Typography>
                            </LogoTextContainer>
                        </LogoContainer>

                        <CompanyDescription>
                            Sanyukt Parivaar &amp; Rich Life Pvt.Ltd. is a direct selling and network marketing
                            organization founded by experienced professionals. We empower individuals to achieve
                            financial independence by promoting high-quality lifestyle, wellness, personal care,
                            and home utility products through a transparent and rewarding MLM business model.
                        </CompanyDescription>

                        <Box sx={{ display: 'flex', gap: '12px', mt: '4px' }}>
                            {[
                                { href: 'https://www.facebook.com/share/1CLin8tmY3/', icon: <FacebookIcon sx={{ fontSize: '17px' }} />, label: 'Facebook' },
                                { href: 'https://www.instagram.com/sanyukt_parivaar_rich_life_57', icon: <InstagramIcon sx={{ fontSize: '17px' }} />, label: 'Instagram' },
                                { href: 'https://www.youtube.com/@Sanyuktparivaarrichlife', icon: <YouTubeIcon sx={{ fontSize: '17px' }} />, label: 'YouTube' },
                                { href: 'https://x.com/sprichlife_57', icon: <XIcon sx={{ fontSize: '15px' }} />, label: 'X' },
                            ].map(s => (
                                <SocialButton key={s.label} href={s.href} target="_blank" aria-label={s.label}>
                                    {s.icon}
                                </SocialButton>
                            ))}
                        </Box>
                    </Grid>

                    {/* ── COLUMN 2 – QUICK LINKS ── */}
                    <Grid item xs={6} sm={6} md={2.5}>
                        <SectionTitle>Quick Links</SectionTitle>
                        {quickLinks.map((link, i) => (
                            <FooterLink key={i} onClick={() => handleNavigation(link.path)}>
                                {link.name}
                            </FooterLink>
                        ))}
                    </Grid>

                    {/* ── COLUMN 3 – POLICIES + CONTACT ── */}
                    <Grid item xs={6} sm={6} md={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <SectionTitle>Our Policies</SectionTitle>
                                {policyLinks.map((link, i) => (
                                    <FooterLink key={i} onClick={() => handleNavigation(link.path)}>
                                        {link.name}
                                    </FooterLink>
                                ))}
                            </Grid>

                            {/* Contact – desktop */}
                            <Grid item xs={12} sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <SectionTitle>Contact Us</SectionTitle>
                                <ContactText sx={{ fontWeight: 700, mb: 1.5, fontSize: '14px', ...goldText }}>
                                    Sanyukt Parivaar &amp; Rich Life Pvt.Ltd.
                                </ContactText>
                                <ContactText sx={{
                                    fontSize: '12.5px', fontWeight: 600,
                                    borderLeft: `2px solid ${GOLD}`,
                                    pl: 1.5, mb: 2, opacity: 0.8,
                                }}>
                                    Bhatiniya, Gopinathpur, Harraiya,<br />
                                    Basti - 272130, Uttar Pradesh
                                </ContactText>

                                <ContactLine onClick={() => window.open('tel:+917880370057', '_self')}>
                                    <Typography sx={{ fontWeight: 700, mr: 0.5, ...goldText, fontSize: '12.5px' }}>
                                        Phone:
                                    </Typography>
                                    +91 78803 70057
                                </ContactLine>
                                <ContactLine onClick={() => window.open('mailto:info@sanyuktparivaar.com', '_self')}>
                                    <Typography sx={{ fontWeight: 700, mr: 0.5, ...goldText, fontSize: '12.5px' }}>
                                        Email:
                                    </Typography>
                                    info@sanyuktparivaar.com
                                </ContactLine>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Contact – mobile only */}
                    <Grid item xs={12} sx={{ display: { xs: 'block', sm: 'none' }, pt: '0 !important' }}>
                        <SectionTitle>Contact Us</SectionTitle>
                        <ContactText sx={{ fontWeight: 700, mb: 1, fontSize: '13.5px', ...goldText }}>
                            Sanyukt Parivaar &amp; Rich Life Pvt.Ltd.
                        </ContactText>
                        <ContactText sx={{ fontSize: '12.5px', fontWeight: 600, opacity: 0.8, borderLeft: `2px solid ${GOLD}`, pl: 1.5, mb: 1.5 }}>
                            Bhatiniya, Gopinathpur, Harraiya,<br />
                            Basti - 272130, Uttar Pradesh
                        </ContactText>
                        <ContactLine onClick={() => window.open('tel:+917880370057', '_self')}>
                            <Typography sx={{ fontWeight: 700, mr: 0.5, ...goldText, fontSize: '12.5px' }}>Phone:</Typography>
                            +91 78803 70057
                        </ContactLine>
                        <ContactLine onClick={() => window.open('mailto:info@sanyuktparivaar.com', '_self')}>
                            <Typography sx={{ fontWeight: 700, mr: 0.5, ...goldText, fontSize: '12.5px' }}>Email:</Typography>
                            info@sanyuktparivaar.com
                        </ContactLine>
                    </Grid>

                </Grid>
            </FooterContent>

            {/* ── BOTTOM BAR ── */}
            <BottomBar>
                <Box sx={{
                    maxWidth: '1200px', margin: '0 auto',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: { xs: 1.5, md: 0 },
                }}>
                    <CopyrightText>
                        © 2026 Sanyukt Parivaar &amp; Rich Life Pvt.Ltd.. All Rights Reserved.
                    </CopyrightText>

                    <CopyrightText sx={{ fontSize: '11.5px', display: 'flex', alignItems: 'center', letterSpacing: '0.5px' }}>
                        POWERED BY
                        <Link
                            href="https://aigrowthexa.com"
                            target="_blank"
                            sx={{ ml: 1, display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none', '&:hover': { opacity: 0.8 } }}
                        >
                            <Box sx={{
                                background: GOLD_GRADIENT,
                                color: DARK_BG,
                                px: 1, py: 0.25, borderRadius: '4px',
                                fontWeight: 900, fontSize: '10.5px', letterSpacing: '1px',
                                WebkitTextFillColor: DARK_BG,
                            }}>
                                AI
                            </Box>
                            <Box sx={{
                                background: GOLD_GRADIENT,
                                backgroundSize: '200% auto',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 900, fontSize: '14.5px', letterSpacing: '1px',
                                textTransform: 'uppercase',
                                animation: 'shimmer 3s linear infinite',
                                '@keyframes shimmer': {
                                    '0%': { backgroundPosition: '0% center' },
                                    '100%': { backgroundPosition: '200% center' },
                                },
                            }}>
                                GROWTH EXA
                            </Box>
                        </Link>
                    </CopyrightText>
                </Box>
            </BottomBar>
        </FooterContainer>
    );
};

export default Footer;