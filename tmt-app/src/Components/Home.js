import React from "react";
import '../Styling/Home.css'
import ForwardArrow from '../Images/Forward.png';
import MilkTeaBlob from '../Images/MilkTeaBlob.png';
import LycheeRectangle from '../Images/LycheeRectangle.png';
import MilkTeaSwiggle2 from '../Images/MilkTeaSwiggle2.png';
import ThaiTeaSwiggle1 from '../Images/ThaiTeaSwiggle1.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Home(){
    return(
        <div className="Home_Container">

            <div className="Home_Path_Container">
                <div className="Home_Path_Wrapper">
                    <span>Student Projects</span>
                    <img src={ForwardArrow} alt="ForwardArrow"></img>
                    <span>Major Picker</span>
                </div>
            </div>

            <div className="Home_Hero_Container">
                <div className="Home_Hero_Background">
                    <img src={MilkTeaBlob} alt="MilkTeaBlob"></img>
                </div>
                <div className="Home_Hero_Text">
                    <span className="Home_Hero_Text_1">
                        <h1>Can&apos;t decide between majoring in business, biology, or art?</h1>
                    </span>
                    <span className="Home_Hero_Text_2">
                        <h6>
                            No one can master multiple subjects the way you do. Spend 2 minutes 
                            with us to find the perfect major for you!
                        </h6>
                    </span>
                </div>
            </div>

            <div className="Home_Button_Container">
                <div className="Home_Button_Bg_Container">
                    <div className="Home_Button_Bg_Left">
                        <img src={LycheeRectangle} id="Home_Button_Bg_Img1" alt="LycheeRectangle"></img>
                        <img src={MilkTeaSwiggle2} id="Home_Button_Bg_Img2" alt="MilkTeaSwiggle2"></img>
                    </div>
                    <div className="Home_Button_Bg_Right">
                        <img src={ThaiTeaSwiggle1} id="Home_Button_Bg_Img3" alt="ThaiTeaSwiggle1"></img>
                    </div>
                </div>
                <div className="Home_Button_Main">
                    <button className="Home_Button_Main_Btn"> 
                        Take the Quiz
                    </button>
                    <div className="Home_Button_Main_Link">
                        <a href="google.com" target="_blank">See all Majors/Careers</a>
                        <ArrowRightAltIcon></ArrowRightAltIcon>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home;