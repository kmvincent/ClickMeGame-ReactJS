import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Hero from "./components/Hero";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json"


class App extends Component {
  state = {
    message: "",
    characters: characters,
    score: 0,
    topScore: 0
  }

  updateScore = () => {
    this.setState((newState) => ({
      score: newState.score + 1
    }),
      () => this.winGame());
  }

  newtopScore = () => {
    this.setState((newState) => ({topScore: newState.score
    }))
  }

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
    this.state.characters.forEach((image) => {
      image.clicked = false;
    })
  }

  handleShuffle = () => {
    let shuffledCharacters = this.state.characters;
    for (let i = shuffledCharacters.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [shuffledCharacters[i], shuffledCharacters[j]] = [shuffledCharacters[j], shuffledCharacters[i]];
        }
    this.setState({characters: shuffledCharacters})
  }

  randomRender = id => {
    this.state.characters.forEach((image) => {
      console.log(image.id)
      if (image.id === id) {
        if (image.clicked) {
          this.setState({message: "You clicked on the same card twice!  You lost!"});
          this.setState({})
          this.resetGame();
          return false;
        }
        else {
          this.updateScore();
          image.clicked = true;
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
      <Hero 
      message={this.state.message}
      score={this.state.score} 
      topScore={this.state.topScore}
      />
      <div class="container is-centered">
      {characters.map ((characters) => (
        <CharacterCard
        name={characters.name}
        image={characters.image}
        id={characters.id}

        randomRender={this.randomRender}
        // randomOrganize={() => this.handleShuffle(this.state.characters)}
        handleShuffle={this.handleShuffle}
        />
      ))}
      </div>
    </Wrapper>
  )
}
  

export default App;
