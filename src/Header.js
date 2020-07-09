import React from 'react';
import {fixMinute, fixMonth, fixWeekDay} from './helperFunctions'

class Header extends React.Component{
    render(){
        const dateTime = {...this.props};
        return(
            
            <header>
                {/* <div className='bigClock'>
                <p><span className='clock'><span className='clock'>{dateTime.hour - 12}</span>:<span className='clock'>{fixMinute(dateTime.minute)}</span><span className='meridan'> {dateTime.hour >= 12 ? 'PM' : 'AM'}</span></span></p>
                <span>{fixMonth(dateTime.month)}</span><span> {dateTime.date}</span><span className='day'> {fixWeekDay(dateTime.day)}</span>
                </div> */}
                <div>
                <a className='kofi' href='https://ko-fi.com/heiserj'><img src='./kofi2.png' alt='Kofi link for the developer'/></a>
                </div>
               
            </header>
        )
    }
}

export default Header;
