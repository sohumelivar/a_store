import { Counter } from "entities/Counter/ui/Counter";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { FavoriteBtn } from "shared/ui/FavoriteBtn/ui/FavoriteBtn";

const AboutPage = memo(() => {
    const {t}= useTranslation('about');


    return (
        <div>
            {t('О нас')}
            {t('test')}
            <Counter />
            <FavoriteBtn />
        </div>
    )
});

export default AboutPage;