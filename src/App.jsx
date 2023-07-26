import './App.css'
import ItemListContainer from './components/main/ItemListContainer'
import Navbar from './components/header/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Bienvenido!!'}/>
    </>
  )
}

export default App
