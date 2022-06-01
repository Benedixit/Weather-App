import { Card, Row, Col } from "react-bootstrap";
import wind from '../images/wind.jpg'


const Wind = ({list}) => {

    const styles = {
        backgroundImage: `url(${wind})`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
        width: "80%"
    }

    const windSpeed = list && list[0]?.wind?.speed

    return(<>
    <Card style={styles}>
        <Card.Body className="text-white">
            <Row className="mt-2">
                <Col sm={12}><Card.Text className="fw-bold pt-3">Wind Speed</Card.Text></Col>
            </Row>
            <Row sm={12}>
                <Card.Text className="py-4">
                    <span className="fw-bold fs-3">
                        {windSpeed} mph</span> {windSpeed < 18 ? "Gentle": "Strong"}
                </Card.Text></Row>  
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            </Card.Text>

        </Card.Body>
    </Card>
    
    </>
       
    )



}


export default Wind