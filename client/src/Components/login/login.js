import React from 'react';
import logo from "../../assets/logo.png";
import styles from './login.css';
import Stack from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[700]),
    backgroundColor: red[700],
    '&:hover': {
        backgroundColor: red[800],
    },
}));

const Login = ()=>{

    return(

        <div >
            <div className={styles.logo}>
            <img src={logo} alt="logo" />
            </div>
            <Stack
                spacing={3}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '300px'},
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField required
                               fullWidth
                               id="outlined-required"
                               label="Username"
                               sx={{fontFamily:'Inter', fontStyle:'normal'}}/>
                </div>
                <div>
                    <TextField required
                               fullWidth
                               id="outlined-required"
                               label="Password"
                               type="password"
                               autoComplete="current-password"

                    />
                </div>
                <div>
                    <ColorButton variant="contained" size="large" value={'Login'}  sx={{fontWeight:'700',marginBottom:2}}>
                        Login
                    </ColorButton>

                </div>
                <div >
                    <label>Don’t have an account? sign up</label>
                </div>
            </Stack>
        </div>
    )
}

export default Login;