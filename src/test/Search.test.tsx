import { render, fireEvent } from '@testing-library/react';
import Search from '../pages/Search';
import { prettyDOM } from '@testing-library/dom';

describe('Search page', () => {
  test('renders title', () => {
    const component = render(<Search />);

    const header = component.getByText('Rick & Morty Finder');

    expect(header).toBeDefined();
  });
});
