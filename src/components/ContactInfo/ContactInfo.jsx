import css from './ContactInfo.module.css';

import { FaPhoneAlt, FaUser } from 'react-icons/fa';

export default function ContactInfo({ type, text }) {
  const renderIcon = () => {
    switch (type) {
      case 'name':
        return <FaUser size={16} className={css.icon} />;
      case 'number':
        return <FaPhoneAlt size={16} className={css.icon} />;
      default:
        return null;
    }
  };

  return (
    <div className={css.container}>
      {renderIcon()}
      <div className={css.text}>{text}</div>
    </div>
  );
}
