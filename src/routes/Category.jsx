import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getItemsCategory } from "./mockasync";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Loading from "../components/Loading/Loading";

const Category = () => {
    const [isLoading,setIsLoading]=useState(true);
    const [products,setProducts]=useState([]);
    const params=useParams();
    useEffect(()=>{
        setIsLoading(true);
        getItemsCategory(params.categoriaId||params.subCategoriaId)
            .then(items=>setProducts(items))
            .catch(error=>console.error(error))
            .finally(()=>setIsLoading(false));
    },[params.categoriaId, params.subCategoriaId]);
    return (
        <>
        {isLoading?<Loading />:<ItemListContainer greeting={'Bienvenido!!'} items={products} />}
        </>
    )
}

export default Category