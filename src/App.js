import React from 'react';
import './App.css';
import Collection from './Collection';
import SearchForm from './SearchForm';
import bugsData from './data/bugs.json';
import fishesData from './data/fishes.json';
import miscData from './data/misc1.json';
import seaCreaturesData from './data/sea.json';
import Header from './Header';

class App extends React.Component{
  state = {
    bugs: {},
    fish: {},
    seaCreatures: {},
    misc: {},
    search: '',
    isChecked: false,
    month: null,
    day: null,
    hour: null,
    minute: null
  }

  searchBar = (event) =>{
    let keyword = event.target.value;
    this.setState({search:keyword}, this.filterStates())
  }
  
  selectedCollection = (e) => {
    this.setState({selectedCollection: e})
  }

  onChange = (e) =>{
    this.setState({
      isChecked: e.target.checked
    })
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
    this.filterStates()
  }

  // updateStates(){
  //   this.setState({
  //     fish: fishResults,
  //     seaCreatures: seaCreaturesResults,
  //     bugs: bugsResults,
  //     misc: miscResults,
  //     search: searchInput,
  //     isChecked: isChecked
  //   })
  // }


  // filterStates = (collectible, type) => {
  //   let filtered = Object.keys(collectible).map(key => {return collectible[key]})
  //                 .filter(collectible => collectible['name']['name-USen']
  //                 .toLowerCase()
  //                 .indexOf(this.state.search.toLowerCase()) !== -1)
  //                 .filter(collectible => collectible['availability']['time-array'].includes(parseInt(this.state.hour)))
  //                 .sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1)
  //   return(
  //     Object.keys(filtered).length > 0 && 
  //       Object.keys(filtered).map(key => 
          
  //             <Collection 
  //                 key={key} 
  //                 index={filtered[key]['name']['name-USen']}
  //                 details={filtered[key]}
  //                 timeHour={this.state.hour}
  //                 type={type}
  //             />
         
  //       )
  //   )
  // }
  filterStates = () =>{
    let fishResults = []
    let seaCreaturesResults = [] 
    let bugsResults = []
    let miscResults = []

    // if(this.state.isChecked === true){
    //    fishResults = Object.keys(fishesData).map(key => {return fishesData[key]}).filter(fish => fish['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).filter(fish => fish['availability']['time-array'].includes(parseInt(this.state.hour))).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1);
    //    seaCreaturesResults = Object.keys(seaCreaturesData).map(key => {return seaCreaturesData[key]}).filter(creature => creature['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).filter(creature => creature['availability']['time-array'].includes(parseInt(this.state.hour))).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1);
    //    bugsResults = Object.keys(bugsData).map(key => {return bugsData[key]}).filter(bugs => bugs['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).filter(bugs => bugs['availability']['time-array'].includes(parseInt(this.state.hour))).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1);
    //    miscResults = Object.keys(miscData).map(key => {return miscData[key]}).filter(item => item['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1);
    // } else {
       fishResults = Object.keys(fishesData).map(key => {return fishesData[key]}).filter(fish => fish['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1);
       seaCreaturesResults = Object.keys(seaCreaturesData).map(key => {return seaCreaturesData[key]}).filter(creature => creature['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1);
       bugsResults = Object.keys(bugsData).map(key => {return bugsData[key]}).filter(bugs => bugs['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1);
       miscResults = Object.keys(miscData).map(key => {return miscData[key]}).filter(item => item['name']['name-USen'].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).sort((a, b) => (a.name['name-USen'] > b.name['name-USen']) ? 1 : -1);
    // }
  
    this.setState({
        fish: fishResults,
        seaCreatures: seaCreaturesResults,
        bugs: bugsResults,
        misc: miscResults
      })

  }

  render(){
   
    return(
      <div className='container'>
        <Header/>
        <main>
        
          <SearchForm searchBar={this.searchBar} onChangeFunction={this.onChange} isChecked={this.state.isChecked} />
         
          <div className='creature-row'>   
  
          <div className='list-top'>
            {/* <input id='availability-checkbox' type='checkbox' checked={this.state.isChecked} onChange={this.onChange}/>
            <label className='availability-filter-label' htmlFor='availability-checkbox'></label> */}
          </div>
               
                {this.state.fish.length > 0 && 
                  <table>
                  <th><h3>Fishes</h3></th>
                    <tbody>
                      {Object.keys(this.state.fish).map(key => 
                          <Collection 
                              key={key} 
                              index={this.state.fish[key]['name']['name-USen']}
                              details={this.state.fish[key]}
                              timeHour={this.state.hour}
                              type='fish'
                          />
                        )}
                      </tbody>
                    </table>
                }

                {this.state.bugs.length > 0 && 
                  <table>
                  <th><h3>Bugs</h3></th>
                    <tbody>
                      {Object.keys(this.state.bugs).map(key => 
                          <Collection 
                              key={key} 
                              index={this.state.bugs[key]['name']['name-USen']}
                              details={this.state.bugs[key]} 
                              timeHour={this.state.hour}
                              type='bugs'
                          />
                        )}
                    </tbody>
                  </table>
                }

                {this.state.seaCreatures.length > 0 &&
                  <table>
                    <th><h3>Sea Creatures</h3></th>
                    <tbody>
                      {Object.keys(this.state.seaCreatures).map(key => 
                          <Collection 
                              key={key} 
                              index={this.state.seaCreatures[key]['name']['name-USen']}
                              details={this.state.seaCreatures[key]} 
                              timeHour={this.state.hour}
                              type='sea'
                          />
                        )}
                    </tbody>
                  </table>
                }

                {this.state.misc.length > 0 &&
                  <table>
                    <th><h3>Misc Collectibles</h3></th>
                    <tbody>
                      {Object.keys(this.state.misc).map(key => 
                          <Collection 
                              key={key} 
                              index={this.state.misc[key]['name']['name-USen']}
                              details={this.state.misc[key]} 
                              timeHour={this.state.hour}
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
