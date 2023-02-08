import React from "react";
import {Container, Typography} from '@mui/material';
import ForwardArrow from '../Images/Forward.png';


function BobaPath(){
    return(
        <Container>
            <Container 
                sx={{
                    width:"100%", 
                    display:"flex", 
                    alignItems:"center",
                    textAlign:"center"
                }}
            >
                <Typography variant="CustomSubHeading" sx={{color:"BobaHighlight.main"}}>Student Projects</Typography>
                <img 
                    style={{width:"24px", margin: "0 16px"}}
                    src={ForwardArrow} 
                    alt="ForwardArrow"/>
                <Typography variant="CustomSubHeading" sx={{color:"BobaHighlight.main"}}>Major Picker</Typography>
                </Container>
        </Container>
    )
}

export default BobaPath;