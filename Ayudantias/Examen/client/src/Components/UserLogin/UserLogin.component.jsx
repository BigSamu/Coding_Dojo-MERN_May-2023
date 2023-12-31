import axios from "axios";
import { useState } from "react"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../config";

const UserLogin = (props) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    

    const loginUser = (e) => {
        e.preventDefault();
    
        axios.post(`${baseURL}/users/login`, data, {withCredentials: true})
            .then((response) => {
                setData({});
                setErrors({});
                props.setUser(response.data.user);
                navigate("/pirates/");
            })
            .catch((error) => {
                // setErrors(error.response.data.error)
            })
    }

    const changeHandler = (e) => {
        let new_data = {
            ...data,
            [e.target.name]: e.target.value
        };
        setData(new_data)
    }

    return (<form onSubmit={loginUser}>
        <h1>Login</h1>
        <div className="form-text text-danger fw-bold fs-5">{errors["message"]}</div>
        <hr />
        <div className="mt-3 px-2">
            <label className="form-label">Email</label>
            <input required className="form-control" type="email" name="email" onChange={changeHandler} value={data["email"]} />
            <div className="form-text text-danger fw-bold">{errors["email"]}</div>
        </div>
        <div className="mt-3 px-2">
            <label className="form-label">Password</label>
            <input required className="form-control" type="password" name="password"  onChange={changeHandler} value={data["password"]} />
        </div>
        <div className="mt-3">
            <Button type="submit" className="submit-button">Login</Button>
        </div>
    </form>)
}

export default UserLogin;