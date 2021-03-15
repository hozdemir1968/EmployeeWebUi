import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Navigation} from './components/Navigation';
import {Home} from './components/Home';
import {Department} from './components/Department';
import {Employee} from './components/Employee';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          React JS Tutorial
        </h3>
        <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/department" component={Department} />
            <Route path="/employee" component={Employee} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;