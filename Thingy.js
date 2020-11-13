import './App.css';
import React, {Component} from "react";
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {Button, ListItemIcon} from '@material-ui/core';

export default class Thingy extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: props.name,
        source: props.source,
        liked: props.liked
      };
    }
  
    like = () => {
      this.setState({liked: true});
    }
  
    // I want to print the name, image, and a like button
    render() {
      return (
        <div className="Thingy">
          <h4>{this.state.name}</h4>
          <img src={this.state.source} />
          <Button variant="border" color="primary" onClick={() => this.like()}>
          Like</Button>
          <ListItemIcon>
            {this.state.liked ? (
              <Favorite />
            ) : (
              <FavoriteBorderIcon/>
            )}
          </ListItemIcon>
        </div>
      );
    }
}