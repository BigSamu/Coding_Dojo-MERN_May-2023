import { useState } from "react";
import Hijo from "../Hijo/hijo.component"

const Padre = (props) => {

    const [activeIndex, setActiveIndex] = useState(-1);

    let childrenQty = 125;
    let children = [];
    for (let i = 0; i < childrenQty; i++){
        children.push(i);
    }

    return (
        <div>
            {
                children.map((idx) => {
                    return <Hijo
                        key={idx}
                        isActive={activeIndex === idx} 
                        onClick={()=> setActiveIndex(idx)} 
                    />
                })
            }
        </div>
    )
}

export default Padre;