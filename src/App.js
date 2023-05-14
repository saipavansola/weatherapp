import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('Hyderabad')
  const[country,setCountry]=useState('India')
  const[state,setState]=useState("Telangana")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},${state},${country}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = () => {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
      setCountry('')
      setState('')
    
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          placeholder='Enter Location'
          className='input-value'
          type="search" />
          <br />
          <input
          value={state}
          onChange={event => setState(event.target.value)}
          placeholder='Enter State'
          className='input-value'
          type="search" />
          <br />
          <input
          value={country}
          onChange={event => setCountry(event.target.value)}
          placeholder='Enter country'
          className='input-value'
          type="search" />
          <br />
          <button type='button' onClick={searchLocation}>search</button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <h3 className='city-name'>{data.name}</h3>
          </div>
          <div className='temp-data'>
            {data.main ? <h3>Temperature : {data.main.temp.toFixed()}°C</h3> : null}
            {data.weather ? <h3>Weather conditions: {data.weather[0].description}</h3> : null}
        
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>Min-temp : {data.main.temp_min.toFixed()}°C</p> : null}
              {data.main ? <p className='bold'>Max-temp : {data.main.temp_max.toFixed()}°C</p> : null}
            </div>
              {data.main ? <p className='bold'>Humidity : {data.main.humidity}%</p> : null}
          
              {data.wind ? <p className='bold'>Wind Speed : {data.wind.speed.toFixed()} MPH</p> : null}
          </div>
        }



      </div>
    </div>
  );
}

export default App;
