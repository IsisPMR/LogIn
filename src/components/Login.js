import * as React from 'react';
import {  GlobalContext } from './GlobalContextProvider';
import TextField from '@material-ui/core/TextField';


const Login = () => {
    const {username, password} = React.useContext(GlobalContext);
    //console.log(username, password);

    const [userInput, setUser] = React.useState("");
    const [passwordInput, setPassword] = React.useState("");

    return <>
    <div>
        <div>
            <TextField label="username" onChange={(e) => setUser(e.target.value)}/>
        </div>
        <div>
            <TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>

    <button onClick={() => {if(username === userInput && password === passwordInput){
                            console.log("Succsesfull LogIn");
                            }else{
                            console.log("LogIn Failed");
    }}}>Log in</button>
    </div>
    </>
    };

export default Login;