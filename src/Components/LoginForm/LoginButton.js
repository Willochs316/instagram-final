const LoginButton = ({ className, title, onSubmit = () => {}, type }) => {
  console.log(type, 'RO: type');
  return (
    <button className={className} onClick={onSubmit} type={type}>
      {title}
    </button>
  );
};

export default LoginButton;
