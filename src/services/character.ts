import { CharacterType } from '../interfaces/character.interface';
import { ResponseApi } from '../interfaces/response.interface';

const baseUrl = 'https://rickandmortyapi.com/api/character';

/**
 * Realiza una peticion para obtener todos los personajes segun los filtros indicados
 * en los argumentos
 * @param name Nombre del personaje
 * @param status Estado del personaje
 * @param gender Genero del personaje
 * @returns Todos los Personajes de la busqueda
 */
const getAll = async (name: string, status: string, gender: string): Promise<Array<CharacterType>> => {
  const data = await getAllCharacters(`${baseUrl}/?name=${name}&status=${status}&gender=${gender}`);
  return data;
};

/**
 * Realiza una busqueda de un personaje
 * @param id Id del personaje que se desea obtener
 * @returns Personaje obtenido
 */
const getOne = async (id: number): Promise<CharacterType> => {
  const response = await fetch(`${baseUrl}/${id}`);
  if (response.ok) {
    const data: CharacterType = await response.json();
    return data;
  } else {
    throw new Error();
  }
};

/**
 * Realiza x peticiones para obtener todos los personajes a traves de recorrer las
 * diferentes paginas que nos ofrece la API
 * @param url url de la peticion
 * @returns Todos los personajes que se han recopilado de las diferentes paginas
 */
const getAllCharacters = async (url: string): Promise<Array<CharacterType>> => {
  const response = await fetch(url);
  const data: ResponseApi = await response.json();
  const characters = data.results;
  const { info } = data;
  const { next } = info;
  if (next !== null) {
    characters.push(...(await getAllCharacters(next)));
  }
  return characters;
};

export default {
  getAll,
  getOne,
};
