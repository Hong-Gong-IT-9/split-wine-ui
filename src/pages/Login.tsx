import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import style from './Login.module.css'

const Login = () => {
    
    return <div className={style['login-section']}>
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="outlined" onClick={()=>console.log("submitted")}>Submit</Button>

    </div>
}

export default Login;
