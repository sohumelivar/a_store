import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ItemPage.module.scss';

interface ItemPageProps {
   className?: string;
};

export const ItemPage = ({className}: ItemPageProps) => {

    return (
      <div className={classNames(cls.ItemPage, {}, [cls[className]])}>
        
      </div>
    )
};

