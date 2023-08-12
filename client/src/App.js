import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Header from './component/header/Header';
import { useAuth } from './context/auth';
import Category from './Dashboard/Category';
import CreateNews from './Dashboard/CreateNews';
import News from './Dashboard/News';
import DashQuote from './Dashboard/DashQuote';
import EditNews from './Dashboard/EditNews';
import SingleNews from './component/singleNews/SingleNews';
import SearchList from './pages/SearchList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Categories from './component/Categories';
import CatF from './pages/CatF';
import Footer from './component/footer/Footer';
import Subscribers from './component/Subscribers';
import SunscriberList from './Dashboard/SunscriberList';
function App() {
  const [auth] = useAuth()
  return (
    <>
    <Header/>
    <Categories/>
   <ToastContainer
    position="top-center"
    autoClose={500}
    theme="light"  
   />
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/sin-news/:id' element={<SingleNews/>}/>
    <Route path='/search' element={<SearchList/>}/>
    <Route path='/query' element={<CatF/>}/>
   




   
    
    {
     auth?.user?.role === 'admin' ?<><Route path='/dashboard' element={<DashQuote/>}/>
     <Route path='/category' element={<Category/>}/>
     <Route path='/create-news' element={<CreateNews/>}/>
     <Route path='/all-news' element={<News/>}/>
     <Route path='/update-news/:id' element={<EditNews/>}/>
     <Route path='/subscriber-list' element={<SunscriberList/>}/>
  
      </>
     
    :""
}
  </Routes>
  <Subscribers/>
  <Footer/>
    </>
  );
}

export default App;
