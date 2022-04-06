const LoginButton = ({ className, title, onSubmit = () => {}, type }) => {
  return (
    <button className={className} onClick={onSubmit} type={type}>
      {title}
    </button>
  );
};

export default LoginButton;
