import axios from "axios";
import SearchBar from "../searchBar/searchBar.component";
import DataCard from "../dataCard/dataCard.component";
const { useState, useEffect } = require("react")


const SearchPage =  (props) => {
    const [data, setData] = useState(null);

    const search = (selectedPath, id) => {
        if (selectedPath && id){
            axios.get(`https://swapi.dev/api/${selectedPath}/${id}`)
            .then((response)=> {
                setData(response.data)
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (<div>
        <SearchBar onSearch={search}/>
        <DataCard data={data} />
    </div>)
}

export default SearchPage;