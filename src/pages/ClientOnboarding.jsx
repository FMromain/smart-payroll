// src/pages/ClientOnboarding.jsx

import React, { useState } from 'react';
import { createClient } from 'api/client'; // Import the API service function
import { TextField, Button, Grid, Box } from '@mui/material';

const ClientOnboarding = () => {
  const [clientData, setClientData] = useState({
    name: '',
    address: '',
    taxId: '',
    contactEmail: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData({
      ...clientData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the API function to create a client
      const response = await createClient(clientData);
      console.log('Client created:', response);
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error creating client:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nom du client"
            name="name"
            value={clientData.name}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Adresse"
            name="address"
            value={clientData.address}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Numéro d'identification fiscale"
            name="taxId"
            value={clientData.taxId}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email de contact"
            name="contactEmail"
            type="email"
            value={clientData.contactEmail}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Enregistrer le profil client
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClientOnboarding;
