import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import Job from '../models/Job.js';
import Application from '../models/Application.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '..', 'server-data', 'db.json');

// Ensure db.json exists
const ensureDbFile = () => {
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ users: [], jobs: [], applications: [] }, null, 2), 'utf8');
  }
};

const readDb = () => {
  ensureDbFile();
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON DB file:', error);
    return { users: [], jobs: [], applications: [] };
  }
};

const writeDb = (data) => {
  ensureDbFile();
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing JSON DB file:', error);
  }
};

export const initLocalJsonDb = () => {
  global.isLocalFallback = true;
  console.log('⚠️ MongoDB connection offline. Swapping models to Local JSON Database Fallback...');
  ensureDbFile();

  // ----------------------------------------------------
  // USER MODEL MONKEY PATCHES
  // ----------------------------------------------------

  User.findOne = async function (query) {
    const db = readDb();
    const email = query.email?.toLowerCase();
    const user = db.users.find(u => u.email?.toLowerCase() === email || u.id === query.id);
    if (!user) return null;

    // Attach instance method
    const userInstance = Object.assign(Object.create(User.prototype), user);
    userInstance.matchPassword = async function (enteredPassword) {
      return bcrypt.compareSync(enteredPassword, this.password);
    };
    return userInstance;
  };

  User.prototype.save = async function () {
    const db = readDb();
    
    // Hash password if it looks unhashed (not starting with $2a$ or $2b$)
    if (this.password && !this.password.startsWith('$2')) {
      const salt = bcrypt.genSaltSync(10);
      this.password = bcrypt.hashSync(this.password, salt);
    }

    if (!this.id) {
      this.id = `user-${Date.now()}`;
    }

    const index = db.users.findIndex(u => u.id === this.id || u.email?.toLowerCase() === this.email?.toLowerCase());
    const userData = {
      id: this.id,
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      createdAt: this.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (index !== -1) {
      db.users[index] = userData;
    } else {
      db.users.push(userData);
    }

    writeDb(db);
    return this;
  };

  // ----------------------------------------------------
  // JOB MODEL MONKEY PATCHES
  // ----------------------------------------------------

  Job.find = async function (query = {}) {
    const db = readDb();
    return db.jobs;
  };

  Job.prototype.save = async function () {
    const db = readDb();
    if (!this.id) {
      this.id = `job-${Date.now()}`;
    }

    const index = db.jobs.findIndex(j => j.id === this.id);
    const jobData = {
      id: this.id,
      title: this.title,
      category: this.category,
      location: this.location,
      description: this.description,
      budget: this.budget,
      estimatedTime: this.estimatedTime,
      companyName: this.companyName,
      type: this.type || 'default',
      status: this.status || 'JUST NOW',
      icon: this.icon || 'Package',
      iconBgC: this.iconBgC || 'bg-indigo-500/10',
      iconC: this.iconC || 'text-indigo-400',
      createdAt: this.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (index !== -1) {
      db.jobs[index] = jobData;
    } else {
      db.jobs.push(jobData);
    }

    writeDb(db);
    return this;
  };

  Job.findOneAndUpdate = async function (query, update, options) {
    const db = readDb();
    const id = query.id;
    const index = db.jobs.findIndex(j => j.id === id);
    if (index === -1) return null;

    const fieldsToSet = update.$set || update;
    db.jobs[index] = {
      ...db.jobs[index],
      ...fieldsToSet,
      updatedAt: new Date().toISOString()
    };

    writeDb(db);
    return db.jobs[index];
  };

  // ----------------------------------------------------
  // APPLICATION MODEL MONKEY PATCHES
  // ----------------------------------------------------

  Application.find = async function (query = {}) {
    const db = readDb();
    if (query.userEmail) {
      return db.applications.filter(a => a.userEmail === query.userEmail);
    }
    return db.applications;
  };

  Application.prototype.save = async function () {
    const db = readDb();
    if (!this.id) {
      this.id = `app-${Date.now()}`;
    }

    const index = db.applications.findIndex(a => a.id === this.id);
    const appData = {
      id: this.id,
      jobId: this.jobId,
      userEmail: this.userEmail,
      applicantName: this.applicantName,
      title: this.title,
      description: this.description,
      budget: this.budget,
      location: this.location,
      companyName: this.companyName,
      applicationStatus: this.applicationStatus || 'Applied',
      appliedAt: this.appliedAt || new Date().toISOString(),
      interviewMeetLink: this.interviewMeetLink || '',
      interviewDateTime: this.interviewDateTime || '',
      interviewerName: this.interviewerName || '',
      interviewerEmail: this.interviewerEmail || '',
      hrName: this.hrName || '',
      hrEmail: this.hrEmail || '',
      createdAt: this.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (index !== -1) {
      db.applications[index] = appData;
    } else {
      db.applications.push(appData);
    }

    writeDb(db);
    return this;
  };

  Application.findOneAndUpdate = async function (query, update, options) {
    const db = readDb();
    const id = query.id || (query.$or ? query.$or.find(o => o.id !== undefined)?.id : null);
    const index = db.applications.findIndex(a => a.id === id);
    if (index === -1) return null;

    const fieldsToSet = update.$set || update;
    db.applications[index] = {
      ...db.applications[index],
      ...fieldsToSet,
      updatedAt: new Date().toISOString()
    };

    writeDb(db);
    return db.applications[index];
  };

  Application.findOneAndDelete = async function (query) {
    const db = readDb();
    const id = query.id || (query.$or ? query.$or.find(o => o.id !== undefined)?.id : null);
    const index = db.applications.findIndex(a => a.id === id);
    if (index === -1) return null;

    const removed = db.applications[index];
    db.applications.splice(index, 1);
    writeDb(db);
    return removed;
  };


  console.log('✅ Local JSON Database Fallback initialized successfully!');
};
