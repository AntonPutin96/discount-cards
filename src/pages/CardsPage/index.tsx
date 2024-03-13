import React, { useRef, useState } from 'react';
import useIndexedDB from '../../hooks/useIndexedDB';
import Card from '../../components/Card';
import BwipWrapper from '../../components/BwipWrapper';
import Modal from '../../components/Modal';
import classes from './cardsPage.module.css';
import { DEFAULT_CARDS, LS_KEY } from '../../constants';
import { CardType } from '../../types';
import { getShopNameById } from '../../logic';

const CardsPage = () => {
  const [state] = useIndexedDB<Array<CardType>>(LS_KEY, DEFAULT_CARDS);
  const [openModal, setOpenModal] = useState(false);
  const activeCode = useRef<string | null>(null);
  document.title = 'Скидочные карты';

  const closeModalHandler = () => setOpenModal(false);

  const cardClickHandler = (code: string) => {
    activeCode.current = code;
    setOpenModal(true);
  };

  return (
    <>
      <div className={classes.wrapper}>
        {state?.map(({ shopId, code }) => (
          <Card
            key={`${shopId}_${code}`}
            title={getShopNameById(shopId)}
            onClick={() => cardClickHandler(code)}
          />
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
