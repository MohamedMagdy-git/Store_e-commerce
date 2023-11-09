import React from 'react'
import './list.scss'
import Card from '../card/Card'
import { fethchDataFromApi } from '../../utils/api'
import useFetch from '../../usehooks/useFetch'
import { useNavigate, useParams } from 'react-router-dom'

const List = ({maxPrice, sort, subCategory}) => {
    const {id} = useParams()



    
    const {data, loading}  =  useFetch(`/products?populate=*&[filters][categories][title]=${id}${subCategory?.map((item) =>
       (`&[filters]{[sub_categories][id][$eq]=${item}`))}&filters[price][$lt]=${maxPrice}${sort ?`&sort=price:${sort}` : ''}`);
    // console.log(data?.data?.data);





  return (
    <div className='list'>
      {loading ? <div>loading ... </div> :
       <>
        {data?.data?.data.map((item) => (
            <Card item={item} key={item?.id}/>
        ))}
      </>}
    </div>
  )
}

export default List