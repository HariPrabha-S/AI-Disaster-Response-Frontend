import api from '../../services/api';

export const getProfile = async (params) => {
  const res = await api.get('/profile', { params });
  return res.data;
};

export const getProfileById = async (id) => {
  const res = await api.get(`/profile/${id}`);
  return res.data;
};

export const createProfile = async (payload) => {
  const res = await api.post('/profile', payload);
  return res.data;
};

export const updateProfile = async (id, payload) => {
  const res = await api.put(`/profile/${id}`, payload);
  return res.data;
};

export const deleteProfile = async (id) => {
  const res = await api.delete(`/profile/${id}`);
  return res.data;
};
