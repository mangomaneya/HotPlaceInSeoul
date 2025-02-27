const InputForm = ({ labelName, ...children }) => {
  return (
    <>
      <label>{labelName}:</label>
      <input {...children}></input>
    </>
  );
};

export default InputForm;
