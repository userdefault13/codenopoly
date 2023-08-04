// pages/signup.js
import { useState } from 'react';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
        // Send a POST request to your backend API to create a new user account
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            // User account created successfully
            console.log('Account created successfully!');
        } else {
            // Handle error, e.g., username already taken
            console.error('Account creation failed!');
        }
        } catch (error) {
        console.error('Error creating account:', error);
        }
    };

    return (
        <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
};

export default SignUp;
