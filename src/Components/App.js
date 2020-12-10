import React from "react";
import SearchBar from "./searchBar";
import youtube from "../api/youtubeApi";
import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    videos: [],
  };
  //callback to pass to child component(searchBar component)
  onSearchTextSubmit = async (searchText) => {
    const responseData = await youtube.get("/search", {
      params: {
        q: searchText,
      },
    });
    console.log(responseData);
    this.setState({ videos: responseData.data.items });
  };
  render() {
    return (
      <div>
        <h1>App</h1>
        <SearchBar onSearchGetText={this.onSearchTextSubmit} />
        <VideoList videoLists={this.state.videos} />
      </div>
    );
  }
}

export default App;
