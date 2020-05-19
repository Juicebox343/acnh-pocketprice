import React from 'react';

class MiscCollection extends React.Component{
 

    creatureDetails = React.createRef();

    handleClick = (key) =>{
      this.props.addToPocket(this.props.index)
    }

    
  
    render(){
      const creatureName = this.props.details.name;
      const price = this.props.details.price;  

      return(
        <li className='creature-data'>
          <button className='headline-data'>
            <h3>{creatureName}</h3> <span className='cost'>{price} Bells</span>            
          </button>
        </li>
      )
  }
}
  export default MiscCollection;
