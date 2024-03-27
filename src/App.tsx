import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import "./styles/index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme();
 
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>theme</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            <Link to={'/counter'}>Counter</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/counter'} element={<Counter />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;