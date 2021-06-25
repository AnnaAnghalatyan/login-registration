import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

const SignUp = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        console.log("Search message inside useEffect: ", data);
    }, [data]);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }

    const onInput = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }


    return (
        <div className="form-container">
            <form onSubmit={onSubmit} action="" className="sign-up-form">
                <h2 className="form-title">
                    Create An Account
                </h2>
                <small>Create an account to enjoy all the services without any ads for free!</small>
                <div className="form-group">
                    <input onInput={onInput} placeholder="First Name" name="name" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <input onInput={onInput} placeholder="Last Name" name="surname" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <input onInput={onInput} placeholder="Email" name="email" type="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <input onInput={onInput} placeholder="Password" name="password" type="password" className="form-control"/>
                </div>
                <button className="sign-in-btn">
                    create account
                </button>
                <small>
                    Already have an account?
                    <Link className="link" to="/sign-in">Sign In.</Link>
                </small>
            </form>
        </div>
    )
}

export default SignUp;