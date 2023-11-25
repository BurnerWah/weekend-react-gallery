import { Button, FormControl, TextField } from '@mui/material'
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
    <FormControl>
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
        <TextField
          label="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="url"
          required
        />
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          required
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />
        <Button variant="contained" type="submit">
          Add Image
        </Button>
      </form>
    </FormControl>
  )
}

export default GalleryForm
