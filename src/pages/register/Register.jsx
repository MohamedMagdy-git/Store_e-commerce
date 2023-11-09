import React, { useState } from 'react'
import './Register.scss'
import vid from '../../assets/Vid.mp4'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { postDataToApi } from '../../utils/api';
import axios from 'axios';
import useFetch from '../../usehooks/useFetch';

const Register = () => {
    // usestate to save input values
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPasword] = useState('')

const user =  { username, email ,password }

const API_TOKEN = '057a9a7bcaf81d3b43dd3c6a9879513d379ada396abc87a5870f5bf3f5e2e81cc249e4aa5f8afea638d4b28b69f9279448b29d982943c6f168c6ef6a793165c2f8f9dc2c43cf0d1cc7bbeb6fdf70aa0fa79f0709288e5734e8f901add54adfa8e0f3f2f19d1ea8efbda24c9468d61c6a73a80daad52ed9e255d4aa6ccb7b3649';



const createUser = () =>  fetch('http://localhost:1337/api/dataes', {
            method: 'POST',
            mode: 'cors',
            headers: { "Content-Type": "application/json",
                "Authorization" : "Token " + API_TOKEN },
            body: JSON.stringify({data:user})

        }).then(res => console.log(res))

    // const {data} = useFetch('/dataes')
    
    // console.log(data);

  return (
    <div className='logPage'>
    <div className='content' >
        <div className="vidContent">
            <video autoPlay loop muted src={vid}></video>

            <div className="textDiv">
                <h2 className="title">
                New season
                <br></br>
                 New collection
                </h2>
            </div>

            <div className="footerDiv">
                <span className="text">have an account?</span>
                <Link to={'/login'}>
                    <button className='btn'>Login</button>
                </Link>
            </div>
        </div>

        <div className="formDiv">
            <div className="headerDiv">
                <h2 className="logo">STORE</h2>
                <h3 className="text">Wellcome Back!</h3>
            </div>

            <form action="" className='form'>
                {/* <span >Login Status Will go here</span> */}

                <div className="inputDiv">
                    <label htmlFor="username">Username</label>
                    <div className="input">
                        <AccountCircleIcon/>
                        <input type='username'
                         name="username"
                          id="username"
                          required
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder='Enter username' />
                          
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="username">E-mail</label>
                    <div className="input">
                        <AlternateEmailIcon/>
                        <input type='email' 
                        name="email" 
                        id="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                          placeholder='Enter email' />
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="password">Password</label>
                    <div className="input">
                        <KeyIcon/>
                        <input type="password"
                         name="password"
                          id="password"
                          required
                          onChange={(e) => setPasword(e.target.value)}
                          placeholder='Enter username' />
                    </div>
                </div>


                <div className="inputDiv">
                    <button type="submit" onClick={(e)=> {
                        createUser()
                        e.preventDefault();
                        }}>
                        <span>sign up</span>
                        <ArrowRightAltIcon />
                    </button>
                </div>

              
            </form>
        </div>
    </div>
</div>
  )
}

export default Register