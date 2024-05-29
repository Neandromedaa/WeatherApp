// import '@geoapify/geocoder-autocomplete/styles/round-borders.css';
import { GeoapifyContext, GeoapifyGeocoderAutocomplete } from '@geoapify/react-geocoder-autocomplete';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Skeleton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import React, { useState, useEffect, useContext } from 'react';
import { forecastContex } from './forecastContext';
import Icon from './Icon';

function Weather({setLat, setLon}){
    const forecast = useContext(forecastContex);
    const [city, setCity] = useState(forecast.city.name)
    
  
    function onPlaceSelect(value){
        if(value){
            setLat(value.properties.lat)
            setLon(value.properties.lon)
            console.log(value.properties.lat);
        }  
    }

    return(
        <div>
            <Card
                sx={{
                    borderRadius: '6%',
                    border: "1px solid",
                    borderColor: "grey.300",
                    width: "min(60vw, 300px)",
                    height: '40vh',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <CardContent 
                    sx={{
                        display: 'flex',
                        flexFlow: 'column',
                        alignItems: 'center',
                        gap: 1,
                        justifyContent: 'center',
                        backgroundColor: '#b3e4ff',
                        width: "min(60vw, 300px)",
                        height: '40vh',
                    }}
                >
                    <Icon/>
                    {/* <div style={{height: '10vh'}}>
                        <img 
                            onLoad={() => setLoad(true)}
                            src={`${process.env.REACT_APP_WEATHER_ICON_URL}n/${forecast.list[0].weather[0].icon}@2x.png`}
                            alt=''>
                        </img>
                        {!load && <Skeleton variant="circular" width={60} height={60}/>}
                    </div> */}
                    <GeoapifyContext apiKey={process.env.REACT_APP_AUTOFILL_API_KEY}>
                        <GeoapifyGeocoderAutocomplete
                            placeholder='Enter City'
                            value={city}
                            limit={3}
                            // onUserInput={event => setCity(event.target.value)}
                            placeSelect={onPlaceSelect}
                            debounceDelay={500}
                        />                        
                    </GeoapifyContext>
                    <Typography variant="h2">{Math.ceil(forecast.list[0].main.temp)}&deg;C</Typography>
                    <Typography>{forecast.list[0].weather[0].description}</Typography>
                    <Typography>{moment().format('dddd')}</Typography>
                    <Typography>{moment().format('LL')}</Typography>
                </CardContent>
            </Card>
        </div> 
    );
}

export default Weather;