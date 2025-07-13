import React from 'react';
import type Anime from '../interfaces/Anime';

interface CardProps {
  anime: Anime;
}

class Card extends React.Component<CardProps> {
  render() {
    const { anime } = this.props;
    return (
      <div className="card bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="card-body">
          {anime.url && (
            <a
              href={anime.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              {anime.title || 'No title'}
            </a>
          )}
          <p>{anime.synopsis || 'No description available'}</p>
        </div>
      </div>
    );
  }
}

export default Card;
