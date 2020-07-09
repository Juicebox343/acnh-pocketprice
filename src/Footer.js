import React from 'react';
import {fixWeekDay, fixMonth, fixMinute} from './helperFunctions'


class Footer extends React.Component{
    state = {
    }

    
    
    render(){
        const dateTime = {...this.props};
        return(
            <footer>
                <div>
                <p><span className='clock'><span className='clock'>{dateTime.hour - 12}</span>:<span className='clock'>{fixMinute(dateTime.minute)}</span><span className='meridan'> {dateTime.hour >= 12 ? 'PM' : 'AM'}</span></span></p>
                <span>{fixMonth(dateTime.month)}</span><span> {dateTime.date}</span><span className='day'> {fixWeekDay(dateTime.day)}</span>
                </div>
            </footer>
        )
    }
}

export default Footer;