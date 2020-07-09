import React from 'react';
import './App.css';
import Collection from './Collection';
import SearchForm from './SearchForm';
import bugsData from './data/bugs.json';
import fishesData from './data/fishes.json';
import miscData from './data/misc.json';
import seaCreaturesData from './data/sea.json';
import Header from './Header';
import Footer from './Footer';


class App extends React.Component{
  state = {
    selectedCollection: 'All Collectibles',
    search: '',
    isChecked: false,
    month: '',
    day: '',
    hour: '',
    minute: ''
  }

  searchBar = (event) =>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
  
  selectedCollection = (e) => {
    this.setState({selectedCollection: e})
  }

  onChange = () =>{
    this.setState(initialState => ({
      isChecked: !initialState.isChecked
    }));
  }

  setTime = () =>{
    let rightNow = new Date();
    this.setState({
      month: rightNow.getMonth() + 1,
      day:  rightNow.getDay(),
      date: rightNow.getDate(),
      hour: rightNow.getHours(),
      minute: rightNow.getMinutes()
    });
    setTimeout(this.setTime, 60000)
  }
    
  componentDidMount(){
    this.setTime()
  }

  render(){
    const mappedFish = Object.keys(fishesData).map(key => {return fishesData[key]}).filter(fish => fish['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1)
    const mappedSeaCreatures = Object.keys(seaCreaturesData).map(key => {return seaCreaturesData[key]}).filter(creature => creature['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1)
    const mappedBugs = Object.keys(bugsData).map(key => {return bugsData[key]}).filter(bugs => bugs['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1)
    const mappedMisc = Object.keys(miscData).map(key => {return miscData[key]}).filter(item => item['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1)
    if(this.state.isChecked){
      const timedFish = mappedFish.filter(item => item['availability']['time-array'].indexOf(this.state.hour) !== -1);
      console.log(timedFish)
    }
    
    
    return(
      <div className='container'>
        <Header hour={this.state.hour} minute={this.state.minute} month={this.state.month} day={this.state.day} date={this.state.date}/>
        <main>
          <SearchForm searchBar={this.searchBar} selectedCollection={this.selectedCollection} creatureList={this.state.selectedCollection} onChangeFunction={this.onChange} isChecked={this.isChecked} />
          <ul className='creature-list'>   
  
          <div className='list-top'><h2>Searching {this.state.selectedCollection}</h2></div>
            {this.state.selectedCollection === 'All Collectibles' &&
              <div>
                {mappedFish.length > 0 &&
                  <ul>
                  <h3>Fishes</h3>
                  {Object.keys(mappedFish).map(key => 
                      <Collection 
                          key={key} 
                          index={key}
                          details={mappedFish[key]} 
                      />
                    )
                    }
                    </ul>
                }

                {mappedBugs.length > 0 &&
                  <ul>
                  <h3>Bugs</h3>
                  {Object.keys(mappedBugs).map(key => 
                      <Collection 
                          key={key} 
                          index={key}
                          details={mappedBugs[key]} 
                      />
                    )
                    }
                    </ul>
                }

                {mappedSeaCreatures.length > 0 &&
                  <ul>
                  <h3>Sea Creatures</h3>
                  {Object.keys(mappedSeaCreatures).map(key => 
                      <Collection 
                          key={key} 
                          index={key}
                          details={mappedSeaCreatures[key]} 
                      />
                    )
                    }
                    </ul>
                }

                {mappedMisc.length > 0 &&
                  <ul>
                  <h3>Misc Collectibles</h3>
                  {Object.keys(mappedMisc).map(key => 
                      <Collection 
                          key={key} 
                          index={key}
                          details={mappedMisc[key]} 
                      />
                    )
                    }
                    </ul>
                }
              </div>
            }

            {this.state.selectedCollection === 'Fishes' &&
            <ul>
              {Object.keys(mappedFish).map(key => 
                  <Collection 
                      key={key} 
                      index={key}
                      details={mappedFish[key]} 
                  />
                )}
            </ul>
            }
          
            {this.state.selectedCollection === 'Bugs' &&
            <ul>
              {Object.keys(mappedBugs).map(key => 
                  <Collection 
                      key={key} 
                      index={key}
                      details={mappedBugs[key]} 
                  />
                )}
            </ul>
            }

            {this.state.selectedCollection === 'Sea Creatures' &&
            <ul> 
              {Object.keys(mappedSeaCreatures).map(key => 
                  <Collection 
                      key={key} 
                      index={key}
                      details={mappedSeaCreatures[key]} 
                  />
                )}
            </ul>
            }
          
            {this.state.selectedCollection === 'Misc Collectibles' &&
            <ul>
              {Object.keys(mappedMisc).map(key => 
                  <Collection 
                      key={key} 
                      index={key}
                      details={mappedMisc[key]} 
                  />
                )}
            </ul>
            }
            
          </ul>
        </main>
        
        {/* <Footer hour={this.state.hour} minute={this.state.minute} month={this.state.month} day={this.state.day} date={this.state.date}/> */}
      </div>
      
    )
  }

}

export default App;
