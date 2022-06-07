import React, { useState } from 'react';
import Character from '../components/Character';
import InputForm from '../components/InputForm';
import SelectForm from '../components/SelectForm';
import { useField } from '../hooks/useField';
import { useSelect } from '../hooks/useSelect';
import { CharacterType, Gender, Status } from '../interfaces/character.interface';
import characterService from '../services/character';

const Search = () => {
  const { reset: resetName, ...name } = useField('text');
  const { reset: resetGender, ...genre } = useSelect();
  const { reset: resetStatus, ...status } = useSelect();

  console.log(genre.value);

  const [characters, setCharacters] = useState<Array<CharacterType>>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await characterService.getAll(name.value, status.value as Status, genre.value as Gender);
    setCharacters(data);
    resetName();
    resetStatus();
    resetGender();
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
