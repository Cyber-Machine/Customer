import React from "react";
import GoogleMapReact from 'google-map-react';
import { Paper,Typography,useMediaQuery} from '@material-ui/core';
import Rating from '@material-ui/lab';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import useStyles from './styles';
const Map = ({ setCoordinates, setBounds, coordinates, setChildClicked, data}) => {

    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width::600px)');
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{ key:'Enter-API-Key' }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={''}
            onChange={(e) =>{
                setCoordinates({ lat:e.center.lat, lng: e.center.lng})
            }}
            onChildClick={(child) => setChildClicked(child)}
            >
                {data?.map((place,i) => (
                    <div
                    className={classes.markerContainer}
                    lat={Number(place.lat)}
                    lng={Number(place.lng)}
                    key = {i}
                    >
                        {
                            Number(place.bookings) > 8 ?
                            <LocationOnIcon color="error" fontSize="large"/>
                            :
                            <LocationOnIcon color="success" fontSize="large"/>
                        }   
                    </div>
                ))}
        </GoogleMapReact>
        </div>
    );
}

export default Map;