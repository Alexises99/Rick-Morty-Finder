import { ReactComponent as Morty } from '../assets/morty.svg';
import NotifyError from '../components/NotifyError';

const NotFound = () => {
  return (
    <div>
      <Morty className="mx-auto" />
      <NotifyError text="Ruta no encontrada" />
    </div>
  );
};

export default NotFound;
