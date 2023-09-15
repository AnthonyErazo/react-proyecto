import { useEffect, useState } from 'react';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Loading from './components/Loading/Loading';
import ModalView from './components/Modalwiew/ModalView';
import { useProductContext } from './context/product';
import { useLocation, useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from './firebase/client';

function App() {
  const { setProducts,setProductsTotal } = useProductContext();
  const [isLoading, setIsLoading] = useState(true);
  const [productsCategory, setProductsCategory] = useState([]);
  const [isProductsSet, setIsProductsSet] = useState(false);
  const params = useParams();
  const location1 = useLocation();

  useEffect(() => {
    setIsLoading(true);
    let docRef;
    if (location1.pathname === '/') {
      docRef = query(
        collection(firestore, "productos")
      );
    } else if (typeof params.subCategoriaId === 'undefined') {
      docRef = query(
        collection(firestore, "productos"),
        where("category", "==", params.categoriaId)
      );
    } else {
      docRef = query(
        collection(firestore, "productos"),
        where("subcategory", "==", params.subCategoriaId)
      );
    }
    getDocs(docRef).then(snapshot => {
      const filteredProducts = snapshot.docs
          .map((doc) => doc.data())
          .filter((product) => product.stock > 0);
        setProductsCategory(filteredProducts);
        if(location1.pathname==='/'){
          setProductsTotal(filteredProducts);
        }
    }).catch((error) => console.error(error));

  }, [params, location1]);

  useEffect(() => {
    if (productsCategory.length === 0) {
      setIsLoading(true);
      return;
    }

    const imagePromises = productsCategory.map((product) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve();
        };
        img.src = product.image;
      });
    });
    if(!isProductsSet){
      setProducts(productsCategory);
      setIsProductsSet(true);
    }

    Promise.all(imagePromises).then(() => {
      setIsLoading(false);
    });
  }, [productsCategory]);
  return (
    <>
      {isLoading ? <Loading /> :
        <ItemListContainer
          greeting={'Bienvenido!!'}
          items={productsCategory}
        />}
      <ModalView />
    </>
  )
}

export default App
