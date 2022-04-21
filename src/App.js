import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './Components/NavBar/NavBar';
import NavBarImages from './Components/NavBar/NavBarImages';
import LoginForm from './Components/LoginForm/LoginForm';
import LoginImage from './Components/LoginForm/LoginImage'; // wrong place
import Signup from './Components/SignUp/Signup';
import SignupImage from './Components/SignUp/SignupImage';
import NewsMain from './Components/NewsFeed/NewsMain';
import ProfileDetails from './Components/ProfileDetails/ProfileDetails';
import { store } from './redux/app/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostModal from './Components/Modal/PostModal';

function App() {
  return (
    <Provider store={store}>
      <div className='instagram-container'>
        <NavBar figures={NavBarImages} />
        <Router>
          <div className='main'>
            <Routes>
              <Route
                path='/login'
                element={<LoginForm loginSlides={LoginImage} />}
              />
              <Route
                path='/signup'
                element={<Signup signinSlides={SignupImage} />}
              />

              <Route path='/' element={<NewsMain />} />
              <Route path='/ProfileDetails' element={<ProfileDetails />} />
            </Routes>
          </div>
        </Router>
      </div>
      <ToastContainer />
    </Provider>
  );
}

export default App;
