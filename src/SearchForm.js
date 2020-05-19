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
            <div>
                <div className='searchForm' ref={this.searchRef}>      
                    <input name='search' type='text' placeholder='Search..' onChange={(e)=>this.props.searchBar(e)} />
                    <label className='filter-expand'>
                        <input type='checkbox' onChange={this.filterToggle}/>
                        <span className='filter-expand-label'>Filters</span>
                    </label>
                </div>
                <div>
                    {this.state.filter === true &&
                        <FilterBtns selectedCollection={this.props.selectedCollection} filterToggle={this.filterToggle}/>
                    }
                </div>
            </div>
            
             
        )
    }
}

export default SearchForm;