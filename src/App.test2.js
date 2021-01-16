import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Find & track the best free-to-play games! Search for what to play next!");
  expect(linkElement).toBeInTheDocument();
});
