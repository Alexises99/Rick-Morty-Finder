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
import NotifyError from '../components/NotifyError';
import { checkParameters } from '../utils/checkParams';

const Search = () => {
  const { reset: resetName, setValue: setName, ...name } = useField('text');
  const { reset: resetGender, setValue: setGender, ...gender } = useSelect();
  const { reset: resetStatus, setValue: setStatus, ...status } = useSelect();

  const history = createBrowserHistory();

  const [characters, setCharacters] = useState<Array<CharacterType>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const errorMessage = 'Personajes no encontrados';

  useEffect(() => {
    const params = history.location.search.substring(1);
    const filterParams = qs.parse(params);
    const paramsFiltered = checkParameters(filterParams);
    const { name, gender, status } = paramsFiltered;
    let search = false;
    if (name) {
      setName(name);
      search = true;
    }
    if (gender) {
      setGender(gender);
      search = true;
    }
    if (status) {
      setStatus(status);
      search = true;
    }
    if (search) {
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
    }
  }, []);

  useEffect(() => {
    history.push(`?name=${name.value}&gender=${gender.value}&status=${status.value}`);
  }, [name.value, gender.value, status.value]);

  const fetchData = async (name: string, status: string, gender: string): Promise<Array<CharacterType>> => {
    return await characterService.getAll(name, status, gender);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    fetchData(name.value, status.value as Status, gender.value as Gender)
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
        <h2 className="text-center text-5xl font-bold mb-4 text-primary-green drop-shadow-xl">Rick & Morty Finder</h2>
        <p className="mb-3 text-center text-lg text-white md:text-2xl font-medium">
          Aqui podras encontrar toda la informacion de los personajes de la serie de Rick y Morty.
        </p>

        <form className="md:max-w-5xl mx-auto" onSubmit={handleSubmit}>
          <InputForm name="name" labelTag="Nombre:" values={name} placeholder="Nombre del personaje..." />

          <SelectForm
            labelTag="Genero"
            name="gender"
            values={gender}
            options={Object.values(Gender)}
            reset={resetGender}
          />

          <SelectForm
            labelTag="Estado"
            name="status"
            values={status}
            options={Object.values(Status)}
            reset={resetStatus}
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full text-white font-bold text-lg rounded-md p-2 bg-primary-green/60 focus:border-cyan-600 focus:ring-cyan-300"
          >
            Buscar
          </button>
        </form>
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
