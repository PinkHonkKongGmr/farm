import React from 'react'
import uniqid from 'uniqid'




class Drugger extends React.Component{
    constructor(props){
        super(props)
        this.fixed = false
        this.position = this.props.startPosition
        this.id = uniqid()
        this.method = null;
        this.state ={drugged:false}
        this.state.status = 'wait_for_drag'
        this.state.harvest = 0
    }

    onStart= (e)=>{
        e.dataTransfer
        .setData('id', this.id)
        e.dataTransfer
        .setData('content', `${this.props.name}_inside`);
        
    }

    onDragEndHandler = () => {
        if(this.props.id === this.id && !this.state.drugged){
            this.setState({drugged:true, status:'drugged'})
            this.position = this.props.position
            this.method()
            this.generator()       
        }
    }

    onClickHandler =()=>{
            this.props.harvester(this.state.harvest)
            this.setState({harvest:0})
    }

    render(){   
        const classNames = `${this.props.name} ${this.state.status}`
        return <div className ={classNames} 
            draggable={true} 
            style ={{top:this.position['top'], left:this.position['left']}}
            onDragStart={this.onStart} 
            onDragEnd={this.onDragEndHandler} 
            onClick ={this.onClickHandler}
            ref ={this.refToDrugger}
        >
        <div>{this.props.product} {this.state.harvest}</div>
        </div>
    }

}

export default Drugger


