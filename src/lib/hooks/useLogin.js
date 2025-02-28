import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import supabase from '@api/supabaseAPI';
import useAuthStore from '@store/zustand/authStore';

export default function useLogin() {
  const [loginState, setLoginState] = useState({ email: '', password: '' });
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  const redirectedFrom = useLocation()?.state?.redirectedFrom || '/';
  const navigate = useNavigate();
  const redirectPath = redirectedFrom === '/login' ? '/' : redirectedFrom;

  function loginChangeHandler(e) {
    const { name, value } = e.target;

    if (name === 'email') return setLoginState((prev) => ({ ...prev, email: value }));
    else return setLoginState((prev) => ({ ...prev, password: value }));
  }

  async function loginSubmitHandler(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword(loginState);
    if (error) return setLoginErrorMessage('아이디와 비밀번호가 일치하지 않습니다!');

    const { login } = useAuthStore;
    return navigate(redirectPath);
  }

  return {
    loginState,
    loginErrorMessage,
    loginChangeHandler,
    loginSubmitHandler,
  };
}
