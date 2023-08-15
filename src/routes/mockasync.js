const items=[{
    id:"1",
    name:"ropa1",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore accusantium cupiditate qui obcaecati, sapiente repellat odio ad rerum sequi accusamus, commodi harum suscipit eum quae ea? Magni, eaque expedita.",
    price:"$10",
    stock:"20",
    category:"pantalones",
    image:""
},{
    id:"7",
    name:"ropa7",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore accusantium cupiditate qui obcaecati, sapiente repellat odio ad rerum sequi accusamus, commodi harum suscipit eum quae ea? Magni, eaque expedita.",
    price:"$10",
    stock:"20",
    category:"pantalones",
    image:""
},{
    id:"2",
    name:"ropa2",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore accusantium cupiditate qui obcaecati, sapiente repellat odio ad rerum sequi accusamus, commodi harum suscipit eum quae ea? Magni, eaque expedita.",
    price:"$10",
    stock:"20",
    category:"camisa",
    image:""
},{
    id:"3",
    name:"ropa3",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore accusantium cupiditate qui obcaecati, sapiente repellat odio ad rerum sequi accusamus, commodi harum suscipit eum quae ea? Magni, eaque expedita.",
    price:"$10",
    stock:"20",
    category:"accesorio",
    subcategory:"bolso",
    image:""
},{
    id:"4",
    name:"ropa4",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore accusantium cupiditate qui obcaecati, sapiente repellat odio ad rerum sequi accusamus, commodi harum suscipit eum quae ea? Magni, eaque expedita.",
    price:"$10",
    stock:"20",
    category:"accesorio",
    subcategory:"lentes",
    image:""
},{
    id:"5",
    name:"ropa5",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore accusantium cupiditate qui obcaecati, sapiente repellat odio ad rerum sequi accusamus, commodi harum suscipit eum quae ea? Magni, eaque expedita.",
    price:"$10",
    stock:"20",
    category:"polo",
    image:""
},{
    id:"6",
    name:"zapatilla1",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore accusantium cupiditate qui obcaecati, sapiente repellat odio ad rerum sequi accusamus, commodi harum suscipit eum quae ea? Magni, eaque expedita.",
    price:"$10",
    stock:"20",
    category:"zapatilla",
    image:""
}];

export const getItems=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(items);
        },2000);
    });
};
export const getItem=(itemId)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const newItem=items.filter(item=>item.id===itemId);
            if(newItem){
                resolve(newItem);
            }else{
                reject("No se encontro ningun item con ese Id");
            }
        },2000);
    });
};
export const getItemsCategory=(categoryId)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const newItems=items.filter(item=>item.category===categoryId||item.subcategory==categoryId);
            if(newItems){
                resolve(newItems);
            }else{
                reject("No se encontro ningun item con ese Id");
            }
        },2000);
    });
};