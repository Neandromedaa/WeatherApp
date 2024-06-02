import React from 'react';
import moment from 'moment';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { useContext, useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';
import { forecastContex } from './forecastContext';

function MinWeather({next}){
    const forecast = useContext(forecastContex);
    const [loadIcon, setLoadIcon] = useState(false);

    useEffect(() => {
        if(!forecast.loadWeather) setLoadIcon(false)
    });

    return(
            <swiper-slide>
                <Card
                    sx={{
                        borderRadius: '6%',
                        border: "1px solid",
                        borderColor: "grey.300",
                        width: "min(30vw, 150px)",
                        height: '22vh',
                        display: 'flex',
                        flexFlow: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#b3e4ff',
                    }}
                >
                    <div style={{height: '11vh'}}>
                        <img 
                            onLoad={() => setLoadIcon(true)}
                            src={forecast.loadWeather ? `${process.env.REACT_APP_WEATHER_ICON_URL}n/${forecast.forecast.list[next].weather[0].icon}@2x.png` : ''}
                            alt=''>
                        </img>
                        {!loadIcon && <Skeleton variant="circular" width={'12vw'} height={'12vw'}/>}
                    </div>
                    <Typography variant="h4">{forecast.loadWeather ? Math.ceil(forecast.forecast.list[next].main.temp) + String.fromCharCode(176) + 'C' : <Skeleton width={90}/>}</Typography>
                    <Typography>{moment().add(next, 'days').format('dddd')}</Typography>
                </Card>
            </swiper-slide>
    );
}

export default MinWeather;