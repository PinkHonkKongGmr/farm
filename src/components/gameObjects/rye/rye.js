import React from 'react'
import Drugger from '../../../drugInheritance/drugger/index.js'
import { Button } from 'reactstrap';
import './rye.scss' 
import { connect } from 'react-redux';
import * as draggedActions from '../../../store/dragged/actions';
import * as generators from '../../../store/generators/actions';

class Rye extends Drugger{
    constructor(props){
        super(props)
        this.method = this.props.addRye
        this.removeMethod = this.props.removeRye
        this.status = `wait_for_drag-${this.props.name} `
        this.state ={
          controlElements:[<Button key = {this.props.ind} className="btn-info" onClick={this.harvest}>Пожать</Button>],
          status: this.status,
          product:0
         } 
    }

     generator = () =>{
        this.interval = setInterval(()=>{
        if(this.state.product===0){
        this.setState({product:1})
      }
    },10000)
  }



 }



const mapStateToProps = state => {
    const props = {
      id: state.gameObjects.drugId,
      cell: state.gameObjects.cell,
      idToRemove: state.gameObjects.idToRemove
    };
    return props;
  };



  const actionCreators = {
    addRye: draggedActions.addRye,
    removeRye: draggedActions.removeRye,
    harvester: generators.harvester,
  };
  
  export default connect(mapStateToProps, actionCreators)(Rye);