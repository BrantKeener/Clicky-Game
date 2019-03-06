import React, { Component } from 'react';
import Header from './Header';
import Score from './Score';
import CardContainer from './CardContainer';

class GameContainer extends Component {
  render() {
    return(
      <div>
        <Header />
        <Score />
        <CardContainer />
      </div>
    );
  }

};



export default GameContainer;