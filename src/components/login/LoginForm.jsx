import InputForm from '@components/sign-up/InputForm';

const LoginForm = () => {
  return (
    <form onSubmit={signUpSubmitHandler} className='flex flex-col w-[350px] px-[5px]'>
      <div className='mb-[10px]'>
        <InputForm
          className='px-[5px] py-[5px] '
          labelName='이메일'
          name='email'
          type='text'
          placeholder='이메일을 입력해주세요'
          value={signUpFormData.nickname}
          onChange={signUpChangeHandler}
        />
      </div>
      <div className='mb-[10px]'>
        <InputForm
          className='px-[5px] py-[5px] '
          labelName='비밀번호'
          name='password'
          type='password'
          placeholder='비밀번호를 입력해주세요'
          value={signUpFormData.nickname}
          onChange={signUpChangeHandler}
        />
        <p className='text-sm text-red-500'>{errorMessage.nickname}</p>
      </div>
      <button
        type='submit'
        className='w-full h-[40px] border rounded-md bg-button text-text-primary hover:bg-point-active hover:text-text-light transition duration-300'
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
