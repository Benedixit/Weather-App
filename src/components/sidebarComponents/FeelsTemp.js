import { Card, Row, Col } from "react-bootstrap";
import temperature from '../images/temperature.jpg'

const FeelsTemp = ({list}) => {

    const styles = {
        backgroundImage: `url(${temperature})`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
        width: "80%"
    }


    const feels_like = list && list[0].main.feels_like
    

    let temp_desc
    switch (true) {
        case feels_like <= 10:
            temp_desc = "Freezing"
            break;
        case feels_like <= 20 && feels_like > 10:
            temp_desc = "Cold"
            break;
        case feels_like <= 30 && feels_like > 20:
            temp_desc = "Cool"
            break;
        case feels_like <= 40 && feels_like > 30:
            temp_desc = "Warm"
            break;
        default:
            temp_desc = "Very Hot"
            break;
    }
    return(<>
    <Card style={styles}>
        <Card.Body className="text-white">
            <Row className="mt-2">
                <Col sm={12}><Card.Text className="fw-bold pt-3">Feels Like</Card.Text></Col>
            </Row>
            <Row sm={12}>
                <Card.Text className="py-4">
                    <span className="fw-bold fs-3">
                        {feels_like}°C</span> {temp_desc}
                </Card.Text>
            </Row>  
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            </Card.Text>

        </Card.Body>
    </Card>
    
    </>
       
    )



}


export default FeelsTemp