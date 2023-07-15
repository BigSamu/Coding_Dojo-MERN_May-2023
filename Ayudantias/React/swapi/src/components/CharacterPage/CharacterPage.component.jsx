import { useLocation, useParams } from "react-router-dom"

const CharacterPage = (props) => {

    const {id} = useParams();
    const location = useLocation();

    console.log(location);

    return (
        <div>
            <h1>Pagina del personaje, ID: {id}</h1>
            <pre>
                {location.state.name}
            </pre>
        </div>
    )
}

export default CharacterPage