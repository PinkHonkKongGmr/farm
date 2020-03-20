import React from 'react'
import {connect} from 'react-redux'
import { Button } from 'reactstrap';
import * as trades from '../../../store/trades/actions';
import './goldMine.scss' 



class GoldMine extends React.Component{

    constructor(props){
        super(props)
        this.timeSeconds = null;
        this.timeMinutes = null;
        this.prevTimeSeconds = new Date().getSeconds()
        this.prevTimeMinutes = new Date().getMinutes()
        this.best = 0;
        this.max = this.props.money
        this.state ={
            profitPerTime:0,
            money:this.props.money,
            best:0
        }
    }

    


    declarate =() =>{
        const {spend} = this.props;
        spend(this.props.money * 0.12)
        this.timeSeconds = new Date().getSeconds()
        this.timeMinutes = new Date().getMinutes()
        const seconds = (this.timeSeconds - this.prevTimeSeconds) / 60;
        const minutes = (this.timeMinutes - this.prevTimeMinutes + seconds).toFixed(2)
        this.setState({profitPerTime:(this.props.money - this.state.money) / minutes})
        this.setState({money: this.props.money})
        this.prevTimeSeconds = this.timeSeconds
        this.prevTimeMinutes = this.timeMinutes
    }


    render(){
        const profitPerTime = this.state.profitPerTime === -Infinity ? 'беда с бошкой' : this.state.profitPerTime.toFixed(2)
        this.best = this.best > this.state.profitPerTime ? this.best : this.state.profitPerTime.toFixed(2)
        this.max = this.max > this.props.money ? this.max : this.props.money
        let datClass = this.props.money > 0 ? 'green val' : 'red val'
        return <div className = "value">
            Голда: <span className = {datClass}>{this.props.money.toFixed(0)}</span>
            <div className ='statistic'>
                <div className = 'max'>Максимальный баланс: {this.max}</div>
                <div className = 'profit'>Заработано\мин: {profitPerTime}</div>
                <div className = 'best'>лучший показатель: {this.best}</div>
                <Button className ='btnDeclr' onClick={this.declarate}>Декларировать</Button>
            </div>
        </div>
    }

}

const mapStateToProps =state =>{
     const props ={
        money: state.trades.money
    }
    return props
}

const actionCreators = {
    spend: trades.discrementmoney,
  };

export default connect(mapStateToProps, actionCreators)(GoldMine)