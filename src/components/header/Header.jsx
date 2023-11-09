import {useEffect, useState} from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link, useLocation } from 'react-router-dom';
import './header.scss'
import Cart from '../cart/Cart';
import { useSelector } from 'react-redux';
import logo from '../../assets/Logo.png'

const Header = () => {
  let [toggle, setToggle ] = useState(false)

  const menuMobileHeandler = () => {
    setToggle(!toggle)
  } 

  let toggleMenuClose = () => {
    if (toggle) {
      return (
        <>
          <CloseRoundedIcon  className='closeMenu'/>
        </>
      )
    } else {
      return (
        <>
         <MenuRoundedIcon dIcon className='Menu'></MenuRoundedIcon>
        </>
      )
    }
  }

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 80) {
        if (window.scrollY > lastScrollY && !mobileMenu) {
            setShow("hide");
        } else {
            setShow("show");
        }
    } else {
        setShow("top");
    }
    setLastScrollY(window.scrollY);
};

  useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
          window.removeEventListener("scroll", controlNavbar);
      };
  }, [lastScrollY]);

  const favProducts = useSelector((state) => state.fav.favs)
  const products = useSelector((state)=> state.cart.products);
  const countCart = products?.length
  const countFavs = favProducts?.length

  return (
    <>
    <div className={ `${mobileMenu ? "navbar" : "navbar"} ${show}`}>
      <ContentWrapper >


      <div className="base">
            <Link className='logo' to='/'><img className='svglogo' src={logo}></img>Store</Link>
          </div>
          
          <div className={`mobileMenu`}>
            <div className="left">
              {/* <div className="item">
                <img src={en} alt="" />
                <KeyboardArrowDownIcon />
              </div>
              <div className="item">
                <span>USD</span>
                <KeyboardArrowDownIcon />
              </div> */}
              <div className="item">
                <Link to="/products/man">Man</Link>
              </div>
              <div className="item">
                <Link  to="/products/women">Women</Link>
              </div>
              <div className="item">
                <Link to="/products/children">Children</Link>
              </div>
              <div className="item">
                <Link to="/products/accessories">Accessories</Link>
              </div>
            </div>

          

            <div className="right">
              <div className="item">
                <Link to="/">Home</Link>
              </div>
              <div className="item">
                <Link to="/about">About</Link>
              </div>
              <div className="item">
                <Link to="/contact">Contact</Link>
              </div>
              <div className="item">
                <Link to="/stores">Stores</Link>
              </div>
            </div>
            </div>

              <div className="icons">

              <Link to={'/search'}>
                <SearchIcon />
              </Link>
              
              <Link to={'/login'}>
                <PersonOutlineIcon />
              </Link>

              <Link to={'/favorites'} className='favicone'>
                <FavoriteBorderIcon />
                <span className='countFav'>{countFavs}</span>
              </Link>

                <div className="cartIcon" onClick={() => setOpen(!open)}>
                  <ShoppingCartOutlinedIcon />
                  <span className='countCart'>{countCart}</span>
                </div>
                {open && <Cart />}

                <div className={`mobileIcon`}>
                  <div onClick={menuMobileHeandler}>
                     {toggleMenuClose()}
                  </div>
                  
                </div>
              </div>
          
      </ContentWrapper>
    </div>

    <div className={toggle ? `blurBody showBlurBody` : `blurBody`} onClick={menuMobileHeandler}>
              <img/>
    </div>


  <div className={toggle ?`mueuMobile showMenu` : 'mueuMobile'}>
    <div className="container">
        <div className="logocon">
              <span className="logo">
                STORE
              </span>
        </div>
          <div className="item">
                <Link to="/">Home</Link>
              </div>
              <div className="item">
                <Link to="/about">About</Link>
              </div>
              <div className="item">
                <Link to="/contact">Contact</Link>
              </div>
              <div className="item">
                <Link to="/stores">Stores</Link>
              </div>
              <div className="item">
                <Link to="/products/man">Man</Link>
              </div>
              <div className="item">
                <Link  to="/products/women">Women</Link>
              </div>
              <div className="item">
                <Link to="/products/children">Children</Link>
              </div>
              <div className="item">
                <Link to="/products/accessories">Accessories</Link>
              </div>
              </div>
  </div>
</>
  )
}

export default Header