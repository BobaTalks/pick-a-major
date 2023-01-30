import React from "react";
import '../Styling/Home.css';
import {PrimaryBtn, FlexContainer} from '../Styling/CustomStyling.js';
import {Link, Container, Typography} from '@mui/material';
import ForwardArrow from '../Images/Forward.png';
import MilkTeaBlob from '../Images/MilkTeaBlob.png';
import LycheeRectangle from '../Images/LycheeRectangle.png';
import MilkTeaSwiggle2 from '../Images/MilkTeaSwiggle2.png';
import ThaiTeaSwiggle1 from '../Images/ThaiTeaSwiggle1.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



function Home(){
    return(
        <Container 
            sx={{
                minWidth:"100%", 
                paddingTop:"7.5rem", 
                overflow:"hidden", 
                minHeight:"100vh"
            }}
        >
            <Container>
                <div className="Home_Path_Wrapper">
                    <span>
                        <Typography variant="CustomSubHeading" color="#616587">Student Projects</Typography>
                    </span>
                    <img src={ForwardArrow} alt="ForwardArrow"/>
                    <span>
                        <Typography variant="CustomSubHeading" color="#616587">Major Picker</Typography>
                    </span>
                </div>
            </Container>

            <FlexContainer sx={{paddingY:"6.25rem"}}>
                <div className="Home_Hero_Background">
                    <img src={MilkTeaBlob} alt="MilkTeaBlob"/>
                </div>
                <FlexContainer sx={{flexDirection:"column", position:"none"}}>
                    <span className="Home_Hero_Text_1">
                        <Typography variant="CustomTitle" sx={{color:"Boba.main"}}>
                            Can&apos;t decide between majoring in business, biology, or art?
                        </Typography>
                    </span>
                    <span className="Home_Hero_Text_2">
                        <Typography variant="CustomHeading3">
                            No one can master multiple subjects the way you do. Spend 2 minutes 
                            with us to find the perfect major for you!
                        </Typography>
                    </span>
                </FlexContainer>
            </FlexContainer>

            <FlexContainer sx={{flexDirection:"row"}}>
                <div className="Home_Button_Bg_Wrapper">
                    <div className="Home_Button_Bg_Left">
                        <img 
                            src={LycheeRectangle} 
                            id="Home_Button_Bg_Img1" 
                            alt="LycheeRectangle"
                        />
                        <img 
                            src={MilkTeaSwiggle2} 
                            id="Home_Button_Bg_Img2" 
                            alt="MilkTeaSwiggle2"
                        />
                    </div>
                    <div className="Home_Button_Bg_Right">
                        <img 
                            src={ThaiTeaSwiggle1} 
                            id="Home_Button_Bg_Img3" 
                            alt="ThaiTeaSwiggle1"
                        />
                    </div>
                </div>
                <FlexContainer 
                    sx={{
                        flexDirection:"column", 
                        position:"none",
                        height:"auto"
                    }}
                >
                    <PrimaryBtn sx={{color: "#FFFFFF"}}> 
                        <Typography variant="CustomHeading2">
                            Take the Quiz
                        </Typography>
                    </PrimaryBtn>
 
                    <div className="Home_Button_Main_Link">
                        <Link
                            sx={{color:"Boba.main"}}
                            underline="none"
                            href="google.com" 
                            target="_blank"
                            rel="noopener" 
                            aria-label="Learn more about other different majors"
                        >
                            <Typography variant="CustomSubHeading">
                                See all Majors/Careers
                            </Typography>
                            
                        </Link>
                        <ArrowRightAltIcon />
                    </div>
                    
                </FlexContainer>
            </FlexContainer>
        </Container>
    )
}

export default Home;