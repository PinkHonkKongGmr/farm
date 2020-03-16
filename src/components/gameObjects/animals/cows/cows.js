import React from 'react'
import Drugger from '../../../../drugInheritance/drugger/index.js'
import { Button } from 'reactstrap';
import './cows.scss' 
import { connect } from 'react-redux';
import * as draggedActions from '../../../../store/dragged/actions';
import * as generators from '../../../../store/generators/actions';
import * as trades from '../../../../store/trades/actions';

class Cow extends Drugger{
    constructor(props){
        super(props)
        this.method = this.props.addCow
        this.removeMethod = this.props.removeCow
        this.status  = `wait_for_drag wait_for_drag-${this.props.name}`
        this.state ={
        controlElements:[<Button key = {this.props.ind} className="btn-info feed" onClick={this.feed}>Покормиц</Button>,
                         <Button key = {this.props.ind + 'i'} className="btn-info harvest" onClick={this.harvest}>Собрать</Button>],
        status: this.status,
        product:0,
        food:0
       } 
       this.cost = 300;
    }

    generator = () =>{
    
      this.interval = setInterval(()=>{
      if(this.state.food > 0){

      this.setState((state) => {
        return {food: state.food -1, product:state.product + 1}
      });    
    }
    console.log(this.state.food)
  },20000)
 }


 takeAfood = () => {
  this.props.feed()
  this.setState((state) => {
    return {food: state.food + 1 }
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
    addCow: draggedActions.addCow,
    removeCow: draggedActions.removeCow,
    feed: generators.feed,
    harvester: generators.milkCow,
    spend: trades.discrementmoney
  };
  
  export default connect(mapStateToProps, actionCreators)(Cow);