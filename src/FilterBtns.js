import React from 'react';

class FilterBtns extends React.Component{
    

    render(){
      return(
        <div className='filter-buttons' ref={this.filterRef}>
            <button value='bugs' onClick={this.handleClick}>Bugs</button>
            <button value='fishes' onClick={this.handleClick}>Fishes</button>
        </div>
       
      )
  }
}

  export default FilterBtns;
  
