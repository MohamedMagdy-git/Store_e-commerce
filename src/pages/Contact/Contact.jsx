import React from 'react'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import './Contact.scss'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CallEndRoundedIcon from '@mui/icons-material/CallEndRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';

const Contact = () => {
  return (
    <div className='contact'>
        <ContentWrapper>
        <h2 className="titleSection">Contact Us</h2>
            <h3 className="title">Get in touch!</h3>
            <p className="subtitle">Contact us if you are facing a problem or have a suggestion</p>
            <div className="boxs">

                <div className="box">
                <div className="icone"><EmailRoundedIcon /></div>
                    <div className="box_title">info@store.com</div>
                </div>

                <div className="box">
                    <div className="icone"><CallEndRoundedIcon /></div>
                    <div className="box_title">+0234 234 234</div>
                </div>

                <div className="box">
                <div className="icone"><FmdGoodRoundedIcon /></div>
                    <div className="box_title">102 Street Cairo</div>
                </div>
            </div>
        </ContentWrapper>
    </div>
  )
}

export default Contact