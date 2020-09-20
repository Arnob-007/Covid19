import React from 'react'
import {Map, TileLayer, Circle, Popup} from "react-leaflet"
import numeral from 'numeral'
import './Mapped.css'

const casesTypeObj = {
    cases: {
        color: "red",
        multiply: 1000,
    },
    recovered: {
        color: "green",
        multiply: 1000,
    },
    deaths: {
        color: "red",
        multiply: 2000,
    },
}

const Mapped = ({countries, center, zoom, casesType = "cases"}) => {

    

    return (
        <div className = "mapped">
            <Map className = "mapped__map" center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {countries?.map(country => 
                    <Circle
                        center = {[country.countryInfo.lat, country.countryInfo.long]}
                        fillOpacity = {0.4}
                        color = {casesTypeObj[casesType].color}
                        fillColor = {casesTypeObj[casesType].color}
                        radius = {Math.sqrt(country[casesType]) * casesTypeObj[casesType].multiply}
                    >
                        <Popup>
                            <div className = "info__container">
                                <div 
                                    className = "info__flag" 
                                    style = {{backgroundImage: `url(${country.countryInfo.flag})`}}>
                                </div>
                                <div className = "info__name">{country.country}</div>
                                <div className = "info__data">Cases: {numeral( country.cases).format("0.0a")}</div>
                                <div className = "info__data">Recovered: {numeral( country.recovered).format("0.0a")} </div>
                                <div className = "info__data">Deaths: {numeral( country.deaths).format("0.0a")} </div>
                            </div>
                        </Popup>
                    </Circle>
                )}
            </Map>
        </div>
    )
}

export default Mapped
