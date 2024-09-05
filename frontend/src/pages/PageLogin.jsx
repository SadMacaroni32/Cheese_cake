import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { encryptData } from './utils/LoginEncryption';

function Login() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear();
    }, []);

    const handleLogin = async () => {
        if (!email || !name) {
            alert('Please fill in both email and name.');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:8080/users/login', {
                email: email,
                name: name
            });
    
            if (response.data) {
                const encryptedData = encryptData(response.data);
                localStorage.setItem('userData', encryptedData);
    
                navigate('/index');
            } else {
                alert('Login Failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Login Failed. Please try again.');
        }
    };
    

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;
