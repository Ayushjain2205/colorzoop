import logo from './logo.svg'
import './App.css'
import ColorPalette from './ColorPalette'
import seedColors from './seedPalletes'

function App() {
  return (
    <div>
      <ColorPalette {...seedColors[2]} />
    </div>
  )
}

export default App
