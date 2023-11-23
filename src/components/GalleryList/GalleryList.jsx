import axios from 'axios'
import { useEffect, useState } from 'react'
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList() {
  const [galleryItems, setGalleryItems] = useState(
    /** @type {GalleryDBItem[]} */ ([]),
  )

  const getGalleryItems = async () => {
    try {
      const res = await axios.get('/gallery')
      setGalleryItems(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getGalleryItems()
  }, [galleryItems])

  return (
    <div data-testid="galleryList">
      {galleryItems.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default GalleryList
