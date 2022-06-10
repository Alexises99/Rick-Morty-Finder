import { isGender, isStatus, isString } from './checker';

export interface ParamsType {
  name: string;
  gender: string;
  status: string;
}
/**
 * Comprueba que los parametros recibidos sean correctos en runtime,
 * ya que puede darse el caso de que estos parametros no tengan el tipo correcto
 * @param object Representa los parametros extraidos de la url
 * @returns Parametros validos
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkParameters = (object: any): ParamsType => {
  const { name, gender, status } = object;
  return {
    name: parseName(name),
    gender: parseGender(gender),
    status: parseStatus(status),
  };
};

/**
 * Comprueba que el nombre sea del tipo string
 * @param name Nombre del personaje
 * @returnsPNombre si es del tipo string, "" en caso de no ser de tipo String
 */
const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    return '';
  }
  return name;
};

/**
 * Comprueba que el genero sea del tipo Gender
 * @param gender Genero del personaje
 * @returns Genero si es del tipo genero, "" en caso de no ser del tipo Gender
 */
const parseGender = (gender: unknown): string => {
  if (!gender || !isGender(gender)) {
    return '';
  }
  return gender;
};

/**
 * Comprueba que el estado sea del tipo Status
 * @param status Estado del personaje
 * @returns Estado si es del tipo Estado, "" en caso de no ser del tipo Estado
 */
const parseStatus = (status: unknown): string => {
  if (!status || !isStatus(status)) {
    return '';
  }
  return status;
};
