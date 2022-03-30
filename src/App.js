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

import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <NavBar figures={NavBarImages} />
      <Router>
        <div className="main">
          <Routes>
            <Route
              path="/login"
              element={<LoginForm loginSlides={LoginImage} />}
            />
            <Route
              path="/signup"
              element={<Signup signinSlides={SignupImage} />}
            />

            <Route path="/" element={<NewsMain />} />
            <Route path="/ProfileDetails" element={<ProfileDetails />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
