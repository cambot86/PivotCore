// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PivotCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PivotCore/i);
    expect(titleElement).toBeInTheDocument();
});
