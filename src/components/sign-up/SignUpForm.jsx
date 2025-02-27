import useSignUp from '@hooks/useSignUp';
import InputForm from '@components/sign-up/InputForm';

const SignUpForm = () => {
  const { signUpFormData, errorMessage, isDuplicateChecked, signUpSubmitHandler, signUpChangeHandler, checkDuplicate } =
    useSignUp();
  return (
    <div>
      <InputForm></InputForm>
    </div>
  );
};

export default SignUpForm;
