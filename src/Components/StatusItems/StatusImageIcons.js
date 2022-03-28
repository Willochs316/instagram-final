const StatusImageIcons = ({ icons: Icons, className, onClick }) => {
  return <>{Icons && <Icons className={className} onClick={onClick} />}</>;
};

export default StatusImageIcons;
