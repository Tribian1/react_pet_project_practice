import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import MyButton from '../UI/button/MyButton';
import { AuthContext } from '../../context';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to ='/about'>About</Link>
                <Link to ='/post'>Posts</Link>
                <MyButton onClick={logout}>
                    Log Out
                </MyButton>
            </div>
        </div>
    );
};

export default Navbar;