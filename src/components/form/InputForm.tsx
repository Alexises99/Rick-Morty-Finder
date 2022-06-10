import { UseFieldType } from '../../hooks/useField';
import LabelForInput from './LabelForInput';

interface InputFormProps {
  name: string;
  labelTag: string;
  values: UseFieldType;
  placeholder?: string;
}

const InputForm = ({ name, labelTag, values, placeholder }: InputFormProps) => {
  return (
    <div className="mb-2">
      <LabelForInput labelTag={labelTag} name={name} />
      <input
        id={name}
        placeholder={placeholder}
        className="w-full py-2 mt-2 bg-white border rounded-md focus:border-primary-green/80 focus:ring-primary-green/50 focus:outline-none focus:ring focus:ring-opacity-40 md:text-lg lg:text-xl"
        {...values}
      />
    </div>
  );
};

export default InputForm;
