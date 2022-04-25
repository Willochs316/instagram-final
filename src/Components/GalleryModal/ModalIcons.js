// import {FaEllipsis-h} from 'react-icons/fa';
const ModalIcons = ({ icon: Icon, className, onClick, title }) => {
  return <>{Icon && <Icon className={className} onClick={onClick} />}</>;
};

export default ModalIcons;
