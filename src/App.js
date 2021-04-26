import logo from './logo.svg';
import './App.css';

import {Header} from './Header'
import {Search} from './Search';
import {Closet} from './Closet'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Switch>
       <Route path= '/Search' component={Search} exact/>
       <Route path= '/' component={Closet}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
