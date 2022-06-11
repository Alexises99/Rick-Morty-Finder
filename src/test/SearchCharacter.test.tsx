import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchCharacterForm from '../components/form/SearchCharacterForm';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

describe.only('', () => {
  test('renders title', () => {
    const onSubmit = jest.fn();
    const component = render(
      <MemoryRouter>
        <SearchCharacterForm onSubmit={onSubmit} />
      </MemoryRouter>,
    );

    const name = component.getByText('Nombre:');
    const status = component.getByText('Estado:');
    const gender = component.getByText('Genero:');
    const button = component.getByText('Buscar');

    expect(name).toBeDefined();
    expect(status).toBeDefined();
    expect(gender).toBeDefined();
    expect(button).toBeDefined();
  });

  test('submit bottom works fine', () => {
    const onSubmit = jest.fn();
    const component = render(
      <MemoryRouter>
        <SearchCharacterForm onSubmit={onSubmit} />
      </MemoryRouter>,
    );

    const button = component.getByText('Buscar');
    act(() => {
      button.dispatchEvent(new MouseEvent('click'));
    });

    expect(onSubmit).toHaveBeenCalled();
  });

  test('Can edit the form', async () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByTestId } = render(
      <MemoryRouter>
        <SearchCharacterForm onSubmit={onSubmit} />
      </MemoryRouter>,
    );

    const name = getByLabelText('Nombre:');
    const status = getByLabelText('Estado:');
    const gender = getByLabelText('Genero:');

    await userEvent.type(name, 'rick');
    await userEvent.selectOptions(status, ['Alive']);
    await userEvent.selectOptions(gender, ['Female']);

    expect(getByTestId('form')).toHaveFormValues({
      name: 'rick',
      status: 'alive',
      gender: 'female',
    });
  });
});
