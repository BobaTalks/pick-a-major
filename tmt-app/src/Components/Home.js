import React from "react";
import Forward from '../Images/Forward.png';
import '../Styling/Home.css'
function Home(){
    return(
        <div className="Home_Container">
            <div className="Home_Path_Container">
                <div className="Home_Path_Wrapper">
                    <span>Student Projects</span>
                    <img src={Forward}></img>
                    <span>Major Picker</span>
                </div>
            </div>
        </div>
    )
}

export default Home;