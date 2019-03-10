import React, { Component } from 'react';
import Header from './Header';
import Score from './Score';
import CardContainer from './CardContainer';
import Card from './Card';
import Modal from './Modal';

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
    highScore: 0,
    startModal: true,
  };

  handleClick = (event) => {
    const { id } = event.target;
    if(id !== 'start') {
      const guessedArray = this.state.guessed;
      if(guessedArray.includes(id)) {
        this.duplicateGuess();
      } else {
        guessedArray.push(id);
        this.uniqueGuess(guessedArray);
      };
    } else if(id === 'start') {
      this.showModal();
      this.imageFlipToggle();
    }
  };

  uniqueGuess = (guessedArray) => {
    const array = this.shuffleArray(this.state.cards);
    let score = this.state.score;
    let highScore = this.state.highScore;
    score++;
    const adjustHigh = (highScore > score) ? highScore : score;
    this.imageFlipToggle();
    setTimeout(() => {
      this.setState({ startModal: false });
      this.setState({ cards: array });
      this.setState({ guessed: guessedArray });
      this.setState({ score: score });
      this.setState({ highScore: adjustHigh });
      setTimeout(() => {
        this.imageFlipToggle();
      }, 500);
    }, 700);
  }

  duplicateGuess = () => {
    this.setState({ guessed: [] });
    this.setState({ score: 0 });
    this.imageFlipToggle();
    this.showModal();
  }

  showModal = () => {
    const modal = document.getElementById('modal-bg');
    modal.classList.toggle('modal-hide');
  }

  imageFlipToggle = () => {
    const card = document.getElementsByClassName('flip-card-inner');
    const imgArray = [...card];
    imgArray.forEach((element) => {
      element.classList.toggle('flip-to-back')
    });
  };

  // Fisher Yates for the shuffle
  shuffleArray = (array) => {
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

  render() {
    return(
      <div id='game-container'>
        <Modal choice={this.state.startModal} startClick={this.handleClick}/>
        <Header />
        <Score 
          score = {this.state.score}
          highScore = {this.state.highScore}/>
        <CardContainer> 
          {this.shuffleArray(this.state.cards).map((card) => {
            return (
              <Card key = {card.id}
                id = {card.id}
                src = {card.src}
                name = {card.name} 
                onClick = {this.handleClick}/>  
            )
          })}
        </CardContainer>
      </div>
    );
  };
};

export default GameContainer;