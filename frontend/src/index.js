import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element ={<App />}>
     <Route index={true} path="/" element ={<HomeScreen />} />
     <Route path='/product/:id' element={<ProductScreen />} />


    </Route>
  )
)

root.render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
