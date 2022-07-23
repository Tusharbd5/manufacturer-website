import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
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

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>

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

          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
        </Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
