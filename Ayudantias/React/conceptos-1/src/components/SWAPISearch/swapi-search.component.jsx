import axios from "axios"
import { useEffect, useState } from "react"

const SWAPISearch = (props) => {
    let [data, setData] = useState(null);
    let [input, setInput] = useState("");

    let filterTimeout

    let lllamarAPI = () => {
        axios.get('https://swapi.dev/api/people/')
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    let lllamarAPIPersonaje = (id) => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        lllamarAPI()
    }, [])

    useEffect(() => {
        clearTimeout(filterTimeout)
        if (input !== "") {
            filterTimeout = setTimeout(() => {
                lllamarAPIPersonaje(input);
            }, 500)
        }
    }, [input])

    const onChange = (input) => {
        setInput(input)
    }


    return (
        <div>
            <div>
                <label htmlFor="">ID Personaje:</label>
                <input type="text" value={input} onChange={(e) => {
                    onChange(e.target.value)
                }} />
            </div>

            <pre>
                {JSON.stringify(data)}
            </pre>
        </div>
    )
}

export default SWAPISearch;