import React from 'react';
import './App.css';
import data from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: data
    };
  }

  render() {
    return (
      <div className="App">
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;