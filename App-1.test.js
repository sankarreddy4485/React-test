import App from './App';
import { render , screen} from '@testing-library/react';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.debug();

    // fails
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
});