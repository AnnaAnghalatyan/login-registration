import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="form-container">
            <h1>Welcome! </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aperiam blanditiis commodi delectus
            dignissimos, dolorum ducimus fugiat, in minus nam necessitatibus nostrum officia, sed similique sit
                voluptatum! A, minus.</p>
            <Link className="sign-in-btn" to='/sign-in'>Sign in</Link> .
            <div>Still don't have an account?</div>
            <Link to='/sign-up'>Sign up !</Link>
        </div>
    )
}

export default HomePage;