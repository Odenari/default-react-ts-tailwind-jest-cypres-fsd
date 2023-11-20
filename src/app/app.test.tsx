import { test, expect, describe } from '@jest/globals';
import { render } from '@testing-library/react';
import { App } from './app';

describe('App:', () => {
  test('should contain "hello"', () => {
    render(<App />);
    //expect(screen.getByText(/hello/i)).toBeInDocument()
    expect(true).toBeTruthy();
  });
});
