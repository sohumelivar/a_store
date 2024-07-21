import {classNames} from 'shared/lib/classNames/classNames';
import cls from './UserAvatar.module.scss';
import { User } from 'entities/Item';

interface UserAvatarProps {
    className?: string;
    user: User;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ user, className }) => {

    return (
      <div className={classNames(cls.UserAvatar, {}, [cls[className]])}>
        {user && user.avatar ? (
                <img src={`http://localhost:5001/uploads/${(user.avatar).toString()}`} alt={`${user.username}'s avatar`} className={cls.avatar} />
            ) : (
                <div className={cls.placeholderAvatar}>{user.username.charAt(0).toUpperCase()}</div>
        )}
        {user && <span className={cls.username}>{user.username}</span>}
      </div>
    )
};

