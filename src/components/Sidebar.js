import {Row, Col} from "react-bootstrap"
import cloudy from "./images/cloudy.png"
import day from "./images/day.jpg"
import night from "./images/night.jpg"
import Humidity from "./sidebarComponents/Humidity"
import Wind from "./sidebarComponents/Wind"
import FeelsTemp from "./sidebarComponents/FeelsTemp"



const Sidebar = ({city, country, handleChange, handleSubmit, list}) => {

    const date = new Date()
    const date_clean = date.toDateString()
    const hour_time = date.getHours()
    console.log(city)
    
  
    const dayStyle = {
        backgroundImage : `url(${day})`,
        backgroundSize: "cover",
    }

    const nightStyle = {
        backgroundImage : `url(${night})`,
        backgroundSize: "cover",
    }

    const cityTextStyle = {textTransform: "capitalize"}
    const weather = list && list[0].weather[0].description
    const currentTemp = list && list[0].main.temp
   

    return(
        
        <Col className="text-white" sm={3}  style={hour_time >= 6 && hour_time <=17 ? dayStyle: nightStyle}>
            <Row>
                <div className="hstack gap-1 d-flex justify-content-center py-4">
                    <input className="rounded-2" type="text" onChange={handleChange} placeholder="Add your item here..." style={{height: '40px'}} />
                    <button type="button" className="btn btn-info fw-bold" onClick={handleSubmit}>Search</button>
                </div>
            </Row>
            
            
           <div className="py-4 px-4 row d-flex align-items-center">
               <Col sm={12} style={{textAlign: "center"}}>
                   <p className="text-white badge bg-warning" style={{textTransform: "capitalize"}}>{weather}</p>
                   <h1 className="text-white fw-bold">{currentTemp}°C</h1>
                </Col>
              
           </div>
           <Row className="py-4 d-flex justify-content-center" style={{textAlign: "center"}}>
               <img src={cloudy} style={{width: "70px"}} alt="weather pic"/>
               <h1 className="text-white fs-1 fw-bold"><span style={cityTextStyle}>{city}</span>, {country}</h1>
               <p className="text-secondary">{date_clean}</p>   
           
           </Row>
            <Row style={{textAlign: "center"}}>
                <div className="d-flex justify-content-center py-4">
                    <Wind list={list}/>
                </div>
            </Row>

            <Row style={{textAlign: "center"}}>
                <div className="d-flex justify-content-center py-4">
                    <Humidity list={list}/>
                </div>
            </Row>

            <Row style={{textAlign: "center"}}>
                <div className="d-flex justify-content-center py-4">
                    <FeelsTemp list={list}/>
                </div>
            </Row>
            
            
          
        </Col>
    
    )
}

export default Sidebar