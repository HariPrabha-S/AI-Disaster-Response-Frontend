import { STATUS_TYPES } from './constants.js';

export const getStatusLabel = (status) => status || 'Unknown';

export const isValidStatus = (status) => STATUS_TYPES.includes(status);
