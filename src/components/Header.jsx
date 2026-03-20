import React, { useState, useEffect } from 'react';
// Note: Add <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"> to your index.html
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Container,
    Typography,
    Collapse,
    Menu,
    MenuItem,
    Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HistoryIcon from '@mui/icons-material/History';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// ─── Theme Constants ──────────────────────────────────────────────────────────
const GOLD_GRADIENT = '#C9A24A';
const DARK_BG = '#EDE0C4';

// Navbar heights
const NAVBAR_H_MOBILE = 64;   // px
const NAVBAR_H_DESKTOP = 76;  // px

// ─── Styled Components ────────────────────────────────────────────────────────

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: '#EFE6CC',
    boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
    borderBottom: '1px solid #C9A24A',
    height: `${NAVBAR_H_MOBILE}px`,
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    zIndex: 1100,
    [theme.breakpoints.up('md')]: {
        height: `${NAVBAR_H_DESKTOP}px`,
    },
}));

// Logo container — matches full navbar height
const LogoContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    // height fills the AppBar
    height: `${NAVBAR_H_MOBILE}px`,
    [theme.breakpoints.up('md')]: {
        height: `${NAVBAR_H_DESKTOP}px`,
    },
}));

// Logo image — fills the full navbar height edge-to-edge (no padding on top/bottom)
const LogoImage = styled('img')(({ theme }) => ({
    height: `${NAVBAR_H_MOBILE}px`,
    width: 'auto',
    objectFit: 'contain',
    display: 'block',
    mixBlendMode: 'multiply',   // blends white/cream bg of logo with navbar bg
    paddingLeft: '4px',
    paddingRight: '4px',
    [theme.breakpoints.up('md')]: {
        height: `${NAVBAR_H_DESKTOP}px`,
    },
}));

const LogoMain = styled('span')(({ theme }) => ({
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: '1.1rem',
    background: GOLD_GRADIENT,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    whiteSpace: 'normal',
    lineHeight: 1.2,
    [theme.breakpoints.up('md')]: {
        fontSize: '0.85rem',
        whiteSpace: 'nowrap',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1rem',
    },
}));

const LogoTagline = styled('span')(({ theme }) => ({
    fontFamily: "'Playfair Display', serif",
    fontSize: '0.75rem',
    fontWeight: 400,
    background: GOLD_GRADIENT,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    whiteSpace: 'normal',
    letterSpacing: '0.02em',
    [theme.breakpoints.up('md')]: {
        fontSize: '0.9rem',
        whiteSpace: 'nowrap',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1.1rem',
    },
}));

const NavButton = styled(Button)(({ theme }) => ({
    fontFamily: "'Playfair Display', serif",
    fontSize: '15px',
    fontWeight: 700,
    color: '#C9A24A',
    WebkitTextFillColor: '#C9A24A',
    textTransform: 'none',
    padding: '4px 8px',
    minWidth: 'auto',
    whiteSpace: 'nowrap',
    '&:hover': {
        backgroundColor: 'rgba(139,105,20,0.1)',
        color: '#C9A24A',
        WebkitTextFillColor: '#C9A24A',
    },
    '&.active': { opacity: 1 },
    transition: 'all 0.2s ease-in-out',
    [theme.breakpoints.up('xl')]: {
        fontSize: '17px',
        padding: '6px 12px',
    },
}));

const RegisterButton = styled(Button)(({ theme }) => ({
    fontFamily: "'Playfair Display', serif",
    fontSize: '15px',
    fontWeight: 600,
    background: '#C9A24A',
    color: '#fff',
    padding: '6px 14px',
    borderRadius: '4px',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    '&:hover': {
        background: '#b08c3a',
        boxShadow: '0 4px 12px rgba(139,105,20,0.4)',
    },
    transition: 'all 0.2s ease-in-out',
    [theme.breakpoints.up('xl')]: {
        fontSize: '16px',
        padding: '8px 20px',
    },
}));

