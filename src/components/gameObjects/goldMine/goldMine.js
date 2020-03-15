import React from 'react'
import {connect} from 'react-redux'
import './goldMine.scss' 



class GoldMine extends React.Component{

    constructor(props){
        super(props)
        this.i =1;
        this.tenSecondsProfit = 0;
        this.privTSP = 0;
        this.state ={
            max:0,
            med:0,
            cur:0,
            maxPerTenMinutes:0
        }
    }

    componentDidMount (){
        setInterval(
            ()=>{
                if(this.state.max < this.props.money)
                {let max = this.props.money;
                this.setState({max})}},
            1000)

        setInterval(
             ()=>{
                this.tenSecondsProfit = this.props.money - this.privTSP 
                this.privTSP = this.tenSecondsProfit
                if(this.tenSecondsProfit > this.state.maxPerTenMinutes){
                    this.setState({maxPerTenMinutes:this.tenSecondsProfit})
                }
            },
             10000)   
    }

    render(){

        let datClass = this.props.money > 0 ? 'green val' : 'red val'
        return <div className = "value">
            Голда: <span className = {datClass}>{this.props.money}</span>
            <div className ='statistic'>
                <div className ='max'>Максимальный баланс: {this.state.max}</div>
                <div className = 'med'>Средний баланс: {this.state.med}</div>
                <div className = 'profit'>Максимально заработано за 10 сек: {this.tenSecondsProfit}</div>
                <div className = 'cur'>Заработано за последние 10 сек: {this.state.cur}</div>
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

export default connect(mapStateToProps)(GoldMine)