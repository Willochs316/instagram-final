const Button = ({ className, title, onSubmit = () => {}, type }) => {
  return (
    <button className={className} onClick={onSubmit} type={type}>
      {title}
    </button>
  );
};

export default Button;
