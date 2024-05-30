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

function Weather({setLat, setLon, setIcon}){
    const forecast = useContext(forecastContex);
    const [city, setCity] = useState(forecast.forecast.city.name)
    
    function onPlaceSelect(value){
        if(value){
            setIcon('')
            forecast.setLoad(false)
            setLat(value.properties.lat)
            setLon(value.properties.lon)
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
                    <div style={{height: '10vh'}}>
                        <img 
                            onLoad={() => forecast.setLoad(true)}
                            src={forecast.icon}
                            alt=''>
                        </img>
                        {!forecast.load && <Skeleton variant="circular" width={60} height={60}/>}
                    </div>
                    
                    <GeoapifyContext apiKey={process.env.REACT_APP_AUTOFILL_API_KEY}>
                        <GeoapifyGeocoderAutocomplete
                            placeholder='Enter City'
                            value={city}
                            limit={3}
                            placeSelect={onPlaceSelect}
                            debounceDelay={500}
                        />                        
                    </GeoapifyContext>
                    <Typography variant="h2">{Math.ceil(forecast.forecast.list[0].main.temp)}&deg;C</Typography>
                    <Typography>{forecast.forecast.list[0].weather[0].description}</Typography>
                    <Typography>{moment().format('dddd')}</Typography>
                    <Typography>{moment().format('LL')}</Typography>
                </CardContent>
            </Card>
        </div> 
    );
}

export default Weather;