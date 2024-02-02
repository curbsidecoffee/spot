import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Book from './pages/book'
import Default from './pages/default'
import Error from './pages/error'
import Header from './components/header';
import Footer from './components/footer';
import Loading from './components/loading';
import { useState } from 'react';

function App() {
    const [isLoading, setIsLoading] = useState('true')

  return (
   <div>
    <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={<Default/>} />
            <Route path="/spot" element={<Default/>} />
            <Route path="/home" element={<Default/>} />
            <Route path="/welcome/:section" element={<Default/>} />
            <Route path="/bookings" element={<Book/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  </div>
  );
}


export default App;
