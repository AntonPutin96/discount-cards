import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import classes from './newCard.module.css';

export default function BasicSelect() {
  const [code, setCode] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCode(event.target.value as string);
  };

  return (
    <div>
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
                value={code}
                label='Карта магазина'
                onChange={handleChange}
              >
                <MenuItem value='code128'>Новый</MenuItem>
                <MenuItem value='code128'>Citilink</MenuItem>
                <MenuItem value='code01'>Twenty</MenuItem>
                <MenuItem value='code02'>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ m: 1, minWidth: 300 }}>
            <FormControl fullWidth>
              <Input />
            </FormControl>
          </Box>
        </div>
      </div>
      <div className={classes.content}>
        <Button variant='outlined'>Добавить</Button>
        <h6>{code}</h6>
      </div>
    </div>
  );
}

// export default NewCardAddPage;
