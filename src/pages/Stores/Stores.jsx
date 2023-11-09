import React from 'react'
import './Stores.scss'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import StoreMallDirectoryRoundedIcon from '@mui/icons-material/StoreMallDirectoryRounded';

const Stores = () => {
  return (
    <div className='stores'>
        <ContentWrapper>
            <h2 className="titleSec">
                stores
            </h2>
            <div className='content'>
                <div className="address-content">
                    <div className="title"><StoreMallDirectoryRoundedIcon/>store Cairo</div>
                    <address>address1, cairo, Egypt</address>
                </div>
                <div className="address-content">
                    <div className="title"><StoreMallDirectoryRoundedIcon/>store Alexandria</div>
                    <address>address2, alexandria, Egypt</address>
                </div>
                <div className="address-content">
                    <div className="title"><StoreMallDirectoryRoundedIcon/>store Alsharqiya</div>
                    <address>address3, alsharqiya, Egypt</address>
                </div>
                <div className="address-content">
                    <div className="title"><StoreMallDirectoryRoundedIcon/>store Dakahlia</div>
                    <address>address4, Dakahlia, Egypt</address>
                </div>
                <div className="address-content">
                    <div className="title"><StoreMallDirectoryRoundedIcon/>store Ismailia</div>
                    <address>address5, Ismailia, Egypt</address>
                </div>
                <div className="address-content">
                    <div className="title"><StoreMallDirectoryRoundedIcon/>store Menoufia</div>
                    <address>address6, Menoufia, Egypt</address>
                </div>
                <div className="address-content">
                    <div className="title"><StoreMallDirectoryRoundedIcon/>store Bani Sweif</div>
                    <address>address7, Bani Sweif, Egypt</address>
                </div>
                <div className="address-content">
                    <div className="title"><StoreMallDirectoryRoundedIcon/>store Aswan</div>
                    <address>address, Aswan, Egypt</address>
                </div>
            </div>
        </ContentWrapper>
    </div>
  )
}

export default Stores