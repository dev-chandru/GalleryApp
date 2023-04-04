// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {
    thumnailImage,
    galleryImageUrl,
    altText,
    onUpdateGallery,
    isActive,
    imageId,
    activeAltText,
  } = props

  const selectedImageClassName = isActive ? 'active-image' : ''

  const onClickingThumbnail = () => {
    onUpdateGallery(galleryImageUrl, activeAltText, imageId)
  }
  return (
    <li className="thumbnails-items">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickingThumbnail}
      >
        <img
          src={thumnailImage}
          alt={altText}
          className={`thumbnail-image ${selectedImageClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
