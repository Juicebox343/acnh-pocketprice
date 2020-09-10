import React from 'react';


class SearchForm extends React.Component{


    render(){
        return(
            <div className='search-area'>
                <div className='searchForm' ref={this.searchRef}>      
                    <input name='search' type='text' placeholder='Search..' onChange={(e)=>this.props.searchBar(e)} />
                </div>
            </div>
        )
    }
}

export default SearchForm;