import useSignUp from '@hooks/useSignUp';
import InputForm from '@components/sign-up/InputForm';

const SignUpForm = () => {
  const { signUpFormData, errorMessage, isDuplicateChecked, signUpSubmitHandler, signUpChangeHandler, checkDuplicate } =
    useSignUp();

  return (
    <div className='flex flex-col'>
      <InputForm
        className=''
        labelName='이메일'
        name='email'
        type='text'
        placeholder='이메일을 입력해주세요'
        value={signUpFormData.email}
        onChange={signUpChangeHandler}
      />
      <InputForm
        className=''
        labelName='비밀번호'
        name='password'
        type='password'
        placeholder='비밀번호를 입력해주세요'
        value={signUpFormData.password}
        onChange={signUpChangeHandler}
      />
      <InputForm
        className=''
        labelName='비밀번호 재입력'
        name='confirmPassword'
        type='password'
        placeholder='비밀번호를 다시한번 입력해주세요'
        value={signUpFormData.confirmPassword}
        onChange={signUpChangeHandler}
      />
      <InputForm
        labelName='닉네임'
        name='nickname'
        type='text'
        placeholder='닉네임을 입력해주세요'
        className=''
        value={signUpFormData.nickname}
        onChange={signUpChangeHandler}
      />
    </div>
  );
};

export default SignUpForm;
