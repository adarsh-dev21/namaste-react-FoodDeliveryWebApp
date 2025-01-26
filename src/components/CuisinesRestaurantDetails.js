import { CDN_URL,RATING_URL } from "../utils/constants";

const CuisinesRestaurantDetails = ({data}) => {
    
    return (
        <div className="m-4 p-4 w-[220px] rounded-lg hover:bg-gray-200 flex flex-col h-[350px]">
                        <img className="rounded-lg object-cover h-[120px] w-full" alt="res-logo" src={CDN_URL + 
                        data.info.cloudinaryImageId}
                        />
                        <h3 className="font-bold py-4 text-lg">{data.info.name}</h3>
                        <h3>{data.info.cuisines.length > 3
                        ? data.info.cuisines.slice(0, 3).join(", ") + "..."
                        : data.info.cuisines.join(", ")}
                        </h3>
                        <div className="flex items-center">
                        <img className="w-5 mr-2" src={RATING_URL} /> 
                        <h3> {data.info.avgRating} -- {data.info.sla.deliveryTime} mins</h3>
                        </div>
                        <h3>{data.info.costForTwo}</h3>
                        
                    </div>
    )
}


export default CuisinesRestaurantDetails;