import axios from 'axios'
import { useState } from 'react'
import './GalleryItem.css'

/**
 * @param {Object} props
 * @param {GalleryDBItem} props.item
 * @param {() => void} props.getGalleryItems
 */
function GalleryItem({ item, getGalleryItems }) {
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
          try {
            await axios.put(`/gallery/like/${item.id}`)
            getGalleryItems()
            console.log('like successful')
          } catch (error) {
            console.error('error liking', error)
          }
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
