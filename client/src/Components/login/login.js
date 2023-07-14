import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import styles from './login.css';
import { Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[700]),
    backgroundColor: red[700],
    '&:hover': {
        backgroundColor: red[800],
    },
}));

const Login = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        // Check if the user is already logged in
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent form submission

        try {
            // Make a POST request to the server-side login endpoint
            const response = await axios.post('http://localhost:3000/auth/login', {
                username,
                password,
            });

            if (response.status === 200) {
                // Extract the token from the response data
                const token = response.data.token;
                // Do something with the token (e.g., store it in localStorage)
                localStorage.setItem('token', token);
                // Redirect the user to the homepage
                navigate('/');
            } else {
                // Handle error response
                console.log('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error);
            // Handle error
        }
    };

    return (
        <div>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>
            <Box
                component="form"
                onSubmit={handleLogin}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& .MuiTextField-root': { m: 2, width: '300px' },
                }}
                noValidate
            >
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Username"
                    sx={{ fontFamily: 'Inter', fontStyle: 'normal' }}
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ColorButton
                    type="submit"
                    variant="contained"
                    size="large"
                    value={'Login'}
                    sx={{ fontWeight: '700', marginBottom: 2 }}
                >
                    Login
                </ColorButton>
            </Box>
        </div>
    );
};

export default Login;
