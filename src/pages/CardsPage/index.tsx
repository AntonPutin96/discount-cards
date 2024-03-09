import React, { useRef, useState } from 'react';
import useIndexedDB from '../../hooks/useIndexedDB';
import Card from '../../components/Card';
import BwipWrapper from '../../components/BwipWrapper';
import Modal from '../../components/Modal';
import classes from './cardsPage.module.css';

const LS_KEY = 'state';

type CardType = {
  title: string;
  text: string;
};

const defaultCards = [
  { title: 'Ситилинк', text: '0123456789' },
  { title: 'Магнит', text: '9876543210' }
];

const CardsPage = () => {
  const [state] = useIndexedDB<Array<CardType>>(LS_KEY, defaultCards);
  const [openModal, setOpenModal] = useState(false);
  const activeCode = useRef<string | null>(null);
  document.title = 'Скидочные карты';

  const closeModalHandler = () => setOpenModal(false);

  const cardClickHandler = (text: string) => {
    activeCode.current = text;
    setOpenModal(true);
  };

  return (
    <>
      <div className={classes.wrapper}>
        {state?.map(({ title, text }) => (
          <Card title={title} onClick={() => cardClickHandler(text)} />
        ))}
      </div>
      <Modal open={openModal} onClose={closeModalHandler}>
        {activeCode.current ? (
          <BwipWrapper bcId='code128' text={activeCode.current} />
        ) : (
          <div>Не удалось отобразить код</div>
        )}
      </Modal>
    </>
  );
};

export default CardsPage;
