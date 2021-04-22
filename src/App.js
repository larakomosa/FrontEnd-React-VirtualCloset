import logo from './logo.svg';
import './App.css';

import {Header} from './Header'
import {Home} from './Home';
import {Closet} from './Closet'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Switch>
       <Route path= '/VirtualCloset' component={Home} exact/>
       <Route path= '/' component={Closet}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
