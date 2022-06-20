import React, { Fragment, useRef } from "react";
import { inputFilterFactory } from "./utils";


const InputContainer = props => {
    const {
        filtros = [],
        realizaRequisicao = _ => {}
    } = props;
    const ref = useRef({});

    const operacao = () => {
        realizaRequisicao(() => {
            const keys = Object.keys(ref.current);
            return (keys || []) .map(key => {
                return ref.current[key].valorTratado;
            })
        })
    }

    console.log(ref);

    return (
        <Fragment>
            {
                (filtros||[]).map(filtro => {
                    const Component = inputFilterFactory(filtro);
                    return <Component key={filtro.key} ref={e => ref.current[filtro.key] = e}/>
                })
            }
            <button onClick={operacao}>Operacao</button>
        </Fragment>
    )
}

export default InputContainer;