import { render, screen } from '@testing-library/react';
import Card from './Card';
import { describe, test, expect } from 'vitest';

describe('Card Component', () => {
  const mockAnime = {
    mal_id: 1,
    title: 'Naruto',
    synopsis: 'A ninja story',
    url: 'https://example.com/naruto ',
  };

  test('displays item name and description correctly', () => {
    render(<Card anime={mockAnime} />);
    expect(screen.getByText('Naruto')).toBeInTheDocument();
    expect(screen.getByText('A ninja story')).toBeInTheDocument();
  });

  test('handles missing props gracefully', () => {
    render(
      <Card
        anime={{
          mal_id: 0,
          title: '',
          url: '',
          synopsis: '',
        }}
      />
    );
    expect(screen.queryByText(/Naruto/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/A ninja story/i)).not.toBeInTheDocument();
  });
});
