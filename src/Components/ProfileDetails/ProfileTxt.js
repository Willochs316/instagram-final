const ProfileTxt = ({ text, title, entitle, style, className }) => {
  return (
    <>
      <h1 className={className}>{text}</h1>
      <p className={className}>{title}</p>
      <span className={className} style={style}>
        {entitle}
      </span>
    </>
  );
};
export default ProfileTxt;
