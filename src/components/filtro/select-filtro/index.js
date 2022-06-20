import React from "react";
import Select from "../../select";

const SelectFiltro = props => {
    const {
        filtro = {},
        value,
        onChange
    } = props;
    const { key, options } = filtro;
    
    return <Select name={key} value={value} onChange={onChange} options={options}/>
    
}

export default SelectFiltro;