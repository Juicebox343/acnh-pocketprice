import React from 'react';

class FilterBtns extends React.Component{
  
  
  handleClick = (e) =>{
    this.props.selectedCollection(e.target.value);   
    this.props.filterToggle()
  }

    render(){
      return(
        <div className='filter-buttons' ref={this.filterRef}>
            <button value='bugs' onClick={this.handleClick}>Bugs</button>
            <button value='fishes' onClick={this.handleClick}>Fishes</button>
            <button value='misc' onClick={this.handleClick}>Misc</button>
            <button value='all' onClick={this.handleClick}>Show all</button>
        </div>
      )
  }
}

  export default FilterBtns;
  
