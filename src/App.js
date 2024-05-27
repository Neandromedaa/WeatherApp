import './App.scss';
import React, { useEffect, useState } from "react";
import Weather from './components/Weather';
import MinWeather from './components/MInWeather';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import MenuApp from './components/Menu';
import { register } from 'swiper/element/bundle';
register();
function App() {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  // const [data, setData] = useState([]);
  const [forecast, setForecast] = useState([]);
  
  const dataReady = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1716811200,
            "main": {
                "temp": 25.34,
                "feels_like": 25.18,
                "temp_min": 25.34,
                "temp_max": 27.75,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1021,
                "humidity": 48,
                "temp_kf": -2.41
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 15
            },
            "wind": {
                "speed": 1.11,
                "deg": 223,
                "gust": 2.4
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-27 12:00:00"
        },
        {
            "dt": 1716822000,
            "main": {
                "temp": 25.43,
                "feels_like": 25.26,
                "temp_min": 25.43,
                "temp_max": 25.62,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1020,
                "humidity": 47,
                "temp_kf": -0.19
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 31
            },
            "wind": {
                "speed": 3.09,
                "deg": 212,
                "gust": 3.85
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-27 15:00:00"
        },
        {
            "dt": 1716832800,
            "main": {
                "temp": 21.12,
                "feels_like": 21.06,
                "temp_min": 19.01,
                "temp_max": 21.12,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1020,
                "humidity": 68,
                "temp_kf": 2.11
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 27
            },
            "wind": {
                "speed": 1.24,
                "deg": 231,
                "gust": 1.34
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-27 18:00:00"
        },
        {
            "dt": 1716843600,
            "main": {
                "temp": 16.86,
                "feels_like": 16.79,
                "temp_min": 16.86,
                "temp_max": 16.86,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 1020,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 50
            },
            "wind": {
                "speed": 1.44,
                "deg": 221,
                "gust": 0.9
            },
            "visibility": 10000,
            "pop": 0.56,
            "rain": {
                "3h": 0.38
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-05-27 21:00:00"
        },
        {
            "dt": 1716854400,
            "main": {
                "temp": 15.54,
                "feels_like": 15.45,
                "temp_min": 15.54,
                "temp_max": 15.54,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 1020,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 55
            },
            "wind": {
                "speed": 0.72,
                "deg": 220,
                "gust": 0.46
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-05-28 00:00:00"
        },
        {
            "dt": 1716865200,
            "main": {
                "temp": 16.67,
                "feels_like": 16.69,
                "temp_min": 16.67,
                "temp_max": 16.67,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 1020,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 87
            },
            "wind": {
                "speed": 1.79,
                "deg": 227,
                "gust": 3.45
            },
            "visibility": 10000,
            "pop": 0.59,
            "rain": {
                "3h": 0.4
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-28 03:00:00"
        },
        {
            "dt": 1716876000,
            "main": {
                "temp": 21.8,
                "feels_like": 21.73,
                "temp_min": 21.8,
                "temp_max": 21.8,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1019,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 67
            },
            "wind": {
                "speed": 1.8,
                "deg": 253,
                "gust": 2.34
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-28 06:00:00"
        },
        {
            "dt": 1716886800,
            "main": {
                "temp": 25.48,
                "feels_like": 25.26,
                "temp_min": 25.48,
                "temp_max": 25.48,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1019,
                "humidity": 45,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 43
            },
            "wind": {
                "speed": 3.13,
                "deg": 290,
                "gust": 4.01
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-28 09:00:00"
        },
        {
            "dt": 1716897600,
            "main": {
                "temp": 25.81,
                "feels_like": 25.46,
                "temp_min": 25.81,
                "temp_max": 25.81,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1018,
                "humidity": 39,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 26
            },
            "wind": {
                "speed": 3.69,
                "deg": 319,
                "gust": 4.36
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-28 12:00:00"
        },
        {
            "dt": 1716908400,
            "main": {
                "temp": 24.02,
                "feels_like": 23.68,
                "temp_min": 24.02,
                "temp_max": 24.02,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1017,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.87,
                "deg": 284,
                "gust": 3.7
            },
            "visibility": 10000,
            "pop": 0.63,
            "rain": {
                "3h": 0.43
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-28 15:00:00"
        },
        {
            "dt": 1716919200,
            "main": {
                "temp": 18.33,
                "feels_like": 18.18,
                "temp_min": 18.33,
                "temp_max": 18.33,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1017,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 48
            },
            "wind": {
                "speed": 2.05,
                "deg": 248,
                "gust": 3.16
            },
            "visibility": 10000,
            "pop": 0.94,
            "rain": {
                "3h": 0.93
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-28 18:00:00"
        },
        {
            "dt": 1716930000,
            "main": {
                "temp": 16.98,
                "feels_like": 16.98,
                "temp_min": 16.98,
                "temp_max": 16.98,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1016,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.4,
                "deg": 259,
                "gust": 1.35
            },
            "visibility": 10000,
            "pop": 0.97,
            "rain": {
                "3h": 1.08
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-05-28 21:00:00"
        },
        {
            "dt": 1716940800,
            "main": {
                "temp": 16.15,
                "feels_like": 16.04,
                "temp_min": 16.15,
                "temp_max": 16.15,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1016,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 1.31,
                "deg": 236,
                "gust": 1.69
            },
            "visibility": 10000,
            "pop": 0.76,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-05-29 00:00:00"
        },
        {
            "dt": 1716951600,
            "main": {
                "temp": 17.16,
                "feels_like": 17.07,
                "temp_min": 17.16,
                "temp_max": 17.16,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1016,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 84
            },
            "wind": {
                "speed": 1.14,
                "deg": 177,
                "gust": 1.44
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-29 03:00:00"
        },
        {
            "dt": 1716962400,
            "main": {
                "temp": 21.19,
                "feels_like": 21.09,
                "temp_min": 21.19,
                "temp_max": 21.19,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1016,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 70
            },
            "wind": {
                "speed": 1.84,
                "deg": 164,
                "gust": 2.44
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-29 06:00:00"
        },
        {
            "dt": 1716973200,
            "main": {
                "temp": 23.54,
                "feels_like": 23.41,
                "temp_min": 23.54,
                "temp_max": 23.54,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1015,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 2.42,
                "deg": 173,
                "gust": 2.92
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-29 09:00:00"
        },
        {
            "dt": 1716984000,
            "main": {
                "temp": 25.9,
                "feels_like": 25.69,
                "temp_min": 25.9,
                "temp_max": 25.9,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1013,
                "humidity": 44,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 1.95,
                "deg": 168,
                "gust": 2.05
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-29 12:00:00"
        },
        {
            "dt": 1716994800,
            "main": {
                "temp": 24.72,
                "feels_like": 24.58,
                "temp_min": 24.72,
                "temp_max": 24.72,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1011,
                "humidity": 51,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 44
            },
            "wind": {
                "speed": 2.81,
                "deg": 302,
                "gust": 3.33
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-29 15:00:00"
        },
        {
            "dt": 1717005600,
            "main": {
                "temp": 16.35,
                "feels_like": 16.34,
                "temp_min": 16.35,
                "temp_max": 16.35,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1012,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 65
            },
            "wind": {
                "speed": 1.36,
                "deg": 158,
                "gust": 2.35
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 3.96
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-29 18:00:00"
        },
        {
            "dt": 1717016400,
            "main": {
                "temp": 15.73,
                "feels_like": 15.73,
                "temp_min": 15.73,
                "temp_max": 15.73,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1012,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.14,
                "deg": 165,
                "gust": 4.07
            },
            "visibility": 10000,
            "pop": 0.21,
            "rain": {
                "3h": 0.13
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-05-29 21:00:00"
        },
        {
            "dt": 1717027200,
            "main": {
                "temp": 15.45,
                "feels_like": 15.53,
                "temp_min": 15.45,
                "temp_max": 15.45,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1012,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 0.89,
                "deg": 124,
                "gust": 1.01
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-05-30 00:00:00"
        },
        {
            "dt": 1717038000,
            "main": {
                "temp": 16.55,
                "feels_like": 16.69,
                "temp_min": 16.55,
                "temp_max": 16.55,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1012,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 1.39,
                "deg": 116,
                "gust": 2.21
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-30 03:00:00"
        },
        {
            "dt": 1717048800,
            "main": {
                "temp": 20.68,
                "feels_like": 20.74,
                "temp_min": 20.68,
                "temp_max": 20.68,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1012,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 86
            },
            "wind": {
                "speed": 2.04,
                "deg": 134,
                "gust": 2.54
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-30 06:00:00"
        },
        {
            "dt": 1717059600,
            "main": {
                "temp": 25,
                "feels_like": 24.97,
                "temp_min": 25,
                "temp_max": 25,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1011,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 1.23,
                "deg": 153,
                "gust": 1.52
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-30 09:00:00"
        },
        {
            "dt": 1717070400,
            "main": {
                "temp": 26.5,
                "feels_like": 26.5,
                "temp_min": 26.5,
                "temp_max": 26.5,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1010,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 1.45,
                "deg": 147,
                "gust": 1.73
            },
            "visibility": 10000,
            "pop": 0.3,
            "rain": {
                "3h": 0.31
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-30 12:00:00"
        },
        {
            "dt": 1717081200,
            "main": {
                "temp": 23.01,
                "feels_like": 23.09,
                "temp_min": 23.01,
                "temp_max": 23.01,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1010,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 94
            },
            "wind": {
                "speed": 2.76,
                "deg": 57,
                "gust": 3.9
            },
            "visibility": 10000,
            "pop": 0.79,
            "rain": {
                "3h": 0.46
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-30 15:00:00"
        },
        {
            "dt": 1717092000,
            "main": {
                "temp": 18.06,
                "feels_like": 18.09,
                "temp_min": 18.06,
                "temp_max": 18.06,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1011,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 83
            },
            "wind": {
                "speed": 2.83,
                "deg": 83,
                "gust": 5.4
            },
            "visibility": 10000,
            "pop": 0.78,
            "rain": {
                "3h": 0.22
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-30 18:00:00"
        },
        {
            "dt": 1717102800,
            "main": {
                "temp": 16.06,
                "feels_like": 16.18,
                "temp_min": 16.06,
                "temp_max": 16.06,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1010,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.83,
                "deg": 78,
                "gust": 2.33
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 2.48
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-05-30 21:00:00"
        },
        {
            "dt": 1717113600,
            "main": {
                "temp": 15.41,
                "feels_like": 15.51,
                "temp_min": 15.41,
                "temp_max": 15.41,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1011,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.72,
                "deg": 123,
                "gust": 2.03
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 0.29
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-05-31 00:00:00"
        },
        {
            "dt": 1717124400,
            "main": {
                "temp": 16.79,
                "feels_like": 16.93,
                "temp_min": 16.79,
                "temp_max": 16.79,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1011,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.8,
                "deg": 148,
                "gust": 4.27
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-31 03:00:00"
        },
        {
            "dt": 1717135200,
            "main": {
                "temp": 20.62,
                "feels_like": 20.64,
                "temp_min": 20.62,
                "temp_max": 20.62,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1012,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 90
            },
            "wind": {
                "speed": 2.45,
                "deg": 146,
                "gust": 3.19
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-31 06:00:00"
        },
        {
            "dt": 1717146000,
            "main": {
                "temp": 24.46,
                "feels_like": 24.29,
                "temp_min": 24.46,
                "temp_max": 24.46,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1012,
                "humidity": 51,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 2.72,
                "deg": 133,
                "gust": 4.03
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-31 09:00:00"
        },
        {
            "dt": 1717156800,
            "main": {
                "temp": 26.05,
                "feels_like": 26.05,
                "temp_min": 26.05,
                "temp_max": 26.05,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1012,
                "humidity": 45,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 3.66,
                "deg": 162,
                "gust": 5.14
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-31 12:00:00"
        },
        {
            "dt": 1717167600,
            "main": {
                "temp": 22.06,
                "feels_like": 22.04,
                "temp_min": 22.06,
                "temp_max": 22.06,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1011,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 94
            },
            "wind": {
                "speed": 2.34,
                "deg": 116,
                "gust": 5.98
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-31 15:00:00"
        },
        {
            "dt": 1717178400,
            "main": {
                "temp": 20.7,
                "feels_like": 20.68,
                "temp_min": 20.7,
                "temp_max": 20.7,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1012,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 2.85,
                "deg": 100,
                "gust": 6.95
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-05-31 18:00:00"
        },
        {
            "dt": 1717189200,
            "main": {
                "temp": 16.87,
                "feels_like": 16.88,
                "temp_min": 16.87,
                "temp_max": 16.87,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1012,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 27
            },
            "wind": {
                "speed": 1.94,
                "deg": 126,
                "gust": 1.84
            },
            "visibility": 10000,
            "pop": 0.28,
            "rain": {
                "3h": 0.12
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-05-31 21:00:00"
        },
        {
            "dt": 1717200000,
            "main": {
                "temp": 15.49,
                "feels_like": 15.55,
                "temp_min": 15.49,
                "temp_max": 15.49,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1012,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 37
            },
            "wind": {
                "speed": 2.54,
                "deg": 97,
                "gust": 5.45
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-06-01 00:00:00"
        },
        {
            "dt": 1717210800,
            "main": {
                "temp": 17.07,
                "feels_like": 17.16,
                "temp_min": 17.07,
                "temp_max": 17.07,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1011,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 69
            },
            "wind": {
                "speed": 2.52,
                "deg": 120,
                "gust": 6.82
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-06-01 03:00:00"
        },
        {
            "dt": 1717221600,
            "main": {
                "temp": 21.72,
                "feels_like": 21.8,
                "temp_min": 21.72,
                "temp_max": 21.72,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1012,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 63
            },
            "wind": {
                "speed": 3.51,
                "deg": 154,
                "gust": 5.48
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-06-01 06:00:00"
        },
        {
            "dt": 1717232400,
            "main": {
                "temp": 25.76,
                "feels_like": 25.64,
                "temp_min": 25.76,
                "temp_max": 25.76,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1011,
                "humidity": 48,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 86
            },
            "wind": {
                "speed": 4.11,
                "deg": 166,
                "gust": 5.73
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-06-01 09:00:00"
        }
    ],
    "city": {
        "id": 472452,
        "name": "Vologodsko-Yamskaya Sloboda",
        "coord": {
            "lat": 59.8842,
            "lon": 30.3311
        },
        "country": "RU",
        "population": 0,
        "timezone": 10800,
        "sunrise": 1716771401,
        "sunset": 1716836123
    }
}
//   useEffect(() => {
//     const fetchData = async () => {
//       navigator.geolocation.getCurrentPosition(position => {
//         setLat(position.coords.latitude);
//         setLon(position.coords.longitude);
//       });

//       // await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
//       //       .then(res => res.json())
//       //       .then(result => {
//       //         setData(result)
//       //       });
//       await fetch(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
//             .then(res => res.json())
//             .then(result => {
//               setForecast(result)
//             })
//     }
//     fetchData();
//   }, [lat, lon])

  useEffect(() => {
    const delay = () => {
      setTimeout(() => {
        setForecast(dataReady);
      }, 500)
    }
    delay();
  }, [])

  return (
    <div className='main'>
      <MenuApp />
      <div className='App'>
        {(typeof forecast.city != 'undefined') ? (
          <>
            <div>
              <Weather forecast={forecast}/>
            </div>
            {/* <div className='minWeather'> */}
              <swiper-container
                pagination
                slides-per-view={3}
                speed={400}
                // auto-height

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
            {/* </div> */}
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
