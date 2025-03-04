import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpValidate } from '@utils/signUpValidate';
import supabase from '@api/supabaseAPI';
import useAuthStore from '@store/zustand/authStore';
import { openAlert } from '@utils/openAlert';
import { ALERT_TYPE } from '@constants/alert-constant';

const errorMessageText = {
  DUPLICATED: '중복 체크를 해주세요.',
  INVALID_EMAIL: '사용 불가능한 이메일 입니다.',
  VALID_EMAIL: '사용가능한 이메일 입니다.',
  LIMIT_NICKNAME: '최소 2자부터 최대 8자까지 가능합니다.',
  VALID_NICKNAME: '사용가능한 닉네임 입니다.',
};

export default function useSignUp() {
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

  const [isDuplicateChecked, setIsDuplicateChecked] = useState({ email: false });
  const setUserData = useAuthStore((state) => state.setUserData);
  const navigate = useNavigate();

  const { SUCCESS, ERROR } = ALERT_TYPE;

  function signUpChangeHandler(e) {
    const { name, value } = e.target;
    setSignUpFormData((prev) => ({ ...prev, [name]: value }));

    const errorMsg = signUpValidate(name, value, signUpFormData);
    setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));

    if (name === 'email') setIsDuplicateChecked({ [name]: false });
  }

  async function checkDuplicate(type) {
    if (type === 'email') {
      if (errorMessage.email !== errorMessageText.DUPLICATED) return;

      const { data } = await supabase.from('users').select().eq('email', signUpFormData.email);
      if (data.length !== 0) return setErrorMessage((prev) => ({ ...prev, [type]: errorMessageText.INVALID_EMAIL }));

      setIsDuplicateChecked({ [type]: true });
      return setErrorMessage((prev) => ({ ...prev, [type]: errorMessageText.VALID_EMAIL }));
    }

    if (type === 'nickname') {
      if (errorMessage.nickname === errorMessageText.LIMIT_NICKNAME) return;

      return setErrorMessage((prev) => ({ ...prev, [type]: errorMessageText.VALID_NICKNAME }));
    }
  }

  function isValidForm() {
    for (const key in errorMessage) if (!isDuplicateChecked[key] && errorMessage[key]) return false;
    return true;
  }

  async function signUpSubmitHandler(e) {
    e.preventDefault();

    if (!isValidForm()) {
      openAlert({
        type: ERROR,
        text: '잘못 입력된 정보가 있습니다! 다시 한 번 확인해주세요!',
      });
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: signUpFormData.email,
      password: signUpFormData.password,
      options: {
        data: {
          nickname: signUpFormData.nickname,
        },
      },
    });

    if (error) {
      openAlert({
        type: ERROR,
        text: `서버 오류! 잠시후 다시 요청 바랍니다!`,
      });
      return;
    }

    setUserData(
      data.session.access_token,
      data.user.id,
      data.user.user_metadata.email,
      data.user.user_metadata.nickname
    );
    openAlert({ type: SUCCESS, text: '회원가입을 완료했습니다. 자동으로 로그인됩니다.' });
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
}
