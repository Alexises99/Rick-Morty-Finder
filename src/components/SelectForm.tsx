interface SelectFormProps {
  options: Array<string>;
  name: string;
  labelTag: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  reset: () => void;
}

const SelectForm = ({ name, labelTag, options, onChange, value, reset }: SelectFormProps) => {
  return (
    <div className="mb-2">
      <div className="flex justify-between">
        <label htmlFor={name} className="block font-medium text-primary-green text-lg md:text-2xl">
          {labelTag}:{' '}
        </label>
        <button onClick={reset} type="button" className="bg-primary-green/60 rounded-xl p-2">
          Borrar seleccion
        </button>
      </div>

      <select
        name={name}
        value={value}
        onChange={onChange}
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
