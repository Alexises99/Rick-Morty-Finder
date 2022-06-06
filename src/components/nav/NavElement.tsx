import { Link } from 'react-router-dom';

interface NavElementProps {
  url: string;
  label: string;
}

const NavElement = ({ url, label }: NavElementProps) => {
  return (
    <li className="hover:scale-125">
      <Link to={url}>{label}</Link>
    </li>
  );
};

export default NavElement;
