import React, { } from "react";
import {useNavigate} from "react-router-dom";
 
export default function Profile(){
    const navigate = useNavigate();
    const signOut = () => {
        localStorage.removeItem('cairocodersToken')
        navigate("/");
    }
    return(
        <div className="container">
           



           
                <div>
                    <button type = 'button' className="btn btn-success btn-lg" onClick= {signOut}>Sign Out</button>
                </div>
      
             
        </div>
    )
}