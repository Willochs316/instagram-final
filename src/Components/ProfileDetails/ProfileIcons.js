const ProfileIcons = ({ icon: Icon, className, style, onClick }) => {
  return (
    <>
      {Icon && <Icon className={className} style={style} onClick={onClick} />}
    </>
  );
};

export default ProfileIcons;
