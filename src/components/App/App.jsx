import axios from 'axios'
import { useEffect, useState } from 'react'
import GalleryForm from '../GalleryForm/GalleryForm'
import GalleryList from '../GalleryList/GalleryList'

function App() {
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
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
      </header>
      <main>
        <GalleryForm getGalleryItems={getGalleryItems} />
        <GalleryList
          galleryItems={galleryItems}
          getGalleryItems={getGalleryItems}
        />
      </main>
    </div>
  )
}

export default App
