import moment from 'moment-timezone';

export const getCurrentDate = (dateFormat: string = 'MMM DD, YYYY  hh:mm:ss A') => {
  return moment().format(dateFormat);
};
