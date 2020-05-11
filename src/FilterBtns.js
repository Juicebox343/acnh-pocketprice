import React from 'react';

class FilterBtns extends React.Component{
    
    handleClick = (e) =>{
        this.props.selectedCreature(e.target.value);
    }

    render(){
      return(
        <div className='filter-buttons' ref={this.filterRef}>
            <button value='bugs' onClick={this.handleClick}>I'm looking for bugs!</button>
            <button value='fishes' onClick={this.handleClick}>Show me the fishes!</button>
        </div>
       
      )
  }
}

  export default FilterBtns;
  
