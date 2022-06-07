import { CharacterType, Gender, Status } from '../interfaces/character.interface';
import { ResponseApi } from '../interfaces/response.interface';

const baseUrl = 'https://rickandmortyapi.com/api/character';

const getAll = async (name: string, status: Status, gender: Gender) => {
  const data = await getAllCharacters(`${baseUrl}/?name=${name}&status=${status}&genre=${gender}`);
  return data;
};

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
};
