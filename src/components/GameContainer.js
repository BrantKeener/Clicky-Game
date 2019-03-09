import React, { Component } from 'react';
import Header from './Header';
import Score from './Score';
import CardContainer from './CardContainer';
import Card from './Card';

  // Fisher Yates for the shuffle
  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue = '';
    let randomIndex = '';

    while(currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

class GameContainer extends Component {

  state = {
    cards: [
      {
        name: 'amos',
        src: './images/Amos.PNG',
        id: 0
      },
      {
        name: 'Chrisjen',
        src: './images/Chrisjen.PNG',
        id: 1
      },
      {
        name: 'Draper',
        src: './images/Draper.PNG',
        id: 2
      },
      {
        name: 'Fred Johnson',
        src: './images/Fred_Johnson.PNG',
        id: 3
      },
      {
        name: 'Holden',
        src: './images/Holden.PNG',
        id: 4
      },
      {
        name: 'Jump',
        src: './images/Jump.PNG',
        id: 5
      },
      {
        name: 'Kamal',
        src: './images/Kamal.PNG',
        id: 6
      },
      {
        name: 'Miller_Gun',
        src: './images/Miller_Gun.PNG',
        id: 7
      },
      {
        name: 'Miller',
        src: './images/Miller.PNG',
        id: 8
      },
      {
        name: 'Monster',
        src: './images/Monster.PNG',
        id: 9
      },
      {
        name: 'Naomi',
        src: './images/Naomi.PNG',
        id: 10
      },
      {
        name: 'Roci',
        src: './images/Roci.PNG',
        id: 11
      }
    ],
    guessed: [],
    score: 0,
    highScore: 0
  }

  handleClick = (event) => {
    const { id } = event.target;
    const guessedArray = this.state.guessed;
    let score = this.state.score;
    let highScore = this.state.highScore;
    if(guessedArray.includes(id)) {
      this.setState({ guessed: [] })
      this.setState({ score: 0 })
    } else {
      guessedArray.push(id);
      score++;
      const adjustHigh = (highScore > score) ? highScore : score;
      const array = shuffleArray(this.state.cards);
      this.setState({ cards: array });
      this.setState({ guessed: guessedArray });
      this.setState({ score: score });
      this.setState({ highScore: adjustHigh });
    };
  }

  render() {
    return(
      <div>
        <Header />
        <Score 
          score={this.state.score}
          highScore={this.state.highScore}/>
        <CardContainer> 
          {shuffleArray(this.state.cards).map((card) => {
            return (
              <Card key={card.id}
                id ={card.id}
                src={card.src}
                name={card.name} 
                onClick = {this.handleClick}/>  
            )
          })}
        </CardContainer>
      </div>
    );
  }

};



export default GameContainer;