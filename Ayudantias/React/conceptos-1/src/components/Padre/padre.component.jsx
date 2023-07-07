import { useState } from "react";
import Hijo from "../Hijo/hijo.component"

const Padre = (props) => {

    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <div>
            <Hijo active={activeIndex === 0} onClick={()=> setActiveIndex(0)} />
            <Hijo active={activeIndex === 1} onClick={()=> setActiveIndex(1)} />
        </div>
    )
}

export default Padre;