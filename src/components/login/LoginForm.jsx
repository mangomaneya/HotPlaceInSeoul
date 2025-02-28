import useLogin from '@hooks/useLogin';
import InputForm from '@components/common/InputForm';

const LoginForm = () => {
  const { loginState, loginErrorMessage, loginChangeHandler, loginSubmitHandler } = useLogin();
  return (
    <form
      onSubmit={loginSubmitHandler}
      className='flex flex-col h-[350px] w-[400px] py-[30px] px-[30px] border-[1px] shadow-md rounded-md justify-between'
    >
      <div className='flex flex-col gap-[25px]'>
        <div className='mb-[10px]'>
          <InputForm
            className='px-[5px] py-[5px] rounded-xl border border-button focus:border-accent focus:outline-none'
            labelName='이메일'
            name='email'
            type='text'
            placeholder='이메일을 입력해주세요'
            value={loginState.email}
            onChange={loginChangeHandler}
          />
        </div>
        <div className='mb-[10px]'>
          <InputForm
            className='px-[5px] py-[5px] rounded-xl border border-point focus:border-accent focus:outline-none'
            labelName='비밀번호'
            name='password'
            type='password'
            placeholder='비밀번호를 입력해주세요'
            value={loginState.password}
            onChange={loginChangeHandler}
          />
          <p className='text-sm text-red-500'>{loginErrorMessage}</p>
        </div>
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
