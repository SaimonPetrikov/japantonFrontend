import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {FC} from 'react';

import {ISearchProps} from './Search.typings';

const Search: FC<ISearchProps> = ({payload}) => {

  return (
    <Stack spacing={2} sx={{ width: '100%'}}>
      <Autocomplete
        freeSolo
        id="addBtn"
        size="small"
        disableClearable
        options={payload?.map(e => `${e.id}`)}
        renderInput={params => (
          <TextField
            {...params}
            label="Введите что Вам нужно..."
            InputProps={{
              ...params.InputProps,
              type: 'search'
            }}
          />
        )}
      />
    </Stack>
  );
};

export default Search;
