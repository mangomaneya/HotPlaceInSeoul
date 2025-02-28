import useSignUp from '@hooks/useSignUp';
import InputForm from '@components/common/InputForm';

export default function SignUpForm() {
  const { signUpFormData, errorMessage, isDuplicateChecked, signUpSubmitHandler, signUpChangeHandler, checkDuplicate } =
    useSignUp();

  return (
    <form onSubmit={signUpSubmitHandler} className='flex flex-col w-[350px] px-[5px]'>
      <div className='mb-[10px]'>
        <div className='flex gap-[10px] justify-between items-end'>
          <InputForm
            className='px-[5px] py-[5px] w-[200px]'
            labelName='이메일'
            name='email'
            type='text'
            placeholder='이메일을 입력해주세요'
            value={signUpFormData.email}
            onChange={signUpChangeHandler}
          />
          <button
            type='button'
            className='border rounded-md px-[5px] h-[35px] w-[80px] bg-button text-text-primary hover:bg-point-active hover:text-text-light transition duration-300'
            onClick={() => {
              checkDuplicate('email');
            }}
          >
            중복체크
          </button>
        </div>
        <p className={`text-sm ${isDuplicateChecked.email ? 'text-green-500' : 'text-red-500'}`}>
          {errorMessage.email}
        </p>
      </div>
      <div className='mb-[10px]'>
        <InputForm
          className='px-[5px] py-[5px]'
          labelName='비밀번호'
          name='password'
          type='password'
          placeholder='비밀번호를 입력해주세요'
          value={signUpFormData.password}
          onChange={signUpChangeHandler}
        />
        <p className='text-sm text-red-500'>{errorMessage.password}</p>
      </div>
      <div className='mb-[10px]'>
        <InputForm
          className='px-[5px] py-[5px] '
          labelName='비밀번호 재입력'
          name='confirmPassword'
          type='password'
          placeholder='비밀번호를 다시한번 입력해주세요'
          value={signUpFormData.confirmPassword}
          onChange={signUpChangeHandler}
        />
        <p className='text-sm text-red-500'>{errorMessage.confirmPassword}</p>
      </div>
      <div className='mb-[10px]'>
        <InputForm
          className='px-[5px] py-[5px] '
          labelName='닉네임'
          name='nickname'
          type='text'
          placeholder='닉네임을 입력해주세요'
          value={signUpFormData.nickname}
          onChange={signUpChangeHandler}
        />
        <p className='text-sm text-red-500'>{errorMessage.nickname}</p>
      </div>
      <button
        type='submit'
        className='w-full h-[40px] border rounded-md bg-button text-text-primary hover:bg-point-active hover:text-text-light transition duration-300'
      >
        회원가입
      </button>
    </form>
  );
}
