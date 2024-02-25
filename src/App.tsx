import React, { ChangeEvent, useState } from 'react';
import Card from './components/Card';
import BwipWrapper from './components/BwipWrapper';

function App() {
  const [code, setCode] = useState('0123456789');
  const [text, setText] = useState<string | null>(null);
  document.title = 'Скидочные карты';

  const codeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const btnClickHandler = () => {
    setText(code);
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
      {text && <BwipWrapper bcId='code128' text={text} />}
    </div>
  );
}

export default App;
