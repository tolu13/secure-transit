import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Dashboard from './components/dashboard/Dashboard'; // Example page component
import Deposit from './components/deposit/Deposit';
import Transfer from './components/transfer/Transfer';
import Invest from './components/invest/Invest';
import reportWebVitals from './reportWebVitals';
import { Navbar } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/invest" element={<Invest />} />
      </Routes>
    </BrowserRouter>
);

reportWebVitals();
