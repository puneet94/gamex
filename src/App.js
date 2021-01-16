
import './App.css';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import deepFreeze from "deep-freeze";

//import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

import HomePageComponent from "./home";
import DetailsPageComponent from "./DetailsPage/components/DetailsPageComponent";
import { createStore } from 'redux';

const store = deepFreeze(createStore(
  rootReducer
));
function App() {
  return (
    <div className="App">
      Find & track the best free-to-play games! Search for what to play next!
      <Provider store={store}>
        <Router>
          <div>


            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/details" exact>
                <DetailsPageComponent />
              </Route>

              <Route path="/" exact>
                <HomePageComponent />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
//git push -u origin main