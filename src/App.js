import './App.css';
import { useState } from 'react';
import numbers from './Components/NumbersButton';

function App() {
  /* eslint no-eval: 0 */
  const [data, setData] = useState('');
  const calcBtns = [];

  // Array de numeros
  numbers(calcBtns, setData, data)

  // LOGICA PARA SOMAR, DIVIDIR, SUBTRAIR E MULTIPLICAR
  const handleLogic = () => {
    try {
      setData(
        String(eval(data)).length > 3 &&
          String(eval(data)).includes('.')
          ? String(eval(data).toFixed(4))
          : String(eval(data))
      )
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='wrapper'>
      {/* MOSTRAR O VALOR */}
      <div className='show-input'>{data}</div>

      {/* DIV DOS BOTÕES NUMERAIS */}
      <div className='digits flex'>{calcBtns}</div>

      <div className='modifiers subgrid'>
        {/* BOTÃO PARA LIMPAR NUMERO POR NUMERO  */}
        <button onClick={() => setData(data.substr(0, data.length - 1))}>Limpar</button>

        {/* BOTÃO PARA LIMPAR TODO O INPUT */}
        <button onClick={() => setData('')}>AC</button>
      </div>

      <div className='operations subgrid'>
        <button onClick={e => setData(data + e.target.value)} value='+'>+</button>
        <button onClick={e => setData(data + e.target.value)} value='-'>-</button>
        <button onClick={e => setData(data + e.target.value)} value='*'>*</button>
        <button onClick={e => setData(data + e.target.value)} value='/'>/</button>
        <button onClick={handleLogic} value='='>=</button>
      </div>
    </div>
  );
}

export default App;
