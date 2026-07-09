import Application from '../models/Application.js';

// @desc    Get all applications (with optional email filter)
// @route   GET /api/applications
// @access  Public
export const getApplications = async (req, res) => {
  const email = req.query.email;

  try {
    const query = email ? { userEmail: email } : {};
    const applications = await Application.find(query);
    return res.json(applications);
  } catch (error) {
    return res.status(500).json({ message: 'Server error retrieving applications.', error: error.message });
  }
};

// @desc    Create a new application
// @route   POST /api/applications
// @access  Public
export const createApplication = async (req, res) => {
  const { jobId, userEmail, applicantName, title, description, budget, location, companyName } = req.body;

  if (!jobId || !userEmail || !applicantName) {
    return res.status(400).json({ message: 'Job ID, user email, and applicant name are required.' });
  }

  try {
    const application = new Application({
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
    });

    await application.save();
    return res.status(201).json(application);
  } catch (error) {
    return res.status(500).json({ message: 'Server error creating application.', error: error.message });
  }
};

// @desc    Update application status or details by custom id
// @route   PUT /api/applications/:id
// @access  Public
export const updateApplication = async (req, res) => {
  const query = req.params.id.match(/^[0-9a-fA-F]{24}$/)
    ? { $or: [{ id: req.params.id }, { _id: req.params.id }] }
    : { id: req.params.id };

  try {
    const updatedApplication = await Application.findOneAndUpdate(
      query,
      { $set: req.body },
      { new: true }
    );

    if (!updatedApplication) {
      return res.status(404).json({ message: 'Application not found.' });
    }

    return res.json(updatedApplication);
  } catch (error) {
    return res.status(500).json({ message: 'Server error updating application.', error: error.message });
  }
};

// @desc    Delete application by custom id
// @route   DELETE /api/applications/:id
// @access  Public
export const deleteApplication = async (req, res) => {
  const query = req.params.id.match(/^[0-9a-fA-F]{24}$/)
    ? { $or: [{ id: req.params.id }, { _id: req.params.id }] }
    : { id: req.params.id };

  try {
    const result = await Application.findOneAndDelete(query);

    if (!result) {
      return res.status(404).json({ message: 'Application not found.' });
    }

    return res.json({ message: 'Application removed.' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error removing application.', error: error.message });
  }
};

