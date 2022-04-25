const Text = ({ text, title, className, content }) => {
  return (
    <>
      <h2 className={className}>{content}</h2>
      <p className={className}>{title}</p>
      <span>{text}</span>
    </>
  );
};
export default Text;
