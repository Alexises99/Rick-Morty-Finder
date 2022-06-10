import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Heading2 from '../components/Heading2';
import NotifyError from '../components/NotifyError';
import { CharacterType } from '../interfaces/character.interface';
import characterService from '../services/character';

const Character = () => {
  const [character, setCharacter] = useState<CharacterType>();
  const [error, setError] = useState<string>('');

  const errorMessage = 'Personaje no encontrado';

  const { characterId } = useParams();

  const fetchCharacter = async (): Promise<CharacterType | void> => {
    if (characterId) {
      return await characterService.getOne(+characterId);
    }
  };

  useEffect(() => {
    fetchCharacter()
      .then((data) => {
        if (data) {
          setCharacter(data);
        }
      })
      .catch(() => setError(errorMessage));
  }, []);

  return (
    <div className="mt-3">
      {error && <NotifyError text={error} />}
      {character && (
        <div>
          <img src={character.image} alt={character.name} className="mx-auto mb-2" />
          <Heading2 text={character.name} />
        </div>
      )}
    </div>
  );
};

export default Character;
