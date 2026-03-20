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
const DARK_BG = '#111111';
const DARK_BG_DEEPER = '#000000';
const GOLD = '#C9A24A';
const BORDER_COLOR = '#2A2A2A';
const TEXT_MUTED = 'rgba(255,255,255,0.7)';
const TEXT_WHITE = '#FFFFFF';

// ─── Styled Components ───────────────────────────────────────────────────────

const FooterContainer = styled(Box)({
    backgroundColor: DARK_BG,
    color: '#FFFFFF',
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
});

const LogoTextContainer = styled(Box)({ display: 'flex', flexDirection: 'column' });

const LogoMain = styled('span')({
    fontFamily: "'Playfair Display', serif",
    fontWeight: 800,
    fontSize: '1.45rem',
    color: GOLD,
    letterSpacing: '0.03em',
    lineHeight: 1.2,
});

const CompanyDescription = styled(Typography)({
    fontSize: '13.5px',
    lineHeight: 1.75,
    color: 'rgba(255,255,255,0.75)',
    fontFamily: "'Playfair Display', serif",
    maxWidth: '320px',
    marginBottom: '24px',
});

const SectionTitle = styled(Typography)({
    fontSize: '14.5px',
    fontWeight: 700,
    color: GOLD,
    marginBottom: '16px',
    fontFamily: "'Playfair Display', serif",
    borderBottom: `1px solid ${BORDER_COLOR}`,
    paddingBottom: '10px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
});

const FooterLink = styled(Link)({
    display: 'block',
    color: 'rgba(255,255,255,0.7)',
    fontSize: '13px',
    textDecoration: 'none',
    marginBottom: '9px',
    fontFamily: "'Playfair Display', serif",
    transition: 'all 0.22s ease',
    cursor: 'pointer',
    '&:hover': {
        color: '#FFFFFF',
        paddingLeft: '5px',
    },
});

const ContactText = styled(Typography)({
    fontSize: '13.5px',
    lineHeight: 1.65,
    color: 'rgba(255,255,255,0.75)',
    marginBottom: '8px',
    fontFamily: "'Playfair Display', serif",
});

const ContactLine = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '10px',
    fontSize: '13.5px',
    color: 'rgba(255,255,255,0.75)',
    fontFamily: "'Playfair Display', serif",
    cursor: 'pointer',
    transition: 'color 0.2s',
    '&:hover': { color: '#FFFFFF' },
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
    backgroundColor: 'rgba(255,255,255,0.08)',
    border: `1px solid ${BORDER_COLOR}`,
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: GOLD,
        border: `1px solid ${GOLD}`,
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 14px rgba(201,162,74,0.3)',
    },
});

const BottomBar = styled(Box)({
    backgroundColor: DARK_BG_DEEPER,
    padding: '16px 24px',
    borderTop: `1px solid ${BORDER_COLOR}`,
});

