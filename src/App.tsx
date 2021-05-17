import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import './shared/global/Global.css'
import { UserProvider } from './shared/provider/UserProvider'
import { ItemsInCartProvider } from './shared/provider/ItemsInCartProvider'

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
    <ItemsInCartProvider>
			<UserProvider>
				<Routes>
					<Navigation />
				</Routes>
			</UserProvider>
		</ItemsInCartProvider>
  )
}

