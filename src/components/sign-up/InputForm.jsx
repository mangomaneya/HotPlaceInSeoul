const InputForm = ({ labelName, name, type, placeholder, value, onChange, ...children }) => {
  return (
    <div className='flex flex-col gap-[5px]'>
      <label>{labelName}:</label>
      <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} {...children}></input>
    </div>
  );
};

export default InputForm;
