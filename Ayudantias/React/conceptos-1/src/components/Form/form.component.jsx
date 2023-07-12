import { useState } from "react"

const Form = (props) => {

    let [info, setInfo] = useState({
        first_name: "",
        last_name: "",
        country: -1,
        email: ""
    });

    const handleChange = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        setInfo({
            ...info,
            [key]: value
        })
    } 

    return (
        <form>
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" name="first_name" value={info.first_name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" name="last_name" value={info.last_name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="">Pais</label>
                <select name="country" value={info.country} onChange={handleChange}>
                    <option value={0}>Chile</option>
                    <option value={1}>Colombia</option>
                    <option value={2}>Ecuador</option>
                    <option value={3}>Venezuela</option>
                    <option value={4}>Costa Rico</option>
                    <option value={5}>Perú</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={info.email} 
                    onChange={handleChange}/>
            </div>
        </form>
    )
}


export default Form;