interface NotifyErrorProps {
  text: string;
}

const NotifyError = ({ text }: NotifyErrorProps) => {
  return <p className="mt-4 text-red-500 text-center uppercase text-xl font-bold">{text}</p>;
};

export default NotifyError;
