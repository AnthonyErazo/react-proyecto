import { useEffect, useState } from 'react';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import { getItems } from './routes/mockasync';
import Loading from './components/Loading/Loading';

function App() {
  const [isLoading,setIsLoading]=useState(true);
  const [products,setProducts]=useState([]);
  useEffect(()=>{
      getItems()
          .then(items=>setProducts(items))
          .catch(error=>console.error(error))
          .finally(()=>setIsLoading(false));
  },[]);
  return (
    <>
      {isLoading?<Loading />:
      <>
        <ItemListContainer greeting={'Bienvenido!!'} items={products} />
      </>}
      
    </>
  )
}

export default App
