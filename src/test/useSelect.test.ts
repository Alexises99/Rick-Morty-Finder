import { renderHook, act } from '@testing-library/react';
import { ChangeEvent } from 'react';
import { useSelect } from '../hooks/useSelect';

describe('useField', () => {
  test('The state at start is empty string and onChange is a function', () => {
    const { result } = renderHook(() => useSelect());
    expect(result.current.value).toBe('');
    expect(result.current.onChange).toBeInstanceOf(Function);
  });

  test('The state change', () => {
    const { result } = renderHook(() => useSelect());
    act(() => {
      result.current.onChange({ target: { value: 'holaa' } } as ChangeEvent<HTMLSelectElement>);
    });
    expect(result.current.value).toBe('holaa');
  });

  test('Reset', () => {
    const { result } = renderHook(() => useSelect());
    act(() => {
      result.current.onChange({ target: { value: 'holaa' } } as ChangeEvent<HTMLSelectElement>);
      result.current.reset();
    });
    expect(result.current.value).toBe('');
  });
});
