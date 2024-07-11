import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { $api } from "shared/api/api";
import { FavoriteBtn } from "shared/ui/FavoriteBtn/ui/FavoriteBtn";

const AboutPage = memo(() => {
    const {t}= useTranslation();

    const [users, setUsers] = useState([]);

    const usersApi = async () => {
        try {
            const users = await $api.get('/user/users');
            if (users) {
                setUsers(users.data);       
            }
        } catch (error) {
            console.log('⚛ --- ⚛ --- ⚛ --- ⚛ ---  >>> ☢ users ☢ error:', error)
        }
    }

    const testProfile = async () => {
        try {
            const profile = await $api.get('/user/profile/1');
            console.log('profile --- >>> ', profile);
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <div>
            {t('О нас')}
            {t('test')}
            <FavoriteBtn />
            <button onClick={usersApi} >users</button>
            <button onClick={testProfile}> testProfile</button>
            {users && users.map((el) => (
                <div key={el.id}>
                    <h1>{el.username}</h1>
                </div>
            )
            )}
        </div>
    )
});

export default AboutPage;