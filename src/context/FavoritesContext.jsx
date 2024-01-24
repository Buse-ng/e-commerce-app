import React, { createContext, useEffect, useState } from "react";

export const FavoritesContext=createContext();

const FavoritesProvider=({children})=>{

    const [favorites, setFavorites] = useState([]);
    
    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);
    
    useEffect(()=>{
        const storedFavorites=JSON.parse(localStorage.getItem(favorites)) || [];
        setFavorites(storedFavorites);
    }, []);

    const toggleFavorites=(productId)=>{
        setFavorites((prevFavorites)=>{
            if(prevFavorites.includes(productId)){
                return prevFavorites.filter((id)=>id !== productId);
            }
            else{
                return [...prevFavorites, productId]
            }
        })
    }

    return (
        <FavoritesContext.Provider value={{favorites, toggleFavorites}}>
            {children}
        </FavoritesContext.Provider>
    );
}
export default FavoritesProvider;