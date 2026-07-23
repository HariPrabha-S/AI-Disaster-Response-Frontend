import api from '../../services/api';

export const getNotification = async (params) => {
  const res = await api.get('/notification', { params });
  return res.data;
};

export const getNotificationById = async (id) => {
  const res = await api.get(`/notification/${id}`);
  return res.data;
};

export const createNotification = async (payload) => {
  const res = await api.post('/notification', payload);
  return res.data;
};

export const updateNotification = async (id, payload) => {
  const res = await api.put(`/notification/${id}`, payload);
  return res.data;
};

export const deleteNotification = async (id) => {
  const res = await api.delete(`/notification/${id}`);
  return res.data;
};
