import useSignUp from '@lib/hooks/useSignUp';
import InputForm from '@components/common/InputForm';

function FormField({ children }) {
  return <div className='mb-[10px] min-h-[85px]'>{children}</div>;
}

export default function SignUpForm() {
  const { signUpFormData, errorMessage, isDuplicateChecked, signUpSubmitHandler, signUpChangeHandler, checkDuplicate } =
    useSignUp();

  return (
    <form
      onSubmit={signUpSubmitHandler}
      className='flex flex-col justify-between h-[500px] w-[400px] py-[30px] px-[30px] border-[1px] shadow-md rounded-md'
    >
      <div>
        <FormField>
          <div className='flex gap-[10px] justify-between items-end'>
            <InputForm
              className='px-[5px] py-[5px] w-[200px] rounded-xl border border-input focus:border-accent focus:outline-none'
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
        </FormField>
        <FormField>
          <InputForm
            className='px-[5px] py-[5px] rounded-xl border border-input focus:border-accent focus:outline-none'
            labelName='비밀번호'
            name='password'
            type='password'
            placeholder='비밀번호를 입력해주세요'
            value={signUpFormData.password}
            onChange={signUpChangeHandler}
          />
          <p className='text-sm text-red-500'>{errorMessage.password}</p>
        </FormField>
        <FormField>
          <InputForm
            className='px-[5px] py-[5px] rounded-xl border border-input focus:border-accent focus:outline-none'
            labelName='비밀번호 재입력'
            name='confirmPassword'
            type='password'
            placeholder='비밀번호를 다시한번 입력해주세요'
            value={signUpFormData.confirmPassword}
            onChange={signUpChangeHandler}
          />
          <p className='text-sm text-red-500'>{errorMessage.confirmPassword}</p>
        </FormField>
        <FormField>
          <InputForm
            className='px-[5px] py-[5px] rounded-xl border border-input focus:border-accent focus:outline-none'
            labelName='닉네임'
            name='nickname'
            type='text'
            placeholder='닉네임을 입력해주세요'
            value={signUpFormData.nickname}
            onChange={signUpChangeHandler}
          />
          <p className='text-sm text-red-500'>{errorMessage.nickname}</p>
        </FormField>
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
