import qs from 'qs';
import { useField } from '../../hooks/useField';
import { useSelect } from '../../hooks/useSelect';
import { Gender, Status } from '../../interfaces/character.interface';
import { checkParameters } from '../../utils/checkParams';
import InputForm from './InputForm';
import SelectForm from './SelectForm';
import SubmitButton from './SubmitButton';
import { createBrowserHistory } from 'history';
import { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/capitalize';

interface SearchCharacterFormProps {
  onSubmit: (name: string, status: string, gender: string) => void;
}

const SearchCharacterForm = ({ onSubmit }: SearchCharacterFormProps) => {
  const history = createBrowserHistory();
  const { reset: resetName, setValue: setName, ...name } = useField('text');
  const { reset: resetGender, setValue: setGender, ...gender } = useSelect();
  const { reset: resetStatus, setValue: setStatus, ...status } = useSelect();

  useEffect(() => {
    const params = history.location.search.substring(1);
    const filterParams = qs.parse(params);
    const paramsFiltered = checkParameters(filterParams);
    const { name, gender, status } = paramsFiltered;
    console.log(status);
    let search = false;
    if (name) {
      setName(name);
      search = true;
    }
    if (gender) {
      setGender(gender);
      search = true;
    }
    if (status) {
      setStatus(status);
      search = true;
    }
    if (search) {
      onSubmit(name, status, gender);
    }
  }, []);

  useEffect(() => {
    history.push(`?name=${name.value}&gender=${gender.value}&status=${status.value}`);
  }, [name.value, gender.value, status.value]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(name.value, status.value, gender.value);
  };

  return (
    <form className="md:max-w-5xl mx-auto" onSubmit={handleSubmit}>
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
