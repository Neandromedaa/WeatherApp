import React from 'react';
import moment from 'moment';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardHeader, Icon, IconButton } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import RefreshIcon from '@mui/icons-material/Refresh';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { Skeleton } from '@mui/material';
import { useState } from 'react';

function Weather({forecast}){
    const [load, setLoad] = useState(false)
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
                    <div style={{height: '11vh'}}>
                        <img 
                        onLoad={() => setLoad(true)}
                        src={`${process.env.REACT_APP_ICON_URL}n/${forecast.list[0].weather[0].icon}@2x.png`}
                        alt=''>
                        </img>
                        {!load && <Skeleton variant="circular" width={60} height={60}/>}
                    </div>
                    
                    <Typography>{forecast.city.name}</Typography>
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