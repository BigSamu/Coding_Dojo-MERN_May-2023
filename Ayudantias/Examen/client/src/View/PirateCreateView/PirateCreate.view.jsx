import { useState } from "react"
import { Button, Col, Row } from "react-bootstrap";
import styles from "./PirateCreate.module.css"
import PiratesTemplate from "../../Template/Pirates.template";

const PirateCreateView = (props) => {
    const [data, setData] = useState({});
    const positions = ["Captain", "First Mate", "Quarter Master", "Boatswain", "Powder Monkey"]

    const changeHandler = (e) => {
        let new_data = {
            ...data,
            [e.target.name]: e.target.value
        };
        setData(new_data)
    }

    return (
        <PiratesTemplate title="Add pirate" hasButton={true} buttonText="Pirate crew" buttonAction={() => {return}}>
        <Row className="d-flex align-items-stretch my-3">
            <Col md={6} className="">
                <div>
                    <label>Pirate Name:</label>
                    <div>
                        <input type="text" name="name" onChange={changeHandler} value={data["name"]}/>
                    </div>
                </div>
                <div>
                    <label>Image URL:</label>
                    <div>
                        <input type="text" name="photo" onChange={changeHandler} value={data["photo"]}/>
                    </div>
                </div>
                <div>
                    <label># of Treasures Chests:</label>
                    <div>
                        <input type="number" min={0} name="treasure" onChange={changeHandler} value={data["treasure"]}/>
                    </div>
                </div>
                <div>
                    <label>Pirate catch phrase:</label>
                    <div>
                        <textarea name="quote" onChange={changeHandler} value={data["quote"]}>

                        </textarea>
                    </div>
                </div>
                
            </Col>
            <Col md={6} className="">
                <div>
                    <label>Crew Position:</label>
                    <div>
                        <select name="position" onChange={changeHandler} value={data["position"]}>
                            {positions.map((elemt, idx) => {
                                return <option key={idx} value={elemt}>{elemt}</option>
                            })}
                        </select>
                    </div>
                </div>

                <div>
                    <div>
                        <input type="checkbox" name="peg_leg" onChange={changeHandler} value={data["peg_leg"]}/>
                        <label>Peg Leg</label>
                    </div>
                    <div>
                        <input type="checkbox" name="eye_patch" onChange={changeHandler} value={data["eye_patch"]}/>
                        <label>Eye Patch</label>
                    </div>
                    <div>
                        <input type="checkbox" name="hook_hand" onChange={changeHandler} value={data["hook_hand"]}/>
                        <label>Hook Hand</label>
                    </div>
                    <div>
                        <Button className={styles.endButton}>Add Pirate</Button>
                    </div>
                </div>
                
            </Col>
            
        </Row>

    </PiratesTemplate>

        )
}

export default PirateCreateView