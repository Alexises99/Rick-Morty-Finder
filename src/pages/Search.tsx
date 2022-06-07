import React, { useEffect, useState } from 'react';
import Character from '../components/Character';
import InputForm from '../components/InputForm';
import LoadingSpinner from '../components/LoadingSpinner';
import SelectForm from '../components/SelectForm';
import { useField } from '../hooks/useField';
import { useSelect } from '../hooks/useSelect';
import { CharacterType, Gender, Status } from '../interfaces/character.interface';
import characterService from '../services/character';
import { createBrowserHistory } from 'history';
import qs from 'qs';

const Search = () => {
  const { reset: resetName, setValue: setName, ...name } = useField('text');
  const { reset: resetGender, setValue: setGender, ...genre } = useSelect();
  const { reset: resetStatus, setValue: setStatus, ...status } = useSelect();
  const history = createBrowserHistory();

  const [characters, setCharacters] = useState<Array<CharacterType>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const params = history.location.search.substring(1);
    const filterParams = qs.parse(params);
    if (filterParams.name) {
      setName(filterParams.name.toString());
    }
    if (filterParams.gender) {
      console.log(filterParams.gender.toString());
      setGender(filterParams.gender.toString());
    }
    if (filterParams.status) {
      setStatus(filterParams.status.toString());
    }
    console.log(params);
  }, []);

  useEffect(() => {
    history.push(`?name=${name.value}&status=${status.defaultValue}&gender=${genre.defaultValue}`);
  }, [name.value, genre.defaultValue, status.defaultValue]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await characterService.getAll(
        name.value,
        status.defaultValue as Status,
        genre.defaultValue as Gender,
      );
      setCharacters(data);
      setLoading(false);
    } catch (err) {
      setError('Error cargando personajes');
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="p-2">
        <h2 className="text-center text-5xl font-bold mb-4 text-primary-green drop-shadow-xl">Rick & Morty Finder</h2>
        <p className="mb-3 text-center text-lg text-white md:text-2xl font-medium">
          Aqui podras encontrar toda la informacion de los personajes de la serie de Rick y Morty.
        </p>
        {error && <p className="text-red-500">{error}</p>}
        <form className="md:max-w-5xl mx-auto" onSubmit={handleSubmit}>
          <InputForm labelTag="Nombre" name="name" values={name} placeholder="Nombre del personaje..." />
          <SelectForm labelTag="Genero" name="genre" values={genre} options={Object.values(Gender)} />
          <SelectForm labelTag="Estado" name="status" values={status} options={Object.values(Status)} />
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full text-white font-bold text-lg rounded-md p-2 bg-primary-green/60 focus:border-cyan-600 focus:ring-cyan-300"
          >
            Buscar
          </button>
        </form>
      </section>
      <section className="">
        {loading ? (
          <LoadingSpinner />
        ) : (
          characters.map((character) => <Character key={character.id} character={character} />)
        )}
      </section>
    </div>
  );
};

export default Search;
