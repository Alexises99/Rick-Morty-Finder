import { Link } from 'react-router-dom';

type CharacterProps = {
  img: string;
  name: string;
};

const Character = ({ img, name }: CharacterProps) => {
  return (
    <div className="bg-white/90 border-primary-green border-2 rounded-lg my-4">
      <Link to={`/character/:id`} className="flex flex-col p-4 text-center">
        <img src={img} alt={name} className="rounded-lg" />
        <h3 className="mt-3">{name}</h3>
      </Link>
    </div>
  );
};

export default Character;
