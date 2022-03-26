const LoginTxt = ({ className, title, text }) => {
  return (
    <>
      <p className={className}>{title}</p>
      <span>{text}</span>
    </>
  );
};

export default LoginTxt;
