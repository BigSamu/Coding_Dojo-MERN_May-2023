import { Col, Row, Card, Button} from "react-bootstrap"
import style from "./PirateCard.module.css"

const PirateCardComponent = (props) => {
    return (
        <Row className="bg-white py-2 my-3">
            <Col xs={3} >
                <img 
                    className={style.pirateImage} 
                    src={props.image} 
                    alt="Pirate image" 
                />
            </Col>
            <Col xs={9}>
                <Row className="mt-3">
                    <Col>
                        <Card.Title className="text-center">{props.name}</Card.Title>
                    </Col>
                </Row>
                <Row className="my-3" >
                    <Col className="d-flex justify-content-center">
                        <Button className="mx-5 btn-danger">View Pirate</Button>
                        <Button className="mx-5 btn-danger">Walk the plank</Button>
                    </Col>
                </Row>
            </Col>    
        </Row>
    )
}

export default PirateCardComponent