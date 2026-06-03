import { useState } from "react";
import fetchModelData from "../../lib/fetchModelData"
function LoginRegister({ onLogin }){
    
    const [ loginName, setLoginName ] = useState("");
    const [ password, setPassword ] = useState("");
    const [error, setError] = useState("");

    function handleLogin(){
        fetchModelData("/admin/login", {
            method: "POST",
            body: {
                login_name: loginName,
                password: password,
            },
        }).then((user) => {
            setError("");
            onLogin(user);
        }).catch(() => {
            setError("Login failed");
        });
    }

    return(
        <div>
            <h1>Please Login</h1>

            <div>
                <input 
                    placeholder="Name login"
                    type="text"
                    value={loginName}
                    onChange={(e) =>{setLoginName(e.target.value)}}
                />
            </div>
            <hr />
            <hr />
            <div>
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
        </div>
    );
}
export default LoginRegister;