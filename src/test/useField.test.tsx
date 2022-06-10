import { useField } from '../hooks/useField';
import { renderHook, act } from '@testing-library/react';
import { ChangeEvent } from 'react';

describe('useField', () => {
  test('The state at start is empty string and onChange is a function', () => {
    const { result } = renderHook(() => useField('text'));
    expect(result.current.value).toBe('');
    expect(result.current.onChange).toBeInstanceOf(Function);
  });

  test('The state change', () => {
    const { result } = renderHook(() => useField('text'));
    act(() => {
      result.current.onChange({ target: { value: 'holaa' } } as ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.value).toBe('holaa');
  });

  test('Reset', () => {
    const { result } = renderHook(() => useField('text'));
    act(() => {
      result.current.onChange({ target: { value: 'holaa' } } as ChangeEvent<HTMLInputElement>);
      result.current.reset();
    });
    expect(result.current.value).toBe('');
  });
});
