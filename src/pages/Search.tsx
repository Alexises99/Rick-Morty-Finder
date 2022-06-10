import { useState } from 'react';
import Character from '../components/Character';
import LoadingSpinner from '../components/LoadingSpinner';
import { CharacterType } from '../interfaces/character.interface';
import characterService from '../services/character';
import NotifyError from '../components/NotifyError';
import Heading2 from '../components/Heading2';
import SearchCharacterForm from '../components/form/SearchCharacterForm';

const Search = () => {
  const [characters, setCharacters] = useState<Array<CharacterType>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const errorMessage = 'Personajes no encontrados';

  const fetchData = async (name: string, status: string, gender: string): Promise<Array<CharacterType>> => {
    return await characterService.getAll(name, status, gender);
  };

  const handleSubmit = async (name: string, status: string, gender: string) => {
    setLoading(true);

    fetchData(name, status, gender)
      .then((data) => {
        setCharacters(data);
        setLoading(false);
        setError('');
      })
      .catch(() => {
        setError(errorMessage);
        setLoading(false);
        setCharacters([]);
      });
  };

  return (
    <div>
      <section className="p-2">
        <Heading2 text="Rick & Morty Finder" />

        <p className="mb-3 text-center text-lg text-white md:text-2xl font-medium">
          Aqui podras encontrar toda la informacion de los personajes de la serie de Rick y Morty.
        </p>

        <SearchCharacterForm onSubmit={handleSubmit} />
      </section>
      {error && <NotifyError text={error} />}

      <section className="flex justify-center mt-4">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="container grid md:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {characters.map((character) => (
              <Character key={character.id} character={character} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Search;
