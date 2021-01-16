
import './App.css';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import deepFreeze from "deep-freeze";

import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

import HomePageComponent from "./home";
import DetailsPageComponent from "./DetailsPage/components/DetailsPageComponent";
import { createStore ,applyMiddleware} from 'redux';
import {fetchCategories, fetchGames} from "./home/actions/gamesData";

const store = applyMiddleware(thunk)(createStore)(rootReducer);


deepFreeze(store);

store.dispatch(fetchCategories());
store.dispatch(fetchGames());
function App() {
  return (
    <div className="App">
      <h2>Find &amp; track the best free-to-play games! </h2><h4>Search for what to play next!
      </h4><Provider store={store}>
        
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