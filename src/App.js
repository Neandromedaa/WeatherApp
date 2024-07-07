import './App.scss';
import React, { useEffect, useState } from "react";
import Weather from './components/Weather';
import MinWeather from './components/MInWeather';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import MenuApp from './components/Menu';
import { register } from 'swiper/element/bundle';
import * as testContent from './data/forecast.json';
import { useMemo } from 'react';
import { forecastContex } from './components/forecastContext';
register();

function App() {
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [metric, setMetric] = useState('C');
    const [loadWeather, setLoadWeather] = useState(false);


    const cardLoadValue = useMemo(() => ({
        metric,
        setMetric,
        forecast,
        loadWeather,
        setLoadWeather,
      }), [metric, setMetric, forecast, loadWeather, setLoadWeather]);
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });
    }, []);

    useEffect(() => {
        if(process.env.REACT_APP_DEBUG !== 'debug'){    
            const delay = () => {
                setTimeout((() => setForecast(testContent)), 500);
                setLoadWeather(true);
            }
            delay();
        } 
        else{
            const fetchData = async () => {
                await fetch(`${process.env.REACT_APP_WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&cnt=10&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
                        .then(res => res.json())
                        .then(result => {
                            if(result.cod === '200'){
                                setForecast(result);
                                setLoadWeather(true);
                            }
                        })
            }
            fetchData();
        }
    }, [lat, lon])

    return (
        <div className='main'>
            <forecastContex.Provider value={cardLoadValue}>
                <MenuApp/>
                <div className='App'>
                    {(typeof forecast.city != 'undefined') ? (
                        <>
                            <div>
                                <Weather lat={lat} lon={lon} setLat={setLat} setLon={setLon}/>
                            </div>
                            <swiper-container
                                pagination
                                slides-per-view={3}
                                speed={400}
                            >
                                <MinWeather next={1}/>
                                <MinWeather next={2}/>
                                <MinWeather next={3}/>
                                <MinWeather next={4}/>
                                <MinWeather next={5}/>
                                <MinWeather next={6}/>
                                <MinWeather next={7}/>
                                <MinWeather next={8}/>
                                <MinWeather next={9}/>
                            </swiper-container>
                        </>
                    ): (
                    <div>
                        <Backdrop open style={{'backgroundColor': '#20648a'}}>
                            <CircularProgress style={{'color': '#dfeaf0'}}/>
                        </Backdrop>
                    </div>
                    )}
                </div>
            </forecastContex.Provider>
        </div>
    );
}

export default App;
