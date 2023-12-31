// Shared types
interface GalleryDBItem {
  id: number
  url: string
  title: string
  description: string
  likes: number
}

interface GalleryReqBody {
  url: string
  title: string
  description: string
}
