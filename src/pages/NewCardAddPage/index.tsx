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
import { LS_KEY, SHOPS } from '../../constants';
import { useActions } from '../../hooks/useActions';

const NewCardAddPage = () => {
  const [shopId, setShopId] = useState(SHOPS[0].id);
  const [code, setCode] = useState('12345');
  const navigate = useNavigate();
  const { addCardInIndexedDB } = useActions();

  const selectChangeHandler = (e: SelectChangeEvent) => {
    setShopId(e.target.value);
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const addClickHandler = () => {
    addCardInIndexedDB({ key: LS_KEY, card: { id: Date.now(), shopId, code } });
    setTimeout(() => navigate('/'), 0);
  };

  return (
    <div className={classes.cardPageWrapper}>
      <div className={classes.cardPage}>
        <div className={classes.field}>
          <h4>Название магазина:</h4>
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
        </div>
        <div className={classes.field}>
          <h4>Введите код с карты:</h4>
          <Box sx={{ m: 1, minWidth: 300 }}>
            <FormControl fullWidth>
              <Input value={code} onChange={inputChangeHandler} />
            </FormControl>
          </Box>
        </div>
        <div className={classes.content}>
          <Button variant='outlined' onClick={addClickHandler}>
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewCardAddPage;
