import { useParams } from "react-router-dom"
import Loading from "../components/Loading/Loading";
import Item from "../components/Item/Item";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/client";

const Product = () => {
    const[isLoading,setIsLoading]=useState(true);
    const[item,setItem]=useState([]);
    const params = useParams();
    useEffect(()=>{
        const docRef=collection(firestore,"productos");
        getDocs(docRef).then(snapshot=>{
            snapshot.docs.map((doc) => {
                if(doc.data().id==params.productoId){
                    setItem(doc.data())
                }
            });
        }).catch((error) => console.error(error))
        .finally(() =>setIsLoading(false));
    },[]);
    
    return (
        <>
        {isLoading?<Loading />:<Item item={item} />}
        </>
    )
}

export default Product