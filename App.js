import logo from './logo.svg';
import './App.css';
import React from "react";
import Favorite from '@material-ui/icons/Favorite';
import {Button} from '@material-ui/core';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const items = ["salmon", "cactus", "jellyfish", "alpaca", "shrimp fry", "egg"];
    const sources = ["https://3.bp.blogspot.com/-EiY79U01iio/VwZhDE-qg4I/AAAAAAAA5lA/J_CVvL97TrwDoVZDcJepnAj6B2DYDiHuw/s500/fish_sakana_sake.png",
      "https://4.bp.blogspot.com/-pT4o7FRCpSM/UgSL8ZHT5DI/AAAAAAAAW4I/F4C0bOR7RdA/s400/plant_cactus.png",
      "https://4.bp.blogspot.com/-fIDkYYbfqWc/WYlXpOn6RHI/AAAAAAABF68/9d4s4MBxWakSuHu-EEpPbpy5sV2GBceYQCLcBGAs/s400/fish_character_kurage.png",
      "https://1.bp.blogspot.com/-PNtqP_kYbEw/XuMM_ImLmVI/AAAAAAABZeo/7aJRwvd66KEEIsNzjP3ddRxz_DsAWJlZQCNcBGAsYHQ/s400/animal_alpaca_huacaya.png",
      "https://1.bp.blogspot.com/-keamd2P-Hig/XVKf52Kt7uI/AAAAAAABUFk/dEeWB6cyq7MsM0_fgxiR_6-C730xrGP0wCLcBGAs/s400/food_ebi_fry.png",
      "https://4.bp.blogspot.com/-6Mq74jWtOxM/WKFjCFW3FYI/AAAAAAABBso/1VoQZiuoax0ja_sdNdOStH5KYYUcG4BvQCLcB/s400/golden_egg.png"
    ];
    this.state={
    boxes = []
  };
    for (var i = 0; i < 5; i++){
      const newBox = {
        name: items[i],
        source: sources[i],
        liked: false
      }
      const boxes = [... this.state.boxes, newBox];
    }
    this.setState({ boxes });
  }

// I want to make it so if item is liked, print a heart icon
  itembox = (box) => {
    return <div>
      <Thingy name={box.name} source={box.source}></Thingy>
    </div>
  }

  render() {
    return (
      <div>
        <h1>Do you like this?</h1>
        <div className="App">{this.state.boxes.map(this.itembox)}</div>
      </div>
    );
  }

}

class Thingy extends React.Component {
  constructor(props, name, source) {
    super(props);
    this.state = {
      name: name,
      source: source,
      liked: false
    };
  }


  getName() {
    return this.state.name;
  }

  getSource() {
    return this.state.source;
  }

  like = event => {
    this.setState({liked: true});
  }

  // I want to print the name, image, and a like button
  render() {
    return (
      <div className="Thingy">
        <h4>{this.getName()}</h4>
        <img src={this.getSource()} />
        <Button varient="border" color="primary" onClick={() => this.like()}>
        Like</Button>
      </div>
    );
  }
}