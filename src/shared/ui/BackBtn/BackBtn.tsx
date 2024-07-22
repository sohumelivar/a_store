import {classNames} from 'shared/lib/classNames/classNames';
import cls from './BackBtn.module.scss';
import { useNavigate } from 'react-router-dom';

interface BackBtnProps {
   className?: string;
};

export const BackBtn = ({className}: BackBtnProps) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
      <button className={classNames(cls.BackBtn, {}, [cls[className]])} onClick={handleBack}>
        Назад
      </button>
    )
};

