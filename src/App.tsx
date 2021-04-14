import { Routes } from './routes/Routes'
import {Navigation} from './components/navigation/Navigation'
import './shared/global/Global.css'
/*function App() {
  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}

export default App*/

//Det här är samma sätt att skriva ned kod, men mer clean

export const App = () => {
  return (
    
    <Routes>
      <Navigation />
    </Routes>
    
  )
}

