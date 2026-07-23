import api from '../../services/api';

export const getImpact = async (params) => {
  const res = await api.get('/impact', { params });
  return res.data;
};

export const getImpactById = async (id) => {
  const res = await api.get(`/impact/${id}`);
  return res.data;
};

export const createImpact = async (payload) => {
  const res = await api.post('/impact', payload);
  return res.data;
};

export const updateImpact = async (id, payload) => {
  const res = await api.put(`/impact/${id}`, payload);
  return res.data;
};

export const deleteImpact = async (id) => {
  const res = await api.delete(`/impact/${id}`);
  return res.data;
};
