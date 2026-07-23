import api from '../../services/api';

export const getLifecycle = async (params) => {
  const res = await api.get('/lifecycle', { params });
  return res.data;
};

export const getLifecycleById = async (id) => {
  const res = await api.get(`/lifecycle/${id}`);
  return res.data;
};

export const createLifecycle = async (payload) => {
  const res = await api.post('/lifecycle', payload);
  return res.data;
};

export const updateLifecycle = async (id, payload) => {
  const res = await api.put(`/lifecycle/${id}`, payload);
  return res.data;
};

export const deleteLifecycle = async (id) => {
  const res = await api.delete(`/lifecycle/${id}`);
  return res.data;
};
