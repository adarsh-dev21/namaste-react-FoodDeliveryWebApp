import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body=()=>{

const [listOfRestaurants,setlistOfRestaurants] = useState([]);

const[filteredRestaurant,setfilteredRestaurant]=useState([]);

const [searchtext,setsearchText]=useState("");

 useEffect(() => {
    fetchData();
},[]);

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();

    //Optional Chaining
    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

//Conditional Rendering
// if(listOfRestaurants.length===0)
//     return <Shimmer />

    return listOfRestaurants.length===0 ? <Shimmer />:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchtext}
                     onChange={(e) => {
                        setsearchText(e.target.value);
                    }}></input>                   

                    <button onClick={() => {
                        const filteredRestaurant= listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()) 
                        );

                        setfilteredRestaurant(filteredRestaurant);

                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={() => 
                    {const filteredList=listOfRestaurants.filter(
                        (res) => res.info.avgRating>=4.5
                    );
                    setfilteredRestaurant(filteredList);

                    }}
                    >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               {
                filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>

                ))}
        

            </div>

        </div>
    )
   }

   export default Body;