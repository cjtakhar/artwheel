import { useState } from 'react';
import '../styles/SignUp.css';

const SignUp = () => {
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        alert("Nice! Stoked to meet you! We are not quite ready for members but we will be soon!");
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <input className="email" type="text" id="email" placeholder="email" />
                    <input className="password" type="password" id="password" placeholder="password" />
                    <button className="submit-btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
