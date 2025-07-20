import React from 'react';
import type Anime from '../interfaces/Anime';

interface CardProps {
  anime: Anime;
}

class Card extends React.Component<CardProps> {
  render() {
    const { anime } = this.props;
    const cardStyle: React.CSSProperties = {
      backgroundImage: anime.images?.jpg?.image_url
        ? `linear-gradient(rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.6)), url(${anime.images.jpg.image_url})`
        : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      overflow: 'hidden',
    };

    return (
      <div
        className="card bg-white rounded-lg shadow-md p-4 mb-4"
        style={cardStyle}
      >
        <div className="card-body">
          {anime.url && (
            <a
              href={anime.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white hover:underline mt-2 inline-block"
            >
              {anime.title || 'No title'}
            </a>
          )}
          <p className="text-white">
            {anime.synopsis || 'No description available'}
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
