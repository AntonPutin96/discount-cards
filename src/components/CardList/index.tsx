import React, { useMemo, useRef, useState } from 'react';
import useIndexedDB from '../../hooks/useIndexedDB';
import Card from '../Card';
import BwipWrapper from '../BwipWrapper';
import Modal from '../Modal';
import classes from './cardList.module.css';
import { DEFAULT_CARDS, LS_KEY } from '../../constants';
import { CardType } from '../../types';
import { getFavoritesCard, getShopNameById, isEqualCard } from '../../logic';

interface CardListProps {
  viewFavorites?: boolean;
}

const CardList = ({ viewFavorites = false }: CardListProps) => {
  const [state, setState] = useIndexedDB<Array<CardType>>(
    LS_KEY,
    DEFAULT_CARDS
  );
  const [openModal, setOpenModal] = useState(false);
  const activeCode = useRef<string | null>(null);
  document.title = 'Скидочные карты';

  const viewedCards = useMemo(
    () => (viewFavorites ? getFavoritesCard(state) : state),
    [state, viewFavorites]
  );

  const closeModalHandler = () => setOpenModal(false);

  const cardClickHandler = (code: string) => {
    activeCode.current = code;
    setOpenModal(true);
  };

  const toggleFavoriteHandler = (card: CardType) => {
    setState((prevState) =>
      prevState.map((curCard) =>
        (isEqualCard(card, curCard)
          ? { ...curCard, isFavorite: !curCard.isFavorite }
          : curCard)));
  };

  return (
    <>
      <div className={classes.wrapper}>
        {viewedCards?.map(({ shopId, code, isFavorite }) => (
          <Card
            key={`${shopId}_${code}`}
            title={getShopNameById(shopId)}
            onClick={() => cardClickHandler(code)}
            isFavorite={Boolean(isFavorite)}
            toggleFavorite={() =>
              toggleFavoriteHandler({ shopId, code, isFavorite })}
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
