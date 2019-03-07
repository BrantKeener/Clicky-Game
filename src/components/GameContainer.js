import React, { Component } from 'react';
import Header from './Header';
import Score from './Score';
import CardContainer from './CardContainer';
import Card from './Card';

class GameContainer extends Component {
  
  state = {
    cards: [
      {
        name: 'amos',
        src: './images/Amos.PNG',
        key: 0
      },
      {
        name: 'Chrisjen',
        src: './images/Chrisjen.PNG',
        key: 1
      },
      {
        name: 'Draper',
        src: './images/Draper.PNG',
        key: 2
      },
      {
        name: 'Fred Johnson',
        src: './images/Fred_Johnson.PNG',
        key: 3
      },
      {
        name: 'Holden',
        src: './images/Holden.PNG',
        key: 4
      },
      {
        name: 'Jump',
        src: './images/Jump.PNG',
        key: 5
      },
      {
        name: 'Kamal',
        src: './images/Kamal.PNG',
        key: 6
      },
      {
        name: 'Miller_Gun',
        src: './images/Miller_Gun.PNG',
        key: 7
      },
      {
        name: 'Miller',
        src: './images/Miller.PNG',
        key: 8
      },
      {
        name: 'Monster',
        src: './images/Monster.PNG',
        key: 9
      },
      {
        name: 'Naomi',
        src: './images/Naomi.PNG',
        key: 10
      },
      {
        name: 'Roci',
        src: './images/Roci.PNG',
        key: 11
      }
    ]
  }


  render() {
    return(
      <div>
        <Header />
        <Score />
        <CardContainer> 
          {this.state.cards.map((card) => {
            console.log(card.name);
            return (
              <Card 
                key={card.key}
                src={card.src}
                name={card.name}>  
              </Card>
            )
          })}
        </CardContainer>
      </div>
    );
  }

};



export default GameContainer;