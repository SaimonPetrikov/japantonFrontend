import * as React from 'react';
import {FC} from 'react';
import {LoadingButton} from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';

import {ILoadingButtonProps} from './LoadingButton.typings';

const LoadingBtn: FC<ILoadingButtonProps> = ({children}) => {
  const [loading, setLoading] = React.useState(false);

  function handleClick() {
    setLoading(true);
  }

  return (
    <LoadingButton sx={{
      textTransform: 'none',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '19px',
      color: '#FFFFFF',
      padding: 0,
      width: '136px'}}
    onClick={handleClick}
    startIcon={<AddIcon />}
    loading={loading}
    loadingPosition="start"
    variant="contained"
    >
      {children}
    </LoadingButton>
  );
};

export default LoadingBtn;
