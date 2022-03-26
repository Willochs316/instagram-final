const NavBarIcons = ({ icon: Icon, className, onClick, style }) => {
  return (
    <>
      {Icon && <Icon className={className} onClick={onClick} style={style} />}
    </>
  );
};

export default NavBarIcons;
