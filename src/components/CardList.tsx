import React from 'react';
import Card from './Card';
import Spinner from './Spinner';
import type CardListProps from '../interfaces/card';

class CardList extends React.Component<CardListProps> {
  render() {
    const { animeList, isLoading, error } = this.props;

    if (error) {
      return <div className="error-message text-red-500 p-4">{error}</div>;
    }

    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <Spinner />
        </div>
      );
    }

    if (animeList.length === 0) {
      return <div>No items found</div>;
    }

    return (
      <div className="p-4 card-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {animeList.map((anime, index) => (
          <li key={index}>
            <Card key={index} anime={anime} />
          </li>
        ))}
      </div>
    );
  }
}

export default CardList;
