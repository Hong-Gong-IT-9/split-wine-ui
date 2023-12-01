import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


const Login = () => {
    
    return <div>
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
