import { Gender, Status } from '../interfaces/character.interface';
import { isGender, isStatus, isString } from './checker';

export interface ParamsType {
  name: string;
  gender: string;
  status: string;
}

export const checkParameters = (object: any): ParamsType => {
  const { name, gender, status } = object;
  return {
    name: parseName(name),
    gender: parseGender(gender),
    status: parseStatus(status),
  };
};

const parseName = (name: any): string => {
  if (!name || !isString(name)) {
    return '';
  }
  return name;
};

const parseGender = (gender: any): string => {
  if (!gender || !isGender(gender)) {
    return '';
  }
  return gender;
};

const parseStatus = (status: any): string => {
  if (!status || !isStatus(status)) {
    return '';
  }
  return status;
};
