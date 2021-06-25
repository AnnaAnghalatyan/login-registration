import {useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import {login} from "../utils";


const SignIn = ({setLoggIn}) => {
    const [data, setData] = useState({});
    const [loggedIn, setLoggedIn] = useState(false)

    let history = useHistory();

    const onInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        console.log("Search message inside useEffect: ", data);
    }, [data]);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submit');

        login(data)
        history.push("/profile");
    }

    return (
        <div className="form-container">
            <form onSubmit={onSubmit} action="" className="sign-up-form">
                <h2 className="form-title">
                    Hey there!
                </h2>

                <div className="form-group">
                    <input onChange={onInput} placeholder="phone" name="phone" type="tel" className="form-control"/>
                </div>
                <div className="form-group">
                    <input onChange={onInput} placeholder="Password" name="password" type="password" className="form-control"/>
                </div>
                <button className="sign-in-btn">
                    sign in
                </button>
                <small>
                    Don't have an account?
                    <Link className="link" to="/sign-up">Sign Up.</Link>
                </small>
            </form>
        </div>
    )
};

export default SignIn