import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{

const [listOfRestaurants,setlistOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => 
                    {const filteredLists=listOfRestaurants.filter(
                        (res) => res.info.avgRating>4.5
                    );
                    setlistOfRestaurants(filteredLists);

                    }}
                    >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               {
                listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />

                ))}
        

            </div>

        </div>
    )
   }

   export default Body;