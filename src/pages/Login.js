import websiteLogo from '../assets/img/website-logo.png';

function Login(){
    return(
        <div className="container-fluid bodyColor">
            <center><br/><br/><br/>
            <img src={websiteLogo} style={{width:"150px"}} alt="icon-logo"/>
            <form action=''>
                <div className='mt-3'>
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control w-25" name="username" id="username" required/>
                </div>
                <div class="mt-3">
                    <label for="pass" class="form-label">Password</label>
                    <input type="password" class="form-control w-25" name="pass" id="pass" required/>
                </div>
                <button type="submit" class="btn mt-3"  style={{backgroundColor: "#CBA582", color: "white"}}>Submit</button>
            </form>
            </center><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default Login;