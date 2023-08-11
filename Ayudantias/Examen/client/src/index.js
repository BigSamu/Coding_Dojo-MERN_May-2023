import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import PiratesView from './View/PiratesView/Pirates.view';
import PirateDetailView from './View/PirateDetailView/PirateDetail.view';
import PirateCreateView from './View/PirateCreateView/PirateCreate.view';
import HomeView from './View/HomeView/Home.view';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route index={true} path="/" element={<HomeView />} />
      <Route path="/pirates/" element={<PiratesView />} />
      <Route path="/pirate/new/" element={<PirateCreateView />} />
      <Route path="/pirate/:id" element={<PirateDetailView />} />
     </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
