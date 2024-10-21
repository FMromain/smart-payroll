// src/api/client.js

const API_URL = '/api/clients';

// Function to create a new client
export const createClient = async (clientData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create client');
    }
    
    return await response.json(); // Return the newly created client
  } catch (error) {
    console.error('Error creating client:', error);
    throw error;
  }
};

// Function to fetch all clients
export const fetchClients = async () => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error('Failed to fetch clients');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
};

// Function to fetch a single client by ID
export const fetchClientById = async (clientId) => {
  try {
    const response = await fetch(`${API_URL}/${clientId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch client with ID: ${clientId}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching client with ID: ${clientId}`, error);
    throw error;
  }
};

// Function to update a client by ID
export const updateClient = async (clientId, updatedData) => {
  try {
    const response = await fetch(`${API_URL}/${clientId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to update client with ID: ${clientId}`);
    }
    
    return await response.json(); // Return the updated client
  } catch (error) {
    console.error(`Error updating client with ID: ${clientId}`, error);
    throw error;
  }
};

// Function to delete a client by ID
export const deleteClient = async (clientId) => {
  try {
    const response = await fetch(`${API_URL}/${clientId}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`Failed to delete client with ID: ${clientId}`);
    }
    
    return { message: 'Client deleted successfully' };
  } catch (error) {
    console.error(`Error deleting client with ID: ${clientId}`, error);
    throw error;
  }
};
