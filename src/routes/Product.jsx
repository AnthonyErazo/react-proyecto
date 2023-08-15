import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getItem } from "./mockasync";
import ItemCount from "../components/ItemCount/ItemCount";
import Loading from "../components/Loading/Loading";
import Item from "../components/Item/Item";

const Product = () => {
    const [isLoading,setIsLoading]=useState(true);
    const params = useParams();
    const [item,setItem]=useState([]);
    useEffect(()=>{
        getItem(params.productoId)
            .then(response=>setItem(response))
            .catch(error=>console.error(error))
            .finally(()=>setIsLoading(false));
    },[]);
    return (
        <>
        {isLoading?<Loading />:<Item item={item} />}
        </>
    )
}

export default Product