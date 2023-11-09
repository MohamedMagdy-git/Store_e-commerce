import React, { useState, useRef, useEffect } from 'react'
import './search.scss'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import { SearchOffRounded, SearchRounded } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { fethchDataFromApi } from '../../utils/api'
import useFetch from '../../usehooks/useFetch'
import Card from '../../components/card/Card'


const Search = () => {
    const [toggle, setToggle] = useState(false);
    const [query, setQuery] = useState('');
    const input = useRef()
    // console.log(query);
    
    const inputHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            setQuery(event.target.value)
        }
      }

      const {data, loading} =useFetch(`/products?populate=*
      &filters[sub_categories][title][$contains]=${query}`);

      // eslint-disable-next-line react-hooks/exhaustive-deps
      const res = useFetch('/sub-categories?populate=*')
      const keywords = res?.data?.data?.data 
      console.log(keywords);

      const rusultsSearch = data?.data.data
  
  
    
      

  return (
    <div className='search'>
        <ContentWrapper >
            <h3 className="titleSec">
                Search
            </h3>
            <div className="searchContiner">
                <input className='inputSearch' 
                type="text" 
                placeholder='Search' 
                onFocus={() => setToggle(true)}
                onBeforeInput={() => setToggle(false)}
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={inputHandler}
                ref={input}
                />
                <button type="submit"><SearchRounded /></button>
            
            </div>
            <div className={toggle ?"boxSuggestion show" : 'boxSuggestion'}>
                <h4 className="boxTitle">Try searching for</h4>
                <h5 className="titleSuggestion">CATEGORIES</h5>
                <div className="Suggestions">
                    <Link to={'/products/man'} className="Suggestion">man</Link>
                    <Link to={'/products/women'} className="Suggestion">women</Link>
                    <Link to={'/products/children'} className="Suggestion">children</Link>
                    <Link to={'/products/accessories'} className="Suggestion">accessories</Link>
                </div>

                <h5 className="titleSuggestion">KEYWORDS</h5>
                <div className="Suggestions">
                    {keywords?.map((item) => (
                        <div className="div" key={item.id}>

                            <span className="Suggestion" onClick={(e)=>{input.current.value = `${item?.attributes.title}` 
                            setQuery(`${item?.attributes.title}`)}}>{item?.attributes.title}</span>
                            
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="results" onClick={() => setToggle(false)}> 
                {query.length > 0  ?
                <>
                {loading ?  'Searching...' :
                rusultsSearch?.map((item)=> (
                    <Card item={item} key={item.id} />
                )) }
                </> 
                 : 
                 <>
                 <div className="alert">
                    
                 </div>
                 </>}
            </div>
        </ContentWrapper>
    </div>
  )
}

export default Search