import React from "react";

const extracaoValorPadrao = (value, name) => {
    if(!value) {
        return null;
    }
    return {
        [name]: value
    }
}

const withFilter = (filtro, extraiValor = extracaoValorPadrao) => Component => {
    return class extends React.Component {
        state = {
            value: null
        };

        constructor(props) {
            super(props);
        }

        onChange = (value) => {
            console.log('value', value)
            this.setState(state => ({...state, value}), () => console.log(this.state.value));
        }

        get valorTratado() {
            return extraiValor(this.state.value, filtro.key);
        }

        render() {
            return <Component {...this.props} {...this.state} filtro={filtro} onChange={this.onChange}/>
        }
    }
}

export default withFilter;