import { useEffect, useState } from 'react';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Loading from './components/Loading/Loading';
import ModalView from '../components/ModalWiew/ModalView.jsx';
import { useModalContext } from './context/modal';
import { useProductContext } from './context/product';
import { useParams } from 'react-router-dom';

function App() {
  const {products,isLoadingProducts}=useProductContext();
  const {modalButtonX}=useModalContext();
  const [isLoading, setIsLoading] = useState(true);
  const [productsCategory,setProductsCategory]=useState([]);
  const params=useParams();
  useEffect(() => {
    setIsLoading(true);
    const productPromises = products.map((product) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve();
        };
        img.onerror = () => {
          resolve();
        };
        img.src = product.image;
      });
    });
    Promise.all(productPromises).then(() => {
      setIsLoading(false);
    });
  }, []);
  useEffect(()=>{
    console.log("rrr");
    setIsLoading(true);
    const filteredProducts = products.filter((product) => {
      if(typeof params.subCategoriaId === 'undefined'){
        return product.category === params.categoriaId;
      }else{
        return product.subcategory === params.subCategoriaId;
      }
    });
    setProductsCategory(filteredProducts);
    const productPromises = productsCategory.map((product) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve();
        };
        img.onerror = () => {
          resolve();
        };
        img.src = product.image;
      });
    });
    Promise.all(productPromises).then(() => {
      setIsLoading(false);
    });
  },[params]);
  return (
    <>
      {(isLoadingProducts||isLoading)?<Loading />:
      <>
      <ItemListContainer greeting={'Bienvenido!!'} items={(typeof params.categoriaId === 'undefined')&&(typeof params.subCategoriaId === 'undefined')?products:productsCategory} />
    </>}
      {modalButtonX?<ModalView />:<></>}
    </>
  )
}

export default App
