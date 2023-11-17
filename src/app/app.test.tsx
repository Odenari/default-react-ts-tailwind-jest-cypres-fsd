import { test, expect, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { App } from './app';

describe('App:', () => {
  test('should contain "hello"', () => {
    render(<App />);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
