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

const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
].filter(Boolean);

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Mount API Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.method} ${req.originalUrl} not found.` });
});

app.use((error, _req, res, _next) => {
  console.error(error.message);
  res.status(error.status || 500).json({ message: error.message || 'Internal server error.' });
});

// Seeding logic to migrate initial JSON data to MongoDB
const seedDatabase = async () => {
  if (!fs.existsSync(dbPath)) return;

  try {
    const localDb = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    // Seed Users if none exist
    if (await User.countDocuments() === 0 && localDb.users?.length) {
      await User.insertMany(localDb.users, { ordered: false });
      console.log(`Seeded ${localDb.users.length} users.`);
    }
    // Seed Jobs if none exist
    if (await Job.countDocuments() === 0 && localDb.jobs?.length) {
      await Job.insertMany(localDb.jobs);
      console.log(`Seeded ${localDb.jobs.length} jobs.`);
    }
    // Seed Applications if none exist
    if (await Application.countDocuments() === 0 && localDb.applications?.length) {
      await Application.insertMany(localDb.applications);
      console.log(`Seeded ${localDb.applications.length} applications.`);
    }
  } catch (error) {
    console.error(`Database seeding warning: ${error.message}`);
  }
};

const startServer = async () => {
  try {
    await connectDB();
    await seedDatabase();

    const port = Number(process.env.PORT) || 5000;
    app.listen(port, () => {
      console.log(`Backend server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error.message);
    process.exit(1);
  }
};

startServer();
