import { useState } from 'react';

export interface UseFieldType {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

export const useField = (type: string) => {
  const [value, setValue] = useState<string>('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return {
    value,
    onChange,
    reset,
    setValue,
    type,
  };
};
