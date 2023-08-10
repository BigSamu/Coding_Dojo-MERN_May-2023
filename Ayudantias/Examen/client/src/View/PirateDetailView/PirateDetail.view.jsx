import { Col, Row } from "react-bootstrap"
import PiratesTemplate from "../../Template/Pirates.template"
import PirateValueComponent from "../../Components/PirateValue/PirateValue.component"
import style from "./PirateDetail.module.css"


const PirateDetailView = (props) => {

    const pirateData = {
        name: "Jack Sparrow",
        photo: "https://i.pinimg.com/550x/3e/1c/82/3e1c82385d98040224f65175d2e5f75c.jpg",
        quote: "Parley !!!",
        treasure: 6,
        position: "Captain",
        peg_leg: false,
        eye_patch: false,
        hook_hand: false
    }





    return <PiratesTemplate title={pirateData.name} hasButton={false}>
        <Row className="d-flex align-items-stretch my-3">
            <Col md={6} className="">
                <Row className="d-flex justify-content-center">
                    <img className={`${style["mw-75"]} ${style["mh-400"]} ${style["keep-aspect"]}`} src={pirateData.photo} alt="Pirate picture"/>
                </Row>
                <Row className="d-flex justify-content-center">
                    <h3 className="text-center text-lg">{pirateData.quote}</h3>
                </Row>

            </Col>
            <Col md={6} className="bg-white p-5 rounded border border-dark border-3 ">
                <PirateValueComponent 
                    keyLabel={"position"} 
                    valueLabel={pirateData["position"]} 
                    hasButton={false} />
                <PirateValueComponent 
                    keyLabel={"treasure"} 
                    valueLabel={pirateData["treasure"]} 
                    hasButton={false} />
                <PirateValueComponent 
                    keyLabel={"Peg leg"} 
                    valueLabel={pirateData["peg_leg"] ? "YES" : "NO"} 
                    hasButton={true}
                    value={pirateData["peg_leg"]}
                    buttonText={!pirateData["peg_leg"] ? "YES" : "NO"} 
                    buttonAction={()=>{
                        console.log("Pata de palo");
                }}
                />
                <PirateValueComponent 
                    keyLabel={"Eye Patch"} 
                    valueLabel={pirateData["eye_patch"] ? "YES" : "NO"} 
                    hasButton={true}
                    buttonText={!pirateData["eye_patch"] ? "YES" : "NO"} 
                    value={pirateData["eye_patch"]}
                    buttonAction={()=>{
                        console.log("Parche en el ojo");
                }}
                />
                <PirateValueComponent 
                    keyLabel={"Hook Hand"} 
                    valueLabel={pirateData["hook_hand"] ? "YES" : "NO"} 
                    hasButton={true}
                    buttonText={!pirateData["hook_hand"] ? "YES" : "NO"} 
                    value={pirateData["hook_hand"]}
                    buttonAction={()=>{
                        console.log("Mano de gancho");
                }}
                />

            </Col>
            
        </Row>

    </PiratesTemplate>
}

export default PirateDetailView;