import websiteLogo from '../assets/img/website-logo.png';
import React, {useState} from 'react';
import Axios from 'axios';

function Registration(){ 

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
        Axios.post()
    }

    return (
			<div className="container-fluid bodyColor">
				<center>
					<br />
					<br />
					<img src={websiteLogo} style={{ width: "150px" }} alt="icon-logo" />
					<form action="">
						<div class="mt-3">
							<label for="username" class="form-label">
								Username:
							</label>
							<input
								type="text"
								class="form-control w-25"
								name="username"
								id="username"
								onChange={(e) => {
									setUsernameReg(e.target.value);
								}}
								required
							/>
						</div>
						<div class="mt-3">
							<label for="pass" class="form-label">
								Password:
							</label>
							<input
								type="password"
								class="form-control w-25"
								name="pass"
								id="pass"
								onChange={(e) => {
									setPasswordReg(e.target.value);
								}}
								required
							/>
						</div>
						<button
							type="submit"
							class="btn mt-3"
							style={{ backgroundColor: "#CBA582", color: "white" }}
						>
							Submit
						</button>
					</form>
				</center>
				<br />
				<br />
				<br />
			</div>
		);
}
export default Registration;