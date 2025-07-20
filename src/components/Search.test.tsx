import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Search Component', () => {
  const mockOnSearch = vi.fn();
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    vi.clearAllMocks();
    localStorage.clear();
  });

  const renderComponent = () => {
    return render(<Search onSearch={mockOnSearch} />);
  };

  const getInput = () => screen.getByPlaceholderText('Enter your query . . .');
  const getButton = () => screen.getByRole('button', { name: 'Search' });

  test('renders search input and button', () => {
    renderComponent();

    expect(getInput()).toBeInTheDocument();
    expect(getButton()).toBeInTheDocument();
  });

  test('updates input value when user types', async () => {
    renderComponent();

    await user.type(getInput(), 'test query');

    expect(getInput()).toHaveValue('test query');
  });

  test('triggers search callback with trimmed query on form submit', async () => {
    renderComponent();

    await user.type(getInput(), '  test query  ');
    await user.click(getButton());

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith('test query');
  });

  test('does not trigger search with empty query', async () => {
    renderComponent();

    await user.click(getButton());

    expect(mockOnSearch).not.toHaveBeenCalled();
  });

  test('saves search term to localStorage', async () => {
    renderComponent();

    await user.type(getInput(), 'test query');
    await user.click(getButton());

    expect(localStorage.getItem('searchTerm')).toBe('test query');
  });

  test('renders empty input when no saved search term exists', () => {
    render(<Search onSearch={() => {}} />);
    const input = screen.getByPlaceholderText('Enter your query . . .');
    expect(input).toHaveValue('');
  });
});
