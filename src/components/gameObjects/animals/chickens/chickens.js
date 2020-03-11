import Drugger from '../../../../drugInheritance/drugger/index.js'
import './chickens.scss' 
import { connect } from 'react-redux';
import * as draggedActions from '../../../../store/dragged/actions';
import * as generatorsCells from '../../../../store/generators/actions';

class Chicken extends Drugger{
    constructor(props){
        super(props)
        this.method = this.props.addChick
    }

    generator = () =>{
    
      this.interval = setInterval(()=>{
      if(this.state.harvest===0){
      this.setState({harvest:1})
    }
  },10000)
 }
}

const mapStateToProps = state => {
    const props = {
      id: state.gameObjects.drugId,
      position: state.gameObjects.position,
    };
    return props;
  };

  const actionCreators = {
    addChick: draggedActions.addChick,
    harvester: generatorsCells.putEggs,
  };
  
  export default connect(mapStateToProps, actionCreators)(Chicken);