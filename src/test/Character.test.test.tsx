import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import CharacterInfo from '../pages/CharacterInfo';

describe('<CharacterInfo />', () => {
  test('renders character', async () => {
    const characterName = 'Rick Sanchez';

    render(
      <MemoryRouter initialEntries={[`/character/1`]}>
        <Routes>
          <Route path="/character/:characterId" element={<CharacterInfo />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByText(characterName)).toBeInTheDocument();
  });

  test('renders error', async () => {
    render(
      <MemoryRouter initialEntries={[`/character/134234234`]}>
        <Routes>
          <Route path="/character/:characterId" element={<CharacterInfo />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByText('Personaje no encontrado')).toBeInTheDocument();
  });
});
