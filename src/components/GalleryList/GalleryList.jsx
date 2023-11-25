import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'

/**
 * @param {Object} props
 * @param {GalleryDBItem[]} props.galleryItems
 * @param {() => void} props.getGalleryItems
 */
function GalleryList({ galleryItems, getGalleryItems }) {
  return (
    <div className="GalleryList" data-testid="galleryList">
      {galleryItems.map((item) => (
        <GalleryItem
          key={item.id}
          item={item}
          getGalleryItems={getGalleryItems}
        />
      ))}
    </div>
  )
}

export default GalleryList
