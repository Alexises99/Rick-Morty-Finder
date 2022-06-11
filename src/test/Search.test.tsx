import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import character from '../services/character';
import Search from '../pages/Search';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { Gender, Status } from '../interfaces/character.interface';

describe('Search page', () => {
  test('renders title', () => {
    const component = render(<Search />);
    const header = component.getByText('Rick & Morty Finder');

    expect(header).toBeDefined();
  });

  test('renders characters', async () => {
    const component = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );

    jest.spyOn(character, 'getAll').mockResolvedValue([
      {
        id: 381,
        name: 'Woman Rick',
        status: Status.Alive,
        species: 'Alien',
        type: 'Chair',
        gender: Gender.Female,
        origin: {
          name: 'unknown',
          url: '',
        },
        location: {
          name: 'unknown',
          url: '',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/381.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/10'],
        url: 'https://rickandmortyapi.com/api/character/381',
        created: '2018-01-10T19:46:00.622Z',
      },
      {
        id: 781,
        name: "Rick's Garage",
        status: Status.Alive,
        species: 'Robot',
        type: 'Artificial Intelligence',
        gender: Gender.Female,
        origin: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/781.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/49'],
        url: 'https://rickandmortyapi.com/api/character/781',
        created: '2021-10-25T09:18:48.188Z',
      },
    ]);

    const button = component.getByText('Buscar');
    await act(() => {
      button.dispatchEvent(new MouseEvent('click'));
    });

    expect(await screen.findByText('Woman Rick')).toBeInTheDocument();
    expect(await screen.findByText("Rick's Garage")).toBeInTheDocument();
  });
});
