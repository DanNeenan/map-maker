import React, { Component } from 'react';
import { placePointer } from '../scripts/placePointer'
import '../styles/Ocean.css';

class Ocean extends Component {
  _placePointsOnMap (el) {
    placePointer(el)
  }

  render() {
    return (
      <div className="ocean-container" onClick={(el) => this._placePointsOnMap(el)}>
      </div>
    );
  }
}

export default Ocean;
