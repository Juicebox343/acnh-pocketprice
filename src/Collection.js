import React from 'react';
import {monthCalc, capitalizeNames, timeFix, fancyHour} from './helperFunctions';

class Collection extends React.Component{
 
  state = {
    detailExpand: false
  }

  creatureDetails = React.createRef();

  expandCreatures = () =>{
    this.setState(prevState => ({
      detailExpand: !prevState.detailExpand
    }))
  }

  handleAddToPocketBtn = (data) =>{
    this.props.addToPocket(data.key, data.type)
  }

  setTime = () => {
    if(this.props['details']['availability']['isAllDay']){
      return 'Available All Day '
    } else {
      let lastHour = this.props['details']['availability']['time-array'].slice(-1)
      return 'Available until ' + fancyHour(lastHour)
    }
    
  }

    render(){
      const details = {...this.props.details}
      return(
        
        <tr className='creature-data'>  
          <td>
            <button className='button-data' onClick={this.expandCreatures}>
              
                  <tr className='headline-details'>
                    <td>
                      <img src={`/icons/${this.props.type}/${details['file-name']}.png`} alt={details.item}/>

                      <h4>{capitalizeNames(details['name']['name-USen'])}</h4>
                    </td>
                    
                    <td>
                      {this.props.details.hasOwnProperty(['availability']) && this.props['details']['availability']['time-array'].includes(this.props.timeHour) && <span className='availability'>{this.setTime()}</span>}
                    </td>

                    <td>
                      <span className='cost'>{details['price']} Bells</span> 
                    </td>
                  </tr>
      
                {this.state.detailExpand && details.hasOwnProperty(['availability']) &&
                <tr className='creature-details'>
                  <td>
                      {details.hasOwnProperty(['availability']['location']) && <p>Location: {details['availability']['location']}</p>}
                      {details.hasOwnProperty(['shadow']) && <p>Shadow: {details['shadow'].split(' ')[0]}</p>}
                      {details.hasOwnProperty(['availability']) && <p>Time: {timeFix(details['availability']['time'])}</p>}
                      {details.hasOwnProperty(['availability']) && <p>N. Hemisphere: {monthCalc(details['availability']['month-northern'])}</p>}
                      {details.hasOwnProperty(['availability']) && <p>S. Hemisphere: {monthCalc(details['availability']['month-southern'])}</p>}
                      {details.hasOwnProperty(['availability']) && <p>Rarity: {details['availability']['rarity']}</p>}
                 
                  </td>
                </tr>
                }
             
            </button>
            </td>
            <td className='add-to-pocket-slot'>
              <button className='addToPocket' onClick={() => this.handleAddToPocketBtn({key: this.props.index, type: this.props.type})}>+</button>
            </td>
          
        </tr>
          
          
          
      
    )
  }
}
  export default Collection;
  