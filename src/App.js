import React, {useEffect, useState} from 'react';
import {CssBaseline, Grid} from '@material-ui/core';


import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';
import datas from './data.json'


const App = () =>{
    const [places, setPlaces] = useState([]);
    const [childClicked, setChildClicked] =useState(null);
    const data = datas.Operators;
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);
    const [rating , setRating] = useState("");
    const [filteredOperators, setFilteredOperators] = useState([]);

    
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(({ coords:{latitude, longitude}}) => {
            setCoordinates({lat:latitude ,lng:longitude})
        })
    },[]);

    useEffect(() =>{
        const filteredOperators = data.filter((abc) => abc.ratings > rating);
        setFilteredOperators(filteredOperators);
        console.log({filteredOperators});
    },[rating]);


    return (
        <>
           <CssBaseline />
           <Header/>
           <Grid container spacing={0} style= {{ width: '100%' }}>
               <Grid item xs={12} md={8}>
                   <Map 
                   setCoordinates = {setCoordinates}
                   setBounds = {setBounds}
                   coordinates = {coordinates}
                   setChildClicked ={setChildClicked}
                   data = {filteredOperators.length? filteredOperators: data}
                   />
               </Grid>
               <Grid item xs={12} md={4}>
                   <List
                        data = {filteredOperators.length? filteredOperators: data}
                        childClicked={childClicked}
                        rating ={rating}
                        setRating={setRating} 
                        
                   />
               </Grid>
           </Grid>
           <Footer/>
        </>
    );
}

export default App;