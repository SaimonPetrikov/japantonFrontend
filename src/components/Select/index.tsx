import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {FC, useState} from 'react';

import {ISelectProps} from './Select.typings';

const Selection: FC<ISelectProps> = ({name, values, width}) => {
  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{
      m: 1,
      minWidth: {width},
      margin: 0,
      color: '#606060'
    }} size="small">
      <InputLabel id="demo-select-small">{name}</InputLabel>
      <Select
        labelId="select-small"
        id="select"
        value={value}
        label={name}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {values.map(elem => (
          <MenuItem
            key={elem}
            value={elem}
          >
            {elem}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selection;
