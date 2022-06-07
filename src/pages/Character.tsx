import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterType } from '../interfaces/character.interface';
import characterService from '../services/character';

const Character = () => {
  const [character, setCharacter] = useState<CharacterType>();

  const { characterId } = useParams();

  const fetchCharacter = async () => {
    if (characterId) {
      return await characterService.getOne(+characterId);
    }
  };

  useEffect(() => {
    console.log('hello');
    fetchCharacter()
      .then((data) => setCharacter(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(character);

  return (
    <div className="mt-3">
      {character && (
        <div className="flex items-center flex-col">
          <img src={character.image} alt={character.name} />
          <h2 className="text-primary-green text-3xl font-bold mt-3">{character.name}</h2>
        </div>
      )}
    </div>
  );
};

export default Character;
