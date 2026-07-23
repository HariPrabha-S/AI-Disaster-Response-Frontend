import api from '../../services/api';

export const getDisaster = async (params) => {
  const res = await api.get('/disaster', { params });
  return res.data;
};

export const getDisasterById = async (id) => {
  const res = await api.get(`/disaster/${id}`);
  return res.data;
};

export const createDisaster = async (payload) => {
  const res = await api.post('/disaster', payload);
  return res.data;
};

export const updateDisaster = async (id, payload) => {
  const res = await api.put(`/disaster/${id}`, payload);
  return res.data;
};

export const deleteDisaster = async (id) => {
  const res = await api.delete(`/disaster/${id}`);
  return res.data;
};
