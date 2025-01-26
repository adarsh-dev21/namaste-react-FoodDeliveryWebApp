

import { useState,useEffect } from "react";

const useCuisinesRestaurant = (collectionId,tags) => {
    const [cuisinesResInfo,setcuisinesResInfo]=useState(null);
    console.log(collectionId,tags);
    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=${collectionId}&tags=${tags}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`);
        const json = await response.json();

        

        setcuisinesResInfo(json);

    };

    return cuisinesResInfo;
};


export default useCuisinesRestaurant;