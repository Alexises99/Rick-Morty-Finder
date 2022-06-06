import { ReactComponent as Github } from '../assets/git.svg';

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white text-center p-3">
      <a target="_blank" href="https://icons8.com/icon/piYBLqygGNnu/morty-smith" rel="noreferrer">
        Morty Smith
      </a>{' '}
      icon by{' '}
      <a target="_blank" href="https://icons8.com" rel="noreferrer">
        Icons8
      </a>
      <Github className="mt-3 bg-white rounded-full w-12 h-12 mx-auto" />
    </footer>
  );
};

export default Footer;
