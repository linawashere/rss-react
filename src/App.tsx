import './App.css';
import Header from './components/Header';
import React from 'react';
import CardList from './components/CardList';
import { searchAnime } from './api/jikan';

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
      this.setState({ animeList: data, isLoading: false });
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
        <CardList
          animeList={this.state.animeList}
          isLoading={this.state.isLoading}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
