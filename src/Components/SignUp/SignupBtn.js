const SignupBtn = ({ className, title, onSubmit = () => {} }) => {
  return (
    <button className={className} onSubmit={onSubmit}>
      {title}
    </button>
  );
};

export default SignupBtn;
