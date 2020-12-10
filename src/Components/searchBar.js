import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };
  handleOnChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  handleOnsubmit = (event) => {
    event.preventDefault();
    this.props.onSearchGetText(this.state.searchTerm);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleOnsubmit}>
          <label>Search Videos</label>
          <input value={this.state.searchTerm} onChange={this.handleOnChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
