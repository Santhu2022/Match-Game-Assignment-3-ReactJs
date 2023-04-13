import './index.css'

const TROPHY_URL =
  'https://assets.ccbp.in/frontend/react-js/match-game-trophy.png'

const RESET_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png'

const ScoreCard = props => {
  const {score, playAgain} = props
  const onClickPlayAgain = () => {
    playAgain()
  }
  return (
    <div className="score-card-bg">
      <img src={TROPHY_URL} alt="trophy" className="trophy-image" />
      <p className="score-card-heading">YOUR SCORE</p>
      <h1 className="scorecard-score-number">{score}</h1>
      <button
        type="button"
        className="play-again-button"
        onClick={onClickPlayAgain}
      >
        <img src={RESET_IMAGE} alt="reset" className="reset-image" />
        <p className="play-again-text">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default ScoreCard
