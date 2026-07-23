import { SEVERITY_LEVELS } from './constants.js';

export const getSeverityColor = (level) => {
  switch (level) {
    case 'Critical':
      return '#d32f2f';
    case 'High':
      return '#f57c00';
    case 'Medium':
      return '#fbc02d';
    case 'Low':
      return '#388e3c';
    default:
      return '#9e9e9e';
  }
};

export const isValidSeverity = (level) => SEVERITY_LEVELS.includes(level);
