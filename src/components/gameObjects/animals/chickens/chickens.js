import React from 'react'
import Drugger from '../../../../drugInheritance/drugger/index.js'
import { Button } from 'reactstrap';
import './chickens.scss' 
import { connect } from 'react-redux';
import * as draggedActions from '../../../../store/dragged/actions';
import * as generators from '../../../../store/generators/actions';

class Chicken extends Drugger{
    constructor(props){
        super(props)
        this.method = this.props.addChick
        this.removeMethod = this.props.removeChick
        this.status  = 'wait_for_drag-chicken'
        this.state ={
        controlElements:[<Button key = {this.props.ind} className="btn-info" onClick={this.feed}>Покормиц</Button>],
        status: this.status,
        product:0,
        food:0
       } 
    }

    generator = () =>{
    
      this.interval = setInterval(()=>{
      if(this.state.food > 0){

      this.setState((state) => {
        return {food: state.food -1, product:state.product + 1}
      });    
    }
    console.log(this.state.food)
  },10000)
 }


 takeAfood = () => {
  this.props.feed()
  this.setState((state) => {
    return {food: state.food + 1 * 3}
  });
 }

    feed =  () =>{
      this.props.commonFood > 0 ? this.takeAfood() : alert('not enought food')
   }
}




const mapStateToProps = state => {
    const props = {
      id: state.gameObjects.drugId,
      cell: state.gameObjects.cell,
      idToRemove: state.gameObjects.idToRemove,
      commonFood: state.generators.food
    };
    return props;
  };

  const actionCreators = {
    addChick: draggedActions.addChick,
    removeChick: draggedActions.removeChick,
    production: generators.putEggs,
    feed: generators.feed,
  };
  
  export default connect(mapStateToProps, actionCreators)(Chicken);