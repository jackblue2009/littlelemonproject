import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import './App.css';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainComp />} />
        <Route path='/booking' element={<BookingComp />} />
      </Routes>
    </Router>
  );
}

function MainComp() {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}

function BookingComp() {
  return (
    <>
      <Header />
      <BookingPage />
      <Footer />
    </>
  );
}

export default App;
