import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Single from './pages/Single';
//import Write from './pages/Write';
import Write from './pages/Backend/Write';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './style.scss';
import User from './pages/Backend/User';
import NavbarBackend from './components/NavbarBackend';
import Post from './pages/Backend/Post';
import Category from './pages/Backend/Catgory';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

const LayoutBackend = () => {
    return (
        <>
            <NavbarBackend />
            <Outlet />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/post/:id',
                element: <Single />,
            },
            // {
            //     path: '/write',
            //     element: <Write />,
            // },
        ],
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <LayoutBackend />,
        children: [
            {
                path: '/manage/user',
                element: <User />,
            },
            {
                path: '/manage/post',
                element: <Post />,
            },
            {
                path: '/manage/write',
                element: <Write />,
            },
            {
                path: '/manage/category', //網址輸入大小寫沒差
                element: <Category />,
            },
        ],
    },
]);

function App() {
    return (
        <div className="app">
            <div className="container">
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;
