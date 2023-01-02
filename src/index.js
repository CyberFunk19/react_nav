import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Lion from './Lion';
import Elephant from './Elephant';
import Bear from './Bear';
import Kangaroo from './Kangaroo';
import Predetors from './Predetors';
import Friendly from './Friendly';
import Zoo from './Zoo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/Zoo" element={<Zoo />} >
            <Route path="/Zoo/Predetors" element={<Predetors />} >
              <Route path="/Zoo/Predetors/Lion" element={<Lion />} />
              <Route path="/Zoo/Predetors/Bear" element={<Bear />} />
            </Route>
            <Route path="/Zoo/Friendly" element={<Friendly />} >
              <Route path="/Zoo/Friendly/Elephant" element={<Elephant />} />
              <Route path="/Zoo/Friendly/Kangaroo" element={<Kangaroo />} />
            </Route>
          </Route>
        </Route>
        <Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
