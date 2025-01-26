import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useCuisinesRestaurant from "../utils/useCuisinesRestaurant";
import CuisinesRestaurantDetails from "./CuisinesRestaurantDetails";
import { Link } from "react-router";

const CuisinesRestaurant= () => {

    const {collectionId,tags}=useParams();

    const resInfo= useCuisinesRestaurant(collectionId,tags);
    
    if(resInfo===null)
        return <Shimmer />

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resInfo?.data.cards[3].card.card.info

    const cards = resInfo?.data?.cards;
    const mappedCards = cards?.map(cardItem => cardItem?.card?.card) || []; 
    // Filter the cards that contain itemCards
    const cardsWithItemCards = mappedCards.filter(card => card?.itemCards);

    const categories = resInfo?.data?.cards.filter(
        (c) => 
            c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

        return (
            <div className="m-4 p-4 flex flex-wrap gap-auto">  
                {
                

                categories.map((category) => (
                    // <Link
                    //  key={category?.card?.card?.title} to={"/restaurant/"+ categories.card?.card?.info.id}>
                    //     {<CuisinesRestaurantDetails data={category?.card?.card} />}</Link>

                        <Link 
                        key={category?.card?.card?.info?.id} 
                        to={`/restaurant/${category?.card?.card?.info?.id}`}>
                        <CuisinesRestaurantDetails data={category?.card?.card} />
                    </Link>

                ))}
                
            </div>
        )
       }


export default CuisinesRestaurant;