import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, 'server-data');
const dbPath = path.join(dataDir, 'db.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const initialDb = {
  users: [],
  jobs: [],
  applications: [],
};

if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify(initialDb, null, 2));
}

const readDb = () => JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const writeDb = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/auth/register', (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'Full name, email, and password are required.' });
  }

  const db = readDb();
  const existingUser = db.users.find((user) => user.email.toLowerCase() === email.toLowerCase());

  if (existingUser) {
    return res.status(409).json({ message: 'An account with this email already exists.' });
  }

  const user = {
    id: `user-${Date.now()}`,
    fullName,
    email,
    password,
  };

  db.users.push(user);
  writeDb(db);

  return res.status(201).json({
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
    },
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const db = readDb();
  const user = db.users.find((item) => item.email.toLowerCase() === email.toLowerCase());

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  return res.json({
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
    },
  });
});

app.get('/api/jobs', (_req, res) => {
  const db = readDb();
  return res.json(db.jobs);
});

app.post('/api/jobs', (req, res) => {
  const { title, category, location, description, budget, estimatedTime, companyName, type } = req.body;

  if (!title || !category || !location || !description) {
    return res.status(400).json({ message: 'Title, category, location, and description are required.' });
  }

  const db = readDb();
  const job = {
    id: `job-${Date.now()}`,
    title,
    category,
    location,
    description,
    budget,
    estimatedTime,
    companyName,
    type: type || 'default',
    status: 'JUST NOW',
    icon: 'Package',
    iconBgC: 'bg-indigo-500/10',
    iconC: 'text-indigo-400',
  };

  db.jobs.push(job);
  writeDb(db);

  return res.status(201).json(job);
});

app.put('/api/jobs/:id', (req, res) => {
  const db = readDb();
  const jobIndex = db.jobs.findIndex((job) => job.id === req.params.id);

  if (jobIndex === -1) {
    return res.status(404).json({ message: 'Job not found.' });
  }

  db.jobs[jobIndex] = {
    ...db.jobs[jobIndex],
    ...req.body,
  };
  writeDb(db);

  return res.json(db.jobs[jobIndex]);
});

app.get('/api/applications', (req, res) => {
  const db = readDb();
  const email = req.query.email;

  const applications = email
    ? db.applications.filter((application) => application.userEmail === email)
    : db.applications;

  return res.json(applications);
});

app.post('/api/applications', (req, res) => {
  const { jobId, userEmail, applicantName, title, description, budget, location, companyName } = req.body;

  if (!jobId || !userEmail || !applicantName) {
    return res.status(400).json({ message: 'Job ID, user email, and applicant name are required.' });
  }

  const db = readDb();
  const application = {
    id: `app-${Date.now()}`,
    jobId,
    userEmail,
    applicantName,
    title,
    description,
    budget,
    location,
    companyName,
    applicationStatus: 'Applied',
    appliedAt: new Date().toISOString(),
  };

  db.applications.push(application);
  writeDb(db);

  return res.status(201).json(application);
});

app.put('/api/applications/:id', (req, res) => {
  const db = readDb();
  const applicationIndex = db.applications.findIndex((application) => application.id === req.params.id);

  if (applicationIndex === -1) {
    return res.status(404).json({ message: 'Application not found.' });
  }

  db.applications[applicationIndex] = {
    ...db.applications[applicationIndex],
    ...req.body,
  };
  writeDb(db);

  return res.json(db.applications[applicationIndex]);
});

app.delete('/api/applications/:id', (req, res) => {
  const db = readDb();
  const filteredApplications = db.applications.filter((application) => application.id !== req.params.id);

  if (filteredApplications.length === db.applications.length) {
    return res.status(404).json({ message: 'Application not found.' });
  }

  db.applications = filteredApplications;
  writeDb(db);

  return res.json({ message: 'Application removed.' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
