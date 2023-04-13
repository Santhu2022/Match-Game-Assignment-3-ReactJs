import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, checkMatchImage} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const onClickThumbnail = () => {
    checkMatchImage(id)
  }

  return (
    <li className="thumbnail-item">
      <button type="button" className="thumbnail-button">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
          onClick={onClickThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
