import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { DropdownElement } from 'shared/ui/DropdownElement';
import { Text } from 'shared/ui/Text/Text';

interface ProfilePageProps {
   className?: string;
};

const ProfilePage = memo(({className}: ProfilePageProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        <DropdownElement firstChildren={<Text text='initial'/>} secondChildren={<Text text='drop element'/>} />
      </div>
    )
});

export default ProfilePage;
