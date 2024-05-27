import React from 'react';
import moment from 'moment';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardHeader, Icon, IconButton } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import RefreshIcon from '@mui/icons-material/Refresh';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useState } from 'react';
import { Skeleton } from '@mui/material';

function MinWeather({next, forecast}){
    const [load, setLoad] = useState(false)
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
                    }}
                >
                    <CardContent 
                        sx={{
                            display: 'flex',
                            flexFlow: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#b3e4ff',
                            width: "min(30vw, 150px)",
                            height: '22vh'
                        }}
                    >
                        <div style={{height: '11vh'}}>
                            <img 
                                onLoad={() => setLoad(true)}
                                src={`${process.env.REACT_APP_ICON_URL}n/${forecast.list[next].weather[0].icon}@2x.png`}
                                alt=''>
                            </img>
                            {!load && <Skeleton variant="circular" width={'10vw'} height={'10vw'}/>}
                        </div>
                        <Typography variant="h4">{Math.ceil(forecast.list[next].main.temp)}&deg;C</Typography>
                        <Typography>{moment().add(next, 'days').format('dddd')}</Typography>
                    </CardContent>
                </Card>
            </swiper-slide>
    );
}

export default MinWeather;