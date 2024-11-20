// BankingManagement.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getAllComptes,
  createCompte,
  deleteCompte,
  updateCompte
} from './services/CompteService';
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Box,
  Card,
  CardContent
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SavingsIcon from '@mui/icons-material/Savings';

function BankingManagement() {
  const [comptes, setComptes] = useState([]);
  const [newCompte, setNewCompte] = useState({ solde: 0, dateCreation: '', type: 'COURANT' });
  const [selectedCompte, setSelectedCompte] = useState(null);

  useEffect(() => {
    fetchComptes();
  }, []);

  const fetchComptes = async () => {
    try {
      const response = await getAllComptes();
      setComptes(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des comptes", error);
    }
  };

  const handleCreateCompte = async () => {
    try {
      if (newCompte.solde && newCompte.dateCreation && newCompte.type) {
        await createCompte(newCompte);
        setNewCompte({ solde: 0, dateCreation: '', type: 'COURANT' });
        fetchComptes();
      } else {
        alert("Tous les champs doivent être remplis pour créer un compte.");
      }
    } catch (error) {
      console.error("Erreur lors de la création du compte", error);
    }
  };

  const handleDeleteCompte = async (id) => {
    try {
      const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce compte ?");
      if (confirmDelete) {
        await deleteCompte(id);
        fetchComptes();
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du compte", error);
    }
  };

  const handleUpdateCompte = async () => {
    if (selectedCompte) {
      try {
        if (selectedCompte.solde && selectedCompte.dateCreation && selectedCompte.type) {
          await updateCompte(selectedCompte.id, selectedCompte);
          setSelectedCompte(null);
          fetchComptes();
        } else {
          alert("Tous les champs doivent être remplis pour mettre à jour le compte.");
        }
      } catch (error) {
        console.error("Erreur lors de la mise à jour du compte", error);
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #000428 0%, #004e92 100%)',
        py: 4
      }}
    >
      <Container maxWidth="lg">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              mb: 4,
              color: '#00ff9d',
              borderColor: '#00ff9d',
              '&:hover': {
                borderColor: '#00f0ff',
                color: '#00f0ff',
                backgroundColor: 'rgba(0, 255, 157, 0.1)'
              }
            }}
            variant="outlined"
          >
            Retour à l'accueil
          </Button>
        </Link>

        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 6,
            color: '#fff',
            fontWeight: 700,
            textShadow: '0 0 20px rgba(0, 255, 157, 0.5)'
          }}
        >
          Gestion des Comptes
        </Typography>

        <Card
          sx={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            mb: 4
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: '#00ff9d',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <AddIcon /> Nouveau Compte
            </Typography>

            <TextField
              label="Solde"
              type="number"
              fullWidth
              variant="outlined"
              margin="normal"
              value={newCompte.solde}
              onChange={(e) => setNewCompte({ ...newCompte, solde: e.target.value })}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00ff9d',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00ff9d',
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-focused': {
                    color: '#00ff9d'
                  }
                }
              }}
            />

            <TextField
              label="Date de Création"
              type="date"
              fullWidth
              variant="outlined"
              margin="normal"
              InputLabelProps={{ shrink: true }}
              value={newCompte.dateCreation}
              onChange={(e) => setNewCompte({ ...newCompte, dateCreation: e.target.value })}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00ff9d',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00ff9d',
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-focused': {
                    color: '#00ff9d'
                  }
                }
              }}
            />

            <FormControl 
              fullWidth 
              variant="outlined" 
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00ff9d',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00ff9d',
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-focused': {
                    color: '#00ff9d'
                  }
                }
              }}
            >
              <InputLabel>Type</InputLabel>
              <Select
                value={newCompte.type}
                onChange={(e) => setNewCompte({ ...newCompte, type: e.target.value })}
                label="Type"
              >
                <MenuItem value="COURANT">Courant</MenuItem>
                <MenuItem value="EPARGNE">Épargne</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              fullWidth
              onClick={handleCreateCompte}
              sx={{
                mt: 3,
                background: 'linear-gradient(45deg, #00ff9d 0%, #00f0ff 100%)',
                color: '#000428',
                padding: '12px',
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '10px',
                '&:hover': {
                  background: 'linear-gradient(45deg, #00f0ff 0%, #00ff9d 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(0, 255, 157, 0.3)'
                }
              }}
            >
              Créer le compte
            </Button>
          </CardContent>
        </Card>

        <Card
          sx={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: '#00ff9d'
              }}
            >
              Mes Comptes
            </Typography>

            <List>
              {comptes.map((compte) => (
                <React.Fragment key={compte.id}>
                  <ListItem
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '10px',
                      mb: 2
                    }}
                  >
                    <Box sx={{ mr: 2 }}>
                      {compte.type === 'COURANT' ? (
                        <AccountBalanceIcon sx={{ color: '#00ff9d', fontSize: 30 }} />
                      ) : (
                        <SavingsIcon sx={{ color: '#00f0ff', fontSize: 30 }} />
                      )}
                    </Box>
                    <ListItemText
                      primary={
                        <Typography variant="h6" sx={{ color: '#fff' }}>
                          {compte.solde.toFixed(2)}
                        </Typography>
                      }
                      secondary={
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          {compte.type} - Créé le {compte.dateCreation}
                        </Typography>
                      }
                    />
                    <IconButton
                      onClick={() => handleDeleteCompte(compte.id)}
                      sx={{
                        color: '#ff4757',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 71, 87, 0.1)'
                        }
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => setSelectedCompte({ ...compte })}
                      sx={{
                        color: '#00ff9d',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 255, 157, 0.1)'
                        }
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>

        {selectedCompte && (
          <Card
            sx={{
              mt: 4,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: '#00ff9d'
                }}
              >
                Modifier le Compte
              </Typography>

              <TextField
                label="Solde"
                type="number"
                fullWidth
                variant="outlined"
                margin="normal"
                value={selectedCompte.solde}
                onChange={(e) => setSelectedCompte({ ...selectedCompte, solde: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#fff',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#00ff9d',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00ff9d',
                    }
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-focused': {
                      color: '#00ff9d'
                    }
                  }
                }}
              />

              <TextField
                label="Date de Création"
                type="date"
                fullWidth
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                value={selectedCompte.dateCreation}
                onChange={(e) => setSelectedCompte({ ...selectedCompte, dateCreation: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#fff',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#00ff9d',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00ff9d',
                    }
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-focused': {
                      color: '#00ff9d'
                    }
                  }
                }}
              />

              <FormControl
                fullWidth
                variant="outlined"
                margin="normal"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#fff',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#00ff9d',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00ff9d',
                    }
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-focused': {
                      color: '#00ff9d'
                    }
                  }
                }}
              >
                <InputLabel>Type</InputLabel>
                <Select
                  value={selectedCompte.type}
                  onChange={(e) => setSelectedCompte({ ...selectedCompte, type: e.target.value })}
                  label="Type"
                >
                  <MenuItem value="COURANT">Courant</MenuItem>
                  <MenuItem value="EPARGNE">Épargne</MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleUpdateCompte}
                  sx={{
                    background: 'linear-gradient(45deg, #00ff9d 0%, #00f0ff 100%)',
                    color: '#000428',
                    padding: '12px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '10px',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #00f0ff 0%, #00ff9d 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(0, 255, 157, 0.3)'
                    }
                  }}
                >
                  Mettre à jour
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => setSelectedCompte(null)}
                  sx={{
                    borderColor: '#ff4757',
                    color: '#ff4757',
                    padding: '12px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '10px',
                    '&:hover': {
                      borderColor: '#ff6b81',
                      color: '#ff6b81',
                      backgroundColor: 'rgba(255, 71, 87, 0.1)'
                    }
                  }}
                >
                  Annuler
                </Button>
              </Box>
            </CardContent>
          </Card>
        )}
      </Container>
    </Box>
  );
}

export default BankingManagement;
