import React from 'react';
import './App.css';
import data from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instagramData: data
    };
  }

  render() {
    return (
      <div className="App">
        <PostContainer posts={this.state.instagramData}/>
      </div>
    );
  }
}

export default App;