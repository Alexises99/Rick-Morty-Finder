import { useState } from 'react';

export interface UseSelectType {
  defaultValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const useSelect = () => {
  const [value, setValue] = useState<string>('');

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return {
    value,
    onChange,
    setValue,
    reset,
  };
};
