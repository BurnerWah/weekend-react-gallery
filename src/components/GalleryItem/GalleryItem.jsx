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
    </div>
  )
}

export default GalleryItem
