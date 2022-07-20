import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, {useState} from 'react';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';
import {RouteNames} from '../../routes/Routes/Routes.enum';

import {ButtonsStyled, HeaderStyled, LoginStyled} from './Login.styles';
import {IPasswordProps} from './Login.typings';

const Login = () => {
  const router = useNavigate();
  const {loading} = useTypedSelector(state => state.auth);
  const {authLogin} = useActions();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [values, setValues] = React.useState<IPasswordProps>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof IPasswordProps) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      setPassword(event.target.value as string);
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <LoginStyled>
      <HeaderStyled>Добро пожаловать!</HeaderStyled>
      <TextField
        id="email_login"
        label="Email"
        onChange={event => setEmail(event.target.value)}
      />
      <FormControl sx={{width: '223px'}} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <ButtonsStyled>
        <Button onClick={() => authLogin({email, password})} variant="contained">Войти</Button>
        <Button onClick={() => router(RouteNames.SIGNUP)} variant="outlined">Регистрация</Button>
      </ButtonsStyled>
      {loading && <h2>Входим...</h2>}
    </LoginStyled>
  );
};

export default Login;
