import './App.css';

import { Route, Routes } from 'react-router-dom';
import BlogPostLinks from './components/BlogPostLinks';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import { createContext, useState } from 'react';
import Protected from './components/Protected';
import Blogs from './components/Blog/Blogs';
import Posts from './components/Post/Posts';
import PostDetails from './components/Post/PostDetails';

import BlogDetails from './components/Blog/BlogDetails';
import Logout from './components/Logout';
import NoPage from './components/NoPage';
import CheckLogin from './components/CheckLogin';

export const loginContext = createContext()

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("LoggedUser") ? true : false)

  return (
    <div className='container mainpage' style={{ height: "100vh" }}>

      <loginContext.Provider value={[isLoggedIn, setIsLoggedIn]}>

        <Routes >
          <Route path='/' element={<BlogPostLinks />}>

            <Route index element={<Home />} />
            <Route path='about' element={<About />} />

            <Route path='blogs' >
              <Route index element={<Protected> <Blogs /> </Protected>} />
              <Route path=':id' element={<Protected> <BlogDetails /> </Protected>} />
            </Route>

            <Route path='posts' >
              <Route index element={<Protected> <Posts /> </Protected>} />
              <Route path=':id' element={<Protected> <PostDetails /> </Protected>} />
            </Route>

            <Route path='login' element={<CheckLogin><Login /></CheckLogin>} />

            <Route path='logout' element={<Logout />} />

            <Route path="*" element={<NoPage />} />

          </Route>
        </Routes>
      </loginContext.Provider>
    </div>

  );
}

export default App;
