const defaultValue = {
  LABEL_DEFAULT: null,
  NAME_DEFAULT: null,
  TYPE_DEFAULT: 'text',
  PLACEHOLDER_DEFAULT: '입력해주세요',
  VALUE_DEFAULT: null,
  ONCHANGE_DEFAULT: null,
};

const InputForm = ({
  labelName = defaultValue.LABEL_DEFAULT,
  name = defaultValue.NAME_DEFAULT,
  type = defaultValue.TYPE_DEFAULT,
  placeholder = defaultValue.PLACEHOLDER_DEFAULT,
  value = defaultValue.VALUE_DEFAULT,
  onChange = defaultValue.ONCHANGE_DEFAULT,
  ...children
}) => {
  return (
    <div className='flex flex-col gap-[5px]'>
      {labelName ? <label>{labelName}:</label> : null}
      <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} {...children}></input>
    </div>
  );
};

export default InputForm;
