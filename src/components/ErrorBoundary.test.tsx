import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';
import { vi, describe, test, expect } from 'vitest';

describe('ErrorBoundary Component', () => {
  const ThrowError = () => {
    throw new Error('Test Error');
  };

  test('catches and handles JavaScript errors in child components', () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Test Error')).toBeInTheDocument();
  });

  test('logs error to console', () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(consoleErrorSpy).toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });
});
