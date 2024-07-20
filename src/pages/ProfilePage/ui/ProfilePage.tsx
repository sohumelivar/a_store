import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { getProfile, setAge, setEmail, setFirstname, setLastname, setUsername, updateProfile, clearForm } from 'entities/Profile';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/ui/Buton/Button';
import { UserItemsBtn } from 'widgets/UserItems';


interface ProfilePageProps {
   className?: string;
};

const ProfilePage = memo(({className}: ProfilePageProps) => {
    const { authData } = useSelector((state: RootState) => state.user);
    const { user, isLoading, error, errorMessage } = useSelector((state: RootState) => state.profile);
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [avatar, setAvatar] = useState<File | null>(null);
    
    useEffect(() => {
      if (authData) {
        dispatch(getProfile(authData.id))
      }

      return () => {
        dispatch(clearForm());
      }
    }, [dispatch, authData]);

    const handleEdit = useCallback(() => {
      setIsEditing(true);
  }, []);

  const handleSave = useCallback(async () => {
    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('email', user.email);
    formData.append('firstname', user.firstname);
    formData.append('lastname', user.lastname);
    formData.append('age', user.age?.toString() || '');
    if (avatar) {
        formData.append('avatar', avatar);
    }
    const resultAction = await dispatch(updateProfile({ formData, userId: authData.id }));
    if (updateProfile.fulfilled.match(resultAction)) {
        setIsEditing(false);
        navigate('/profile');
    }
  }, [user, dispatch, navigate, avatar, authData.id]);

  const handleUsernameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(e.target.value));
  }, [dispatch]);

    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.target.value));
    }, [dispatch]);

    const handleFirstnameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFirstname(e.target.value));
    }, [dispatch]);

    const handleLastnameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setLastname(e.target.value));
    }, [dispatch]);

    const handleAgeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setAge(Number(e.target.value)));
    }, [dispatch]);

    const handleAvatarChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setAvatar(e.target.files[0]);
        }
    }, []);

    return (
      <div className={classNames(cls.ProfilePage, {}, [])}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {!isLoading && !isEditing && (
          <div>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Firstname: {user.firstname}</p>
              <p>Lastname: {user.lastname}</p>
              <p>Age: {user.age}</p>
              {user.avatar && <img src={`http://localhost:5001/uploads/${(user.avatar).toString()}`} alt="Avatar" />}
              <Button onClick={handleEdit}>Изменить</Button>
              <UserItemsBtn />
          </div>
      )}
      {!isLoading && isEditing && (
          <form>
              <input
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={user.username}
                  onChange={handleUsernameChange}
              />
              <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={handleEmailChange}
              />
              <input
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  value={user.firstname}
                  onChange={handleFirstnameChange}
              />
              <input
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  value={user.lastname}
                  onChange={handleLastnameChange}
              />
              <input
                  name="age"
                  type="number"
                  placeholder="Age"
                  value={user.age || ''}
                  onChange={handleAgeChange}
              />
              <input
                  name="avatar"
                  type="file"
                  onChange={handleAvatarChange}
              />
              <Button type="button" onClick={handleSave}>Сохранить</Button>
              <Button type="button" onClick={() => setIsEditing(false)}>Отменить</Button>
          </form>
      )}
  </div>
    )
});

export default ProfilePage;
