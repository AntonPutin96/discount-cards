import React, { ChangeEvent, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import classes from './newCard.module.css';
import useIndexedDB from '../../hooks/useIndexedDB';
import { DEFAULT_CARDS, LS_KEY, SHOPS } from '../../constants';
import { CardType } from '../../types';

const NewCardAddPage = () => {
  const [shopId, setShopId] = useState(SHOPS[0].id);
  const [code, setCode] = useState('12345');
  const [, setState] = useIndexedDB<Array<CardType>>(LS_KEY, DEFAULT_CARDS);
  const navigate = useNavigate();

  const selectChangeHandler = (e: SelectChangeEvent) => {
    setShopId(e.target.value);
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const addClickHandler = () => {
    setState((prevState) => [...prevState, { shopId, code }]);
    setTimeout(() => navigate('/'), 0);
  };

  return (
    <div className={classes.cardPageWrapper}>
      <div className={classes.cardPage}>
        <div className={classes.title}>
          <h4>Название магазина:</h4>
          <h4>Введите код с карты:</h4>
        </div>
        <div className={classes.add}>
          <Box sx={{ m: 1, minWidth: 300 }}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Карта магазина
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={shopId}
                label='Карта магазина'
                onChange={selectChangeHandler}
              >
                {SHOPS.map(({ id, name }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ m: 1, minWidth: 300 }}>
            <FormControl fullWidth>
              <Input value={code} onChange={inputChangeHandler} />
            </FormControl>
          </Box>
        </div>
      </div>
      <div className={classes.content}>
        <Button variant='outlined' onClick={addClickHandler}>
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default NewCardAddPage;
