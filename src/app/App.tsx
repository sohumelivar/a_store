import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Suspense, useEffect } from "react";
import { AppDispatch, RootState } from "./providers/StoreProvider";
import { useDispatch, useSelector } from "react-redux";
import { initAuthData } from "entities/User";
import { getItemsAll } from "entities/Items";

const App = () => {
    const {theme} = useTheme();
    const dispatch: AppDispatch = useDispatch();
    const { items, isLoading, error } = useSelector((state: RootState) => state.items);
    
    useEffect(() => {
        dispatch(initAuthData());
        dispatch(getItemsAll());
    }, [dispatch])
    
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