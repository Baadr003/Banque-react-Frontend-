import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Paper } from '@mui/material';

function IndexPage() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '50px 0' }}>
      <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper
          elevation={3}
          style={{
            padding: '40px',
            textAlign: 'center',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
          }}
        >
          <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold' }}>
            Bienvenue
          </Typography>
          <Typography variant="h6" style={{ marginBottom: '20px' }}>
            Gérer vos comptes de manière simple et efficace
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/comptes"
            style={{
              backgroundColor: '#1976d2',
              color: '#fff',
              fontSize: '16px',
              textTransform: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
            }}
          >
            Aller à la gestion des comptes
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default IndexPage;
