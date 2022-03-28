const NewsFeedTxt = ({ text, title, className }) => {
  return (
    <>
      {/* <div className="txt"> */}
      <p className={className}>{title}</p>
      <span className={className}>{text}</span>
      {/* </div> */}
    </>
  );
};
export default NewsFeedTxt;
