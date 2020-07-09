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
    bugs: {},
    fish: {},
    seaCreatures: {},
    misc: '',
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

  mappingState = () =>{
    this.setState({
      fish: Object.keys(fishesData).map(key => {return fishesData[key]}).filter(fish => fish['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1),
      seaCreatures: Object.keys(seaCreaturesData).map(key => {return seaCreaturesData[key]}).filter(creature => creature['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1),
      bugs: Object.keys(bugsData).map(key => {return bugsData[key]}).filter(bugs => bugs['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1),
      misc: Object.keys(miscData).map(key => {return miscData[key]}).filter(item => item['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1)
    })
  }

  render(){
    // const mappedFish = 
    // const mappedSeaCreatures = 
    // const mappedBugs = 
    // const mappedMisc = 
    // if(this.state.isChecked){
    //   const timedFish = mappedFish.filter(item => item['availability']['time-array'].indexOf(this.state.hour) !== -1);
    //   console.log(timedFish)
    // }
    
    
    return(
      <div className='container'>
        <Header hour={this.state.hour} minute={this.state.minute} month={this.state.month} day={this.state.day} date={this.state.date}/>
        <main>
          <SearchForm searchBar={this.searchBar} selectedCollection={this.selectedCollection} creatureList={this.state.selectedCollection} onChangeFunction={this.onChange} isChecked={this.isChecked} />
          <ul className='creature-list'>   
  
          <div className='list-top'><h2>Searching {this.state.selectedCollection}</h2></div>
            {this.state.selectedCollection === 'All Collectibles' &&
              <div>
                {this.state.fish.length > 0 &&
                  <ul>
                  <h3>Fishes</h3>
                  {Object.keys(this.state.fish).map(key => 
                      <Collection 
                          key={key} 
                          index={key}
                          details={this.state.fish[key]} 
                      />
                    )
                    }
                    </ul>
                }

                {this.state.bugs.length > 0 &&
                  <ul>
                  <h3>Bugs</h3>
                  {Object.keys(this.state.bugs).map(key => 
                      <Collection 
                          key={key} 
                          index={key}
                          details={this.state.bugs[key]} 
                      />
                    )
                    }
                    </ul>
                }

                {this.state.seaCreatures.length > 0 &&
                  <ul>
                  <h3>Sea Creatures</h3>
                  {Object.keys(this.state.seaCreatures).map(key => 
                      <Collection 
                          key={key} 
                          index={key}
                          details={this.state.seaCreatures[key]} 
                      />
                    )
                    }
                    </ul>
                }

                {this.state.misc.length > 0 &&
                  <ul>
                  <h3>Misc Collectibles</h3>
                  {Object.keys(this.state.misc).map(key => 
                      <Collection 
                          key={key} 
                          index={key}
                          details={this.state.misc[key]} 
                      />
                    )
                    }
                    </ul>
                }
              </div>
            }

            {this.state.selectedCollection === 'Fishes' &&
            <ul>
              {Object.keys(this.state.fish).map(key => 
                  <Collection 
                      key={key} 
                      index={key}
                      details={this.state.fish[key]} 
                  />
                )}
            </ul>
            }
          
            {this.state.selectedCollection === 'Bugs' &&
            <ul>
              {Object.keys(this.state.bugs).map(key => 
                  <Collection 
                      key={key} 
                      index={key}
                      details={this.state.bugs[key]} 
                  />
                )}
            </ul>
            }

            {this.state.selectedCollection === 'Sea Creatures' &&
            <ul> 
              {Object.keys(this.state.seaCreatures).map(key => 
                  <Collection 
                      key={key} 
                      index={key}
                      details={this.state.seaCreatures[key]} 
                  />
                )}
            </ul>
            }
          
            {this.state.selectedCollection === 'Misc Collectibles' &&
            <ul>
              {Object.keys(this.state.misc).map(key => 
                  <Collection 
                      key={key} 
                      index={key}
                      details={this.state.misc[key]} 
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
