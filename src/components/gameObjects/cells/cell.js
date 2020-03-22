import React from 'react'
import { connect } from 'react-redux';
import * as actionGameObjects from '../../../store/gameObjects/actions';
import * as trades from '../../../store/trades/actions';
import  {buttontext} from '../../../consts/buttontext.js';
import { Button } from 'reactstrap';
import './cells.scss';



class Cell extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            droped:false,
            mountedId:null,
            buttonSatus: 'hidden',
            cellClass:'cell empty'
        }
        this.content = null
        this.contentLocal = null
        this.ref = React.createRef()
    }


    onDragOverHandler =(e)=>{
        e.preventDefault();
    }

    deleteDrager =() =>{
        const  {removeDrag} = this.props
        removeDrag(this.state.mountedId)
        this.setState({droped:false, buttonSatus:'hidden', cellClass:'cell empty'})
    }

    onDropHandler = (e)=>{
        const  {setCurrentId, setCell} = this.props

       const id =  e.dataTransfer
        .getData('id');

        this.content =  e.dataTransfer
        .getData('content');

        this.contentLocal =  e.dataTransfer
        .getData('contentLocal');
       
        const cellClass = `${this.content}`

        if (!this.state.droped){
            this.setState({mountedId:id, droped:true,buttonSatus:'shown', cellClass: `cell ${cellClass}`})
            setCurrentId(id)
            setCell(this.ref.current)
        }
    }

    sold = () =>{
        const {getProfit, removeCell, cellToRemoveOn} = this.props
        getProfit(500);
        removeCell(this.props.ind);
        cellToRemoveOn();
        


    }
 

    render(){
            const tradeButton = this.state.droped ? null : <Button className = 'sell__cell' onClick = {this.sold}>{buttontext.ru.soldLand}</Button>
            const soldContent = this.state.cellClass.indexOf('rye') === -1 ? `${buttontext.ru.soldContent} ${this.contentLocal}`
            : `${buttontext.ru.deleteRye}`
            return <div className= {this.state.cellClass} onDrop = {this.onDropHandler} onDragOver = {this.onDragOverHandler} ref ={this.ref}>
                <Button onClick={this.deleteDrager} className={this.state.buttonSatus}>{soldContent}</Button>  
                {tradeButton } 
            </div>
    }
}

const mapStateToProps = state => {
    const props = {
      chickCount: state.dragged.chickens,
      ryeCount: state.dragged.rye,
    };
    return props;
  };
  
  const actionCreators = {
    setCurrentId: actionGameObjects.setCurrentId,
    setCell: actionGameObjects.setCell,
    removeDrag: actionGameObjects.removeDrag,
    getProfit: trades.incrementmoney,
    removeCell: actionGameObjects.removeCell,
    cellToRemoveOn: actionGameObjects.cellToRemoveOn
  };
  
  export default connect(mapStateToProps, actionCreators)(Cell);

