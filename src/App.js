import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Purchase from './pages/Order/Purchase';
import Navbar from './pages/Shared/Navbar';
import SignUp from './pages/UserInfo/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/UserInfo/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import RequireAuth from './pages/UserInfo/RequireAuth';
import MyOrder from './pages/Dashboard/MyOrder';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import Users from './pages/Dashboard/Users';
import RequireAdmin from './pages/UserInfo/RequireAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import useAdmin from './hooks/useAdmin';
import ManageOrders from './pages/Dashboard/ManageOrders';
import AddTools from './pages/Dashboard/AddTools';
import AllTools from './pages/Home/AllTools';
import Payment from './pages/Dashboard/Payment';
import ManageProduct from './pages/Dashboard/ManageProduct';
import NotFound from './pages/NotFound/NotFound';
import Blogs from './pages/Blogs/Blogs';
import Portfolio from './pages/MyPortfolio/Portfolio';


function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>

        <Route path='all-tools' element={<AllTools></AllTools>}></Route>

        <Route path='purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}></Route>

        <Route path='sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='login' element={<Login></Login>}></Route>

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          {
            !admin && <>
              <Route index element={<MyOrder></MyOrder>}></Route>
              <Route path='review' element={<AddReview></AddReview>}></Route>
            </>
          }

          <Route index element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>
          }></Route>
          <Route path='users' element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}></Route>

          <Route path='manage-order' element={<RequireAdmin>
            <ManageOrders></ManageOrders>
          </RequireAdmin>}></Route>

          <Route path='add-tools' element={<RequireAdmin>
            <AddTools></AddTools>
          </RequireAdmin>}></Route>

          <Route path='manage-tools' element={<RequireAdmin>
            <ManageProduct></ManageProduct>
          </RequireAdmin>}></Route>

          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
