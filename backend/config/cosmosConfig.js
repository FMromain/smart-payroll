// backend/config/database.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

// Use the connection string from your environment variables
const mongoUri = process.env.COSMOS_MONGODB_URI;
const client = new MongoClient(mongoUri);

const databaseId = 'payroll-db'; // Your database name
const collectionId = 'clients';  // Your collection name

// Connect to MongoDB
async function connectDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to Cosmos DB MongoDB API successfully.");
    
    const database = client.db(databaseId);
    return {
      database,
      collection: database.collection(collectionId),
    };
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

module.exports = { connectDatabase };
