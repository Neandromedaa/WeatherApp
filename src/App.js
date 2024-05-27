import './App.scss';
import React, { useEffect, useState } from "react";
import Weather from './components/Weather';
import MinWeather from './components/MInWeather';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import MenuApp from './components/Menu';
import { register } from 'swiper/element/bundle';
import * as testContent from './data/forecast.json';
register();
function App() {
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);
    const [forecast, setForecast] = useState([]);
    
    useEffect(() => {
        console.log(process.env.REACT_APP_DEBUG)
        if(process.env.REACT_APP_DEBUG){    
            const delay = () => {
                setTimeout((() => setForecast(testContent)), 500)
            }
            delay();
        } 
        else{
            const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(position => {
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            });
            await fetch(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
                    .then(res => res.json())
                    .then(result => {
                    setForecast(result)
                    })
            }
            fetchData();
        }
    }, [lat, lon])
    
    

    return (
        <div className='main'>
            <MenuApp />
            <div className='App'>
                {(typeof forecast.city != 'undefined') ? (
                    <>
                        <div>
                        <Weather forecast={forecast}/>
                        </div>
                        <swiper-container
                            pagination
                            slides-per-view={3}
                            speed={400}
                        >
                            <MinWeather next={1} forecast={forecast}/>
                            <MinWeather next={2} forecast={forecast}/>
                            <MinWeather next={3} forecast={forecast}/>
                            <MinWeather next={4} forecast={forecast}/>
                            <MinWeather next={5} forecast={forecast}/>
                            <MinWeather next={6} forecast={forecast}/>
                            <MinWeather next={7} forecast={forecast}/>
                            <MinWeather next={8} forecast={forecast}/>
                            <MinWeather next={9} forecast={forecast}/>
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
        </div>
    );
}

export default App;
