import React from 'react';
import InputContainer from './input-container';

const Filtro = props => {
    const {
        filtros = [],
        requisicao
    } = props;

    const realizaRequisicao = func => {
        const valores = func();
        requisicao(valores);
    }


    return (<div>
        <InputContainer filtros={filtros} realizaRequisicao={realizaRequisicao}/>
    </div>)
}

export default Filtro;