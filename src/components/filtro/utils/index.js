import InputFiltro from '../input-filtro';
import SelectFiltro from '../select-filtro';
import withFilter from './withFilter';

const [ SELECT, INPUT] = ['select', 'input'];
export const FILTER_TYPE = {
    SELECT: SELECT,
    INPUT: INPUT
};


const FILTER_COMPONENT = {
    [SELECT]: filtro => withFilter(filtro)(SelectFiltro),
    [INPUT]: filtro => withFilter(filtro)(InputFiltro)
}


export const inputFilterFactory = filtro => {
    const { type } = filtro;
    return FILTER_COMPONENT[type](filtro);
}