import { useEffect, useState } from 'react'
import './CarrucelProduct.css'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../../firebase/client';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const CarrucelProduct = () => {
    const[isLoading,setIsLoading]=useState(true);
    const[productsCarrucel,setProductsCarrucel]=useState([]);
    const params=useParams();
    useEffect(()=>{
        setIsLoading(true)
        const q = query(
            collection(firestore, "productos"),
            where("id","!=",parseInt(params.productoId))
        );
        getDocs(q).then((snapshot) => {
            snapshot.forEach((doc) => setProductsCarrucel(doc.data()));
        });
    },[params]);
    useEffect(()=>{
        if(productsCarrucel.length==0){
            setIsLoading(true)
            return;
        }
        setIsLoading(false);
    },[productsCarrucel])
  return (
    <div style={{width:'100%',background:'red'}}>
        {isLoading?<Loading />:<>hola</>}
    </div>
  )
}

export default CarrucelProduct