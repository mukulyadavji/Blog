import {createBrowserRouter,RouterProvider,Route, Outlet} from 'react-router-dom'
import Home from './components/Home';
import Single from './components/Single';
import Write from './components/Write';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components nav fot/Footer';
import Navbar from './components nav fot/Navbar';
import './style.scss';

const Layout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
      children:[
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/post/:id",
          element:<Single/>
        },
        {
          path: "/write",
          element:<Write/>
        },
      ]
    
  },

  {
    path: "/register",
    element: <Register/>,
  },

  {
    path: "/login",
    element: <Login/>,
  },
]);


function App() {
  return (
    <div className="app">
      <div className='container'>
      <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
