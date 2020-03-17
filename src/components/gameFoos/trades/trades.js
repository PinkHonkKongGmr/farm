import React from 'react'
import { connect } from 'react-redux'
import * as generators from '../../../store/generators/actions';
import * as trades from '../../../store/trades/actions';
import { Button } from 'reactstrap';
import './trades.scss'

class Trades extends React.Component{
    constructor(props){
        super(props)

    }

    soldEggs =() =>{
        const {resetEggs, sell} = this.props
        resetEggs();
        sell(6 * this.props.eggs)
    }
    soldMilk =() =>{
        const {resetMilk, sell} = this.props
        sell(15 * this.props.milk)
        resetMilk();
    }

    render (){
        return <div className="sellBtn_wrapper">
            <Button className ='sellBtn btnEggs' onClick={this.soldEggs}>Продать ики </Button>
            <Button className ='sellBtn btnMilk' onClick={this.soldMilk}>Продать молоко</Button>
        </div>
    }
}

const mapStateToProps = state => {
    const props = {
        money: state.trades.money,
        eggs: state.generators.eggs,
        milk: state.generators.milk,
    };
    return props;
  };
  
  const actionCreators = {
    resetEggs: generators.resetEggs,
    resetMilk: generators.resetMilk,
    sell: trades.incrementmoney
  };

export default connect(mapStateToProps, actionCreators)(Trades);