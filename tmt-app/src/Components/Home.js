import React from "react";
import '../Styling/Home.css'
import ForwardArrow from '../Images/Forward.png';
import MilkTeaBlob from '../Images/MilkTeaBlob.png';

function Home(){
    return(
        <div className="Home_Container">

            <div className="Home_Path_Container">
                <div className="Home_Path_Wrapper">
                    <span>Student Projects</span>
                    <img src={ForwardArrow}></img>
                    <span>Major Picker</span>
                </div>
            </div>

            <div className="Home_Hero_Container">
                <div className="Home_Hero_Background">
                    <img src={MilkTeaBlob}></img>
                </div>
                <div className="Home_Hero_Text">
                    <span className="Home_Hero_Text_1">
                        <h1>Can't decide between majoring in business, biology, or art?</h1>
                    </span>
                    <span className="Home_Hero_Text_2">
                        <h6>
                            No one can master multiple subjects the way you do. Spend 2 minutes 
                            with us to find the perfect major for you!
                        </h6>
                    </span>
                </div>
            </div>
            
        </div>
    )
}

export default Home;