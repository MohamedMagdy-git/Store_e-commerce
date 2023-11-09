import React from 'react'
import './categories.scss'
import { Link, useNavigate } from 'react-router-dom'



const Categories = () => {



    return (
    <div className='categories'>
        <div className="col">
        <div className="row">
            <img src="https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=2" alt=""  />
            <Link to={'/products/accessories'}>
                <button>
                    Accessories
                </button> 
            </Link>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/7679438/pexels-photo-7679438.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=2" alt=""  />
                        <Link to={'/products/women'}>
                        <button>
                            WOMEN
                        </button> 
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="" />
                    <Link to={'/products/man'}>
                        <button className='btnn'>
                            MAN
                        </button> 
                        </Link>
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://images.unsplash.com/photo-1604467794349-0b74285de7e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" alt=""/>
                
                <Link to={'/products/children'}>
                    <button>
                       Children
                    </button> 
                    </Link>
            </div>
        </div>
    </div> 
  )
}

export default Categories