import { CharacterType } from '../interfaces/character.interface';

const Character = (character: CharacterType) => {
  return <div>{character.name}</div>;
};

export default Character;
