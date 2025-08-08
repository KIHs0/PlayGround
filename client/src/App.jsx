import Customiser from "./pages/customizer"
import Home from "./pages/home"
import CanvasModel from './canvas/canvas'

function App() {

  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customiser />

    </main>
  )
}

export default App
