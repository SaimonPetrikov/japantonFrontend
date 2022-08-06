import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


const Search = () => {
  // const {payload} = useTypedSelector(state => state.car);
  //
  // const searchData = () => {
  //   if (!payload) return [];
  //   const response = (payload as CarResponse).car;
  //   return (response as ICarProps[]);
  // };

  return (
    <Stack spacing={2} sx={{ width: '100%'}}>
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
