import React, { useEffect, useState } from 'react'
import './products.scss'
import { useParams } from 'react-router-dom'
import List from '../../components/list/List'
import useFetch from '../../usehooks/useFetch'
import { fethchDataFromApi } from '../../utils/api'
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import SortByAlphaRoundedIcon from '@mui/icons-material/SortByAlphaRounded';
import PriceChangeRoundedIcon from '@mui/icons-material/PriceChangeRounded';

const Products = () => {

  const {id} = useParams('id')

  const [url, setUrl] = useState()
  const [name, setNmae] = useState('')
  const [maxPrice, setMaxprice] = useState(2000)
  const [sort, setSort] = useState(null)
  const [ subCategory, setSubCategory] = useState([])

  const {data, loading}  =  useFetch(`/sub-categories?populate=*&filters[categories][title][$eq]=${id}`);
  const res = data?.data.data;

  

const [toggle, setToggle] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ss =() =>{fethchDataFromApi(`/categories?populate=*&filters[title][$eq]=${id}`).then((results) =>
    {
    setNmae(results?.data?.data[0].attributes.title)
    setUrl(results?.data.data[0].attributes.img.data[0].attributes.url)
  ;})};

  

  useEffect(()=> {
    ss()
  }, [ss])





  const chakedHandeler = (e) => {
    const value = e.target.value;
    const isChaked = e.target.checked;

    setSubCategory(isChaked ? [...subCategory, value]
       : [])
  }


  return (
    <>
          <div className="img-container">
            <span className='section-name'>{name}</span>
            <img className='img-bannar' src={url} alt="" />
            <div className="opacityy"></div>
          </div>
      <div className="products">
        
        <div className="filter" onClick={()=> setToggle(!toggle)}>
          <FilterListRoundedIcon /> 
        </div>
        <div className={toggle ? `showLeft left` : `left`}>
          
          
          <div className="scrooll">
          <CloseRoundedIcon className='closeIcone' onClick={()=> setToggle(!toggle)}/>
            
          <div className="filteritem">
            <h2><CategoryRoundedIcon/>categories</h2>
            {res?.map((item) => (

            <div className="inputitem" key={item.id}>
              <input type="checkbox" onChange={chakedHandeler} name={`${item?.attributes?.title}`} value={`${item.id}`}
               id={`${item?.attributes?.title}`} />
              <label htmlFor={`${item?.attributes?.title}`} className='lableinput'>{item?.attributes?.title}</label>
            </div>
            ))}

            

          </div>
          <div className="filteritem">
            <h2><SortByAlphaRoundedIcon/>sort by</h2>
            <div className="inputitem">
              <input type="radio" name="price" id="asc" value={'asc'} onChange={()=> setSort('asc')}/>
              <label htmlFor="asc">Price (Lowest frist)</label>
            </div>
            <div className="inputitem">
              <input type="radio" name="price" id="dsc" value={'dsc'} onChange={()=> setSort('desc')}/>
              <label htmlFor="dsc">Price (Highest frist)</label>
            </div>

          </div>
          <div className="filteritem">
            <h2><PriceChangeRoundedIcon/>price</h2>
            <div className="inputitem">
              <span className='price'>$0</span>
              <input type="range" onChange={(e)=> setMaxprice(e.target.value)} name="" step={100}  min={0} max={2000} id="" />
              <span className='price'>${maxPrice}</span>
            </div>
          </div>

          </div>
          
         

        </div>

        <div className={toggle ? "right blur" : 'right'} >
         

          <div className="cards">

            <List categories={id} subCategory={subCategory} maxPrice={maxPrice} sort={sort}/>
          </div>
        </div>
      </div>
    </>
  
  )
}

export default Products