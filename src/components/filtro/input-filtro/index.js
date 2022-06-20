import React from "react";
import Input from "../../input";

const InputFiltro = props => {
    const {
        filtro = {},
        value,
        onChange
    } = props;
    const { key } = filtro;
    
    return <Input name={key} value={value} onChange={onChange}/>
    
}

export default InputFiltro;