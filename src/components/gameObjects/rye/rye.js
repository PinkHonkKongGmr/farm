import React from 'react'
import Drugger from '../../../drugInheritance/drugger/index.js'
import { Button } from 'reactstrap';
import './rye.scss' 
import { connect } from 'react-redux';
import * as draggedActions from '../../../store/dragged/actions';
import * as generators from '../../../store/generators/actions';
import * as trades from '../../../store/trades/actions';
import  {upgrade} from '../../../consts/upgrade.js';
import  {sellPrice} from '../../../consts/sold.js';
import  {buyPrice} from '../../../consts/buy.js';
import  {buttontext} from '../../../consts/buttontext.js';
import  {names} from '../../../consts/names.js';
import uniqid from 'uniqid'

class Rye extends Drugger{
    constructor(props){
        super(props)
        this.method = this.props.addRye
        this.removeMethod = this.props.removeRye
        this.status = `wait_for_drag-${this.props.name} `
        this.state ={
          status: this.status,
          product:0
         } 
         this.generateControlRef = React.createRef()
         this.controlElements =[<Button key = {this.props.ind} className="btn-info" onClick={this.harvest}>{buttontext.ru.harvest}</Button>
         ,<div className = "generate__indicator" key = {uniqid()}><div div className = "scale" ref = {this.generateControlRef}></div></div>]
         this.cost = buyPrice.rye
         this.sellPrice = sellPrice.rye
         this.contentLocal = names.ru.rye
    }

    dealOpportunity = () => this.props.money < this.cost ? false : true


     generator = () =>{
        let countDown = 0 
        this.interval = setInterval(()=>{
        let ttg = upgrade.rye.timeToGenerate   
        if(this.state.product===0){
          countDown++
          const q = 1/20 * ttg
          this.generateStatusController(q, countDown)
           if(countDown === ttg * 20)
             {this.setState({product:1})
              countDown = 0}
      }
    },50)
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