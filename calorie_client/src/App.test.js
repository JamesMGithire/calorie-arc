import { render, screen } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  test('renders footer', () => {
    render(<App />);

    const footerElement = screen.getByText(/Calorie-arc Directory @/i);

    expect(footerElement).toBeInTheDocument();
  });
});