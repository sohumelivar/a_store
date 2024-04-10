import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ProfilePageProps {
   className?: string;
};

const ProfilePage = memo(({className}: ProfilePageProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        Profile Page
      </div>
    )
});

export default ProfilePage;
