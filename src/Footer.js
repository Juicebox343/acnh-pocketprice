import React from 'react';
import {fixWeekDay, fixMonth, fixMinute} from './helperFunctions'


class Footer extends React.Component{
    state = {
    }

    
    
    render(){
        const dateTime = {...this.props};
        return(
            <footer>
                <div className='bigClock'>
                <p className='clock'>
                    <span>
                        {dateTime.hour - 12}:{fixMinute(dateTime.minute)}
                    </span>
                    <span className='meridian'> 
                    &nbsp;{dateTime.hour >= 12 ? 'PM' : 'AM'}
                    </span>
                </p>
                <p className='monthAndDate'>
                    <span>
                        {fixMonth(dateTime.month)}&nbsp;{dateTime.date}
                    </span>
                    <span className='day'> 
                        {fixWeekDay(dateTime.day)}
                    </span>
                </p>
                </div>
            </footer>
        )
    }
}

export default Footer;