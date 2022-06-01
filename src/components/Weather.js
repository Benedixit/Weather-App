import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Forecast from "./mainComponents/Forecast";
import TempChart from "./mainComponents/TempChart";
import Sidebar from "./Sidebar";


const Weather = () => {
    const [longitude, setLongitude]= useState("")
    const [latitude, setLatitude] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [list, setList] = useState("")



    const CITY_BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client"
    const API_KEY = process.env.REACT_APP_API_KEY
    const FORECAST_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast/"

    
    
    useEffect(() => { 
        getWeather()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const getWeather = async() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })

        const CITY_URL = `${CITY_BASE_URL}?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        const city_response = await axios(CITY_URL)
        const city_data = await city_response.data
        setCity(city_data.principalSubdivision)

        const FORECAST_URL = `${FORECAST_BASE_URL}?q=${city_data.principalSubdivision}&units=metric&cnt=7&appid=${API_KEY}`
        const forecast_response = await axios (FORECAST_URL)
        const forecast_data = await forecast_response.data
        setCountry(forecast_data.city.country)
        setList(forecast_data.list)
            
        
    }

    console.log(longitude)


    const handleSubmit = async () => {
        
            try {
                const FORECAST_URL = `${FORECAST_BASE_URL}?q=${city}&units=metric&cnt=7&appid=${API_KEY}`
                const response = await axios(FORECAST_URL)
                const data = await response.data
                setCountry(data.city.country)
                setList(data.list)
            } catch (error) {
                 console.log(error)
            }
            
    }



    const handleChange = (e) => {

        setCity(e.target.value)
        setCountry("")
    }

   
    return (
        <>
        <Row>
        <Sidebar city={city} 
             country={country}
             list={list}
             handleChange={handleChange}
             handleSubmit={handleSubmit}
            />
            
            <Col md={9} className="d-table-cell">
                <div className="row gy-6" style={{padding: "30px"}}>
                    <div className="col-12">
                        <TempChart list={list} />
                    </div>
                    <div className="col-12 my-6">
                        <Forecast list={list} />
                    </div>
                </div>
            </Col>
        </Row>
        </>
    )


}


export default Weather