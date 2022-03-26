import { BrowserRouter as Router, Switch, Route,Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Instagram from "./Components/Instagram";
import { store } from "./redux/store";
import Homepage from "./Components/ProfileDetails/ProfileDetails";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>

          {/* <Instagram /> */}
          <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
