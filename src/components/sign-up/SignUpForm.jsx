import useSignUp from '@hooks/useSignUp';
import InputForm from '@components/sign-up/InputForm';

export default function SignUpForm() {
  const { signUpFormData, errorMessage, isDuplicateChecked, signUpSubmitHandler, signUpChangeHandler, checkDuplicate } =
    useSignUp();

  return (
    <form onSubmit={signUpSubmitHandler} className='flex flex-col'>
      <div className='flex gap-[10px]'>
        <InputForm
          className=''
          labelName='이메일'
          name='email'
          type='text'
          placeholder='이메일을 입력해주세요'
          value={signUpFormData.email}
          onChange={signUpChangeHandler}
        />
        <button
          type='button'
          className='border rounded-md px-[5px]'
          onClick={() => {
            checkDuplicate('email');
          }}
        >
          중복체크
        </button>
      </div>
      <p className={`text-sm ${isDuplicateChecked.email} ? 'text-green-500' : 'text-red-500'`}>{errorMessage.email}</p>
      <InputForm
        className=''
        labelName='비밀번호'
        name='password'
        type='password'
        placeholder='비밀번호를 입력해주세요'
        value={signUpFormData.password}
        onChange={signUpChangeHandler}
      />
      <p className='text-sm text-red-500'>{errorMessage.password}</p>
      <InputForm
        className=''
        labelName='비밀번호 재입력'
        name='confirmPassword'
        type='password'
        placeholder='비밀번호를 다시한번 입력해주세요'
        value={signUpFormData.confirmPassword}
        onChange={signUpChangeHandler}
      />
      <p className='text-sm text-red-500'>{errorMessage.confirmPassword}</p>
      <div>
        <InputForm
          labelName='닉네임'
          name='nickname'
          type='text'
          placeholder='닉네임을 입력해주세요'
          className=''
          value={signUpFormData.nickname}
          onChange={signUpChangeHandler}
        />
        {errorMessage.nickname}
      </div>
      <button type='submit'>회원가입</button>
    </form>
  );
}
