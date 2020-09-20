import React, { useEffect, useState } from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import Infobox from './Infobox';
import './App.css';
import LiveCases from './LiveCases';
import LineGraph from './LineGraph';
import Mapped from './Mapped';
import "leaflet/dist/leaflet.css"

const App = () => {

  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState ("Worldwide")
  const [countryInfo, setCountryInfo] = useState()
  const [liveCases, setLiveCases] = useState([])
  const [mapCenter, setMapCenter] = useState({lat: 34.80746, lng: -40.4796})
  const [mapZoom, setMapZoom] = useState(3)
  const [mapCountries, setMapCountries] = useState([])
  const [casesType, setCasesType] = useState ("cases")

  useEffect(() => {
    
      fetch ("https://disease.sh/v3/covid-19/countries")
        .then(res => res.json())
        .then(data => {
          setCountries (data.map(country => ({
            name: country.country,
            value: country.countryInfo.iso3
          })))
          setMapCountries(data)
          setLiveCases (data.sort((a, b) => a.cases > b.cases ? -1 : 1))
      })

      fetch ("https://disease.sh/v3/covid-19/all")
          .then(res => res.json())
          .then(data => setCountryInfo (data))

  }, [])

  const onCountryChange = (e) => {

    const selectedCountry = e.target.value

    setCountry (selectedCountry)

    const url = selectedCountry === "Worldwide" 
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${selectedCountry}`
    
    fetch (url)
        .then(res => res.json())
        .then(data => {
          setCountryInfo (data)
          selectedCountry === "Worldwide" ?
          setMapCenter ({lat: 34.80746, lng: -40.4796}) :
          setMapCenter ([data.countryInfo.lat, data.countryInfo.long])
          setMapZoom (4)
        })
  }


  return (
    <div className="App">

      <div className="app__left">

        <div className="app__header">
          <h1 className = "app__title"> COVID19 TRACKER
            <div className="blink__icon"></div>
          </h1>
          <FormControl className = "app__dropdown">
            <Select
              value = {country}
              variant = "outlined"
              onChange = {onCountryChange}
            >
              <MenuItem value = "Worldwide"> Worldwide </MenuItem>
              {countries.map (country => 
                <MenuItem value = {country.value}> {country.name} </MenuItem>  
              )}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <Infobox 
            setCasesType = {() => setCasesType("cases")} 
            active = {casesType === "cases"}
            title = "CoronaVirus Cases" 
            cases = {countryInfo?.todayCases} 
            total = {countryInfo?.cases} 
          />
          <Infobox 
            setCasesType = {() => setCasesType("recovered")} 
            active = {casesType === "recovered"}
            title = "Recovered" 
            cases = {countryInfo?.todayRecovered} 
            total = {countryInfo?.recovered} 
          />
          <Infobox 
            setCasesType = {() => setCasesType("deaths")} 
            active = {casesType === "deaths"}
            title = "Deaths" 
            cases = {countryInfo?.todayDeaths} 
            total = {countryInfo?.deaths} 
          />
        </div>

        <Mapped casesType = {casesType} countries = {mapCountries} center = {mapCenter} zoom = {mapZoom}/>

      </div>

      <div className="app__right">
        <h3>Live Cases by Country</h3>
        <LiveCases countries = {liveCases}/>

        <h3 className = "New__cases">Worldwide New {casesType}</h3>
        <LineGraph casesType = {casesType}/>
      </div>

    </div>
  );
}

export default App;
