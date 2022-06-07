import React, { useState } from 'react';
import Character from '../components/Character';
import InputForm from '../components/InputForm';
import SelectForm from '../components/SelectForm';
import { useField } from '../hooks/useField';
import { useSelect } from '../hooks/useSelect';
import { CharacterType, Gender, Status } from '../interfaces/character.interface';
import { ResponseApi } from '../interfaces/response.interface';

const Search = () => {
  const { reset: resetName, ...name } = useField('text');
  const { ...genre } = useSelect();
  const { ...status } = useSelect();

  const [characters, setCharacters] = useState<Array<CharacterType>>([]);

  const getAllPages = async (url: string): Promise<Array<CharacterType>> => {
    const response = await fetch(url);
    const data: ResponseApi = await response.json();
    const characters = data.results;
    const { info } = data;
    const { next } = info;
    if (next !== null) {
      characters.push(...(await getAllPages(next)));
    }
    return characters;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getAllPages('https://rickandmortyapi.com/api/character/?name=rick').then((data) => setCharacters(data));
  };

  return (
    <div>
      <section className="p-2">
        <h2 className="text-center text-5xl font-bold mb-4 text-primary-green drop-shadow-xl">Rick & Morty Finder</h2>
        <p className="mb-3 text-center text-lg text-white md:text-2xl font-medium">
          Aqui podras encontrar toda la informacion de los personajes de la serie de Rick y Morty.
        </p>
        <form className="md:max-w-5xl mx-auto" onSubmit={handleSubmit}>
          <InputForm labelTag="Nombre" name="name" values={name} placeholder="Nombre del personaje..." />
          <SelectForm labelTag="Genero" name="genre" values={genre} options={Object.values(Gender)} />
          <SelectForm labelTag="Estado" name="status" values={status} options={Object.values(Status)} />
          <button
            type="submit"
            className="mt-2 w-full text-white font-bold text-lg rounded-md p-2 bg-primary-green/60 focus:border-cyan-600 focus:ring-cyan-300"
          >
            Buscar
          </button>
        </form>
      </section>
      <section className="">
        {characters &&
          characters.map((character) => <Character key={character.id} name={character.name} img={character.image} />)}
      </section>
    </div>
  );
};

export default Search;
