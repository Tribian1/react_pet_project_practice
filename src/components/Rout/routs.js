import About from '../../pages/About';
import Post from '../../pages/Post';
import PostIdPage from '../../pages/PostIdPage';
import Login from '../../pages/Login';


export const privateRoutes = [
    {path: '/About', element: <About/>, exact:true},
    {path: '/Post', element: <Post/>, exact:true},
    {path: '/PostIdPage/:id', element: <PostIdPage/>, exact:true},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact:true},
]