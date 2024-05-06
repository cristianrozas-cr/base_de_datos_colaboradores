import { useState } from "react";

function Alert({alerta, color}){
    const [alert, setAlert] = useState ("")
    return(
        <>
        {<h2 style={{color: {color}}}>{alerta}</h2>}
        </>
    )
}

export default Alert;