import React from 'react'
import cloudy_icon from '../assets/cloudy-icon.png'
import rain_icon from '../assets/rain-icon.png'
import snowy_icon from '../assets/snow-icon.png'
import sun_icon from '../assets/sun-icon.png'
import thunderstorm_icon from '../assets/thunderstorm-icon.png'
import windy_icon from '../assets/wind-icon.png'
import humidity_icon from '../assets/humidity-icon.png'

export const weathericons = {
    "01d" : sun_icon, 
    "01n" : sun_icon, 
    "02d" : cloudy_icon, 
    "02n" : cloudy_icon, 
    "03d" : cloudy_icon, 
    "03n" : cloudy_icon, 
    "04d" : cloudy_icon, 
    "04n" : cloudy_icon, 
    "09d" : rain_icon, 
    "09n" : rain_icon, 
    "10d" : rain_icon, 
    "10n" : rain_icon, 
    "11d" : thunderstorm_icon, 
    "11n" : thunderstorm_icon, 
    "13d" : snowy_icon, 
    "13n" : snowy_icon
}

export const defaultIcons = {
    windy_icon: windy_icon,
    humidity_icon: humidity_icon
}