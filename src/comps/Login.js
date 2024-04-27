import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Import Firebase auth instance
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import signInWithEmailAndPassword function

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State to track errors

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Authenticate the user with email and password
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in:', userCredential.user);
        } catch (error) {
            // Handle any errors during authentication
            setError(error.message);
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="login-container flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="login-form bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                        <label className="block mb-2">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block mb-2">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error messages */}
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-sm text-gray-600">
                        Don't have an account? <Link to="/Registration" className="text-blue-600 hover:underline">Create a new account</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;
