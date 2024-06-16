import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Suspense, useEffect } from "react";
import { AppDispatch } from "./providers/StoreProvider";
import { useDispatch } from "react-redux";
import { checkUser } from "entities/User";

const App = () => {
    const {theme} = useTheme();
    const dispatch: AppDispatch = useDispatch();
    
    useEffect(() => {
        const initializeApp = async () => {
            await dispatch(checkUser());
        };
        initializeApp();
    }, [dispatch]);
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <AppRouter />
            </Suspense>
        </div>
    )
}

export default App;