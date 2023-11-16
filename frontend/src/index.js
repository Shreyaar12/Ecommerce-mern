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
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import {PayPalScriptProvider} from '@paypal/react-paypal-js'
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
<Route path='/payment' element={<PaymentScreen />} />
<Route path='/placeorder' element={<PlaceOrderScreen />} />
<Route path='/order/:id' element={<OrderScreen />} />
<Route path='/profile' element={<ProfileScreen />} />

</Route>

    </Route>
  )
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
      <RouterProvider router={router} />
      </PayPalScriptProvider>
   
{/* wrap routerprovider in store */}
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
