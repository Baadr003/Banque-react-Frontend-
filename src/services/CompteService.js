import axios from 'axios';

const API_URL = 'http://localhost:8084/banque';

// Requête GET avec headers personnalisés
export const getAllComptes = () => {
  return axios.get(`${API_URL}/comptes`, {
    headers: {
      'Accept': 'application/json', // Indique que la réponse attendue est en JSON
    },
  });
};

// Requête GET pour un compte spécifique
export const getCompteById = (id, acceptType = 'json') => {
  return axios.get(`${API_URL}/comptes/${id}`, {
    headers: {
      'Accept': acceptType === 'json' ? 'application/json' : 'application/xml', // Définir le format attendu
    },
  });
};

// Requête POST avec JSON
export const createCompte = (compte) => {
  return axios.post(`${API_URL}/comptes`, compte, {
    headers: {
      'Content-Type': 'application/json', // Envoi en JSON
    },
  });
};

// Requête POST avec XML
export const createCompteXML = (compteXML) => {
  return axios.post(`${API_URL}/comptes`, compteXML, {
    headers: {
      'Content-Type': 'application/xml', // Envoi en XML
    },
  });
};

// Requête PUT pour mise à jour
export const updateCompte = (id, compte, contentType = 'json') => {
  return axios.put(`${API_URL}/comptes/${id}`, compte, {
    headers: {
      'Content-Type': contentType === 'json' ? 'application/json' : 'application/xml',
    },
  });
};

// Requête DELETE
export const deleteCompte = (id) => {
  return axios.delete(`${API_URL}/comptes/${id}`, {
    headers: {
      'Accept': 'application/json', // Format de réponse attendu
    },
  });
};
