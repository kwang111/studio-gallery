import './App.css';
import React, { Component } from "react";
import Thingy from './Thingy';

const items = ["salmon", "cactus", "jellyfish", "alpaca", "shrimp fry", "egg"];
const sources = ["https://3.bp.blogspot.com/-EiY79U01iio/VwZhDE-qg4I/AAAAAAAA5lA/J_CVvL97TrwDoVZDcJepnAj6B2DYDiHuw/s500/fish_sakana_sake.png",
  "https://4.bp.blogspot.com/-pT4o7FRCpSM/UgSL8ZHT5DI/AAAAAAAAW4I/F4C0bOR7RdA/s400/plant_cactus.png",
  "https://4.bp.blogspot.com/-fIDkYYbfqWc/WYlXpOn6RHI/AAAAAAABF68/9d4s4MBxWakSuHu-EEpPbpy5sV2GBceYQCLcBGAs/s400/fish_character_kurage.png",
  "https://1.bp.blogspot.com/-PNtqP_kYbEw/XuMM_ImLmVI/AAAAAAABZeo/7aJRwvd66KEEIsNzjP3ddRxz_DsAWJlZQCNcBGAsYHQ/s400/animal_alpaca_huacaya.png",
  "https://1.bp.blogspot.com/-keamd2P-Hig/XVKf52Kt7uI/AAAAAAABUFk/dEeWB6cyq7MsM0_fgxiR_6-C730xrGP0wCLcBGAs/s400/food_ebi_fry.png",
  "https://4.bp.blogspot.com/-6Mq74jWtOxM/WKFjCFW3FYI/AAAAAAABBso/1VoQZiuoax0ja_sdNdOStH5KYYUcG4BvQCLcB/s400/golden_egg.png"
];

export default class App extends React.Component {
  constructor(props) {
    super(props);


    const newBoxes = []

    for (var i = 0; i < 6; i++) {
      const newBox = {
        name: items[i],
        source: sources[i],
        liked: false
      }
      newBoxes.push(newBox);
    }
    this.state = {
      boxes: newBoxes
    };
  }

  // I want to make it so if item is liked, print a heart icon
  itembox = (box) => {
    return (
      <Thingy name={box.name} source={box.source} liked={box.liked} />)
  }

  render() {
    return (
      <div>
        <h1>Do you like this?</h1>
        <div className="App">{this.state.boxes.map(box => { return this.itembox(box)})}</div>
      </div>
    );
  }

}
