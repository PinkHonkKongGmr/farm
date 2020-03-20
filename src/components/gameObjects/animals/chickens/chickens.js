import React from 'react'
import Drugger from '../../../../drugInheritance/drugger/index.js'
import { Button } from 'reactstrap';
import './chickens.scss' 
import { connect } from 'react-redux';
import * as draggedActions from '../../../../store/dragged/actions';
import * as generators from '../../../../store/generators/actions';
import * as trades from '../../../../store/trades/actions';
import  {sellPrice} from '../../../../conts/sold.js';
import  {buyPrice} from '../../../../conts/buy.js';
import  {upgrade} from '../../../../conts/upgrade.js';

class Chicken extends Drugger{
    constructor(props){
        super(props)
        this.method = this.props.addChick
        this.removeMethod = this.props.removeChick
        this.status  = `wait_for_drag wait_for_drag-${this.props.name}`
        this.state ={
        controlElements:[<Button key = {this.props.ind} className="btn-info feed" onClick={this.feed}>Покормиц</Button>
                        ,<Button key = {this.props.ind + 'i'} className="btn-info harvest" onClick={this.harvest}>Собрать</Button>],
        status: this.status,
        product:0,
        food:0
       } 
       this.sumProduct = 0;
       this.timeToGenerate = upgrade.chicken.timeToGenerateStart
       this.cost = buyPrice.chicken;
       this.sellPrice = sellPrice.chicken;
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