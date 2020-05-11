import React from 'react';
import FilterBtns from './FilterBtns';
// import Pocket from './Pocket';

class SearchForm extends React.Component{

    state = {
        pocket: false,
        filter: false
    }

    filterToggle = () =>{
        if (!this.state.filter){
            this.setState({filter: true})
        } else {
            this.setState({filter: false})
        }
    }

    // pocketToggle = () =>{
    //     if (!this.state.pocket){
    //         this.setState({pocket: true})
    //     } else {
    //         this.setState({pocket: false})
    //     }
    // }
    
    render(){
        return(
            <div className='searchForm' ref={this.searchRef}>      
                <div className='main-search'>
                    <input name='search' type='text' placeholder='Search..' onChange={(e)=>this.props.searchBar(e)} />
                    <button onClick={this.filterToggle}>Filters</button>
                    {/* <button onClick={this.pocketToggle}>Pocket</button> */}
                </div>
                {/* {this.state.pocket && <Pocket loadedCreatures={this.props.loadedCreatures} pocket={this.props.pocket}/> } */}
                {this.state.filter && <FilterBtns selectedCreature={this.props.selectedCreature} filtertoggle={this.filterToggle}/> }
                
                
                
                
                
            </div> 
        )
    }
}

export default SearchForm;
  
//   <div className='searchPrelude'>
//                     <span>I'm looking for..</span>
//                     <button value='bugs' onClick={this.handleClick}>Bugs</button>
//                     <button value='fishes' onClick={this.handleClick}>Fishes</button>
//                 </div>
                
//                 <div>
//                     <span>In the..</span>
//                     <button value='north'>Northern Hemisphere</button>
//                     <button value='south'>Southern Hemisphere</button>
//                 </div>

// filterToggle = () =>{
//     const searchWrapper = this.searchRef.current;
//     const filterWrapper = this.filterRef.current;
   
//     if (searchWrapper.classList.contains('filter-open')){
//         searchWrapper.classList.remove('filter-open');
//     } else {
//         searchWrapper.classList.add('filter-open');
//     }

//     if (filterWrapper.classList.contains('hide-me')){
//         filterWrapper.classList.remove('hide-me');
//     } else {
//         filterWrapper.classList.add('hide-me');
//     }