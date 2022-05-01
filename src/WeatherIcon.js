import React from "react";
import { ReactSkycon, SkyconType } from "react-skycons-extended";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "SHOWERS_DAY",
    "09n": "SHOWERS_NIGHT",
    "10d": "SHOWERS_DAY",
    "10n": "SHOWERS_NIGHT",
    "11d": "THUNDER_RAIN",
    "11n": "THUNDER_RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const example = {
    icon: SkyconType.SHOWERS_DAY,
    size: 50,
    animate: true,
    color: {
      sun: "darkorange",
      light_cloud: "#5C636A",
      moon: "darkblue",
      rain: "darkblue",
    },
  };

  return (
    <ReactSkycon
      icon={codeMapping[props.code]}
      color={example.color}
      size={example.size}
      animate={example.animate}
    />
  );
}
