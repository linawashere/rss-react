import './App.css';
import Header from './components/Header';
import React from 'react';
import CardList from './components/CardList';
import ErrorButton from './components/ErrorButton';
import { searchAnime } from './api/jikan';
import ErrorBoundary from './components/ErrorBoundary';

class App extends React.Component {
  state = {
    animeList: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const savedQuery = localStorage.getItem('searchItem') || '';
    this.fetchData(savedQuery);
  }

  fetchData = async (query = '') => {
    try {
      this.setState({ isLoading: true, error: null });
      const data = await searchAnime(query);

      if (!data || data.length === 0) {
        throw new Error('API returned no data');
      }

      this.setState({ animeList: data, isLoading: false });
      localStorage.setItem('searchTerm', query);
    } catch (err) {
      this.setState({
        error: `Failed to fetch data: ${err}`,
        isLoading: false,
      });
    }
  };

  handleSearch = async (query: string) => {
    this.fetchData(query);
  };

  render() {
    return (
      <div className="flex flex-col h-full">
        <Header onSearch={this.handleSearch} />
        <ErrorBoundary>
          <CardList
            animeList={this.state.animeList}
            isLoading={this.state.isLoading}
            error={this.state.error}
          />
          <ErrorButton />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
