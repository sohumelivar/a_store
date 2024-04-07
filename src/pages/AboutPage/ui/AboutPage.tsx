import { Counter } from "entities/Counter/ui/Counter";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const {t}= useTranslation('about');


    return (
        <div>
            {t('О нас')}
            {t('test')}
            <Counter />
        </div>
    )
}

export default AboutPage;