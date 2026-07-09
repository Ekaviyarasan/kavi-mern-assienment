import mongoose from 'mongoose';
import { initLocalJsonDb } from './localDb.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/jobzenix', {
      serverSelectionTimeoutMS: 5000 // Timeout faster so fallback triggers quickly
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    initLocalJsonDb();
  }
};

export default connectDB;

