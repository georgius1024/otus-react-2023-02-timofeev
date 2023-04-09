import './App.css'
import Canvas from '@/components/Canvas'

function App() {
  
  return (
    <div className="App">
      <Canvas cols={10} rows={10} dx={50} dy={50} />
    </div>
  )
}

export default App
