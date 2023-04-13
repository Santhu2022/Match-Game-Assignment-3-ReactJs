import {Component} from 'react'
import Navbar from '../Navbar'
import Game from '../Game'
import ScoreCard from '../ScoreCard'
import './index.css'

class MatchGame extends Component {
  state = {score: 0, isGameRunning: true, timer: 60}

  componentDidMount() {
    this.timerId = setInterval(this.decreaseSeconds, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  decreaseSeconds = () => {
    const {timer} = this.state
    if (timer > 0) {
      this.setState({timer: timer - 1})
    } else {
      clearInterval(this.timerId)
      this.stopGame()
    }
  }

  increaseScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  stopGame = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({isGameRunning: !prevState.isGameRunning}))
  }

  playAgain = () => {
    this.timerId = setInterval(this.decreaseSeconds, 1000)
    this.setState({score: 0, isGameRunning: true, timer: 60})
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {score, isGameRunning, timer} = this.state
    return (
      <div className="app-container">
        <Navbar score={score} isGameRunning={isGameRunning} timer={timer} />
        {isGameRunning ? (
          <Game
            tabsList={tabsList}
            imagesList={imagesList}
            increaseScore={this.increaseScore}
            stopGame={this.stopGame}
          />
        ) : (
          <ScoreCard score={score} playAgain={this.playAgain} />
        )}
      </div>
    )
  }
}

export default MatchGame
