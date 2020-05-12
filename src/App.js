import React from 'react';
import './App.css';
import Collection from './Collection'
import SearchForm from './SearchForm'
import bugsData from './bugs.json';
import fishesData from './fishes.json';
import Header from './Header';


class App extends React.Component{
  state = {
    pocket: {},
    selectedCreatures: 'fishes',
    search: ''
  }

  searchBar=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  // addToPocket = (key) =>{
  //   const pocket = {...this.state.pocket};
  //   pocket[key] = pocket[key] + 1 | 1;
  //   this.setState({pocket: pocket})
  // }
  
  selectedCreature = (e) => {
    this.setState({selectedCreatures: e})
  }

  render(){ 
    const mappedFish = Object.keys(fishesData).map(key => {
      return fishesData[key]
    })
    .filter(fish => fish['name']['name-en'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
   
    const mappedBugs = Object.keys(bugsData).map(key => {
      return bugsData[key]
    })
    .filter(bugs => bugs['name']['name-en'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)

    const searchMe = () =>{
      if(this.state.selectedCreatures === 'fishes'){
        return mappedFish;
      } else if (this.state.selectedCreatures === 'bugs'){
        return mappedBugs;
      }
    }

     return(
      <div className='container'>
        <Header/>
        <SearchForm searchBar={this.searchBar} selectedCreature={this.selectedCreature} creatureList={this.state.selectedCreatures}/>
        <ul className='creature-list'>       
        <h2>{this.state.selectedCreatures[0].toUpperCase() +  
            this.state.selectedCreatures.slice(1)}</h2>  
         {Object.keys(searchMe()).map(key => 
              <Collection 
                  key={key} 
                  index={key}
                  details={searchMe()[key]} 
                  // addToOrder={this.addToPocket}
              />
            )}
        </ul>
      </div>
      
    )
  }

}

export default App;
