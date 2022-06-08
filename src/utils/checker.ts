import { Gender, Status } from '../interfaces/character.interface';

export const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

export const isGender = (gender: any): gender is Gender => {
  return Object.values(Gender).includes(gender);
};

export const isStatus = (status: any): status is Status => {
  return Object.values(Status).includes(status);
};
