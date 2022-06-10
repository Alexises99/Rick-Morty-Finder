import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Character from '../pages/Character';
import { MemoryRouter, Route, Routes } from 'react-router';

describe('<Character />', () => {
  test('renders character', async () => {
    const characterName = 'Rick Sanchez';

    render(
      <MemoryRouter initialEntries={[`/character/1`]}>
        <Routes>
          <Route path="/character/:characterId" element={<Character />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByText(characterName)).toBeInTheDocument();
  });

  test('renders error', async () => {
    render(
      <MemoryRouter initialEntries={[`/character/134234234`]}>
        <Routes>
          <Route path="/character/:characterId" element={<Character />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByText('Personaje no encontrado')).toBeInTheDocument();
  });
});
