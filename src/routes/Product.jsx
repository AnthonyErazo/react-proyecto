import { useParams } from "react-router-dom"
import Loading from "../components/Loading/Loading";
import Item from "../components/Item/Item";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/client";
import ModalView from "../components/Modalwiew/ModalView";


const Product = () => {
    const[isLoading,setIsLoading]=useState(true);
    const[item,setItem]=useState([]);
    const params = useParams();
    useEffect(()=>{
        setIsLoading(true)
        const docRef=query(
            collection(firestore,"productos"),
            where("id","==",parseInt(params.productoId))
        );
        getDocs(docRef).then(snapshot=>{
            snapshot.forEach((doc) => setItem(doc.data()));
        }).catch((error) => console.error(error));
    },[params]);
    useEffect(()=>{
        if (item.length == 0) {
            setIsLoading(true);
            return;
        }
        const img1 = new Image();
        const img2 = new Image();
        
        let imagesLoaded = 0;

        const checkLoading = () => {
            imagesLoaded++;
            if (imagesLoaded === 2) {
                setIsLoading(false);
            }
        };
    
        img1.onload = checkLoading;
        img2.onload = checkLoading;
    
        img1.src = item.image;
        img2.src = item.imagen2;
    },[item]);
    
    return (
        <>
            {isLoading?<Loading />:<Item item={item} />}
            <ModalView />
        </>
    )
}

export default Product