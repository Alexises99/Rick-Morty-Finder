import { ReactComponent as Morty } from '../assets/morty.svg';

const Home = () => {
  return (
    <div>
      <Morty className="mx-auto" />
      <h1 className="text-center mb-3 text-5xl text-primary-green font-bold">Rick and Morty Finder</h1>
      <p className="text-white text-lg text-justify max-w-3xl mx-auto ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis perspiciatis aperiam repellendus sint vero
        commodi ea harum voluptates. Ratione cupiditate consectetur quod voluptate similique odit aperiam sed blanditiis
        ut ex.
      </p>
    </div>
  );
};

export default Home;
