
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
//import './styles.css';

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
   const navigate=useNavigate();
   const handle=()=>{
    navigate("/home");
   }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xl" className='Container'>
        {/* <CssBaseline /> */}
        <div style={{backgroundImage:`url(https://img.freepik.com/free-photo/female-volunteer-with-gloves-handling-box-food-donations_23-2148733761.jpg?w=1060&t=st=1701027568~exp=1701028168~hmac=4dfe49c204e316d1c62a6ecfb162395a7c926d81fe6fb9e41ffd130072b4ab81)`}}>
        <Box
          sx={{
            
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat:'no=repeat',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            width:'100%',      
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            {/* //<LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {/* <form onSubmit={()=>alert("Form Submitted")}> */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handle}
            >
              LOGIN
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Typography>
                  Don't have an account?{' '}
                <Link href="/signup" variant="body2">
                  SignUp
                </Link>
                </Typography>
              </Grid>
            </Grid>
            {/* </form> */}
          </Box>
        </Box>
    </div>
      </Container>
    </ThemeProvider>
  );
}