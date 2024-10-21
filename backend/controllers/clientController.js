const { getCollection } = require('../config/cosmosConfig');

const createClient = async (req, res) => {
  try {
    const collection = await getCollection();
    const { name, address, taxId, contactEmail } = req.body;

    const newClient = {
      name,
      address,
      taxId,
      contactEmail
    };

    const result = await collection.insertOne(newClient);
    res.status(201).json(result.ops[0]);  // Return the newly created client
  } catch (error) {
    console.error('Error creating client:', error);
    res.status(500).json({ message: 'Error creating client' });
  }
};

module.exports = { createClient };
