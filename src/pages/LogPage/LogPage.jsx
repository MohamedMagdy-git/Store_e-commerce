import React from 'react'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import './LogPage.scss'
import vid from '../../assets/Vid.mp4'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const LogPage = () => {
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
                    <span className="text">don&#39;t have an account?</span>
                    <Link to={'/register'}>
                        <button className='btn'>sign up</button>
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
                            <input type="text"
                             name="username"
                              id="username"
                              placeholder='Enter username' />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input">
                            <KeyIcon/>
                            <input type="password"
                             name="password"
                              id="password"
                              placeholder='Enter username' />
                        </div>
                    </div>


                    <div className="inputDiv">
                        <button type="submit">
                            <span>Login</span>
                            <ArrowRightAltIcon />
                        </button>
                    </div>

                    
                    <span className='forgetPass'>
                        Forget your password? <a href=''>Click here</a>
                    </span>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LogPage