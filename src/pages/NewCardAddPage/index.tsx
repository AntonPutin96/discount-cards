import React, { ChangeEvent, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Input from '@mui/material/Input';
import { useNavigate } from 'react-router-dom';
import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';
import classes from './newCard.module.css';
import { LS_KEY, SHOPS } from '../../constants';
import { useActions } from '../../hooks/useActions';
import { BcIdType } from '../../components/BwipWrapper/types';

const NewCardAddPage = () => {
  const [shopId, setShopId] = useState(SHOPS[0].id);
  const [otherShopName, setOtherShopName] = useState('');
  const navigate = useNavigate();
  const { addCardInIndexedDB } = useActions();

  const selectChangeHandler = (e: SelectChangeEvent) => {
    setShopId(e.target.value);
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setOtherShopName(e.target.value);
  };

  const handleScan = (detectedCodes: Array<IDetectedBarcode>) => {
    console.log('detectedCodes', detectedCodes);
    detectedCodes.forEach(({ format, rawValue }) => {
      const barCodeType = format.replaceAll('_', '').toLowerCase() as BcIdType; // TODO: плохо, нужно написать type guard и обработку ошибки
      const card = { id: Date.now(), shopId, code: rawValue, barCodeType };
      addCardInIndexedDB({
        key: LS_KEY,
        card
      });
    });
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
        {shopId === 'shop_other' && (
          <div className={classes.field}>
            <h4>Введите название магазина:</h4>
            <Box sx={{ m: 1, minWidth: 300 }}>
              <FormControl fullWidth>
                <Input value={otherShopName} onChange={inputChangeHandler} />
              </FormControl>
            </Box>
          </div>
        )}
        <Scanner
          onScan={handleScan}
          onError={(error) => console.error(error)}
        />
      </div>
    </div>
  );
};

export default NewCardAddPage;
