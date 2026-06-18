const API_BASE = '/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || 'Request failed.');
  }

  return data;
}

export const loginUser = (payload) => request('/auth/login', {
  method: 'POST',
  body: JSON.stringify(payload),
});

export const registerUser = (payload) => request('/auth/register', {
  method: 'POST',
  body: JSON.stringify(payload),
});

export const getJobs = () => request('/jobs');

export const createJob = (payload) => request('/jobs', {
  method: 'POST',
  body: JSON.stringify(payload),
});

export const getApplications = (email) => request(`/applications?email=${encodeURIComponent(email)}`);

export const createApplication = (payload) => request('/applications', {
  method: 'POST',
  body: JSON.stringify(payload),
});

export const deleteApplication = (id) => request(`/applications/${id}`, {
  method: 'DELETE',
});
