import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu= () => {

    const {resId}=useParams();

    const resInfo= useRestaurantMenu(resId);

    const [showIndex,setshowIndex]=useState(null);

    if(resInfo===null)
        return <Shimmer />

    const {name,cuisines,costForTwoMessage}=resInfo?.data?.cards[2]?.card?.card?.info;

    // const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const cards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const mappedCards = cards?.map(cardItem => cardItem?.card?.card) || []; 
    // Filter the cards that contain itemCards
    const cardsWithItemCards = mappedCards.filter(card => card?.itemCards);

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
        //     c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" 
        // || 
            c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl text-indigo-600">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}: {costForTwoMessage}
                </p>
            {categories.map((category,index) => 
                (<RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setshowIndex={() => setshowIndex(index)}/>                   
                ))}
        </div>
    )
}


export default RestaurantMenu;