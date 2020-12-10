import React from "react";
import SearchBar from "./searchBar";
import youtube from "../api/youtubeApi";
import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  //callback to pass to child component(searchBar component)
  onSearchTextSubmit = async (searchText) => {
    const responseData = await youtube.get("/search", {
      params: {
        q: searchText,
      },
    });

    this.setState({ videos: responseData.data.items });
  };
  //callback to VideoList component and from VideoList to VideoItem component
  handleSelectedVideo = (selected) => {
    console.log(selected);
  };
  render() {
    return (
      <div>
        <h1>App</h1>
        <SearchBar onSearchGetText={this.onSearchTextSubmit} />
        <VideoList
          onhandleSelectdVideo={this.handleSelectedVideo}
          videoLists={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
