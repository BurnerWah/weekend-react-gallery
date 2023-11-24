import { useState } from 'react'
import './GalleryItem.css'

/**
 * @param {Object} props
 * @param {GalleryDBItem} props.item
 */
function GalleryItem({ item }) {
  const [showDescription, setShowDescription] = useState(false)
  return (
    <div className="GalleryItem" data-testid="galleryItem">
      <span>{item.title}</span>
      <div data-testid="toggle" onClick={() => setShowDescription((x) => !x)}>
        {showDescription ? (
          <p className="Description" data-testid="description">
            {item.description}
          </p>
        ) : (
          <img src={item.url} alt={item.description} />
        )}
      </div>
      <button
        onClick={async () => {
          console.log('like button clicked')
        }}
        data-testid="like"
      >
        Love it!
      </button>
      <span>{item.likes} likes</span>
    </div>
  )
}

export default GalleryItem
