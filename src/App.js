import './App.css';
import Filtro from './components/filtro';
import {FILTER_TYPE} from './components/filtro/utils'

function App() {

  const filtros = [
    {
      key: 'nome',
      type: FILTER_TYPE.INPUT
    },
    {
      key: 'opcao',
      type: FILTER_TYPE.SELECT,
      options: [
        {value: '1', label: 'um'},
        {value: '2', label: 'dois'}
      ]
    }
  ]

  const requisicao = (obj) => {
    console.log(obj);
  }

  return (
    <div>
      <Filtro filtros={filtros} requisicao={requisicao}/>
    </div>
  );
}

export default App;