const CopyrightText = styled(Typography)({
    color: 'rgba(255,255,255,0.65)',
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
                                    style={{ mixBlendMode: 'screen' }}
                                />
                            )}
                            <LogoTextContainer>

                                <LogoMain style={{ color: '#C9A24A' }}>
                                    Sanyukt Parivaar
                                </LogoMain>

                                <Typography
                                    sx={{
                                        fontSize: '0.9rem',
                                        fontWeight: 700,
                                        color: '#C9A24A !important',
                                        mb: 0.4
                                    }}
                                >
                                    & Rich Life Pvt.Ltd.
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: '0.72rem',
                                        fontWeight: 600,
                                        color: '#C9A24A !important',
                                        letterSpacing: '0.02em'
                                    }}
                                >
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

                        {/* FIX: sx + !important */}
                        <SectionTitle sx={{ color: '#C9A24A !important' }}>
                            Quick Links
                        </SectionTitle>

                        {quickLinks.map((link, i) => (
                            <FooterLink key={i} onClick={() => handleNavigation(link.path)}>
                                {link.name}
                            </FooterLink>
                        ))}

                    </Grid>

                    {/* ── COLUMN 3 – POLICIES + CONTACT ── */}
                    <Grid item xs={6} sm={6} md={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={5}>
                                <Grid container spacing={2}>

                                    <Grid item xs={12} sm={6}>

                                        <SectionTitle sx={{ color: '#C9A24A !important' }}>
                                            Our Policies
                                        </SectionTitle>

                                        {policyLinks.map((link, i) => (
                                            <FooterLink key={i} onClick={() => handleNavigation(link.path)}>
                                                {link.name}
                                            </FooterLink>
                                        ))}

                                    </Grid>

                                </Grid>
                            </Grid>

                            {/* Contact – desktop */}
                            <Grid item xs={12} sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>

                                {/* FIXED: sx + !important use kiya */}
                                <SectionTitle sx={{ color: '#C9A24A !important' }}>
                                    Contact Us
                                </SectionTitle>

                                <ContactText sx={{ fontWeight: 700, mb: 1.5, fontSize: '14px', color: '#C9A24A' }}>
                                    Sanyukt Parivaar & Rich Life Pvt.Ltd.
                                </ContactText>

                                <ContactText sx={{
                                    fontSize: '12.5px',
                                    fontWeight: 600,
                                    borderLeft: '2px solid #C9A24A',
                                    pl: 1.5,
                                    mb: 2,
                                    color: '#000000'
                                }}>
                                    Bhatiniya, Gopinathpur, Harraiya,<br />
                                    Basti - 272130, Uttar Pradesh
                                </ContactText>

                                <ContactLine onClick={() => window.open('tel:+917880370057', '_self')}>
                                    <Typography sx={{ fontWeight: 700, mr: 0.5, color: '#C9A24A', fontSize: '12.5px' }}>
                                        Phone:
                                    </Typography>
                                    <span style={{ color: '#000000' }}>
                                        +91 78803 70057
                                    </span>
                                </ContactLine>

                                <ContactLine onClick={() => window.open('mailto:info@sanyuktparivaar.com', '_self')}>
                                    <Typography sx={{ fontWeight: 700, mr: 0.5, color: '#C9A24A', fontSize: '12.5px' }}>
                                        Email:
                                    </Typography>
                                    <span style={{ color: '#000000' }}>
                                        info@sanyuktparivaar.com
                                    </span>
                                </ContactLine>

                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Contact – mobile only */}
                    <Grid item xs={12} sx={{ display: { xs: 'block', sm: 'none' }, pt: 0 }}>

                        {/* FIXED: sx + !important */}
                        <SectionTitle sx={{ color: '#C9A24A !important' }}>
                            Contact Us
                        </SectionTitle>

                        <ContactText sx={{ fontWeight: 700, mb: 1, fontSize: '13.5px', color: '#C9A24A' }}>
                            Sanyukt Parivaar & Rich Life Pvt.Ltd.
                        </ContactText>

                        <ContactText sx={{
                            fontSize: '12.5px',
                            fontWeight: 600,
                            borderLeft: '2px solid #C9A24A',
                            pl: 1.5,
                            mb: 1.5,
                            color: '#000000'
                        }}>
                            Bhatiniya, Gopinathpur, Harraiya,<br />
                            Basti - 272130, Uttar Pradesh
                        </ContactText>

                        <ContactLine onClick={() => window.open('tel:+917880370057', '_self')}>
                            <Typography sx={{ fontWeight: 700, mr: 0.5, color: '#C9A24A', fontSize: '12.5px' }}>
                                Phone:
                            </Typography>
                            <span style={{ color: '#000000' }}>
                                +91 78803 70057
                            </span>
                        </ContactLine>

                        <ContactLine onClick={() => window.open('mailto:info@sanyuktparivaar.com', '_self')}>
                            <Typography sx={{ fontWeight: 700, mr: 0.5, color: '#C9A24A', fontSize: '12.5px' }}>
                                Email:
                            </Typography>
                            <span style={{ color: '#000000' }}>
                                info@sanyuktparivaar.com
                            </span>
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
                                background: GOLD,
                                color: '#000',
                                px: 1, py: 0.25, borderRadius: '4px',
                                fontWeight: 900, fontSize: '10.5px', letterSpacing: '1px',
                            }}>
                                AI
                            </Box>
                            <Box sx={{
                                color: GOLD,
                                fontWeight: 900, fontSize: '14.5px', letterSpacing: '1px',
                                textTransform: 'uppercase',
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