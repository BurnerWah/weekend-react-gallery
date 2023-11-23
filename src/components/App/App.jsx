import GalleryList from '../GalleryList/GalleryList'

function App() {
  return (
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
      </header>
      <main>
        <GalleryList />
      </main>
    </div>
  )
}

export default App
