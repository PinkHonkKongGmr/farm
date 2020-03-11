import React from 'react'
import { connect } from 'react-redux';
import * as actionGameObjects from '../../../store/gameObjects/actions';
import { Button } from 'reactstrap';
import './cells.scss'

class Cell extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            cellClass:'red',
        }
        this.ref = React.createRef()
    }



    onDragOverHandler =(e)=>{
        e.preventDefault();
    }

    onDropHandler = (e)=>{
        const  {setCurrentId, setPosition} = this.props

       const id =  e.dataTransfer
        .getData('id');
       
       const content = e.dataTransfer
        .getData('content')

        if (content !==this.state.cellClass){
            this.setState({cellClass:content})
            setCurrentId(id)
            setPosition({left:this.ref.current.getBoundingClientRect().left,
                top:this.ref.current.getBoundingClientRect().top})
        }
    }
 

    render(){
        console.log(this.state.dragger)
            return <div className='red' onDrop = {this.onDropHandler} onDragOver = {this.onDragOverHandler} ref ={this.ref}></div>
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
    setPosition: actionGameObjects.setPosition
  };
  
  export default connect(mapStateToProps, actionCreators)(Cell);

