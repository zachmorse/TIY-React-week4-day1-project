import React, { Component } from "react";
import "../styles/App.css";
import { connect } from "react-redux";
import { updateSearchQuery, searchPhotos } from "../actions/splashActions";

import List from "./List";

class App extends Component {
  render() {
    console.log("images", this.props.images);
    return (
      <div className="App">
        <h1>Unsplash API Portal // Find something beautiful.</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.searchPhotos();
          }}
        >
          <input
            type="text"
            placeholder="search database"
            onChange={e => this.props.updateSearchQuery(e)}
          />
        </form>
        <h3>{this.props.query}</h3>
        <List images={this.props.images} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("state: ", state);
  return {
    query: state.splash.query,
    images: state.splash.images
  };
};

const mapDispatchToProps = () => {
  return {
    updateSearchQuery,
    searchPhotos
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
