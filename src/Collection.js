import React from 'react';
import {monthCalc, capitalizeNames, timeFix} from './helperFunctions';

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
    this.props.addToPocket(data.key, data.price, data.image, data.type)
  }

    render(){
      const details = {...this.props.details}
      return(
        
        <tr className='creature-data'>  
          <td>
            <button className='button-data' onClick={this.expandCreatures}>
              
                  <tr className='headline-details'>
                    <td>
                      <h4>{capitalizeNames(details['name']['name-USen'])}</h4>
                    </td>
                    
                    <td>
                      {this.props.details.hasOwnProperty(['availability']) && this.props['details']['availability']['time-array'].includes(this.props.timeHour) && <span>Available now</span>}
                    </td>

                    <td>
                      <span className='cost'>{details['price']} Bells</span> 
                    </td>
                  </tr>
      
                {this.state.detailExpand &&
                <tr className='creature-details'>
                  <td>
               
                      {details['availability']['location'] !== 'N/A' && <p>Location: {details['availability']['location']}</p>}
                      {details['shadow'] !== 'N/A' && <p>Shadow: {details['shadow']}</p>}
                      <p>Time: {timeFix(details['availability']['time'])}</p>
                      <p>N. Hemisphere: {monthCalc(details['availability']['month-northern'])}</p>
                      <p>S. Hemisphere: {monthCalc(details['availability']['month-southern'])}</p>
                      <p>Rarity: {details['availability']['rarity']}</p>
                 
                  </td>
                </tr>
                }
             
            </button>
            </td>
            <td className='add-to-pocket-slot'>
              <button className='addToPocket' onClick={() => this.handleAddToPocketBtn({key: this.props.index, price: details.price, image: details['file-name'], type: this.props.type})}>+</button>
            </td>
          
        </tr>
          
          
          
      
    )
  }
}
  export default Collection;
  