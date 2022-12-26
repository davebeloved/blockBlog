import React from 'react';

// import react-router 
import { Routes, Route } from 'react-router-dom'



// import components

import Home from './Routes/Home';
import AllPost from './Routes/AllPost';
import Ideals from './Routes/Ideals';
import About from './Routes/About';
import BlogPage from './Routes/BlogPage';
import ContactPage from './Routes/ContactPage';



const App = () => {

  return (
    <div className=''>

        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/post' element={ <AllPost />} />
          <Route path='/ideas' element={ <Ideals />} />
          <Route path='/about' element={ <About />} />
          <Route path='/blog' element={ <BlogPage />} />
          <Route path='/contact' element={ <ContactPage />} />
        </Routes>
    </div>
  );
};

export default App;
