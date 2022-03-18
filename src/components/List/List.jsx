import React,{useState , useEffect, createRef} from "react";
import { CircularProgress,Grid ,Box, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import { MyLocationOutlined } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import CustomizedMenus from "./MenuItem";
import useStyles from './styles';
const List = ({data,childClicked, rating, setRating}) => {
    const classes = useStyles(); 
    console.log({childClicked});
    const [elRefs, setElRefs] = useState([]);
    useEffect(() => {
        const refs = Array(data.length).fill().map((_ , i) => elRefs[i] || createRef());
        setElRefs(refs);
    },[data] );

    const [value,setValue] = useState('');
    console.log({elRefs});

    const changeValue = (value) => {
      setValue(value);
      setRating(value);
    };


    
    return (
        <div className={classes.container}>
            <Typography variant="h4">Operators near you.</Typography>
          <Box display="flex" justifyContent="space-around" marginTop={"30px"}>

          <TextField id="outlined-basic" label="Name" variant="outlined" size="small" />
          <MyLocationOutlined/>
          

          </Box>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating"  value={value} onChange={(e) => changeValue(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>

          <Grid container spacing={3} className={classes.list}>
            {data?.map((name, i) => (
              <Grid   item key ={i} xs={12}>
                <PlaceDetails operators={name} selected={Number(childClicked) === i} refProp={elRefs[i]} 
                  
                  />

                </Grid>
            ))}
          </Grid>
          </div>
    );
}

export default List;