import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
 

// Components
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

// Pages (code-split with React.lazy)
const ScreensManagement = React.lazy(() => import('./pages/ScreensManagement'));
const CampaignsManagement = React.lazy(() => import('./pages/CampaignsManagement'));
const AnalyticsDashboard = React.lazy(() => import('./pages/AnalyticsDashboard'));
const AboutQSignage = React.lazy(() => import('./pages/AboutQSignage'));

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Dark mode removed

  // Create theme based on dark mode
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#3b82f6' },
      secondary: { main: '#64748b' },
      background: { default: '#f8fafc', paper: '#ffffff' },
      text: { primary: '#1f2937', secondary: '#6b7280' },
    },
    typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
      allVariants: { color: '#1f2937' },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff',
            color: '#1f2937',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff',
            color: '#1f2937',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff',
            color: '#1f2937',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: { color: '#1f2937', borderColor: '#e5e7eb' },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor: '#f9fafb',
            '& .MuiTableCell-root': { color: '#1f2937', fontWeight: 600 },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: { color: '#1f2937' },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-root': { color: '#1f2937' },
            '& .MuiInputLabel-root': { color: '#6b7280' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#d1d5db' },
              '&:hover fieldset': { borderColor: '#9ca3af' },
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { color: '#1f2937' },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { color: '#1f2937' },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: { color: '#1f2937' },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Router>
          <div className={`min-h-screen light`}>
            <Layout>
              <Sidebar 
                open={sidebarOpen} 
                onClose={() => setSidebarOpen(false)}
              />
              <div className="flex-1 flex flex-col min-w-0">
                <Navbar 
                  onMenuClick={toggleSidebar}
                />
                <main id="main-content" className="flex-1 p-4 md:p-6 bg-gray-50 overflow-auto" role="main">
                  <Suspense fallback={<div role="status" aria-live="polite" className="p-4">Loading…</div>}>
                    <Routes>
                      <Route path="/" element={<Navigate to="/screens" replace />} />
                      <Route path="/screens" element={<ScreensManagement />} />
                      <Route path="/campaigns" element={<CampaignsManagement />} />
                      <Route path="/analytics" element={<AnalyticsDashboard />} />
                      <Route path="/about" element={<AboutQSignage />} />
                    </Routes>
                  </Suspense>
                </main>
                {/* Footer */}
                <footer className="bg-white border-t border-gray-200 py-4 px-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      QSignage Dashboard v1.0.0
                    </p>
                  </div>
                </footer>
              </div>
            </Layout>
          </div>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
