// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BankingManagement from './BankingManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gestion" element={<BankingManagement />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #000428 0%, #004e92 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 2000 1500\'%3E%3Cdefs%3E%3CradialGradient id=\'a\' gradientUnits=\'objectBoundingBox\'%3E%3Cstop offset=\'0\' stop-color=\'%23004e92\'/%3E%3Cstop offset=\'1\' stop-color=\'%23000428\'/%3E%3C/radialGradient%3E%3ClinearGradient id=\'b\' gradientUnits=\'userSpaceOnUse\' x1=\'0\' y1=\'750\' x2=\'1550\' y2=\'750\'%3E%3Cstop offset=\'0\' stop-color=\'%23002a5d\'/%3E%3Cstop offset=\'1\' stop-color=\'%23000428\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill=\'url(%23a)\' width=\'2000\' height=\'1500\'/%3E%3Cg fill-opacity=\'0.08\'%3E%3Cpolygon fill=\'url(%23b)\' points=\'1600 160 0 460 0 350 1600 50\'/%3E%3Cpolygon fill=\'url(%23b)\' points=\'1600 260 0 560 0 450 1600 150\'/%3E%3Cpolygon fill=\'url(%23b)\' points=\'1600 360 0 660 0 550 1600 250\'/%3E%3Cpolygon fill=\'url(%23b)\' points=\'1600 460 0 760 0 650 1600 350\'/%3E%3Cpolygon fill=\'url(%23b)\' points=\'1600 800 0 800 0 750 1600 450\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          opacity: 0.1,
        }
      }}
    >
      <Container 
        maxWidth={false}
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
          px: { xs: 2, sm: 4, md: 8 }
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: { xs: '2rem', sm: '3rem', md: '4rem' },
            border: '1px solid rgba(255, 255, 255, 0.1)',
            maxWidth: '800px',
            width: '100%',
            animation: 'fadeIn 1s ease-out'
          }}
        >
          <AccountBalanceWalletIcon 
            sx={{ 
              fontSize: { xs: 60, sm: 80, md: 100 },
              mb: 3,
              color: '#00ff9d',
              animation: 'pulse 2s infinite'
            }} 
          />
          
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 4,
              fontWeight: 800,
              background: 'linear-gradient(45deg, #00ff9d 0%, #00f0ff 100%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' }
            }}
          >
            Gestion des Comptes
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 6,
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: 1.8
            }}
          >
            Découvrez une nouvelle ère de gestion bancaire avec notre plateforme innovante.
            Sécurité maximale, interface futuriste, expérience unique.
          </Typography>

          <Link to="/gestion" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(45deg, #00ff9d 0%, #00f0ff 100%)',
                padding: '15px 50px',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                fontWeight: 700,
                borderRadius: '50px',
                color: '#000428',
                border: 'none',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transition: '0.5s',
                },
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 30px rgba(0, 255, 157, 0.3)',
                  '&::before': {
                    left: '100%',
                  },
                }
              }}
            >
              Accéder à mon espace
            </Button>
          </Link>
        </Box>
      </Container>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </Box>
  );
}

export default App;