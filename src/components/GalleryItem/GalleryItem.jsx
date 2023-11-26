import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteIcon from '@mui/icons-material/Favorite'
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material'
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
    <Card>
      <div className="GalleryItem" data-testid="galleryItem">
        <CardContent>
          <Typography>{item.title}</Typography>
          <div
            data-testid="toggle"
            onClick={() => setShowDescription((x) => !x)}
          >
            {showDescription ? (
              <Typography className="Description" data-testid="description">
                {item.description}
              </Typography>
            ) : (
              <Tooltip title="Click to show description">
                <img src={item.url} alt={item.description} />
              </Tooltip>
            )}
          </div>
          <Typography color="text.secondary">{item.likes} likes</Typography>
        </CardContent>
        <CardActions>
          <Tooltip title="Like">
            <IconButton
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
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              onClick={async () => {
                console.log('delete button clicked')
                try {
                  await axios.delete(`/gallery/${item.id}`)
                  getGalleryItems()
                  console.log('delete successful')
                } catch (error) {
                  console.error('error deleting', error)
                }
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </div>
    </Card>
  )
}

export default GalleryItem
