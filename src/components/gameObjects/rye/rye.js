import React from 'react'
import Drugger from '../../../drugInheritance/drugger/index.js'
import { Button } from 'reactstrap';
import './rye.scss' 
import { connect } from 'react-redux';
import * as draggedActions from '../../../store/dragged/actions';
import * as generators from '../../../store/generators/actions';
import * as trades from '../../../store/trades/actions';
import  {upgrade} from '../../../conts/upgrade.js';
import  {sellPrice} from '../../../conts/sold.js';
import  {buyPrice} from '../../../conts/buy.js';

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
         this.cost = buyPrice.rye
         this.sellPrice = sellPrice.rye
    }

    dealOpportunity = () => this.props.money < this.cost ? false : true

     generator = () =>{
        let countDown = 0 
        this.interval = setInterval(()=>{
        if(this.state.product===0){
          countDown++
           if(countDown === upgrade.rye.timeToGenerate)
             {this.setState({product:1})
              countDown = 0}
      }
    },1000)
  }



 }



const mapStateToProps = state => {
    const props = {
      id: state.gameObjects.drugId,
      cell: state.gameObjects.cell,
      idToRemove: state.gameObjects.idToRemove,
      money: state.trades.money
    };
    return props;
  };



  const actionCreators = {
    addRye: draggedActions.addRye,
    removeRye: draggedActions.removeRye,
    harvester: generators.harvester,
    spend: trades.discrementmoney,
    getProfit: trades.incrementmoney,
  };
  
  export default connect(mapStateToProps, actionCreators)(Rye);