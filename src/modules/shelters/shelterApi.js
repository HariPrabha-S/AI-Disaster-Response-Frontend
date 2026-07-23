import api from '../../services/api';

export const getShelter = async (params) => {
  const res = await api.get('/shelter', { params });
  return res.data;
};

export const getShelterById = async (id) => {
  const res = await api.get(`/shelter/${id}`);
  return res.data;
};

export const createShelter = async (payload) => {
  const res = await api.post('/shelter', payload);
  return res.data;
};

export const updateShelter = async (id, payload) => {
  const res = await api.put(`/shelter/${id}`, payload);
  return res.data;
};

export const deleteShelter = async (id) => {
  const res = await api.delete(`/shelter/${id}`);
  return res.data;
};
