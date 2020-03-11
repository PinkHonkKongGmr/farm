import Drugger from '../../../drugInheritance/drugger/index.js'
import './rye.scss' 
import { connect } from 'react-redux';
import * as draggedActions from '../../../store/dragged/actions';
import * as generatorsCells from '../../../store/generators/actions';

class Rye extends Drugger{
    constructor(props){
        super(props)
        this.method = this.props.addRye
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
    addRye: draggedActions.addRye,
    harvester: generatorsCells.harvester,
  };
  
  export default connect(mapStateToProps, actionCreators)(Rye);