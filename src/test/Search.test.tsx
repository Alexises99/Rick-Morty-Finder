import { fireEvent, getByTestId, prettyDOM, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../pages/Search';

describe('Search page', () => {
  test('renders title', () => {
    const component = render(<Search />);
    const header = component.getByText('Rick & Morty Finder');

    expect(header).toBeDefined();
  });
});
