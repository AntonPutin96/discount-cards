import React, { ChangeEvent, useRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import useIndexedDB from '../../hooks/useIndexedDB';
import Card from '../../components/Card';
import BwipWrapper from '../../components/BwipWrapper';

const LS_KEY = 'state';

const CardsPage = () => {
  const [code, setCode] = useState('0123456789');
  const [state, setState] = useIndexedDB<Array<string>>(LS_KEY, []);
  const [openModal, setOpenModal] = useState(false);
  const activeCode = useRef<string | null>(null);
  document.title = 'Скидочные карты';

  const codeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const btnClickHandler = () => {
    if (!state?.includes(code.trim())) {
      setState((prevState) => [...(prevState ?? []), code.trim()]);
    }
  };

  const clickBwipHandler = (text: string) => {
    activeCode.current = text;
    setOpenModal(true);
  };

  const closeModalHandler = () => setOpenModal(false);

  return (
    <>
      <div>
        <div>Скидочные карты</div>
        <Card title='Скидка #1' />
        <hr />
        <input value={code} onChange={codeChangeHandler} />
        <button onClick={btnClickHandler} type='button'>
          Получить штрих-код
        </button>
        {state?.map((text) => (
          <BwipWrapper
            key={text}
            bcId='code128'
            text={text}
            onClick={clickBwipHandler}
          />
        ))}
      </div>
      <Dialog open={openModal} onClose={closeModalHandler}>
        {activeCode.current ? (
          <BwipWrapper bcId='code128' text={activeCode.current} />
        ) : (
          <div>Не удалось отобразить код</div>
        )}
        <Button onClick={closeModalHandler} variant='outlined'>
          Закрыть
        </Button>
      </Dialog>
    </>
  );
};

export default CardsPage;
