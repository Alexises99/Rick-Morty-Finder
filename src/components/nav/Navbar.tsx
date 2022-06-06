import NavElement from './NavElement';
import { ReactComponent as Rick } from '../../assets/rick.svg';

const Navbar = () => {
  return (
    <header>
      <nav className="stick">
        <ul className="flex justify-around text-2xl uppercase py-2 bg-black/60 text-white/90 items-center">
          <Rick className="text-white bg-white rounded-full h-16 w-16" />
          <NavElement url="/" label="Inicio" />
          <NavElement url="/search" label="Buscador" />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
