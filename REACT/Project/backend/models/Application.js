import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  jobId: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  applicantName: {
    type: String,
    required: true,
  },
  title: String,
  description: String,
  budget: String,
  location: String,
  companyName: String,
  applicationStatus: {
    type: String,
    default: 'Applied',
  },
  appliedAt: {
    type: String,
    default: () => new Date().toISOString(),
  },
}, {
  timestamps: true,
});

const Application = mongoose.model('Application', applicationSchema);
export default Application;
