import * as React from 'react';
import { render , screen} from '@testing-library/react';

import App from './App';

describe('App11', () => {
  it('renders App component', () => {
    render(<App />);
    expect(screen.getByText('Search:')).toBeInTheDocument();
  });
});