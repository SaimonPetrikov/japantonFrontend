import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {FC} from 'react';

import {ISearchProps} from './Search.typings';


const Search: FC<ISearchProps> = ({name, width}) => {
  // const {payload} = useTypedSelector(state => state.car);
  //
  // const searchData = () => {
  //   if (!payload) return [];
  //   const response = (payload as CarResponse).car;
  //   return (response as ICarProps[]);
  // };

  return (
    <Stack spacing={2} sx={{ width: {width}}}>
      <Autocomplete
        freeSolo
        id="addBtn"
        size="small"
        disableClearable
        // options={searchData().map(e => `${e.id}`)}
        options={['test1', 'test2', 'test3']}
        renderInput={params => (
          <TextField
            {...params}
            label={name}
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
