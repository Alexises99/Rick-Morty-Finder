import { Link } from 'react-router-dom';
import { CharacterType } from '../interfaces/character.interface';

interface CharacterProps {
  character: CharacterType;
}

const Character = ({ character }: CharacterProps) => {
  const { name, gender, status, type, created, id } = character;
  return (
    <div className="bg-white/90 border-primary-green border-2 rounded-lg">
      <Link to={`/character/${id}`} className="flex flex-col p-4">
        <h3 className="mt-3">
          <span className="font-bold mr-1">Nombre: </span>
          {name}
        </h3>
        <p>
          <span className="font-bold mr-1">Genero:</span>
          {gender}
        </p>
        <p>
          <span className="font-bold mr-1">Estado:</span>
          {status}
        </p>
        <p>
          <span className="font-bold mr-1">Tipo:</span>
          {type ? type : 'No informado'}
        </p>
        <p>
          <span className="font-bold mr-1">Creado:</span>
          {created}
        </p>
      </Link>
    </div>
  );
};

export default Character;
