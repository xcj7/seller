
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './Component/Layout';
import AddDeliveryman from './Component/AddDeliveryman';
import DeliveryHistory from './Component/DeliveryHistory';
import DeliverymanRequest from './Component/DeliverymanRequest';
import OrderList from './Component/OrderList';
import OrderHistory from './Component/OrderHistory';
import AProfile from './Component/AProfile';
import User from './Component/User/User';
import ABuyer from './Component/User/OrderList';
import ADetails from './Component/User/ADetails';
import OrderedUser from './Component/OrderedUser';
import AProducts from './Component/AProducts';
import AShopInformation from './Component/AShopInformation';
import Login from './Component/Login';
import DeliverymanRegistration from './Component/DeliverymanRegistration';
import ShopRegistration from './Component/ShopRegistration';
//tushar
import Head from './Shop/Head';
import AllProduct from './Shop/AllProduct';
import Product from './Shop/Product';
import Loginn from './Shop/Login';
import SignOut from './Shop/SignOut';
import Detaill from './Shop/Detaill';
import Delete from './Shop/Delete';
import ProductEdit from './Shop/ProductEdit'
import OrderRequest from './Deliveryman/OrderRequest';
import RequestedUser from './Deliveryman/RequestedUser';
import Logout from './Component/Logout';
import Recieve_order from './Shop/Recieve_order';
import Detail_OrderList from './Shop/Detail_OrderList';
import Profile_seller from './Shop/Profile_seller';



// mithila

function App() {
  return (
    <div>
     <Router>
     
      <Routes>
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/home' element={<Layout/>} />
        <Route exact path='/user' element={<User/>} />
        <Route exact path='/add_deliveryman' element={<AddDeliveryman/>} />
        <Route exact path='/delivery_history' element={<DeliveryHistory/>} />
        <Route exact path='/delivery_request' element={<DeliverymanRequest/>} />
        <Route exact path='/order_list' element={<OrderList/>} />
        <Route exact path='/order_history' element={<OrderHistory/>} />
        <Route exact path='/all_user' element={<ABuyer/>} />
        <Route exact path='/profile' element={<AProfile/>} />
        <Route exact path='/details:id' element={<ADetails/>} />
        <Route exact path='/ordered_user:id' element={<OrderedUser/>} />
       < Route exact path='/products' element={<AProducts/>} />
       < Route exact path='/shop_info:id' element={<AShopInformation/>} />
       < Route exact path='/deliveryman' element={<DeliverymanRegistration/>} />
       < Route exact path='/seller' element={<ShopRegistration/>} />
       <Route exact path='/allProduct' element={ <AllProduct />} />
             {/* tushar */}
        <Route exact path='/detaill:id' element={<Detaill />} />
        <Route exact path='/productedit:id' element={<ProductEdit />} />
        <Route exact path='/delete:id' element={<Delete />} />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='/loginn' element={<Loginn/>} />
        <Route exact path='/signout' element={<SignOut/>} />
        <Route exact path='/recieve_order' element={<Recieve_order/>} />
        <Route exact path='/detail_orderlist:id' element={<Detail_OrderList/>} />
        <Route exact path='/profile_seller' element={<Profile_seller/>} />
        {/* mithila */}
        <Route exact path='/order_request' element={<OrderRequest />} />
        <Route exact path='/user_request:id' element={<RequestedUser />} />
        <Route exact path='/logout' element={<Logout />} />
       
      </Routes>
      </Router>
    </div>
  );
}

export default App;
