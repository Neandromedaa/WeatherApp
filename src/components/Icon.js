import { Skeleton } from '@mui/material';
import { forecastContex } from './forecastContext';
import { useContext, useState, useEffect } from 'react';

function Icon(){
    const forecast = useContext(forecastContex);
    const [load, setLoad] = useState(false);
    
    return (
        <div style={{height: '10vh'}}>
            <img 
                onLoad={() => setLoad(true)}
                src={`${process.env.REACT_APP_WEATHER_ICON_URL}n/${forecast.list[0].weather[0].icon}@2x.png`}
                alt=''>
            </img>
            {!load && <Skeleton variant="circular" width={60} height={60}/>}
        </div>
    );
}

export default Icon;