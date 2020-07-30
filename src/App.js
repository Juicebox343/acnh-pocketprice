import React from 'react';
import './App.css';
import Collection from './Collection';
import SearchForm from './SearchForm';
import bugsData from './data/bugs.json';
import fishesData from './data/fishes.json';
import miscData from './data/misc.json';
import seaCreaturesData from './data/sea.json';
import Header from './Header';
import Pocket from './Pocket';
import Footer from './Footer';


class App extends React.Component{
  state = {
    selectedCollection: 'All Collectibles',
    bugs: {},
    fish: {},
    seaCreatures: {},
    misc: {},
    search: '',
    isChecked: false,
    month: null,
    day: null,
    hour: null,
    minute: null,
    pocketContent: [],
    pocketValue: 0,
    openPocket: false,
  }

  searchBar = (event) =>{
    let keyword = event.target.value;
    this.setState({search:keyword})
    this.filterStates();
  }
  
  selectedCollection = (e) => {
    this.setState({selectedCollection: e})
  }

  onChange = (e) =>{
    this.setState(initialState => ({
      isChecked: !initialState.isChecked
    }));
    this.filterStates();
  }

  openPocket = () =>{
    this.setState(initialState => ({
      openPocket: !initialState.openPocket
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

  addToPocket = (key, price, image, type) => {
    if (this.state.pocketContent.length === 40){
      return
    }
    let pocketContent = [...this.state.pocketContent ];
    pocketContent.push({item: key, price: price, image: image, type: type}) 
    let pocketValue = this.state.pocketValue;
    pocketValue = pocketValue + price;
    this.setState({ pocketContent, pocketValue });
  }

  removeFromPocket = (key, price) => {
    let pocketContent = [...this.state.pocketContent ];
    pocketContent.splice(key, 1)
    let pocketValue = this.state.pocketValue;
    pocketValue = pocketValue - price;
    this.setState({pocketContent, pocketValue});
  }

  functionofsomekind = (object) => {
    
  }
    
  componentDidMount(){
    this.setTime()
    this.filterStates()

  }

  filterStates = () =>{
    if(this.state.isChecked){
      this.setState({
        fish: Object.keys(fishesData).map(key => {return fishesData[key]}).filter(fish => fish['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).filter(fish => fish['availability']['time-array'].includes(parseInt(this.state.hour))).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1),
        seaCreatures: Object.keys(seaCreaturesData).map(key => {return seaCreaturesData[key]}).filter(creature => creature['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).filter(creature => creature['availability']['time-array'].includes(parseInt(this.state.hour))).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1),
        bugs: Object.keys(bugsData).map(key => {return bugsData[key]}).filter(bugs => bugs['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).filter(bugs => bugs['availability']['time-array'].includes(parseInt(this.state.hour))).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1),
        misc: Object.keys(miscData).map(key => {return miscData[key]}).filter(item => item['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1)
      })
    } else {
      this.setState({
        fish: Object.keys(fishesData).map(key => {return fishesData[key]}).filter(fish => fish['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).filter(fish => fish['availability']['time-array']).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1),
        seaCreatures: Object.keys(seaCreaturesData).map(key => {return seaCreaturesData[key]}).filter(creature => creature['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).filter(creature => creature['availability']['time-array']).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1),
        bugs: Object.keys(bugsData).map(key => {return bugsData[key]}).filter(bugs => bugs['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).filter(bugs => bugs['availability']['time-array']).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1),
        misc: Object.keys(miscData).map(key => {return miscData[key]}).filter(item => item['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1)
      })
    }
  }

  render(){
    return(
      <div className='container'>
        <Header/>
        <main>
        
          <SearchForm searchBar={this.searchBar} selectedCollection={this.selectedCollection} creatureList={this.state.selectedCollection} onChangeFunction={this.onChange} isChecked={this.state.isChecked} />
         
          <div className='creature-row'>   
  
          <div className='list-top'>
            <input id='availability-checkbox' type='checkbox' checked={this.state.isChecked} onChange={this.onChange}/>
            <label className='availability-filter-label' for='availability-checkbox'></label>
            <h2>Searching {this.state.selectedCollection}</h2>
            <button className='pocket-button' onClick={this.openPocket}>Pocket</button>
          </div>
          {this.state.openPocket && <Pocket pocket={this.state.pocketContent} removeFromPocket={this.removeFromPocket} pocketValue={this.state.pocketValue}/>}
               
                {this.state.fish.length > 0 && (this.state.selectedCollection === 'Fishes' || this.state.selectedCollection === 'All Collectibles') && 
                  <table>
                  <th><h3>Fishes</h3></th>
                    <tbody>
                      {Object.keys(this.state.fish).map(key => 
                          <Collection 
                              key={key} 
                              index={this.state.fish[key]['name']['name-USen']}
                              details={this.state.fish[key]}
                              timeHour={this.state.hour}
                              addToPocket={this.addToPocket}
                              type='fish'
                          />
                        )}
                      </tbody>
                    </table>
                }

                {this.state.bugs.length > 0 && (this.state.selectedCollection === 'Bugs' || this.state.selectedCollection === 'All Collectibles') && 
                  <table>
                  <th><h3>Bugs</h3></th>
                    <tbody>
                      {Object.keys(this.state.bugs).map(key => 
                          <Collection 
                              key={key} 
                              index={this.state.bugs[key]['name']['name-USen']}
                              details={this.state.bugs[key]} 
                              timeHour={this.state.hour}
                              addToPocket={this.addToPocket}
                              type='bugs'
                          />
                        )}
                    </tbody>
                  </table>
                }

                {this.state.seaCreatures.length > 0 && (this.state.selectedCollection === 'Sea Creatures' || this.state.selectedCollection === 'All Collectibles') && 
                  <table>
                    <th><h3>Sea Creatures</h3></th>
                    <tbody>
                      {Object.keys(this.state.seaCreatures).map(key => 
                          <Collection 
                              key={key} 
                              index={this.state.seaCreatures[key]['name']['name-USen']}
                              details={this.state.seaCreatures[key]} 
                              timeHour={this.state.hour}
                              addToPocket={this.addToPocket}
                              type='sea'
                          />
                        )}
                    </tbody>
                  </table>
                }

                {this.state.misc.length > 0 && (this.state.selectedCollection === 'Misc Collectibles' || this.state.selectedCollection === 'All Collectibles') && 
                  <table>
                    <th><h3>Misc Collectibles</h3></th>
                    <tbody>
                      {Object.keys(this.state.misc).map(key => 
                          <Collection 
                              key={key} 
                              index={this.state.misc[key]['name']['name-USen']}
                              details={this.state.misc[key]} 
                              timeHour={this.state.hour}
                              addToPocket={this.addToPocket}
                              type='misc'
                          />
                        )}
                    </tbody>
                  </table>
                }
                
           
          </div>
        </main>
        
        
      </div>
      
    )
  }

}

export default App;
