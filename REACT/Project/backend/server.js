import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import User from './models/User.js';
import Job from './models/Job.js';
import Application from './models/Application.js';

// Import Route Modules
import authRoutes from './routes/authRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, 'server-data', 'db.json');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB().then(() => {
  seedDatabase();
});

// Seeding logic to migrate initial JSON data to MongoDB
const seedDatabase = async () => {
  if (global.isLocalFallback) {
    console.log('Local JSON DB fallback is active, skipping seed migration.');
    return;
  }
  try {
    if (fs.existsSync(dbPath)) {
      console.log('Found local db.json, checking for data migration...');
      const localDb = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

      // Seed Users if none exist
      const userCount = await User.countDocuments();
      if (userCount === 0 && localDb.users && localDb.users.length > 0) {
        console.log(`Seeding ${localDb.users.length} users...`);
        await User.insertMany(localDb.users);
        console.log('Users seeded successfully!');
      }

      // Seed Jobs if none exist
      const jobCount = await Job.countDocuments();
      if (jobCount === 0 && localDb.jobs && localDb.jobs.length > 0) {
        console.log(`Seeding ${localDb.jobs.length} jobs...`);
        await Job.insertMany(localDb.jobs);
        console.log('Jobs seeded successfully!');
      }

      // Seed Applications if none exist
      const applicationCount = await Application.countDocuments();
      if (applicationCount === 0 && localDb.applications && localDb.applications.length > 0) {
        console.log(`Seeding ${localDb.applications.length} applications...`);
        await Application.insertMany(localDb.applications);
        console.log('Applications seeded successfully!');
      }
    }
  } catch (error) {
    console.error('Error during database seeding:', error.message);
  }
};

// Mount API Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
