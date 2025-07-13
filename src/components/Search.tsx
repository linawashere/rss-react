import React from 'react';
import type SearchProps from '../interfaces/searchProps';
class Search extends React.Component<SearchProps> {
  state = {
    searchQuery: '',
  };
  handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = this.state.searchQuery.trim();
    if (!trimmedQuery) return;
    this.props.onSearch(trimmedQuery);
    localStorage.setItem('searchTerm', trimmedQuery);
  };
  render() {
    return (
      <form className="w-full mx-auto" onSubmit={this.handleSearch}>
        <div className="form-container">
          <input
            type="text"
            placeholder="Enter your query . . ."
            value={this.state.searchQuery}
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
            className="form-input block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {' '}
            Search
          </button>
        </div>
      </form>
    );
  }
}
export default Search;
