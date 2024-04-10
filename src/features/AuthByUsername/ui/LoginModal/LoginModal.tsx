import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
   className?: string;
   isOpen: boolean;
   onClose: () => void;
};

export const LoginModal = ({className, isOpen, onClose}: LoginModalProps) => {
    const { t } = useTranslation();

    return (
      <Modal 
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
      >
        <LoginForm/>
      </Modal>
    )
};
