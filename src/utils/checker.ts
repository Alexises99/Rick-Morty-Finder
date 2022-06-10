import { Gender, Status } from '../interfaces/character.interface';

/**
 * Comprueba si el argumento es del tipo string
 * @param text Texto a comprobar
 * @returns True si es del tipo string, false en otro caso
 */
export const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

/**
 * Comprueba si el argumento pertenece a la enumeracion Gender
 * @param gender Genero a comprobar
 * @returns True si pertenece a un Genero definido, false en otro caso
 */
export const isGender = (gender: any): gender is Gender => {
  return Object.values(Gender).includes(gender);
};

/**
 * Compruba si el argumento pertence a un status
 * @param status Estado a comprobar
 * @returns True si pertenece a un Estado definido, false en otro caso
 */
export const isStatus = (status: any): status is Status => {
  return Object.values(Status).includes(status);
};
