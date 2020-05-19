import React from 'react';
import {monthCalc} from './helperFunctions';

class Collection extends React.Component{
 

    creatureDetails = React.createRef();

    handleClick = (key) =>{
      this.props.addToPocket(this.props.index)
    }

    expandCreatures = () =>{
      const creatureDetailBtn = this.creatureDetails.current;
      creatureDetailBtn.classList.toggle('hide-me')
    }

    
  
    render(){
      const creatureName = this.props.details.name['name-en'];
      const price = this.props.details.price;  
      const location = this.props.details.availability['location'];
      const rarity = this.props.details.availability['rarity'];
      const monthNorth = this.props.details.availability['month-northern'];
      const monthSouth = this.props.details.availability['month-southern'];
      const time = this.props.details.availability['time'];
      
      return(
        <li className='creature-data'>
          <button className='headline-data' onClick={this.expandCreatures} >
            <h3>{creatureName}</h3> <span className='cost'>{price} Bells</span>            
          </button>
          <div className='creature-details hide-me' ref={this.creatureDetails}>
              <p>Location: {location}</p>
              <p>Time: {time === '' ? 'All Day' : time}</p>
              <p>N. Hemisphere: {monthCalc(monthNorth)}</p>
              <p>S. Hemisphere: {monthCalc(monthSouth)}</p>
              <p>Rarity: {rarity}</p>
          </div>
        </li>
      )
  }
}
  export default Collection;
