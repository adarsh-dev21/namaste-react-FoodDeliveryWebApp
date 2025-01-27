import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { GREEN_URL,RED_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Header=()=>{

    const[btnName,setbtnName]=useState("Login");

    const onlineStatus=useOnlineStatus();

    const {loggedInUser}=useContext(userContext);

    //Subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-green-100 shadow-lg sm:bg-yellow-50 lg:bg-purple-100">
            <div className="logo-container">
                <img className="w-36" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4"> 
                    <li className="flex items-center px-5 text-lg">Online Status : <img className="w-5 ml-2" src={onlineStatus ? GREEN_URL : RED_URL} /> </li>
                    <li className="px-4 text-lg"><Link to="/">Home</Link></li>
                    <li className="px-4 text-lg"><Link to="/about">About</Link></li>
                    <li className="px-4 text-lg"><Link to="/contact">Contact</Link></li>
                    {/* <li className="px-4"><Link to="/grocery">Grocery</Link></li> */}
                    <li className="px-4 font-bold text-lg">
                        <Link to="/cart">Cart -({cartItems.length} Items)</Link></li>
                    <button className="login flex px-4 text-lg" onClick={() => {
                        btnName==="Login" 
                        ? setbtnName("Logout")
                        : setbtnName("Login");
                    }}>{btnName}</button>

                    <li className="px-4 font-bold text-lg">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
   };


   export default Header;