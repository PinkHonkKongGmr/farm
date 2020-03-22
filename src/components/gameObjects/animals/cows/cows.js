import React from 'react'
import Drugger from '../../../../drugInheritance/drugger/index.js'
import { Button } from 'reactstrap';
import './cows.scss' 
import { connect } from 'react-redux';
import * as draggedActions from '../../../../store/dragged/actions';
import * as generators from '../../../../store/generators/actions';
import * as trades from '../../../../store/trades/actions';
import  {sellPrice} from '../../../../consts/sold.js';
import  {buyPrice} from '../../../../consts/buy.js';
import  {upgrade} from '../../../../consts/upgrade.js';
import  {buttontext} from '../../../../consts/buttontext.js';
import  {names} from '../../../../consts/names.js';
import uniqid from 'uniqid'

class Cow extends Drugger{
    constructor(props){
        super(props)
        this.method = this.props.addCow
        this.removeMethod = this.props.removeCow
        this.status  = `wait_for_drag wait_for_drag-${this.props.name}`
        this.generateControlRef = React.createRef()
        this.foodControlRef = React.createRef();
        this.controlElements = [<Button key = {uniqid()} className="btn-info feed" onClick={this.feed}>{buttontext.ru.feed}</Button>,
                         <Button key = {uniqid()} className="btn-info harvest" onClick={this.harvest}>{buttontext.ru.milk}</Button>
                         ,<div className = "food__indicator" key = {uniqid()} ref = {this.foodControlRef}></div>
                         ,<div className = "generate__indicator" key = {uniqid()}><div className = "scale" ref = {this.generateControlRef}></div></div>];
        this.state ={
        status: this.status,
        product:0,
        food:0
       } 
       this.cost = buyPrice.cow;
       this.sellPrice = sellPrice.cow;
       this.plus = 0;
       this.sumProduct = 0;
       this.timeToGenerate = upgrade.cow.timeToGenerate
       this.contentLocal = names.ru.cow
       this.timeToGenerate = upgrade.cow.timeToGenerate
    }

    dealOpportunity = () => this.props.money < this.cost ? false : true

    sumProductUp = () => this.sumProduct = this.sumProduct + 1 + this.plus
    
    upgrade = () => {
      if (this.sumProduct > upgrade.cow.threshold ||  this.sumProduct === upgrade.cow.threshold)
          { this.plus = this.plus + upgrade.cow.plus
            this.sumProduct = 0
        }
    }
                   
    
    control = () => this.plus = this.plus > upgrade.cow.limit ? upgrade.cow.limit : this.plus              

    stateActions = () => {
      this.setState((state) => {
        return {food: state.food -1, product:state.product + 1 + this.plus}
      })
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
      commonFood: state.generators.food,
      money: state.trades.money
    };
    return props;
  };

  const actionCreators = {
    addCow: draggedActions.addCow,
    removeCow: draggedActions.removeCow,
    feed: generators.feed,
    harvester: generators.milkCow,
    spend: trades.discrementmoney,
    getProfit: trades.incrementmoney
  };
  
  export default connect(mapStateToProps, actionCreators)(Cow);