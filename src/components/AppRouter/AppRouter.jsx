import React, { useContext } from 'react';
import {Route, Routes} from 'react-router-dom'
import {privateRoutes, publicRoutes} from '../Rout/routs';
import { AuthContext } from '../../context';

import Login from '../../pages/Login';
import Loader from '../UI/Loader/MyLoader';

const AppRouter = () => {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader />
    }

    return (
        isAuth 
        ? 
            <Routes>
                {privateRoutes.map(routs => 
                    <Route
                        element={routs.element}
                        path={routs.path}
                        exact={routs.exact}
                        key={routs.path}
                    />
                )}
            </Routes>
            
        : 
            <Routes>
                {publicRoutes.map(routs => 
                    <Route
                        element={routs.element}
                        path={routs.path}
                        exact={routs.exact}
                        key={routs.path}
                    />
                )}
               <Route path ='*' element={<Login />} />
            </Routes>
        
    );
};

export default AppRouter;