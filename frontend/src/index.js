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
import { Provider } from 'react-redux';
import store from './store'
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoute from './components/PrivateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element ={<App />}>
     <Route index={true} path="/" element ={<HomeScreen />} />
     <Route path='/product/:id' element={<ProductScreen />} />
     <Route path='/cart' element={<CartScreen />} />
     <Route path='/login' element={<LoginScreen />} />
     <Route path='/register' element={<RegisterScreen />} />
<Route path="" element={<PrivateRoute/>}>
  {/* only access once logged in  */}
<Route path='/shipping' element={<ShippingScreen />} />

</Route>

    </Route>
  )
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
{/* wrap routerprovider in store */}
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
