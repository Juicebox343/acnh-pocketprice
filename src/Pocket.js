import React from 'react';
import PocketSlot from './PocketSlot';


class Pocket extends React.Component{    

  renderPocket = (key) => {
      const creature = this.props.loadedCreatures[key];
      const count = this.props.pocket[key];
      return (
          <PocketSlot key={key} name={creature['name']['name-en']}/>
      );
  };

    render(){

      const creatureIds = Object.keys(this.props.pocket);
      
      const total = (prevTotal, key) => {
            const creature = this.props.loadedCreatures[key];
            const count = this.props.pocket[key];
            return prevTotal + (count * creature.price);
          };
      
      return(
        <div className='my-pocket'>
          {creatureIds.map(this.renderPocket)}
          <span></span>
        </div>
      )
    }
  }
  export default Pocket;
