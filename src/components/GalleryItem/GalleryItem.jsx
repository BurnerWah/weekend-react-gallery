/**
 * @param {Object} props
 * @param {GalleryDBItem} props.item
 */
function GalleryItem({ item }) {
  return <div data-testid="galleryItem">{JSON.stringify(item)}</div>
}

export default GalleryItem
