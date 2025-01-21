import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu= () => {

    const [resInfo,setresInfo]=useState(null);

    const {resId}=useParams();

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data= await fetch(MENU_URL + resId);

        const json= await data.json();
        
        console.log(json);
        setresInfo(json);
    }

    if(resInfo===null)
        return <Shimmer />

    const {name,cuisines,costForTwoMessage}=resInfo?.data?.cards[2]?.card?.card?.info;

    // const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const cards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const mappedCards = cards?.map(cardItem => cardItem?.card?.card) || []; 
    // Filter the cards that contain itemCards
    const cardsWithItemCards = mappedCards.filter(card => card?.itemCards);
    const {itemCards}=cardsWithItemCards[0];



    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}: {costForTwoMessage}
                </p>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>
                    {item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100} </li>)}
            </ul>
        </div>
    )
}


export default RestaurantMenu;