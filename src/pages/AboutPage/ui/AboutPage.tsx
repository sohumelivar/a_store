import { Counter } from "entities/Counter/ui/Counter";
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

    return (
        <div>
            {t('О нас')}
            {t('test')}
            <Counter />
            <FavoriteBtn />
            <button onClick={usersApi} >users</button>
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