import api from '../../services/api';

export const getLogistics = async (params) => {
  const res = await api.get('/logistics', { params });
  return res.data;
};

export const getLogisticsById = async (id) => {
  const res = await api.get(`/logistics/${id}`);
  return res.data;
};

export const createLogistics = async (payload) => {
  const res = await api.post('/logistics', payload);
  return res.data;
};

export const updateLogistics = async (id, payload) => {
  const res = await api.put(`/logistics/${id}`, payload);
  return res.data;
};

export const deleteLogistics = async (id) => {
  const res = await api.delete(`/logistics/${id}`);
  return res.data;
};