const LoginButton = styled(Button)(({ theme }) => ({
    fontFamily: "'Playfair Display', serif",
    fontSize: '15px',
    fontWeight: 600,
    backgroundColor: 'transparent',
    border: '1px solid #C9A24A',
    color: '#C9A24A',
    padding: '6px 14px',
    borderRadius: '4px',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    '&:hover': {
        backgroundColor: 'rgba(139,105,20,0.12)',
        boxShadow: '0 4px 12px rgba(139,105,20,0.2)',
        color: '#C9A24A',
    },
    transition: 'all 0.2s ease-in-out',
    [theme.breakpoints.up('xl')]: {
        fontSize: '16px',
        padding: '8px 20px',
    },
}));

const MyAccountButton = styled(Button)(({ theme }) => ({
    fontFamily: "'Playfair Display', serif",
    fontSize: '15px',
    fontWeight: 600,
    background: '#C9A24A',
    color: '#fff',
    padding: '5px 16px',
    borderRadius: '8px',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    '&:hover': {
        background: '#b08c3a',
        boxShadow: '0 4px 12px rgba(139,105,20,0.4)',
    },
    transition: 'all 0.2s ease-in-out',
    [theme.breakpoints.up('xl')]: {
        fontSize: '16px',
        padding: '6px 20px',
    },
}));

const AdminDashboardButton = styled(Button)(({ theme }) => ({
    fontFamily: "'Playfair Display', serif",
    fontSize: '15px',
    fontWeight: 600,
    background: '#C9A24A',
    color: '#fff',
    padding: '5px 16px',
    borderRadius: '8px',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    '&:hover': {
        background: '#b08c3a',
        boxShadow: '0 4px 12px rgba(139,105,20,0.4)',
    },
    transition: 'all 0.2s ease-in-out',
    [theme.breakpoints.up('xl')]: {
        fontSize: '16px',
        padding: '6px 20px',
    },
}));

const LogoutMenuItem = styled(MenuItem)({
    color: '#c0392b',
    '&:hover': { backgroundColor: 'rgba(211, 47, 47, 0.08)' },
});

const StyledListItemButton = styled(ListItemButton)({
    '&:hover': { backgroundColor: 'rgba(139,105,20,0.1)' },
    transition: 'all 0.2s ease-in-out',
});

// ─── Component ────────────────────────────────────────────────────────────────

