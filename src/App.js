
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignIn from './views/SignIn'
import UserList from './views/UserList'
function App() {
  return (
    <BrowserRouter>
       <Switch>
           <Route path="/userlist" component={UserList}></Route>
           <Route path="/" component={SignIn}></Route>
       </Switch>
   </BrowserRouter> 
  );
}

export default App;
