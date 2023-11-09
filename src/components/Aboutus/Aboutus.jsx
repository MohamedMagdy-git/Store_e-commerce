import React from 'react'
import './Aboutus.scss'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';

const Aboutus = () => {
  return (
    <div className='Aboutus'>
        <ContentWrapper>
        <h2 className="title">About Us</h2>
        <div className="contanier_content">

        <div className="content">
            <div className="titleContent"><Diversity1RoundedIcon />STORE GROUP AT A GLANCE</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo repellendus assumenda facere tenetur accusamus deserunt laboriosam, ipsa eum. At veniam quam illo ab non aperiam, aliquid eum consequatur totam.</p>
        </div>
        <div className="contentRight">
            <div className="titleContent">WHO WE ARE</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae iure vel labore inventore saepe quia consequuntur amet libero. Dicta iure non enim atque perferendis ea pariatur voluptates fugiat doloribus incidunt!</p>
        </div>
        <div className="contentleft">
            <div className="titleContent">HOW WE DO IT</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae iure vel labore inventore saepe quia consequuntur amet libero. Dicta iure non enim atque perferendis ea pariatur voluptates fugiat doloribus incidunt!</p>
        </div>
        </div>
        </ContentWrapper>
    </div>
  )
}

export default Aboutus