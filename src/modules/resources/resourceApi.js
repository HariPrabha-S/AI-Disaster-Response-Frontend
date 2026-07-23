import api from '../../services/api';

export const getResource = async (params) => {
  const res = await api.get('/resource', { params });
  return res.data;
};

export const getResourceById = async (id) => {
  const res = await api.get(`/resource/${id}`);
  return res.data;
};

export const createResource = async (payload) => {
  const res = await api.post('/resource', payload);
  return res.data;
};

export const updateResource = async (id, payload) => {
  const res = await api.put(`/resource/${id}`, payload);
  return res.data;
};

export const deleteResource = async (id) => {
  const res = await api.delete(`/resource/${id}`);
  return res.data;
};
