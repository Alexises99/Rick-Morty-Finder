import { url } from 'inspector';
import React from 'react';
import InputForm from '../components/InputForm';
import { useField } from '../hooks/useField';
import { Character } from '../interfaces/character.interface';
import { ResponseApi } from '../interfaces/response.interface';

const Search = () => {
  const { reset: resetName, ...name } = useField('text');
  const { reset: resetGenre, ...genre } = useField('text');
  const { reset: resetStatus, ...status } = useField('text');

  const getAllPages = async (url: string): Promise<Array<Character>> => {
    const response = await fetch(url);
    const data: ResponseApi = await response.json();
    const characters = data.results;
    if (data.info.next !== null) {
      characters.push(...(await getAllPages(data.info.next)));
    }
    return characters;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getAllPages('https://rickandmortyapi.com/api/character/?name=rick').then((data) => console.log(data));
  };

  return (
    <div>
      <section className="p-2">
        <h2 className="text-center text-5xl font-bold mb-4 text-primary-green drop-shadow-xl">Rick & Morty Finder</h2>
        <p className="mb-3 text-center text-lg text-white md:text-2xl font-medium">
          Aqui podras encontrar toda la informacion de los personajes de la serie de Rick y Morty.
        </p>
        <form className="md:max-w-5xl mx-auto" onSubmit={handleSubmit}>
          <InputForm labelTag="Nombre" name="name" values={name} />
          <InputForm labelTag="Genero" name="genre" values={genre} />
          <InputForm labelTag="Estado" name="status" values={status} />

          <button
            type="submit"
            className="mt-2 w-full text-white font-bold text-lg rounded-md p-2 bg-primary-green/60 focus:border-cyan-600 focus:ring-cyan-300"
          >
            Buscar
          </button>
        </form>
      </section>
    </div>
  );
};

export default Search;
