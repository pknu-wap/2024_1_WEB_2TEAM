import React from 'react'
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import './sign.css'

function Sign() {
    return (
        <body>
            <div class="Form-wrapper">
                <div id="logo-container">
                </div>
                <button class="btn" onclick={<LoginForm/>}>Sign In</button>
                <button class="btn" onclick={<RegistrationForm/>}>Sign Up</button>

                <div id="login-form" style="display: none;">
                    <h2>Sign In</h2>
                    <form method="post" action="server-url">
                        <input type="text" name="username" placeholder="Username"/>
                        <input type="password" name="userPassword" placeholder="Password"/>
                        <label for="remember-check">
                            <input type="checkbox" id="remember-check"/>Remember me
                        </label>
                        <input type="submit" class="submit-btn" value="Sign In"/>
                    </form>
                </div>

                <div id="registration-form" style="display: none;">
                    <h2>Sign Up</h2>
                    <form method="post" action="server-url">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="text" name="username" placeholder="Username"/>
                        <input type="password" name="userPassword" placeholder="Password"/>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password"/>
                        <input type="submit" class="submit-btn" value="Sign Up"/>
                    </form>
                </div>
            </div>
        </body>
    );
}

export default Sign;