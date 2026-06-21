import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budget: String,
  estimatedTime: String,
  companyName: String,
  type: {
    type: String,
    default: 'default',
  },
  status: {
    type: String,
    default: 'JUST NOW',
  },
  icon: {
    type: String,
    default: 'Package',
  },
  iconBgC: {
    type: String,
    default: 'bg-indigo-500/10',
  },
  iconC: {
    type: String,
    default: 'text-indigo-400',
  },
}, {
  timestamps: true,
});

const Job = mongoose.model('Job', jobSchema);
export default Job;
