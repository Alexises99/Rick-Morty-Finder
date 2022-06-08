export interface LabelForInputProps {
  name: string;
  labelTag: string;
}

const LabelForInput = ({ name, labelTag }: LabelForInputProps) => {
  return (
    <label htmlFor={name} className="block font-medium text-primary-green text-lg md:text-2xl">
      {labelTag}:{' '}
    </label>
  );
};

export default LabelForInput;
