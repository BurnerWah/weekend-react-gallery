import axios from 'axios'
import { useState } from 'react'

/**
 * @param {Object} props
 * @param {() => void} props.getGalleryItems
 */
function GalleryForm({ getGalleryItems }) {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        try {
          await axios.post('/gallery', { url, title, description })
          setUrl('')
          setTitle('')
          setDescription('')
          getGalleryItems()
        } catch (error) {
          console.log(error)
        }
      }}
    >
      <label>
        URL:{' '}
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="url"
          pattern="(https://.*|/.*)"
          required
        />
      </label>
      <label>
        Title:{' '}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          required
        />
      </label>
      <label>
        Description:{' '}
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />
      </label>
      <button type="submit">Add Image</button>
    </form>
  )
}

export default GalleryForm
