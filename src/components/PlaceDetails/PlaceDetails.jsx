import React, { useState } from "react";
import { Card, Box, Typography, CardMedia, CardContent,CardActions, Chip , useMediaQuery} from "@material-ui/core";
import LocationOnIcon from'@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import { Button } from "@material-ui/core";

import useStyles from './styles';

const PlaceDetails = ({operators , selected , refProp}) => {
    const classes = useStyles();
    // if(selected) refProp.current.scrollIntoView({ behavior: 'smooth'});
    const isDesktop = useMediaQuery('(min-width::600px)');
    const num = isDesktop?250:200;
    const [buttonText, setButtonText] = useState("Book Now");
    const changeText = (text) =>setButtonText(text);
   

    return (
        <Card elevation={6}>
            <CardMedia 
                style = {{height:num}}
                title = {operators.name}
                image={operators.photo? operators.photo.images.url : 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/800px-Aadhaar_Logo.svg.png' }
                
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">{operators.name}</Typography>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1"><PhoneIcon/></Typography>
                        <Typography gutterBottom variant="subtitle1" >{operators.contact}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1"><LocationOnIcon/></Typography>
                        <Typography gutterBottom variant="subtitle1" >{operators.address}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">No of Slots booked</Typography>
                        <Typography gutterBottom variant="subtitle1" >{operators.bookings}</Typography>
                    </Box>
                    
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Rating</Typography>
                        <Typography gutterBottom variant="subtitle1" >{operators.ratings}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                    <Button variant="outlined" onClick={() => changeText("Booked")} color="success">{buttonText}</Button>
                    
                    </Box>
                    

                    
                </CardContent>
        </Card>
        // <h1>{operators.name}</h1>
    );
}

export default PlaceDetails