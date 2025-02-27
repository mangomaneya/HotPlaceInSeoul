import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '@api/supabaseAPI';

export default useSignUp = () => {
  const [signUpFormData, setSignUpFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    password: '',
    email: '',
    confirmPassword: '',
    nickname: '',
  });

  const [isDuplicateChecked, setIsDuplicateChecked] = useState({ email: false, nickname: false });
  const navigate = useNavigate();

  function signUpChangeHandler(e) {
    const { name, value } = e.target;
    setSignUpFormData((prev) => ({ ...prev, [name]: value }));

    const errorMsg = signUpValidate(name, value, signUpFormData);
    setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));

    if (name === 'email' || name === 'nickname') setIsDuplicateChecked((prev) => ({ ...prev, [name]: false }));
  }

  async function checkDuplicate(type) {
    if (type === 'email') {
      if (errorMessage.email !== '중복 체크를 해주세요.') return;

      const { data } = await supabase.from('users').select().eq('email', signUpFormData.email);
      if (data.length !== 0) return setErrorMessage((prev) => ({ ...prev, [type]: '사용 불가능한 이메일 입니다.' }));

      setIsDuplicateChecked((prev) => ({ ...prev, [type]: true }));
      return setErrorMessage((prev) => ({ ...prev, [type]: '사용가능한 이메일 입니다.' }));
    }

    if (type === 'nickname') {
      if (errorMessage.nickname === '최소 2자부터 최대 8자까지 가능합니다.') return;

      setIsDuplicateChecked((prev) => ({ ...prev, [type]: true }));
      return setErrorMessage((prev) => ({ ...prev, [type]: '사용가능한 닉네임 입니다.' }));
    }
  }

  function isValidForm() {
    for (const key in errorMessage) if (!isDuplicateChecked[key] && errorMessage[key]) return false;
    return true;
  }

  async function signUpSubmitHandler(e) {
    e.preventDefault();

    if (!isValidForm()) {
      console.error('is Not Valid');
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: signUpFormData.email,
      password: signUpFormData.password,
      options: {
        data: {
          nickname: signUpFormData.nickname,
        },
      },
    });

    if (error) {
      console.error(error);
      return;
    }
    navigate('/');
  }

  return {
    signUpFormData,
    errorMessage,
    isDuplicateChecked,
    signUpSubmitHandler,
    signUpChangeHandler,
    checkDuplicate,
  };
};
