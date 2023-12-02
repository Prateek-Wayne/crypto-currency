import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage/HomePage';
import CryptoCurrencies from './components/CryptoCurrencies/CryptoCurrencies';
import CryptoExchanges from './components/Exchanges/CryptoExchanges';
import News from './components/News/News'
import './App.css';

const App = () => {
  return (
    <div className='main'>
      <div>
        <Navbar/>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
        <Routes>
          <Route path='/cryptocurrencies' element={<CryptoCurrencies/>} />
        </Routes>
        <Routes>
          <Route path='/cryptocurrencies/:id' element={<CryptoExchanges/>} />
        </Routes>
        <Routes>
          <Route path='/news' element={<News/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App