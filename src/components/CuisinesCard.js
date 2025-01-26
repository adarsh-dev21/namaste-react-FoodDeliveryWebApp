

import { CUISINES_URL } from "../utils/constants";


const CuisinesCard = (props) => {
    const{resData}=props;

    const {imageId}=resData

    return (
        <div className="m-auto p-7 w-[188px] hover:bg-gray-200  flex flex-col items-center">
            <img className="rounded-lg object-cover h-[120px] w-full" alt="res-logo" src={CUISINES_URL + 
            resData.imageId}
            />
            {/* <h3 className="font-bold text-center text-lg">{resData.action.text}</h3>           */}
        </div>
    )
   }




   export default CuisinesCard;