const Header = () => {
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [logoError, setLogoError] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const checkAuthStatus = () => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (token && user) {
            try {
                const parsedUser = JSON.parse(user);
                setIsLoggedIn(true);
                setUserData(parsedUser);
                const role = parsedUser.role || parsedUser.userType || parsedUser.type ||
                    (parsedUser.isAdmin ? 'admin' : 'user') || 'user';
                setUserRole(role);
            } catch (error) {
                setIsLoggedIn(false);
                setUserData(null);
                setUserRole(null);
            }
        } else {
            setIsLoggedIn(false);
            setUserData(null);
            setUserRole(null);
        }
    };

    useEffect(() => {
        checkAuthStatus();
        window.addEventListener('storage', checkAuthStatus);
        return () => window.removeEventListener('storage', checkAuthStatus);
    }, []);

    useEffect(() => { checkAuthStatus(); }, [navigate]);

    const [anchorElFranchise, setAnchorElFranchise] = useState(null);
    const openFranchiseMenu = Boolean(anchorElFranchise);
    const [mobileSubmenu, setMobileSubmenu] = useState(null);
    const [anchorElCompany, setAnchorElCompany] = useState(null);
    const openCompanyMenu = Boolean(anchorElCompany);
    const openUserMenu = Boolean(anchorElUser);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Recharge', path: '/recharge' },
        { name: 'Grievance', path: '/grievance' },
        { name: 'Products', path: '/products' },
        { name: 'Opportunities', path: '/opportunities' },
        { name: 'My Cart', path: '/my-account/cart' },
    ];

    const trailItems = [{ name: 'Contact Us', path: '/contact' }];

    const companySubItems = [
        { name: 'About Us', path: '/company/about' },
        { name: 'Legal', path: '/company/legal' },
    ];

    const franchiseSubItems = [
        { name: 'Franchise List', path: '/franchise/list' },
        { name: 'Franchise Login', path: '/franchise/login' },
    ];

    const accountSubItems = [
        { name: 'My Profile', path: '/my-account/profile', icon: <PersonIcon fontSize="small" /> },
        { name: 'My Orders', path: '/my-account/orders', icon: <ReceiptIcon fontSize="small" /> },
        { name: 'Transactions', path: '/my-account/transactions', icon: <HistoryIcon fontSize="small" /> },
        { name: 'KYC Status', path: '/my-account/kyc', icon: <FingerprintIcon fontSize="small" /> },
    ];

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleNavigation = (path) => { navigate(path); setMobileOpen(false); setMobileSubmenu(null); };
    const handleLogoError = () => setLogoError(true);
    const isActive = (path) => window.location.pathname === path;
    const isFranchiseActive = () => franchiseSubItems.some(item => isActive(item.path));
    const isCompanyActive = () => companySubItems.some(item => isActive(item.path));

    const handleFranchiseClick = (e) => setAnchorElFranchise(e.currentTarget);
    const handleFranchiseClose = () => setAnchorElFranchise(null);
    const handleFranchiseItemClick = (path) => { handleFranchiseClose(); handleNavigation(path); };

    const handleCompanyClick = (e) => setAnchorElCompany(e.currentTarget);
    const handleCompanyClose = () => setAnchorElCompany(null);
    const handleCompanyItemClick = (path) => { handleCompanyClose(); handleNavigation(path); };

    const handleUserMenuClick = (e) => setAnchorElUser(e.currentTarget);
    const handleUserMenuClose = () => setAnchorElUser(null);
    const handleAdminDashboardClick = () => { handleUserMenuClose(); navigate('/admin/dashboard'); };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setUserData(null);
        setUserRole(null);
        handleUserMenuClose();
        navigate('/');
    };

    const handleMobileFranchiseToggle = () => setMobileSubmenu(mobileSubmenu === 'franchise' ? null : 'franchise');
    const handleMobileCompanyToggle = () => setMobileSubmenu(mobileSubmenu === 'company' ? null : 'company');
    const handleMobileAccountToggle = () => setMobileSubmenu(mobileSubmenu === 'account' ? null : 'account');

    const getUserInitials = () => {
        if (userData?.userName) return userData.userName.charAt(0).toUpperCase();
        if (userData?.name) return userData.name.charAt(0).toUpperCase();
        if (userData?.email) return userData.email.charAt(0).toUpperCase();
        return 'U';
    };

    const getDisplayName = () => {
        if (userData?.userName) return userData.userName;
        if (userData?.name) return userData.name;
        if (userData?.email) return userData.email.split('@')[0];
        return isAdmin() ? 'Admin' : 'My Account';
    };

    const isAdmin = () =>
        userRole === 'admin' || userRole === 'administrator' || userRole === 'Admin' || userRole === 'ADMIN';

    const darkMenuPaperSx = {
        mt: 1.5,
        minWidth: '180px',
        backgroundColor: '#EFE6CC',
        boxShadow: '0px 10px 40px rgba(0,0,0,0.15)',
        border: '1px solid #C9A24A',
        borderRadius: '12px',
        overflow: 'visible',
        '&:before': {
            content: '""', display: 'block', position: 'absolute',
            top: 0, left: 24, width: 10, height: 10,
            bgcolor: '#EFE6CC', transform: 'translateY(-50%) rotate(45deg)', zIndex: 0,
            borderTop: '1px solid #C9A24A', borderLeft: '1px solid #C9A24A',
        },
    };

    const darkMenuItemSx = {
        fontFamily: "'Playfair Display', serif",
        fontSize: '14px', fontWeight: 700,
        color: '#C9A24A',
        borderRadius: '8px', py: 1, px: 1.5,
        '&:hover': { backgroundColor: 'rgba(139,105,20,0.12)', color: '#C9A24A' }
    };

    // ── Mobile Drawer ──────────────────────────────────────────────────────────
    const drawer = (
        <Box sx={{ width: 280, pt: 2, display: 'flex', flexDirection: 'column', height: '100%', background: '#EFE6CC' }}>
            {/* Logo inside drawer */}
            <Box sx={{ px: 2, pb: 2, borderBottom: '1px solid #C9A24A', mb: 1 }}>
                <LogoContainer onClick={() => handleNavigation('/')}>
                    {!logoError && (
                        <LogoImage
                            src="/logo.png"
                            alt="Sanyukt Parivaar Logo"
                            onError={handleLogoError}
                            // In drawer, constrain to a fixed height so it doesn't overflow
                            style={{ height: '48px', paddingLeft: 0, paddingRight: 0 }}
                        />
                    )}
                </LogoContainer>
            </Box>

            <List sx={{ flexGrow: 1 }}>
                <ListItem disablePadding>
                    <StyledListItemButton onClick={() => handleNavigation('/')}>
                        <ListItemText primary="Home" sx={{ '& .MuiListItemText-primary': { fontFamily: "'Playfair Display', serif", fontSize: '14px', fontWeight: 700, background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', color: '#C9A24A !important' } }} />
                    </StyledListItemButton>
                </ListItem>

                {/* Company Submenu */}
                <ListItem disablePadding sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <StyledListItemButton onClick={handleMobileCompanyToggle} sx={{ width: '100%' }}>
                        <ListItemText primary="Sanyukt Parivaar" sx={{ '& .MuiListItemText-primary': { fontFamily: "'Playfair Display', serif", fontSize: '14px', fontWeight: 700, background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', color: '#C9A24A !important' } }} />
                        {mobileSubmenu === 'company' ? <ExpandLess sx={{ color: '#C9A24A' }} /> : <ExpandMore sx={{ color: '#C9A24A' }} />}
                    </StyledListItemButton>
                    <Collapse in={mobileSubmenu === 'company'} timeout="auto" unmountOnExit sx={{ width: '100%' }}>
                        <List component="div" disablePadding>
                            {companySubItems.map((subItem) => (
                                <StyledListItemButton key={subItem.name} sx={{ pl: 4 }} onClick={() => handleNavigation(subItem.path)}>
                                    <ListItemText primary={subItem.name} sx={{ '& .MuiListItemText-primary': { fontFamily: "'Playfair Display', serif", fontSize: '13px', fontWeight: 400, background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', color: '#C9A24A !important' } }} />
                                </StyledListItemButton>
                            ))}
                        </List>
                    </Collapse>
                </ListItem>

                {menuItems.slice(1).map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <StyledListItemButton onClick={() => handleNavigation(item.path)}>
                            <ListItemText primary={item.name} sx={{ '& .MuiListItemText-primary': { fontFamily: "'Playfair Display', serif", fontSize: '14px', fontWeight: 700, background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', color: '#C9A24A !important' } }} />
                        </StyledListItemButton>
                    </ListItem>
                ))}

                {/* Franchise Submenu */}
                <ListItem disablePadding sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <StyledListItemButton onClick={handleMobileFranchiseToggle} sx={{ width: '100%' }}>
                        <ListItemText primary="Franchise" sx={{ '& .MuiListItemText-primary': { fontFamily: "'Playfair Display', serif", fontSize: '14px', fontWeight: 700, background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', color: '#C9A24A !important' } }} />
                        {mobileSubmenu === 'franchise' ? <ExpandLess sx={{ color: '#C9A24A' }} /> : <ExpandMore sx={{ color: '#C9A24A' }} />}
                    </StyledListItemButton>
                    <Collapse in={mobileSubmenu === 'franchise'} timeout="auto" unmountOnExit sx={{ width: '100%' }}>
                        <List component="div" disablePadding>
                            {franchiseSubItems.map((subItem) => (
                                <StyledListItemButton key={subItem.name} sx={{ pl: 4 }} onClick={() => handleNavigation(subItem.path)}>
                                    <ListItemText primary={subItem.name} sx={{ '& .MuiListItemText-primary': { fontFamily: "'Playfair Display', serif", fontSize: '13px', fontWeight: 400, background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', color: '#C9A24A !important' } }} />
                                </StyledListItemButton>
                            ))}
                        </List>
                    </Collapse>
                </ListItem>

                {trailItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <StyledListItemButton onClick={() => handleNavigation(item.path)}>
                            <ListItemText primary={item.name} sx={{ '& .MuiListItemText-primary': { fontFamily: "'Playfair Display', serif", fontSize: '14px', fontWeight: 700, background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', color: '#C9A24A !important' } }} />
                        </StyledListItemButton>
                    </ListItem>
                ))}

                {/* Auth Buttons in Mobile Drawer */}
                <Box sx={{ px: 2, mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {isLoggedIn ? (
                        <>
                            {isAdmin() ? (
                                <>
                                    <AdminDashboardButton onClick={() => handleNavigation('/admin/dashboard')} sx={{ ml: 0, width: '100%', justifyContent: 'center' }}>
                                        <DashboardIcon sx={{ mr: 1 }} />Admin Dashboard
                                    </AdminDashboardButton>
                                    <LoginButton onClick={handleLogout} sx={{ ml: 0, width: '100%', borderColor: '#d32f2f', WebkitTextFillColor: '#d32f2f', background: 'none', color: '#d32f2f' }}>
                                        <LogoutIcon sx={{ mr: 1 }} />Logout
                                    </LoginButton>
                                </>
                            ) : (
                                <>
                                    <ListItem disablePadding sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <StyledListItemButton onClick={handleMobileAccountToggle} sx={{ width: '100%', justifyContent: 'center' }}>
                                            <AccountCircleIcon sx={{ mr: 1, color: '#C9A24A' }} />
                                            <ListItemText primary={getDisplayName()} sx={{ '& .MuiListItemText-primary': { fontFamily: "'Playfair Display', serif", fontSize: '14px', fontWeight: 600, background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', color: '#C9A24A !important' } }} />
                                            {mobileSubmenu === 'account' ? <ExpandLess sx={{ color: '#C9A24A' }} /> : <ExpandMore sx={{ color: '#C9A24A' }} />}
                                        </StyledListItemButton>
                                        <Collapse in={mobileSubmenu === 'account'} timeout="auto" unmountOnExit sx={{ width: '100%' }}>
                                            <List component="div" disablePadding>
                                                {accountSubItems.map((subItem) => (
                                                    <StyledListItemButton key={subItem.name} sx={{ pl: 4 }} onClick={() => handleNavigation(subItem.path)}>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#C9A24A' }}>
                                                            {subItem.icon}
                                                            <ListItemText primary={subItem.name} sx={{ '& .MuiListItemText-primary': { fontFamily: "'Playfair Display', serif", fontSize: '13px', fontWeight: 400, background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', color: '#C9A24A !important' } }} />
                                                        </Box>
                                                    </StyledListItemButton>
                                                ))}
                                                <StyledListItemButton sx={{ pl: 4 }} onClick={() => handleNavigation('/my-account')}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#C9A24A' }}>
                                                        <DashboardIcon fontSize="small" />
                                                        <ListItemText primary="Dashboard Home" sx={{ '& .MuiListItemText-primary': { fontFamily: "'Playfair Display', serif", fontSize: '13px', fontWeight: 400, background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', color: '#C9A24A !important' } }} />
                                                    </Box>
                                                </StyledListItemButton>
                                            </List>
                                        </Collapse>
                                    </ListItem>
                                    <LoginButton onClick={handleLogout} sx={{ ml: 0, width: '100%', borderColor: '#d32f2f', WebkitTextFillColor: '#d32f2f', background: 'none', color: '#c0392b', mt: 1 }}>
                                        <LogoutIcon sx={{ mr: 1 }} />Logout
                                    </LoginButton>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <RegisterButton onClick={() => handleNavigation('/register')} sx={{ ml: 0, width: '100%' }}>Register</RegisterButton>
                            <LoginButton onClick={() => handleNavigation('/login')} sx={{ ml: 0, width: '100%' }}>Login</LoginButton>
                        </>
                    )}
                </Box>
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledAppBar position="fixed">
                <Container maxWidth={false} sx={{ px: { xs: 0, lg: 3 }, height: '100%' }}>
                    <Toolbar
                        disableGutters
                        sx={{
                            justifyContent: 'space-between',
                            height: '100%',
                            minHeight: 'unset !important',
                            padding: 0,
                        }}
                    >
                        {/* ── LEFT — LOGO (fills full navbar height) ── */}
                        <LogoContainer onClick={() => handleNavigation('/')}>
                            {!logoError ? (
                                <LogoImage
                                    src="/logo.png"
                                    alt="Sanyukt Parivaar Logo"
                                    onError={handleLogoError}
                                />
                            ) : (
                                // Fallback text logo if image fails
                                <Box sx={{ px: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <LogoMain>Sanyukt Parivaar</LogoMain>
                                    <LogoTagline>& Rich Life Pvt.Ltd.</LogoTagline>
                                </Box>
                            )}
                        </LogoContainer>

                        {/* ── CENTER/RIGHT — NAVIGATION (DESKTOP) ── */}
                        <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 1, flexWrap: 'nowrap', pr: 1 }}>

                            <NavButton className={isActive('/') ? 'active' : ''} onClick={() => handleNavigation('/')}>
                                Home
                            </NavButton>

                            {/* Company Dropdown */}
                            <Box sx={{ position: 'relative' }}>
                                <NavButton className={isCompanyActive() ? 'active' : ''} onClick={handleCompanyClick} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    Sanyukt Parivaar
                                    <ExpandMore sx={{ fontSize: '18px', color: '#E8C66A', transform: openCompanyMenu ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                                </NavButton>
                                <Menu anchorEl={anchorElCompany} open={openCompanyMenu} onClose={handleCompanyClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} transformOrigin={{ vertical: 'top', horizontal: 'left' }} MenuListProps={{ sx: { padding: '8px' } }} slotProps={{ paper: { elevation: 0, sx: { ...darkMenuPaperSx, '&:before': { ...darkMenuPaperSx['&:before'], bgcolor: DARK_BG } } } }} disableScrollLock>
                                    {companySubItems.map((item) => (
                                        <MenuItem key={item.name} onClick={() => handleCompanyItemClick(item.path)} sx={darkMenuItemSx}>{item.name}</MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            {menuItems.slice(1).filter(item => item.name !== 'My Cart').map((item) => (
                                <NavButton key={item.name} className={isActive(item.path) ? 'active' : ''} onClick={() => handleNavigation(item.path)}>
                                    {item.name}
                                </NavButton>
                            ))}

                            {/* Auth / User Menu — REMOVED FROM HERE, moved after Contact Us */}

                            {/* Franchise Dropdown */}
                            <Box sx={{ position: 'relative' }}>
                                <NavButton className={isFranchiseActive() ? 'active' : ''} onClick={handleFranchiseClick} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    Franchise
                                    <ExpandMore sx={{ fontSize: '18px', color: '#C9A24A', transform: openFranchiseMenu ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                                </NavButton>
                                <Menu anchorEl={anchorElFranchise} open={openFranchiseMenu} onClose={handleFranchiseClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} transformOrigin={{ vertical: 'top', horizontal: 'left' }} MenuListProps={{ sx: { padding: '8px' } }} slotProps={{ paper: { elevation: 0, sx: { ...darkMenuPaperSx, '&:before': { ...darkMenuPaperSx['&:before'], bgcolor: DARK_BG } } } }} disableScrollLock>
                                    {franchiseSubItems.map((item) => (
                                        <MenuItem key={item.name} onClick={() => handleFranchiseItemClick(item.path)} sx={darkMenuItemSx}>{item.name}</MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            {trailItems.map((item) => (
                                <NavButton key={item.name} className={isActive(item.path) ? 'active' : ''} onClick={() => handleNavigation(item.path)}>
                                    {item.name}
                                </NavButton>
                            ))}

                            {/* ── Auth / User Menu — after Contact Us ── */}
                            {isLoggedIn ? (
                                <>
                                    {isAdmin() ? (
                                        <AdminDashboardButton onClick={handleUserMenuClick} startIcon={<AdminPanelSettingsIcon />}>
                                            {getDisplayName()}
                                        </AdminDashboardButton>
                                    ) : (
                                        <MyAccountButton onClick={handleUserMenuClick} startIcon={
                                            <Avatar src={userData?.profileImage || undefined} sx={{ width: 24, height: 24, bgcolor: 'rgba(201,162,74,0.2)', fontSize: 12, fontWeight: 700, color: '#C9A24A' }}>
                                                {!userData?.profileImage && getUserInitials()}
                                            </Avatar>
                                        }>
                                            {getDisplayName()}
                                        </MyAccountButton>
                                    )}
                                    <Menu anchorEl={anchorElUser} open={openUserMenu} onClose={handleUserMenuClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }} MenuListProps={{ sx: { padding: '10px', minWidth: '220px' } }} slotProps={{ paper: { elevation: 0, sx: { mt: 1.5, backgroundColor: '#EFE6CC', boxShadow: '0px 10px 40px rgba(0,0,0,0.15)', border: '1px solid #C9A24A', borderRadius: '12px', overflow: 'visible', '&:before': { content: '""', display: 'block', position: 'absolute', top: 0, right: 28, width: 10, height: 10, bgcolor: '#EFE6CC', transform: 'translateY(-50%) rotate(45deg)', zIndex: 0, borderTop: '1px solid #C9A24A', borderLeft: '1px solid #C9A24A' } } } }}>
                                        {isAdmin() ? (
                                            <MenuItem onClick={handleAdminDashboardClick} sx={{ ...darkMenuItemSx, gap: 1.5, py: 1.2, display: 'flex', alignItems: 'center' }}>
                                                <DashboardIcon fontSize="small" sx={{ color: '#C9A24A' }} />Admin Dashboard
                                            </MenuItem>
                                        ) : (
                                            [
                                                { label: 'Dashboard', icon: <DashboardIcon fontSize="small" />, path: '/my-account' },
                                                { label: 'My Orders', icon: <ReceiptIcon fontSize="small" />, path: '/my-account/orders' },
                                                { label: 'My Profile', icon: <PersonIcon fontSize="small" />, path: '/my-account/profile' },
                                                { label: 'Transactions', icon: <HistoryIcon fontSize="small" />, path: '/my-account/transactions' },
                                                { label: 'KYC Status', icon: <FingerprintIcon fontSize="small" />, path: '/my-account/kyc' },
                                            ].map((item) => (
                                                <MenuItem key={item.label} onClick={() => handleNavigation(item.path)} sx={{ ...darkMenuItemSx, gap: 2, py: 1.2, mb: 0.5, display: 'flex', alignItems: 'center', '& .MuiSvgIcon-root': { fontSize: '20px', color: '#C9A24A', transition: 'color 0.2s' } }}>
                                                    {item.icon}{item.label}
                                                </MenuItem>
                                            ))
                                        )}
                                        <LogoutMenuItem onClick={handleLogout} sx={{ fontFamily: "'Playfair Display', serif", fontSize: '14px', fontWeight: 600, borderRadius: '8px', gap: 2, py: 1.2, px: 1.5, mt: 0.5, borderTop: '1px solid #C9A24A', '& .MuiSvgIcon-root': { fontSize: '20px' } }}>
                                            <LogoutIcon />Logout
                                        </LogoutMenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <>
                                    <RegisterButton onClick={() => handleNavigation('/register')} sx={{ ml: 1 }}>Register</RegisterButton>
                                    <LoginButton onClick={() => handleNavigation('/login')} sx={{ ml: 1 }}>Login</LoginButton>
                                </>
                            )}
                        </Box>

                        {/* ── RIGHT — HAMBURGER (MOBILE/TABLET) ── */}
                        <Box sx={{ display: { xs: 'flex', lg: 'none' }, pr: 1 }}>
                            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ color: '#C9A24A' }}>
                                <MenuIcon fontSize="large" />
                            </IconButton>
                        </Box>

                    </Toolbar>
                </Container>
            </StyledAppBar>

            {/* Mobile Drawer */}
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{ display: { xs: 'block', lg: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, background: '#EFE6CC' } }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};

export default Header;
