import { createContext, useState } from "react";
import { Food_list } from "../../image/assets/Asset";
import { useEffect } from "react";

export const StoreContext= createContext(null)

const StoreProviderText=(props)=>{

        const[cartItems,setCartItems]=useState({})
       
        const addToCart=(itemId)=>{
            
            if(!cartItems[itemId]){
                setCartItems((prev)=>({...prev,[itemId]:1}))
            }else{
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}))
            }
        }

        const RemoveItem=(itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}))
        }

        const getTotalItems=()=>{
            let TotalAmount= 0
            
            for(const item in cartItems){
                if(cartItems[item]>0){
                    let Items= Food_list.find((prod)=> prod._id === item)
                    TotalAmount += Items.price* cartItems[item];
                }
                
            }return TotalAmount;
           
        }

        useEffect(()=>{
            console.log(cartItems)
        },[cartItems])

    const contextValue={
        Food_list,
        cartItems,
        setCartItems,
        addToCart,
        RemoveItem,
        getTotalItems

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>

    )
    
}

export default StoreProviderText;