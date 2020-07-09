import React from 'react';
import {monthCalc, capitalizeNames} from './helperFunctions';

class Collection extends React.Component{
 
  state = {
    name: null,
    price: null,
    monthN: '',
    monthS: '',
    time: null,
    isAllDay: null,
    isAllYear: null,
    location: null,
    rarity: null,
    shadow: null,
    type: null,
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

  componentDidMount = () =>{
    const details = {...this.props.details}
    details.name['name-USen'] ? this.setState({name: capitalizeNames(details.name['name-USen'])}) : this.setState({name: 'n/a'})
    details.price ? this.setState({price: details.price}) : this.setState({price: details.price})
    if(details.hasOwnProperty('availability')){
      if(details.availability.hasOwnProperty('month-northern')){
        this.setState({monthN: details['availability']['month-northern']})
      }
    } else {
      this.setState({monthN: 'All Year'})
    }

    if(details.hasOwnProperty('availability')){
      if(details.availability.hasOwnProperty('month-southern')){
        this.setState({monthS: details['availability']['month-southern']})
      }
    } else {
      this.setState({monthS: 'All Year'})
    } 

    if(details.hasOwnProperty('time')){
      this.setState({time: details['availability']['time']})
    } else {
      this.setState({time: 'All Day'})
    } 
    if(details.hasOwnProperty('availability')){
      if(details.availability.hasOwnProperty('isAllDay')){
        this.setState({isAllDay: details['availability']['isAllDay']})
      }
    } else {
      this.setState({isAllDay: 'N/A'})
    } 

    if(details.hasOwnProperty('availability')){
      if(details.availability.hasOwnProperty('isAllYear')){
        this.setState({isAllYear: details['availability']['isAllYear']})
      }
    } else {
      this.setState({isAllYear: 'N/A'})
    } 

    if(details.hasOwnProperty('availability')){
      if(details.availability.hasOwnProperty('location')){
        this.setState({location: details['availability']['location']})
      }
    } else {
      this.setState({location: 'N/A'})
    } 

    if(details.hasOwnProperty('availability')){
      if(details.availability.hasOwnProperty('rarity')){
        this.setState({rarity: details['availability']['rarity']})
      }
    } else {
      this.setState({rarity: 'N/A'})
    } 
    
    if(details.hasOwnProperty('shadow')){
      this.setState({shadow: details['shadow']})
    } else {
      this.setState({shadow: 'N/A'})
    } 
  }

    render(){

      return(
        <li className='creature-data'>
          <button className='button-data' onClick={this.expandCreatures}>
            <div className='headline-details'>
              <h4>{this.state.name}</h4> <span className='cost'>{this.state.price} Bells</span>       
            </div>
             
            { this.state.detailExpand &&
              <div className='creature-details'>
                {this.state.location !== 'N/A' && <p>Location: {this.state.location}</p>}
                {this.state.shadow !== 'N/A' && <p>Shadow: {this.state.shadow}</p>}
                <p>Time: {this.state.time}</p>
                <p>N. Hemisphere: {monthCalc(this.state.monthN)}</p>
                <p>S. Hemisphere: {monthCalc(this.state.monthS)}</p>
                <p>Rarity: {this.state.rarity}</p>
              </div>
          }    
          </button>
          
         
          
        </li>
      )
  }
}
  export default Collection;
  