const mongoose = require('mongoose');

// Utilisez l'adresse 127.0.0.1 pour éviter les problèmes liés à ::1 (IPv6).
// Adaptez le nom de la base de données si besoin.
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/targetBankDB';

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database successfully connected');
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
