import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import Buttton from "@mui/material/Button"
import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
const { useEffect, useState } = require("react")

const CARGANDO = 1
const LISTO = 2
const ERROR = 3

const IndexPage = (props) => {

    let [data, setData] = useState([]); // => [{name, id},]
    let [status, setStatus] = useState(CARGANDO);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/")
            .then((data) => {
                setData(data.data.results.map((datum) => {
                    let splited_url = datum.url.split("/")
                    let id = splited_url[splited_url.length - 2]
                    return {id: id, name: datum.name}
                }));
                setStatus(LISTO);

            })
            .catch((error) => {
                console.log(error)
                setStatus(ERROR);
            })

    }, []);

    return (
        <div>
        {
            status === CARGANDO ?
            <h1>Cargando...</h1> :
            null
        }

        {
            status === LISTO ?
            <div>
                <h1>Bienvenido a la SWAPI</h1>
                <small>Encontramos {data.length} personajes</small>
                <div>
                <Timeline position="left">
                    
                
                    {
                        data.map((datum, index) =>
                            <TimelineItem key={`item-${index}`}>
                                    <TimelineSeparator key={`sep-${index}`}>
                                    <TimelineDot key={`dot-${index}`} color="secondary" />
                                    <TimelineConnector key={`conn-${index}`} />
                                    </TimelineSeparator>
                                    <TimelineContent key={`cont-${index}`}>{datum.name}</TimelineContent>
                                </TimelineItem>
                        )
                    }
                    </Timeline>
                </div>
            </div> :
            null
        }
        {
            status === ERROR ?
            <h1>Lo siento, intente nuevamente</h1> :
            null
        }
        </div>
    )
}

export default IndexPage;