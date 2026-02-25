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
import { CardType } from '../../types';

interface CardListProps {
  viewFavorites?: boolean;
}

const CardList = ({ viewFavorites = false }: CardListProps) => {
  const cards = useSelector(getAllCards(viewFavorites));
  const [openModal, setOpenModal] = useState(false);
  const activeCard = useRef<CardType | null>(null);
  document.title = 'Скидочные карты';
  const {
    getCardsFromIndexedDB,
    getFavoritesFromIndexedDB,
    removeCardFromIndexedDB
  } = useActions();

  useEffect(() => {
    getCardsFromIndexedDB(LS_KEY);
    getFavoritesFromIndexedDB();
  }, []);

  const closeModalHandler = () => setOpenModal(false);

  const cardClickHandler = (card: CardType) => {
    activeCard.current = card;
    setOpenModal(true);
  };

  const removeCardHandler = () => {
    if (activeCard.current) {
      removeCardFromIndexedDB(activeCard.current?.id);
      closeModalHandler();
    }
  };

  if (!cards) {
    return null;
  }

  return (
    <>
      <div className={classes.wrapper}>
        {cards?.map((card) => (
          <Card
            key={`${card.id}`}
            id={card.id}
            title={getShopNameById(card.shopId)}
            onClick={() => cardClickHandler(card)}
          />
        ))}
      </div>
      <Modal
        open={openModal}
        onClose={closeModalHandler}
        onRemove={removeCardHandler}
      >
        {activeCard.current ? (
          <BwipWrapper
            bcId={activeCard.current.barCodeType}
            text={activeCard.current.code}
          />
        ) : (
          <div>Не удалось отобразить код</div>
        )}
      </Modal>
    </>
  );
};

export default CardList;
