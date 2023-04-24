import React from 'react';

const Login = () => {
    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder="username" name="username" />
                <input required type="password" placeholder="password" name="password" />
                <button>Login</button>

            </form>
        </div>
    );
};

export default Login;
