import { useField } from '../hooks/useField';

const Search = () => {
  const { reset: resetName, ...name } = useField('text');
  const { reset: resetGenre, ...genre } = useField('text');
  const { reset: resetStatus, ...status } = useField('text');

  return (
    <div>
      <section className="p-2">
        <h2 className="text-center text-5xl font-bold mb-4 text-primary-green drop-shadow-xl">Rick & Morty Finder</h2>
        <p className="mb-3 text-center text-lg text-white md:text-2xl font-medium">
          Aqui podras encontrar toda la informacion de los personajes de la serie de Rick y Morty.
        </p>
        <form className="md:max-w-5xl mx-auto">
          <div className="mb-2">
            <label htmlFor="name" className="block font-medium text-primary-green text-lg md:text-2xl">
              Nombre:{' '}
            </label>
            <input
              className="w-full py-2 mt-2 bg-white border rounded-md focus:border-primary-green/80 focus:ring-primary-green/50 focus:outline-none focus:ring focus:ring-opacity-40 md:text-lg lg:text-xl"
              {...name}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="genre" className="block font-medium text-primary-green text-lg md:text-2xl">
              Genero:{' '}
            </label>
            <input
              className="w-full py-2 mt-2 bg-white border rounded-md focus:border-primary-green/80 focus:ring-primary-green/50 focus:outline-none focus:ring focus:ring-opacity-40 md:text-lg lg:text-xl"
              {...genre}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="status" className="block font-medium text-primary-green text-lg md:text-2xl">
              Estado:{' '}
            </label>
            <input
              className="w-full py-2 mt-2 bg-white border rounded-md focus:border-primary-green/80 focus:ring-primary-green/50 focus:outline-none focus:ring focus:ring-opacity-40 md:text-lg lg:text-xl"
              {...status}
            />
          </div>
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
