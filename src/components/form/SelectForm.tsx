import { UseSelectType } from '../../hooks/useSelect';
import LabelForInput from './LabelForInput';

interface SelectFormProps {
  options: Array<string>;
  name: string;
  labelTag: string;
  values: UseSelectType;
  reset: () => void;
}

const SelectForm = ({ name, labelTag, options, values, reset }: SelectFormProps) => {
  return (
    <div className="mb-2">
      <div className="flex justify-between">
        <LabelForInput name={name} labelTag={labelTag} />
        <button onClick={reset} type="button" className="bg-primary-green/60 rounded-xl p-2">
          Borrar seleccion
        </button>
      </div>

      <select
        data-testid="select-form"
        id={name}
        {...values}
        className="w-full py-2 mt-2 bg-white border rounded-md focus:border-primary-green/80 focus:ring-primary-green/50 focus:outline-none focus:ring focus:ring-opacity-40 md:text-lg lg:text-xl"
      >
        <option value="" disabled hidden>{`Selecciona el ${labelTag}`}</option>
        {options.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
