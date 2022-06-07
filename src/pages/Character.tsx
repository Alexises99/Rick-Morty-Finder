import { Character } from '../interfaces/character.interface';

const Character = (character: Character) => {
  return <div>{character.name}</div>;
};

export default Character;
