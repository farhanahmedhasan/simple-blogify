const Input = ({ idName, placeholder, type, value, onChange }) => {
  return (
    <input
      required
      value={value}
      onChange={onChange}
      type={type}
      className='formControl'
      id={idName}
      name={idName}
      placeholder={placeholder}
    />
  );
};

export default Input;
