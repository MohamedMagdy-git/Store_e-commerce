import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import payment from '../../assets/payment.png'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import './footer.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Footer = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  return (
    <div className='footer'>
      <ContentWrapper>
        <div className="top">
          <div className="item">
            <span className='title' onClick={()=> setToggle1(!toggle1)}>Cataegories<KeyboardArrowDownIcon className={toggle1? 'rotate' : ''}/></span>
            <Link className={toggle1? 'show' : ''} to="/products/man">Man</Link>
            <Link className={toggle1? 'show' : ''} to="/products/women">Women</Link>
            <Link className={toggle1? 'show' : ''} to="/products/children">Childern</Link>
            <Link className={toggle1? 'show' : ''} to="/products/children">Accessories</Link>
          </div>
          <div className="item">
            <span className='title' onClick={()=> setToggle2(!toggle2)}>Links <KeyboardArrowDownIcon className={toggle2? 'rotate' : ''}/></span>
            <Link className={toggle2? 'show' : ''} to="/">Home</Link>
            <Link className={toggle2? 'show' : ''} to="/about">About</Link>
            <Link className={toggle2? 'show' : ''} to="/contact">Contact</Link>
            <Link className={toggle2? 'show' : ''} to="/stores">Stores</Link>
          </div>
          <div className="item">
            <span className='title' onClick={()=> setToggle3(!toggle3)}>About <KeyboardArrowDownIcon className={toggle3? 'rotate' : ''}/></span>
            <span className={toggle3? 'show' : ''}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat nulla eius optio consectetur minus deleniti accusamus tempora cum voluptates.
            </span>
          </div>
          <div className="item">
            <span className='title' onClick={()=> setToggle4(!toggle4)}>Cataegories <KeyboardArrowDownIcon className={toggle4? 'rotate' : ''}/></span>
            <span className={toggle4? 'show' : ''}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat nulla eius optio consectetur minus deleniti accusamus tempora cum voluptates.
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className='logo'>Store</span>
            <span className="copyright">© Copyright  All rights reserved.</span>
          </div>
          <div className="right">
            <img src={payment} alt=""/>
          </div>
        </div>
      </ContentWrapper>
      
    </div>
  )
}

export default Footer