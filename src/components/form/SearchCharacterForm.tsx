import { useField } from '../../hooks/useField';
import { useSelect } from '../../hooks/useSelect';
import { Gender, Status } from '../../interfaces/character.interface';
import { checkParameters } from '../../utils/checkParams';
import InputForm from './InputForm';
import SelectForm from './SelectForm';
import SubmitButton from './SubmitButton';
import { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/capitalize';
import { useSearchParams } from 'react-router-dom';

interface SearchCharacterFormProps {
  onSubmit: (name: string, status: string, gender: string) => void;
}

const SearchCharacterForm = ({ onSubmit }: SearchCharacterFormProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { reset: resetName, setValue: setName, ...name } = useField('text');
  const { reset: resetGender, setValue: setGender, ...gender } = useSelect();
  const { reset: resetStatus, setValue: setStatus, ...status } = useSelect();

  useEffect(() => {
    const nameParam = searchParams.get('name');
    const genderParam = searchParams.get('gender');
    const statusParam = searchParams.get('status');
    const paramsFiltered = checkParameters({ name: nameParam, gender: genderParam, status: statusParam });
    const { name, gender, status } = paramsFiltered;

    setName(name);
    setGender(gender);
    setStatus(status);

    onSubmit(name, status, gender);
  }, [searchParams]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchParams({
      name: name.value,
      gender: gender.value,
      status: status.value,
    });
    onSubmit(name.value, status.value, gender.value);
  };

  return (
    <form className="md:max-w-5xl mx-auto" data-testid="form" onSubmit={handleSubmit}>
      <InputForm name="name" labelTag="Nombre" values={name} placeholder="Nombre del personaje..." />

      <SelectForm
        labelTag="Genero"
        name="gender"
        values={gender}
        options={Object.values(Gender).map((gender) => capitalizeFirstLetter(gender))}
        reset={resetGender}
      />

      <SelectForm
        labelTag="Estado"
        name="status"
        values={status}
        options={Object.values(Status).map((status) => capitalizeFirstLetter(status))}
        reset={resetStatus}
      />

      <SubmitButton label="Buscar" />
    </form>
  );
};

export default SearchCharacterForm;
