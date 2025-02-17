import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link,useNavigate } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import CuisinesCard from "./CuisinesCard";
import 'url-search-params-polyfill';


const Body=()=>{

const [listOfRestaurants,setlistOfRestaurants] = useState([]);

const[filteredRestaurant,setfilteredRestaurant]=useState([]);

const [searchtext,setsearchText]=useState("");

const RestaurantCardPromoted= withPromotedLabel(RestaurantCard);

const [listOfCuisinesCard,setlistOfCuisinesCard] = useState([]);

const [collectionId, setcollectionId] = useState(null);

const [tags, settags] = useState(null);

const navigate = useNavigate();

 useEffect(() => {
    fetchData();
},[]);

const fetchData = async () => {
    const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();

    //Optional Chaining
    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setlistOfCuisinesCard(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);  

};


const onlineStatus=useOnlineStatus();

if(onlineStatus===false)
     return (
     <h1>Looks like you're offline!! Please check your internet connection!!</h1>
    );


  const handleCardClick = (link) => {
    const url = new URL(link);
    const urlParams = new URLSearchParams(url.search);
    const collectionId = urlParams.get("collection_id");
    const tags = urlParams.get("tags");

    setcollectionId(collectionId);
    settags(tags);

    navigate(`/cuisinesrestaurant/${collectionId}/${tags}`);
  };

//Conditional Rendering
// if(listOfRestaurants.length===0)
//     return <Shimmer />

    return listOfRestaurants.length===0 ? <Shimmer />:(
        <div className="body">
            <div className="filter flex">
                <div className="search p-4 m-4">
                    <input type="text" className="border border-solid border-black" value={searchtext}
                     onChange={(e) => {
                        setsearchText(e.target.value);
                    }}></input>                   

                    <button className="px-4 py-2 bg-green-300 m-4 rounded-lg hover:bg-green-400" onClick={() => {
                        const filteredRestaurant= listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()) 
                        );

                        setfilteredRestaurant(filteredRestaurant);

                    }}>search</button>
                </div>
                <div  className="search p-4 m-4 flex items-center">
                <button className="px-4 py-2 bg-blue-200 rounded-lg hover:bg-blue-300" onClick={() => 
                    {const filteredList=listOfRestaurants.filter(
                        (res) => res.info.avgRating>=4.4
                    );
                    setfilteredRestaurant(filteredList);

                    }}
                    >Top Rated Restaurants</button>
                </div>
                
            </div>

            <div className="m-auto p-4 font-bold text-xl">What's on your mind?</div>
      <div className="flex flex-wrap">
        {listOfCuisinesCard.map((restaurant) => {
          const linkData = restaurant?.action?.link;
          return (
            <div
              key={restaurant.id}
              onClick={() => handleCardClick(linkData)}
            >
              {collectionId && tags ? (
                <Link
                  to={`/cuisinesrestaurant/${collectionId}/${tags}`}
                >
                  <CuisinesCard resData={restaurant} />
                </Link>
              ) : (
                <CuisinesCard resData={restaurant} />
              )}
            </div>
          );
        })}
      </div>

            <div className="w-full py-4 border-t border-gray-300 mt-2"></div>


            <div  className="m-auto p-4 font-bold text-xl">Restaurants with online food delivery</div>
            <div className="flex flex-wrap">
               {
                filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}>

                        {restaurant.info.isOpen ? (<RestaurantCardPromoted resData={restaurant}/>) :
                        (<RestaurantCard resData={restaurant} />)}</Link>

                ))}
        

            </div>           

        </div>
    )
   }

   export default Body;
