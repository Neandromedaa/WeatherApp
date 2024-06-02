import { GeoapifyContext, GeoapifyGeocoderAutocomplete } from '@geoapify/react-geocoder-autocomplete';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Skeleton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import React, { useState, useContext } from 'react';
import { forecastContex } from './forecastContext';

function Weather({lat, lon, setLat, setLon}){
    const forecast = useContext(forecastContex);
    const [city, setCity] = useState(forecast.forecast.city.name)
    const [loadIcon, setLoadIcon] = useState(false);

    function onPlaceSelect(value){
        if(value){
            if(lat !== value.properties.lat || lon !== value.properties.lon){
                forecast.setLoadWeather(false);
                setLoadIcon(false);
                setLat(value.properties.lat);
                setLon(value.properties.lon);
            }
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
                    backgroundColor: '#b3e4ff',
                    gap: 1,
                    overflow: 'visible'
                }}
            >
                <div style={{height: '10vh'}}>
                    <img 
                        onLoad={() => setLoadIcon(true)}
                        src={forecast.loadWeather ? `${process.env.REACT_APP_WEATHER_ICON_URL}n/${forecast.forecast.list[0].weather[0].icon}@2x.png` : ''}
                        alt=''>
                    </img>
                    {!loadIcon && <Skeleton variant="circular" width={60} height={60}/>}
                </div>
                <GeoapifyContext apiKey={process.env.REACT_APP_AUTOFILL_API_KEY}>
                    <GeoapifyGeocoderAutocomplete
                        placeholder='Enter City'
                        value={city}
                        limit={5}
                        placeSelect={onPlaceSelect}
                        debounceDelay={500}
                    />    
                </GeoapifyContext>
                <div style={{display: 'flex', alignItems: 'center', flexFlow: 'column', height: '10vh'}}>
                    <Typography variant="h2">{forecast.loadWeather ? Math.ceil(forecast.forecast.list[0].main.temp) + String.fromCharCode(176) + 'C' : <Skeleton width={90}/>}</Typography>
                    <Typography>{forecast.loadWeather ? forecast.forecast.list[0].weather[0].description : <Skeleton width={80}/>}</Typography>
                </div>
                <Typography>{moment().format('dddd')}</Typography>
                <Typography>{moment().format('LL')}</Typography>
            </Card>
        </div> 
    );
}

export default Weather;