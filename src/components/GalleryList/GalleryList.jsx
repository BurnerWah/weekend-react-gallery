import axios from 'axios'
import { useEffect, useState } from 'react'
import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'

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
