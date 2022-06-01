import {Table} from "react-bootstrap"
import heavy from "../images/heavy-rain.png"
import light from "../images/light-rain.png"
import clear from "../images/clear-sky.png"
import cloudy from "../images/cloudy.png"


const Forecast = ({list}) => {

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    return(
        <>
        
        
            <div className="flex align-self-center" style={{paddingTop: '30px', paddingBottom: '20px'}}>
                <h3 className="text-start fw-bold">Weather Forecast</h3>
            </div>
            <Table striped hover className="table-info my-12">
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Temperatures</th>
                    <th>Weather Forecast</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {list && list.map(key => {
                    const date = new Date(key.dt_txt)
                    const day = weekday[date.getUTCDay()]
                    const hours = `${date.getUTCHours()}:00`
                    const weather = key.weather[0].description
                    let imgURL
                    switch (true) {
                        case weather === 'overcast clouds' || 
                        weather=== 'broken clouds':
                            imgURL = cloudy
                            break;
                        case weather === 'light rain' ||
                        weather === 'moderate rain':
                             imgURL = light
                             break;
                        case weather === 'heavy rain' ||
                        weather === 'heavy intensity rain':
                            imgURL = heavy
                            break;
                        case weather === 'clear sky' || 
                        weather === 'scattered clouds' ||
                        weather === 'few clouds':
                            imgURL = clear
                            break;
                        default:
                            break;
                    }
                    return(<>
                    <tr key={key.dt}>
                        <td>{day}</td>
                        <td>{hours}</td>
                        <td>{key.main.temp}°C</td>
                        <td style={{textTransform: "capitalize"}}>{weather}</td>
                        <td>{<img src={imgURL} alt=""/>}</td>
                    </tr>
                   
                </>
            )
        })}
            </tbody>
        </Table>

        
        </>
    )
}

export default Forecast