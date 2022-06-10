interface SubmitButtonProps {
  label: string;
}

const SubmitButton = ({ label }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="mt-2 w-full text-white font-bold text-lg rounded-md p-2 bg-primary-green/60 focus:border-cyan-600 focus:ring-cyan-300"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
