import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import BwipWrapper from '../BwipWrapper';
import Modal from '../Modal';
import classes from './cardList.module.css';
import { getShopNameById } from '../../logic';
import { getAllCards } from '../../selectors/getAllCards';
import { useActions } from '../../hooks/useActions';
import { LS_KEY, SHOPS } from '../../constants';
import { BcIdType } from '../BwipWrapper/types';

interface CardListProps {
  viewFavorites?: boolean;
}

const CardList = ({ viewFavorites = false }: CardListProps) => {
  const cards = useSelector(getAllCards(viewFavorites));
  const [openModal, setOpenModal] = useState(false);
  const activeCode = useRef<string | null>(null);
  const activeBarCode = useRef<BcIdType>('code128');
  document.title = 'Скидочные карты';
  const { getCardsFromIndexedDB, getFavoritesFromIndexedDB } = useActions();

  useEffect(() => {
    getCardsFromIndexedDB(LS_KEY);
    getFavoritesFromIndexedDB();
  }, []);

  const closeModalHandler = () => setOpenModal(false);

  const cardClickHandler = (code: string, shopId: string) => {
    activeCode.current = code;
    activeBarCode.current =
      SHOPS.find(({ id }) => id === shopId)?.code ?? 'code128';
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
            onClick={() => cardClickHandler(code, shopId)}
          />
        ))}
      </div>
      <Modal open={openModal} onClose={closeModalHandler}>
        {activeCode.current ? (
          <BwipWrapper bcId={activeBarCode.current} text={activeCode.current} />
        ) : (
          <div>Не удалось отобразить код</div>
        )}
      </Modal>
    </>
  );
};

export default CardList;
