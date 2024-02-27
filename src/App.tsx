import React, { ChangeEvent, useState } from 'react';

import Card from './components/Card';
import BwipWrapper from './components/BwipWrapper';
import useIndexedDB from './hooks/useIndexedDB';

const LS_KEY = 'state';

function App() {
  const [code, setCode] = useState('0123456789');
  const [state, setState] = useIndexedDB<Array<string>>(LS_KEY, []);
  document.title = 'Скидочные карты';

  const codeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const btnClickHandler = () => {
    if (!state?.includes(code.trim())) {
      setState((prevState) => [...(prevState ?? []), code.trim()]);
    }
  };

  return (
    <div>
      <div>Скидочные карты</div>
      <Card title='Скидка #1' />
      <hr />
      <input value={code} onChange={codeChangeHandler} />
      <button onClick={btnClickHandler} type='button'>
        Получить штрих-код
      </button>
      {state?.map((text) => (
        <BwipWrapper key={text} bcId='code128' text={text} />
      ))}
    </div>
  );
}

export default App;
