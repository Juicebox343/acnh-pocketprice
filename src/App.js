import React from 'react';
import './App.css';
import Collection from './Collection';
import MiscCollection from './MiscCollection';
import SearchForm from './SearchForm';
import bugsData from './bugs.json';
import fishesData from './fishes.json';
import miscData from './misc.json';
import Header from './Header';


class App extends React.Component{
  state = {
    pocket: {},
    selectedCollection: 'all',
    search: ''
  }

  searchBar=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
  
  selectedCollection = (e) => {
    this.setState({selectedCollection: e})
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

    const mappedMisc = Object.keys(miscData).map(key => {
      return miscData[key]
    })
    .filter(item => item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)


     return(
      <div className='container'>
        <Header/>
        <SearchForm searchBar={this.searchBar} selectedCollection={this.selectedCollection} creatureList={this.state.selectedCollection}/>
        <ul className='creature-list'>       
          {this.state.selectedCollection === 'all' &&
            <div>
            <ul>
              <h2>Fishes</h2>

              {
              mappedFish.length > 0 
              ? Object.keys(mappedFish).map(key => 
                  <Collection 
                      key={key} 
                      index={key}
                      details={mappedFish[key]} 
                  />
                )
              : <span>Nothing here!</span>
              }
            </ul>

            <ul>
              <h2>Bugs</h2>  
              {
              mappedBugs.length > 0 
              ? Object.keys(mappedBugs).map(key => 
                  <Collection 
                      key={key} 
                      index={key}
                      details={mappedBugs[key]} 
                  />
                )
              : <span>Nothing here!</span>
              }
            </ul>
  
            <ul>
              <h2>Misc Items</h2>  
              {
              mappedMisc.length > 0 
              ? Object.keys(mappedMisc).map(key => 
                  <MiscCollection 
                      key={key} 
                      index={key}
                      details={mappedMisc[key]} 
                  />
                )
              : <span>Nothing here!</span>
              }
            </ul>
            </div>
          }

          {this.state.selectedCollection === 'fishes' &&
          <ul>
            <h2>Fishes</h2>  
            {Object.keys(mappedFish).map(key => 
                <Collection 
                    key={key} 
                    index={key}
                    details={mappedFish[key]} 
                />
              )}
          </ul>
          }
         
          {this.state.selectedCollection === 'bugs' &&
          <ul>
            <h2>Bugs</h2>  
            {Object.keys(mappedBugs).map(key => 
                <Collection 
                    key={key} 
                    index={key}
                    details={mappedBugs[key]} 
                />
              )}
          </ul>
          }
        
          {this.state.selectedCollection === 'misc' &&
          <ul>
            <h2>Misc Items</h2>  
            {Object.keys(mappedMisc).map(key => 
                <MiscCollection 
                    key={key} 
                    index={key}
                    details={mappedMisc[key]} 
                />
              )}
          </ul>
          }
          
        </ul>
      </div>
      
    )
  }

}

export default App;
