import React from 'react'
import { connect } from 'react-redux';
import * as actionCells from '../../../store/cell/actions';
import './cells.scss'

class Cell extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            cellClass:'red'
        }
    }

    onDragOverHandler =(e)=>{
        e.preventDefault();
    }

    onDropHandler = (e)=>{
        const  {addChick} = this.props

       const animal =  e.dataTransfer
        .getData('animal')
        if (animal ==='chicken'){

             addChick();
             console.log(this.props.chickCount)
            this.setState({cellClass:'green'})
        }
    }

    render(){
        
        return <div className = {this.state.cellClass} onDragOver ={this.onDragOverHandler} onDrop={this.onDropHandler}></div>
       
    }
}

const mapStateToProps = state => {
    const props = {
      chickCount: state.cells.chickens,
    };
    return props;
  };
  
  const actionCreators = {
    addChick: actionCells.addChick,
  };
  
  export default connect(mapStateToProps, actionCreators)(Cell);

