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

import {useTypedSelector} from '../../../hooks/useTypedSelector';
import {useActions} from '../../../hooks/useActions';
import {RouteNames} from '../../../routes/Routes/Routes.enum';

import {ButtonsStyled, HeaderStyled, SignupStyled} from './Signup.styles';
import {IPasswordProps} from './Signup.typings';

const Signup = () => {
  const router = useNavigate();
  const {loading} = useTypedSelector(state => state.auth);
  const {authRegistration} = useActions();

  const [name, setName] = useState('');
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
    <SignupStyled>
      <HeaderStyled>Добро пожаловать!</HeaderStyled>
      <TextField
        id="name"
        label="Логин"
        onChange={event => setName(event.target.value)}
      />
      <TextField
        id="email_signup"
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
        {/* eslint-disable-next-line max-len */}
        <Button onClick={() => authRegistration({name, email, password})} variant="contained">Зарегистрироваться</Button>
        <Button onClick={() => router(RouteNames.LOGIN)} variant="outlined">Вход</Button>
      </ButtonsStyled>
      {loading && <h2>Регистрируемся...</h2>}
    </SignupStyled>
  );
};

export default Signup;
