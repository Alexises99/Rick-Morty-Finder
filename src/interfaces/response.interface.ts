import { CharacterType } from './character.interface';

export interface ResponseApi {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: Array<CharacterType>;
}
