import './index.css'

const WEBSITE_LOGO =
  'https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png'

const TIMER_ICON =
  'https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png'

const Navbar = props => {
  const {score, timer} = props
  return (
    <nav className="navbar-container">
      <img src={WEBSITE_LOGO} alt="website logo" className="website-logo" />
      <ul className="nav-items-container">
        <li>
          <p className="score-text">
            Score: <span className="score-span">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img src={TIMER_ICON} alt="timer" className="timer-icon" />
          <p className="timer-text">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
