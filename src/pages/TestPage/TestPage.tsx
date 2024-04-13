import {classNames} from 'shared/lib/classNames/classNames';
import cls from './TestPage.module.scss';
import { ItemsWrapper } from 'widgets/ItemCard';

interface TestPageProps {
   className?: string;
};

export const TestPage = ({className}: TestPageProps) => {

    return (
      <div className={classNames(cls.TestPage, {}, [className])}>
        <ItemsWrapper />
        {/* <div className={cls.itemsWrapper}>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
          <div className={cls.item}>item</div>
        </div> */}
      </div>
    )
};

