import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json"

class App extends Component {
  state = {
    message: "Click on an image to earn points, but don't click on any more than once!",
    characters: characters,
    score: 0,
    topScore: 0
  }

  updateScore = () => {
    this.setState({score: this.state.score + 1 });
  };

  newtopScore = () => {
    this.setState((newState) => ({topScore: newState.score
    }))
  }

  // winGame = () => {

  // }

  // resetGame = () => {

  // }

  // handleShuffle = () => {

  // }

  // handleRender = () => {

  // }

  winGame = () => {
    if (this.state.score == this.state.characters.length) {
      this.setState({message: "Congratulations!  You Won!!"});
      this.setState({});
      this.resetGame();
    }
    else {
      this.handleShuffle(this.state.characters);
    }
  }

  resetGame = () => {
    this.setState({ score: 0 });
    this.state.characters.forEach((character) => {
      character.clicked = false;
    this.setState({message: "Click on an image to earn points, but don't click on any more than once!"})
    })
  }

  handleShuffle = (array) => {
    let shuffleArr = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * array.length);
      if (i in array) {
        shuffleArr.push(array[i]);
        delete array[i];
        n--;
      }
    }
    this.setState({ characters: shuffleArr})
  }

  randomRender = id => {
    this.state.characters.forEach((character) => {
      if (character.id === id) {
        if (character.clicked) {
          this.setState({message: "You clicked on the same card twice!  You lost!"});
          this.resetGame();
          return false;
        }
        else {
          this.updateScore();
          character.clicked = true;
          this.setState({message: "You guessed correctly!"})
        }
        if (this.state.score >= this.state.topScore) {
          this.newtopScore();
        }
      }
    })
  }


  render = () => (
    <Wrapper>
      <NavBar score={this.state.score} topScore={this.state.topScore}/>
      <Hero message={this.state.message}/>
      <div class="container is-centered">
      {characters.map ((characters) => (
        <CharacterCard
        name={characters.name}
        image={characters.image}
        id={characters.id}

        randomRender={this.randomRender}
        randomOrganize={() => this.handleShuffle(this.state.characters)}
        />
      ))}
      </div>
    </Wrapper>
  )
}
  

export default App;
