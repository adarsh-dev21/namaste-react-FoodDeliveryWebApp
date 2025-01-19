
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const{resData}=props;

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.info

    return (
        <div className="res-card" style={{backgroundcolor:"#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={CDN_URL + 
            resData.info.cloudinaryImageId}
            />
            <h3>{resData.info.name}</h3>
            <h3>{resData.info.cuisines.join(", ")}</h3>
            <h3>{resData.info.avgRating}stars</h3>
            <h3>{resData.info.costForTwo}</h3>
            <h3>{resData.info.sla.deliveryTime} minutes</h3>

        </div>
    )
   }

   export default RestaurantCard;