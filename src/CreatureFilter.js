
import React from 'react';
import './App.css';
import Collection from './Collection'
import SearchForm from './SearchForm'
import bugsData from './bugs.json';
import fishesData from './fishes.json';


class CreatureFilter extends React.Component{
    
    render(){
              const mappedCreatures = Object.keys(fishesData).map(key => {
                return fishesData[key]
              .filter(fish => fish['name']['name-en'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) 
              })

              const mappedCreatures1 = Object.keys(bugsData).map(key => {
                return bugsData[key]
              .filter(bug => bug['name']['name-en'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
             })
          
        return(
            {mappedCreatures}
        )
    }
    

}



  export default CreatureFilter;

