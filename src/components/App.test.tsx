import { render, screen } from '@testing-library/react';

import App from './App';

describe('test react-testing-library', () => {
  it('test App component', () => {
    render(<App />);

    expect(screen.getByTestId('App')).toBeInTheDocument();
  });
});
