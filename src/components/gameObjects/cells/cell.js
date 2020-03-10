import React from 'react'
import { connect } from 'react-redux';
import * as actionCells from '../../../store/cell/actions';
import * as generatorsCells from '../../../store/generators/actions';
import './cells.scss'

class Cell extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            cellClass:'red',
            harvest:0,
            eggs:0,
            milk:0
        }
    }

    componentDidMount(){
        setInterval(()=>{
            if(this.state.harvest===0 && this.state.cellClass === 'rye'){
                this.setState({harvest:1})
            }
        },10000)
    }

    onDragOverHandler =(e)=>{
        e.preventDefault();
    }

    onDropHandler = (e)=>{
        const  {addChick, addRye} = this.props

       const content =  e.dataTransfer
        .getData('content')
        if (content ==='chicken' && this.state.cellClass!=='green'){
             addChick();
            this.setState({cellClass:'green'})
        }
        if (content ==='rye' && this.state.cellClass!=='rye'){
            addRye();
           this.setState({cellClass:'rye'})
       }
    }

    onClickHandler =()=>{
        if(this.state.cellClass === 'rye'){
            this.props.harvester(this.state.harvest)
            this.setState({harvest:0})
        }
    }

    render(){
        let cellContent = null;
        if(this.state.cellClass === 'rye'){
        cellContent =<div>урожай: {this.state.harvest}</div>
        }
        if(this.state.cellClass === 'chicken'){
            cellContent =<div>ики: {this.state.eggs}<button></button></div>
            }
        return <div className = {this.state.cellClass} onDragOver ={this.onDragOverHandler} onDrop={this.onDropHandler}
         onClick ={this.onClickHandler}>{cellContent}</div>
       
    }
}

const mapStateToProps = state => {
    const props = {
      chickCount: state.cells.chickens,
      ryeCount: state.cells.rye,
    };
    return props;
  };
  
  const actionCreators = {
    addChick: actionCells.addChick,
    addRye: actionCells.addRye,
    harvester: generatorsCells.harvester,
  };
  
  export default connect(mapStateToProps, actionCreators)(Cell);

