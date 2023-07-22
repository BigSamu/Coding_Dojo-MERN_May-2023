import { useState } from "react";

const SearchBar = (props) => {

    const [selectedPath, setSelectedPath] = useState("/people");
    const [id, setId] = useState("");

    return (<div>
        <select value={selectedPath} onChange={(e) => setSelectedPath(e.target.value)}>
            <option value={"/people"}>people</option>
            <option value={"/planets"}>planet</option>
        </select>

        <div>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={() => {
                props.onSearch(selectedPath, id);
            }}>Buscar</button>
        </div>
    </div>)
}

export default SearchBar;