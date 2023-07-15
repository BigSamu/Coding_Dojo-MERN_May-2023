import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
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
                    {
                        data.map((datum, index) =>
                            <div key={`div-${index}`}>
                                <button  
                                    onClick={()=> {
                                        navigate(`/${datum.id}`, {state: datum})
                                    }}
                                    key={`btn-${index}`}>
                                        {datum.name}
                                </button>
                            </div>
                        )
                    }
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