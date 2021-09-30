import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import CreateRecipe from './components/CreateRecipe';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {    
    return (
        <Router>
        <div className="">
            <NavBar/>
            <Switch>
                <Route path="/create_recipe">
                    <CreateRecipe/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <SignUp/>                
                </Route>    
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
        </Router>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))