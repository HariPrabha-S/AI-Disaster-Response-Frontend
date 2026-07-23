import api from '../../services/api';

export const getAuth = async (params) => {
  const res = await api.get('/auth', { params });
  return res.data;
};

export const getAuthById = async (id) => {
  const res = await api.get(`/auth/${id}`);
  return res.data;
};

export const createAuth = async (payload) => {
  const res = await api.post('/auth', payload);
  return res.data;
};

export const updateAuth = async (id, payload) => {
  const res = await api.put(`/auth/${id}`, payload);
  return res.data;
};

export const deleteAuth = async (id) => {
  const res = await api.delete(`/auth/${id}`);
  return res.data;
};
