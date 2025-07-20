import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { describe, test, expect } from 'vitest';

describe('CardList Component', () => {
  const mockData = [
    {
      mal_id: 1,
      title: 'Naruto',
      synopsis: 'A ninja story',
      url: 'https://example.com/naruto ',
    },
    {
      mal_id: 2,
      title: 'One Piece',
      synopsis: 'A pirate story',
      url: 'https://example.com/one-piece ',
    },
  ];

  test('renders correct number of items when data is provided', () => {
    render(<CardList animeList={mockData} isLoading={false} error={null} />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
  });

  test('displays "no results" message when data array is empty', () => {
    render(<CardList animeList={[]} isLoading={false} error={null} />);
    expect(screen.getByText('No items found')).toBeInTheDocument();
  });

  test('shows loading state while fetching data', () => {
    render(<CardList animeList={[]} isLoading={true} error={null} />);
    const spinner = document.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  test('displays error message when API call fails', () => {
    render(<CardList animeList={[]} isLoading={false} error="API Error" />);
    expect(screen.getByText('API Error')).toBeInTheDocument();
  });
});
