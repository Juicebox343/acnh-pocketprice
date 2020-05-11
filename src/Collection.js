import React from 'react';


class Collection extends React.Component{
 
    handleClick = (key) =>{

      this.props.addToPocket(this.props.index)
    }

    
  
    render(){
      // const index = this.props.details.index;
      const creatureName = this.props.details.name['name-en'];
      const price = this.props.details.price;    
      
      return(
        <li className='creature-data'>
          <div className='headline-data'>
            <h3>{creatureName}</h3> <span className='cost'>{price} Bells</span> 
          </div>

        </li>
      )
  }
}
  export default Collection;
  
/* <button className='add-to-pocket' value={index} onClick={this.handleClick}>+</button>  */