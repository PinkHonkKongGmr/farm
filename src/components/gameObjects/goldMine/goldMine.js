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
            money:1200,
            best:0
        }
    }

    // componentDidMount (){
    //     setInterval(
    //         ()=>{
    //             if(this.state.max < this.props.money)
    //             {let max = this.props.money;
    //             this.setState({max})}},
    //         1000)

    //     setInterval(
    //          ()=>{
    //             this.tenSecondsProfit = this.props.money - this.privTSP 
    //             this.privTSP = this.tenSecondsProfit
    //             if(this.tenSecondsProfit > this.state.maxPerTenMinutes){
    //                 this.setState({maxPerTenMinutes:this.tenSecondsProfit})
    //             }
    //         },
    //          10000)   
    // }



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
        this.best = this.best > this.state.profitPerTime ? this.best : this.state.profitPerTime.toFixed(2)
        this.max = this.max > this.props.money ? this.max : this.props.money
        let datClass = this.props.money > 0 ? 'green val' : 'red val'
        return <div className = "value">
            Голда: <span className = {datClass}>{this.props.money}</span>
            <div className ='statistic'>
                <div className = 'max'>Максимальный баланс: {this.max}</div>
                <div className = 'profit'>Заработано\мин: {this.state.profitPerTime.toFixed(2)}</div>
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