import React from 'react';

class FilterBtns extends React.Component{
  
  handleClick = (e) =>{
    this.props.selectedCollection(e.target.value);   
    this.props.filterToggle()
  }

  onChange = (e) =>{
    this.props.onChangeFunction(e.target.value)
  }

    render(){
      return(
        <div className='filter-buttons' ref={this.filterRef}>
          <div>
            <button value='Bugs' onClick={this.handleClick}>Bugs</button>
            <button value='Fishes' onClick={this.handleClick}>Fishes</button>
            <button value='Sea Creatures' onClick={this.handleClick}>Sea Creatures</button>
            <button value='Misc Collectibles' onClick={this.handleClick}>Misc</button>
            <button value='All Collectibles' onClick={this.handleClick}>Show all</button>
            <label><input type='checkbox' className='filter-expand-button' checked={this.props.isChecked} onChange={this.onChange}/>Available right now</label>
          </div>
          {/* <div>
            <input type='checkbox'/>
            <input type='checkbox'/>
            <input type='checkbox'/>
            <input type='checkbox'/>
          </div> */}
            
        </div>
      )
  }
}

  export default FilterBtns;
  
