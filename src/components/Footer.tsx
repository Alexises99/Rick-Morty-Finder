import { ReactComponent as Github } from '../assets/git.svg';

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white text-center p-3">
      <a target="_blank" href="https://icons8.com/icon/piYBLqygGNnu/morty-smith" rel="noreferrer">
        All icons by{' '}
      </a>{' '}
      <a target="_blank" href="https://icons8.com" rel="noreferrer">
        Icons8
      </a>
      <a href="https://github.com/Alexises99/Rick-Morty-Finder">
        <Github className="mt-3 bg-white rounded-full w-12 h-12 mx-auto" />
      </a>
    </footer>
  );
};

export default Footer;
