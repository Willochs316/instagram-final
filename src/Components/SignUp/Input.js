const Input = ({ type, className, name, placeholder, onChange }) => {
  return (
    <>
      <input
        type={type}
        className={className}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </>
  );
};
export default Input;
