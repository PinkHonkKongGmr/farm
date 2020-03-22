import React from 'react'
import Drugger from '../../../../drugInheritance/drugger/index.js'
import { Button } from 'reactstrap';
import './chickens.scss' 
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

class Chicken extends Drugger{
    constructor(props){
        super(props)
        this.method = this.props.addChick
        this.removeMethod = this.props.removeChick
        this.status  = `wait_for_drag wait_for_drag-${this.props.name}`
        this.state ={
        status: this.status,
        product:0,
        food:0
       } 
       this.generateControlRef = React.createRef();
       this.foodControlRef = React.createRef();
       this.controlElements = [<Button key = {uniqid()} className="btn-info feed" onClick={this.feed}>{buttontext.ru.feed}</Button>
       ,<Button key = {uniqid()} className="btn-info harvest" onClick={this.harvest}>{buttontext.ru.pick}</Button>
      ,<div className = "food__indicator" key = {uniqid()} ref = {this.foodControlRef}></div>
       ,<div className = "generate__indicator" key = {uniqid()}><div className = "scale" ref = {this.generateControlRef}></div></div>]
       this.sumProduct = 0;
       this.timeToGenerate = upgrade.chicken.timeToGenerate
       this.cost = buyPrice.chicken;
       this.sellPrice = sellPrice.chicken;
       this.contentLocal = names.ru.chicken
    }

    dealOpportunity = () => this.props.money < this.cost ? false : true 


    upgrade = () => this.timeToGenerate = this.sumProduct % upgrade.chicken.threshold === 0 ? this.timeToGenerate - upgrade.chicken.minus
                    : this.timeToGenerate
    
    control = () => this.timeToGenerate = this.timeToGenerate < upgrade.chicken.limit ? upgrade.chicken.limit : this.timeToGenerate              

    stateActions = () => {
      this.setState((state) => {
        return {food: state.food -1, product:state.product + 1}
      })
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
      commonFood: state.generators.food,
      money: state.trades.money
    };
    return props;
  };

  const actionCreators = {
    addChick: draggedActions.addChick,
    removeChick: draggedActions.removeChick,
    feed: generators.feed,
    harvester: generators.putEggs,
    spend: trades.discrementmoney,
    getProfit: trades.incrementmoney,
  };
  
  export default connect(mapStateToProps, actionCreators)(Chicken);