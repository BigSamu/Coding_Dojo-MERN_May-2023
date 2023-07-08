import { useState } from "react";

const NavBar = (props) => {

    let [logged, setLogged] = useState(false)

    return (
        <div>
            {
                logged ?
                    <div>
                        <span>Bienvenido don Pepe</span>
                        <button onClick={()=> setLogged(false)}>
                            Cerrar sesión
                        </button>
                    </div> :
                    <button onClick={()=> setLogged(true)}>
                        Entrar
                    </button>
            }
        </div>
    )
}

export default NavBar; 