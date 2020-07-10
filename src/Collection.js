import React from 'react';
import {monthCalc, capitalizeNames, timeFix} from './helperFunctions';

class Collection extends React.Component{
 
  state = {
    detailExpand: false
  }

  creatureDetails = React.createRef();

  handleClick = (key) =>{
    this.props.addToPocket(this.props.index)
  }

  expandCreatures = () =>{
    this.setState(prevState => ({
      detailExpand: !prevState.detailExpand
    }))
  }

    render(){
      const details = {...this.props.details}
      return(
        <li className='creature-data'>
          <button className='button-data' onClick={this.expandCreatures}>
            <div className='headline-details'>
              <h4>{capitalizeNames(details['name']['name-USen'])}</h4> <span className='cost'>{details['price']} Bells</span>       
            </div>
              {this.state.detailExpand &&
                <div className='creature-details'>
                  {details['availability']['location'] !== 'N/A' && <p>Location: {details['availability']['location']}</p>}
                  {details['shadow'] !== 'N/A' && <p>Shadow: {details['shadow']}</p>}
                  <p>Time: {timeFix(details['availability']['time'])}</p>
                  <p>N. Hemisphere: {monthCalc(details['availability']['month-northern'])}</p>
                  <p>S. Hemisphere: {monthCalc(details['availability']['month-southern'])}</p>
                  <p>Rarity: {details['availability']['rarity']}</p>
                </div>
              }    
          </button>  
        </li>
      )
  }
}
  export default Collection;
  