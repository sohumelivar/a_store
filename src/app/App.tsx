import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();
 
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>theme</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            <Link to={'/counter'}>Counter</Link>
            <AppRouter />
        </div>
    )
}

export default App;