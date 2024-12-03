import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import BwipWrapper from '../BwipWrapper';
import Modal from '../Modal';
import classes from './cardList.module.css';
import { getShopNameById } from '../../logic';
import { getAllCards } from '../../selectors/getAllCards';
import { useActions } from '../../hooks/useActions';
import { LS_KEY } from '../../constants';

interface CardListProps {
  viewFavorites?: boolean;
}

const CardList = ({ viewFavorites = false }: CardListProps) => {
  const cards = useSelector(getAllCards(viewFavorites));
  const [openModal, setOpenModal] = useState(false);
  const activeCode = useRef<string | null>(null);
  document.title = 'Скидочные карты';
  const { getCardsFromIndexedDB, getFavoritesFromIndexedDB } = useActions();

  useEffect(() => {
    getCardsFromIndexedDB(LS_KEY);
    getFavoritesFromIndexedDB();
  }, []);

  const closeModalHandler = () => setOpenModal(false);

  const cardClickHandler = (code: string) => {
    activeCode.current = code;
    setOpenModal(true);
  };

  if (!cards) {
    return null;
  }

  return (
    <>
      <div className={classes.wrapper}>
        {cards?.map(({ id, shopId, code }) => (
          <Card
            key={`${id}`}
            id={id}
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

export default CardList;
