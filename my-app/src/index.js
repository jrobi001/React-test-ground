import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class CountdownTimer extends React.Component {

  constructor(props) {
    super(props)
    const duration = this.props.duration;
    this.state = {
      duration: duration,
    }
    this.timer = setInterval(() => this.decrement(), 1000);
  }

  decrement() {
    const timeLeft = this.state.duration;
    if (timeLeft <= 0) {
      this.props.onTimeOut();
      this.setState({ duration: this.props.duration })
    } else {
      this.setState({ duration: timeLeft - 1, })
    }
  }

  render() {
    return (
      <div className="countdownTimer">
        {this.state.duration}
      </div>
    );
  }
}

// Game
class Game extends React.Component {

  constructor(props) {
    super(props);
    const word = props.word;
    const wordArray = Array.from(word);
    const wordLength = wordArray.length;
    const solvedArray = Array(wordLength).fill(null);
    solvedArray[0] = wordArray[0];
    solvedArray[wordLength - 1] = wordArray[wordLength - 1];

    this.state = {
      word: word,
      wordArray: wordArray,
      solvedArray: solvedArray,
      answers: [],
      countdown: 5,
      attempts: 3,
      guess: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleGuess = this.handleGuess.bind(this);
  }



  renderTimer(i) {
    console.log(this.state.attempts)
    if (this.state.attempts > 0) {
      return (
        <CountdownTimer
          duration={this.state.countdown}
          onTimeOut={() => this.handleTimeOut()}
        />
      );
    } else {
      return (
        <div className="countdownTimer">
          "Time's up"
        </div>
      )
    }
  }

  handleTimeOut() {
    const attempts = this.state.attempts;
    this.setState({ attempts: attempts - 1, })
  }


  handleGuess(event) {
    event.preventDefault();
    const guess = this.state.guess.toLowerCase();
    const answers = this.state.answers.slice();
    const wordArray = this.state.wordArray.slice();

    // checking if previously answered or answer is not a letter
    if (answers.includes(guess) || guess === guess.toUpperCase()) {
      // invalid guess
      // TODO: set a message warning/ telling why guess didn't count
      this.setState({
        guess: '',
      })
      return
    }
    answers.push(guess)
    const correct = Boolean(wordArray.slice(1, wordArray.length - 1).includes(guess));
    const solvedArray = correct ? updateSolved(wordArray, this.state.solvedArray, guess) : this.state.solvedArray;
    const attempts = correct ? this.state.attempts : this.state.attempts - 1;

    this.setState({
      answers: answers,
      guess: '',
      solvedArray: solvedArray,
      countdown: 30,
      attempts: attempts,
    });

  };

  handleChange(event) {
    this.setState({
      guess: event.target.value
    });
  }


  render() {
    const wordArray = this.state.wordArray;

    const letters = wordArray.map((letter, index) => {
      return (
        <LetterBox value={letter} key={index} />
      );
    })

    const solvedArray = this.state.solvedArray;
    const hangManBoard = solvedArray.map((letter, index) => {
      const boxContent = letter ? letter : "_";
      return (
        <LetterBox value={boxContent} key={index} />
      );
    })

    return (
      <div>

        <div className="hangManBoard">
          {hangManBoard}
        </div>

        <div className="Answer">
          {letters}
        </div>
        <form onSubmit={this.handleGuess} >

          <input required type="text" name="guess" placeholder="enter a guess"
            value={this.state.guess} onChange={this.handleChange} maxLength="1" />

          <input type="submit" value="ENTER" />
        </form>

        <p>{this.state.answers}</p>
        <h2>{this.state.countdown}</h2>
        {this.renderTimer(30)}
      </div>
    );
  }

}


// Countdown


// LetterBox
function LetterBox(props) {
  return (
    <button className="letterBox">
      {props.value}
    </button>
  );
}

ReactDOM.render(
  <Game word={"mumbojumbo"} />,
  document.getElementById('root')
);

// ========================================
function updateSolved(wordArray, solvedArray, guess) {
  let output = solvedArray.slice();
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].toLowerCase() === guess) {
      output[i] = wordArray[i];
    }
  }
  return output;
}