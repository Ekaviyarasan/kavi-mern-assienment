import express from 'express';
import { getJobs, createJob, updateJob } from '../controllers/jobController.js';

const router = express.Router();

router.route('/')
  .get(getJobs)
  .post(createJob);

router.route('/:id')
  .put(updateJob);

export default router;
