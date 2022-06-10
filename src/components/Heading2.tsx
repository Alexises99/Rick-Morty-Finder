interface Heading2Props {
  text: string;
}

const Heading2 = ({ text }: Heading2Props) => {
  return <h2 className="text-center text-5xl font-bold mb-4 text-primary-green drop-shadow-xl">{text}</h2>;
};

export default Heading2;
