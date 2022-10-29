// 1. The app must be a authenticated app. It can accept fake login with details, username: foo, password: bar.
// 2. Post login route is '/home'. This route shows our main list UI. This page shouldn't be accessible by non logged in users.
// 3. logged in pages must show logout button. On click of this logout it will redirect to the login page.

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from "../styles/Login.module.css";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'foo' && password === 'bar') {
        localStorage.setItem('auth', 'true');
        window.location.href = '/home';
        } else {
        setError(true);
        }
    };
    
    return (
        <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.container}
        >
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className={styles.error}>Invalid username or password</p>}
            <button type='submit'>Login</button>
        </form>
        </motion.div>
    );
}

export default Login;