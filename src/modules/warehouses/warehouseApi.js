import api from '../../services/api';

export const getWarehouse = async (params) => {
  const res = await api.get('/warehouse', { params });
  return res.data;
};

export const getWarehouseById = async (id) => {
  const res = await api.get(`/warehouse/${id}`);
  return res.data;
};

export const createWarehouse = async (payload) => {
  const res = await api.post('/warehouse', payload);
  return res.data;
};

export const updateWarehouse = async (id, payload) => {
  const res = await api.put(`/warehouse/${id}`, payload);
  return res.data;
};

export const deleteWarehouse = async (id) => {
  const res = await api.delete(`/warehouse/${id}`);
  return res.data;
};
