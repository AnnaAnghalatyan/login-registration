import './App.scss';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {useEffect, useState} from "react";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const setLoggIn = () => {
        setLoggedIn(true);

    }

    useEffect(() => {

    }, [loggedIn]);

    return (
        <Router>
            <div className="page-wrapper">
                <Switch>
                    <PublicRoute restricted={false} component={HomePage} path="/" exact />
                    <PublicRoute restricted={true} component={SignIn} path="/sign-in" exact />
                    <PublicRoute restricted={true} component={SignUp} path="/sign-up" exact />
                    <PrivateRoute component={Profile} path="/profile" exact />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
