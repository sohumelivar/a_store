import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Suspense } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();
 
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>theme</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            <Link to={'/counter'}>Counter</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;