import React from 'react'
import arrayCreator from '../../../helpers/arrayCreator.js'
import Cell from '../../gameObjects/cells/cell.js'
import './field.scss'
import { Button } from 'reactstrap';
import {connect} from 'react-redux'
import * as actionGameObjects from '../../../store/gameObjects/actions';
import * as trades from '../../../store/trades/actions';
import uniqid from 'uniqid'


class FarmField extends React.Component{
    constructor(props){
        super(props);
        this.cells = arrayCreator(this.props.cellCount).map((el,ind)=><Cell key={ind} ind={ind}></Cell>)
    }

    buyCell = () =>{
        if(this.props.cash > 999)
       { let newkye= uniqid()
        const {addCell, spend} = this.props
        spend(1000);
        this.cells = [...this.cells,  <Cell key={newkye} ind={newkye}></Cell>]
        addCell()
        this.props.noCellsToAdd();}
    }

    render(){
        
       if(this.props.cellToRemove) 
         {
            this.cells = this.cells.filter((cell)=> cell.props.ind !== this.props.cellToRemoveInd)
        }   
        this.props.cellToRemoveOff()
        return <div className='field'>{this.cells}
            <Button onClick ={this.buyCell}>А не прикупить ли мне земли?</Button>
        </div>
    }
}

const mapStateToProps =state =>{
    const props ={
       cellCount: state.gameObjects.cellCount,
       cellToRemove: state.gameObjects.cellToRemove,
       cellToRemoveInd: state.gameObjects.cellToRemoveInd,
       cellToAdd: state.gameObjects.cellToAdd,
       cash: state.trades.money
   }
   return props
}


const actionCreators = {
    addCell: actionGameObjects.addCell,
    spend: trades.discrementmoney,
    cellToRemoveOff: actionGameObjects.cellToRemoveOff,
    noCellsToAdd: actionGameObjects.noCellsToAdd
  };

export default connect(mapStateToProps, actionCreators)(FarmField)