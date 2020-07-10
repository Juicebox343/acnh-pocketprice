import React from 'react';
import FilterBtns from './FilterBtns';

class SearchForm extends React.Component{

    state = {
        filter: false
    }

    filterToggle = () =>{
        if (!this.state.filter){
            this.setState({filter: true})
        } else {
            this.setState({filter: false})
        }
    }
    
    handleClick = (e) =>{
        this.props.selectedCollection(e.target.value);
    }
    
    render(){
        return(
            <div className='search-area'>
                <div className='searchForm' ref={this.searchRef}>      
                    <input name='search' type='text' placeholder='Search..' onChange={(e)=>this.props.searchBar(e)} />
                    <button className='filter-expand-button' onClick={this.filterToggle}>Filters</button>
                </div>
                <div>
                    {this.state.filter === true &&
                        <FilterBtns selectedCollection={this.props.selectedCollection} filterToggle={this.filterToggle} onChangeFunction={this.props.onChangeFunction} isChecked={this.props.isChecked}/>
                    }
                </div>
            </div>
            
             
        )
    }
}

export default SearchForm;