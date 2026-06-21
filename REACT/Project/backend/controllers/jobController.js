import Job from '../models/Job.js';

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Public
export const getJobs = async (_req, res) => {
  try {
    const jobs = await Job.find({});
    return res.json(jobs);
  } catch (error) {
    return res.status(500).json({ message: 'Server error retrieving jobs.', error: error.message });
  }
};

// @desc    Create a new job
// @route   POST /api/jobs
// @access  Public
export const createJob = async (req, res) => {
  const { title, category, location, description, budget, estimatedTime, companyName, type } = req.body;

  if (!title || !category || !location || !description) {
    return res.status(400).json({ message: 'Title, category, location, and description are required.' });
  }

  try {
    const job = new Job({
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
    });

    await job.save();
    return res.status(201).json(job);
  } catch (error) {
    return res.status(500).json({ message: 'Server error creating job.', error: error.message });
  }
};

// @desc    Update a job by custom id
// @route   PUT /api/jobs/:id
// @access  Public
export const updateJob = async (req, res) => {
  try {
    const updatedJob = await Job.findOneAndUpdate(
      { id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found.' });
    }

    return res.json(updatedJob);
  } catch (error) {
    return res.status(500).json({ message: 'Server error updating job.', error: error.message });
  }
};
