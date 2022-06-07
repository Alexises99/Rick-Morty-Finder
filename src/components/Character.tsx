import { Link } from 'react-router-dom';
import { CharacterType } from '../interfaces/character.interface';

interface CharacterProps {
  character: CharacterType;
}

const Character = ({ character }: CharacterProps) => {
  const { name, gender, status, type, created, id } = character;
  return (
    <div className="bg-white/90 border-primary-green border-2 rounded-lg my-4">
      <Link to={`/character/${id}`} className="flex flex-col p-4">
        <h3 className="mt-3">
          <span>Nombre: </span>
          {name}
        </h3>
        <p>
          <span>Genero:</span>
          {gender}
        </p>
        <p>
          <span>Estado:</span>
          {status}
        </p>
        <p>
          <span>Tipo:</span>
          {type}
        </p>
        <p>
          <span>Creado:</span>
          {created}
        </p>
      </Link>
    </div>
  );
};

export default Character;
