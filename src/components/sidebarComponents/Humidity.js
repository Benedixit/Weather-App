import { Card, Row, Col } from "react-bootstrap";
import humid from '../images/humid.jpg'

const Humidity = ({list}) => {

    const styles = {
        backgroundImage: `url(${humid})`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
        width: "80%"
    }
    const humidity = list && list[0].main.humidity
    return(<>
    <Card style={styles}>
        <Card.Body className="text-white">
            <Row className="mt-2">
                <Col sm={12}><Card.Text className="fw-bold pt-3">Humidity</Card.Text></Col>

            </Row>
            <Row sm={12}><Card.Text className="py-4">
                <span className="fw-bold fs-3">{humidity}%</span> {humidity > 50 ? "High": "Low"}</Card.Text></Row>  
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
            </Card.Text>

        </Card.Body>
    </Card>
    
    </>
       
    )



}


export default Humidity