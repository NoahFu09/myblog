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
import UserPassword from './pages/Backend/UserPassword';
import NavbarBackend from './components/NavbarBackend';
import Post from './pages/Backend/Post';
import Category from './pages/Backend/Category';
import CategoryEdit from './pages/Backend/CategoryEdit';
import PGA001 from './pages/Backend/PGA001';
import PGA002 from './pages/Backend/PGA002';

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
                path: '/manage/userpassword',
                element: <UserPassword />,
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
            {
                path: '/manage/categoryedit',
                element: <CategoryEdit />,
            },
            {
                path: '/manage/pga001',
                element: <PGA001 />,
            },
            {
                path: '/manage/pga002',
                element: <PGA002 />,
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
