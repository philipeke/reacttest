import {GreetUser} from './GreetUser'
import {Counter} from './Counter'

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
    <>
      <GreetUser />
      <Counter />
    </>
  )
}
