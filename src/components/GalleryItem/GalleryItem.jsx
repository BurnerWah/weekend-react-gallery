import './GalleryItem.css'

/**
 * @param {Object} props
 * @param {GalleryDBItem} props.item
 */
function GalleryItem({ item }) {
  return (
    <div className="GalleryItem" data-testid="galleryItem">
      <img src={item.url} alt={item.description} />
    </div>
  )
}

export default GalleryItem
