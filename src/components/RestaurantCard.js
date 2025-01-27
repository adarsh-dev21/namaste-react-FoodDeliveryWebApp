

import { CDN_URL, RATING_URL } from "../utils/constants";
// import userContext from "../utils/userContext";
// import { useContext } from "react";

const RestaurantCard = (props) => {
    const{resData}=props;

    // const {loggedInUser}=useContext(userContext);

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.info



    return (
        // <div className="m-4 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <div className="m-4 p-4 w-[220px] rounded-lg hover:bg-gray-200 flex flex-col h-[350px]">
            <img className="rounded-lg object-cover h-[120px] w-full" alt="res-logo" src={CDN_URL + 
            resData.info.cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
            {/* <h3>{resData.info.cuisines.join(", ")}</h3> */}
            <h3>{resData.info.cuisines.length > 3
            ? resData.info.cuisines.slice(0, 3).join(", ") + "..."
            : resData.info.cuisines.join(", ")}
            </h3>
            <div className="flex items-center">
            <img className="w-5 mr-2" src={RATING_URL} /> 
            <h3> {resData.info.avgRating} -- {resData.info.sla.deliveryTime} mins</h3>
            </div>
            <h3>{resData.info.costForTwo}</h3>
            {/* <h3>{loggedInUser}</h3> */}
            {/* <h3>{resData.info.sla.deliveryTime} minutes</h3> */}
            
        </div>
    )
   }


   export const withPromotedLabel= (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
                <RestaurantCard {...props}/>
            </div>

        )
    }
   }

   export default RestaurantCard;