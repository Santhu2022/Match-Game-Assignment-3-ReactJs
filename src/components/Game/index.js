import {Component} from 'react'
import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'
import './index.css'

class Game extends Component {
  constructor(props) {
    super(props)
    const {tabsList, imagesList} = props
    this.state = {
      activeTabId: tabsList[0].tabId,
      matchImageId: imagesList[0].id,
    }
  }

  checkMatchImage = id => {
    const {matchImageId} = this.state
    const {increaseScore, stopGame} = this.props

    if (matchImageId === id) {
      increaseScore()
      this.changeMatchImage()
    } else {
      stopGame()
    }
  }

  changeMatchImage = () => {
    const {imagesList} = this.props
    const randomIndex = Math.floor(Math.random() * imagesList.length)
    this.setState({matchImageId: imagesList[randomIndex].id})
  }

  onClickTab = tabId => this.setState({activeTabId: tabId})

  getMatchImageUrl = () => {
    const {imagesList} = this.props
    const {matchImageId} = this.state
    const matchImgObject = imagesList.find(
      eachImg => eachImg.id === matchImageId,
    )
    return matchImgObject.imageUrl
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {activeTabId} = this.state
    const matchImageUrl = this.getMatchImageUrl()
    const filteredList = imagesList.filter(
      eachImg => eachImg.category === activeTabId,
    )
    return (
      <div className="game-container">
        <img className="match-image" src={matchImageUrl} alt="match" />

        <ul className="tabs-list">
          {tabsList.map(eachTab => (
            <TabItem
              key={eachTab.tabId}
              tabDetails={eachTab}
              isActive={eachTab.tabId === activeTabId}
              onClickTab={this.onClickTab}
            />
          ))}
        </ul>

        <ul className="thumbnails-list">
          {filteredList.map(eachImg => (
            <ThumbnailItem
              key={eachImg.id}
              thumbnailDetails={eachImg}
              checkMatchImage={this.checkMatchImage}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Game
