import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
    const {user} =useContext(UserContext);

    if(!user) return <div>Please Login </div> 
    return (
    <h1>wlecome {user.userName}</h1>
    );
}

export default Profile