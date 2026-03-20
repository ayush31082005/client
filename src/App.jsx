import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainRoutes from "./routes/MainRoutes";
import { Toaster } from 'react-hot-toast';

// =============================================
//  LUXURY DARK THEME — BLACK + GOLD
// =============================================
const luxuryDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C9A84C',
      light: '#F0C060',
      dark: '#A07830',
      contrastText: '#0D0D0D',
    },
    secondary: {
      main: '#2A2A2A',
      light: '#3A3A3A',
      dark: '#1A1A1A',
      contrastText: '#C9A84C',
    },
    background: {
      default: '#0D0D0D',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#AAAAAA',
    },
    divider: 'rgba(201,168,76,0.2)',
    error: { main: '#f44336' },
    warning: { main: '#C9A84C' },
    success: { main: '#C9A84C' },
    info: { main: '#C9A84C' },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',
    allVariants: { color: '#F5F5F5', fontWeight: 500 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: '#0D0D0D', color: '#F5F5F5' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1A1A',
          backgroundImage: 'none',
          border: '1px solid rgba(201,168,76,0.15)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E',
          backgroundImage: 'none',
          border: '1px solid rgba(201,168,76,0.15)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0A0A0A',
          backgroundImage: 'none',
          borderBottom: '1px solid rgba(201,168,76,0.25)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.8)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#111111',
          backgroundImage: 'none',
          borderRight: '1px solid rgba(201,168,76,0.2)',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1A1A1A',
          backgroundImage: 'none',
          border: '1px solid rgba(201,168,76,0.2)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.9)',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#F5F5F5',
          fontFamily: '"Poppins", "Roboto", sans-serif',
          '&:hover': {
            backgroundColor: 'rgba(201,168,76,0.1)',
            color: '#C9A84C',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(201,168,76,0.15)',
            color: '#C9A84C',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Poppins", "Roboto", sans-serif',
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '8px',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #C9A84C 0%, #F0C060 50%, #C9A84C 100%)',
          color: '#0D0D0D',
          boxShadow: '0 4px 15px rgba(201,168,76,0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #A07830 0%, #C9A84C 50%, #A07830 100%)',
            boxShadow: '0 6px 20px rgba(201,168,76,0.5)',
          },
        },
        outlinedPrimary: {
          borderColor: '#C9A84C',
          color: '#C9A84C',
          '&:hover': {
            backgroundColor: 'rgba(201,168,76,0.1)',
            borderColor: '#F0C060',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#C9A84C',
          '&:hover': { backgroundColor: 'rgba(201,168,76,0.1)' },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#1A1A1A',
            color: '#F5F5F5',
            '& fieldset': { borderColor: 'rgba(201,168,76,0.3)' },
            '&:hover fieldset': { borderColor: '#C9A84C' },
            '&.Mui-focused fieldset': { borderColor: '#C9A84C', borderWidth: '2px' },
          },
          '& .MuiInputLabel-root': { color: '#CCCCCC', fontFamily: '"Poppins", sans-serif' },
          '& .MuiInputLabel-root.Mui-focused': { color: '#C9A84C' },
          '& .MuiInputBase-input': { color: '#F5F5F5' },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: { color: '#F5F5F5' },
        icon: { color: '#C9A84C' },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { color: '#F5F5F5' },
        input: { color: '#FFFFFF', fontWeight: 500 },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            backgroundColor: '#111111',
            color: '#C9A84C',
            fontWeight: 700,
            borderBottom: '2px solid rgba(201,168,76,0.4)',
            fontFamily: '"Poppins", sans-serif',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(201,168,76,0.1)',
          color: '#F5F5F5',
          fontFamily: '"Poppins", sans-serif',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1A1A',
          '&:nth-of-type(odd)': { backgroundColor: '#1E1E1E' },
          '&:hover': { backgroundColor: 'rgba(201,168,76,0.06) !important' },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: { backgroundColor: '#1A1A1A', border: '1px solid rgba(201,168,76,0.15)' },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#CCCCCC',
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 500,
          '&.Mui-selected': { color: '#C9A84C', fontWeight: 700 },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: { backgroundColor: '#C9A84C', height: '3px' },
        root: { borderBottom: '1px solid rgba(201,168,76,0.2)' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(201,168,76,0.12)',
          color: '#C9A84C',
          border: '1px solid rgba(201,168,76,0.3)',
          fontFamily: '"Poppins", sans-serif',
        },
        deleteIcon: { color: '#C9A84C', '&:hover': { color: '#F0C060' } },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: 'rgba(201,168,76,0.2)' },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1A1A1A',
          backgroundImage: 'none',
          border: '1px solid rgba(201,168,76,0.25)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: '#C9A84C',
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          borderBottom: '1px solid rgba(201,168,76,0.2)',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: { root: { color: '#F5F5F5' } },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1A1A',
          border: '1px solid rgba(201,168,76,0.3)',
          color: '#F5F5F5',
        },
        icon: { color: '#C9A84C' },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#1A1A1A',
          color: '#F5F5F5',
          border: '1px solid rgba(201,168,76,0.3)',
          fontFamily: '"Poppins", sans-serif',
        },
        arrow: { color: '#1A1A1A' },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': { backgroundColor: 'rgba(201,168,76,0.08)' },
          '&.Mui-selected': {
            backgroundColor: 'rgba(201,168,76,0.12)',
            '&:hover': { backgroundColor: 'rgba(201,168,76,0.18)' },
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: { color: '#F5F5F5', fontFamily: '"Poppins", sans-serif' },
        secondary: { color: '#CCCCCC' },
      },
    },
    MuiListItemIcon: {
      styleOverrides: { root: { color: '#C9A84C' } },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E',
          backgroundImage: 'none',
          border: '1px solid rgba(201,168,76,0.15)',
          '&:before': { backgroundColor: 'rgba(201,168,76,0.2)' },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          color: '#F5F5F5',
          '& .MuiAccordionSummary-expandIconWrapper': { color: '#C9A84C' },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          backgroundColor: '#C9A84C',
          color: '#0D0D0D',
          fontWeight: 700,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(201,168,76,0.2)',
          color: '#C9A84C',
          border: '2px solid rgba(201,168,76,0.4)',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: { backgroundColor: 'rgba(201,168,76,0.15)', borderRadius: '4px' },
        bar: { backgroundColor: '#C9A84C' },
      },
    },
    MuiCircularProgress: {
      styleOverrides: { root: { color: '#C9A84C' } },
    },
    MuiStepper: {
      styleOverrides: { root: { backgroundColor: 'transparent' } },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: { color: '#CCCCCC', '&.Mui-active': { color: '#C9A84C' }, '&.Mui-completed': { color: '#C9A84C' } },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: { color: 'rgba(201,168,76,0.3)', '&.Mui-active': { color: '#C9A84C' }, '&.Mui-completed': { color: '#C9A84C' } },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: { '&.Mui-checked': { color: '#C9A84C', '& + .MuiSwitch-track': { backgroundColor: 'rgba(201,168,76,0.5)' } } },
        track: { backgroundColor: '#444444' },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: { color: 'rgba(201,168,76,0.4)', '&.Mui-checked': { color: '#C9A84C' } },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: { color: 'rgba(201,168,76,0.4)', '&.Mui-checked': { color: '#C9A84C' } },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: { color: '#C9A84C' },
        rail: { backgroundColor: 'rgba(201,168,76,0.2)' },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {},
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: '#CCCCCC',
          border: '1px solid rgba(201,168,76,0.2)',
          '&.Mui-selected': { backgroundColor: '#C9A84C', color: '#0D0D0D', fontWeight: 700 },
          '&:hover': { backgroundColor: 'rgba(201,168,76,0.1)', color: '#C9A84C' },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: { backgroundColor: 'rgba(201,168,76,0.08)' },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: { backgroundColor: '#1A1A1A', color: '#F5F5F5', border: '1px solid rgba(201,168,76,0.3)' },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: { color: '#CCCCCC', '&.Mui-focused': { color: '#C9A84C' } },
      },
    },
    MuiFormHelperText: {
      styleOverrides: { root: { color: '#CCCCCC' } },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#F5F5F5',
          '& fieldset': { borderColor: 'rgba(201,168,76,0.3)' },
          '&:hover fieldset': { borderColor: '#C9A84C' },
          '&.Mui-focused fieldset': { borderColor: '#C9A84C' },
        },
        input: { color: '#FFFFFF', fontWeight: 500 },
      },
    },
    MuiInputAdornment: {
      styleOverrides: { root: { color: '#C9A84C' } },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: { backgroundColor: '#1A1A1A', border: '1px solid rgba(201,168,76,0.2)' },
        option: {
          color: '#F5F5F5',
          '&:hover': { backgroundColor: 'rgba(201,168,76,0.1)' },
          '&.Mui-focused': { backgroundColor: 'rgba(201,168,76,0.1)' },
        },
      },
    },
    MuiGrid: { styleOverrides: { root: {} } },
    MuiContainer: { styleOverrides: { root: {} } },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Poppins", "Roboto", sans-serif',
          color: '#F5F5F5',
          fontWeight: 500,
        },
        h1: { color: '#FFFFFF', fontWeight: 800 },
        h2: { color: '#FFFFFF', fontWeight: 800 },
        h3: { color: '#FFFFFF', fontWeight: 700 },
        h4: { color: '#FFFFFF', fontWeight: 700 },
        h5: { color: '#FFFFFF', fontWeight: 700 },
        h6: { color: '#C9A84C', fontWeight: 700 },
        body1: { color: '#F0F0F0', fontWeight: 500 },
        body2: { color: '#DDDDDD', fontWeight: 500 },
        caption: { color: '#CCCCCC', fontWeight: 500 },
        subtitle1: { color: '#F5F5F5', fontWeight: 600 },
        subtitle2: { color: '#DDDDDD', fontWeight: 600 },
        overline: { color: '#C9A84C', fontWeight: 700, letterSpacing: '0.1em' },
      },
    },
  },
});

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const isAdminRoute = location.pathname.startsWith("/admin");
  const isAccountRoute = location.pathname.startsWith("/my-account");

  return (
    <ThemeProvider theme={luxuryDarkTheme}>
      <CssBaseline />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#1A1A1A',
            color: '#F5F5F5',
            border: '1px solid rgba(201,168,76,0.35)',
            fontFamily: '"Poppins", sans-serif',
            boxShadow: '0 4px 20px rgba(0,0,0,0.8)',
          },
          success: { iconTheme: { primary: '#C9A84C', secondary: '#0D0D0D' } },
          error: { iconTheme: { primary: '#f44336', secondary: '#1A1A1A' } },
        }}
      />
      {!isAdminRoute && <Header />}
      <Box sx={{
        pt: !isAdminRoute ? { xs: '60px', md: '70px' } : 0,
        backgroundColor: '#0D0D0D',
        minHeight: '100vh',
      }}>
        <MainRoutes />
      </Box>
      {!isAdminRoute && !isAccountRoute && <Footer />}
    </ThemeProvider>
  );
};

export default App;
