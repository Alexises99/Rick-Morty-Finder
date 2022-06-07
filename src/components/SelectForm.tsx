import { UseSelectType } from '../hooks/useSelect';

interface SelectFormProps {
  options: Array<string>;
  name: string;
  labelTag: string;
  values: UseSelectType;
}

const SelectForm = ({ name, labelTag, options, values }: SelectFormProps) => {
  console.log(values.defaultValue);
  return (
    <div className="mb-2">
      <label htmlFor={name} className="block font-medium text-primary-green text-lg md:text-2xl">
        {labelTag}:{' '}
      </label>
      <select
        name={name}
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
